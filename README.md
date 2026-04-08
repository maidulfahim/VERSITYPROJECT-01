# VERSITYPROJECT-01
UniConnect is a university social networking platform connecting students, professors, and staff through event management, clubs, profiles, messaging, and community discovery. Built with HTML/CSS/JavaScript frontend and PHP/MySQL backend.
# UniConnect 🎓

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PHP Version](https://img.shields.io/badge/PHP-7.4%2B-blue)](https://www.php.net/)
[![MySQL Version](https://img.shields.io/badge/MySQL-5.7%2B-orange)](https://www.mysql.com/)
[![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen)](#status)

> **The ultimate social networking platform for university students, professors, and staff.**

A comprehensive web-based community platform designed to connect, engage, and collaborate within university ecosystems through event management, club discovery, user profiles, messaging, and community discovery.

## Quick Links

- 📖 [Quick Start](#quick-start) - Get up and running in 5 minutes
- 🏗️ [Project Structure](#project-structure) - Understand the codebase
- 🛠️ [Tech Stack](#tech-stack) - Technologies we use
- 📋 [Features](#features) - What UniConnect offers
- 🤝 [Contributing](#contributing) - How to contribute

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Configuration](#configuration)
- [Usage](#usage)
- [File Descriptions](#file-descriptions)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Support](#support)

## Overview

**UniConnect** is a comprehensive web-based social networking platform designed specifically for university communities. It enables students, professors, and staff to connect, collaborate, and engage through various features including:

- 📅 **Event Management** - Discover and register for university events
- 🏛️ **Club Organization** - Join and manage clubs
- 👤 **User Profiles** - Build your university community identity
- 💬 **Messaging** - Connect with peers and mentors
- 📖 **Community Directory** - Find others in your university

The platform is transitioning from a static HTML/CSS/JavaScript application to a dynamic PHP-based system with MySQL database integration for enhanced functionality and data persistence.

## Features

- ✨ **Home Dashboard** - Personalized user dashboard with quick access to community features
- 📅 **Event Management** - Browse, register for, and manage university events with real-time updates
- 🏛️ **Club Pages** - Discover and join clubs with organized club information and member management
- 👤 **User Profiles** - Customizable user profiles with personal information and activity tracking
- 🔐 **Authentication** - Secure login system for students, professors, and staff
- 📱 **Responsive Design** - Mobile-friendly interface that works across all devices
- 💾 **Data Persistence** - MySQL database integration for storing user data, events, and registrations
- 🔄 **Real-time Updates** - AJAX-powered dynamic content without page reloads

## Quick Start

### Prerequisites
- PHP 7.4 or higher
- MySQL 5.7 or higher
- Web server (Apache/Nginx with PHP support)

### 1️⃣ Clone or Download

```bash
git clone https://github.com/yourusername/UniConnect.git
cd UniConnect
```

### 2️⃣ Setup Web Server

```bash
# For Apache on Linux/Mac
sudo cp -r UniConnect /var/www/html/

# For XAMPP/WAMP on Windows
# Copy to C:\xampp\htdocs\ or C:\wamp\www\
```

### 3️⃣ Import Database

```bash
mysql -u root -p < Eventpage/database-schema.sql
```

### 4️⃣ Configure Database

Edit `Eventpage/config.php`:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'your_password');
define('DB_NAME', 'uniconnect');
```

### 5️⃣ Access the Application

Open your browser and navigate to:
- **Homepage**: `http://localhost/UniConnect/HOMEpage/`
- **Events**: `http://localhost/UniConnect/Eventpage/events.php`
- **Clubs**: `http://localhost/UniConnect/Clubpage/clubs.html`
- **Profile**: `http://localhost/UniConnect/Profilepage/`

## Features

- **Home Dashboard** - Personalized user dashboard with quick access to community features
- **Event Management** - Browse, register for, and manage university events with real-time updates
- **Club Pages** - Discover and join clubs with organized club information and member management
- **User Profiles** - Customizable user profiles with personal information and activity tracking
- **Authentication** - Secure login system for students, professors, and staff
- **Responsive Design** - Mobile-friendly interface that works across all devices
- **Data Persistence** - MySQL database integration for storing user data, events, and registrations

## Project Structure

```
UniConnect/
│
├── 📁 HOMEpage/                      # Home and dashboard pages
│   ├── index.php                     # Main entry point with PHP backend
│   ├── dashboard.php                 # User dashboard
│   ├── header.php                    # Shared header navigation
│   ├── footer.php                    # Shared footer
│   ├── home.html                     # Static reference
│   ├── dashboard-styles.css          # Dashboard styles
│   ├── styles.css                    # Home page styles
│   ├── script.js                     # Home page scripts
│   └── dashboard-script.js           # Dashboard scripts
│
├── 📁 Eventpage/                     # Event management system
│   ├── events.php                    # Main events page
│   ├── events-modular.php            # Modular events version
│   ├── event-register-handler.php    # AJAX event registration
│   ├── config.php                    # Database configuration
│   ├── events-header.php             # Events section header
│   ├── events-footer.php             # Events section footer
│   ├── database-schema.sql           # Database schema & sample data
│   ├── events-styles.css             # Event styles
│   ├── events-script.js              # Event interactivity
│   ├── events.html                   # Static HTML (deprecated)
│   ├── README.md                     # Events documentation
│   └── MIGRATION-GUIDE.md            # HTML to PHP migration guide
│
├── 📁 Clubpage/                      # Club management
│   ├── clubs.html                    # Club listing page
│   ├── clubs-styles.css              # Club styles
│   └── clubs-script.js               # Club scripts
│
├── 📁 Profilepage/                   # User profile section
│   ├── index.html                    # Profile page
│   ├── Uniconnect.jsx                # React component (experimental)
│   └── start-server.sh               # Server startup script
│
├── 📁 Messagespage/                  # Messaging system
│   ├── messages.html                 # Messages interface
│   ├── messages-styles.css           # Messaging styles
│   └── messages-script.js            # Messaging scripts
│
├── 📁 Directorypage/                 # Community directory
│   ├── directory.html                # Directory interface
│   ├── directory-styles.css          # Directory styles
│   └── directory-script.js           # Directory scripts
│
├── 📁 loginPage/                     # Authentication system
│   └── ...                           # Login-related files
│
└── README.md                         # This file
```

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), React (experimental) |
| **Backend** | PHP 7.4+ (MVC structure) |
| **Database** | MySQL 5.7+ (Relational Database) |
| **API** | AJAX for asynchronous requests |
| **Version Control** | Git |
| **Server** | Apache / Nginx |

### Frontend Stack
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with responsive design and Flexbox/Grid
- **JavaScript (ES6+)** - Interactive features, DOM manipulation, and AJAX
- **React** - Component-based UI (experimental, in Profilepage)

### Backend Stack
- **PHP 7.4+** - Object-oriented PHP with MVC architecture
- **MySQL 5.7+** - Relational database with prepared statements
- **AJAX** - Asynchronous server communication

## Installation

### Prerequisites

- **PHP 7.4+** with extensions: mysqli, PDO
- **MySQL 5.7+** with root or user account access
- **Web Server** - Apache with mod_rewrite enabled or Nginx
- **Git** (optional, for cloning)

### Step 1: Download Project

```bash
# Using Git
git clone https://github.com/yourusername/UniConnect.git
cd UniConnect

# Or download ZIP and extract
```

### Step 2: Deploy to Web Root

```bash
# Linux/Mac with Apache
sudo cp -r UniConnect /var/www/html/
sudo chown -R www-data:www-data /var/www/html/UniConnect

# Windows with XAMPP/WAMP
# Copy UniConnect folder to C:\xampp\htdocs\ or C:\wamp\www\
```

### Step 3: Set Permissions

```bash
# Linux/Mac
chmod -R 755 UniConnect
chmod -R 777 UniConnect/uploads  # If uploads directory exists
```

## Database Setup

### Option 1: Automated Setup (Recommended)

```bash
# Import the database schema directly
mysql -u root -p uniconnect < Eventpage/database-schema.sql
```

### Option 2: Manual Setup via phpMyAdmin

1. Open `http://localhost/phpmyadmin/`
2. Click **New** to create a database
3. Name it `uniconnect`
4. Click **Import** and upload `Eventpage/database-schema.sql`
5. Execute the import

### Option 3: Without Database (Development Mode)

- Application will work with fallback data
- Data won't persist across sessions
- Useful for frontend development and testing

## Configuration

### Database Credentials

Edit `Eventpage/config.php`:

```php
<?php
// Database Configuration
define('DB_HOST', 'localhost');      // Database server
define('DB_USER', 'root');           // Database username
define('DB_PASS', 'password');       // Database password
define('DB_NAME', 'uniconnect');     // Database name
define('DB_CHARSET', 'utf8mb4');     // Character set

// Connection PDO/mysqli settings
define('DB_PORT', '3306');           // MySQL port
?>
```

### Application URLs

After installation, access these URLs:

| Page | URL |
|------|-----|
| **Homepage** | `http://localhost/UniConnect/HOMEpage/` |
| **Events** | `http://localhost/UniConnect/Eventpage/events.php` |
| **Clubs** | `http://localhost/UniConnect/Clubpage/clubs.html` |
| **Profiles** | `http://localhost/UniConnect/Profilepage/` |
| **Messages** | `http://localhost/UniConnect/Messagespage/` |
| **Directory** | `http://localhost/UniConnect/Directorypage/` |
| **Login** | `http://localhost/UniConnect/loginPage/` |

## Usage

### For Students

1. **Create Account** - Sign up through the login page
2. **Explore Events** - Browse available university events
3. **Register for Events** - Click register button and confirm
4. **Join Clubs** - Discover and join clubs of interest
5. **Update Profile** - Add photo, bio, and interests
6. **Connect** - Send messages and find peers

### For Administrators

1. **Create Events** - Add new university events with details
2. **Manage Registrations** - View and approve event registrations
3. **Manage Clubs** - Create and organize clubs
4. **Monitor Users** - View user profiles and activity
5. **Generate Reports** - Export event and user data

### For Developers

1. **Review MIGRATION-GUIDE.md** - Understand HTML to PHP conversion
2. **Check config.php** - Database and API configuration
3. **Examine event-register-handler.php** - AJAX patterns and database queries
4. **Modify styles** - Update CSS files for branding

## File Descriptions

### Core Application Files

| File | Purpose | Type |
|------|---------|------|
| `HOMEpage/index.php` | Main entry point and homepage | Backend |
| `HOMEpage/dashboard.php` | User personalized dashboard | Backend |
| `loginPage/index.php` | User authentication and login | Backend |
| `Eventpage/events.php` | Event listing and details page | Backend |
| `Eventpage/event-register-handler.php` | AJAX handler for registrations | API (Backend) |
| `Eventpage/config.php` | Database and app configuration | Config |
| `Clubpage/clubs.html` | Club discovery and listing | Frontend |
| `Profilepage/index.html` | User profile page | Frontend |
| `Messagespage/messages.html` | User messaging interface | Frontend |
| `Directorypage/directory.html` | Community member directory | Frontend |

### Frontend Assets (Styles & Scripts)

| Pattern | Purpose |
|---------|---------|
| `*-styles.css` | Page-specific styling (responsive design) |
| `*-script.js` | Interactive features, DOM manipulation, AJAX |
| `*-header.php` | Shared navigation components |
| `*-footer.php` | Shared footer with links and info |

### Database Files

| File | Purpose |
|------|---------|
| `Eventpage/database-schema.sql` | Database structure, tables, and sample data |

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview and setup guide |
| `Eventpage/README.md` | Events module specific documentation |
| `Eventpage/MIGRATION-GUIDE.md` | Guide for HTML to PHP migration patterns |

## Troubleshooting

### ❌ Database Connection Error

**Problem:** "Connection failed" or "Can't connect to MySQL server"

**Solutions:**
- Verify MySQL daemon is running: `sudo systemctl status mysql`
- Check credentials in `Eventpage/config.php`
- Verify database `uniconnect` exists: `mysql -u root -p -e "SHOW DATABASES;"`
- Check user permissions: `mysql -u root -p -e "SHOW GRANTS FOR 'root'@'localhost';"`

```bash
# To start MySQL on Linux
sudo systemctl start mysql

# On Mac with Homebrew
brew services start mysql
```

### ❌ PHP Not Displaying / Blank Pages

**Problem:** Pages show blank or raw PHP code

**Solutions:**
- Verify PHP is installed: `php --version`
- Check PHP is enabled in Apache: `a2enmod php8.1`
- Restart Apache: `sudo systemctl restart apache2`
- Check PHP error logs: `tail -f /var/log/apache2/error.log`
- Verify file permissions: `ls -la HOMEpage/` (should show 644 for files)

### ❌ AJAX Requests Not Working

**Problem:** "Failed AJAX request" or no response from server

**Solutions:**
- Open browser Developer Tools (F12) → Console tab
- Check for JavaScript errors
- Verify event-register-handler.php returns JSON
- Test with curl: `curl -X POST http://localhost/UniConnect/Eventpage/event-register-handler.php`
- Check Apache logs for 404 errors

### ❌ Styling Not Applied

**Problem:** Pages appear unstyled or with broken layout

**Solutions:**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Verify CSS files in Network tab (F12)
- Check file paths in HTML are relative (e.g., `./styles.css`)
- Ensure .css file permissions: `chmod 644 *.css`

### ❌ Events Not Showing

**Problem:** Events page empty or no results

**Solutions:**
- Verify database imported successfully: `mysql -u root -p uniconnect -e "SELECT COUNT(*) FROM events;"`
- Check `Eventpage/config.php` database credentials
- Review browser console for JavaScript errors
- Check server error logs for PHP warnings

## Contributing

We welcome contributions! Whether it's bug fixes, features, or documentation improvements, your help is appreciated.

### How to Contribute

1. **Fork the Repository** on GitHub
   ```bash
   # Click "Fork" on GitHub and clone your fork
   git clone https://github.com/yourusername/UniConnect.git
   cd UniConnect
   git remote add upstream https://github.com/original-owner/UniConnect.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/issue-description
   ```

3. **Make Your Changes**
   - Write clean, well-documented code
   - Follow existing code style and conventions
   - Add comments for complex logic
   - Test thoroughly before committing

4. **Commit with Clear Messages**
   ```bash
   git add .
   git commit -m "Add feature: description of changes"
   # Good message format:
   # - "Add: new feature description"
   # - "Fix: bug description"
   # - "Docs: documentation updates"
   ```

5. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Go to GitHub and create a Pull Request
   - Describe changes clearly
   - Reference related issues (e.g., "Fixes #123")

### Contribution Guidelines

- **Code Style** - Follow PSR-12 for PHP, ES6+ for JavaScript
- **Database** - Use prepared statements to prevent SQL injection
- **Security** - Sanitize user inputs, validate server-side
- **Testing** - Test on both frontend and backend
- **Documentation** - Update README if adding features

## Advanced Topics

### Database Schema

The `Eventpage/database-schema.sql` includes:
- **users** - User accounts and authentication
- **events** - University events and details
- **event_registrations** - User event registrations
- **clubs** - Club information
- **club_members** - Club membership records
- **messages** - Private messaging system

### AJAX Architecture

UniConnect uses AJAX for:
- Event registration without page reload
- Dynamic club listing
- Real-time message notifications
- Profile updates

See `event-register-handler.php` for AJAX pattern examples.

### Security Considerations

- ✅ Use prepared statements for all database queries
- ✅ Sanitize and validate all user inputs
- ✅ Hash passwords using PHP's `password_hash()`
- ✅ Implement CSRF tokens for form submissions
- ✅ Use HTTPS in production
- ✅ Keep PHP and MySQL updated
- ✅ Follow OWASP security guidelines

## Roadmap

### Current (v2.0)
- ✅ PHP backend with MySQL database
- ✅ AJAX event registration
- ✅ User authentication
- ✅ Responsive design

### Planned (v3.0)
- 🚀 REST API
- 🚀 Real-time notifications with WebSockets
- 🚀 Mobile app integration
- 🚀 Advanced search and filters
- 🚀 User roles and permissions

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Usage**: You're free to use, modify, and distribute this project with attribution.

## FAQ

**Q: Can I use UniConnect for my university?**  
A: Yes! The project is designed to be deployed in educational institutions. Check with your IT department.

**Q: What if I don't have a database?**  
A: The app has fallback sample data, but won't persist new entries. We recommend setting up MySQL.

**Q: How do I change the colors/branding?**  
A: Edit the CSS files in each folder (`*-styles.css`) or update `config.php` for global settings.

**Q: Can I add my own features?**  
A: Absolutely! Follow the contribution guidelines and submit a pull request.

## Support & Community

### Get Help

- 📖 **Documentation** - Check [Eventpage/README.md](Eventpage/README.md) and [Eventpage/MIGRATION-GUIDE.md](Eventpage/MIGRATION-GUIDE.md)
- 🐛 **Found a Bug?** - Open an [Issue](https://github.com/yourusername/UniConnect/issues)
- 💡 **Have an Idea?** - Start a [Discussion](https://github.com/yourusername/UniConnect/discussions)
- 📧 **Contact** - Reach out to your project administrator

### Related Resources

- [PHP Documentation](https://www.php.net/docs.php)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [OWASP Security Guide](https://owasp.org/)

## Project Status

| Item | Status |
|------|--------|
| **Development** | 🟢 Active |
| **Version** | 2.0 (PHP with Database) |
| **PHP Version** | 7.4+ |
| **MySQL Version** | 5.7+ |
| **Last Updated** | April 2026 |
| **Maintenance** | Active |

---

<div align="center">

**Made with ❤️ for university communities**

Built to connect. Designed to inspire. Built to scale.

[⬆ Back to Top](#uniconnect)

</div>
# UniConnect 🎓

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PHP Version](https://img.shields.io/badge/PHP-7.4%2B-blue)](https://www.php.net/)
[![MySQL Version](https://img.shields.io/badge/MySQL-5.7%2B-orange)](https://www.mysql.com/)
[![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen)](#status)

> **The ultimate social networking platform for university students, professors, and staff.**

A comprehensive web-based community platform designed to connect, engage, and collaborate within university ecosystems through event management, club discovery, user profiles, messaging, and community discovery.

## Quick Links

- 📖 [Quick Start](#quick-start) - Get up and running in 5 minutes
- 🏗️ [Project Structure](#project-structure) - Understand the codebase
- 🛠️ [Tech Stack](#tech-stack) - Technologies we use
- 📋 [Features](#features) - What UniConnect offers
- 🤝 [Contributing](#contributing) - How to contribute

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Configuration](#configuration)
- [Usage](#usage)
- [File Descriptions](#file-descriptions)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Support](#support)

## Overview

**UniConnect** is a comprehensive web-based social networking platform designed specifically for university communities. It enables students, professors, and staff to connect, collaborate, and engage through various features including:

- 📅 **Event Management** - Discover and register for university events
- 🏛️ **Club Organization** - Join and manage clubs
- 👤 **User Profiles** - Build your university community identity
- 💬 **Messaging** - Connect with peers and mentors
- 📖 **Community Directory** - Find others in your university

The platform is transitioning from a static HTML/CSS/JavaScript application to a dynamic PHP-based system with MySQL database integration for enhanced functionality and data persistence.

## Features

- ✨ **Home Dashboard** - Personalized user dashboard with quick access to community features
- 📅 **Event Management** - Browse, register for, and manage university events with real-time updates
- 🏛️ **Club Pages** - Discover and join clubs with organized club information and member management
- 👤 **User Profiles** - Customizable user profiles with personal information and activity tracking
- 🔐 **Authentication** - Secure login system for students, professors, and staff
- 📱 **Responsive Design** - Mobile-friendly interface that works across all devices
- 💾 **Data Persistence** - MySQL database integration for storing user data, events, and registrations
- 🔄 **Real-time Updates** - AJAX-powered dynamic content without page reloads

## Quick Start

### Prerequisites
- PHP 7.4 or higher
- MySQL 5.7 or higher
- Web server (Apache/Nginx with PHP support)

### 1️⃣ Clone or Download

```bash
git clone https://github.com/yourusername/UniConnect.git
cd UniConnect
```

### 2️⃣ Setup Web Server

```bash
# For Apache on Linux/Mac
sudo cp -r UniConnect /var/www/html/

# For XAMPP/WAMP on Windows
# Copy to C:\xampp\htdocs\ or C:\wamp\www\
```

### 3️⃣ Import Database

```bash
mysql -u root -p < Eventpage/database-schema.sql
```

### 4️⃣ Configure Database

Edit `Eventpage/config.php`:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'your_password');
define('DB_NAME', 'uniconnect');
```

### 5️⃣ Access the Application

Open your browser and navigate to:
- **Homepage**: `http://localhost/UniConnect/HOMEpage/`
- **Events**: `http://localhost/UniConnect/Eventpage/events.php`
- **Clubs**: `http://localhost/UniConnect/Clubpage/clubs.html`
- **Profile**: `http://localhost/UniConnect/Profilepage/`

## Features

- **Home Dashboard** - Personalized user dashboard with quick access to community features
- **Event Management** - Browse, register for, and manage university events with real-time updates
- **Club Pages** - Discover and join clubs with organized club information and member management
- **User Profiles** - Customizable user profiles with personal information and activity tracking
- **Authentication** - Secure login system for students, professors, and staff
- **Responsive Design** - Mobile-friendly interface that works across all devices
- **Data Persistence** - MySQL database integration for storing user data, events, and registrations

## Project Structure

```
UniConnect/
│
├── 📁 HOMEpage/                      # Home and dashboard pages
│   ├── index.php                     # Main entry point with PHP backend
│   ├── dashboard.php                 # User dashboard
│   ├── header.php                    # Shared header navigation
│   ├── footer.php                    # Shared footer
│   ├── home.html                     # Static reference
│   ├── dashboard-styles.css          # Dashboard styles
│   ├── styles.css                    # Home page styles
│   ├── script.js                     # Home page scripts
│   └── dashboard-script.js           # Dashboard scripts
│
├── 📁 Eventpage/                     # Event management system
│   ├── events.php                    # Main events page
│   ├── events-modular.php            # Modular events version
│   ├── event-register-handler.php    # AJAX event registration
│   ├── config.php                    # Database configuration
│   ├── events-header.php             # Events section header
│   ├── events-footer.php             # Events section footer
│   ├── database-schema.sql           # Database schema & sample data
│   ├── events-styles.css             # Event styles
│   ├── events-script.js              # Event interactivity
│   ├── events.html                   # Static HTML (deprecated)
│   ├── README.md                     # Events documentation
│   └── MIGRATION-GUIDE.md            # HTML to PHP migration guide
│
├── 📁 Clubpage/                      # Club management
│   ├── clubs.html                    # Club listing page
│   ├── clubs-styles.css              # Club styles
│   └── clubs-script.js               # Club scripts
│
├── 📁 Profilepage/                   # User profile section
│   ├── index.html                    # Profile page
│   ├── Uniconnect.jsx                # React component (experimental)
│   └── start-server.sh               # Server startup script
│
├── 📁 Messagespage/                  # Messaging system
│   ├── messages.html                 # Messages interface
│   ├── messages-styles.css           # Messaging styles
│   └── messages-script.js            # Messaging scripts
│
├── 📁 Directorypage/                 # Community directory
│   ├── directory.html                # Directory interface
│   ├── directory-styles.css          # Directory styles
│   └── directory-script.js           # Directory scripts
│
├── 📁 loginPage/                     # Authentication system
│   └── ...                           # Login-related files
│
└── README.md                         # This file
```

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), React (experimental) |
| **Backend** | PHP 7.4+ (MVC structure) |
| **Database** | MySQL 5.7+ (Relational Database) |
| **API** | AJAX for asynchronous requests |
| **Version Control** | Git |
| **Server** | Apache / Nginx |

### Frontend Stack
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with responsive design and Flexbox/Grid
- **JavaScript (ES6+)** - Interactive features, DOM manipulation, and AJAX
- **React** - Component-based UI (experimental, in Profilepage)

### Backend Stack
- **PHP 7.4+** - Object-oriented PHP with MVC architecture
- **MySQL 5.7+** - Relational database with prepared statements
- **AJAX** - Asynchronous server communication

## Installation

### Prerequisites

- **PHP 7.4+** with extensions: mysqli, PDO
- **MySQL 5.7+** with root or user account access
- **Web Server** - Apache with mod_rewrite enabled or Nginx
- **Git** (optional, for cloning)

### Step 1: Download Project

```bash
# Using Git
git clone https://github.com/yourusername/UniConnect.git
cd UniConnect

# Or download ZIP and extract
```

### Step 2: Deploy to Web Root

```bash
# Linux/Mac with Apache
sudo cp -r UniConnect /var/www/html/
sudo chown -R www-data:www-data /var/www/html/UniConnect

# Windows with XAMPP/WAMP
# Copy UniConnect folder to C:\xampp\htdocs\ or C:\wamp\www\
```

### Step 3: Set Permissions

```bash
# Linux/Mac
chmod -R 755 UniConnect
chmod -R 777 UniConnect/uploads  # If uploads directory exists
```

## Database Setup

### Option 1: Automated Setup (Recommended)

```bash
# Import the database schema directly
mysql -u root -p uniconnect < Eventpage/database-schema.sql
```

### Option 2: Manual Setup via phpMyAdmin

1. Open `http://localhost/phpmyadmin/`
2. Click **New** to create a database
3. Name it `uniconnect`
4. Click **Import** and upload `Eventpage/database-schema.sql`
5. Execute the import

### Option 3: Without Database (Development Mode)

- Application will work with fallback data
- Data won't persist across sessions
- Useful for frontend development and testing

## Configuration

### Database Credentials

Edit `Eventpage/config.php`:

```php
<?php
// Database Configuration
define('DB_HOST', 'localhost');      // Database server
define('DB_USER', 'root');           // Database username
define('DB_PASS', 'password');       // Database password
define('DB_NAME', 'uniconnect');     // Database name
define('DB_CHARSET', 'utf8mb4');     // Character set

// Connection PDO/mysqli settings
define('DB_PORT', '3306');           // MySQL port
?>
```

### Application URLs

After installation, access these URLs:

| Page | URL |
|------|-----|
| **Homepage** | `http://localhost/UniConnect/HOMEpage/` |
| **Events** | `http://localhost/UniConnect/Eventpage/events.php` |
| **Clubs** | `http://localhost/UniConnect/Clubpage/clubs.html` |
| **Profiles** | `http://localhost/UniConnect/Profilepage/` |
| **Messages** | `http://localhost/UniConnect/Messagespage/` |
| **Directory** | `http://localhost/UniConnect/Directorypage/` |
| **Login** | `http://localhost/UniConnect/loginPage/` |

## Usage

### For Students

1. **Create Account** - Sign up through the login page
2. **Explore Events** - Browse available university events
3. **Register for Events** - Click register button and confirm
4. **Join Clubs** - Discover and join clubs of interest
5. **Update Profile** - Add photo, bio, and interests
6. **Connect** - Send messages and find peers

### For Administrators

1. **Create Events** - Add new university events with details
2. **Manage Registrations** - View and approve event registrations
3. **Manage Clubs** - Create and organize clubs
4. **Monitor Users** - View user profiles and activity
5. **Generate Reports** - Export event and user data

### For Developers

1. **Review MIGRATION-GUIDE.md** - Understand HTML to PHP conversion
2. **Check config.php** - Database and API configuration
3. **Examine event-register-handler.php** - AJAX patterns and database queries
4. **Modify styles** - Update CSS files for branding

## File Descriptions

### Core Application Files

| File | Purpose | Type |
|------|---------|------|
| `HOMEpage/index.php` | Main entry point and homepage | Backend |
| `HOMEpage/dashboard.php` | User personalized dashboard | Backend |
| `loginPage/index.php` | User authentication and login | Backend |
| `Eventpage/events.php` | Event listing and details page | Backend |
| `Eventpage/event-register-handler.php` | AJAX handler for registrations | API (Backend) |
| `Eventpage/config.php` | Database and app configuration | Config |
| `Clubpage/clubs.html` | Club discovery and listing | Frontend |
| `Profilepage/index.html` | User profile page | Frontend |
| `Messagespage/messages.html` | User messaging interface | Frontend |
| `Directorypage/directory.html` | Community member directory | Frontend |

### Frontend Assets (Styles & Scripts)

| Pattern | Purpose |
|---------|---------|
| `*-styles.css` | Page-specific styling (responsive design) |
| `*-script.js` | Interactive features, DOM manipulation, AJAX |
| `*-header.php` | Shared navigation components |
| `*-footer.php` | Shared footer with links and info |

### Database Files

| File | Purpose |
|------|---------|
| `Eventpage/database-schema.sql` | Database structure, tables, and sample data |

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview and setup guide |
| `Eventpage/README.md` | Events module specific documentation |
| `Eventpage/MIGRATION-GUIDE.md` | Guide for HTML to PHP migration patterns |

## Troubleshooting

### ❌ Database Connection Error

**Problem:** "Connection failed" or "Can't connect to MySQL server"

**Solutions:**
- Verify MySQL daemon is running: `sudo systemctl status mysql`
- Check credentials in `Eventpage/config.php`
- Verify database `uniconnect` exists: `mysql -u root -p -e "SHOW DATABASES;"`
- Check user permissions: `mysql -u root -p -e "SHOW GRANTS FOR 'root'@'localhost';"`

```bash
# To start MySQL on Linux
sudo systemctl start mysql

# On Mac with Homebrew
brew services start mysql
```

### ❌ PHP Not Displaying / Blank Pages

**Problem:** Pages show blank or raw PHP code

**Solutions:**
- Verify PHP is installed: `php --version`
- Check PHP is enabled in Apache: `a2enmod php8.1`
- Restart Apache: `sudo systemctl restart apache2`
- Check PHP error logs: `tail -f /var/log/apache2/error.log`
- Verify file permissions: `ls -la HOMEpage/` (should show 644 for files)

### ❌ AJAX Requests Not Working

**Problem:** "Failed AJAX request" or no response from server

**Solutions:**
- Open browser Developer Tools (F12) → Console tab
- Check for JavaScript errors
- Verify event-register-handler.php returns JSON
- Test with curl: `curl -X POST http://localhost/UniConnect/Eventpage/event-register-handler.php`
- Check Apache logs for 404 errors

### ❌ Styling Not Applied

**Problem:** Pages appear unstyled or with broken layout

**Solutions:**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Verify CSS files in Network tab (F12)
- Check file paths in HTML are relative (e.g., `./styles.css`)
- Ensure .css file permissions: `chmod 644 *.css`

### ❌ Events Not Showing

**Problem:** Events page empty or no results

**Solutions:**
- Verify database imported successfully: `mysql -u root -p uniconnect -e "SELECT COUNT(*) FROM events;"`
- Check `Eventpage/config.php` database credentials
- Review browser console for JavaScript errors
- Check server error logs for PHP warnings

## Contributing

We welcome contributions! Whether it's bug fixes, features, or documentation improvements, your help is appreciated.

### How to Contribute

1. **Fork the Repository** on GitHub
   ```bash
   # Click "Fork" on GitHub and clone your fork
   git clone https://github.com/yourusername/UniConnect.git
   cd UniConnect
   git remote add upstream https://github.com/original-owner/UniConnect.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/issue-description
   ```

3. **Make Your Changes**
   - Write clean, well-documented code
   - Follow existing code style and conventions
   - Add comments for complex logic
   - Test thoroughly before committing

4. **Commit with Clear Messages**
   ```bash
   git add .
   git commit -m "Add feature: description of changes"
   # Good message format:
   # - "Add: new feature description"
   # - "Fix: bug description"
   # - "Docs: documentation updates"
   ```

5. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Go to GitHub and create a Pull Request
   - Describe changes clearly
   - Reference related issues (e.g., "Fixes #123")

### Contribution Guidelines

- **Code Style** - Follow PSR-12 for PHP, ES6+ for JavaScript
- **Database** - Use prepared statements to prevent SQL injection
- **Security** - Sanitize user inputs, validate server-side
- **Testing** - Test on both frontend and backend
- **Documentation** - Update README if adding features

## Advanced Topics

### Database Schema

The `Eventpage/database-schema.sql` includes:
- **users** - User accounts and authentication
- **events** - University events and details
- **event_registrations** - User event registrations
- **clubs** - Club information
- **club_members** - Club membership records
- **messages** - Private messaging system

### AJAX Architecture

UniConnect uses AJAX for:
- Event registration without page reload
- Dynamic club listing
- Real-time message notifications
- Profile updates

See `event-register-handler.php` for AJAX pattern examples.

### Security Considerations

- ✅ Use prepared statements for all database queries
- ✅ Sanitize and validate all user inputs
- ✅ Hash passwords using PHP's `password_hash()`
- ✅ Implement CSRF tokens for form submissions
- ✅ Use HTTPS in production
- ✅ Keep PHP and MySQL updated
- ✅ Follow OWASP security guidelines

## Roadmap

### Current (v2.0)
- ✅ PHP backend with MySQL database
- ✅ AJAX event registration
- ✅ User authentication
- ✅ Responsive design

### Planned (v3.0)
- 🚀 REST API
- 🚀 Real-time notifications with WebSockets
- 🚀 Mobile app integration
- 🚀 Advanced search and filters
- 🚀 User roles and permissions

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Usage**: You're free to use, modify, and distribute this project with attribution.

## FAQ

**Q: Can I use UniConnect for my university?**  
A: Yes! The project is designed to be deployed in educational institutions. Check with your IT department.

**Q: What if I don't have a database?**  
A: The app has fallback sample data, but won't persist new entries. We recommend setting up MySQL.

**Q: How do I change the colors/branding?**  
A: Edit the CSS files in each folder (`*-styles.css`) or update `config.php` for global settings.

**Q: Can I add my own features?**  
A: Absolutely! Follow the contribution guidelines and submit a pull request.

## Support & Community

### Get Help

- 📖 **Documentation** - Check [Eventpage/README.md](Eventpage/README.md) and [Eventpage/MIGRATION-GUIDE.md](Eventpage/MIGRATION-GUIDE.md)
- 🐛 **Found a Bug?** - Open an [Issue](https://github.com/yourusername/UniConnect/issues)
- 💡 **Have an Idea?** - Start a [Discussion](https://github.com/yourusername/UniConnect/discussions)
- 📧 **Contact** - Reach out to your project administrator

### Related Resources

- [PHP Documentation](https://www.php.net/docs.php)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [OWASP Security Guide](https://owasp.org/)

## Project Status

| Item | Status |
|------|--------|
| **Development** | 🟢 Active |
| **Version** | 2.0 (PHP with Database) |
| **PHP Version** | 7.4+ |
| **MySQL Version** | 5.7+ |
| **Last Updated** | April 2026 |
| **Maintenance** | Active |

---

<div align="center">

**Made with ❤️ for university communities**

Built to connect. Designed to inspire. Built to scale.

[⬆ Back to Top](#uniconnect)

</div>
