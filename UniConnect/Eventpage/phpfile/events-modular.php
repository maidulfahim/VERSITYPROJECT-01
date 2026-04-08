<?php
// events-modular.php - Modular version using includes
session_start();

// Page configuration
$page_title = 'Events - UniConnect';
$search_placeholder = 'Search events...';
$additional_css = ['events-styles.css'];
$additional_scripts = ['events-script.js'];

// Events data (replace with database query)
$events = [
    [
        'id' => 1,
        'title' => 'Hackathon 2026',
        'description' => '48-hour coding competition with amazing prizes. Build innovative solutions and network with tech enthusiasts.',
        'category' => 'tech',
        'date' => 'Feb 15, 2026',
        'time' => '9:00 AM',
        'location' => 'Tech Hub, Building A',
        'attendees' => 156,
        'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop',
        'registered' => false
    ],
    [
        'id' => 2,
        'title' => 'Spring Career Fair',
        'description' => 'Meet top employers, explore career opportunities, and network with industry professionals from leading companies.',
        'category' => 'academic',
        'date' => 'Feb 20, 2026',
        'time' => '10:00 AM',
        'location' => 'Student Center Hall',
        'attendees' => 342,
        'image' => 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=300&fit=crop',
        'registered' => false
    ],
    [
        'id' => 3,
        'title' => 'Spring Music Festival',
        'description' => 'Live performances by student bands and special guest artists. Food trucks, games, and entertainment all night!',
        'category' => 'social',
        'date' => 'Feb 25, 2026',
        'time' => '6:00 PM',
        'location' => 'Campus Lawn',
        'attendees' => 589,
        'image' => 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=300&fit=crop',
        'registered' => true
    ],
    [
        'id' => 4,
        'title' => 'Leadership Skills Workshop',
        'description' => 'Develop essential leadership qualities and team management skills with industry experts and interactive sessions.',
        'category' => 'workshop',
        'date' => 'Mar 1, 2026',
        'time' => '2:00 PM',
        'location' => 'Conference Room 201',
        'attendees' => 67,
        'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop',
        'registered' => false
    ],
    [
        'id' => 5,
        'title' => 'Inter-College Basketball',
        'description' => 'Championship tournament featuring top college teams. Cheer for your team and enjoy an action-packed weekend!',
        'category' => 'sports',
        'date' => 'Mar 5, 2026',
        'time' => '4:00 PM',
        'location' => 'Sports Complex Arena',
        'attendees' => 234,
        'image' => 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=300&fit=crop',
        'registered' => false
    ],
    [
        'id' => 6,
        'title' => 'AI & Machine Learning Seminar',
        'description' => 'Learn about the latest trends in artificial intelligence and machine learning from leading researchers and practitioners.',
        'category' => 'tech',
        'date' => 'Mar 10, 2026',
        'time' => '3:00 PM',
        'location' => 'Auditorium 101',
        'attendees' => 198,
        'image' => 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop',
        'registered' => false
    ]
];

// My registered events
$my_events = [
    ['day' => 25, 'month' => 'FEB', 'title' => 'Music Festival', 'time' => '6:00 PM'],
    ['day' => 10, 'month' => 'MAR', 'title' => 'AI Seminar', 'time' => '3:00 PM']
];

// Category statistics
$categories = [
    ['name' => 'Tech', 'color' => 'tech', 'count' => 12],
    ['name' => 'Academic', 'color' => 'academic', 'count' => 8],
    ['name' => 'Social', 'color' => 'social', 'count' => 15],
    ['name' => 'Workshop', 'color' => 'workshop', 'count' => 6],
    ['name' => 'Sports', 'color' => 'sports', 'count' => 9]
];

// Include header
include 'events-header.php';
?>

        <!-- Main Content -->
        <main class="events-main">
            <!-- Page Header -->
            <div class="page-header">
                <div class="header-content">
                    <h1>Campus Events</h1>
                    <p>Discover and join exciting events happening on campus</p>
                </div>
                <button class="btn-primary create-event-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Create Event
                </button>
            </div>

            <!-- Filters & View Toggle -->
            <div class="events-toolbar">
                <div class="filter-section">
                    <button class="filter-btn active" data-filter="all">All Events</button>
                    <button class="filter-btn" data-filter="academic">Academic</button>
                    <button class="filter-btn" data-filter="social">Social</button>
                    <button class="filter-btn" data-filter="workshop">Workshop</button>
                    <button class="filter-btn" data-filter="sports">Sports</button>
                    <button class="filter-btn" data-filter="tech">Tech</button>
                </div>
                
                <div class="view-toggle">
                    <button class="view-btn active" data-view="grid">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                    </button>
                    <button class="view-btn" data-view="list">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Events Grid -->
            <div class="events-grid" id="eventsContainer">
                <?php foreach ($events as $event): ?>
                <!-- Event Card -->
                <div class="event-card" data-category="<?php echo htmlspecialchars($event['category']); ?>">
                    <div class="event-image">
                        <img src="<?php echo htmlspecialchars($event['image']); ?>" alt="<?php echo htmlspecialchars($event['title']); ?>">
                        <div class="event-badge <?php echo htmlspecialchars($event['category']); ?>"><?php echo ucfirst(htmlspecialchars($event['category'])); ?></div>
                    </div>
                    <div class="event-card-content">
                        <div class="event-date-tag">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span><?php echo htmlspecialchars($event['date']); ?> • <?php echo htmlspecialchars($event['time']); ?></span>
                        </div>
                        <h3><?php echo htmlspecialchars($event['title']); ?></h3>
                        <p><?php echo htmlspecialchars($event['description']); ?></p>
                        
                        <div class="event-meta">
                            <div class="event-location">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span><?php echo htmlspecialchars($event['location']); ?></span>
                            </div>
                            <div class="event-attendees">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <span><?php echo $event['attendees']; ?> attending</span>
                            </div>
                        </div>
                        
                        <button class="event-register-btn <?php echo $event['registered'] ? 'registered' : ''; ?>" data-event-id="<?php echo $event['id']; ?>">
                            <?php echo $event['registered'] ? 'Registered' : 'Register Now'; ?>
                        </button>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>

            <!-- Load More -->
            <div class="load-more-section">
                <button class="btn-outline load-more-btn">Load More Events</button>
            </div>
        </main>

        <!-- Right Sidebar -->
        <aside class="sidebar-right">
            <!-- Calendar Widget -->
            <div class="widget">
                <div class="widget-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <h3>February 2026</h3>
                </div>
                <div class="widget-content">
                    <div class="mini-calendar">
                        <div class="calendar-header">
                            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                        </div>
                        <div class="calendar-body">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span>1</span>
                            <span>2</span><span>3</span><span>4</span><span class="today">5</span><span>6</span><span>7</span><span>8</span>
                            <span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span class="has-event">15</span>
                            <span>16</span><span>17</span><span>18</span><span>19</span><span class="has-event">20</span><span>21</span><span>22</span>
                            <span>23</span><span>24</span><span class="has-event">25</span><span>26</span><span>27</span><span>28</span><span>29</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- My Events Widget -->
            <div class="widget">
                <div class="widget-header">
                    <h3>My Registered Events</h3>
                </div>
                <div class="widget-content">
                    <?php foreach ($my_events as $my_event): ?>
                    <div class="my-event-item">
                        <div class="my-event-date">
                            <span class="my-event-day"><?php echo $my_event['day']; ?></span>
                            <span class="my-event-month"><?php echo $my_event['month']; ?></span>
                        </div>
                        <div class="my-event-info">
                            <h4><?php echo htmlspecialchars($my_event['title']); ?></h4>
                            <span><?php echo htmlspecialchars($my_event['time']); ?></span>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Event Categories -->
            <div class="widget">
                <div class="widget-header">
                    <h3>Event Categories</h3>
                </div>
                <div class="widget-content">
                    <div class="category-stats">
                        <?php foreach ($categories as $category): ?>
                        <div class="category-item">
                            <span class="category-color <?php echo htmlspecialchars($category['color']); ?>"></span>
                            <span class="category-name"><?php echo htmlspecialchars($category['name']); ?></span>
                            <span class="category-count"><?php echo $category['count']; ?></span>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </aside>

<?php include 'events-footer.php'; ?>
