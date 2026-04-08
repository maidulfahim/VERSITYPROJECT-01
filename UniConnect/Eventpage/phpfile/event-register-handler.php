<?php
/**
 * Event Registration Handler
 * Handles AJAX requests for event registration/unregistration
 */

// Start session
session_start();

// Set JSON header
header('Content-Type: application/json');

// Database connection (update with your credentials)
// $conn = mysqli_connect("localhost", "username", "password", "uniconnect");
// if (!$conn) {
//     die(json_encode(['success' => false, 'message' => 'Database connection failed']));
// }

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Please login to register for events'
    ]);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['event_id']) || !isset($data['action'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request'
    ]);
    exit;
}

$event_id = intval($data['event_id']);
$action = $data['action']; // 'register' or 'unregister'
$user_id = $_SESSION['user_id'];

// Validate action
if (!in_array($action, ['register', 'unregister'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid action'
    ]);
    exit;
}

// Simulate database operations (replace with actual database queries)
if ($action === 'register') {
    // Example query:
    // $query = "INSERT INTO event_registrations (user_id, event_id, registered_at) 
    //           VALUES (?, ?, NOW())";
    // $stmt = mysqli_prepare($conn, $query);
    // mysqli_stmt_bind_param($stmt, "ii", $user_id, $event_id);
    // $result = mysqli_stmt_execute($stmt);
    
    // For demonstration:
    $result = true;
    
    if ($result) {
        echo json_encode([
            'success' => true,
            'message' => 'Successfully registered for the event',
            'registered' => true
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Failed to register for the event'
        ]);
    }
} else {
    // Example query:
    // $query = "DELETE FROM event_registrations WHERE user_id = ? AND event_id = ?";
    // $stmt = mysqli_prepare($conn, $query);
    // mysqli_stmt_bind_param($stmt, "ii", $user_id, $event_id);
    // $result = mysqli_stmt_execute($stmt);
    
    // For demonstration:
    $result = true;
    
    if ($result) {
        echo json_encode([
            'success' => true,
            'message' => 'Successfully unregistered from the event',
            'registered' => false
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Failed to unregister from the event'
        ]);
    }
}

// Close database connection
// mysqli_close($conn);
?>
