async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
        alert('Login successful!');
        localStorage.setItem('token', data.token);
    } else {
        alert(data.message);
    }
}


async function signin() {
    const Name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const Email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://yourserver.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Name, password, date, Email })
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login successful!');
            localStorage.setItem('token', data.token);
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
}
