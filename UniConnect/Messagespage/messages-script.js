// Sample Users and Conversations Data
const allUsers = [
    { id: 1, name: 'Ahmed Hassan', initials: 'AH' },
    { id: 2, name: 'Sarah Khan', initials: 'SK' },
    { id: 3, name: 'Ali Raza', initials: 'AR' },
    { id: 4, name: 'Fatima Ahmed', initials: 'FA' },
    { id: 5, name: 'Hassan Ali', initials: 'HA' },
    { id: 6, name: 'Zainab Mohammad', initials: 'ZM' },
    { id: 7, name: 'Omar Farooq', initials: 'OF' },
    { id: 8, name: 'Aisha Malik', initials: 'AM' }
];

let conversations = [
    {
        id: 1,
        userId: 1,
        userName: 'Ahmed Hassan',
        userInitials: 'AH',
        lastMessage: 'Hey, how are you doing?',
        lastTime: '2h ago',
        unread: 2,
        messages: [
            { id: 1, text: 'Hi! How is the project going?', own: false, time: '10:30 AM' },
            { id: 2, text: 'Great! Almost done with the first phase', own: true, time: '10:35 AM' },
            { id: 3, text: 'That sounds awesome!', own: false, time: '10:40 AM' },
            { id: 4, text: 'Hey, how are you doing?', own: false, time: '11:00 AM' }
        ]
    },
    {
        id: 2,
        userId: 2,
        userName: 'Sarah Khan',
        userInitials: 'SK',
        lastMessage: 'See you at the event!',
        lastTime: '1h ago',
        unread: 0,
        messages: [
            { id: 1, text: 'Are you coming to the event tonight?', own: false, time: '9:00 AM' },
            { id: 2, text: 'Yes, definitely!', own: true, time: '9:15 AM' },
            { id: 3, text: 'Great! See you there', own: false, time: '9:20 AM' },
            { id: 4, text: 'See you at the event!', own: false, time: '10:00 AM' }
        ]
    },
    {
        id: 3,
        userId: 3,
        userName: 'Ali Raza',
        userInitials: 'AR',
        lastMessage: 'Thanks for the help earlier',
        lastTime: '30m ago',
        unread: 1,
        messages: [
            { id: 1, text: 'Can you help me with the assignment?', own: false, time: '11:00 AM' },
            { id: 2, text: 'Sure, I can help', own: true, time: '11:10 AM' },
            { id: 3, text: 'Thanks! I really appreciate it', own: false, time: '11:15 AM' },
            { id: 4, text: 'Thanks for the help earlier', own: false, time: '11:30 AM' }
        ]
    }
];

let currentConversationId = null;

// DOM Elements
const conversationsList = document.getElementById('conversationsList');
const emptyState = document.getElementById('emptyState');
const chatSection = document.getElementById('chatSection');
const chatHeader = document.getElementById('chatHeader');
const messagesContainer = document.getElementById('messagesContainer');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const newMessageBtn = document.getElementById('newMessageBtn');
const newMessageModal = document.getElementById('newMessageModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const recipientInput = document.getElementById('recipientInput');
const userList = document.getElementById('userList');
const searchInput = document.getElementById('searchInput');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadConversations();
    attachEventListeners();
    loadFromLocalStorage();
});

// Attach event listeners
function attachEventListeners() {
    sendBtn.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    newMessageBtn.addEventListener('click', openNewMessageModal);
    closeModalBtn.addEventListener('click', closeNewMessageModal);
    recipientInput.addEventListener('input', filterUsers);
    searchInput.addEventListener('input', searchConversations);
    newMessageModal.addEventListener('click', closeModalOnOutside);
}

// Load conversations in sidebar
function loadConversations() {
    conversationsList.innerHTML = '';

    conversations.forEach(conversation => {
        const div = document.createElement('div');
        div.className = 'conversation-item';
        if (conversation.id === currentConversationId) {
            div.classList.add('active');
        }

        div.innerHTML = `
            <div class="conversation-avatar">${conversation.userInitials}</div>
            <div class="conversation-info">
                <div class="conversation-name">${conversation.userName}</div>
                <div class="conversation-preview">${conversation.lastMessage}</div>
            </div>
            <div class="conversation-time">${conversation.lastTime}</div>
        `;

        div.addEventListener('click', () => selectConversation(conversation.id));
        conversationsList.appendChild(div);
    });
}

// Select conversation
function selectConversation(conversationId) {
    currentConversationId = conversationId;
    const conversation = conversations.find(c => c.id === conversationId);

    // Update active state
    document.querySelectorAll('.conversation-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelectorAll('.conversation-item')[conversations.findIndex(c => c.id === conversationId)].classList.add('active');

    // Show chat section
    emptyState.style.display = 'none';
    chatSection.style.display = 'flex';

    // Update chat header
    chatHeader.innerHTML = `
        <div class="chat-user-avatar">${conversation.userInitials}</div>
        <div class="chat-user-info">
            <h3>${conversation.userName}</h3>
            <div class="chat-user-status">Active now</div>
        </div>
    `;

    // Load messages
    displayMessages(conversation.messages);
    messageInput.focus();
    saveToLocalStorage();
}

// Display messages
function displayMessages(messages) {
    messagesContainer.innerHTML = '';

    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.own ? 'own' : ''}`;

        if (!message.own) {
            const conversation = conversations.find(c => c.id === currentConversationId);
            messageDiv.innerHTML = `
                <div class="message-avatar">${conversation.userInitials}</div>
                <div class="message-content">
                    <div class="message-text">${escapeHtml(message.text)}</div>
                    <div class="message-time">${message.time}</div>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <div class="message-text">${escapeHtml(message.text)}</div>
                    <div class="message-time">${message.time}</div>
                </div>
            `;
        }

        messagesContainer.appendChild(messageDiv);
    });

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Send message
function sendMessage() {
    const text = messageInput.value.trim();
    if (!text || !currentConversationId) return;

    const conversation = conversations.find(c => c.id === currentConversationId);
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    conversation.messages.push({
        id: conversation.messages.length + 1,
        text: text,
        own: true,
        time: time
    });

    // Update last message
    conversation.lastMessage = text;
    conversation.lastTime = 'now';

    // Clear input
    messageInput.value = '';

    // Update display
    displayMessages(conversation.messages);
    loadConversations();
    saveToLocalStorage();

    // Simulate reply (optional)
    setTimeout(() => {
        simulateReply(conversation);
    }, 1500);
}

// Simulate reply from user
function simulateReply(conversation) {
    const replies = [
        'That sounds great!',
        'I agree with you',
        'Absolutely!',
        'Let me think about that',
        'Sounds good to me',
        'Thanks for letting me know',
        'Got it!',
        'Will do!'
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    conversation.messages.push({
        id: conversation.messages.length + 1,
        text: randomReply,
        own: false,
        time: time
    });

    conversation.lastMessage = randomReply;
    conversation.lastTime = 'now';

    displayMessages(conversation.messages);
    loadConversations();
    saveToLocalStorage();
}

// Search conversations
function searchConversations(e) {
    const searchTerm = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.conversation-item');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
    });
}

// Open new message modal
function openNewMessageModal() {
    newMessageModal.classList.add('show');
    recipientInput.focus();
    displayUsers();
}

// Close new message modal
function closeNewMessageModal() {
    newMessageModal.classList.remove('show');
    recipientInput.value = '';
}

// Close modal on outside click
function closeModalOnOutside(e) {
    if (e.target === newMessageModal) {
        closeNewMessageModal();
    }
}

// Display all users
function displayUsers() {
    userList.innerHTML = '';

    const availableUsers = allUsers.filter(user => 
        !conversations.some(c => c.userId === user.id)
    );

    availableUsers.forEach(user => {
        const div = document.createElement('div');
        div.className = 'user-item';
        div.innerHTML = `
            <div class="user-avatar">${user.initials}</div>
            <div class="user-name">${user.name}</div>
        `;

        div.addEventListener('click', () => startConversationWith(user));
        userList.appendChild(div);
    });
}

// Filter users
function filterUsers(e) {
    const searchTerm = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.user-item');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
    });
}

// Start conversation with user
function startConversationWith(user) {
    const newConversation = {
        id: conversations.length + 1,
        userId: user.id,
        userName: user.name,
        userInitials: user.initials,
        lastMessage: 'Conversation started',
        lastTime: 'now',
        unread: 0,
        messages: [
            { id: 1, text: `Hi ${user.name}!`, own: true, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }
        ]
    };

    conversations.push(newConversation);
    closeNewMessageModal();
    loadConversations();
    selectConversation(newConversation.id);
    saveToLocalStorage();
}

// Utility function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Save to localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem('uniConnectConversations', JSON.stringify(conversations));
        localStorage.setItem('uniConnectCurrentConversation', currentConversationId);
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}

// Load from localStorage
function loadFromLocalStorage() {
    try {
        const savedConversations = localStorage.getItem('uniConnectConversations');
        const savedCurrentId = localStorage.getItem('uniConnectCurrentConversation');

        if (savedConversations) {
            conversations = JSON.parse(savedConversations);
            loadConversations();
        }

        if (savedCurrentId) {
            const conversationId = parseInt(savedCurrentId);
            if (conversations.find(c => c.id === conversationId)) {
                selectConversation(conversationId);
            }
        }
    } catch (e) {
        console.error('Error loading from localStorage:', e);
    }
}
