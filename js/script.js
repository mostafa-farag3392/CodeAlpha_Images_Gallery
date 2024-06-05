// Array of image URLs
const images = [
    'imgs/art1.jpg',
    'imgs/art2.jpg',
    'imgs/art3.jpg',
    'imgs/art4.jpg',
    'imgs/art5.jpg',
    'imgs/art6.jpg',
    'imgs/art7.jpg',
    'imgs/art8.jpg',
    'imgs/art9.jpg',
    'imgs/art10.jpg',
    'imgs/art11.jpg',
    'imgs/art12.jpg',
    'imgs/art13.jpg',
    'imgs/art14.jpg',
    'imgs/art15.jpg',
];

// Function to create image elements and append them to the gallery
function createGallery() {
    const gallery = document.querySelector('.gallery');

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Image';
        gallery.appendChild(imgElement);

        // Add click event listener to each image
        imgElement.addEventListener('click', () => {
            // Open image in a new tab or perform other actions
            window.open(image, '_blank');
        });
    });
}

// Call the function to create the gallery when the page loads
document.addEventListener('DOMContentLoaded', createGallery);

