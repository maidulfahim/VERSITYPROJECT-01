# UniConnect Events Page - PHP Conversion

This directory contains the PHP version of the UniConnect Events page with database integration and modular structure.

## 📁 Files Overview

### Main Files
- **events.php** - Standalone version with all code in one file (recommended for simple setup)
- **events-modular.php** - Modular version using includes (recommended for maintainability)
- **events.html** - Original HTML version (deprecated, use PHP versions instead)

### Include Files
- **events-header.php** - Shared header with navigation (top nav + sidebar)
- **events-footer.php** - Shared footer closing tags

### Backend Files
- **config.php** - Database configuration and helper functions
- **event-register-handler.php** - AJAX handler for event registration/unregistration

### Database
- **database-schema.sql** - Database schema and sample data

### Frontend Assets
- **events-styles.css** - Events page styles
- **events-script.js** - JavaScript for interactivity

## 🚀 Quick Start

### Option 1: Simple Setup (No Database)
1. Use **events.php** - works with sample data array
2. No configuration needed
3. Perfect for testing UI/UX

### Option 2: Full Setup (With Database)
1. Import **database-schema.sql** into MySQL
2. Update **config.php** with your database credentials
3. Use **events-modular.php** (uses includes)
4. Configure session management

## 📊 Database Setup

```bash
# Import the schema
mysql -u root -p < database-schema.sql

# Or using phpMyAdmin
# Import database-schema.sql through the interface
```

### Update Database Credentials in config.php:
```php
define('DB_HOST', 'localhost');
define('DB_USER', 'your_username');
define('DB_PASS', 'your_password');
define('DB_NAME', 'uniconnect');
```

## 🔧 File Structure

```
Eventpage/
├── events.php                    # Standalone version (use this OR events-modular.php)
├── events-modular.php            # Modular version with includes
├── events-header.php             # Header include
├── events-footer.php             # Footer include
├── config.php                    # Database config & functions
├── event-register-handler.php   # AJAX registration handler
├── database-schema.sql           # Database schema
├── events-styles.css             # Styles
├── events-script.js              # Client-side JS
└── README.md                     # This file
```

## 🎯 Features

### ✅ Implemented
- ✅ Session management for user data
- ✅ Dynamic event rendering from PHP arrays/database
- ✅ Event filtering by category
- ✅ Event registration system
- ✅ Responsive layout with grid/list views
- ✅ Calendar widget
- ✅ Category statistics
- ✅ Search functionality (frontend)
- ✅ Modular include structure

### 🔜 To Implement (Next Steps)
- Add event creation form
- Implement search with database queries
- Add pagination for events
- User authentication system
- Event management (edit/delete)
- Email notifications for registrations
- Event comments/reviews

## 💡 Usage

### Basic Event Display (events.php)
```php
<?php
// Sample data is already in the file
// Just open events.php in browser
```

### Using Database (events-modular.php)
```php
<?php
// Include config
require_once 'config.php';

// Get database connection
$conn = getDatabaseConnection();

// Get events
$events = getEvents($conn);

// Get registered events for user
$my_events = getRegisteredEvents($conn, $_SESSION['user_id']);

// Get category statistics
$categories = getCategoryStats($conn);
```

### AJAX Event Registration
```javascript
// Frontend JavaScript (in events-script.js)
fetch('event-register-handler.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        event_id: eventId,
        action: 'register' // or 'unregister'
    })
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        // Update UI
    }
});
```

## 🔐 Security Notes

1. **Password Hashing**: Use `password_hash()` and `password_verify()`
2. **SQL Injection**: Use prepared statements (already implemented)
3. **XSS Protection**: Use `htmlspecialchars()` (already implemented)
4. **Session Security**: Set secure session parameters
5. **CSRF Protection**: Add CSRF tokens (TODO)

### Example Session Security:
```php
session_start([
    'cookie_lifetime' => 0,
    'cookie_httponly' => true,
    'cookie_secure' => true, // HTTPS only
    'use_strict_mode' => true
]);
```

## 🌐 Navigation Links

The events page integrates with other UniConnect pages:
- Feed: `../HOMEpage/dashboard.php`
- Clubs: `../Clubpage/clubs.php`
- Events: `events.php` (current page)
- Messages, Directory: To be implemented

## 📝 Customization

### Adding New Event Categories
1. Update database enum in `database-schema.sql`
2. Add category color in `events-styles.css`
3. Update filter buttons in PHP file

### Changing Layout
- Grid/List view toggle already implemented
- Modify CSS in `events-styles.css`
- Adjust columns in `.events-grid` class

## 🐛 Troubleshooting

### Events not displaying?
- Check database connection in config.php
- Verify events table has data
- Check PHP error logs

### Registration not working?
- Ensure session is started
- Check user is logged in
- Verify database permissions
- Check browser console for JS errors

### Styles not loading?
- Verify CSS path is correct relative to PHP file
- Clear browser cache
- Check file permissions

## 📞 Support

For issues or questions:
1. Check error logs: `/var/log/apache2/error.log`
2. Enable PHP error reporting during development
3. Review database schema matches code expectations

## 🎨 Styling

The page uses:
- Inter font family from Google Fonts
- CSS Grid for layout
- CSS Variables for theming
- Responsive breakpoints
- Indigo color scheme (#6366f1)

## 🔄 Version History

- **v1.0** - Initial HTML version
- **v2.0** - PHP conversion with database integration
- **v2.1** - Added modular structure with includes
- **v2.2** - Added AJAX registration handler

---

**Note**: Remember to update database credentials before deploying to production!
