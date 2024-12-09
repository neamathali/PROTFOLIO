// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').replace('.html', '').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission Handling (Example)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        this.reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

// Responsive Navigation Menu Toggle (Optional)
const navToggle = document.createElement('button');
navToggle.innerText = 'Menu';
navToggle.style.display = 'none'; // Adjust for your CSS breakpoints
navToggle.addEventListener('click', () => {
    const navMenu = document.querySelector('header nav ul');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelector('header nav').appendChild(navToggle);

// Add resize event listener to adjust nav visibility on larger screens
window.addEventListener('resize', () => {
    const navMenu = document.querySelector('header nav ul');
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
});
