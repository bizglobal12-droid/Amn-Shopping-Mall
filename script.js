// --- AMN SHOPPING MALL 200 GROCERIES DATASET ---
const segments = [
    "Segment 1: Fresh Produce & Fruits",
    "Segment 2: Pantry Staples & Grains",
    "Segment 3: Dairy, Beverages & Snacks",
    "Segment 4: Household & Personal Care"
];
// --- CATEGORY-SPECIFIC LUXURY PHOTO POOLS ---
const categoryImagePools = {
    "Segment 1: Fresh Produce & Fruits": [
        "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500&auto=format&fit=crop&q=80"
    ],
    "Segment 2: Pantry Staples & Grains": [
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=80"
    ],
    "Segment 3: Dairy, Beverages & Snacks": [
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=80"
    ],
    "Segment 4: Household & Personal Care": [
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format&fit=crop&q=80"
    ]
};

function getFallbackImage(name) {
    return `https://placehold.co/400x300/1e1e1e/D4AF37?text=${encodeURIComponent(name)}`;
}

function generateProducts() {
    allProducts = [];
    let idCounter = 1;
    segments.forEach(segment => {
        const items = segmentItemTemplates[segment];
        const pool = categoryImagePools[segment];
        items.forEach((itemName, index) => {
            const basePrice = Math.floor(Math.random() * 26500) + 1500;
            const imgUrl = pool[index % pool.length];
            
            allProducts.push({
                id: idCounter++,
                name: itemName,
                category: segment,
                price: basePrice,
                image: imgUrl,
                fallbackImage: getFallbackImage(itemName),
                description: `High-grade ${itemName.toLowerCase()} sourced directly under strict quality controls for AMN Shopping Mall customers.`
            });
        });
    });
}

     
         allProducts.push({
                id: idCounter++,
                name: itemName,
                category: segment,
                price: basePrice,
                image: image,
                description: `High-grade ${itemName.toLowerCase()} sourced directly under strict quality controls for AMN Shopping Mall customers.`
            });
        });
    });
}

// Initialize App on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    generateProducts();
    renderProducts();
    updateCartUI();
});

// Render Products Grid with Pagination
function renderProducts() {
    const grid = document.getElementById('productGrid');
    const titleEl = document.getElementById('currentCategoryTitle');
    
    // Filter logic
    let filtered = allProducts.filter(p => {
        const matchesCategory = currentFilter === 'all' || p.category === currentFilter;
        const matchesSearch = p.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                              p.category.toLowerCase().includes(currentSearchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Update title
    if (currentSearchTerm) {
        titleEl.innerHTML = `Search Results for "${currentSearchTerm}" (${filtered.length} found)`;
    } else if (currentFilter === 'all') {
        titleEl.innerHTML = `All Products (${filtered.length} Items)`;
    } else {
        titleEl.innerHTML = `${currentFilter} (${filtered.length} Items)`;
    }

    // Sort logic
    if (currentSort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Pagination logic
    const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
    if (currentPage > totalPages) currentPage = 1;
    
    const start = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filtered.slice(start, start + itemsPerPage);

    // Render HTML Cards
    if (paginatedItems.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 60px; color: var(--text-muted);">
            <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 15px; color: var(--gold);"></i>
            <h3>No groceries found matching your query.</h3>
        </div>`;
        document.getElementById('paginationContainer').innerHTML = '';
        return;
    }

    grid.innerHTML = paginatedItems.map(p => `
        <div class="product-card" onclick="openProductModal(${p.id})">
            <div class="product-img-wrap">
                <span class="product-tag">${p.category.split(':')[0]}</span>
                <img src="${p.image}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div>
                    <h3 class="product-name">${p.name}</h3>
                </div>
                <div class="product-footer">
                    <span class="product-price">₦${p.price.toLocaleString()}</span>
                    <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">
                        <i class="fa-solid fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Render Pagination Controls
    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const container = document.getElementById('paginationContainer');
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '';
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    container.innerHTML = html;
}

function changePage(page) {
    currentPage = page;
    renderProducts();
    window.scrollTo({ top: 500, behavior: 'smooth' });
}

function filterCategory(category, event) {
    if (event) event.preventDefault();
    currentFilter = category;
    currentSearchTerm = '';
    document.getElementById('searchInput').value = '';
    currentPage = 1;
    renderProducts();
    
    // Smooth scroll to catalog
    document.getElementById('store').scrollIntoView({ behavior: 'smooth' });
}

function handleSearch() {
    currentSearchTerm = document.getElementById('searchInput').value.trim();
    currentPage = 1;
    renderProducts();
}

function sortProducts() {
    currentSort = document.getElementById('sortSelect').value;
    renderProducts();
}

// --- Cart Management ---
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    
    // Open drawer automatically on add
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    drawer.classList.add('open');
    overlay.classList.add('open');
}

function updateCartQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const list = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotal');

    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    badge.textContent = totalCount;

    if (cart.length === 0) {
        list.innerHTML = `<div style="text-align:center; color: var(--text-muted); padding: 40px 0;">
            <i class="fa-solid fa-bag-shopping" style="font-size: 2.5rem; margin-bottom: 10px; color: var(--border-color);"></i>
            <p>Your shopping bag is empty.</p>
        </div>`;
        subtotalEl.textContent = '₦0.00';
        return;
    }

    let subtotal = 0;
    list.innerHTML = cart.map(item => {
        subtotal += item.price * item.quantity;
        return `
            <div class="cart-item-card">
                <img src="${item.image}" class="cart-item-img" alt="${item.name}">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <div class="cart-item-price">₦${(item.price * item.quantity).toLocaleString()}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    subtotalEl.textContent = `₦${subtotal.toLocaleString()}`;
}

function toggleCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
}

// --- Product Modal ---
function openProductModal(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('modalProductDetails');
    modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; align-items: center;">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 12px;">
            <div>
                <span style="color: var(--gold); font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">${product.category}</span>
                <h2 style="font-family: 'Playfair Display', serif; font-size: 1.6rem; margin: 10px 0;">${product.name}</h2>
                <div style="font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--gold); font-weight: 700; margin-bottom: 15px;">₦${product.price.toLocaleString()}</div>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px;">${product.description}</p>
                <button class="luxury-btn" onclick="addToCart(${product.id}); closeProductModal();">
                    <i class="fa-solid fa-bag-shopping"></i> Add to Shopping Bag
                </button>
            </div>
        </div>
    `;
    document.getElementById('productModal').classList.add('open');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('open');
}

// --- Checkout Modal ---
function openCheckoutModal() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items before checking out.');
        return;
    }
    toggleCartDrawer(); // Close cart drawer

    const summaryBox = document.getElementById('checkoutSummaryBox');
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const deliveryFee = 2500;
    const grandTotal = subtotal + deliveryFee;

    summaryBox.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span>Items Count (${cart.reduce((s, i) => s + i.quantity, 0)}):</span>
            <strong>₦${subtotal.toLocaleString()}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span>Express Delivery Fee:</span>
            <strong>₦${deliveryFee.toLocaleString()}</strong>
        </div>
        <hr style="border-color: var(--border-color); margin: 10px 0;">
        <div style="display: flex; justify-content: space-between; font-size: 1.1rem;">
            <span>Total Payable:</span>
            <strong style="color: var(--gold);">₦${grandTotal.toLocaleString()}</strong>
        </div>
    `;

    document.getElementById('checkoutModal').classList.add('open');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('open');
}

function submitOrder(event) {
    event.preventDefault();
    const name = document.getElementById('orderFullName').value;
    const address = document.getElementById('orderAddress').value;
    const phone = document.getElementById('orderPhone').value;

    const orderId = 'AMN-' + Math.floor(100000 + Math.random() * 900000);
    
    alert(`🎉 Order Placed Successfully!\n\nThank you, ${name}.\nOrder ID: ${orderId}\nDelivery Address: ${address}\nPhone: ${phone}\n\nOur dispatch rider will contact you shortly.`);
    
    // Clear cart and close modal
    cart = [];
    updateCartUI();
    closeCheckoutModal();
    document.querySelector('.checkout-form').reset();
}

// --- Support / Complain Form ---
function submitSupportForm(event) {
    event.preventDefault();
    const name = document.getElementById('supportName').value;
    const contact = document.getElementById('supportContact').value;
    const type = document.getElementById('supportType').value;
    const message = document.getElementById('supportMessage').value;

    alert(`✅ Thank you, ${name}!\nYour ${type} has been received by AMN Support. We will reach out to ${contact} shortly.`);
    document.querySelector('.support-form').reset();
}

// --- Voice & Image Scanner Tools ---
function startVoiceSearch() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Voice search is not supported by your current browser.');
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    
    recognition.onstart = () => {
        document.getElementById('searchInput').placeholder = 'Listening for product name...';
    };

    recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        document.getElementById('searchInput').value = spokenText;
        handleSearch();
    };

    recognition.onerror = () => {
        alert('Voice recognition error. Please try again.');
        document.getElementById('searchInput').placeholder = 'Search 200+ groceries...';
    };

    recognition.onend = () => {
        document.getElementById('searchInput').placeholder = 'Search 200+ groceries...';
    };

    recognition.start();
}

function openScannerModal() {
    document.getElementById('scannerModal').classList.add('open');
}

function closeScannerModal() {
    document.getElementById('scannerModal').classList.remove('open');
    document.getElementById('scanResultContainer').innerHTML = '';
}

function handleImageScan(event) {
    const file = event.target.files[0];
    if (!file) return;

    const resultContainer = document.getElementById('scanResultContainer');
    resultContainer.innerHTML = `<p style="color: var(--gold); margin-top: 15px;"><i class="fa-solid fa-spinner fa-spin"></i> Analyzing image against 200 inventory items...</p>`;

    setTimeout(() => {
        // Pick a random product from inventory to simulate successful AI image match
        const randomMatch = allProducts[Math.floor(Math.random() * allProducts.length)];
        
        resultContainer.innerHTML = `
            <div style="background: var(--bg-obsidian); border: 1px solid var(--gold); border-radius: 8px; padding: 15px; margin-top: 20px; text-align: left;">
                <span style="color: var(--gold); font-size: 0.75rem; font-weight: 700;">AI MATCH FOUND (98.4% Confidence)</span>
                <h4 style="margin: 6px 0;">${randomMatch.name}</h4>
                <div style="color: var(--gold); font-weight: 700; margin-bottom: 10px;">₦${randomMatch.price.toLocaleString()}</div>
                <button class="luxury-btn" style="width: 100%; padding: 8px;" onclick="addToCart(${randomMatch.id}); closeScannerModal();">
                    Add Matched Item to Bag
                </button>
            </div>
        `;
    }, 1500);
}

