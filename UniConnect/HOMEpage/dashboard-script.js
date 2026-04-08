// UniConnect Dashboard - Feed Interactions

document.addEventListener('DOMContentLoaded', function() {
    initializePostCreation();
    initializePostActions();
    initializeUserMenu();
    initializeMobileNav();
    loadMorePosts();
});

// ===== Post Creation =====
function initializePostCreation() {
    const postInput = document.getElementById('postInput');
    const postBtn = document.querySelector('.post-btn');
    const addPhotoBtn = document.querySelector('.add-photo-btn');

    if (postInput && postBtn) {
        // Focus effect
        postInput.addEventListener('focus', function() {
            this.parentElement.parentElement.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
        });

        postInput.addEventListener('blur', function() {
            this.parentElement.parentElement.style.boxShadow = '';
        });

        // Post button click
        postBtn.addEventListener('click', function() {
            const content = postInput.value.trim();
            if (content) {
                createNewPost(content);
                postInput.value = '';
                showNotification('Post published successfully!', 'success');
            } else {
                showNotification('Please write something to post', 'warning');
            }
        });

        // Enter to post (Ctrl/Cmd + Enter)
        postInput.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                postBtn.click();
            }
        });
    }

    // Add photo functionality
    if (addPhotoBtn) {
        addPhotoBtn.addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = function(e) {
                const file = e.target.files[0];
                if (file) {
                    showNotification('Photo selected: ' + file.name, 'success');
                    // In production, you would upload the file here
                }
            };
            input.click();
        });
    }
}

// ===== Create New Post =====
function createNewPost(content) {
    const feedPosts = document.querySelector('.feed-posts');
    const newPost = document.createElement('article');
    newPost.className = 'post-card';
    
    const now = new Date();
    const timeAgo = 'Just now';
    
    newPost.innerHTML = `
        <div class="post-header">
            <img src="https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff" alt="You" class="post-avatar">
            <div class="post-author-info">
                <div class="author-name">
                    You
                    <span class="user-badge student">STUDENT</span>
                </div>
                <div class="post-time">${timeAgo}</div>
            </div>
            <button class="post-menu-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                </svg>
            </button>
        </div>
        
        <div class="post-content">
            <p>${escapeHtml(content)}</p>
        </div>
        
        <div class="post-actions">
            <button class="action-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span>Like</span>
            </button>
            <button class="action-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Comment</span>
            </button>
            <button class="action-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                <span>Share</span>
            </button>
        </div>
    `;
    
    feedPosts.insertBefore(newPost, feedPosts.firstChild);
    
    // Re-initialize action buttons for new post
    initializePostActions();
    
    // Scroll to new post
    newPost.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== Post Actions (Like, Comment, Share) =====
function initializePostActions() {
    // Like buttons
    const likeButtons = document.querySelectorAll('.action-btn:has(path[d*="20.84"])');
    likeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('liked');
            
            const svg = this.querySelector('svg');
            if (this.classList.contains('liked')) {
                svg.style.fill = 'currentColor';
                showNotification('Post liked!', 'success');
            } else {
                svg.style.fill = 'none';
                showNotification('Like removed', 'info');
            }
        });
    });

    // Comment buttons
    const commentButtons = document.querySelectorAll('.action-btn:has(path[d*="21 15"])');
    commentButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            showNotification('Comment feature coming soon!', 'info');
            // In production, this would open a comment section
        });
    });

    // Share buttons
    const shareButtons = document.querySelectorAll('.action-btn:has(circle[cx="18"])');
    shareButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            showShareMenu(this);
        });
    });

    // Post menu buttons
    const menuButtons = document.querySelectorAll('.post-menu-btn');
    menuButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            showPostMenu(this);
        });
    });
}

// ===== Share Menu =====
function showShareMenu(button) {
    // Remove existing menu
    const existingMenu = document.querySelector('.share-menu');
    if (existingMenu) {
        existingMenu.remove();
        return;
    }

    const menu = document.createElement('div');
    menu.className = 'share-menu';
    menu.innerHTML = `
        <button class="share-option">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Share to Facebook
        </button>
        <button class="share-option">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Share to Twitter
        </button>
        <button class="share-option">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
            Copy Link
        </button>
    `;

    // Position menu
    const rect = button.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.top = rect.bottom + 5 + 'px';
    menu.style.right = window.innerWidth - rect.right + 'px';
    
    document.body.appendChild(menu);

    // Add menu styles dynamically
    if (!document.getElementById('share-menu-styles')) {
        const style = document.createElement('style');
        style.id = 'share-menu-styles';
        style.textContent = `
            .share-menu {
                background: white;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                padding: 8px;
                z-index: 1000;
                min-width: 200px;
            }
            
            .share-option {
                width: 100%;
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px 16px;
                border: none;
                background: transparent;
                color: #1f2937;
                font-size: 0.9rem;
                font-weight: 500;
                cursor: pointer;
                border-radius: 8px;
                transition: all 0.2s;
                text-align: left;
            }
            
            .share-option:hover {
                background: #f3f4f6;
            }
            
            .post-menu {
                background: white;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                padding: 8px;
                z-index: 1000;
                min-width: 180px;
            }
            
            .menu-option {
                width: 100%;
                padding: 12px 16px;
                border: none;
                background: transparent;
                color: #1f2937;
                font-size: 0.9rem;
                font-weight: 500;
                cursor: pointer;
                border-radius: 8px;
                transition: all 0.2s;
                text-align: left;
            }
            
            .menu-option:hover {
                background: #f3f4f6;
            }
            
            .menu-option.danger {
                color: #ef4444;
            }
            
            .menu-option.danger:hover {
                background: #fee2e2;
            }
        `;
        document.head.appendChild(style);
    }

    // Handle clicks
    menu.querySelectorAll('.share-option').forEach(option => {
        option.addEventListener('click', function() {
            const text = this.textContent.trim();
            if (text.includes('Copy Link')) {
                navigator.clipboard.writeText(window.location.href);
                showNotification('Link copied to clipboard!', 'success');
            } else {
                showNotification('Sharing to ' + text.split(' to ')[1], 'info');
            }
            menu.remove();
        });
    });

    // Close menu when clicking outside
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 10);
}

// ===== Post Menu =====
function showPostMenu(button) {
    const existingMenu = document.querySelector('.post-menu');
    if (existingMenu) {
        existingMenu.remove();
        return;
    }

    const menu = document.createElement('div');
    menu.className = 'post-menu';
    menu.innerHTML = `
        <button class="menu-option">Save Post</button>
        <button class="menu-option">Hide Post</button>
        <button class="menu-option">Report Post</button>
        <button class="menu-option danger">Delete Post</button>
    `;

    const rect = button.getBoundingClientRect();
    menu.style.position = 'fixed';
    menu.style.top = rect.bottom + 5 + 'px';
    menu.style.right = window.innerWidth - rect.right + 'px';
    
    document.body.appendChild(menu);

    menu.querySelectorAll('.menu-option').forEach(option => {
        option.addEventListener('click', function() {
            showNotification(this.textContent + ' clicked', 'info');
            menu.remove();
        });
    });

    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 10);
}

// ===== User Menu =====
function initializeUserMenu() {
    const userMenu = document.querySelector('.user-menu');
    if (userMenu) {
        userMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            showUserDropdown(this);
        });
    }
}

function showUserDropdown(element) {
    const existingDropdown = document.querySelector('.user-dropdown');
    if (existingDropdown) {
        existingDropdown.remove();
        return;
    }

    const dropdown = document.createElement('div');
    dropdown.className = 'user-dropdown post-menu';
    dropdown.innerHTML = `
        <button class="menu-option">My Profile</button>
        <button class="menu-option">Settings</button>
        <button class="menu-option">Help & Support</button>
        <hr style="margin: 8px 0; border: none; border-top: 1px solid #e5e7eb;">
        <button class="menu-option">Logout</button>
    `;

    const rect = element.getBoundingClientRect();
    dropdown.style.position = 'fixed';
    dropdown.style.top = rect.bottom + 5 + 'px';
    dropdown.style.right = window.innerWidth - rect.right + 'px';
    
    document.body.appendChild(dropdown);

    dropdown.querySelectorAll('.menu-option').forEach(option => {
        option.addEventListener('click', function() {
            if (this.textContent === 'Logout') {
                showNotification('Logging out...', 'info');
                setTimeout(() => {
                    window.location.href = '../loginPage/index.php';
                }, 1000);
            } else {
                showNotification(this.textContent + ' clicked', 'info');
            }
            dropdown.remove();
        });
    });

    setTimeout(() => {
        document.addEventListener('click', function closeDropdown(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.remove();
                document.removeEventListener('click', closeDropdown);
            }
        });
    }, 10);
}

// ===== Mobile Navigation :change code =====
function initializeMobileNav() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            
            // ONLY block if it's #
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }

            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            const section = this.querySelector('span').textContent;
            showNotification('Navigating to ' + section, 'info');
        });
    });
}

// ===== Load More Posts (Infinite Scroll) =====
function loadMorePosts() {
    let loading = false;
    
    window.addEventListener('scroll', function() {
        if (loading) return;
        
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        
        if (scrollTop + clientHeight >= scrollHeight - 500) {
            loading = true;
            // Simulate loading more posts
            setTimeout(() => {
                console.log('Loading more posts...');
                loading = false;
            }, 1000);
        }
    });
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icons[type] || icons.info}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 80px;
                right: 20px;
                background: white;
                padding: 16px 24px;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                z-index: 10000;
                animation: slideIn 0.3s ease;
                max-width: 400px;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .notification-icon {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                flex-shrink: 0;
            }
            
            .notification-success { border-left: 4px solid #10b981; }
            .notification-success .notification-icon { background: #10b981; color: white; }
            .notification-error { border-left: 4px solid #ef4444; }
            .notification-error .notification-icon { background: #ef4444; color: white; }
            .notification-warning { border-left: 4px solid #f59e0b; }
            .notification-warning .notification-icon { background: #f59e0b; color: white; }
            .notification-info { border-left: 4px solid #3b82f6; }
            .notification-info .notification-icon { background: #3b82f6; color: white; }
            
            .notification-message {
                color: #1f2937;
                font-size: 0.95rem;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== Utility Functions =====
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

// ===== Join Club Buttons =====
document.querySelectorAll('.join-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent === 'Join') {
            this.textContent = 'Joined';
            this.style.background = '#10b981';
            showNotification('Successfully joined the club!', 'success');
        } else {
            this.textContent = 'Join';
            this.style.background = '';
            showNotification('Left the club', 'info');
        }
    });
});

// Console welcome message
console.log('%c🎓 UniConnect Dashboard ', 'background: #6366f1; color: white; font-size: 16px; padding: 8px;');
console.log('%cWelcome to your feed!', 'color: #6366f1; font-size: 12px;');
