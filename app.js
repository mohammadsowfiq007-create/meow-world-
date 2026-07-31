/* ======================================================
   Purrfect Meow World 🐾 - Core JavaScript App Engine
   Interactive Breeds Data, Web Audio Synthesizer, Canvas FX
   ====================================================== */

// 1. CAT BREEDS DATABASE
const catBreeds = [
    {
        id: "persian",
        name: "Persian Cat",
        tagline: "The Royal Fluff & Queen of Lap Cats ☁️",
        image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80",
        origin: "Iran (Persia)",
        lifespan: "12 - 17 Years",
        coat: "Long & Silky",
        weight: "3.5 - 5.5 kg",
        tags: ["Fluffy", "Calm", "Affectionate"],
        character: "Gentle, quiet, extremely peaceful, and loves lounging on soft cushions and receiving cuddles.",
        care: {
            grooming: "Requires daily combing with a metal comb to prevent matting and tangles.",
            nutrition: "High-protein wet food to maintain moisture and healthy kidney function.",
            health: "Clean eye corners daily with warm damp cloth as facial structure causes tearing.",
            playtime: "Prefers gentle interactive toys like feather wands and catnip mice."
        }
    },
    {
        id: "siamese",
        name: "Siamese Cat",
        tagline: "The Talkative & Intelligent Beauty 💙",
        image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80",
        origin: "Thailand",
        lifespan: "15 - 20 Years",
        coat: "Short & Sleek",
        weight: "3.0 - 4.5 kg",
        tags: ["Playful", "Affectionate"],
        character: "Extremely vocal, communicative, loyal, loves following you around and chatting with you all day!",
        care: {
            grooming: "Very low maintenance! Weekly rubber brush is sufficient.",
            nutrition: "Balanced active diet; keep food fresh to match their fast metabolism.",
            health: "Provide extra warm blankets in winter as short coat loses heat faster.",
            playtime: "Loves puzzle feeders, fetch games, and climbing tall cat trees."
        }
    },
    {
        id: "maine-coon",
        name: "Maine Coon",
        tagline: "The Loving Gentle Giant 👑",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
        origin: "United States",
        lifespan: "12 - 15 Years",
        coat: "Heavy & Water-resistant",
        weight: "6.0 - 9.5 kg",
        tags: ["Gentle", "Fluffy", "Playful"],
        character: "Dog-like loyalty, friendly demeanor, loves water play, and chirps happily when greeted.",
        care: {
            grooming: "Brush 2-3 times a week; pay attention to belly and tail fur.",
            nutrition: "Requires extra large bowls and high-protein food for giant muscle frame.",
            health: "Keep sturdy scratching posts available as they are very strong.",
            playtime: "Enjoys playing with running water fountains and large plush toys."
        }
    },
    {
        id: "ragdoll",
        name: "Ragdoll",
        tagline: "The Cuddly Plush Teddy Bear 🧸",
        image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80",
        origin: "United States",
        lifespan: "12 - 17 Years",
        coat: "Soft & Plush Semi-Long",
        weight: "4.5 - 8.0 kg",
        tags: ["Affectionate", "Fluffy", "Calm"],
        character: "Literally goes limp in your arms when held! Sweet-tempered, docile, and endlessly affectionate.",
        care: {
            grooming: "Soft coat doesn't mat easily; 2 times weekly brushing keeps coat shiny.",
            nutrition: "Monitor weight carefully as they love relaxing after meals.",
            health: "Keep strictly indoors due to their gentle non-aggressive nature.",
            playtime: "Loves floor play, rolling around on soft rugs, and lap cuddles."
        }
    },
    {
        id: "scottish-fold",
        name: "Scottish Fold",
        tagline: "The Sweet Owl-Faced Companion 🎀",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",
        origin: "Scotland",
        lifespan: "11 - 14 Years",
        coat: "Dense & Short",
        weight: "3.0 - 6.0 kg",
        tags: ["Affectionate", "Playful", "Calm"],
        character: "Famous for folded ears and sitting upright like a little human buddha! Calm, adaptable, & sweet.",
        care: {
            grooming: "Weekly brushing; handle tail very gently during care.",
            nutrition: "Balanced kibble & wet food with joint health supplements.",
            health: "Check folded ears weekly for clean hygiene and moisture.",
            playtime: "Enjoys laser pointers, teaser wands, and gentle lap naps."
        }
    },
    {
        id: "bengal",
        name: "Bengal Cat",
        tagline: "The Athletic Mini-Leopard 🐆",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
        origin: "United States",
        lifespan: "12 - 16 Years",
        coat: "Spotted Short Coat",
        weight: "4.0 - 7.0 kg",
        tags: ["Playful", "Active"],
        character: "High energy, wild spotted look, highly intelligent, loves water games and running at high speeds!",
        care: {
            grooming: "Minimal grooming needed; sleek coat self-maintains easily.",
            nutrition: "High protein diet to support active athletic muscles.",
            health: "Needs plenty of mental simulation to avoid boredom.",
            playtime: "Provide cat exercise wheels, agility courses, and running space."
        }
    },
    {
        id: "british-shorthair",
        name: "British Shorthair",
        tagline: "The Easygoing Teddy Bear Cheeks 🎩",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
        origin: "United Kingdom",
        lifespan: "12 - 17 Years",
        coat: "Thick, Plush & Dense",
        weight: "4.0 - 8.0 kg",
        tags: ["Calm", "Fluffy"],
        character: "Chubby cheeks, calm demeanor, independent, content sitting near you while you work.",
        care: {
            grooming: "Weekly brushing removes dead plush fur.",
            nutrition: "Control portion sizes as British Shorthairs love napping.",
            health: "Encourage daily movement with interactive toys.",
            playtime: "Enjoys chasing balls, scratching posts, and window perches."
        }
    },
    {
        id: "munchkin",
        name: "Munchkin Cat",
        tagline: "The Short-Legged Cute Speedster 🐾",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80",
        origin: "United States",
        lifespan: "12 - 15 Years",
        coat: "Short to Semi-Long",
        weight: "2.5 - 4.0 kg",
        tags: ["Playful", "Affectionate"],
        character: "Tiny legs, massive heart! Runs around corner like a sports car, super curious and cuddly.",
        care: {
            grooming: "Regular brushing depending on coat length.",
            nutrition: "Standard high quality cat nutrition.",
            health: "Provide low step-in litter boxes & ramps for furniture.",
            playtime: "Loves chasing crinkle balls and tunneling through cat tubes."
        }
    },
    {
        id: "sphynx",
        name: "Sphynx",
        tagline: "The Warm & Velvet Hugger 🌟",
        image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&q=80",
        origin: "Canada",
        lifespan: "12 - 16 Years",
        coat: "Hairless / Fine Peach Fuzz",
        weight: "3.0 - 5.0 kg",
        tags: ["Affectionate", "Playful"],
        character: "Extremely affectionate, feels like a warm suede hot water bottle! Loves wearing cute sweaters.",
        care: {
            grooming: "Weekly warm sponge bath to wipe skin natural oils.",
            nutrition: "Higher caloric intake to maintain warm body temperature.",
            health: "Keep indoors and protect skin from direct harsh sunlight.",
            playtime: "Loves snuggling under heated blankets and warm laps."
        }
    },
    {
        id: "russian-blue",
        name: "Russian Blue",
        tagline: "The Silver Gem of Cats 💎",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
        origin: "Russia",
        lifespan: "15 - 20 Years",
        coat: "Short & Silvery Blue",
        weight: "3.5 - 5.5 kg",
        tags: ["Calm", "Affectionate"],
        character: "Shy with strangers but deeply devoted and loving towards their chosen human companion.",
        care: {
            grooming: "Weekly brushing with soft bristle brush.",
            nutrition: "Loves clean routine feeding times.",
            health: "Very clean breed; keep litter box spotlessly fresh.",
            playtime: "Enjoys feather wands and quiet bonding playtime."
        }
    }
];

// 2. CAT TRIVIA FACTS
const catFacts = [
    "Cats spend 70% of their lives sleeping — that's around 13 to 16 hours a day of sweet dreams!",
    "A cat's purr vibrates at a frequency of 20-140 Hz, which is scientifically proven to lower stress and heal bones!",
    "Cats have over 20 muscles controlling their cute ears, allowing them to rotate ears 180 degrees!",
    "Every cat's nose print is unique, just like a human fingerprint!",
    "Cats can jump up to 6 times their body length in a single bound!",
    "When a cat blinks slowly at you, it's their highest sign of trust and love — a cat kiss! 😽",
    "Cats have a third eyelid called a 'haw' that protects their eyes.",
    "A cat's meow is a communication tool developed specifically to speak to humans!"
];

// STATE MANAGEMENT
let wishlist = JSON.parse(localStorage.getItem('meow_wishlist')) || [];
let activeFilter = 'all';
let searchQuery = '';

// DOM ELEMENTS
const breedsGrid = document.getElementById('breedsGrid');
const breedSearchInput = document.getElementById('breedSearchInput');
const filterPills = document.getElementById('filterPills');
const detailModal = document.getElementById('detailModal');
const modalBody = document.getElementById('modalBody');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const wishlistTrigger = document.getElementById('wishlistTrigger');
const wishlistDrawer = document.getElementById('wishlistDrawer');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const wishlistItemsContainer = document.getElementById('wishlistItemsContainer');
const wishlistCount = document.getElementById('wishlistCount');
const factText = document.getElementById('factText');
const nextFactBtn = document.getElementById('nextFactBtn');
const adoptionForm = document.getElementById('adoptionForm');
const toastNotification = document.getElementById('toastNotification');
const toastMessage = document.getElementById('toastMessage');
const openNoteBtn = document.getElementById('openNoteBtn');
const secretNoteContent = document.getElementById('secretNoteContent');
const checklistContainer = document.getElementById('checklistContainer');
const checklistProgress = document.getElementById('checklistProgress');
const soundToggle = document.getElementById('soundToggle');
const soundIcon = document.getElementById('soundIcon');
const soundText = document.getElementById('soundText');

// INIT APP
document.addEventListener('DOMContentLoaded', () => {
    renderBreeds();
    updateWishlistCount();
    showRandomFact();
    initChecklist();
    initParticleCanvas();
    initPawClickEffect();

    // Event Listeners
    breedSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderBreeds();
    });

    filterPills.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            activeFilter = e.target.dataset.filter;
            renderBreeds();
        }
    });

    modalCloseBtn.addEventListener('click', closeModal);
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) closeModal();
    });

    wishlistTrigger.addEventListener('click', toggleWishlistDrawer);
    closeDrawerBtn.addEventListener('click', toggleWishlistDrawer);

    nextFactBtn.addEventListener('click', showRandomFact);

    adoptionForm.addEventListener('submit', handleAdoptionSubmit);

    openNoteBtn.addEventListener('click', () => {
        secretNoteContent.classList.toggle('hidden');
        if (!secretNoteContent.classList.contains('hidden')) {
            openNoteBtn.innerHTML = `<i class="fa-solid fa-envelope"></i> Hide Secret Message`;
            triggerConfettiHearts();
        } else {
            openNoteBtn.innerHTML = `<i class="fa-solid fa-envelope-open"></i> Unlock Sweet Message`;
        }
    });

    soundToggle.addEventListener('click', togglePurrSound);
});

// RENDER CAT BREEDS GRID
function renderBreeds() {
    breedsGrid.innerHTML = '';

    const filtered = catBreeds.filter(breed => {
        const matchesSearch = breed.name.toLowerCase().includes(searchQuery) ||
                              breed.character.toLowerCase().includes(searchQuery);
        const matchesFilter = activeFilter === 'all' || breed.tags.includes(activeFilter);
        return matchesSearch && matchesFilter;
    });

    if (filtered.length === 0) {
        breedsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <i class="fa-solid fa-cat" style="font-size: 3rem; color: #ff758c; margin-bottom: 1rem;"></i>
                <h3>No matching cats found!</h3>
                <p>Try searching for another keyword or filter.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(breed => {
        const isSaved = wishlist.includes(breed.id);
        const card = document.createElement('div');
        card.className = 'breed-card';
        card.innerHTML = `
            <div class="card-img-wrapper" onclick="openBreedModal('${breed.id}')">
                <img src="${breed.image}" alt="${breed.name}" loading="lazy">
                <button class="card-heart-btn ${isSaved ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${breed.id}')" title="Save breed">
                    <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <span class="card-tag">${breed.tags[0]}</span>
            </div>
            <div class="card-body">
                <h3 class="breed-name">${breed.name}</h3>
                <p class="breed-character">${breed.character}</p>
                <div class="card-actions">
                    <button class="btn-view-detail" onclick="openBreedModal('${breed.id}')">
                        <i class="fa-solid fa-circle-info"></i> View Details & Care
                    </button>
                </div>
            </div>
        `;
        breedsGrid.appendChild(card);
    });
}

// OPEN BREED DETAIL MODAL
function openBreedModal(breedId) {
    const breed = catBreeds.find(b => b.id === breedId);
    if (!breed) return;

    modalBody.innerHTML = `
        <div class="modal-header-img">
            <img src="${breed.image}" alt="${breed.name}">
            <div class="modal-title-overlay">
                <h2>${breed.name}</h2>
                <p>${breed.tagline}</p>
            </div>
        </div>
        <div class="modal-content-inner">
            <div class="trait-tags">
                ${breed.tags.map(tag => `<span class="trait-tag">✨ ${tag}</span>`).join('')}
            </div>

            <div class="attributes-grid">
                <div class="attr-item">
                    <strong>ORIGIN</strong>
                    <span>${breed.origin}</span>
                </div>
                <div class="attr-item">
                    <strong>LIFESPAN</strong>
                    <span>${breed.lifespan}</span>
                </div>
                <div class="attr-item">
                    <strong>COAT TYPE</strong>
                    <span>${breed.coat}</span>
                </div>
                <div class="attr-item">
                    <strong>WEIGHT</strong>
                    <span>${breed.weight}</span>
                </div>
            </div>

            <div class="modal-info-section">
                <h4><i class="fa-solid fa-face-smile-wink text-primary"></i> Character & Personality</h4>
                <p style="color: var(--text-dark); line-height: 1.6;">${breed.character}</p>
            </div>

            <div class="modal-info-section">
                <h4><i class="fa-solid fa-heart-pulse text-primary"></i> Specialized Cat Care Tips</h4>
                <div style="display: grid; gap: 0.8rem; background: #fff8f9; padding: 1.2rem; border-radius: 16px; border: 1px solid var(--border-color);">
                    <div><strong>🥗 Nutrition:</strong> ${breed.care.nutrition}</div>
                    <div><strong>🧼 Grooming:</strong> ${breed.care.grooming}</div>
                    <div><strong>🏥 Health:</strong> ${breed.care.health}</div>
                    <div><strong>🎮 Playtime:</strong> ${breed.care.playtime}</div>
                </div>
            </div>

            <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="selectBreedForAdoption('${breed.name}')">
                    <i class="fa-solid fa-paw"></i> Adopt ${breed.name}
                </button>
                <button class="btn btn-secondary" onclick="toggleWishlist('${breed.id}'); closeModal();">
                    <i class="fa-solid fa-heart"></i> ${wishlist.includes(breed.id) ? 'Remove from Saved' : 'Save to Favorites'}
                </button>
            </div>
        </div>
    `;

    detailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    detailModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ADOPTION SELECTION TRIGGER
function selectBreedForAdoption(breedName) {
    closeModal();
    const select = document.getElementById('preferredBreed');
    if (select) {
        select.value = breedName;
    }
    const adoptionSection = document.getElementById('adoption');
    if (adoptionSection) {
        adoptionSection.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Selected ${breedName} in Adoption Form!`);
}

// WISHLIST LOGIC
function toggleWishlist(breedId) {
    if (wishlist.includes(breedId)) {
        wishlist = wishlist.filter(id => id !== breedId);
        showToast('Removed from favorites');
    } else {
        wishlist.push(breedId);
        showToast('Added to favorites! ❤️');
    }
    localStorage.setItem('meow_wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    renderBreeds();
    renderWishlistDrawer();
}

function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
}

function toggleWishlistDrawer() {
    wishlistDrawer.classList.toggle('open');
    renderWishlistDrawer();
}

function renderWishlistDrawer() {
    wishlistItemsContainer.innerHTML = '';
    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = `
            <p style="text-align: center; color: var(--text-muted); margin-top: 2rem;">No saved breeds yet! Click the heart on any cat card to save it here. ❤️</p>
        `;
        return;
    }

    wishlist.forEach(id => {
        const breed = catBreeds.find(b => b.id === id);
        if (breed) {
            const item = document.createElement('div');
            item.style.cssText = 'display: flex; gap: 1rem; align-items: center; background: #fff8f9; padding: 0.8rem; border-radius: 12px; border: 1px solid var(--border-color);';
            item.innerHTML = `
                <img src="${breed.image}" style="width: 55px; height: 55px; border-radius: 10px; object-fit: cover;">
                <div style="flex-grow: 1;">
                    <strong style="display: block; font-size: 0.95rem;">${breed.name}</strong>
                    <small style="color: var(--text-muted);">${breed.origin}</small>
                </div>
                <button onclick="toggleWishlist('${breed.id}')" style="background: none; border: none; color: #ff477e; cursor: pointer; font-size: 1.1rem;">
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;
            wishlistItemsContainer.appendChild(item);
        }
    });
}

// RANDOM CAT FACT
function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    factText.textContent = catFacts[randomIndex];
}

// CHECKLIST LOGIC
function initChecklist() {
    const checkboxes = checklistContainer.querySelectorAll('input[type="checkbox"]');
    const savedStates = JSON.parse(localStorage.getItem('meow_checklist')) || [];

    checkboxes.forEach((cb, idx) => {
        if (savedStates[idx]) cb.checked = true;
        cb.addEventListener('change', () => {
            const states = Array.from(checkboxes).map(c => c.checked);
            localStorage.setItem('meow_checklist', JSON.stringify(states));
            updateChecklistBadge();
        });
    });

    updateChecklistBadge();
}

function updateChecklistBadge() {
    const checkboxes = checklistContainer.querySelectorAll('input[type="checkbox"]');
    const checkedCount = Array.from(checkboxes).filter(c => c.checked).length;
    checklistProgress.textContent = `${checkedCount} / ${checkboxes.length} Done`;
}

// ADOPTION FORM SUBMISSION
function handleAdoptionSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const breed = document.getElementById('preferredBreed').value;

    showToast(`Thank you ${name}! We received your inquiry for ${breed}. We will call you at ${phone}! 🐾`);
    adoptionForm.reset();
}

// TOAST NOTIFICATION
function showToast(msg) {
    toastMessage.textContent = msg;
    toastNotification.classList.add('show');
    setTimeout(() => {
        toastNotification.classList.remove('show');
    }, 4000);
}

// WEB AUDIO AMBIENT PURR SOUND SYNTHESIZER
let audioCtx = null;
let purrOsc = null;
let purrGain = null;
let isPurring = false;

function togglePurrSound() {
    if (!isPurring) {
        startPurr();
        soundIcon.className = "fa-solid fa-volume-high";
        soundText.textContent = "Purring...";
        soundToggle.style.background = "#ffe5ec";
        soundToggle.style.color = "#ff477e";
        isPurring = true;
        showToast("Relaxing Cat Purr Audio Activated! 😻");
    } else {
        stopPurr();
        soundIcon.className = "fa-solid fa-volume-xmark";
        soundText.textContent = "Purr Sound";
        soundToggle.style.background = "#fff";
        soundToggle.style.color = "var(--text-muted)";
        isPurring = false;
    }
}

function startPurr() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    // Low frequency oscillator for deep cat purr
    purrOsc = audioCtx.createOscillator();
    purrGain = audioCtx.createGain();

    // Pulse modulation for purr vibration
    const pulseOsc = audioCtx.createOscillator();
    const pulseGain = audioCtx.createGain();

    purrOsc.type = 'sawtooth';
    purrOsc.frequency.setValueAtTime(55, audioCtx.currentTime); // 55Hz deep purr

    pulseOsc.frequency.setValueAtTime(24, audioCtx.currentTime); // 24Hz rhythmic pulse
    pulseGain.gain.setValueAtTime(15, audioCtx.currentTime);

    pulseOsc.connect(purrOsc.frequency);
    purrOsc.connect(purrGain);

    // Lowpass filter for smooth purr texture
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(120, audioCtx.currentTime);

    purrGain.connect(filter);
    filter.connect(audioCtx.destination);

    purrGain.gain.setValueAtTime(0.08, audioCtx.currentTime); // gentle volume

    purrOsc.start();
    pulseOsc.start();
}

function stopPurr() {
    if (purrGain && audioCtx) {
        purrGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
        setTimeout(() => {
            if (purrOsc) purrOsc.stop();
        }, 500);
    }
}

// PARTICLE CANVAS (HEARTS & PAWS)
function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const symbols = ['💖', '🐾', '✨', '💕', '☁️'];

    for (let i = 0; i < 20; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 16 + 10,
            speedY: Math.random() * 0.8 + 0.3,
            speedX: Math.sin(Math.random() * Math.PI) * 0.5,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            opacity: Math.random() * 0.6 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.y -= p.speedY;
            p.x += Math.sin(p.y * 0.01) * 0.5;

            if (p.y < -30) {
                p.y = height + 30;
                p.x = Math.random() * width;
            }

            ctx.globalAlpha = p.opacity;
            ctx.font = `${p.size}px Nunito`;
            ctx.fillText(p.symbol, p.x, p.y);
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// PAW CLICK EFFECT
function initPawClickEffect() {
    document.addEventListener('click', (e) => {
        const paw = document.createElement('div');
        paw.textContent = '🐾';
        paw.style.cssText = `
            position: fixed;
            left: ${e.clientX - 12}px;
            top: ${e.clientY - 12}px;
            font-size: 24px;
            pointer-events: none;
            z-index: 9999;
            animation: fadeUp 1s forwards ease-out;
        `;
        document.body.appendChild(paw);
        setTimeout(() => paw.remove(), 1000);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeUp {
            0% { opacity: 1; transform: scale(1) translateY(0); }
            100% { opacity: 0; transform: scale(1.4) translateY(-30px); }
        }
    `;
    document.head.appendChild(style);
}

// HEART CONFETTI FOR LOVE NOTE
function triggerConfettiHearts() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = Math.random() > 0.5 ? '💖' : '🐾';
            heart.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: 100vh;
                font-size: ${Math.random() * 20 + 20}px;
                pointer-events: none;
                z-index: 9999;
                transition: transform 3s cubic-bezier(0.25, 1, 0.5, 1), opacity 3s;
            `;
            document.body.appendChild(heart);

            requestAnimationFrame(() => {
                heart.style.transform = `translateY(-${Math.random() * 80 + 80}vh) rotate(${Math.random() * 360}deg)`;
                heart.style.opacity = '0';
            });

            setTimeout(() => heart.remove(), 3000);
        }, i * 80);
    }
}
