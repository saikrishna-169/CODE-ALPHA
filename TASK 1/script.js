const images = document.querySelectorAll('.lightbox');
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const captionText = document.getElementById('caption');

images.forEach(image => {
    image.addEventListener('click', function(event) {
        event.preventDefault();
        const imgSrc = this.getAttribute('href');
        const caption = this.querySelector('.caption').innerText;
        
        lightboxImage.src = imgSrc;
        captionText.innerText = caption;
        lightboxModal.style.display = 'flex';
    });
});

function closeLightbox() {
    lightboxModal.style.display = 'none';
}
