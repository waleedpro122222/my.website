function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('subscription-section').style.display = 'block';
    } else {
        alert('Please enter a valid username and password.');
    }
}

function selectPlan(plan) {
    document.getElementById('subscription-section').style.display = 'none';
    document.getElementById('ai-section').style.display = 'block';

    const descriptions = {
        Free: "Welcome to GANAI Free Plan! You can chat only.",
        Standard: "Welcome to GANAI Standard Plan! You can chat and generate photos.",
        Premium: "Welcome to GANAI Premium Plan! You can chat, generate photos, and generate videos."
    };

    document.getElementById('ai-description').innerText = descriptions[plan];
}

function sendToAI() {
    const input = document.getElementById('ai-input').value;
    if (input) {
        alert(`AI Response: "${input}"`);
        document.getElementById('ai-input').value = '';
    } else {
        alert('Please type a message.');
    }
}
