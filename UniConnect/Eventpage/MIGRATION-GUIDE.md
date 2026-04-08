# Events Page PHP Migration Guide

## ✅ Conversion Complete!

The Events page has been successfully converted from static HTML to dynamic PHP with database integration.

## 📦 Created Files

### Core PHP Files
1. **events.php** - Complete standalone version (recommended for quick start)
2. **events-modular.php** - Modular version with includes (recommended for large projects)
3. **events-header.php** - Reusable header component
4. **events-footer.php** - Reusable footer component

### Backend Files
5. **config.php** - Database configuration and helper functions
6. **event-register-handler.php** - AJAX handler for event registration

### Database & Documentation
7. **database-schema.sql** - Complete database schema with sample data
8. **README.md** - Comprehensive documentation
9. **MIGRATION-GUIDE.md** - This file

### Existing Files (Updated)
10. **events-script.js** - Updated with AJAX registration functionality
11. **events-styles.css** - No changes needed (already compatible)

## 🔄 What Changed?

### From HTML to PHP

#### Before (HTML):
```html
<!-- Static event card -->
<div class="event-card" data-category="tech">
    <h3>Hackathon 2026</h3>
    <span>156 attending</span>
</div>
```

#### After (PHP):
```php
<!-- Dynamic event card from database/array -->
<?php foreach ($events as $event): ?>
<div class="event-card" data-category="<?php echo htmlspecialchars($event['category']); ?>">
    <h3><?php echo htmlspecialchars($event['title']); ?></h3>
    <span><?php echo $event['attendees']; ?> attending</span>
</div>
<?php endforeach; ?>
```

### New Features Added

✅ **Session Management**
- User authentication support
- Personalized content based on logged-in user

✅ **Database Integration**
- Events stored in MySQL database
- Dynamic event loading
- Real-time attendee counts

✅ **Event Registration System**
- Backend AJAX handler
- Real-time registration/unregistration
- Persistent storage in database

✅ **Security Enhancements**
- SQL injection protection (prepared statements)
- XSS protection (htmlspecialchars)
- Session security

✅ **Modular Architecture**
- Reusable header/footer components
- Separation of concerns
- Easy maintenance

## 🚀 Quick Start Guide

### Method 1: Without Database (Testing)
```bash
# Just open in browser
http://localhost/UniConnect-Frontend.html/Eventpage/events.php
```
- Uses predefined array data
- No database setup required
- Perfect for UI/UX testing

### Method 2: With Database (Production)
```bash
# 1. Import database
mysql -u root -p < database-schema.sql

# 2. Update config.php with your credentials
nano config.php

# 3. Open modular version
http://localhost/UniConnect-Frontend.html/Eventpage/events-modular.php
```

## 🔧 Configuration Steps

### Step 1: Database Setup
```sql
-- Create database
CREATE DATABASE uniconnect;

-- Import schema
mysql -u root -p uniconnect < database-schema.sql
```

### Step 2: Update Config File
Edit `config.php`:
```php
define('DB_HOST', 'localhost');
define('DB_USER', 'your_username');     // Change this
define('DB_PASS', 'your_password');      // Change this
define('DB_NAME', 'uniconnect');
```

### Step 3: Start PHP Server
```bash
# Navigate to project directory
cd /path/to/UniConnect-Frontend.html/Eventpage

# Start PHP built-in server
php -S localhost:8000

# Open in browser
http://localhost:8000/events.php
```

## 📊 File Comparison

| File | Size | Purpose | Use When |
|------|------|---------|----------|
| events.html | ~20KB | Static HTML | No longer recommended |
| events.php | ~25KB | Standalone PHP | Quick setup, small projects |
| events-modular.php | ~12KB | With includes | Large projects, team development |

## 🔍 Key Differences

### Data Source
- **HTML**: Hardcoded in file
- **PHP**: Database or PHP arrays

### User Data
- **HTML**: Generic placeholders
- **PHP**: Session-based user data

### Event Registration
- **HTML**: JavaScript only (not persistent)
- **PHP**: AJAX + Database (persistent)

### Scalability
- **HTML**: Manual updates needed
- **PHP**: Automatic from database

## 🎯 Testing Checklist

- [ ] Events display correctly
- [ ] Event filtering works (All, Tech, Academic, etc.)
- [ ] Grid/List view toggle functions
- [ ] Search functionality works
- [ ] Registration buttons respond
- [ ] AJAX registration calls PHP handler
- [ ] Database updates on registration
- [ ] Session data displays correctly
- [ ] Mobile responsive layout
- [ ] No PHP/JS errors in console

## 🐛 Common Issues & Solutions

### Issue: Events not displaying
**Solution**: Check if PHP arrays have data or database connection is working
```php
// Add at top of events.php for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

### Issue: Registration not working
**Solution**: Check browser console for AJAX errors
```javascript
// In browser console
console.log('Checking registration...');
```

### Issue: Database connection failed
**Solution**: Verify credentials in config.php
```php
// Test connection
$conn = getDatabaseConnection();
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
```

### Issue: Session not working
**Solution**: Ensure session_start() is called before any output
```php
<?php
session_start(); // Must be first line
// Rest of code...
?>
```

## 🔐 Security Checklist

- [x] SQL injection protection (prepared statements used)
- [x] XSS protection (htmlspecialchars used)
- [x] Password hashing (sample in database-schema.sql)
- [ ] CSRF protection (TODO: Add tokens)
- [ ] Input validation (TODO: Add server-side validation)
- [ ] Rate limiting (TODO: Prevent spam)
- [ ] HTTPS enforcement (TODO: For production)

## 📈 Performance Tips

1. **Database Indexing**
   - Events table indexed on `category` and `event_date`
   - Registrations table indexed on `user_id` and `event_id`

2. **Caching**
   ```php
   // Add caching for category stats
   $cache_key = 'category_stats';
   $categories = get_from_cache($cache_key);
   if (!$categories) {
       $categories = getCategoryStats($conn);
       save_to_cache($cache_key, $categories, 3600);
   }
   ```

3. **Lazy Loading**
   - Implement pagination for large event lists
   - Load images on scroll

## 🔄 Next Steps

### Immediate
1. Test all functionality
2. Update database credentials
3. Import sample data
4. Test registration flow

### Short-term
- [ ] Implement user authentication
- [ ] Add event creation form
- [ ] Add event editing capability
- [ ] Implement pagination
- [ ] Add email notifications

### Long-term
- [ ] Add event comments
- [ ] Implement event categories management
- [ ] Add event analytics
- [ ] Create admin dashboard
- [ ] Add calendar integration

## 📚 Additional Resources

### Files to Review
- `README.md` - Complete documentation
- `config.php` - Database functions reference
- `database-schema.sql` - Database structure
- `events-script.js` - Frontend JavaScript

### Learning Resources
- PHP Sessions: https://www.php.net/manual/en/book.session.php
- MySQLi: https://www.php.net/manual/en/book.mysqli.php
- AJAX: https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX

## ✨ Summary

The Events page has been successfully migrated from static HTML to dynamic PHP with:
- ✅ Database integration
- ✅ User sessions
- ✅ AJAX event registration
- ✅ Modular architecture
- ✅ Security enhancements
- ✅ Comprehensive documentation

**Main Files to Use:**
- **For testing**: `events.php` (no database needed)
- **For production**: `events-modular.php` (requires database)

---

**Need Help?**
- Check `README.md` for detailed documentation
- Review `database-schema.sql` for database structure
- Inspect browser console for JavaScript errors
- Check PHP error logs for backend issues

Happy coding! 🎉
