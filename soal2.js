function showContent(contentId) {
        const contents = document.querySelectorAll('.content');
    
        contents.forEach(content => {
            if (content.id === contentId) {
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }
    