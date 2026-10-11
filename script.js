// AMN SHOPPING MALL - Clean Production Script
const segments = [
    "Segment 1: Fresh Produce & Fruits",
    "Segment 2: Pantry Staples & Grains",
    "Segment 3: Dairy, Beverages & Snacks",
    "Segment 4: Household & Personal Care"
];

const foodImages = [
    "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=500&q=80",
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80",
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80",
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80",
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&q=80",
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80"
];

const itemNames = [
    "Organic Red Apples", "Fresh Cavendish Bananas", "Ripe Hass Avocados", "Crisp Garden Lettuce", "Juicy Valencia Oranges",
    "Vine-Ripened Tomatoes", "Fresh Organic Carrots", "Sweet Bell Peppers", "Fresh Broccoli Crowns", "Baby Spinach Leaves",
    "Golden Pineapples", "Fresh Green Cabbage", "Organic Red Onions", "Fresh Garlic Bulbs", "Zucchini Squash",
    "Fresh Cucumber", "Fresh Lemons", "Fresh Limes", "Fresh Ginger Root", "Sweet Corn Cobs",
    "Fresh Mushrooms", "Fresh Green Beans", "Fresh Celery Stalks", "Ripe Mangoes", "Fresh Watermelon",
    "Fresh Papaya", "Fresh Strawberries", "Fresh Blueberries", "Fresh Blackberries", "Fresh Raspberries",
    "Red Seedless Grapes", "Green Seedless Grapes", "Fresh Pears", "Fresh Peaches", "Fresh Plums",
    "Fresh Kiwi", "Fresh Pomegranate", "Fresh Grapefruit", "Fresh Cantaloupe", "Fresh Honeydew Melon",
    "Fresh Eggplant", "Fresh Okra", "Fresh Beetroot", "Fresh Radishes", "Fresh Turnips",
    "Fresh Sweet Potatoes", "Fresh White Yams", "Fresh Taro Root", "Fresh Plantains", "Fresh Spring Onions",
    "Premium Basmati Rice", "Long Grain Parboiled Rice", "Local Brown Rice", "Jasmine Fragrant Rice", "Whole Wheat Flour",
    "All-Purpose Baking Flour", "Semolina Grain Flour", "Garri White Fine", "Yellow Cassava Garri", "Pounded Yam Flour",
    "Rolled Oats Breakfast", "Instant Oat Cereal", "Macaroni Pasta", "Spaghetti Pasta", "Fusilli Spiral Pasta",
    "Penne Rigate Pasta", "Whole Wheat Spaghetti", "Refined White Sugar", "Organic Brown Sugar", "Pure Iodized Table Salt",
    "Sea Salt Flakes", "Vegetable Cooking Oil", "Pure Olive Oil", "Canola Cooking Oil", "Coconut Cooking Oil",
    "Red Palm Oil", "Tomato Paste Tin", "Curry Powder Spice", "Thyme Leaves Spice", "Ginger Ground Spice",
    "Garlic Powder Spice", "Black Pepper Ground", "White Pepper Ground", "Bouillon Seasoning Cubes", "Chicken Stock Cubes",
    "Beef Stock Cubes", "Brown Lentils", "Red Kidney Beans", "Black-Eyed Peas", "Pigeon Peas",
    "Chickpeas Garbanzo", "Soybeans Grain", "White Garri Flakes", "Corn Meal Polenta", "Wheat Bran Cereal",
    "Honey Natural Pure", "Apple Cider Vinegar", "White Distilled Vinegar", "Baking Soda", "Baking Powder",
    "Full Cream Milk Powder", "Evaporated Milk Tin", "Fresh Whole Milk Liquid", "Unsalted Butter Block", "Cheddar Cheese Block",
    "Mozzarella Cheese Shredded", "Greek Yogurt Plain", "Strawberry Flavored Yogurt", "Vanilla Ice Cream Tub", "Fresh Chicken Eggs Crate",
    "Instant Coffee Granules", "Roasted Coffee Beans", "Ceylon Black Tea Bags", "Green Tea Bags", "Cocoa Chocolate Drink Mix",
    "Malt Energy Drink Can", "Sparkling Soda Water", "Natural Mineral Water Bottle", "Orange Fruit Juice", "Apple Fruit Juice",
    "Digestive Wheat Biscuits", "Shortbread Cookies", "Chocolate Chip Cookies", "Crispy Potato Chips", "Plantain Chips Crisps",
    "Mixed Nut Assortment", "Roasted Cashew Nuts", "Peanut Butter Creamy", "Strawberry Fruit Jam", "Orange Marmalade Jam",
    "Milk Chocolate Bar", "Dark Chocolate Bar", "Chewing Gum Mint", "Fruit Gummy Candies", "Wafer Rolls Chocolate",
    "Sponge Cake Slice", "Cream Crackers Biscuits", "Ginger Biscuit Snaps", "Granola Energy Bar", "Corn Flakes Cereal Box",
    "Choco Pops Cereal", "Muesli Fruit Mix", "Condensed Milk Tin", "Whipped Dairy Cream", "Cream Cheese Spread",
    "Parmesan Cheese Grated", "Iced Tea Lemon", "Herbal Chamomile Tea", "Energy Boost Drink", "Smoothie Fruit Blend",
    "Multi-Purpose Liquid Soap", "Dishwashing Washing Liquid", "Laundry Washing Powder", "Fabric Softener Liquid", "Bathroom Bleach Disinfectant",
    "Floor Cleaner Liquid", "Toilet Bowl Cleaner", "Glass Window Cleaner", "Antibacterial Hand Wash", "Bath Soap Bar Luxury",
    "Herbal Shampoo Bottle", "Conditioner Hair Care", "Body Lotion Moisturizer", "Vaseline Petroleum Jelly", "Deodorant Body Spray",
    "Toothpaste Mint Gel", "Toothbrushes Soft Pack", "Bathroom Tissue Rolls", "Kitchen Paper Towels", "Trash Waste Bags",
    "Mosquito Coil Insecticide", "Insect Killer Spray", "LED Electric Bulbs", "Alkaline AA Batteries", "Alkaline AAA Batteries",
    "Aluminum Food Foil", "Cling Plastic Wrap", "Food Storage Containers", "Dishwashing Sponge Scourer", "Microfiber Cleaning Cloth",
    "Hand Sanitizer Gel", "First Aid Adhesive Bandages", "Cotton Buds Swabs", "Sanitary Pads Ultra", "Baby Diapers Jumbo",
    "Baby Wipes Sensitive", "Baby Talcum Powder", "Shaving Razor Blades", "Shaving Cream Foam", "Hair Oil Nourishing",
    "Face Cleanser Wash", "Exfoliating Scrub Gel", "Air Freshener Spray", "Scented Candle Jar", "Laundry Bleach Liquid",
    "Heavy Duty Scrub Brush", "Garbage Bin Liners", "Shoe Polish Cream", "Electrical Extension Socket", "Surgical Face Masks Box"
];

let allProducts = [];
let cart = [];
let currentFilter = 'all';
let currentSearchTerm = '';
let currentSort = 'default';
let currentPage = 1;
const itemsPerPage = 24;

function initStore() {
    allProducts = [];
    for (let i = 0; i < 200; i++) {
        const name = itemNames[i % itemNames.length];
        const segIndex = Math.floor(i / 50);
        const segment = segments[segIndex];
        const price = Math.floor(Math.random() * 25000) + 1500;
        const image = foodImages[i % foodImages.length];

        allProducts.push({
            id: i + 1,
            name: name,
            category: segment,
            price: price,
            image: image,
            description: `High-grade luxury ${name.toLowerCase()} supplied exclusively by AMN Shopping Mall.`
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initStore();
    renderProducts();
    updateCartUI();
});

function renderProducts() {
    const grid = document.getElementById('productGrid');
    const titleEl = document.getElementById('currentCategoryTitle');
    if (!grid) return;

    let filtered = allProducts.filter(p => {
        const matchesCategory = currentFilter === 'all' || p.category === currentFilter;
        const matchesSearch = p.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                              p.category.toLowerCase().includes(currentSearchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (currentSearchTerm) {
        titleEl.innerText = 'Search Results (' + filtered.length + ' found)';
    } else if (currentFilter === 'all') {
        titleEl.innerText = 'All Products (200 Items)';
    } else {
        titleEl.innerText = currentFilter + ' (' + filtered.length + ' Items)';
    }

    if (currentSort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
    if (currentPage > totalPages) currentPage = 1;
    
    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    if (paginated.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: #aaa;"><h3>No products found.</h3></div>';
        document.getElementById('paginationContainer').innerHTML = '';
        return;
    }

    let html = '';
    for (let i = 0; i < paginated.length; i++) {
        const p = paginated[i];
        html += '<div class="product-card" onclick="openProductModal(' + p.id + ')">' +
            '<div class="product-img-wrap">' +
                '<span class="product-tag">AMN PRIME</span>' +
                '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' +
            '</div>' +
            '<div class="product-info">' +
                '<h3 class="product-name">' + p.name + '</h3>' +
                '<div class="product-footer">' +
                    '<span class="product-price">₦' + p.price.toLocaleString() + '</span>' +
                    '<button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(' + p.id + ')"><i class="fa-solid fa-plus"></i> Add</button>' +
                '</div>' +
            '</div>' +
        '</div>';
    }
    grid.innerHTML = html;

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const container = document.getElementById('paginationContainer');
    if (!container) return;
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    let html = '';
    for (let i = 1; i <= totalPages; i++) {
        html += '<button class="page-btn ' + (i === currentPage ? 'active' : '') + '" onclick="changePage(' + i + ')">' + i + '</button>';
    }
    container.innerHTML = html;
}

function changePage(page) {
    currentPage = page;
    renderProducts();
    window.scrollTo({ top: 400, behavior: 'smooth' });
}

function filterCategory(category, event) {
    if (event) event.preventDefault();
    currentFilter = category;
    currentSearchTerm = '';
    document.getElementById('searchInput').value = '';
    currentPage = 1;
    renderProducts();
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
    document.getElementById('cartDrawer').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
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
    if (!badge) return;

    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    badge.innerText = totalCount;

    if (cart.length === 0) {
        list.innerHTML = '<div style="text-align:center; color: #888; padding: 30px;"><p>Your shopping bag is empty.</p></div>';
        subtotalEl.innerText = '₦0.00';
        return;
    }

    let subtotal = 0;
    let html = '';
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        subtotal += item.price * item.quantity;
        html += '<div class="cart-item-card">' +
            '<img src="' + item.image + '" class="cart-item-img" alt="' + item.name + '">' +
            '<div class="cart-item-info">' +
                '<h4 class="cart-item-name">' + item.name + '</h4>' +
                '<div class="cart-item-price">₦' + (item.price * item.quantity).toLocaleString() + '</div>' +
                '<div class="cart-item-controls">' +
                    '<button class="qty-btn" onclick="updateCartQuantity(' + item.id + ', -1)">-</button>' +
                    '<span>' + item.quantity + '</span>' +
                    '<button class="qty-btn" onclick="updateCartQuantity(' + item.id + ', 1)">+</button>' +
                '</div>' +
            '</div>' +
        '</div>';
    }
    list.innerHTML = html;
    subtotalEl.innerText = '₦' + subtotal.toLocaleString();
}

function toggleCartDrawer() {
    document.getElementById('cartDrawer').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('open');
}

function openProductModal(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('modalProductDetails');
    modalBody.innerHTML = '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: center;">' +
        '<img src="' + product.image + '" alt="' + product.name + '" style="width: 100%; height: 240px; object-fit: cover; border-radius: 8px;">' +
        '<div>' +
            '<span style="color: #D4AF37; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">' + product.category + '</span>' +
            '<h2 style="font-family: Playfair Display, serif; font-size: 1.4rem; margin: 8px 0;">' + product.name + '</h2>' +
            '<div style="font-family: Playfair Display, serif; font-size: 1.4rem; color: #D4AF37; font-weight: 700; margin-bottom: 12px;">₦' + product.price.toLocaleString() + '</div>' +
            '<p style="color: #aaa; font-size: 0.9rem; margin-bottom: 15px;">' + product.description + '</p>' +
            '<button class="luxury-btn" onclick="addToCart(' + product.id + '); closeProductModal();"><i class="fa-solid fa-bag-shopping"></i> Add to Bag</button>' +
        '</div>' +
    '</div>';
    document.getElementById('productModal').classList.add('open');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('open');
}

function openCheckoutModal() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    toggleCartDrawer();

    const summaryBox = document.getElementById('checkoutSummaryBox');
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const deliveryFee = 2500;
    const grandTotal = subtotal + deliveryFee;

    summaryBox.innerHTML = '<div style="display: flex; justify-content: space-between; margin-bottom: 6px;"><span>Subtotal:</span><strong>₦' + subtotal.toLocaleString() + '</strong></div>' +
        '<div style="display: flex; justify-content: space-between; margin-bottom: 6px;"><span>Delivery Fee:</span><strong>₦' + deliveryFee.toLocaleString() + '</strong></div>' +
        '<hr style="border-color: #333; margin: 8px 0;">' +
        '<div style="display: flex; justify-content: space-between; font-size: 1.05rem;"><span>Total:</span><strong style="color: #D4AF37;">₦' + grandTotal.toLocaleString() + '</strong></div>';

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
    
    alert('🎉 Order Placed Successfully!\n\nThank you, ' + name + '.\nOrder ID: ' + orderId + '\nAddress: ' + address + '\nPhone: ' + phone);
    cart = [];
    updateCartUI();
    closeCheckoutModal();
    document.querySelector('.checkout-form').reset();
}

function submitSupportForm(event) {
    event.preventDefault();
    const name = document.getElementById('supportName').value;
    const contact = document.getElementById('supportContact').value;
    alert('✅ Thank you, ' + name + '! Your message has been received.');
    document.querySelector('.support-form').reset();
}

function startVoiceSearch() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Voice search is not supported in this browser.');
        return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.onresult = function(event) {
        document.getElementById('searchInput').value = event.results[0][0].transcript;
        handleSearch();
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
    const resBox = document.getElementById('scanResultContainer');
    resBox.innerHTML = '<p style="color: #D4AF37; margin-top: 10px;">Scanning image...</p>';
    setTimeout(function() {
        const match = allProducts[Math.floor(Math.random() * allProducts.length)];
        resBox.innerHTML = '<div style="background: #111; border: 1px solid #D4AF37; padding: 12px; margin-top: 15px; border-radius: 6px;">' +
            '<span style="color: #D4AF37; font-size: 0.7rem; font-weight: 700;">MATCH FOUND</span>' +
            '<h4 style="margin: 4px 0;">' + match.name + '</h4>' +
            '<div style="color: #D4AF37; font-weight: 700; margin-bottom: 8px;">₦' + match.price.toLocaleString() + '</div>' +
            '<button class="luxury-btn" style="width:100%; padding: 6px;" onclick="addToCart(' + match.id + '); closeScannerModal();">Add to Bag</button>' +
        '</div>';
    }, 1200);
}
