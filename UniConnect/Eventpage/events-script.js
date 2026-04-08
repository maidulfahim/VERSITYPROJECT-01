// Events Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeEventFilters();
    initializeViewToggle();
    initializeEventRegistration();
    initializeSearch();
    initializeUserMenu();
    initializeCreateEvent();
    initializeCalendar();
});

// ===== Event Filters =====
function initializeEventFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter events
            eventCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.classList.add('fade-in');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('fade-in');
                }
            });

            // Show empty state if no events
            checkEmptyState();
        });
    });
}

// ===== View Toggle (Grid/List) =====
function initializeViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const eventsContainer = document.getElementById('eventsContainer');

    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const view = this.getAttribute('data-view');

            // Toggle view
            if (view === 'list') {
                eventsContainer.classList.add('list-view');
            } else {
                eventsContainer.classList.remove('list-view');
            }
        });
    });
}

// ===== Event Registration =====
function initializeEventRegistration() {
    const registerButtons = document.querySelectorAll('.event-register-btn');

    registerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const eventId = this.getAttribute('data-event-id');
            const isRegistered = this.classList.contains('registered');
            const action = isRegistered ? 'unregister' : 'register';
            
            // Disable button during request
            this.disabled = true;
            const originalText = this.textContent;
            this.textContent = 'Processing...';
            
            // Make AJAX request to PHP backend
            fetch('event-register-handler.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    event_id: eventId,
                    action: action
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    if (action === 'register') {
                        // Register
                        this.classList.add('registered');
                        this.textContent = 'Registered';
                        showNotification('Successfully registered for event!', 'success');
                        updateAttendeeCount(this, 1);
                    } else {
                        // Unregister
                        this.classList.remove('registered');
                        this.textContent = 'Register Now';
                        showNotification('Unregistered from event', 'info');
                        updateAttendeeCount(this, -1);
                    }
                } else {
                    // Show error message
                    showNotification(data.message || 'An error occurred', 'error');
                    this.textContent = originalText;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showNotification('Network error. Please try again.', 'error');
                this.textContent = originalText;
            })
            .finally(() => {
                // Re-enable button
                this.disabled = false;
            });
        });
    });
}

// ===== Update Attendee Count =====
function updateAttendeeCount(button, change) {
    const eventCard = button.closest('.event-card');
    const attendeesSpan = eventCard.querySelector('.event-attendees span');
    
    if (attendeesSpan) {
        const currentText = attendeesSpan.textContent;
        const currentCount = parseInt(currentText.match(/\d+/)[0]);
        const newCount = currentCount + change;
        attendeesSpan.textContent = `${newCount} attending`;
    }
}

// ===== Event Search =====
function initializeSearch() {
    const searchInput = document.getElementById('eventSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const eventCards = document.querySelectorAll('.event-card');

            eventCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();

                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });

            checkEmptyState();
        });
    }
}

// ===== Check Empty State =====
function checkEmptyState() {
    const eventsContainer = document.getElementById('eventsContainer');
    const visibleEvents = eventsContainer.querySelectorAll('.event-card:not(.hidden)');
    
    // Remove existing empty state
    const existingEmptyState = eventsContainer.querySelector('.empty-state');
    if (existingEmptyState) {
        existingEmptyState.remove();
    }

    // Add empty state if no visible events
    if (visibleEvents.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <h3>No Events Found</h3>
            <p>Try adjusting your filters or search query</p>
        `;
        eventsContainer.appendChild(emptyState);
    }
}

// ===== Event Card Click (View Details) =====
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking on register button
        if (e.target.classList.contains('event-register-btn')) {
            return;
        }
        
        const eventTitle = this.querySelector('h3').textContent;
        showEventDetails(this);
    });
});

// ===== Show Event Details Modal =====
function showEventDetails(eventCard) {
    const title = eventCard.querySelector('h3').textContent;
    const description = eventCard.querySelector('p').textContent;
    const date = eventCard.querySelector('.event-date-tag span').textContent;
    const location = eventCard.querySelector('.event-location span').textContent;
    const attendees = eventCard.querySelector('.event-attendees span').textContent;
    const category = eventCard.querySelector('.event-badge').textContent;
    const image = eventCard.querySelector('.event-image img').src;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'event-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <img src="${image}" alt="${title}" class="modal-image">
            <div class="modal-body">
                <span class="modal-badge">${category}</span>
                <h2>${title}</h2>
                <div class="modal-info">
                    <div class="modal-info-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>${date}</span>
                    </div>
                    <div class="modal-info-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>${location}</span>
                    </div>
                    <div class="modal-info-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        <span>${attendees}</span>
                    </div>
                </div>
                <p>${description}</p>
                <p>Join us for an amazing experience! This event is open to all students and will feature exciting activities, networking opportunities, and much more. Don't miss out on this chance to connect with fellow students and create lasting memories.</p>
                <div class="modal-actions">
                    <button class="btn-primary modal-register-btn">Register for Event</button>
                    <button class="btn-outline modal-share-btn">Share Event</button>
                </div>
            </div>
        </div>
    `;

    // Add modal styles
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .event-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.7);
                backdrop-filter: blur(4px);
            }
            
            .modal-content {
                position: relative;
                background: white;
                border-radius: 16px;
                max-width: 700px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
                animation: modalSlideIn 0.3s ease;
            }
            
            @keyframes modalSlideIn {
                from {
                    opacity: 0;
                    transform: translateY(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .modal-close {
                position: absolute;
                top: 16px;
                right: 16px;
                width: 40px;
                height: 40px;
                background: white;
                border: none;
                border-radius: 50%;
                font-size: 1.5rem;
                cursor: pointer;
                z-index: 10;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transition: all 0.2s;
            }
            
            .modal-close:hover {
                background: #f3f4f6;
                transform: rotate(90deg);
            }
            
            .modal-image {
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: 16px 16px 0 0;
            }
            
            .modal-body {
                padding: 32px;
            }
            
            .modal-badge {
                display: inline-block;
                padding: 6px 14px;
                border-radius: 50px;
                font-size: 0.75rem;
                font-weight: 700;
                text-transform: uppercase;
                background: #dbeafe;
                color: #1e40af;
                margin-bottom: 16px;
            }
            
            .modal-body h2 {
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 20px;
                color: #1f2937;
            }
            
            .modal-info {
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin-bottom: 24px;
                padding-bottom: 24px;
                border-bottom: 1px solid #e5e7eb;
            }
            
            .modal-info-item {
                display: flex;
                align-items: center;
                gap: 12px;
                color: #6b7280;
            }
            
            .modal-body p {
                color: #6b7280;
                line-height: 1.7;
                margin-bottom: 16px;
            }
            
            .modal-actions {
                display: flex;
                gap: 12px;
                margin-top: 32px;
            }
            
            .modal-register-btn,
            .modal-share-btn {
                flex: 1;
                padding: 14px 24px;
            }
            
            @media (max-width: 768px) {
                .modal-content {
                    max-height: 95vh;
                }
                
                .modal-body {
                    padding: 24px;
                }
                
                .modal-body h2 {
                    font-size: 1.5rem;
                }
                
                .modal-actions {
                    flex-direction: column;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(modal);

    // Close modal handlers
    modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
    modal.querySelector('.modal-overlay').addEventListener('click', () => modal.remove());
    
    // Register button
    modal.querySelector('.modal-register-btn').addEventListener('click', () => {
        showNotification('Successfully registered for event!', 'success');
        modal.remove();
    });
    
    // Share button
    modal.querySelector('.modal-share-btn').addEventListener('click', () => {
        showNotification('Share link copied to clipboard!', 'success');
    });
}

// ===== Create Event Modal =====
function initializeCreateEvent() {
    const createBtn = document.querySelector('.create-event-btn');
    
    if (createBtn) {
        createBtn.addEventListener('click', function() {
            showNotification('Create event feature coming soon!', 'info');
            // In production, this would open a create event form
        });
    }
}

// ===== Load More Events =====
const loadMoreBtn = document.querySelector('.load-more-btn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        this.textContent = 'Loading...';
        
        setTimeout(() => {
            showNotification('No more events to load', 'info');
            this.textContent = 'Load More Events';
        }, 1000);
    });
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
    dropdown.className = 'user-dropdown';
    dropdown.style.cssText = `
        position: fixed;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        padding: 8px;
        z-index: 1000;
        min-width: 180px;
    `;
    
    dropdown.innerHTML = `
        <button class="menu-option">My Profile</button>
        <button class="menu-option">My Events</button>
        <button class="menu-option">Settings</button>
        <hr style="margin: 8px 0; border: none; border-top: 1px solid #e5e7eb;">
        <button class="menu-option">Logout</button>
    `;

    const rect = element.getBoundingClientRect();
    dropdown.style.top = rect.bottom + 5 + 'px';
    dropdown.style.right = window.innerWidth - rect.right + 'px';
    
    document.body.appendChild(dropdown);

    dropdown.querySelectorAll('.menu-option').forEach(option => {
        option.style.cssText = `
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
        `;
        
        option.addEventListener('mouseover', function() {
            this.style.background = '#f3f4f6';
        });
        
        option.addEventListener('mouseout', function() {
            this.style.background = 'transparent';
        });
        
        option.addEventListener('click', function() {
            if (this.textContent === 'Logout') {
                window.location.href = '../loginPage/index.php';
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

// ===== Calendar Interaction =====
function initializeCalendar() {
    const calendarDays = document.querySelectorAll('.calendar-body span:not(:empty)');
    
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            const dayNumber = this.textContent;
            if (this.classList.contains('has-event')) {
                showNotification(`Events on February ${dayNumber}, 2026`, 'info');
            } else {
                showNotification(`No events on February ${dayNumber}`, 'info');
            }
        });
    });
}

// ===== Category Stats Click =====
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', function() {
        const categoryName = this.querySelector('.category-name').textContent.toLowerCase();
        const filterBtn = document.querySelector(`[data-filter="${categoryName}"]`);
        
        if (filterBtn) {
            filterBtn.click();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// ===== My Events Click =====
document.querySelectorAll('.my-event-item').forEach(item => {
    item.addEventListener('click', function() {
        const eventTitle = this.querySelector('h4').textContent;
        showNotification(`Opening ${eventTitle}...`, 'info');
    });
});

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
    
    notification.style.cssText = `
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
        border-left: 4px solid ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

console.log('%c Events Page Loaded ', 'background: #6366f1; color: white; font-size: 14px; padding: 8px;');
