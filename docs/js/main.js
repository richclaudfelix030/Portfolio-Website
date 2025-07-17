document.querySelector('.nav-toggle').onclick = function() {
    document.querySelector('.top-nav').classList.toggle('open');
};

function updateLangColor(sel) {
    sel.classList.remove('lang-en', 'lang-ja');
    if (sel.value.includes('/en/')) {
        sel.classList.add('lang-en');
    } else if (sel.value.includes('/ja/')) {
        sel.classList.add('lang-ja');
    }
}
// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    var langSel = document.querySelector('.lang-switch');
    if (langSel) updateLangColor(langSel);
    
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});