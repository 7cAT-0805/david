document.addEventListener('DOMContentLoaded', function() {
    // 記憶數據
    const memories = [
        {
            title: '初相遇',
            date: '2019年9月',
            description: '還記得我們第一次見面時的情景嗎？你靦腆的笑容讓這個初次相見變得格外難忘。從那一刻起，我就知道我們會成為很好的朋友。'
        },
        {
            title: '課堂時光',
            date: '2019年10月',
            description: '那些一起上課、一起討論的日子，成為了大學生活中最美好的記憶。你認真聽講的樣子總是讓我也不敢懈怠。我們一起努力，一起成長。'
        },
        {
            title: '圖書館角落',
            date: '2019年12月',
            description: '在圖書館的角落，我們常常一坐就是一整天。陽光透過窗戶灑在書頁上，那種寧靜的時光讓人懷念。你專注的側臉，是我記憶中最美的畫面之一。'
        },
        {
            title: '深夜趕作業',
            date: '2020年1月',
            description: '記得那次為了趕作業，我們熬到凌晨。雖然很累，但有你一起奮戰的感覺真好。那份作業最後得了高分，所有的辛苦都是值得的。'
        },
        {
            title: '共進午餐',
            date: '2020年3月',
            description: '學校餐廳的飯菜可能不是最好吃的，但和你一起吃飯的時光卻是最溫馨的。我們談天說地，分享生活中的點點滴滴，那些笑聲至今縈繞在耳邊。'
        },
        {
            title: '課外活動',
            date: '2020年5月',
            description: '參加那次學校活動時，你的熱情和創意給大家留下了深刻印象。你總能帶給團隊無限的活力和笑聲，就像一束溫暖的陽光。'
        },
        {
            title: '難忘旅行',
            date: '2020年7月',
            description: '那次短途旅行，我們一起看日出、聊理想、許願望。這段旅途中的每一刻都值得珍藏，成為我們友誼中璀璨的一頁。'
        },
        {
            title: '心靈交流',
            date: '2020年9月',
            description: '感謝你願意與我分享你的夢想和秘密。那些真摯的交流，讓我們的友誼更加深厚。你的信任對我來說意義非凡。'
        },
        {
            title: '生日驚喜',
            date: '2020年11月',
            description: '記得那次我們為你準備的生日驚喜嗎？看到你驚訝又感動的表情，大家都覺得一切準備都值得了。那是個充滿笑聲和溫暖的夜晚。'
        },
        {
            title: '解決難題',
            date: '2021年2月',
            description: '面對課業上的難題，我們常常一起研究到深夜。你思考問題的方式總是與眾不同，讓我獲益良多。感謝你的耐心和智慧。'
        },
        {
            title: '成長見證',
            date: '2021年5月',
            description: '看著你從大一的懵懂到現在的成熟，這種成長的過程讓人感動。你越來越自信，也越來越清楚自己想要的是什麼。'
        },
        {
            title: '合作報告',
            date: '2021年7月',
            description: '還記得我們一起準備的那次課堂報告嗎？雖然過程中有壓力，但我們互相配合、互相支持，最終取得了很好的效果。'
        },
        {
            title: '校園美景',
            date: '2021年10月',
            description: '校園的四季變換，我們一起見證。春天的花開，夏天的蟬鳴，秋天的落葉，冬天的初雪，每一個場景都有你我的足跡。'
        },
        {
            title: '畢業前夕',
            date: '2022年4月',
            description: '畢業前，我們在校園裡散步，談論著未來的計畫和彼此的約定。無論未來如何，這段友誼都將長存心中。'
        },
        {
            title: '離別時刻',
            date: '2022年6月',
            description: '畢業季的忙碌和不舍，讓這段時光變得格外珍貴。拍畢業照、辦離別派對、收拾行李，每一刻都充滿了情感。'
        },
        {
            title: '未來祝福',
            date: '2022年7月',
            description: '畢業不是結束，而是新的開始。願你在未來的道路上一切順利，實現自己的夢想。我們的友誼將永遠陪伴著你。畢業快樂，親愛的朋友！'
        }
    ];

    // 變數和元素
    const photoPath = 'david/photo ';
    const totalPhotos = 20; // 更新照片總數
    let currentPhotoIndex = 0;
    
    // DOM元素
    const preloader = document.querySelector('.preloader');
    const galleryGrid = document.querySelector('.gallery-grid');
    const photoViewer = document.querySelector('.photo-viewer');
    const photoMain = document.querySelector('.photo-main img');
    const photoTitle = document.querySelector('.photo-title');
    const photoDate = document.querySelector('.photo-date');
    const photoDesc = document.querySelector('.photo-description');
    const currentIndexEl = document.querySelector('.current-index');
    const totalCountEl = document.querySelector('.total-count');
    const prevBtn = document.querySelector('.prev-photo');
    const nextBtn = document.querySelector('.next-photo');
    const closeBtn = document.querySelector('.close-viewer');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const header = document.querySelector('.site-header');
    
    // 自定義鼠標指針
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    // 獲取開啟回憶廊按鈕
    const openGalleryBtn = document.getElementById('open-gallery');
    
    // 初始化頁面
    initPage();
    
    function initPage() {
        // 加載動畫
        setTimeout(() => {
            preloader.classList.add('hide');
            setTimeout(() => preloader.style.display = 'none', 800);
        }, 1800);
        
        // 移除舊的圖片載入相關代碼
        // loadGallery(); // 不再需要載入圖片縮略圖
        
        // 添加開啟回憶廊按鈕事件監聽
        if (openGalleryBtn) {
            openGalleryBtn.addEventListener('click', function() {
                // 添加點擊動畫
                this.classList.add('clicked');
                
                // 延遲打開照片查看器，等待動畫完成
                setTimeout(() => {
                    openPhotoViewer(0);
                    this.classList.remove('clicked');
                }, 300);
            });
        }
        
        // 獲取首頁開啟回憶廊按鈕
        const heroOpenGalleryBtn = document.getElementById('hero-open-gallery');
        
        // 添加首頁按鈕點擊事件監聽
        if (heroOpenGalleryBtn) {
            heroOpenGalleryBtn.addEventListener('click', function() {
                // 添加點擊動畫
                this.classList.add('clicked');
                
                // 延遲打開照片查看器，等待動畫完成
                setTimeout(() => {
                    openPhotoViewer(0);
                    this.classList.remove('clicked');
                }, 300);
            });
        }
        
        // 修改事件監聽，移除舊的點擊監聽代碼
        // 不再需要監聽縮略圖點擊事件
        /*
        document.addEventListener('click', e => {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                const index = parseInt(galleryItem.dataset.index);
                openPhotoViewer(index);
            }
        });
        */
        
        // 自定義鼠標指針
        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        });
        
        // 鼠標指針互動效果
        document.querySelectorAll('a, button, .gallery-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-grow');
                cursorFollower.classList.add('cursor-follower-grow');
            });
            
            item.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-grow');
                cursorFollower.classList.remove('cursor-follower-grow');
            });
        });
        
        // 滾動監聽
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // 淡入動畫
            document.querySelectorAll('.fade-in').forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                if (rect.top <= windowHeight * 0.8) {
                    el.classList.add('visible');
                }
            });
        });
        
        // 事件監聽
        // 照片查看器控制
        closeBtn.addEventListener('click', closePhotoViewer);
        prevBtn.addEventListener('click', prevPhoto);
        nextBtn.addEventListener('click', nextPhoto);
        
        // 鍵盤導航
        document.addEventListener('keydown', e => {
            if (photoViewer.classList.contains('active')) {
                if (e.key === 'Escape') closePhotoViewer();
                if (e.key === 'ArrowLeft') prevPhoto();
                if (e.key === 'ArrowRight') nextPhoto();
            }
        });
        
        // 移動端菜單
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        
        // 移動端菜單項點擊後關閉菜單
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
        
        // 添加滾動動畫
        addScrollAnimations();
    }
    
    // 添加滾動動畫
    function addScrollAnimations() {
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    // 為子元素添加進入動畫
                    const children = entry.target.querySelectorAll('.animate-child');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animated');
                        }, 200 * index);
                    });
                }
            });
        }, { threshold: 0.2 });
        
        sections.forEach(section => {
            observer.observe(section);
            
            // 設置初始隱藏狀態
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            // 添加動畫類
            const sectionHeader = section.querySelector('.section-header');
            const galleryButton = section.querySelector('.gallery-button-container');
            const wishCard = section.querySelector('.wish-card');
            
            if (sectionHeader) sectionHeader.classList.add('animate-child');
            if (galleryButton) galleryButton.classList.add('animate-child');
            if (wishCard) wishCard.classList.add('animate-child');
            
            // 設置初始隱藏狀態
            section.querySelectorAll('.animate-child').forEach(child => {
                child.style.opacity = '0';
                child.style.transform = 'translateY(30px)';
                child.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            });
        });
        
        // 添加 CSS 類定義
        const style = document.createElement('style');
        style.textContent = `
            section.animated {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            .animate-child.animated {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            .gallery-button.clicked {
                transform: scale(0.95);
                box-shadow: 0 5px 15px rgba(58, 123, 213, 0.2) !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // 更新總照片數
    if (totalCountEl) {
        totalCountEl.textContent = totalPhotos;
    }
    
    // 打開照片查看器函數保持不變
    // 打開照片查看器
    function openPhotoViewer(index) {
        currentPhotoIndex = index;
        
        const memory = memories[index] || createDefaultMemory(index);
        const savedTitle = localStorage.getItem(`memory-title-${index}`) || memory.title;
        const savedDesc = localStorage.getItem(`memory-description-${index}`) || memory.description;
        
        photoMain.src = `${photoPath}(${index+1}).jpg`;
        photoTitle.textContent = savedTitle;
        photoDate.textContent = memory.date;
        photoDesc.textContent = savedDesc;
        currentIndexEl.textContent = index + 1;
        
        photoViewer.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // 設置可編輯
        setupEditable(photoTitle, photoDesc, index);
    }
    
    // 關閉照片查看器
    function closePhotoViewer() {
        photoViewer.classList.remove('active');
        document.body.style.overflow = '';
        
        // 更新畫廊標題
        updateGalleryItem(currentPhotoIndex);
    }
    
    // 上一張照片
    function prevPhoto() {
        currentPhotoIndex = (currentPhotoIndex - 1 + totalPhotos) % totalPhotos;
        updatePhotoViewer();
    }
    
    // 下一張照片
    function nextPhoto() {
        currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos;
        updatePhotoViewer();
    }
    
    // 更新照片查看器
    function updatePhotoViewer() {
        const memory = memories[currentPhotoIndex] || createDefaultMemory(currentPhotoIndex);
        const savedTitle = localStorage.getItem(`memory-title-${currentPhotoIndex}`) || memory.title;
        const savedDesc = localStorage.getItem(`memory-description-${currentPhotoIndex}`) || memory.description;
        
        // 淡出效果
        const photoContent = document.querySelector('.photo-content');
        photoContent.style.opacity = '0';
        photoContent.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            photoMain.src = `${photoPath}(${currentPhotoIndex+1}).jpg`;
            photoTitle.textContent = savedTitle;
            photoDate.textContent = memory.date;
            photoDesc.textContent = savedDesc;
            currentIndexEl.textContent = currentPhotoIndex + 1;
            
            // 淡入效果
            photoContent.style.opacity = '1';
            photoContent.style.transform = 'scale(1)';
            
            // 設置可編輯
            setupEditable(photoTitle, photoDesc, currentPhotoIndex);
        }, 300);
    }
    
    // 設置可編輯元素
    function setupEditable(titleEl, descEl, index) {
        // 標題可編輯
        titleEl.contentEditable = true;
        titleEl.dataset.originalText = titleEl.textContent;
        
        titleEl.addEventListener('focus', function() {
            this.classList.add('editing');
        });
        
        titleEl.addEventListener('blur', function() {
            this.classList.remove('editing');
            localStorage.setItem(`memory-title-${index}`, this.textContent);
        });
        
        // 描述可編輯
        descEl.contentEditable = true;
        descEl.dataset.originalText = descEl.textContent;
        
        descEl.addEventListener('focus', function() {
            this.classList.add('editing');
        });
        
        descEl.addEventListener('blur', function() {
            this.classList.remove('editing');
            localStorage.setItem(`memory-description-${index}`, this.textContent);
        });
        
        // 鍵盤事件
        [titleEl, descEl].forEach(el => {
            el.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    this.textContent = this.dataset.originalText;
                    this.blur();
                } else if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.blur();
                }
            });
        });
    }
    
    // 更新畫廊標題
    function updateGalleryItem(index) {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const item = galleryItems[index];
        
        if (item) {
            const title = item.querySelector('.gallery-title');
            const excerpt = item.querySelector('.gallery-excerpt');
            const savedTitle = localStorage.getItem(`memory-title-${index}`);
            const savedDesc = localStorage.getItem(`memory-description-${index}`);
            
            if (savedTitle) title.textContent = savedTitle;
            if (savedDesc) excerpt.textContent = savedDesc;
        }
    }
});
