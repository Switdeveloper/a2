// Load partials (header/footer) into pages
document.addEventListener('DOMContentLoaded', async () => {
    // Load footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        try {
            const response = await fetch('partials/footer.html');
            const footerHTML = await response.text();
            footerContainer.innerHTML = footerHTML;
        } catch (e) {
            console.log('Footer loaded inline');
        }
    }
});