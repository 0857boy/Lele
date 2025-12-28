document.addEventListener('DOMContentLoaded', () => {

    // --- Data Configuration ---
    // User can edit these arrays to change content.

    // Timeline Events
    // Suggestion: Use 4:3 or 1:1 images.
    // Timeline Events
    // Suggestion: Use 4:3 or 1:1 images.
    const timelineEvents = [
        {
            date: "2010 初遇",
            title: "緣分開始",
            desc: "還記得你小時候乖乖喝水的樣子，剛來到家裡還有點害羞。",
            img: "assets/img/gallery-01.jpg"
        },
        {
            date: "2015 旅行",
            title: "桐花步道",
            desc: "帶著你一起去賞油桐花，白色的花瓣落在石頭路上，你走得好開心。",
            img: "assets/img/gallery-06.jpg"
        },
        {
            date: "2020 相伴",
            title: "最暖的笑容",
            desc: "不管過了多久，你燦爛的笑容總能融化我們的心。",
            img: "assets/img/gallery-15.jpg"
        },
        {
            date: "2025 畢業",
            title: "天使快樂",
            desc: "謝謝你用超過15年的時間陪伴我們，現在你是最快樂的小天使了。",
            img: "assets/img/timeline-2025.jpg"
        }
    ];

    // Memories
    // Suggestion: Use square 1:1 images.
    const memories = [
        { title: "草地時光", tags: ["日常", "快樂"], desc: "在綠草地上捲成一團，享受大自然的氣息。", img: "assets/img/gallery-04.jpg" },
        { title: "花徑漫步", tags: ["旅行", "日常"], desc: "走在滿是落花的古道上，一步一步慢慢走。", img: "assets/img/gallery-05.jpg" },
        { title: "伸大懶腰", tags: ["搞笑", "日常"], desc: "這是什麼瑜珈姿勢？後腿拉得直直的，太軟Q了吧！", img: "assets/img/gallery-07.jpg" },
        { title: "曬曬太陽", tags: ["搞笑", "日常"], desc: "陽光這麼好，當然要盡情伸展筋骨。", img: "assets/img/gallery-08.jpg" },
        { title: "叢林探險", tags: ["旅行", "快樂"], desc: "鑽進草叢裡，像個小探險家一樣。", img: "assets/img/gallery-09.jpg" },
        { title: "快樂翻滾", tags: ["快樂", "搞笑"], desc: "背癢癢嗎？在草地上扭來扭去好開心。", img: "assets/img/gallery-10.jpg" },
        { title: "森林漫遊", tags: ["旅行"], desc: "看著你小小的背影走在樹林間，感覺好療癒。", img: "assets/img/gallery-11.jpg" },
        { title: "大樹與你", tags: ["旅行"], desc: "在巨大的樹幹旁，你顯得更迷你了。", img: "assets/img/gallery-12.jpg" },
        { title: "爬山健行", tags: ["旅行", "快樂"], desc: "雖然腿短短，但爬坡可是難不倒你。", img: "assets/img/gallery-13.jpg" },
        { title: "森林合影", tags: ["旅行"], desc: "停下來回頭看我，是在確認我有沒有跟上嗎？", img: "assets/img/gallery-14.jpg" },
        { title: "準備兜風", tags: ["旅行", "搞笑"], desc: "熟練地跳上機車踏板，「出發了嗎？」", img: "assets/img/gallery-16.jpg" },
        { title: "優雅休息", tags: ["睡覺", "日常"], desc: "趴在紅地毯上曬太陽，看起來好愜意。", img: "assets/img/gallery-17.jpg" },
        { title: "鄉間小路", tags: ["旅行"], desc: "走在寬闊的馬路上，路邊的風景真美。", img: "assets/img/gallery-18.jpg" },
        { title: "挑戰階梯", tags: ["旅行"], desc: "望著長長的石階梯，準備一鼓作氣衝上去！", img: "assets/img/gallery-19.jpg" },
        { title: "等到睡著", tags: ["搞笑", "睡覺"], desc: "「還沒要出發喔？」下巴饋在機車邊緣等到愛睏。", img: "assets/img/gallery-20.jpg" },
        { title: "聞聞花草", tags: ["日常"], desc: "路邊的小花小草都有好多訊息。", img: "assets/img/gallery-21.jpg" },
        { title: "探索世界", tags: ["日常"], desc: "每一個角落都不放過，認真聞聞聞。", img: "assets/img/gallery-22.jpg" },
        { title: "喝水時間", tags: ["日常"], desc: "乖乖補充水分。", img: "assets/img/gallery-02.jpg" },
        { title: "路邊散步", tags: ["日常"], desc: "簡單的散步就是最棒的時光。", img: "assets/img/gallery-03.jpg" }
    ];

    // --- Render Functions ---

    const timelineContainer = document.getElementById('timeline-container');
    const memoryGrid = document.getElementById('memory-grid');
    const filterContainer = document.getElementById('filter-container');

    // Helper: Create Fallback attributes
    function getSafeContent(item, type) {
        return {
            title: item.title || "樂樂的回憶",
            desc: item.desc || "",
            img: item.img || "assets/img/placeholder.jpg",
            alt: item.alt || item.title || "Photo of 樂樂",
            date: item.date || "..."
        };
    }

    // Render Timeline
    if (timelineContainer) {
        timelineEvents.forEach(event => {
            const safe = getSafeContent(event, 'timeline');
            const li = document.createElement('li');
            li.className = 'timeline-item fade-in-up';
            li.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${safe.date}</span>
                    <h3 class="timeline-title">${safe.title}</h3>
                    <p>${safe.desc}</p>
                    <img src="${safe.img}" alt="${safe.alt}" class="timeline-img" loading="lazy">
                </div>
            `;
            timelineContainer.appendChild(li);
        });
    }

    // Render Memories & Filters
    if (memoryGrid && filterContainer) {
        // Generate unique tags
        const allTags = new Set();
        memories.forEach(m => m.tags && m.tags.forEach(t => allTags.add(t)));

        // Create Buttons
        allTags.forEach(tag => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.textContent = tag;
            btn.dataset.filter = tag;
            filterContainer.appendChild(btn);
        });

        // Initialize Rendering
        renderMemories('all');
        setupFilterListeners();
        checkHashForFilter();
    }

    function renderMemories(filter) {
        memoryGrid.innerHTML = '';
        const filtered = filter === 'all'
            ? memories
            : memories.filter(m => m.tags.includes(filter));

        filtered.forEach(memory => {
            const safe = getSafeContent(memory, 'memory');
            const tagsHtml = (memory.tags || []).map(t => `<span class="tag">#${t}</span>`).join('');

            const li = document.createElement('li');
            li.className = 'memory-card fade-in-up';
            li.innerHTML = `
                <div class="memory-img-wrapper">
                    <img src="${safe.img}" alt="${safe.alt}" class="memory-img" loading="lazy">
                </div>
                <div class="memory-info">
                    <h3 class="memory-title">${safe.title}</h3>
                    <p class="memory-desc">${safe.desc}</p>
                    <div class="tag-cloud">${tagsHtml}</div>
                </div>
            `;
            memoryGrid.appendChild(li);
        });

        // Re-run observer on new elements
        observeElements();
    }

    function setupFilterListeners() {
        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                const filter = e.target.dataset.filter;
                updateActiveButton(filter);
                renderMemories(filter);

                // Update Hash
                if (filter === 'all') {
                    history.pushState("", document.title, window.location.pathname + window.location.search);
                } else {
                    window.location.hash = `tag=${filter}`;
                }
            }
        });
    }

    function updateActiveButton(filter) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.dataset.filter === filter) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    function checkHashForFilter() {
        const hash = window.location.hash;
        if (hash.startsWith('#tag=')) {
            const tag = decodeURIComponent(hash.substring(5)); // remove #tag=
            updateActiveButton(tag);
            renderMemories(tag);
        }
    }

    // --- Intersection Observer for Animations ---
    function observeElements() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target); // Run only once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    }

    // Initial run
    observeElements();


    // --- Floating Heart Logic ---
    const heartBtn = document.getElementById('heart-btn');
    const heartsContainer = document.getElementById('hearts-container');
    let heartCount = 0;
    const MAX_HEARTS = 20;

    if (heartBtn) {
        heartBtn.addEventListener('click', (e) => {
            throttleHeart(e);
        });
    }

    function throttleHeart(e) {
        if (heartCount >= MAX_HEARTS) return;

        createHeart();
        heartCount++;
        setTimeout(() => {
            heartCount--;
        }, 1500); // Decouple count decrement from animation end slightly
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerText = '❤️';

        // Randomize position slightly
        const randomX = (Math.random() - 0.5) * 50;
        heart.style.left = `calc(50% + ${randomX}px)`;
        // Note: position is fixed relative to viewport, but button is fixed.
        // Better: position relative to button click or button center.
        // Let's use button rect.
        const rect = heartBtn.getBoundingClientRect();
        heart.style.left = `${rect.left + rect.width / 2 + randomX}px`;
        heart.style.top = `${rect.top}px`;

        heartsContainer.appendChild(heart);

        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, 1500);
    }


});
