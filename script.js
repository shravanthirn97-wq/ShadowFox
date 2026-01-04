// Toggle resume visibility
document.getElementById('toggle-resume').addEventListener('click', function() {
    const content = document.getElementById('resume-content');
    content.classList.toggle('hidden');
});

// Form validation and submission (basic example)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Message sent! (In a real site, this would send to a server.)');
        // Reset form
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});