// Product Store Data
const productData = [
    // Books & Notes
    {
        id: 1,
        name: 'Data Structures Notes',
        category: 'books',
        price: 350,
        condition: 'new',
        seller: 'Ahmed Hassan',
        description: 'Complete handwritten notes for Data Structures course',
        emoji: '📚'
    },
    {
        id: 2,
        name: 'Chemistry Textbook',
        category: 'books',
        price: 550,
        condition: 'like-new',
        seller: 'Sarah Khan',
        description: 'Organic Chemistry 12th Edition - Used once',
        emoji: '📕'
    },
    {
        id: 3,
        name: 'Calculus Study Guide',
        category: 'books',
        price: 280,
        condition: 'used',
        seller: 'Ali Raza',
        description: 'Practice problems and solved examples',
        emoji: '📖'
    },
    {
        id: 4,
        name: 'Physics Lecture Notes',
        category: 'books',
        price: 400,
        condition: 'new',
        seller: 'Fatima Ahmed',
        description: 'Comprehensive quantum mechanics notes',
        emoji: '📝'
    },
    // Electronics
    {
        id: 5,
        name: 'USB-C Charging Cable',
        category: 'electronics',
        price: 450,
        condition: 'new',
        seller: 'Hassan Ali',
        description: '2 meters, fast charging compatible',
        emoji: '🔌'
    },
    {
        id: 6,
        name: 'Wireless Earbuds',
        category: 'electronics',
        price: 1200,
        condition: 'like-new',
        seller: 'Zainab Mohammad',
        description: 'High quality sound, 30hr battery life',
        emoji: '🎧'
    },
    {
        id: 7,
        name: 'Phone Stand',
        category: 'electronics',
        price: 250,
        condition: 'new',
        seller: 'Omar Farooq',
        description: 'Adjustable, works with all phones',
        emoji: '📱'
    },
    {
        id: 8,
        name: 'Laptop Mouse',
        category: 'electronics',
        price: 600,
        condition: 'like-new',
        seller: 'Aisha Malik',
        description: 'Optical, wireless, USB receiver',
        emoji: '🖱️'
    },
    // Clothing
    {
        id: 9,
        name: 'University Hoodie',
        category: 'clothing',
        price: 800,
        condition: 'new',
        seller: 'Ahmed Hassan',
        description: 'Official university maroon hoodie, Size M',
        emoji: '👕'
    },
    {
        id: 10,
        name: 'Sports T-Shirt',
        category: 'clothing',
        price: 300,
        condition: 'used',
        seller: 'Sarah Khan',
        description: 'Breathable, perfect for gym',
        emoji: '👚'
    },
    {
        id: 11,
        name: 'Winter Jacket',
        category: 'clothing',
        price: 1800,
        condition: 'like-new',
        seller: 'Ali Raza',
        description: 'Warm and stylish, worn twice',
        emoji: '🧥'
    },
    // Accessories
    {
        id: 12,
        name: 'Student ID Holder',
        category: 'accessories',
        price: 150,
        condition: 'new',
        seller: 'Fatima Ahmed',
        description: 'Leather, waterproof',
        emoji: '🎫'
    },
    {
        id: 13,
        name: 'Backpack',
        category: 'accessories',
        price: 1200,
        condition: 'like-new',
        seller: 'Hassan Ali',
        description: 'Spacious, with laptop compartment',
        emoji: '🎒'
    },
    {
        id: 14,
        name: 'Water Bottle',
        category: 'accessories',
        price: 400,
        condition: 'new',
        seller: 'Zainab Mohammad',
        description: 'Insulated, keeps drinks hot/cold for 12hrs',
        emoji: '🧃'
    },
    {
        id: 15,
        name: 'Calculator',
        category: 'accessories',
        price: 700,
        condition: 'used',
        seller: 'Omar Farooq',
        description: 'Scientific calculator, good condition',
        emoji: '🧮'
    },
    // Food & Snacks
    {
        id: 16,
        name: 'Energy Drink Pack',
        category: 'food',
        price: 300,
        condition: 'new',
        seller: 'Aisha Malik',
        description: '6-pack of Red Bull, expires 2026',
        emoji: '🥤'
    },
    {
        id: 17,
        name: 'Chocolate Box',
        category: 'food',
        price: 450,
        condition: 'new',
        seller: 'Ahmed Hassan',
        description: 'Assorted chocolates, fresh',
        emoji: '🍫'
    },
    {
        id: 18,
        name: 'Instant Noodles (12 pack)',
        category: 'food',
        price: 250,
        condition: 'new',
        seller: 'Sarah Khan',
        description: 'Popular brand, assorted flavors',
        emoji: '🍜'
    },
    // Sports
    {
        id: 19,
        name: 'Cricket Bat',
        category: 'sports',
        price: 2500,
        condition: 'like-new',
        seller: 'Ali Raza',
        description: 'Professional grade, barely used',
        emoji: '🏏'
    },
    {
        id: 20,
        name: 'Badminton Racket',
        category: 'sports',
        price: 900,
        condition: 'used',
        seller: 'Fatima Ahmed',
        description: 'Good condition, comes with shuttles',
        emoji: '🏸'
    },
    {
        id: 21,
        name: 'Basketball',
        category: 'sports',
        price: 650,
        condition: 'new',
        seller: 'Hassan Ali',
        description: 'Official size, great grip',
        emoji: '🏀'
    },
    {
        id: 22,
        name: 'Running Shoes',
        category: 'sports',
        price: 2200,
        condition: 'like-new',
        seller: 'Zainab Mohammad',
        description: 'Brand new, size 8, never worn',
        emoji: '👟'
    }
];

// Shopping Cart
let shoppingCart = [];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const conditionFilter = document.getElementById('conditionFilter');
const resetFilter = document.getElementById('resetFilter');
const directoryGrid = document.getElementById('directoryGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const cartCount = document.getElementById('cartCount');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(productData);
    attachEventListeners();
    loadCart();
});

// Attach event listeners
function attachEventListeners() {
    searchInput.addEventListener('input', handleFilter);
    categoryFilter.addEventListener('change', handleFilter);
    priceFilter.addEventListener('change', handleFilter);
    conditionFilter.addEventListener('change', handleFilter);
    resetFilter.addEventListener('click', resetFilters);
    cartBtn.addEventListener('click', openCart);
}

// Handle filtering
function handleFilter() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const priceRange = priceFilter.value;
    const condition = conditionFilter.value;

    const filtered = productData.filter(product => {
        const matchSearch = 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.seller.toLowerCase().includes(searchTerm);
        
        const matchCategory = category === 'all' || product.category === category;
        
        let matchPrice = true;
        if (priceRange !== 'all') {
            if (priceRange === '0-500') matchPrice = product.price < 500;
            else if (priceRange === '500-1000') matchPrice = product.price >= 500 && product.price < 1000;
            else if (priceRange === '1000-2000') matchPrice = product.price >= 1000 && product.price < 2000;
            else if (priceRange === '2000+') matchPrice = product.price >= 2000;
        }
        
        const matchCondition = condition === 'all' || product.condition === condition;

        return matchSearch && matchCategory && matchPrice && matchCondition;
    });

    displayProducts(filtered);
}

// Reset filters
function resetFilters() {
    searchInput.value = '';
    categoryFilter.value = 'all';
    priceFilter.value = 'all';
    conditionFilter.value = 'all';
    displayProducts(productData);
}

// Display products
function displayProducts(data) {
    directoryGrid.innerHTML = '';

    if (data.length === 0) {
        noResults.style.display = 'block';
        resultsCount.textContent = '0';
        return;
    }

    noResults.style.display = 'none';
    resultsCount.textContent = data.length;

    data.forEach(product => {
        const card = createProductCard(product);
        directoryGrid.appendChild(card);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'directory-card';

    const conditionClass = product.condition === 'new' ? 'new' : 
                          product.condition === 'like-new' ? 'like-new' : 'used';
    
    const categoryLabel = product.category.charAt(0).toUpperCase() + product.category.slice(1);

    card.innerHTML = `
        <div class="card-header">
            <div class="price-badge">Rs. ${product.price}</div>
            <div class="condition-badge ${conditionClass}">${product.condition.toUpperCase()}</div>
            <div class="card-avatar">${product.emoji}</div>
            <div class="card-title">${product.name}</div>
            <div class="card-subtitle">${categoryLabel}</div>
        </div>
        <div class="card-body">
            <div class="card-description">${product.description}</div>
            <div class="seller-info">
                <strong>Seller:</strong> ${product.seller}
            </div>
            <div class="card-tags">
                <span class="tag">${product.category}</span>
                <span class="tag">${product.condition}</span>
            </div>
            <div class="card-footer">
                <button class="btn-small btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn-small btn-secondary" onclick="contactSeller('${product.seller}')">Contact</button>
            </div>
        </div>
    `;

    return card;
}

// Add to cart
function addToCart(productId) {
    const product = productData.find(p => p.id === productId);
    if (!product) return;

    const existingItem = shoppingCart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        shoppingCart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showAddedNotification(product.name);
}

// Show notification
function showAddedNotification(productName) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 6px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = `✓ ${productName} added to cart!`;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Update cart count
function updateCartCount() {
    cartCount.textContent = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
}

// Open cart modal
function openCart() {
    cartModal.classList.add('show');
    displayCartItems();
}

// Close cart modal
function closeCart() {
    cartModal.classList.remove('show');
}

// Display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');

    if (shoppingCart.length === 0) {
        cartItemsContainer.style.display = 'none';
        emptyCart.style.display = 'block';
        document.querySelector('.modal-footer').style.display = 'none';
        return;
    }

    cartItemsContainer.style.display = 'flex';
    emptyCart.style.display = 'none';
    document.querySelector('.modal-footer').style.display = 'block';
    
    cartItemsContainer.innerHTML = shoppingCart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">Rs. ${item.price}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');

    updateCartTotal();
}

// Increase quantity
function increaseQuantity(productId) {
    const item = shoppingCart.find(item => item.id === productId);
    if (item) {
        item.quantity++;
        saveCart();
        displayCartItems();
    }
}

// Decrease quantity
function decreaseQuantity(productId) {
    const item = shoppingCart.find(item => item.id === productId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            removeFromCart(productId);
            return;
        }
        saveCart();
        displayCartItems();
    }
}

// Remove from cart
function removeFromCart(productId) {
    shoppingCart = shoppingCart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    displayCartItems();
}

// Update cart total
function updateCartTotal() {
    const total = shoppingCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `Rs. ${total}`;
}

// Checkout
function checkout() {
    const total = shoppingCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Order confirmed! Total: Rs. ${total}\n\nYour order has been placed. You will receive confirmation emails from the sellers.`);
    shoppingCart = [];
    saveCart();
    updateCartCount();
    closeCart();
    displayProducts(productData);
}

// Contact seller
function contactSeller(sellerName) {
    alert(`Contact request sent to ${sellerName}!\nThey will respond shortly.`);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('uniConnectCart', JSON.stringify(shoppingCart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('uniConnectCart');
    if (savedCart) {
        shoppingCart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        closeCart();
    }
});
    // You can redirect to a profile page here
    // window.location.href = `profile.php?id=${id}`;
}

// Search functionality on search button click
document.querySelector('.search-btn').addEventListener('click', handleFilter);

// Allow Enter key in search input
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleFilter();
    }
});
