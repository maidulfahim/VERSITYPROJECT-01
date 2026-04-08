<?php
// Include header
include 'header.php';
?>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Welcome to <span class="gradient-text">UniConnect</span></h1>
                <p class="hero-subtitle">The ultimate social networking platform for university students, professors, and staff. Connect, collaborate, and thrive together.</p>
                <div class="hero-buttons">
                    <a href="#register" class="btn-large btn-primary">Join UniConnect</a>
                    <a href="#features" class="btn-large btn-outline">Explore Features</a>
                </div>
            </div>
            <div class="hero-image">
                <div class="hero-illustration">
                    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="250" cy="200" r="150" fill="#E0E7FF" opacity="0.3"/>
                        <circle cx="250" cy="200" r="100" fill="#C7D2FE" opacity="0.5"/>
                        <rect x="200" y="150" width="100" height="100" rx="10" fill="#6366F1"/>
                        <circle cx="220" cy="170" r="5" fill="white"/>
                        <circle cx="250" cy="170" r="5" fill="white"/>
                        <circle cx="280" cy="170" r="5" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>

    <!-- Platform Features Section -->
    <section class="features" id="features">
        <div class="container">
            <div class="section-header">
                <h2>Platform Features</h2>
                <p>Everything you need to stay connected and engaged with your university community</p>
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h3>Connect with Students</h3>
                    <p>Build your network by connecting with fellow students, alumni, and professionals from your university.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 6v6l4 2"></path>
                        </svg>
                    </div>
                    <h3>Join Clubs & Groups</h3>
                    <p>Discover and join student organizations, academic clubs, and interest-based communities.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                    <h3>Campus News & Updates</h3>
                    <p>Stay informed about campus events, announcements, and important updates in real-time.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                    <h3>Real-time Messaging</h3>
                    <p>Communicate instantly with peers through private messages and group chats.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- How UniConnect Works -->
    <section class="how-it-works">
        <div class="container">
            <div class="section-header">
                <h2>How UniConnect Works</h2>
                <p>Get started in just a few simple steps</p>
            </div>
            
            <div class="steps-container">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h3>Create Your Account</h3>
                        <p>Sign up using your university email address to verify your identity and join the community.</p>
                    </div>
                </div>
                
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h3>Build Your Profile</h3>
                        <p>Add your interests, major, year, and other details to help others connect with you.</p>
                    </div>
                </div>
                
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h3>Connect & Engage</h3>
                        <p>Join communities, attend events, and start networking with your university peers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- User Roles Section -->
    <section class="user-roles" id="about">
        <div class="container">
            <div class="section-header">
                <h2>Who Can Join UniConnect?</h2>
                <p>Our platform serves everyone in the university ecosystem</p>
            </div>
            
            <div class="roles-grid">
                <div class="role-card">
                    <div class="role-icon student">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                        </svg>
                    </div>
                    <h3>Students</h3>
                    <p>Connect with classmates, join study groups, discover campus events, and build lasting friendships.</p>
                    <ul class="role-benefits">
                        <li>✓ Join student clubs and organizations</li>
                        <li>✓ Access academic resources</li>
                        <li>✓ Network with peers and alumni</li>
                        <li>✓ Participate in campus events</li>
                    </ul>
                </div>
                
                <div class="role-card">
                    <div class="role-icon professor">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                    </div>
                    <h3>Professors</h3>
                    <p>Engage with students, share knowledge, announce office hours, and foster academic collaboration.</p>
                    <ul class="role-benefits">
                        <li>✓ Connect with students</li>
                        <li>✓ Share academic content</li>
                        <li>✓ Organize virtual office hours</li>
                        <li>✓ Collaborate with colleagues</li>
                    </ul>
                </div>
                
                <div class="role-card">
                    <div class="role-icon staff">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="9" x2="15" y2="9"></line>
                            <line x1="9" y1="15" x2="15" y2="15"></line>
                        </svg>
                    </div>
                    <h3>Staff</h3>
                    <p>Support the university community, coordinate events, and facilitate campus-wide communication.</p>
                    <ul class="role-benefits">
                        <li>✓ Broadcast announcements</li>
                        <li>✓ Coordinate campus events</li>
                        <li>✓ Manage community groups</li>
                        <li>✓ Provide student support</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Upcoming Events Preview -->
    <section class="events-preview" id="events">
        <div class="container">
            <div class="section-header">
                <h2>Upcoming Events</h2>
                <p>Don't miss out on exciting campus events and activities</p>
            </div>
            
            <div class="events-grid">
                <div class="event-card">
                    <div class="event-date">
                        <span class="day">15</span>
                        <span class="month">FEB</span>
                    </div>
                    <div class="event-content">
                        <span class="event-category">Workshop</span>
                        <h3>Web Development Bootcamp</h3>
                        <p>Learn modern web development techniques from industry experts.</p>
                        <div class="event-meta">
                            <span>📍 Tech Hub, Room 301</span>
                            <span>⏰ 2:00 PM - 5:00 PM</span>
                        </div>
                    </div>
                </div>
                
                <div class="event-card">
                    <div class="event-date">
                        <span class="day">20</span>
                        <span class="month">FEB</span>
                    </div>
                    <div class="event-content">
                        <span class="event-category">Social</span>
                        <h3>Student Mixer & Networking</h3>
                        <p>Meet new people, make connections, and enjoy refreshments.</p>
                        <div class="event-meta">
                            <span>📍 Student Center</span>
                            <span>⏰ 6:00 PM - 9:00 PM</span>
                        </div>
                    </div>
                </div>
                
                <div class="event-card">
                    <div class="event-date">
                        <span class="day">25</span>
                        <span class="month">FEB</span>
                    </div>
                    <div class="event-content">
                        <span class="event-category">Academic</span>
                        <h3>Research Symposium 2026</h3>
                        <p>Explore groundbreaking research from students and faculty.</p>
                        <div class="event-meta">
                            <span>📍 Main Auditorium</span>
                            <span>⏰ 10:00 AM - 4:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center">
                <a href="#" class="btn-primary">View All Events</a>
            </div>
        </div>
    </section>

    <!-- Communities Preview -->
    <section class="communities-preview" id="communities">
        <div class="container">
            <div class="section-header">
                <h2>Popular Communities</h2>
                <p>Join vibrant communities that match your interests</p>
            </div>
            
            <div class="communities-grid">
                <div class="community-card">
                    <div class="community-header">
                        <div class="community-avatar">🎨</div>
                        <div>
                            <h3>Creative Arts Club</h3>
                            <span class="member-count">1,234 members</span>
                        </div>
                    </div>
                    <p>For artists, designers, and creative minds to share their work and collaborate.</p>
                    <a href="#" class="btn-secondary">Join Community</a>
                </div>
                
                <div class="community-card">
                    <div class="community-header">
                        <div class="community-avatar">💻</div>
                        <div>
                            <h3>Tech Innovators</h3>
                            <span class="member-count">2,456 members</span>
                        </div>
                    </div>
                    <p>Coding enthusiasts, hackers, and tech lovers building the future together.</p>
                    <a href="#" class="btn-secondary">Join Community</a>
                </div>
                
                <div class="community-card">
                    <div class="community-header">
                        <div class="community-avatar">⚽</div>
                        <div>
                            <h3>Sports & Fitness</h3>
                            <span class="member-count">3,789 members</span>
                        </div>
                    </div>
                    <p>Athletes and fitness enthusiasts organizing games and training sessions.</p>
                    <a href="#" class="btn-secondary">Join Community</a>
                </div>
                
                <div class="community-card">
                    <div class="community-header">
                        <div class="community-avatar">📚</div>
                        <div>
                            <h3>Book Club</h3>
                            <span class="member-count">987 members</span>
                        </div>
                    </div>
                    <p>Book lovers discussing literature, sharing recommendations, and more.</p>
                    <a href="#" class="btn-secondary">Join Community</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
        <div class="container">
            <div class="section-header">
                <h2>What Our Users Say</h2>
                <p>Hear from students, professors, and staff who love UniConnect</p>
            </div>
            
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="stars">★★★★★</div>
                    <p class="testimonial-text">"UniConnect has completely transformed how I engage with campus life. I've met so many amazing people and discovered clubs I never knew existed!"</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">SM</div>
                        <div>
                            <h4>Sarah Martinez</h4>
                            <span>Computer Science Student</span>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="stars">★★★★★</div>
                    <p class="testimonial-text">"As a professor, UniConnect helps me stay connected with my students outside the classroom. It's an invaluable tool for academic collaboration."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">DJ</div>
                        <div>
                            <h4>Dr. James Wilson</h4>
                            <span>Engineering Professor</span>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="stars">★★★★★</div>
                    <p class="testimonial-text">"The real-time messaging feature is fantastic! It's so easy to coordinate with my study group and stay updated on campus events."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">AL</div>
                        <div>
                            <h4>Alex Lee</h4>
                            <span>Business Administration Student</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
        <div class="container">
            <div class="contact-wrapper">
                <div class="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                    
                    <div class="contact-details">
                        <div class="contact-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <div>
                                <h4>Email</h4>
                                <p>support@uniconnect.edu</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <div>
                                <h4>Phone</h4>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <div>
                                <h4>Location</h4>
                                <p>University Campus, Main Building</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <form class="contact-form" id="contactForm">
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" id="subject" name="subject" placeholder="Subject" required>
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="btn-primary btn-block">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
        <div class="container">
            <div class="cta-content">
                <h2>Ready to Join UniConnect?</h2>
                <p>Start connecting with your university community today!</p>
                <div class="cta-buttons">
                    <a href="#register" class="btn-large btn-primary">Get Started Free</a>
                    <a href="#features" class="btn-large btn-white">Learn More</a>
                </div>
            </div>
        </div>
    </section>

<?php
// Include footer
include 'footer.php';
?>
