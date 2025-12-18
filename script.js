document.addEventListener('DOMContentLoaded', () => {

    // --- Data Configuration ---
    // User can edit these arrays to change content.

    // Timeline Events
    // Suggestion: Use 4:3 or 1:1 images.
    const timelineEvents = [
        {
            date: "2010 春天",
            title: "(請替換) 初次見面",
            desc: "這天我們相遇了，那是個陽光燦爛的日子。",
            img: "assets/img/timeline-1.jpg"
        },
        {
            date: "2012 夏天",
            title: "(請替換) 第一次去海邊",
            desc: "你怕水，但又很愛追浪花。",
            img: "assets/img/timeline-2.jpg"
        },
        {
            date: "2020 秋天",
            title: "(請替換) 十歲生日",
            desc: "雖然鬍鬚白了，你的眼神依然像是個孩子。",
            img: "assets/img/timeline-3.jpg"
        }
    ];

    // Memories
    // Suggestion: Use square 1:1 images.
    const memories = [
        {
            title: "(請替換) 睡午覺",
            tags: ["睡覺", "日常"],
            desc: "這個姿勢只有你能睡得著。",
            img: "assets/img/memory-1.jpg"
        },
        {
            title: "(請替換) 公園奔跑",
            tags: ["日常", "快樂"],
            desc: "風吹過你的耳朵，飛起來了。",
            img: "assets/img/memory-2.jpg"
        },
        {
            title: "(請替換) 討零食",
            tags: ["撒嬌", "搞笑"],
            desc: "這個眼神，誰能拒絕？",
            img: "assets/img/memory-3.jpg"
        },
        {
            title: "(請替換) 全家福",
            tags: ["旅行", "重要時刻"],
            desc: "我們永遠在一起。",
            img: "assets/img/memory-4.jpg"
        }
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
