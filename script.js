// --- AMN SHOPPING MALL 200 GROCERIES DATASET ---
const segments = [
    "Segment 1: Fresh Produce & Fruits",
    "Segment 2: Pantry Staples & Grains",
    "Segment 3: Dairy, Beverages & Snacks",
    "Segment 4: Household & Personal Care"
];

// Unsplash high-grade fallback food & household photos
const sampleImages = [
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80", // fresh salad
    "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=500&q=80", // apples/fruits
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80", // rice/grains
    "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80", // dairy milk
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80", // household care
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80", // bread/bakery
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&q=80", // snacks/sweets
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80"  // beverage
];

// Item naming templates per segment
const segmentItemTemplates = {
    "Segment 1: Fresh Produce & Fruits": [
        "Organic Red Apples", "Fresh Cavendish Bananas", "Ripe Hass Avocados", "Crisp Garden Lettuce", "Juicy Valencia Oranges",
        "Vine-Ripened Tomatoes", "Fresh Organic Carrots", "Sweet Bell Peppers", "Fresh Broccoli Crowns", "Baby Spinach Leaves",
        "Golden Pineapples", "Fresh Green Cabbage", "Organic Red Onions", "Fresh Garlic Bulbs", "Zucchini Squash",
        "Fresh Cucumber", "Fresh Lemons", "Fresh Limes", "Fresh Ginger Root", "Sweet Corn Cobs",
        "Fresh Mushrooms", "Fresh Green Beans", "Fresh Celery Stalks", "Ripe Mangoes", "Fresh Watermelon",
        "Fresh Papaya", "Fresh Strawberries", "Fresh Blueberries", "Fresh Blackberries", "Fresh Raspberries",
        "Red Seedless Grapes", "Green Seedless Grapes", "Fresh Pears", "Fresh Peaches", "Fresh Plums",
        "Fresh Kiwi", "Fresh Pomegranate", "Fresh Grapefruit", "Fresh Cantaloupe", "Fresh Honeydew Melon",
        "Fresh Eggplant", "Fresh Okra", "Fresh Beetroot", "Fresh Radishes", "Fresh Turnips",
        "Fresh Sweet Potatoes", "Fresh White Yams", "Fresh Taro Root", "Fresh Plantains", "Fresh Spring Onions"
    ],
    "Segment 2: Pantry Staples & Grains": [
        "Premium Basmati Rice", "Long Grain Parboiled Rice", "Local Brown Rice", "Jasmine Fragrant Rice", "Whole Wheat Flour",
        "All-Purpose Baking Flour", "Semolina Grain Flour", "Garri White Fine", "Yellow Cassava Garri", "Pounded Yam Flour",
        "Rolled Oats Breakfast", "Instant Oat Cereal", "Macaroni Pasta", "Spaghetti Pasta", "Fusilli Spiral Pasta",
        "Penne Rigate Pasta", "Whole Wheat Spaghetti", "Refined White Sugar", "Organic Brown Sugar", "Pure Iodized Table Salt",
        "Sea Salt Flakes", "Vegetable Cooking Oil", "Pure Olive Oil", "Canola Cooking Oil", "Coconut Cooking Oil",
        "Red Palm Oil", "Tomato Paste Tin", "Curry Powder Spice", "Thyme Leaves Spice", "Ginger Ground Spice",
        "Garlic Powder Spice", "Black Pepper Ground", "White Pepper Ground", "Bouillon Seasoning Cubes", "Chicken Stock Cubes",
        "Beef Stock Cubes", "Brown Lentils", "Red Kidney Beans", "Black-Eyed Peas", "Pigeon Peas",
        "Chickpeas Garbanzo", "Soybeans Grain", "White Garri Flakes", "Corn Meal Polenta", "Wheat Bran Cereal",
        "Honey Natural Pure", "Apple Cider Vinegar", "White Distilled Vinegar", "Baking Soda", "Baking Powder"
    ],
    "Segment 3: Dairy, Beverages & Snacks": [
        "Full Cream Milk Powder", "Evaporated Milk Tin", "Fresh Whole Milk Liquid", "Unsalted Butter Block", "Cheddar Cheese Block",
        "Mozzarella Cheese Shredded", "Greek Yogurt Plain", "Strawberry Flavored Yogurt", "Vanilla Ice Cream Tub", "Fresh Chicken Eggs Crate",
        "Instant Coffee Granules", "Roasted Coffee Beans", "Ceylon Black Tea Bags", "Green Tea Bags", "Cocoa Chocolate Drink Mix",
        "Malt Energy Drink Can", "Sparkling Soda Water", "Natural Mineral Water Bottle", "Orange Fruit Juice", "Apple Fruit Juice",
        "Digestive Wheat Biscuits", "Shortbread Cookies", "Chocolate Chip Cookies", "Crispy Potato Chips", "Plantain Chips Crisps",
        "Mixed Nut Assortment", "Roasted Cashew Nuts", "Peanut Butter Creamy", "Strawberry Fruit Jam", "Orange Marmalade Jam",
        "Milk Chocolate Bar", "Dark Chocolate Bar", "Chewing Gum Mint", "Fruit Gummy Candies", "Wafer Rolls Chocolate",
        "Sponge Cake Slice", "Cream Crackers Biscuits", "Ginger Biscuit Snaps", "Granola Energy Bar", "Corn Flakes Cereal Box",
        "Choco Pops Cereal", "Muesli Fruit Mix", "Condensed Milk Tin", "Whipped Dairy Cream", "Cream Cheese Spread",
        "Parmesan Cheese Grated", "Iced Tea Lemon", "Herbal Chamomile Tea", "Energy Boost Drink", "Smoothie Fruit Blend"
    ],
    "Segment 4: Household & Personal Care": [
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
    ]
};

let allProducts = [];
let cart = [];
let currentFilter = 'all';
let currentSearchTerm = '';
let currentSort = 'default';
let currentPage = 1;
const itemsPerPage = 24;

// Generate exactly 200 products (50 per segment)
function generateProducts() {
    let idCounter = 1;
    segments.forEach(segment => {
        const items = segmentItemTemplates[segment];
        items.forEach((itemName, index) => {
            // Generate realistic luxury pricing in NGN (e.g. ₦1,500 to ₦28,000)
            const basePrice = Math.floor(Math.random() * 26500) + 1500;
            const image = sampleImages[(idCounter - 1) % sampleImages.length];
            
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
