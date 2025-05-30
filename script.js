document.addEventListener('DOMContentLoaded', function() {
    // 元素選擇
    const header = document.querySelector('.header');
    const memoriesGrid = document.querySelector('.memories-grid');
    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal-image img');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const modalClose = document.querySelector('.modal-close');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    // 配置
    const photoPath = 'david/photo ';
    const totalPhotos = 16;
    let currentPhotoIndex = 0;
    
    // 回憶內容 - 調整文字使其更加溫馨
    const memories = [
        {
            title: '初次相遇的溫暖',
            date: '2019年9月',
            description: '還記得我們第一次見面時那溫暖的陽光嗎？你靦腆的笑容像是春日的花朵，從那一刻起，我就知道我們之間會綻放出美麗的友誼。'
        },
        {
            title: '共享課堂的時光',
            date: '2019年10月',
            description: '那些一起上課、一起討論的日子，成為了大學生活中最珍貴的回憶。你專注的眼神和認真的態度，總是給我無聲的鼓勵。'
        },
        {
            title: '圖書館的溫馨角落',
            date: '2019年12月',
            description: '在圖書館那個安靜的角落，我們常常一坐就是一整天。溫暖的陽光透過窗戶灑在書頁上，照亮了你認真閱讀的側臉，那份寧靜的時光讓人心生暖意。'
        },
        {
            title: '深夜共同的奮鬥',
            date: '2020年1月',
            description: '記得那次為了趕作業，我們熬到凌晨。即使疲倦，我們依然相互打氣、彼此支持。那份並肩作戰的感覺，讓寒冷的冬夜也變得溫暖。'
        },
        {
            title: '餐桌上的歡聲笑語',
            date: '2020年3月',
            description: '學校餐廳的飯菜或許不是最美味的，但因為有你的陪伴，每一頓飯都變得特別。我們分享生活中的喜怒哀樂，那些笑聲至今仍在耳邊迴響。'
        },
        {
            title: '活動中閃耀的你',
            date: '2020年5月',
            description: '參加那次學校活動時，你的熱情和創意讓所有人都為之驚嘆。你總是能帶給團隊無限的活力和笑聲，像是一束溫暖的陽光照亮周圍的每個人。'
        },
        {
            title: '旅途中的心靈交流',
            date: '2020年7月',
            description: '那次短途旅行，我們一起看日出、聊理想、許願望。在星空下的促膝長談，讓彼此的心靈更加靠近。這段旅途中的每一刻都是我們友誼中閃閃發光的寶石。'
        },
        {
            title: '心靈深處的分享',
            date: '2020年9月',
            description: '感謝你願意與我分享你內心深處的夢想和秘密。那些真摯的交流，像是冬日裡的一杯熱茶，溫暖了整個心房。你的信任是我收到的最珍貴的禮物。'
        },
        {
            title: '充滿驚喜的生日',
            date: '2020年11月',
            description: '記得那次我們為你準備的生日驚喜嗎？看到你驚訝又感動的表情，大家都覺得一切準備都值得了。那是個充滿笑聲、溫暖和感動的夜晚，願每一年的生日都能如此美好。'
        },
        {
            title: '共克難關的溫暖',
            date: '2021年2月',
            description: '面對課業上的難題，我們常常一起研究到深夜。你獨特的思考方式總是能找到解決問題的新角度，讓我深受啟發。那些一起奮鬥的日子，是友誼最溫暖的見證。'
        },
        {
            title: '成長路上的陪伴',
            date: '2021年5月',
            description: '看著你從大一的懵懂到現在的成熟，這種成長的過程讓人感動。你的自信與堅定，如同冬日裡的陽光，溫暖而耀眼。很榮幸能在這段旅程中陪伴你成長。'
        },
        {
            title: '團隊合作的溫馨',
            date: '2021年7月',
            description: '還記得我們一起準備的那次課堂報告嗎？即使過程中充滿挑戰，但我們互相鼓勵、共同努力，最終創造了美好的成果。這種默契與支持，是我們友誼中最溫暖的部分。'
        },
        {
            title: '四季更迭的美好',
            date: '2021年10月',
            description: '校園的四季變換，我們一起見證。春天的花開、夏天的蟬鳴、秋天的落葉、冬天的初雪，每一個季節都有你我並肩的身影，每一個瞬間都是溫馨的回憶。'
        },
        {
            title: '畢業前的溫馨約定',
            date: '2022年4月',
            description: '畢業前，我們在校園裡漫步，談論著未來的計畫和彼此的約定。無論未來如何，這段友誼都將如同冬日的暖陽，永遠溫暖我們的心房。'
        },
        {
            title: '離別時刻的感動',
            date: '2022年6月',
            description: '畢業季的忙碌和不捨，讓這段時光變得格外珍貴。拍畢業照、辦離別派對、收拾行李，每一刻都充滿了情感。即使離別在即，心與心之間的溫度卻永不消逝。'
        },
        {
            title: '未來的暖心祝福',
            date: '2022年7月',
            description: '畢業不是結束，而是新的開始。願你在未來的道路上一切順利，實現自己的夢想。無論何時何地，我們的友誼都會是你心中的一盞明燈，照亮前行的道路。生日快樂，親愛的朋友！'
        }
    ];
    
    // 初始化頁面
    initPage();
    
    function initPage() {
        // 確保頁面可見
        document.body.style.visibility = 'visible';
        
        // 監聽滾動事件
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // 立即加載記憶
        loadMemories();
        
        // 確保記憶內容可見
        setTimeout(() => {
            const memoryItems = document.querySelectorAll('.memory-item');
            memoryItems.forEach(item => {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            });
        }, 100);
        
        // 模態框事件綁定
        modalClose.addEventListener('click', closeModal);
        prevButton.addEventListener('click', prevMemory);
        nextButton.addEventListener('click', nextMemory);
        
        // 平滑滾動
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // 設置動畫
        setupAnimations();
        
        // 設置背景效果 - 添加溫馨飄落的效果
        setupBackgroundEffects();
    }
    
    // 加載記憶內容 - 簡化版本以確保顯示
    function loadMemories() {
        memoriesGrid.innerHTML = '';
        
        for (let i = 0; i < totalPhotos; i++) {
            const memoryItem = document.createElement('div');
            memoryItem.className = 'memory-item';
            memoryItem.dataset.index = i;
            
            // 獲取記憶數據
            const memory = memories[i];
            const savedTitle = localStorage.getItem(`memory-title-${i}`) || memory.title;
            const savedDescription = localStorage.getItem(`memory-description-${i}`) || memory.description;
            
            // 圖片部分
            const imageContainer = document.createElement('div');
            imageContainer.className = 'memory-image';
            
            const img = document.createElement('img');
            img.src = `${photoPath}(${i+1}).jpg`;
            img.alt = savedTitle;
            img.loading = 'lazy';
            
            imageContainer.appendChild(img);
            
            // 內容部分
            const contentContainer = document.createElement('div');
            contentContainer.className = 'memory-content';
            
            const date = document.createElement('div');
            date.className = 'memory-date';
            date.textContent = memory.date;
            
            const title = document.createElement('h3');
            title.className = 'memory-title';
            title.textContent = savedTitle;
            
            const description = document.createElement('p');
            description.className = 'memory-description';
            description.textContent = savedDescription;
            
            const button = document.createElement('button');
            button.className = 'memory-button';
            button.innerHTML = '查看回憶 <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>';
            
            contentContainer.appendChild(date);
            contentContainer.appendChild(title);
            contentContainer.appendChild(description);
            contentContainer.appendChild(button);
            
            memoryItem.appendChild(imageContainer);
            memoryItem.appendChild(contentContainer);
            
            // 點擊事件
            button.addEventListener('click', function() {
                openModal(i);
            });
            
            memoriesGrid.appendChild(memoryItem);
        }
        
        // 確保所有記憶項目可見
        setTimeout(() => {
            document.querySelectorAll('.memory-item').forEach(item => {
                item.classList.add('visible');
            });
        }, 500);
        
        // 添加淡入淡出效果
        document.querySelectorAll('.memory-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            item.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 300 + (index * 200)); // 較長的延遲，更加舒緩
        });
    }
    
    // 打開模態框
    function openModal(index) {
        currentPhotoIndex = index;
        
        // 獲取內容
        const memory = memories[index];
        const title = localStorage.getItem(`memory-title-${index}`) || memory.title;
        const description = localStorage.getItem(`memory-description-${index}`) || memory.description;
        
        // 設置內容
        modalImage.src = `${photoPath}(${index+1}).jpg`;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        
        // 顯示模態框
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // 設置可編輯
        setupEditable(modalTitle, `memory-title-${index}`);
        setupEditable(modalDescription, `memory-description-${index}`);
    }
    
    // 關閉模態框
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // 更新記憶列表
        updateMemoryItem(currentPhotoIndex);
    }
    
    // 上一個記憶
    function prevMemory() {
        currentPhotoIndex = (currentPhotoIndex - 1 + totalPhotos) % totalPhotos;
        updateModal();
    }
    
    // 下一個記憶
    function nextMemory() {
        currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos;
        updateModal();
    }
    
    // 更新模態框
    function updateModal() {
        // 獲取新內容
        const memory = memories[currentPhotoIndex];
        const title = localStorage.getItem(`memory-title-${currentPhotoIndex}`) || memory.title;
        const description = localStorage.getItem(`memory-description-${currentPhotoIndex}`) || memory.description;
        
        // 淡出效果
        modalImage.style.opacity = '0';
        modalTitle.style.opacity = '0';
        modalDescription.style.opacity = '0';
        
        setTimeout(() => {
            // 更新內容
            modalImage.src = `${photoPath}(${currentPhotoIndex+1}).jpg`;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            
            // 設置可編輯
            setupEditable(modalTitle, `memory-title-${currentPhotoIndex}`);
            setupEditable(modalDescription, `memory-description-${currentPhotoIndex}`);
            
            // 淡入效果
            modalImage.style.opacity = '1';
            modalTitle.style.opacity = '1';
            modalDescription.style.opacity = '1';
        }, 300);
    }
    
    // 更新記憶項目
    function updateMemoryItem(index) {
        const memoryItems = document.querySelectorAll('.memory-item');
        const memoryItem = memoryItems[index];
        
        if (memoryItem) {
            const title = memoryItem.querySelector('.memory-title');
            const description = memoryItem.querySelector('.memory-description');
            
            if (title) title.textContent = localStorage.getItem(`memory-title-${index}`) || memories[index].title;
            if (description) description.textContent = localStorage.getItem(`memory-description-${index}`) || memories[index].description;
        }
    }
    
    // 設置可編輯元素
    function setupEditable(element, storageKey) {
        element.contentEditable = true;
        
        // 移除舊的事件監聽器
        element.removeEventListener('focus', editableFocusHandler);
        element.removeEventListener('blur', editableBlurHandler);
        element.removeEventListener('keydown', editableKeydownHandler);
        
        // 添加新的事件監聽器
        element.addEventListener('focus', editableFocusHandler);
        element.addEventListener('blur', editableBlurHandler);
        element.addEventListener('keydown', editableKeydownHandler);
        
        // 存儲原始內容和鍵值
        element.dataset.originalContent = element.textContent;
        element.dataset.storageKey = storageKey;
    }
    
    // 可編輯元素焦點處理
    function editableFocusHandler() {
        this.classList.add('editing');
        this.dataset.originalContent = this.textContent;
    }
    
    // 可編輯元素失焦處理
    function editableBlurHandler() {
        this.classList.remove('editing');
        localStorage.setItem(this.dataset.storageKey, this.textContent);
    }
    
    // 可編輯元素鍵盤處理
    function editableKeydownHandler(e) {
        if (e.key === 'Escape') {
            this.textContent = this.dataset.originalContent;
            this.blur();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            this.blur();
        }
    }
    
    // 設置簡化版動畫，確保內容可見
    function setupAnimations() {
        document.querySelectorAll('.memory-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            // 確保內容最終可見，即使IntersectionObserver失敗
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 500 + (index * 100));
        });
        
        document.querySelectorAll('.section-title').forEach(title => {
            title.style.opacity = '1'; // 直接設置為可見
        });
    }
    
    // 設置背景效果 - 添加溫馨飄落的效果
    function setupBackgroundEffects() {
        const mainElement = document.querySelector('main');
        
        // 創建溫馨飄落元素
        for (let i = 0; i < 15; i++) {
            const floatingElement = document.createElement('div');
            floatingElement.className = 'floating-element';
            
            // 隨機決定是心形還是星星
            const isHeart = Math.random() > 0.5;
            floatingElement.innerHTML = isHeart ? '❤️' : '✨';
            
            // 隨機位置和大小
            const size = Math.random() * 20 + 10;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 20 + 10;
            const delay = Math.random() * 10;
            
            // 應用樣式
            floatingElement.style.cssText = `
                position: absolute;
                top: -50px;
                left: ${left}%;
                font-size: ${size}px;
                opacity: 0.15;
                pointer-events: none;
                animation: floating ${animationDuration}s linear infinite;
                animation-delay: -${delay}s;
                z-index: -1;
            `;
            
            mainElement.appendChild(floatingElement);
        }
        
        // 添加浮動動畫
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes floating {
                0% {
                    transform: translateY(-50px) rotate(0deg);
                    opacity: 0;
                }
                5% {
                    opacity: 0.1;
                }
                95% {
                    opacity: 0.1;
                }
                100% {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
});
