-- Database Schema for UniConnect Events Module
-- Run this SQL to create the necessary tables

-- Create database
CREATE DATABASE IF NOT EXISTS uniconnect CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE uniconnect;

-- Users table (if not already exists)
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Events table
CREATE TABLE IF NOT EXISTS events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    category ENUM('tech', 'academic', 'social', 'workshop', 'sports') NOT NULL,
    event_date DATE NOT NULL,
    event_time TIME NOT NULL,
    location VARCHAR(200),
    image VARCHAR(255),
    created_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_category (category),
    INDEX idx_event_date (event_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Event registrations table
CREATE TABLE IF NOT EXISTS event_registrations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    event_id INT NOT NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
    UNIQUE KEY unique_registration (user_id, event_id),
    INDEX idx_user_id (user_id),
    INDEX idx_event_id (event_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Notifications table (optional)
CREATE TABLE IF NOT EXISTS notifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    type VARCHAR(50),
    message TEXT,
    related_id INT,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_is_read (is_read)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample data for events
INSERT INTO events (title, description, category, event_date, event_time, location, image) VALUES
('Hackathon 2026', '48-hour coding competition with amazing prizes. Build innovative solutions and network with tech enthusiasts.', 'tech', '2026-02-15', '09:00:00', 'Tech Hub, Building A', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop'),
('Spring Career Fair', 'Meet top employers, explore career opportunities, and network with industry professionals from leading companies.', 'academic', '2026-02-20', '10:00:00', 'Student Center Hall', 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=300&fit=crop'),
('Spring Music Festival', 'Live performances by student bands and special guest artists. Food trucks, games, and entertainment all night!', 'social', '2026-02-25', '18:00:00', 'Campus Lawn', 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=300&fit=crop'),
('Leadership Skills Workshop', 'Develop essential leadership qualities and team management skills with industry experts and interactive sessions.', 'workshop', '2026-03-01', '14:00:00', 'Conference Room 201', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop'),
('Inter-College Basketball', 'Championship tournament featuring top college teams. Cheer for your team and enjoy an action-packed weekend!', 'sports', '2026-03-05', '16:00:00', 'Sports Complex Arena', 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=300&fit=crop'),
('AI & Machine Learning Seminar', 'Learn about the latest trends in artificial intelligence and machine learning from leading researchers and practitioners.', 'tech', '2026-03-10', '15:00:00', 'Auditorium 101', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop');

-- Sample user (password: 'password' - use proper hashing in production!)
INSERT INTO users (name, email, password, avatar) VALUES
('John Doe', 'john@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff');

-- View to get events with registration count
CREATE OR REPLACE VIEW events_with_stats AS
SELECT 
    e.*,
    COUNT(DISTINCT er.user_id) as attendees_count
FROM events e
LEFT JOIN event_registrations er ON e.id = er.event_id
GROUP BY e.id;
