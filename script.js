(function () {
            "use strict";

            /* ============ DATA ============ */

            const WHATSAPP_NUMBER = "6281315250908";

            const products = [

                {
                    name: "Vit 1500 ml",
                    category: "Air Mineral",
                    price: 35000,
                    image: "Vit 1500 ml.jpg",
                    description: "Air mineral Vit 1500 ml."
                },

                {
                    name: "Vit 550 ml",
                    category: "Air Mineral",
                    price: 33000,
                    image: "Vit 550 ml.jpg",
                    description: "Air mineral Vit 550 ml."
                },

                {
                    name: "Vit Cup 200 ml",
                    category: "Air Mineral",
                    price: 21500,
                    image: "Vit cup.jpg",
                    description: "Air mineral Vit cup 200 ml."
                },

                {
                    name: "LE Minerale 1500 ml",
                    category: "Air Mineral",
                    price: 50000,
                    image: "le 1500.jpg",
                    description: "LE Minerale 1500 ml."
                },

                {
                    name: "LE Minerale 600 ml",
                    category: "Air Mineral",
                    price: 44000,
                    image: "le 600 ml.jpg",
                    description: "LE Minerale 600 ml."
                },

                {
                    name: "LE Minerale Galon",
                    category: "Air Mineral",
                    price: 18000,
                    image: "le galon.jpg",
                    description: "LE Minerale galon."
                },

                {
                    name: "Cleo 220 ml",
                    category: "Air Mineral",
                    price: 16500,
                    image: "cleo 220.jpg",
                    description: "Cleo 220 ml."
                },

                {
                    name: "Power F",
                    category: "Lainnya",
                    price: 19500,
                    image: "power f.jpg",
                    description: "Minuman Power F.",
                    variants: ["Ungu", "Kuning"]
                },

                {
                    name: "Panther",
                    category: "Lainnya",
                    price: 20000,
                    image: "panther.jpg",
                    description: "Minuman Panther.",
                    variants: ["Ungu", "Kuning"]
                },

                {
                    name: "Granita",
                    category: "Kopi",
                    price: 37000,
                    image: "granita.jpg",
                    description: "Minuman Granita."
                },

                {
                    name: "Ale-Ale",
                    category: "Lainnya",
                    price: 20000,
                    image: "ale ale.jpg",
                    description: "Minuman Ale-Ale.",
                    variants: ["Jeruk", "Stroberi", "Anggur", "Sirsak", "Markisa", "Mangga Harum Manis", "Leci", "Jambu", "Funflava Cocopandan", "Nanas"]
                },

                {
                    name: "Teh Rio",
                    category: "Teh",
                    price: 20000,
                    image: "teh rio.jpg",
                    description: "Teh Rio."
                },

                {
                    name: "Teh Gelas",
                    category: "Teh",
                    price: 20000,
                    image: "teh gelas.jpg",
                    description: "Teh Gelas."
                },

                {
                    name: "Golda",
                    category: "Kopi",
                    price: 35000,
                    image: "golda.jpg",
                    description: "Golda."
                },

                {
                    name: "Milku",
                    category: "Susu",
                    price: 35000,
                    image: "all milku.jpg",
                    description: "Milku.",
                    variants: ["Cokelat", "Strawberry", "Original"]
                },

                {
                    name: "Fruit Tea",
                    category: "Teh",
                    price: 45000,
                    image: "fruit tea.jpg",
                    description: "FruitTea.",
                    variants: ["Apel", "Blackcurrant", "Freeze"]
                },

                {
                    name: "Teh pucuk harum",
                    category: "Teh",
                    price: 60000,
                    image: "teh pucuk harum.jpg",
                    description: "Teh pucuk harum."
                },

                {
                    name: "FreshTea",
                    category: "Teh",
                    price: 49000,
                    image: "freshtea.jpg",
                    description: "FreshTea.",
                    variants: ["Apel", "Anggur", "Lemon", "Madu", "Jasmine"]
                },

                {
                    name: "Mizone",
                    category: "Lainnya",
                    price: 48000,
                    image: "mizone.jpg",
                    description: "Mizone."
                },

                {
                    name: "S-Tea",
                    category: "Teh",
                    price: 31000,
                    image: "s tea.jpg",
                    description: "S-Tea."
                },

                {
                    name: "Teh Botol 350 ml",
                    category: "Teh",
                    price: 42000,
                    image: "teh botol.jpg",
                    description: "Teh Botol 350 ml."
                },

                {
                    name: "Fioke 200 ml (Cup)",
                    category: "Air Mineral",
                    price: 15500,
                    image: "fioke.jpg",
                    description: "Fioke gelas."
                },

                {
                    name: "Aspen 220 ml",
                    category: "Air Mineral",
                    price: 15000,
                    image: "aspen.jpg",
                    description: "Aspen botol kecil",
                },

                {
                    name: "aqua 600 ml",
                    category: "Air Mineral",
                    price: 55000,
                    image: "icon aqua.png",
                    description: "aqua tanggung"
                },

                {
                    name: "aqua 1500 ml",
                    category: "Air Mineral",
                    price: 55000,
                    image: "aqua 1500 ml.jpg",
                    description: "aqua tanggung"
                },


            ];

            /* ============ STATE ============ */

            const state = {
                category: "Semua",
                keyword: "",
                cart: [] // { index, variant, qty }
            };

            /* ============ HELPERS ============ */

            const $ = (id) => document.getElementById(id);
            const rupiah = (n) => new Intl.NumberFormat("id-ID").format(n);
            const prefersReducedMotion = () =>
                window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            function debounce(fn, delay) {
                let timer = null;
                return (...args) => {
                    clearTimeout(timer);
                    timer = setTimeout(() => fn(...args), delay);
                };
            }

            function findCartEntry(index, variant) {
                return state.cart.find((entry) => entry.index === index && entry.variant === variant);
            }

            function getFilteredProducts() {
                const keyword = state.keyword.trim().toLowerCase();
                return products
                    .map((product, index) => ({ ...product, index }))
                    .filter((product) =>
                        (state.category === "Semua" || product.category === state.category) &&
                        product.name.toLowerCase().includes(keyword)
                    );
            }

            /* ============ RENDER: PRODUCT GRID ============ */

            function renderProducts() {
                const grid = $("productGrid");
                const filtered = getFilteredProducts();

                if (!filtered.length) {
                    grid.innerHTML = `
                <div class="empty-state">
                    <span class="glyph">🔍</span>
                    Produk tidak ditemukan. Coba kata kunci atau kategori lain.
                </div>`;
                    return;
                }

                grid.innerHTML = filtered.map((product) => {
                    const variantSelect = product.variants
                        ? `<select id="v-${product.index}" class="select" aria-label="Pilih varian ${product.name}">
                    ${product.variants.map((variant) => `<option>${variant}</option>`).join("")}
                   </select>`
                        : "";

                    return `
                <article class="card">
                    <div class="pic">
                        <img src="${product.image}" alt="${product.name}"
                             loading="lazy"
                             onload="this.classList.add('loaded')"
                             onerror="this.classList.add('loaded');this.src='images/default.jpg'">
                        <span class="badge">${product.category}</span>
                    </div>
                    <div class="content">
                        <h3>${product.name}</h3>
                        <p class="desc">${product.description}</p>
                        <div class="price">Rp${rupiah(product.price)}</div>
                        ${variantSelect}
                        <button class="add" data-add="${product.index}">＋ Tambah</button>
                    </div>
                </article>`;
                }).join("");

                // Staggered scroll-reveal for freshly rendered cards.
                document.querySelectorAll("#productGrid .card").forEach((card, i) => {
                    card.style.setProperty("--delay", `${Math.min(i * 40, 320)}ms`);
                    revealObserver.observe(card);
                });
            }

            /* ============ RENDER: CART ============ */

            function renderCart() {
                const box = $("cartItems");

                if (!state.cart.length) {
                    box.innerHTML = `
                <div class="empty">
                    🛒<br><br>
                    Keranjang masih kosong.
                </div>`;
                    $("cartCount").textContent = "0";
                    $("cartTotal").textContent = "0";
                    return;
                }

                let count = 0;
                let total = 0;

                box.innerHTML = state.cart.map((entry) => {
                    const product = products[entry.index];
                    const subtotal = product.price * entry.qty;
                    count += entry.qty;
                    total += subtotal;

                    const variantTag = entry.variant
                        ? `<span class="variant">${entry.variant}</span>`
                        : "";

                    return `
                <div class="item">
                    <div class="itemtop">
                        <strong>${product.name}</strong>
                        <strong>Rp${rupiah(subtotal)}</strong>
                    </div>
                    ${variantTag}
                    <div class="itembottom">
                        <small>Rp${rupiah(product.price)} / dus</small>
                        <div class="qty">
                            <button data-qty="-1" data-index="${entry.index}" data-variant="${entry.variant ?? ""}" aria-label="Kurangi ${product.name}">−</button>
                            <span>${entry.qty}</span>
                            <button data-qty="1" data-index="${entry.index}" data-variant="${entry.variant ?? ""}" aria-label="Tambah ${product.name}">＋</button>
                        </div>
                    </div>
                </div>`;
                }).join("");

                const countEl = $("cartCount");
                const totalEl = $("cartTotal");

                countEl.textContent = count;
                totalEl.textContent = rupiah(total);

                if (!prefersReducedMotion()) {
                    countEl.classList.remove("bump");
                    void countEl.offsetWidth;
                    countEl.classList.add("bump");

                    totalEl.classList.remove("pulse");
                    void totalEl.offsetWidth;
                    totalEl.classList.add("pulse");
                }
            }

            /* ============ CART ACTIONS ============ */

            function addToCart(index, sourceButton) {
                const product = products[index];
                if (!product) return;

                const variantSelect = product.variants ? $(`v-${index}`) : null;
                const variant = variantSelect ? variantSelect.value : null;

                const existing = findCartEntry(index, variant);
                if (existing) {
                    existing.qty += 1;
                } else {
                    state.cart.push({ index, variant, qty: 1 });
                }

                renderCart();
                openCart();
                showToast(product.name + (variant ? " • " + variant : "") + " ditambahkan");

                if (sourceButton) flyToCart(sourceButton);
            }

            function changeQty(index, variant, delta) {
                const entry = findCartEntry(index, variant);
                if (!entry) return;

                entry.qty += delta;
                if (entry.qty < 1) {
                    state.cart = state.cart.filter((item) => !(item.index === index && item.variant === variant));
                }

                renderCart();
            }

            /* ============ CART DRAWER ============ */

            function openCart() {
                $("cart").classList.add("show");
                const overlay = $("overlay");
                overlay.classList.add("show");
                requestAnimationFrame(() => overlay.classList.add("in"));
                document.body.classList.add("lock");
            }

            function closeCart() {
                $("cart").classList.remove("show");
                const overlay = $("overlay");
                overlay.classList.remove("in");
                setTimeout(() => overlay.classList.remove("show"), 250);
                document.body.classList.remove("lock");
            }

            /* ============ CATEGORY / SEARCH ============ */

            function setCategory(category, button) {
                state.category = category;
                document.querySelectorAll(".cats button").forEach((btn) => btn.classList.remove("active"));
                button.classList.add("active");
                renderProducts();
            }

            /* ============ QUICK ACTIONS (feature strip) ============ */

            function scrollToProducts() {
                const target = $("produk");
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                setTimeout(() => {
                    target.classList.add("section-focus");
                    setTimeout(() => target.classList.remove("section-focus"), 1200);
                }, 450);
            }

            function focusOrderForm() {
                openCart();
                setTimeout(() => $("customerName").focus(), 300);
            }

            function goToWhatsAppStep() {
                if (!state.cart.length) {
                    alert("Pilih produk yang mau dibeli lalu akan dikirim via WhatsApp.");
                    scrollToProducts();
                    return;
                }
                openCart();
                setTimeout(() => {
                    $("checkoutBtn").scrollIntoView({ behavior: "smooth", block: "center" });
                }, 300);
            }

            /* ============ CHECKOUT ============ */

            function validateField(el, isValid) {
                el.classList.toggle("invalid", !isValid);
                return isValid;
            }

            function checkoutWhatsApp() {
                if (!state.cart.length) {
                    alert("Keranjang masih kosong.");
                    return;
                }

                const nameEl = $("customerName");
                const phoneEl = $("customerPhone");
                const addressEl = $("customerAddress");

                const name = nameEl.value.trim();
                const phone = phoneEl.value.trim();
                const address = addressEl.value.trim();

                const nameOk = validateField(nameEl, name.length > 0);
                const phoneOk = validateField(phoneEl, /^[0-9+\-\s]{9,15}$/.test(phone));
                const addressOk = validateField(addressEl, address.length > 0);

                if (!nameOk || !phoneOk || !addressOk) {
                    alert("Lengkapi nama, nomor telepon (9-15 digit), dan alamat toko terlebih dahulu.");
                    return;
                }

                const lines = [
                    "Halo Agen Fikri Maju Bersama, saya ingin memesan:",
                    "",
                    `Nama: ${name}`,
                    `No. Telepon: ${phone}`,
                    `Alamat: ${address}`,
                    ""
                ];

                let total = 0;
                state.cart.forEach((entry) => {
                    const product = products[entry.index];
                    const subtotal = product.price * entry.qty;
                    total += subtotal;
                    lines.push(
                        `- ${product.name}` +
                        (entry.variant ? " - " + entry.variant : "") +
                        ` (${entry.qty} dus) = Rp${rupiah(subtotal)}`
                    );
                });

                lines.push("", `Total: Rp${rupiah(total)}`, "", "Mohon konfirmasi ketersediaannya. Terima kasih.");

                window.open(
                    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n")),
                    "_blank"
                );
            }

            /* ============ TOAST ============ */

            let toastTimer = null;
            function showToast(message) {
                const toastEl = $("toast");
                toastEl.textContent = "✓ " + message;
                toastEl.classList.add("show");
                clearTimeout(toastTimer);
                toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
            }

            /* ============ MICRO-ANIMATION: FLY TO CART ============ */

            function flyToCart(sourceEl) {
                if (prefersReducedMotion()) return;

                const cartBtn = $("cartOpenBtn");
                if (!sourceEl || !cartBtn) return;

                const start = sourceEl.getBoundingClientRect();
                const end = cartBtn.getBoundingClientRect();

                const dot = document.createElement("div");
                dot.className = "fly-dot";
                dot.style.left = start.left + start.width / 2 + "px";
                dot.style.top = start.top + start.height / 2 + "px";
                document.body.appendChild(dot);

                const dx = (end.left + end.width / 2) - (start.left + start.width / 2);
                const dy = (end.top + end.height / 2) - (start.top + start.height / 2);

                const animation = dot.animate(
                    [
                        { transform: "translate(0,0) scale(1)", opacity: 1 },
                        { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 60}px) scale(.85)`, opacity: 1, offset: 0.6 },
                        { transform: `translate(${dx}px, ${dy}px) scale(.25)`, opacity: 0 }
                    ],
                    { duration: 650, easing: "cubic-bezier(.22,.85,.32,1)" }
                );
                animation.onfinish = () => dot.remove();
            }

            /* ============ SCROLL REVEAL ============ */

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });

            function observeStaticReveals() {
                document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
            }

            /* ============ NAV SHADOW ON SCROLL ============ */

            function initNavScrollEffect() {
                const nav = $("siteNav");
                let ticking = false;

                window.addEventListener("scroll", () => {
                    if (ticking) return;
                    ticking = true;
                    requestAnimationFrame(() => {
                        nav.classList.toggle("is-scrolled", window.scrollY > 8);
                        $("topBtn").classList.toggle("show", window.scrollY > 500);
                        ticking = false;
                    });
                }, { passive: true });
            }

            /* ============ EVENT WIRING ============ */

            function init() {
                renderProducts();
                renderCart();
                observeStaticReveals();
                initNavScrollEffect();

                $("cartOpenBtn").addEventListener("click", openCart);
                $("heroOpenCartBtn").addEventListener("click", openCart);
                $("cartCloseBtn").addEventListener("click", closeCart);
                $("overlay").addEventListener("click", closeCart);
                $("checkoutBtn").addEventListener("click", checkoutWhatsApp);
                $("topBtn").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

                $("lihatProdukBtn").addEventListener("click", (e) => {
                    e.preventDefault();
                    scrollToProducts();
                });

                document.querySelectorAll(".features .feature").forEach((el) => {
                    el.addEventListener("click", () => {
                        const action = el.dataset.action;
                        if (action === "pilih-produk") scrollToProducts();
                        if (action === "isi-data") focusOrderForm();
                        if (action === "pesan-wa") goToWhatsAppStep();
                    });
                });

                $("search").addEventListener("input", debounce((e) => {
                    state.keyword = e.target.value;
                    renderProducts();
                }, 150));

                $("categoryList").addEventListener("click", (e) => {
                    const button = e.target.closest("button[data-category]");
                    if (!button) return;
                    setCategory(button.dataset.category, button);
                });

                $("productGrid").addEventListener("click", (e) => {
                    const button = e.target.closest("[data-add]");
                    if (!button) return;
                    addToCart(Number(button.dataset.add), button);
                });

                $("cartItems").addEventListener("click", (e) => {
                    const button = e.target.closest("[data-qty]");
                    if (!button) return;
                    const index = Number(button.dataset.index);
                    const variant = button.dataset.variant || null;
                    changeQty(index, variant, Number(button.dataset.qty));
                });

                ["customerName", "customerPhone", "customerAddress"].forEach((id) => {
                    $(id).addEventListener("input", (e) => e.target.classList.remove("invalid"));
                });
            }

            document.addEventListener("DOMContentLoaded", init);
        })();