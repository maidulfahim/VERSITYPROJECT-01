<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="UniConnect - University Social Networking Platform">
    <title>UniConnect - Connect, Collaborate, Succeed</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar" id="navbar">
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="8" fill="#6366f1"/>
                        <path d="M16 8L8 14V24H13V19H19V24H24V14L16 8Z" fill="white"/>
                    </svg>
                    <span>UniConnect</span>
                </div>
                
                <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <ul class="nav-links" id="navLinks">
                    <li><a href="#home" class="active">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#communities">Communities</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li class="auth-links">
                        <a href="../loginPage/index.php" class="btn-secondary">Login</a>
                        <a href="#register" class="btn-primary">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
