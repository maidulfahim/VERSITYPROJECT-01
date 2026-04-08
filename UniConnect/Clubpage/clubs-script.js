// Clubs Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeClubFilters();
    initializeViewToggle();
    initializeClubJoin();
    initializeSearch();
    initializeUserMenu();
    initializeCreateClub();
    initializeQuickJoin();
});

// ===== Club Filters =====
function initializeClubFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const clubCards = document.querySelectorAll('.club-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter clubs
            clubCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.classList.add('fade-in');
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('fade-in');
                }
            });

            // Show empty state if no clubs
            checkEmptyState();
        });
    });
}

// ===== View Toggle (Grid/List) =====
function initializeViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const clubsContainer = document.getElementById('clubsContainer');

    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const view = this.getAttribute('data-view');

            // Toggle view
            if (view === 'list') {
                clubsContainer.classList.add('list-view');
            } else {
                clubsContainer.classList.remove('list-view');
            }
        });
    });
}

// ===== Club Join/Leave =====
function initializeClubJoin() {
    const joinButtons = document.querySelectorAll('.club-join-btn');

    joinButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (this.classList.contains('joined')) {
                // Leave club
                this.classList.remove('joined');
                this.textContent = 'Join Club';
                showNotification('Left the club', 'info');
                
                // Update member count
                updateMemberCount(this, -1);
            } else {
                // Join club
                this.classList.add('joined');
                this.textContent = 'Joined';
                showNotification('Successfully joined the club!', 'success');
                
                // Update member count
                updateMemberCount(this, 1);
            }
        });
    });
}

// ===== Update Member Count =====
function updateMemberCount(button, change) {
    const clubCard = button.closest('.club-card');
    const membersSpan = clubCard.querySelector('.stat-item span');
    
    if (membersSpan && membersSpan.textContent.includes('members')) {
        const currentCount = parseInt(membersSpan.textContent.match(/\d+/)[0]);
        const newCount = currentCount + change;
        membersSpan.textContent = `${newCount} members`;
    }
}

// ===== Club Search =====
function initializeSearch() {
    const searchInput = document.getElementById('clubSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const clubCards = document.querySelectorAll('.club-card');

            clubCards.forEach(card => {
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
    const clubsContainer = document.getElementById('clubsContainer');
    const visibleClubs = clubsContainer.querySelectorAll('.club-card:not(.hidden)');
    
    // Remove existing empty state
    const existingEmptyState = clubsContainer.querySelector('.empty-state');
    if (existingEmptyState) {
        existingEmptyState.remove();
    }

    // Add empty state if no visible clubs
    if (visibleClubs.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <h3>No Clubs Found</h3>
            <p>Try adjusting your filters or search query</p>
        `;
        clubsContainer.appendChild(emptyState);
    }
}

// ===== Club Card Click (View Details) =====
document.querySelectorAll('.club-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking on join button
        if (e.target.classList.contains('club-join-btn')) {
            return;
        }
        
        showClubDetails(this);
    });
});

// ===== Show Club Details Modal =====
function showClubDetails(clubCard) {
    const title = clubCard.querySelector('h3').textContent;
    const description = clubCard.querySelector('p').textContent;
    const members = clubCard.querySelector('.stat-item span').textContent;
    const events = clubCard.querySelectorAll('.stat-item span')[1].textContent;
    const category = clubCard.querySelector('.club-badge').textContent;
    const image = clubCard.querySelector('.club-image img').src;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'club-modal';
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
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>${members}</span>
                    </div>
                    <div class="modal-info-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>${events}</span>
                    </div>
                </div>
                <h3>About This Club</h3>
                <p>${description}</p>
                <p>Join our vibrant community of students who share your interests! We organize regular meetups, workshops, and events. Whether you're a beginner or experienced, everyone is welcome to participate and contribute.</p>
                
                <h3>What We Offer</h3>
                <ul class="modal-benefits">
                    <li>Regular workshops and training sessions</li>
                    <li>Networking opportunities with industry professionals</li>
                    <li>Participation in competitions and events</li>
                    <li>Access to exclusive resources and mentorship</li>
                </ul>
                
                <div class="modal-actions">
                    <button class="btn-primary modal-join-btn">Join Club</button>
                    <button class="btn-outline modal-share-btn">Share Club</button>
                </div>
            </div>
        </div>
    `;

    // Add modal styles
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .club-modal {
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
            
            .modal-body h3 {
                font-size: 1.2rem;
                font-weight: 700;
                margin: 24px 0 12px;
                color: #1f2937;
            }
            
            .modal-info {
                display: flex;
                gap: 24px;
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
            
            .modal-benefits {
                list-style: none;
                padding: 0;
                margin: 16px 0 24px;
            }
            
            .modal-benefits li {
                padding: 12px 0;
                padding-left: 32px;
                position: relative;
                color: #6b7280;
                line-height: 1.6;
            }
            
            .modal-benefits li:before {
                content: "✓";
                position: absolute;
                left: 0;
                color: #10b981;
                font-weight: 700;
                font-size: 1.2rem;
            }
            
            .modal-actions {
                display: flex;
                gap: 12px;
                margin-top: 32px;
            }
            
            .modal-join-btn,
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
    
    // Join button
    modal.querySelector('.modal-join-btn').addEventListener('click', () => {
        showNotification('Successfully joined the club!', 'success');
        modal.remove();
    });
    
    // Share button
    modal.querySelector('.modal-share-btn').addEventListener('click', () => {
        showNotification('Share link copied to clipboard!', 'success');
    });
}

// ===== Create Club Modal =====
function initializeCreateClub() {
    const createBtn = document.querySelector('.create-club-btn');
    
    if (createBtn) {
        createBtn.addEventListener('click', function() {
            showNotification('Create club feature coming soon!', 'info');
            // In production, this would open a create club form
        });
    }
}

// ===== Quick Join from Suggestions =====
function initializeQuickJoin() {
    const quickJoinButtons = document.querySelectorAll('.quick-join-btn');
    
    quickJoinButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const clubName = this.closest('.suggested-club-item').querySelector('h4').textContent;
            
            if (this.textContent === '+') {
                this.textContent = '✓';
                this.style.background = '#10b981';
                this.style.borderColor = '#10b981';
                this.style.color = 'white';
                showNotification(`Joined ${clubName}!`, 'success');
            } else {
                this.textContent = '+';
                this.style.background = 'white';
                this.style.borderColor = '#6366f1';
                this.style.color = '#6366f1';
                showNotification(`Left ${clubName}`, 'info');
            }
        });
    });
}

// ===== Load More Clubs =====
const loadMoreBtn = document.querySelector('.load-more-btn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        this.textContent = 'Loading...';
        
        setTimeout(() => {
            showNotification('No more clubs to load', 'info');
            this.textContent = 'Load More Clubs';
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
        <button class="menu-option">My Clubs</button>
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

// ===== My Clubs Click =====
document.querySelectorAll('.my-club-item').forEach(item => {
    item.addEventListener('click', function() {
        const clubTitle = this.querySelector('h4').textContent;
        showNotification(`Opening ${clubTitle}...`, 'info');
    });
});

// ===== Widget Action Button =====
document.querySelectorAll('.widget-action-btn').forEach(button => {
    button.addEventListener('click', function() {
        showNotification('Viewing all clubs...', 'info');
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

console.log('%c Clubs Page Loaded ', 'background: #6366f1; color: white; font-size: 14px; padding: 8px;');
