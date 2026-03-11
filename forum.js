document.addEventListener('DOMContentLoaded', function() {
    // 分类切换
    const categoryLinks = document.querySelectorAll('.category-list a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            console.log('切换到分类:', category);
            // 这里可以添加实际的帖子筛选逻辑
        });
    });

    // 排序标签切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const sort = this.getAttribute('data-sort');
            console.log('切换排序:', sort);
            // 这里可以添加实际的排序逻辑
        });
    });

    // 发布帖子按钮
    const newPostBtn = document.querySelector('.new-post-btn');
    if (newPostBtn) {
        newPostBtn.addEventListener('click', function() {
            alert('发布帖子功能开发中...\n\n请登录后使用此功能');
            // 这里可以打开发帖弹窗或跳转到发帖页面
        });
    }

    // 标签点击
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagName = this.textContent;
            console.log('点击标签:', tagName);
            // 这里可以添加标签筛选逻辑
        });
    });

    // 分页按钮
    const pageBtns = document.querySelectorAll('.page-btn:not(:disabled)');
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                pageBtns.forEach(b => b.classList.remove('active'));
                if (!isNaN(this.textContent)) {
                    this.classList.add('active');
                }
                
                // 滚动到顶部
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                console.log('切换到页面:', this.textContent);
                // 这里可以添加实际的分页加载逻辑
            }
        });
    });

    // 帖子点击统计
    const postTitles = document.querySelectorAll('.post-title a');
    postTitles.forEach(title => {
        title.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('查看帖子:', this.textContent);
            alert('帖子详情页面开发中...\n\n帖子标题: ' + this.textContent);
            // 这里可以跳转到帖子详情页
        });
    });

    // 用户头像点击
    const userItems = document.querySelectorAll('.user-item');
    userItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const userName = this.querySelector('.user-name').textContent;
            console.log('查看用户:', userName);
            alert('用户主页开发中...\n\n用户: ' + userName);
            // 这里可以跳转到用户主页
        });
    });

    // 帖子统计交互
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            const icon = this.querySelector('.stat-icon').textContent;
            if (icon === '👍') {
                const valueSpan = this.querySelector('.stat-value');
                let currentValue = parseInt(valueSpan.textContent);
                valueSpan.textContent = currentValue + 1;
                this.style.color = '#2563eb';
                console.log('点赞');
            }
        });
    });

    // 响应式侧边栏
    function handleResize() {
        const sidebar = document.querySelector('.forum-sidebar');
        if (window.innerWidth <= 1024) {
            // 移动端可以添加折叠功能
            console.log('移动端视图');
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
});
