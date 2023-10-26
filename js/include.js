const links = document.querySelectorAll('.btn-link');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // chặn hành vi click vào thẻ a
        let page = link.dataset.page;
        // Truyền page lên PHP
        window.location.href = 'index.php?page='+page;
    });
});