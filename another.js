// Sample product data
const products = [
    { id: 1, name: "Aloe Vera", price: 10, image: "https://plantworldlondon.com/wp-content/uploads/2021/06/Aloe-Vera-2.jpg" },
    { id: 2, name: "Snake Plant", price: 15, image: "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w" },
    { id: 3, name: "Ficus Tree", price: 25, image: "https://mybageecha.com/cdn/shop/products/FicusTriangularis_Variegata_-1.jpg?v=1592131691" },
    { id: 4, name: "Spider Plant", price: 12, image: "https://gardengram.in/cdn/shop/products/41wsAvY34AS.jpg?v=1707302451" },
    { id: 4, name: "Bamboo Plam", price: 13, image: "https://www.rootsincare.com/wp-content/uploads/2024/02/bamboo-palm-plant-1.jpg" },
    { id: 4, name: "English Evy", price: 18, image: " https://succulentking.in/wp-content/uploads/2023/05/English-Ivy-Variegated.jpg" },
    { id: 4, name: "Peace Lily", price: 27, image: " https://cdn11.bigcommerce.com/s-fr32feerow/product_images/uploaded_images/peace-lily-01.jpg" },  
    { id: 4, name: "ZZ Plant", price: 17, image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zhxmI7O297SBwdDVyIPxBQ5O80hjVHkfyg&s" }, 
];

// State to manage the cart
let cart = [];

// Function to render products
function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ''; // Clear previous products

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(productCard);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Function to update the cart UI
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("cart-total");
    const cartBtn = document.getElementById("cartBtn");

    cartItems.innerHTML = ''; // Clear cart items

    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;

        cartItems.appendChild(cartItem);
        totalPrice += item.price;
    });

    total.innerHTML = `<h3>Total: $${totalPrice}</h3>`;
    cartBtn.innerHTML = `View Cart (${cart.length} items)`;
}

// Function to toggle the cart visibility
function toggleCart() {
    const cartSection = document.getElementById("cart");
    cartSection.style.display = cartSection.style.display === "block" ? "none" : "block";
}

// Function to handle checkout
function checkout() {
    if (cart.length > 0) {
        alert("Thank you for your purchase! Your order will be processed soon.");
        cart = []; // Clear the cart after checkout
        updateCart(); // Update the cart UI
        toggleCart(); // Close the cart
    } else {
        alert("Your cart is empty! Please add some items to your cart.");
    }
}

// Initial rendering of products
renderProducts();
