// Get the elements for the search functionality
const searchIcon = document.getElementById('search-icon');
const searchForm = document.getElementById('search-form');
const closeSearch = document.getElementById('close-search');

// Show the search form when the search icon is clicked
searchIcon.onclick = () => {
    searchForm.classList.add('active');
};

// Hide the search form when the close icon is clicked
closeSearch.onclick = () => {
    searchForm.classList.remove('active');
};

// Hide the search form when the user clicks outside it
window.onclick = (event) => {
    if (event.target === searchForm) {
        searchForm.classList.remove('active');
    }
};

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    };
});

// Elements for toggling the menu
const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

// Toggle the navbar and menu icon on click
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Scroll event for menu and search form behavior
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    toggleBackToTop();
    highlightNavLink();
};

// Back-to-Top Button
const backToTop = document.createElement('div');
backToTop.id = 'back-to-top';
backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
document.body.appendChild(backToTop);

// Smooth scroll to top when back-to-top is clicked
backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Show or hide the back-to-top button based on scroll position
function toggleBackToTop() {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

// Highlight active navigation link based on scroll position
function highlightNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`.navbar a[href="#${id}"]`);

        if (scrollPos >= top && scrollPos < top + height) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}
document.querySelectorAll('#rating-stars i').forEach(star => {
    star.addEventListener('click', function() {
        const rating = this.getAttribute('data-value');
        document.getElementById('review-rating').value = rating;

        // Highlight selected stars
        document.querySelectorAll('#rating-stars i').forEach(s => {
            s.classList.toggle('selected', s.getAttribute('data-value') <= rating);
        });
    });
});

    // Show address field if Delivery is selected
    const deliveryOption = document.getElementById("delivery-option");
    const addressField = document.getElementById("delivery-address");

    deliveryOption.addEventListener("change", function () {
        if (this.value === "Delivery") {
            addressField.style.display = "block";
        } else {
            addressField.style.display = "none";
        }
    });
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting and reloading the page
        
        // Hide the form after submission
        document.getElementById('contactForm').style.display = 'none';
        
        // Show the "Thank you" message
        const thankYouMessage = document.createElement('div');
        thankYouMessage.innerHTML = '<p>Thank you for your message! We will get back to you shortly.</p>';
        thankYouMessage.style.fontSize = '18px';
        thankYouMessage.style.marginTop = '20px';
        thankYouMessage.style.color = '#4CAF50'; // Green color for a positive response
        
        document.querySelector('.contact-container').appendChild(thankYouMessage);
    });
    
    // Handle order form submission
    const orderForm = document.getElementById("orderForm");
    const thankYouMessage = document.getElementById("order-thank-you");

    orderForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form reload
        thankYouMessage.style.display = "block";
        orderForm.reset(); // Reset the form fields
    });


const form = document.getElementById('review-form'); // Replace with your form's ID

form.onsubmit = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Create a modal for the thank-you message
    const modal = document.createElement('div');
    modal.id = 'thank-you-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent background
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';

    // Create the message box
    const messageBox = document.createElement('div');
    messageBox.style.backgroundColor = '#fff';
    messageBox.style.padding = '20px';
    messageBox.style.borderRadius = '10px';
    messageBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    messageBox.style.textAlign = 'center';
    messageBox.style.width = '300px';

    // Add the thank-you text
    const messageText = document.createElement('p');
    messageText.textContent = 'Thank you for your review!';
    messageText.style.marginBottom = '20px';
    messageText.style.fontSize = '1.2rem';
    messageText.style.color = '#333';
    messageBox.appendChild(messageText);

    // Add the OK button
    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.style.padding = '10px 20px';
    okButton.style.backgroundColor = '#28a745'; // Green background
    okButton.style.color = '#fff';
    okButton.style.border = 'none';
    okButton.style.borderRadius = '5px';
    okButton.style.fontSize = '1rem';
    okButton.style.cursor = 'pointer';

    // Close the modal when the OK button is clicked
    okButton.onclick = () => {
        modal.remove();
    };

    messageBox.appendChild(okButton);
    modal.appendChild(messageBox);
    document.body.appendChild(modal);
};



