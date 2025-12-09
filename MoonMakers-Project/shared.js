// shared.js
// Basic code to insert header and footer into every page

(function(){

    const header = `
        <header class="site-header">
            <div class="header-left">
                <img src="Assets/images/logo.png" alt="logo">
                <div class="header-title">Moon Makers</div>
            </div>

            <nav class="nav">
                <a href="index.html">Home</a>
                <a href="tour.html">Tour</a>
                <a href="gallery.html">Gallery</a>
                <a href="merch.html">Merch</a>
                <a href="auth.html">Login</a>
            </nav>
        </header>
    `;

    const footer = `
        <footer class="site-footer">
            © ${new Date().getFullYear()} Moon Makers • Web Dev Project
        </footer>
    `;

    const h = document.getElementById("site-header");
    if(h) h.innerHTML = header;

    const f = document.getElementById("site-footer");
    if(f) f.innerHTML = footer;

})();
