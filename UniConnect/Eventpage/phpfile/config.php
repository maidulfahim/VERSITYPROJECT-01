<?php
/**
 * Database Configuration
 * Update these values with your actual database credentials
 */

// Database connection parameters
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'uniconnect');

/**
 * Create database connection
 * @return mysqli|false Returns connection object or false on failure
 */
function getDatabaseConnection() {
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if (!$conn) {
        error_log("Database connection failed: " . mysqli_connect_error());
        return false;
    }
    
    mysqli_set_charset($conn, "utf8mb4");
    return $conn;
}

/**
 * Get all events from database
 * @param mysqli $conn Database connection
 * @param string|null $category Filter by category (optional)
 * @return array Array of events
 */
function getEvents($conn, $category = null) {
    $query = "SELECT e.*, 
              (SELECT COUNT(*) FROM event_registrations WHERE event_id = e.id) as attendees,
              (SELECT COUNT(*) FROM event_registrations WHERE event_id = e.id AND user_id = ?) as is_registered
              FROM events e 
              WHERE 1=1";
    
    if ($category) {
        $query .= " AND e.category = ?";
    }
    
    $query .= " ORDER BY e.event_date ASC";
    
    $stmt = mysqli_prepare($conn, $query);
    
    if ($category) {
        mysqli_stmt_bind_param($stmt, "is", $_SESSION['user_id'], $category);
    } else {
        mysqli_stmt_bind_param($stmt, "i", $_SESSION['user_id']);
    }
    
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    
    $events = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $events[] = $row;
    }
    
    return $events;
}

/**
 * Get registered events for a user
 * @param mysqli $conn Database connection
 * @param int $user_id User ID
 * @return array Array of registered events
 */
function getRegisteredEvents($conn, $user_id) {
    $query = "SELECT e.* 
              FROM events e 
              JOIN event_registrations er ON e.id = er.event_id 
              WHERE er.user_id = ? 
              ORDER BY e.event_date ASC";
    
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "i", $user_id);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    
    $events = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $events[] = $row;
    }
    
    return $events;
}

/**
 * Get event statistics by category
 * @param mysqli $conn Database connection
 * @return array Array of category statistics
 */
function getCategoryStats($conn) {
    $query = "SELECT category, COUNT(*) as count 
              FROM events 
              GROUP BY category";
    
    $result = mysqli_query($conn, $query);
    
    $stats = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $stats[] = [
            'name' => ucfirst($row['category']),
            'color' => $row['category'],
            'count' => $row['count']
        ];
    }
    
    return $stats;
}
?>
