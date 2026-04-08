<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feed - UniConnect</title>
    <link rel="stylesheet" href="dashboard-styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Top Navigation Bar -->
    <header class="top-nav">
        <div class="nav-container">
            <div class="nav-left">
                <div class="logo">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="8" fill="#6366f1"/>
                        <path d="M16 8L8 14V24H13V19H19V24H24V14L16 8Z" fill="white"/>
                    </svg>
                    <span>UniConnect</span>
                </div>
            </div>
            
            <div class="nav-center">
                <div class="search-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <input type="text" placeholder="Search campus, clubs, people...">
                </div>
            </div>
            
            <div class="nav-right">
                <button class="icon-btn" aria-label="Notifications">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    <span class="badge">3</span>
                </button>
                <div class="user-menu">
                    <img src="https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff" alt="User" class="user-avatar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Layout -->
    <div class="main-container">
        <!-- Left Sidebar -->
        <aside class="sidebar-left">
            <nav class="sidebar-nav">
                <a href="#" class="nav-item active">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>Feed</span>
                </a>
                <a href="#" class="nav-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>Clubs</span>
                </a>
                <a href="#" class="nav-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Events</span>
                </a>
                <a href="#" class="nav-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Directory</span>
                </a>
                <a href="#" class="nav-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Messages</span>
                </a>
            </nav>
        </aside>

        <!-- Main Feed -->
        <main class="feed-main">
            <!-- Create Post -->
            <div class="create-post-card">
                <div class="create-post-header">
                    <img src="https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff" alt="Your avatar" class="post-avatar">
                    <input type="text" placeholder="What's happening on campus?" class="create-post-input" id="postInput">
                </div>
                <div class="create-post-actions">
                    <button class="add-photo-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        Add Photo
                    </button>
                    <button class="post-btn">Post</button>
                </div>
            </div>

            <!-- Feed Posts -->
            <div class="feed-posts">
                <!-- Post 1 - Professor Post -->
                <article class="post-card">
                    <div class="post-header">
                        <img src="https://ui-avatars.com/api/?name=Sarah+Jenkins&background=10b981&color=fff" alt="Dr. Sarah Jenkins" class="post-avatar">
                        <div class="post-author-info">
                            <div class="author-name">
                                Dr. Sarah Jenkins
                                <span class="user-badge professor">PROFESSOR</span>
                            </div>
                            <div class="post-time">2h ago</div>
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
                        <p>Excited to announce the new AI Research Lab opening this Friday. All seniors are welcome to join the orientation!</p>
                        <div class="post-image">
                            <img src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=400&fit=crop" alt="Research Lab">
                        </div>
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
                </article>

                <!-- Post 2 - Club Post -->
                <article class="post-card">
                    <div class="post-header">
                        <img src="https://ui-avatars.com/api/?name=Robotics+Club&background=f59e0b&color=fff" alt="Robotics Club" class="post-avatar">
                        <div class="post-author-info">
                            <div class="author-name">
                                Robotics Club
                                <span class="user-badge club">CLUB</span>
                            </div>
                            <div class="post-time">5h ago</div>
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
                        <p>The regional qualifiers are next week! Grab your gear and let's win this. 🤖🔥</p>
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
                </article>

                <!-- Post 3 - Student Post -->
                <article class="post-card">
                    <div class="post-header">
                        <img src="https://ui-avatars.com/api/?name=Alex+Martinez&background=3b82f6&color=fff" alt="Alex Martinez" class="post-avatar">
                        <div class="post-author-info">
                            <div class="author-name">
                                Alex Martinez
                                <span class="user-badge student">STUDENT</span>
                            </div>
                            <div class="post-time">1d ago</div>
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
                        <p>Just finished my final presentation! Thanks to everyone in the study group for all the support. Good luck to everyone with their exams! 📚✨</p>
                    </div>
                    
                    <div class="post-stats">
                        <span>24 likes</span>
                        <span>8 comments</span>
                    </div>
                    
                    <div class="post-actions">
                        <button class="action-btn liked">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
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
                </article>
            </div>
        </main>

        <!-- Right Sidebar -->
        <aside class="sidebar-right">
            <!-- Upcoming Events Widget -->
            <div class="widget">
                <div class="widget-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <h3>Upcoming Events</h3>
                </div>
                <div class="widget-content">
                    <div class="event-item">
                        <div class="event-date">
                            <span class="event-month">FEB</span>
                            <span class="event-day">15</span>
                        </div>
                        <div class="event-info">
                            <h4>Hackathon 2026</h4>
                            <span class="event-category">Tech</span>
                        </div>
                    </div>
                    <div class="event-item">
                        <div class="event-date">
                            <span class="event-month">FEB</span>
                            <span class="event-day">20</span>
                        </div>
                        <div class="event-info">
                            <h4>Spring Career Fair</h4>
                            <span class="event-category">Academic</span>
                        </div>
                    </div>
                    <div class="event-item">
                        <div class="event-date">
                            <span class="event-month">FEB</span>
                            <span class="event-day">25</span>
                        </div>
                        <div class="event-info">
                            <h4>Music Festival</h4>
                            <span class="event-category">Social</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Important Notices Widget -->
            <div class="widget widget-notices">
                <div class="widget-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    <h3>Important Notices</h3>
                </div>
                <div class="widget-content">
                    <div class="notice-item">
                        <p>Library extended hours for finals week.</p>
                    </div>
                    <div class="notice-item">
                        <p>Submit scholarship forms by Monday.</p>
                    </div>
                </div>
            </div>

            <!-- Suggested Clubs Widget -->
            <div class="widget">
                <div class="widget-header">
                    <h3>Suggested Clubs</h3>
                </div>
                <div class="widget-content">
                    <div class="club-suggestion">
                        <div class="club-avatar">🎨</div>
                        <div class="club-info">
                            <h4>Creative Arts</h4>
                            <span>234 members</span>
                        </div>
                        <button class="join-btn">Join</button>
                    </div>
                    <div class="club-suggestion">
                        <div class="club-avatar">⚽</div>
                        <div class="club-info">
                            <h4>Sports Club</h4>
                            <span>567 members</span>
                        </div>
                        <button class="join-btn">Join</button>
                    </div>
                </div>
            </div>
        </aside>
    </div>

    <script src="dashboard-script.js"></script>
</body>
</html>
