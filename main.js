document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('darkModeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    
    // Hack to force a redraw
    var display = document.body.style.display;
    document.body.style.display = 'none';
    document.body.offsetHeight; // no need to store this anywhere, the reference is enough
    document.body.style.display = display;
    });
});

// Check user's choice on page load
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

document.getElementById('darkModeToggle').addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }
});
