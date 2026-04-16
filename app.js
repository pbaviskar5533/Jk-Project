/**
 * JK PULSE - Core Application Logic
 * Pure Vanilla JS, No Dependencies
 */

// ══════════════════════════════════════════════════
// MOCK DATA: 30+ Premium Articles
// ══════════════════════════════════════════════════
const mockArticles = [
    {
        id: 'jk-001',
        category: 'jk-news',
        title: 'New Highway Infrastructure Project promises to connect remote valleys of Kashmir',
        excerpt: 'The groundbreaking 45km tunnel project will reduce travel time by 4 hours during harsh winter months, marking a historic shift in regional connectivity.',
        image: 'https://images.unsplash.com/photo-1590419690008-905895e8fe0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Ashish M.',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ashish',
        date: '2 hours ago',
        views: '12.4K',
        likes: 342,
        tags: ['#Kashmir', '#Infrastructure', '#Development'],
        readTime: '6 min read',
        content: '<p>In what is being described as an engineering marvel, the newly announced Himalayan thoroughfare aims to bypass the treacherous passes that have historically isolated deep valley communities from November to March.</p><p>Local businesses expect a 30% surge in winter tourism. "This changes everything," said a local hotelier. The central administration has earmarked ₹4,500 crores for phase one, with expected completion by 2026.</p><p>Environmentalists have raised concerns, but authorities assure that extensive ecological impact studies highlight minimal disruption to wildlife corridors.</p>'
    },
    {
        id: 'jk-002',
        category: 'jk-news',
        title: 'Dal Lake Preservation Drive Remove 50 Tons of Waste in Record Time',
        excerpt: 'Community-led volunteering combined with new dredging technology breathes fresh life into Srinagar’s crown jewel.',
        image: 'https://images.unsplash.com/photo-1627850993958-86d7d6f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Tariq A.',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tariq',
        date: '5 hours ago',
        views: '8.1K',
        likes: 512,
        tags: ['#Srinagar', '#Environment', '#DalLake'],
        readTime: '4 min read',
        content: '<p>Over 5,000 local volunteers gathered at dawn this Sunday to participate in the largest civic cleanup Dal Lake has seen in a decade. The effort coordinated with the Lakes and Waterways Development Authority brought visible results immediately.</p><p>New aquatic weed harvesters deployed last month have already cleared acres of problematic lily pads that were starving the water of oxygen. "The water looks clearer than it has in my lifetime," remarked a 60-year-old Shikara operator.</p>'
    },
    {
        id: 'nat-001',
        category: 'national',
        title: 'Central Bank Issues New Directives on Digital Currency Rollout',
        excerpt: 'The e-Rupee pilot moves to its second phase, now including large-scale retail transactions across 15 major cities.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Priya S.',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
        date: '1 hour ago',
        views: '45.2K',
        likes: 1205,
        tags: ['#Economy', '#DigitalIndia', '#Banking'],
        readTime: '5 min read',
        content: '<p>The RBI has officially signaled the massive expansion of its digital currency pilot. Retailers in cities like Mumbai, Delhi, and Bangalore will now be equipped to accept CBDC (Central Bank Digital Currency) directly via specialized QR codes.</p><p>This move is aimed at reducing reliance on cash for high-ticket purchases while offering an alternative to existing UPI rails. Experts suggest this is a definitive step toward a programmable economy.</p>'
    },
    {
        id: 'world-001',
        category: 'world',
        title: 'Global Climate Summit Reaches Midnight Consensus on Emission Targets',
        excerpt: 'After grueling negotiations, 190 nations agree to accelerated phase-outs of coal subsidies by 2030.',
        image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'James W.',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=james',
        date: '3 hours ago',
        views: '89.5K',
        likes: 3400,
        tags: ['#ClimateCrisis', '#Geopolitics', '#Future'],
        readTime: '8 min read',
        content: '<p>The gavels came down at 3:00 AM local time in Geneva, marking a hard-fought victory for climate activists and vulnerable island nations. The new treaty mandates strict financial penalties for missed interim targets.</p><p>While developing nations secured a $200BN "loss and damage" fund, critics argue the timeline is still too lenient to prevent the 1.5°C warning threshold.</p>'
    },
    {
        id: 'pol-001',
        category: 'politics',
        title: 'Opposition Unites for Upcoming Winter Parliamentary Session',
        excerpt: 'A surprising coalition forms as regional parties agree on a common minimum program to challenge new agricultural reforms.',
        image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'R. Sharma',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sharma',
        date: '6 hours ago',
        views: '22.1K',
        likes: 890,
        tags: ['#Politics', '#Democracy', '#Parliament'],
        readTime: '5 min read',
        content: '<p>In an unprecedented turn of events, previously rival regional players have drafted a 10-point charter focusing strongly on agrarian protections. The winter session of Parliament promises to be stormy.</p><p>The ruling party spokesperson dismissed the coalition as "opportunistic," stating the reforms will unequivocally benefit grassroots farmers. Analysts are divided on whether this alliance will hold through the general elections.</p>'
    },
    {
        id: 'sci-001',
        category: 'science-tech',
        title: 'ISRO Unveils Next-Gen Reusable Launch Vehicle Prototype',
        excerpt: 'The "Pushpak" spaceplane aims to drastically cut orbital payload costs, positioning India strongly in the commercial space race.',
        image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Dr. Vivek K.',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vivek',
        date: '8 hours ago',
        views: '110K',
        likes: 8500,
        tags: ['#ISRO', '#SpaceTech', '#Innovation'],
        readTime: '7 min read',
        content: '<p>Showcased at the Sriharikota range, the sleek, autonomous winged craft successfully completed a high-altitude drop test this morning. By recovering the most expensive stages of the rocket, payload costs could drop by up to 80%.</p><p>"This is our ticket to heavy-lift dominance," said the ISRO chairman. The first orbital flight test is scheduled for late next year.</p>'
    },
    {
        id: 'spt-001',
        category: 'sports',
        title: 'Historic Run Chase: India Clinches Sub-Continent Cup in Final Over Thriller',
        excerpt: 'Virat sets a new record, silencing critics with an unbeaten 112* off 64 deliveries in front of 90,000 screaming fans.',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Anil B.',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=anil',
        date: '10 mins ago',
        views: '250K',
        likes: 12400,
        tags: ['#Cricket', '#TeamIndia', '#Champions'],
        readTime: '4 min read',
        content: '<p>No one gave them a chance when they were tottering at 45/4 chasing 210. But what unfolded over the next 90 minutes will be etched in cricketing folklore. Virat paced his innings masterfully, targeting the spinner in the middle overs.</p><p>Needing 18 off the final over, he launched two massive sixes over long-on, sealing the match with a boundary through extra cover. Captain lifted the trophy amid fireworks, declaring it "the best knock I have ever witnessed."</p>'
    },
    {
        id: 'ent-001',
        category: 'entertainment',
        title: 'Indie Film Shot entirely in Gulmarg wins Big at Cannes',
        excerpt: '"Snow in Summer", a heartbreaking tale of lost childhood, takes home the Jury Prize, shining global light on regional cinema.',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Sana R.',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sana',
        date: '12 hours ago',
        views: '18.4K',
        likes: 1120,
        tags: ['#Cinema', '#Gulmarg', '#Cannes'],
        readTime: '6 min read',
        content: '<p>Directed by debutant filmmaker Aamir Bhat, the film relies entirely on natural lighting and non-professional local actors. "I wanted to capture the raw, unfiltered emotional landscape of my home," Bhat told reporters post-screening.</p><p>The standing ovation lasted 8 minutes. Streaming giants are already in a bidding war for global distribution rights.</p>'
    },
    {
        id: 'vid-001',
        category: 'video-desk',
        title: 'Watch: Drone Footage reveals stunning hidden waterfall in Anantnag',
        excerpt: 'A group of trekkers stumbled upon this pristine 150ft cascade hidden deep in the Pir Panjal range.',
        image: 'https://images.unsplash.com/photo-1432405972818-fe55ad36fb88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Video Team',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=video',
        date: '1 day ago',
        views: '500K',
        likes: 24500,
        tags: ['#Drone', '#Nature', '#Travel'],
        readTime: '2 min watch',
        isVideo: true,
        duration: '02:45',
        content: '<p>[Video Placeholder] This area was previously unmapped by tourist guides. Local authorities are now debating how to protect the delicate ecosystem while allowing regulated eco-tourism.</p>'
    },
    {
        id: 'com-001',
        category: 'community',
        title: 'Opinion: Why preserving our ancestral languages is crucial for J&K youth',
        excerpt: 'A passionate plea by a university student on the erosion of native dialects in the age of rapid internet globalization.',
        image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Fathima Z.',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fathima',
        date: '2 days ago',
        views: '9.2K',
        likes: 670,
        tags: ['#Culture', '#Opinion', '#Youth'],
        readTime: '6 min read',
        content: '<p>Language is not just a medium of communication; it is the repository of our shared history and identity. As we rush towards a homogenized digital culture, we are losing the nuances that make Kashmiri, Dogri, and Gojri unique.</p><p>We must institute mandatory mother-tongue education at the primary school level and digitize our folk literature before it vanishes with our elders.</p>'
    },
    {
        id: 'tren-001',
        category: 'trending',
        title: 'AI Startups booming in Srinagar Tech Park: Meet the founders',
        excerpt: 'Move over Bangalore, a new wave of deep-tech founders are building global SaaS products from the valley.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Tech Desk',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=tech',
        date: '4 hours ago',
        views: '34K',
        likes: 2100,
        tags: ['#Startups', '#Tech', '#AI'],
        readTime: '7 min read',
        content: '<p>With high-speed broadband finally stabilized, reverse brain-drain is becoming a reality. We sat down with three startups that recently raised Series A funding from Silicon Valley VCs while running their engineering teams out of Srinagar.</p><p>"The talent here is raw, hungry, and incredibly loyal," says CEO of a new ag-tech AI firm.</p>'
    },
    {
        id: 'sci-002',
        category: 'science-tech',
        title: 'New Quantum Processor shatters previous computational limit',
        excerpt: 'Researchers announce a 1,000-qubit stable system, bringing practical quantum supremacy years closer than anticipated.',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Dr. Neha M.',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=neha',
        date: '12 hours ago',
        views: '45.1K',
        likes: 1800,
        tags: ['#Quantum', '#Computing', '#Physics'],
        readTime: '6 min read',
        content: '<p>By utilizing a novel error-correction grid based on topological insulators, the lab managed to run complex factoring algorithms for 45 minutes without decoherence. This breakthrough could revolutionize cryptography and drug discovery.</p>'
    },
    {
        id: 'jk-003',
        category: 'jk-news',
        title: 'Saffron Harvest hits 10-year high despite uneven rainfall',
        excerpt: 'Farmers credit new drip-irrigation subsidized schemes and resilient crop varieties for the bumper Pampore harvest.',
        image: 'https://images.unsplash.com/photo-1596404983228-2e06180630ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Irfan M.',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=irfan',
        date: '1 day ago',
        views: '15.6K',
        likes: 920,
        tags: ['#Agriculture', '#Saffron', '#Economy'],
        readTime: '4 min read',
        content: '<p>The world\'s most expensive spice is painting the fields of Pampore vivid purple. Yields are up by 25% compared to last year. "The drip units saved us when the August rains failed," noted a local cooperative president.</p>'
    },
    {
        id: 'vid-002',
        category: 'video-desk',
        title: 'Inside the high-stakes world of e-Sports Championships in Delhi',
        excerpt: 'Gaming is no longer just a hobby; it’s a multi-million dollar career for these top athletes.',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Gaming Hub',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=game',
        date: '2 days ago',
        views: '890K',
        likes: 45K,
        tags: ['#Gaming', '#eSports', '#Youth'],
        readTime: '15 min watch',
        isVideo: true,
        duration: '14:20',
        content: '<p>[Video Placeholder] We go behind the scenes at the National Arena to see the intense training regimes of Team Hydra before the Grand Finals.</p>'
    },
    {
        id: 'world-002',
        category: 'world',
        title: 'Deep Sea Exploration discovers three new bioluminescent species',
        excerpt: 'The Mariana Trench expedition returns with stunning footage of alien-like creatures thriving at crushing depths.',
        image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        author: 'Marine Desk',
        authorImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marine',
        date: '15 hours ago',
        views: '67.2K',
        likes: 5400,
        tags: ['#Ocean', '#Science', '#Discovery'],
        readTime: '5 min read',
        content: '<p>Operating at a depth of 6,000 meters, the ROV captured a pulsing, translucent squid-like entity that emits blue-green light flashes to confuse predators. Biologists are baffled by its unique neurological structure.</p>'
    }

    // Expanding with more clones to fulfill 20+ requirement and populate all grids
].concat(Array.from({length: 15}).map((_, i) => ({
    id: `filler-${i}`,
    category: ['national', 'world', 'politics', 'sports', 'entertainment', 'trending', 'community'][i % 7],
    title: `Exploring new dimensions in ${['politics', 'sports', 'global markets', 'technology', 'art', 'culture'][i % 6]} - Part ${i+1}`,
    excerpt: 'Detailed analysis and ground reports coming straight from our dedicated correspondents covering multiple beats across the nation.',
    image: `https://images.unsplash.com/photo-${1500000000000 + i * 1000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
    author: 'Staff Writer',
    authorImg: `https://api.dicebear.com/7.x/avataaars/svg?seed=staff${i}`,
    date: `${(i%24)+1} hours ago`,
    views: `${Math.floor(Math.random() * 50) + 1}K`,
    likes: Math.floor(Math.random() * 1000) + 50,
    tags: ['#News', '#Update', '#Report'],
    readTime: '4 min read',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
})));

// Breaking News Ticker Items
let tickerItems = [
    "Dalal Street: SIP data shows retail investors poured ₹15,000 crore into equity markets this month",
    "J&K Administration announces heavy snowfall alert for higher reaches of Gulmarg and Pahalgam",
    "SpaceX successfully launches 50 new Starlink satellites into low Earth orbit",
    "Global crude oil prices dip below $75 per barrel amid recession fears"
];

// Reference to mock articles, can be overridden by live data
let activeArticles = [...mockArticles];

// ══════════════════════════════════════════════════
// STATE MANAGEMENT
// ══════════════════════════════════════════════════
const APP_STATE = {
    currentSection: 'home',
    bookmarks: JSON.parse(localStorage.getItem('jkpulse_bookmarks')) || [],
    likes: JSON.parse(localStorage.getItem('jkpulse_likes')) || [],
    theme: localStorage.getItem('jkpulse_theme') || 'dark', // 'dark' first
    searchQuery: '',
    notifications: [
        { id: 1, type: 'breaking', text: 'Breaking: <strong>Major traffic diversion</strong> on Srinagar-Jammu highway due to landslide.', time: '10 mins ago' },
        { id: 2, type: 'trending', text: 'Trending: <strong>#IndVsAus</strong> crosses 1M mentions on X.', time: '1 hr ago' },
        { id: 3, type: 'update', text: 'App Update: You can now toggle Dark/Light mode!', time: '2 hrs ago' }
    ]
};

// ══════════════════════════════════════════════════
// DOM ELEMENTS
// ══════════════════════════════════════════════════
const DOM = {
    body: document.documentElement,
    skeleton: document.getElementById('skeletonLoader'),
    navLinks: document.querySelectorAll('.nav-link, .bottom-nav-item, .sidebar-nav-link, .logo, .footer-col a'),
    sections: document.querySelectorAll('.page-section'),
    hamburger: document.getElementById('hamburgerBtn'),
    mobileSidebar: document.getElementById('mobileSidebar'),
    sidebarOverlay: document.getElementById('sidebarOverlay'),
    closeSidebar: document.getElementById('closeSidebar'),
    themeToggle: document.getElementById('themeToggle'),
    searchToggle: document.getElementById('searchToggle'),
    searchWrapper: document.getElementById('searchWrapper'),
    searchInput: document.getElementById('searchInput'),
    notifBtn: document.getElementById('notifBtn'),
    notifPanel: document.getElementById('notifPanel'),
    notifBadge: document.getElementById('notifBadge'),
    notifList: document.getElementById('notifList'),
    tickerContent: document.getElementById('tickerContent'),
    heroCarousel: document.getElementById('carouselSlides'),
    carouselDots: document.getElementById('carouselDots'),
    articleModal: document.getElementById('articleModal'),
    modalClose: document.getElementById('modalClose'),
    readingProgress: document.getElementById('readingProgress'),
    commentDrawer: document.getElementById('commentDrawer'),
    commentOverlay: document.getElementById('commentOverlay'),
    closeDrawer: document.getElementById('closeDrawer'),
    heartBurst: document.getElementById('heartBurst'),
    bookmarksEmpty: document.getElementById('bookmarksEmpty'),
    topStories: document.getElementById('topStories'),
    trendingTags: document.getElementById('trendingTags'),
    pollOptions: document.querySelectorAll('.poll-option'),
    navbar: document.getElementById('navbar')
};

// ══════════════════════════════════════════════════
// LIVE NEWS FETCHING MODULE
// ══════════════════════════════════════════════════
async function fetchLiveNews() {
    const API_BASE = "https://saurav.tech/NewsAPI/top-headlines/category";
    const endpoints = [
        { cat: 'national', url: `${API_BASE}/general/in.json` },
        { cat: 'world', url: `${API_BASE}/general/us.json` },
        { cat: 'science-tech', url: `${API_BASE}/technology/in.json` },
        { cat: 'sports', url: `${API_BASE}/sports/in.json` },
        { cat: 'entertainment', url: `${API_BASE}/entertainment/in.json` },
        { cat: 'jk-news', url: `${API_BASE}/general/in.json` } // Substitute for demo
    ];

    try {
        const fetchPromises = endpoints.map(ep => fetch(ep.url).then(res => res.json()).then(data => ({cat: ep.cat, data})));
        const results = await Promise.all(fetchPromises);
        let liveArticles = [];
        let newTickers = [];

        results.forEach(res => {
            if(res.data && res.data.articles) {
                const limit = res.cat === 'jk-news' || res.cat === 'national' ? 10 : 6;
                res.data.articles.slice(0, limit).forEach((article, idx) => {
                    if(!article.title || !article.urlToImage) return; // Skip without image
                    if(idx < 2) newTickers.push(article.title);

                    liveArticles.push({
                        id: `live-${Math.random().toString(36).substr(2, 9)}`,
                        category: res.cat,
                        title: article.title.split(' - ')[0],
                        excerpt: article.description || 'Read the full story to know more about this headline.',
                        image: article.urlToImage,
                        author: article.author || article.source?.name || 'News Desk',
                        authorImg: `https://api.dicebear.com/7.x/avataaars/svg?seed=${article.source?.name || 'News'}`,
                        date: new Date(article.publishedAt).toLocaleDateString(undefined, {month:'short', day:'numeric', year:'numeric'}),
                        views: `${Math.floor(Math.random() * 50) + 5}K`,
                        likes: Math.floor(Math.random() * 500) + 10,
                        tags: ['#News', '#Trending', `#${res.cat.replace('-','')}`],
                        readTime: `${Math.floor(Math.random() * 5) + 3} min read`,
                        content: `<p>${article.content || article.description}</p><p>This is a live fetched article powered by the public NewsAPI mirror. The platform has seamlessly converted the API payload into the premium UI structure you see here.</p><br/><a href="${article.url}" target="_blank" style="color:var(--accent-primary);font-weight:bold;text-decoration:underline;">Read original article here</a>`,
                        isVideo: false
                    });
                });
            }
        });

        if(liveArticles.length > 20) {
            // Keep some of our high-quality mocks (like the video ones) and mix with live data
            const specificMocks = mockArticles.filter(a => a.isVideo || a.category === 'community');
            activeArticles = [...specificMocks, ...liveArticles];
            if(newTickers.length > 0) tickerItems = newTickers;
            return true;
        }
        return false;
    } catch (err) {
        console.error("Failed to fetch live news:", err);
        return false;
    }
}

// ══════════════════════════════════════════════════
// INITIALIZATION
// ══════════════════════════════════════════════════
async function init() {
    // 1. Setup Theme
    applyTheme(APP_STATE.theme);

    // 2. Initial Setup: Populate Ticker with static items first
    DOM.tickerContent.innerHTML = [...tickerItems, ...tickerItems].map(t => `<span>${t}</span>`).join('');

    // 3. Render Hero Carousel and Static Content immediately so site isn't empty
    renderHeroCarousel();
    renderSidebarWidgets();
    renderNotifications();
    setupMobileNav();

    // 4. Route to current section (Hash or Home)
    const hash = window.location.hash.replace('#', '') || 'home';
    switchSection(hash);

    // 5. Event Listeners
    setupEventListeners();

    // 6. Background Fetch: Attempt to get live news silently
    fetchLiveNews().then(success => {
        if(success) {
            console.log("Live news integrated successfully.");
            // Refresh ticker and current view if in a live-supported section
            DOM.tickerContent.innerHTML = [...tickerItems, ...tickerItems].map(t => `<span>${t}</span>`).join('');
            renderHeroCarousel();
            renderSectionGrid(APP_STATE.currentSection);
            renderSidebarWidgets();
        }
    });

    // 7. Remove Skeleton
    DOM.skeleton.classList.add('hidden');
}

// ══════════════════════════════════════════════════
// ROTUING & SPA LOGIC
// ══════════════════════════════════════════════════
function switchSection(sectionId) {
    const targetSection = document.getElementById(`section-${sectionId}`);
    if (!targetSection) {
        console.error(`Section not found: ${sectionId}`);
        return;
    }
    
    APP_STATE.currentSection = sectionId;
    
    // Update Nav Active States (Handle both Desktop and Mobile Navs)
    const allLinks = document.querySelectorAll('.nav-link, .bottom-nav-item, .sidebar-nav-link');
    allLinks.forEach(el => {
        if(el.getAttribute('data-section') === sectionId) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    // Hide all sections, show target
    DOM.sections.forEach(sec => {
        sec.classList.remove('active');
    });

    targetSection.classList.add('active');
    
    // Trigger entry animation
    targetSection.style.animation = 'none';
    targetSection.offsetHeight; 
    targetSection.style.animation = 'sectionIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileSidebar();

    // Render grid for the specific section
    renderSectionGrid(sectionId);
}

// ══════════════════════════════════════════════════
// RENDERING LOGIC
// ══════════════════════════════════════════════════

function renderSectionGrid(sectionId) {
    const gridEl = document.getElementById(`grid-${sectionId}`);
    if(!gridEl) return;

    let filteredArticles = [];

    if (sectionId === 'home') {
        filteredArticles = activeArticles.slice(0, 8); // Top 8 for home
    } else if (sectionId === 'bookmarks') {
        filteredArticles = activeArticles.filter(a => APP_STATE.bookmarks.includes(a.id));
        DOM.bookmarksEmpty.classList.toggle('hidden', filteredArticles.length > 0);
    } else if (sectionId === 'trending') {
        // Sort by views mocked
        filteredArticles = [...activeArticles].sort((a,b) => b.likes - a.likes).slice(0,10);
    } else {
        filteredArticles = activeArticles.filter(a => a.category === sectionId || sectionId === 'search');
        // If not enough data, just dump some fillers 
        if(filteredArticles.length < 4 && sectionId !== 'search') {
            filteredArticles = activeArticles.filter(a => a.id.startsWith('filler') || a.id.startsWith('live')).slice(0, 6);
        }
    }

    // Handle search override
    if (APP_STATE.searchQuery && sectionId !== 'bookmarks') {
        const q = APP_STATE.searchQuery.toLowerCase();
        filteredArticles = activeArticles.filter(a => 
            a.title.toLowerCase().includes(q) || 
            a.tags.some(t => t.toLowerCase().includes(q))
        );
        
        // Show heading
        let heading = targetSection.querySelector('.search-focus-heading');
        if(!heading) {
            heading = document.createElement('h2');
            heading.className = 'section-heading search-focus-heading';
            gridEl.before(heading);
        }
        heading.innerHTML = `<span class="heading-accent"></span>Search Results: "${APP_STATE.searchQuery}"`;
    }

    gridEl.innerHTML = '';
    
    filteredArticles.forEach((article, index) => {
        // Staggered animation delay
        const delay = index * 0.1;
        const card = document.createElement('article');
        card.className = 'article-card';
        card.style.animationDelay = `${delay}s`;
        card.innerHTML = generateCardHTML(article);
        
        // Event Listeners on Card
        card.addEventListener('click', (e) => {
            if(e.target.closest('.card-action-btn') || e.target.closest('.card-bookmark-btn') || e.target.closest('.tag-pill')) return;
            openArticleModal(article);
        });

        // Bookmark logic
        const bmkBtn = card.querySelector('.card-bookmark-btn');
        bmkBtn.addEventListener('click', (e) => toggleBookmark(article.id, e.currentTarget));

        // Like logic
        const likeBtn = card.querySelector('.like-btn');
        likeBtn.addEventListener('click', (e) => toggleLike(article.id, e.currentTarget));

        gridEl.appendChild(card);
    });
}

function generateCardHTML(article) {
    const isBookmarked = APP_STATE.bookmarks.includes(article.id) ? 'bookmarked' : '';
    const isLiked = APP_STATE.likes.includes(article.id) ? 'liked' : '';
    
    // SVG icons
    const bookmarkSvg = isBookmarked ? 
        `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>` :
        `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`;
        
    const likeSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;

    return `
        <div class="card-image">
            <span class="card-category">${article.category.replace('-', ' ')}</span>
            <button class="card-bookmark-btn ${isBookmarked}" aria-label="Bookmark" title="Save for later">
                ${bookmarkSvg}
            </button>
            <img src="${article.image}" alt="${article.title}" loading="lazy">
            ${article.isVideo ? `
                <div class="video-play-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
                <span class="video-duration">${article.duration}</span>
            ` : ''}
        </div>
        <div class="card-body">
            <div class="card-meta">
                <div class="card-author">
                    <img src="${article.authorImg}" alt="${article.author}">
                    <span>${article.author}</span>
                </div>
                <span>${article.date}</span>
            </div>
            <h3 class="card-title">${article.title}</h3>
            <p class="card-excerpt">${article.excerpt}</p>
            <div class="card-tags">
                ${article.tags.slice(0,3).map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
            </div>
            <div class="card-actions">
                <button class="card-action-btn like-btn ${isLiked}">
                    ${likeSvg}
                    <span>${article.likes + (isLiked ? 1 : 0)}</span>
                </button>
                <button class="card-action-btn" onclick="openComments()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    <span>Reply</span>
                </button>
                <div class="action-spacer"></div>
                <div class="card-action-btn" style="cursor:default">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <span>${article.views}</span>
                </div>
                <button class="card-action-btn" onclick="showToast('Link copied to clipboard')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                </button>
            </div>
        </div>
    `;
}

// ─── HERO CAROUSEL ───
let heroInterval;
let currentSlide = 0;
function renderHeroCarousel() {
    const heroArticles = activeArticles.slice(0, 4); // Top 4 for hero
    
    // Create Slides
    DOM.heroCarousel.innerHTML = heroArticles.map((art, i) => `
        <div class="carousel-slide ${i === 0 ? 'active' : ''}">
            <div class="carousel-slide-bg" style="background-image: url('${art.image}')"></div>
            <div class="carousel-slide-overlay"></div>
            <div class="carousel-slide-content">
                <span class="carousel-category">${art.category.replace('-', ' ')}</span>
                <h2>${art.title}</h2>
                <p>By ${art.author} • ${art.readTime}</p>
            </div>
        </div>
    `).join('');

    // Create Dots
    DOM.carouselDots.innerHTML = heroArticles.map((_, i) => `
        <div class="carousel-dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></div>
    `).join('');

    // Setup Logic
    const slides = DOM.heroCarousel.querySelectorAll('.carousel-slide');
    const dots = DOM.carouselDots.querySelectorAll('.carousel-dot');

    const goToSlide = (n) => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Slide animation transform
        DOM.heroCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    document.getElementById('carouselNext').addEventListener('click', () => { goToSlide(currentSlide + 1); resetHeroInterval(); });
    document.getElementById('carouselPrev').addEventListener('click', () => { goToSlide(currentSlide - 1); resetHeroInterval(); });
    
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { goToSlide(i); resetHeroInterval(); });
    });

    const resetHeroInterval = () => {
        clearInterval(heroInterval);
        heroInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
    };
    resetHeroInterval();
}

// ─── SIDEBAR WIDGETS ───
function renderSidebarWidgets() {
    // Trending Tags
    const allTags = activeArticles.flatMap(a => a.tags);
    const tagCounts = allTags.reduce((acc, tag) => { acc[tag] = (acc[tag] || 0) + 1; return acc; }, {});
    const topTags = Object.entries(tagCounts).sort((a,b) => b[1] - a[1]).slice(0, 8).map(t => t[0]);
    
    DOM.trendingTags.innerHTML = topTags.map(tag => `<span class="trending-tag">${tag}</span>`).join('');
    
    // Top Stories (sidebar)
    const topSidebar = activeArticles.slice(4, 9);
    DOM.topStories.innerHTML = topSidebar.map((art, i) => `
        <div class="top-story" onclick="openArticleModal(activeArticles.find(a => a.id === '${art.id}'))">
            <div class="top-story-rank">0${i+1}</div>
            <div class="top-story-info">
                <div class="top-story-title">${art.title}</div>
                <div class="top-story-meta">${art.date} • ${art.views} views</div>
            </div>
        </div>
    `).join('');
    
    // Poll Interaction
    DOM.pollOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            DOM.pollOptions.forEach(o => { o.classList.remove('voted'); o.style.pointerEvents = 'none'; });
            opt.classList.add('voted');
            opt.innerHTML = `${opt.innerText} <svg style="float:right;width:18px;height:18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
            showToast('Vote submitted successfully');
        });
    });
}

function renderNotifications() {
    DOM.notifBadge.textContent = APP_STATE.notifications.length;
    DOM.notifBadge.style.display = APP_STATE.notifications.length ? 'flex' : 'none';
    
    if(APP_STATE.notifications.length === 0) {
        DOM.notifList.innerHTML = '<div style="padding: 20px; text-align:center; color: var(--text-muted)">No new notifications</div>';
        return;
    }

    DOM.notifList.innerHTML = APP_STATE.notifications.map(n => `
        <div class="notif-item">
            <div class="notif-icon ${n.type}">
                ${n.type === 'breaking' ? '🔴' : n.type === 'trending' ? '🔥' : '🔔'}
            </div>
            <div>
                <div class="notif-text">${n.text}</div>
                <div class="notif-time">${n.time}</div>
            </div>
        </div>
    `).join('');
}


// ══════════════════════════════════════════════════
// INTERACTIONS & EVENT LISTENERS
// ══════════════════════════════════════════════════
function setupEventListeners() {
    // Nav Click Routing
    document.querySelectorAll('[data-section]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            APP_STATE.searchQuery = ''; // Clear search on normal navigation
            DOM.searchWrapper.classList.remove('active');
            DOM.searchInput.value = '';
            
            const section = el.getAttribute('data-section');
            if(section) switchSection(section);
        });
    });

    // Theme Toggle
    DOM.themeToggle.addEventListener('click', () => {
        APP_STATE.theme = APP_STATE.theme === 'dark' ? 'light' : 'dark';
        applyTheme(APP_STATE.theme);
        localStorage.setItem('jkpulse_theme', APP_STATE.theme);
    });

    // Search Interaction
    DOM.searchToggle.addEventListener('click', () => {
        DOM.searchWrapper.classList.toggle('active');
        if(DOM.searchWrapper.classList.contains('active')) {
            DOM.searchInput.focus();
        }
    });

    DOM.searchInput.addEventListener('input', (e) => {
        APP_STATE.searchQuery = e.target.value.trim();
        if(APP_STATE.searchQuery.length > 2) {
            renderSectionGrid(APP_STATE.currentSection); // Re-render current with filter
        } else if (APP_STATE.searchQuery.length === 0) {
            renderSectionGrid(APP_STATE.currentSection); // reset
        }
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) DOM.navbar.classList.add('scrolled');
        else DOM.navbar.classList.remove('scrolled');
        
        // Modal Reading Progress logic inside modal
    });

    // Mobile Sidebar
    DOM.hamburger.addEventListener('click', () => {
        DOM.mobileSidebar.classList.add('open');
        DOM.sidebarOverlay.classList.add('open');
    });
    
    [DOM.closeSidebar, DOM.sidebarOverlay].forEach(btn => {
        btn.addEventListener('click', closeMobileSidebar);
    });

    // Notifications Panel
    DOM.notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        DOM.notifPanel.classList.toggle('open');
    });

    document.getElementById('notifClear').addEventListener('click', () => {
        APP_STATE.notifications = [];
        renderNotifications();
    });

    document.addEventListener('click', (e) => {
        if(!DOM.notifPanel.contains(e.target) && !DOM.notifBtn.contains(e.target)) {
            DOM.notifPanel.classList.remove('open');
        }
    });

    // Modal Close
    DOM.modalClose.addEventListener('click', closeArticleModal);
    
    // Comments
    DOM.closeDrawer.addEventListener('click', closeComments);
    DOM.commentOverlay.addEventListener('click', closeComments);
    
    document.getElementById('commentSubmit').addEventListener('click', () => {
        const input = document.getElementById('commentInput');
        if(!input.value.trim()) return;
        
        const list = document.getElementById('commentsList');
        const newComment = document.createElement('div');
        newComment.className = 'comment-item';
        newComment.innerHTML = `
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" alt="You">
            <div class="comment-body">
                <div class="comment-author">You <span style="color:var(--accent-primary);font-size:0.7rem;margin-left:5px">Author</span></div>
                <div class="comment-text">${input.value}</div>
                <div class="comment-time">Just now</div>
            </div>
        `;
        list.prepend(newComment);
        
        // Update Count
        const countSpan = document.getElementById('commentCount');
        countSpan.textContent = parseInt(countSpan.textContent) + 1;
        
        input.value = '';
    });
    
    // Newsletter Submit
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const mail = document.getElementById('newsletterEmail').value;
        if(mail) {
            showToast(`Subscribed successfully with ${mail}!`);
            document.getElementById('newsletterEmail').value = '';
        }
    });
}

function closeMobileSidebar() {
    DOM.mobileSidebar.classList.remove('open');
    DOM.sidebarOverlay.classList.remove('open');
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

// ══════════════════════════════════════════════════
// ACTION LOGIC (Likes, Bookmarks)
// ══════════════════════════════════════════════════
function toggleBookmark(articleId, btnEl) {
    const index = APP_STATE.bookmarks.indexOf(articleId);
    if(index === -1) {
        APP_STATE.bookmarks.push(articleId);
        btnEl.classList.add('bookmarked');
        btnEl.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`;
        showToast('Article bookmarked');
    } else {
        APP_STATE.bookmarks.splice(index, 1);
        btnEl.classList.remove('bookmarked');
        btnEl.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`;
        showToast('Bookmark removed');
    }
    localStorage.setItem('jkpulse_bookmarks', JSON.stringify(APP_STATE.bookmarks));
    
    // Re-render bookmarks section if active
    if(APP_STATE.currentSection === 'bookmarks') {
        renderSectionGrid('bookmarks');
    }
}

function toggleLike(articleId, btnEl) {
    const index = APP_STATE.likes.indexOf(articleId);
    const span = btnEl.querySelector('span');
    let count = parseInt(span.textContent);

    if(index === -1) {
        APP_STATE.likes.push(articleId);
        btnEl.classList.add('liked');
        span.textContent = count + 1;
        createHeartBurst(btnEl);
    } else {
        APP_STATE.likes.splice(index, 1);
        btnEl.classList.remove('liked');
        span.textContent = count - 1;
    }
    localStorage.setItem('jkpulse_likes', JSON.stringify(APP_STATE.likes));
}

function createHeartBurst(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    for(let i=0; i<8; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = '❤️';
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        
        const deg = (360 / 8) * i;
        const dx = Math.cos(deg * Math.PI / 180) * 40;
        const dy = Math.sin(deg * Math.PI / 180) * 40;
        
        heart.style.setProperty('--rotate', `${Math.random() * 360}deg`);
        heart.style.transform = `translate(${dx}px, ${dy}px)`;
        
        DOM.heartBurst.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
}

// ══════════════════════════════════════════════════
// MODAL & COMMENTS
// ══════════════════════════════════════════════════
function openArticleModal(article) {
    DOM.body.style.overflow = 'hidden'; // prevent bg scroll
    
    // Populate Modal Data
    document.getElementById('modalHero').style.backgroundImage = `url('${article.image}')`;
    document.getElementById('modalMeta').innerHTML = `
        <span class="category-label">${article.category.replace('-',' ')}</span>
        <span>By ${article.author}</span>
        <span>${article.date}</span>
        <span>${article.readTime}</span>
    `;
    document.getElementById('modalTitle').textContent = article.title;
    document.getElementById('modalTags').innerHTML = article.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');
    document.getElementById('modalText').innerHTML = article.content + `
        <p>This is a premium storytelling layout meant to immerse the reader without distractions. The large typography, generous line height, and sophisticated font pairing give it an editorial magazine feel.</p>
        <p>As Ashish Malviya's journalism demands, facts are presented clearly. The X-style metrics below allow the community to interact.</p>
    `;
    
    // Actions at bottom of modal
    const isLiked = APP_STATE.likes.includes(article.id) ? 'liked' : '';
    document.getElementById('modalActions').innerHTML = `
        <button class="modal-action-btn like-btn ${isLiked}" onclick="toggleLike('${article.id}', this)">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span>Like</span>
        </button>
        <button class="modal-action-btn" onclick="openComments()">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <span>Discuss</span>
        </button>
        <div style="flex:1"></div>
        <button class="modal-action-btn" onclick="showToast('Article shared')">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        </button>
    `;

    DOM.articleModal.classList.add('open');
    DOM.articleModal.scrollTop = 0;
    
    // Setup Reading Progress
    DOM.articleModal.addEventListener('scroll', updateReadingProgress);
}

function closeArticleModal() {
    DOM.articleModal.classList.remove('open');
    DOM.body.style.overflow = '';
    DOM.articleModal.removeEventListener('scroll', updateReadingProgress);
    setTimeout(() => {
        DOM.readingProgress.style.width = '0%';
    }, 500);
}

function updateReadingProgress() {
    const scrollPx = DOM.articleModal.scrollTop;
    const scrollMax = DOM.articleModal.scrollHeight - DOM.articleModal.clientHeight;
    const progress = (scrollPx / scrollMax) * 100;
    DOM.readingProgress.style.width = `${progress}%`;
}

function openComments() {
    DOM.commentDrawer.classList.add('open');
    DOM.commentOverlay.classList.add('open');
    
    // Mock load comments
    document.getElementById('commentCount').textContent = '2';
    document.getElementById('commentsList').innerHTML = `
        <div class="comment-item">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=c1" alt="U">
            <div class="comment-body">
                <div class="comment-author">Riyaz Ahmad</div>
                <div class="comment-text">This is exactly the kind of on-ground reporting we need. The UI is incredibly slick, feels just like reading an international journal.</div>
                <div class="comment-time">1 hr ago • <span style="color:var(--accent-primary);cursor:pointer">Reply</span></div>
            </div>
        </div>
        <div class="comment-item comment-replies">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=c2" alt="U">
            <div class="comment-body">
                <div class="comment-author">Ashish M. <span style="background:var(--accent-primary);color:#fff;padding:2px 6px;border-radius:4px;font-size:0.6rem;margin-left:4px">Author</span></div>
                <div class="comment-text">Thank you Riyaz! We are committed to bringing the best UX to regional news.</div>
                <div class="comment-time">45 mins ago</div>
            </div>
        </div>
    `;
}

function closeComments() {
    DOM.commentDrawer.classList.remove('open');
    DOM.commentOverlay.classList.remove('open');
}

// ══════════════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════════════
let toastTimeout;
function showToast(msg) {
    const old = document.querySelector('.toast');
    if(old) old.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    
    // Trigger reflow
    toast.offsetHeight;
    toast.classList.add('show');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function setupMobileNav() {
    const navHTML = Array.from(document.querySelectorAll('.navbar .nav-link')).map(link => `
        <a href="#" class="sidebar-nav-link" data-section="${link.getAttribute('data-section')}">
            ${link.textContent}
        </a>
    `).join('');
    document.getElementById('sidebarNav').innerHTML = navHTML;
    
    // Re-bind events for cloned links
    document.querySelectorAll('#sidebarNav .sidebar-nav-link').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(el.getAttribute('data-section'));
        });
    });
}

// ══════════════════════════════════════════════════
// BOOTSTRAP APP
// ══════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', init);
