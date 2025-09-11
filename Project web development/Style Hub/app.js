        // --- ICON INITIALIZATION ---
        lucide.createIcons();

        // --- DUMMY DATA ---
        const products = [
            { id: 1, name: 'Crimson Silk Splendor', price: 7999, fabric: 'Silk', color: 'Red', rating: 4.8, reviews: 120, image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FyZWV8ZW58MHx8MHx8fDA%3D', category: 'Silk', newArrival: true, images: ['https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FyZWV8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FyZWV8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FyZWV8ZW58MHx8MHx8fDA%3D'] },
            { id: 2, name: 'Azure Cotton Breeze', price: 2499, fabric: 'Cotton', color: 'Blue', rating: 4.5, reviews: 85, image: 'https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FyZWV8ZW58MHx8MHx8fDA%3D', category: 'Cotton', images: ['https://placehold.co/600x800/4682B4/FFFFFF?text=Cotton+Saree', 'https://placehold.co/600x800/4682B4/FFFFFF?text=View+2', 'https://placehold.co/600x800/4682B4/FFFFFF?text=View+3'] },
            { id: 3, name: 'Emerald Designer Drape', price: 12999, fabric: 'Georgette', color: 'Green', rating: 4.9, reviews: 210, image: 'https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhcmVlfGVufDB8fDB8fHww', category: 'Designer', trending: true, images: ['https://placehold.co/600x800/006400/FFFFFF?text=Designer', 'https://placehold.co/600x800/006400/FFFFFF?text=View+2', 'https://placehold.co/600x800/006400/FFFFFF?text=View+3'] },
            { id: 4, name: 'Golden Bridal Kanjeevaram', price: 25999, fabric: 'Silk', color: 'Gold', rating: 5.0, reviews: 350, image: 'https://www.studio149fashion.com/cdn/shop/files/DSC8197kj.jpg?v=1713985108&width=493', category: 'Wedding', images: ['https://placehold.co/600x800/FFD700/000000?text=Bridal+Saree', 'https://placehold.co/600x800/FFD700/000000?text=View+2', 'https://placehold.co/600x800/FFD700/000000?text=View+3'] },
            { id: 5, name: 'Midnight Blue Georgette', price: 6599, fabric: 'Georgette', color: 'Blue', rating: 4.6, reviews: 95, image: 'https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FyZWV8ZW58MHx8MHx8fDA%3D', category: 'Daily Wear', newArrival: true, images: ['https://placehold.co/600x800/00008B/FFFFFF?text=Georgette', 'https://placehold.co/600x800/00008B/FFFFFF?text=View+2', 'https://placehold.co/600x800/00008B/FFFFFF?text=View+3'] },
            { id: 6, name: 'Sunshine Yellow Cotton', price: 1999, fabric: 'Cotton', color: 'Yellow', rating: 4.4, reviews: 60, image: 'https://images.unsplash.com/photo-1678705730064-a7ecbab4b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMHNhcmVlfGVufDB8fDB8fHww', category: 'Cotton', trending: true, images: ['https://placehold.co/600x800/FFFF00/000000?text=Cotton+Saree', 'https://placehold.co/600x800/FFFF00/000000?text=View+2', 'https://placehold.co/600x800/FFFF00/000000?text=View+3'] },
            { id: 7, name: 'Royal Purple Silk', price: 9899, fabric: 'Silk', color: 'Purple', rating: 4.7, reviews: 150, image: 'https://www.studio149fashion.com/cdn/shop/files/7_0995246a-9f4f-4442-9417-c2716cf004a9.png?v=1756361376&width=600', category: 'Silk', images: ['https://placehold.co/600x800/800080/FFFFFF?text=Silk+Saree', 'https://placehold.co/600x800/800080/FFFFFF?text=View+2', 'https://placehold.co/600x800/800080/FFFFFF?text=View+3'] },
            { id: 8, name: 'Pastel Green Floral', price: 3299, fabric: 'Cotton', color: 'Green', rating: 4.5, reviews: 77, image: 'https://images.unsplash.com/photo-1610030469839-f909584b43f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhcmVlfGVufDB8fDB8fHww', category: 'Daily Wear', newArrival: true, images: ['https://placehold.co/600x800/98FB98/000000?text=Floral+Saree', 'https://placehold.co/600x800/98FB98/000000?text=View+2', 'https://placehold.co/600x800/98FB98/000000?text=View+3'] },
            { id: 9, name: 'Scarlet Red Wedding Saree', price: 18999, fabric: 'Silk', color: 'Red', rating: 4.9, reviews: 250, image: 'https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VkZGluZyUyMHNhcmVlfGVufDB8fDB8fHww', category: 'Wedding', trending: true, images: ['https://placehold.co/600x800/DC143C/FFFFFF?text=Wedding+Saree', 'https://placehold.co/600x800/DC143C/FFFFFF?text=View+2', 'https://placehold.co/600x800/DC143C/FFFFFF?text=View+3'] },
            { id: 10, name: 'Classic Black Georgette', price: 7299, fabric: 'Georgette', color: 'Black', rating: 4.8, reviews: 180, image: 'https://www.studio149fashion.com/cdn/shop/files/MEENAKSHIXSTUDIO149-202.jpg?v=1714842144&width=360', category: 'Designer', images: ['https://placehold.co/600x800/000000/FFFFFF?text=Classic+Saree', 'https://placehold.co/600x800/000000/FFFFFF?text=View+2', 'https://placehold.co/600x800/000000/FFFFFF?text=View+3'] },
            { id: 11, name: 'Ivory White Cotton', price: 2199, fabric: 'Cotton', color: 'White', rating: 4.3, reviews: 55, image: 'https://www.almaarifashion.com/cdn/shop/files/5R1A0001_3e0fa95a-4c29-40ba-a0c9-de5f7ec70afd.jpg?v=1754994112&width=900', category: 'Daily Wear', images: ['https://placehold.co/600x800/F5F5F5/000000?text=Ivory+Saree', 'https://placehold.co/600x800/F5F5F5/000000?text=View+2', 'https://placehold.co/600x800/F5F5F5/000000?text=View+3'] },
            { id: 12, name: 'Peacock Blue Silk', price: 11599, fabric: 'Silk', color: 'Blue', rating: 4.8, reviews: 195, image: 'https://images.unsplash.com/photo-1610189025857-f42fe6e8dd91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FyZWV8ZW58MHx8MHx8fDA%3D', category: 'Silk', trending: true, newArrival: true, images: ['https://placehold.co/600x800/333399/FFFFFF?text=Peacock+Silk', 'https://placehold.co/600x800/333399/FFFFFF?text=View+2', 'https://placehold.co/600x800/333399/FFFFFF?text=View+3'] },
        ];

        const categories = [
            { name: 'Silk', image: 'https://t4.ftcdn.net/jpg/00/17/49/37/360_F_17493746_NxmDWBzvxFZjwi2lmDXVddPTI4nlb44p.jpg' },
            { name: 'Cotton', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9uGQxHkc01ONvoD6EmeisQIMTUHAa-HDdXbbW2Xz9VnPHpTHlS57UMElsav173QyZA7E&usqp=CAU' },
            { name: 'Designer', image: 'https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhcmVlfGVufDB8fDB8fHww' },
            { name: 'Wedding', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5F_1EDU-tICLm1A86ltYh3WO_9j7QWw2SQ&s' },
            { name: 'Daily Wear', image: 'https://me99.in/cdn/shop/files/Stylish_Plain_Georgette_Saree_3.jpg?v=1737351508&width=823' },
        ];

        let cart = [];

        // --- RENDER FUNCTIONS ---

        function renderProductCard(product) {
            return `
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transition-transform transform hover:-translate-y-2 flex flex-col">
                <div class="zoom-container relative">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-80 object-cover cursor-pointer" onclick="navigateTo('product-detail', ${product.id})">
                    <button aria-label="Add to wishlist" class="absolute top-3 right-3 bg-white/80 p-2 rounded-full text-gray-600 hover:text-red-500 transition-colors">
                        <i data-lucide="heart"></i>
                    </button>
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="font-bold text-lg truncate flex-grow">${product.name}</h3>
                    <div class="flex justify-between items-center mt-2">
                        <p class="text-xl font-semibold text-[#6a4f4b] dark:text-[#e2c2b3]">₹${product.price.toLocaleString()}</p>
                        <div class="flex items-center">
                            <i data-lucide="star" class="w-4 h-4 text-yellow-500 fill-current"></i>
                            <span class="text-sm ml-1 text-gray-600 dark:text-gray-400">${product.rating}</span>
                        </div>
                    </div>
                    <button class="w-full mt-4 bg-[#6a4f4b] text-white py-2 rounded-md hover:bg-[#5a3f3b] transition" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        }

        function renderProducts(productsToRender) {
            const productGrid = document.getElementById('product-grid');
            productGrid.innerHTML = productsToRender.map(renderProductCard).join('');
            lucide.createIcons();
        }

        function renderCategories() {
            const categoryGrid = document.getElementById('category-grid');
            categoryGrid.innerHTML = categories.map(cat => `
            <div class="text-center group cursor-pointer" onclick="navigateTo('products', { fabric: '${cat.name === 'Daily Wear' ? 'Cotton' : cat.name}' })">
                <div class="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg transform transition group-hover:scale-110 border-4 border-transparent group-hover:border-[#c4a484]">
                    <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover">
                </div>
                <h3 class="mt-4 font-semibold text-lg">${cat.name}</h3>
            </div>
        `).join('');
        }

        function renderCarousels() {
            const newArrivalsCarousel = document.getElementById('new-arrivals-carousel');
            const trendingCarousel = document.getElementById('trending-carousel');
            const newArrivals = products.filter(p => p.newArrival);
            const trending = products.filter(p => p.trending);

            newArrivalsCarousel.innerHTML = newArrivals.map(p => `<div class="carousel-item">${renderProductCard(p)}</div>`).join('');
            trendingCarousel.innerHTML = trending.map(p => `<div class="carousel-item">${renderProductCard(p)}</div>`).join('');
            lucide.createIcons();
        }

        function renderProductDetail(productId) {
            const product = products.find(p => p.id === productId);
            const content = document.getElementById('product-detail-content');
            if (!product) {
                content.innerHTML = `<p>Product not found.</p>`;
                return;
            }
            content.innerHTML = `
            <div class="flex flex-col gap-4">
                 <div class="aspect-w-3 aspect-h-4">
                    <img id="main-product-image" src="${product.images[0]}" alt="${product.name}" class="w-full object-cover rounded-lg shadow-lg">
                </div>
                <div class="grid grid-cols-4 gap-4">
                    ${product.images.map((img, index) => `
                        <img src="${img}" alt="Thumbnail ${index + 1}" class="w-full h-24 object-cover rounded-md cursor-pointer border-2 hover:border-[#c4a484] transition ${index === 0 ? 'border-[#c4a484]' : 'border-transparent'}" onclick="changeMainImage('${img}', this)">
                    `).join('')}
                </div>
            </div>
            <div>
                <h1 class="text-4xl font-bold mb-4">${product.name}</h1>
                <div class="flex items-center mb-4">
                    <div class="flex text-yellow-500">
                        ${[...Array(5)].map((_, i) => `<i data-lucide="star" class="w-5 h-5 ${i < Math.round(product.rating) ? 'fill-current' : ''}"></i>`).join('')}
                    </div>
                    <span class="ml-2 text-gray-600 dark:text-gray-400">(${product.reviews} reviews)</span>
                </div>
                <p class="text-3xl font-bold text-[#6a4f4b] dark:text-[#e2c2b3] mb-6">₹${product.price.toLocaleString()}</p>
                <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">A masterpiece of traditional craftsmanship, this ${product.fabric} saree in a stunning ${product.color.toLowerCase()} hue is perfect for any grand occasion.</p>
                <div class="mb-6 border-t pt-4">
                    <h3 class="font-bold mb-2">Details:</h3>
                    <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        <li><strong>Fabric:</strong> ${product.fabric}</li>
                        <li><strong>Color:</strong> ${product.color}</li>
                        <li><strong>Care:</strong> Dry clean only</li>
                    </ul>
                </div>
                <div class="flex flex-col sm:flex-row gap-4">
                     <button class="flex-1 bg-[#6a4f4b] text-white py-3 rounded-md text-lg hover:bg-[#5a3f3b] transition-transform transform hover:scale-105" onclick="addToCart(${product.id})">Add to Cart</button>
                     <button class="flex-1 bg-green-600 text-white py-3 rounded-md text-lg hover:bg-green-700 transition-transform transform hover:scale-105" onclick="buyNow(${product.id})">Buy Now</button>
                </div>
            </div>
        `;
            lucide.createIcons();
        }

        function renderCart() {
            const cartContent = document.getElementById('cart-content');
            if (cart.length === 0) {
                cartContent.innerHTML = `
                <div class="text-center py-16">
                    <i data-lucide="shopping-bag" class="mx-auto h-24 w-24 text-gray-400"></i>
                    <h2 class="mt-6 text-2xl font-semibold">Your cart is empty</h2>
                    <p class="mt-2 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
                    <button class="mt-6 bg-[#c4a484] text-white px-6 py-2 rounded-full hover:bg-[#b89474] text-lg" onclick="navigateTo('products')">Start Shopping</button>
                </div>
            `;
                lucide.createIcons();
                return;
            }

            const cartItemsHTML = cart.map(item => {
                const product = products.find(p => p.id === item.id);
                return `
                <div class="flex items-center gap-4 sm:gap-6 border-b py-4">
                    <img src="${product.image}" alt="${product.name}" class="w-24 h-32 object-cover rounded-md">
                    <div class="flex-grow">
                        <h3 class="font-bold">${product.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400">₹${product.price.toLocaleString()}</p>
                         <button class="text-red-500 text-sm mt-2 hover:underline" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="w-8 h-8 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="w-8 text-center font-semibold">${item.quantity}</span>
                        <button class="w-8 h-8 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <p class="font-semibold w-24 text-right hidden sm:block">₹${(product.price * item.quantity).toLocaleString()}</p>
                </div>
            `;
            }).join('');

            const subtotal = cart.reduce((sum, item) => {
                const product = products.find(p => p.id === item.id);
                return sum + product.price * item.quantity;
            }, 0);

            cartContent.innerHTML = `
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                ${cartItemsHTML}
                <div class="mt-6 text-right">
                    <p class="text-lg">Subtotal: <span class="font-bold text-xl ml-2">₹${subtotal.toLocaleString()}</span></p>
                    <p class="text-sm text-gray-500 mt-1">Shipping & taxes calculated at checkout.</p>
                    <button class="mt-4 bg-[#6a4f4b] text-white py-3 px-8 rounded-md text-lg hover:bg-[#5a3f3b]" onclick="navigateTo('checkout')">Proceed to Checkout</button>
                </div>
            </div>
        `;
            lucide.createIcons();
        }

        function renderCheckoutSummary() {
            const summaryDiv = document.getElementById('checkout-summary');
            const totalPriceEl = document.getElementById('checkout-total-price');

            const subtotal = cart.reduce((sum, item) => {
                const product = products.find(p => p.id === item.id);
                return sum + product.price * item.quantity;
            }, 0);

            summaryDiv.innerHTML = cart.map(item => {
                const product = products.find(p => p.id === item.id);
                return `
                 <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-400">${product.name} (×${item.quantity})</span>
                    <span>₹${(product.price * item.quantity).toLocaleString()}</span>
                </div>
            `;
            }).join('');

            totalPriceEl.textContent = `₹${subtotal.toLocaleString()}`;
        }

        // --- CART LOGIC ---
        function addToCart(productId) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ id: productId, quantity: 1 });
            }
            updateCartCount();
            showToast(`Added to cart!`);
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            renderCart();
        }

        function updateQuantity(productId, quantity) {
            if (quantity < 1) {
                removeFromCart(productId);
                return;
            }
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = quantity;
            }
            updateCartCount();
            renderCart();
        }

        function updateCartCount() {
            const cartCount = document.getElementById('cart-count');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.classList.toggle('hidden', totalItems === 0);
        }

        function buyNow(productId) {
            addToCart(productId);
            navigateTo('checkout');
        }

        // --- NAVIGATION & PAGE HANDLING ---
        const pages = document.querySelectorAll('.page');
        const spinner = document.getElementById('loading-spinner');

        function navigateTo(pageId, data) {
            spinner.style.display = 'flex';

            setTimeout(() => {
                pages.forEach(page => page.classList.add('hidden'));
                const targetPage = document.getElementById(`${pageId}-page`);
                if (targetPage) {
                    targetPage.classList.remove('hidden');
                    window.scrollTo(0, 0);
                }

                if (pageId === 'home' && data) { // For anchor links
                    const element = document.querySelector(data);
                    if (element) element.scrollIntoView();
                }

                if (pageId === 'products') {
                    renderProducts(products);
                    if (data && data.fabric) {
                        document.getElementById('filter-fabric').value = data.fabric;
                        applyFilters();
                    }
                } else if (pageId === 'product-detail') {
                    renderProductDetail(data);
                } else if (pageId === 'cart') {
                    renderCart();
                } else if (pageId === 'checkout') {
                    renderCheckoutSummary();
                }

                // Close mobile menu
                document.getElementById('mobile-menu').classList.add('hidden');
                spinner.style.display = 'none';
            }, 300); // Simulate loading
        }

        // --- FILTERS & SORTING ---
        function applyFilters() {
            const fabric = document.getElementById('filter-fabric').value;
            const color = document.getElementById('filter-color').value;

            let filteredProducts = products.filter(p => {
                const fabricMatch = fabric === 'all' || p.fabric === fabric;
                const colorMatch = color === 'all' || p.color === color;
                return fabricMatch && colorMatch;
            });

            applySorting(filteredProducts);
        }

        function applySorting(productsToSort) {
            const sortValue = document.getElementById('sort-products').value;

            if (sortValue === 'price-asc') {
                productsToSort.sort((a, b) => a.price - b.price);
            } else if (sortValue === 'price-desc') {
                productsToSort.sort((a, b) => b.price - a.price);
            } else { // popularity (default)
                productsToSort.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
            }

            renderProducts(productsToSort);
        }

        // --- CHECKOUT & MODAL ---
        function placeOrder() {
            if (!document.getElementById('checkout-form').checkValidity()) {
                document.getElementById('checkout-form').reportValidity();
                return;
            }
            document.getElementById('success-modal').classList.remove('hidden');
            cart = [];
            updateCartCount();
        }

        function closeModal() {
            document.getElementById('success-modal').classList.add('hidden');
            navigateTo('home');
        }

        // --- EVENT LISTENERS ---
        document.addEventListener('DOMContentLoaded', () => {
            renderCategories();
            renderCarousels();
            updateCartCount();

            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Carousel controls
            setupCarousel('new-arrivals-carousel', 'prev-btn-new', 'next-btn-new');
            setupCarousel('trending-carousel', 'prev-btn-trending', 'next-btn-trending');

            // Filters and sorting
            document.getElementById('filter-fabric').addEventListener('change', applyFilters);
            document.getElementById('filter-color').addEventListener('change', applyFilters);
            document.getElementById('sort-products').addEventListener('change', applyFilters);

            // Hide spinner after initial load
            setTimeout(() => spinner.style.display = 'none', 500);
        });

        // --- UTILITIES ---
        function setupCarousel(carouselId, prevId, nextId) {
            const carousel = document.getElementById(carouselId);
            const prevBtn = document.getElementById(prevId);
            const nextBtn = document.getElementById(nextId);
            if (!carousel) return;

            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({ inset-inline-start: carousel.clientWidth * 0.8, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: -carousel.clientWidth * 0.8, behavior: 'smooth' });
            });
        }

        function showToast(message) {
            const toast = document.createElement('div');
            toast.textContent = message;
            toast.className = 'fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transform translate-y-20 opacity-0 transition-all duration-300';
            document.body.appendChild(toast);

            setTimeout(() => {
                toast.classList.remove('translate-y-20', 'opacity-0');
            }, 10);

            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        function changeMainImage(newSrc, thumbElement) {
            document.getElementById('main-product-image').src = newSrc;
            // Update active border on thumbnails
            const thumbnails = document.querySelectorAll('#product-detail-content img.cursor-pointer');
            thumbnails.forEach(thumb => thumb.classList.replace('border-[#c4a484]', 'border-transparent'));
            thumbElement.classList.replace('border-transparent', 'border-[#c4a484]');
        }

        // --- THEME TOGGLE ---
        const themeToggle = document.getElementById('theme-toggle');
        const htmlEl = document.documentElement;

        const savedTheme = localStorage.getItem('theme') || 'light';
        htmlEl.classList.toggle('dark', savedTheme === 'dark');

        themeToggle.addEventListener('click', () => {
            htmlEl.classList.toggle('dark');
            const isDark = htmlEl.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        