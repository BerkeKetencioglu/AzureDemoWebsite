// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form fields
    if (!name || !email || !message) {
        alert('Please fill out all fields before submitting!');
        return;
    }

    // Display a confirmation message
    const confirmation = document.createElement('div');
    confirmation.className = 'confirmation';
    confirmation.textContent = `Thank you, ${name}! Your message has been received. We'll contact you at ${email}.`;

    // Replace the form with the confirmation message
    const formSection = document.querySelector('.contact-form');
    formSection.innerHTML = ''; // Clear the form
    formSection.appendChild(confirmation);
}

function toggleHeaderBackground() {
    // Header elementini seçiyoruz
    const header = document.querySelector('header');
    
    if (header) {
        // Tıklama olayını ekliyoruz
        header.addEventListener('click', () => {
            const currentColor = header.style.backgroundColor;
            
            // Arka plan rengini turuncuya çevir veya eski haline döndür
            header.style.backgroundColor = currentColor === 'orange' ? '' : 'orange';
        });
    } else {
        console.error('Header element not found.');
    }
}

// Sayfa yüklendiğinde fonksiyonu çalıştırıyoruz
document.addEventListener('DOMContentLoaded', toggleHeaderBackground);


// Add hover effect to navigation links
function setupNavigationHover() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'red';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    });
}

// Initialize all event listeners
function initialize() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }

    toggleHeaderBackground();
    setupNavigationHover();
}

// Wait for the DOM to fully load before initializing
document.addEventListener('DOMContentLoaded', initialize);

// Toggle header background color on click
function toggleHeaderBackground() {
    const header = document.querySelector('header');
    if (header) {
        header.addEventListener('click', () => {
            const currentColor = header.style.backgroundColor;
            header.style.backgroundColor = currentColor === 'orange' ? '' : 'orange';
        });
    } else {
        console.error('Header element not found.');
    }
}

// Add a scrolling text effect
function addScrollingText() {
    const scrollingText = document.createElement('div');
    scrollingText.className = 'scrolling-text';
    scrollingText.textContent = "This is my Demo Website";
    document.body.appendChild(scrollingText);

    let position = 0;
    setInterval(() => {
        position += 2;
        if (position > window.innerWidth) position = -scrollingText.offsetWidth;
        scrollingText.style.left = `${position}px`;
    }, 30);
}

// Create a movable box with a button
function addMovableBox() {
    const box = document.createElement('div');
    box.className = 'movable-box';
    document.body.appendChild(box);

    const button = document.createElement('button');
    button.textContent = "Move Box";
    button.className = 'move-button';
    document.body.appendChild(button);

    let position = 0;
    button.addEventListener('click', () => {
        position += 50;
        if (position > window.innerWidth - 100) position = 0;
        box.style.transform = `translateX(${position}px)`;
    });
}

// Initialize all interactive features
function initialize() {
    toggleHeaderBackground();
    addScrollingText();
    addMovableBox();
}

// Run the script after DOM content is loaded
document.addEventListener('DOMContentLoaded', initialize);


