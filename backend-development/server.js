const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Dummy user data (In a real application, use a database)
const users = [
    {
        id: 1,
        username: 'testuser',
        password: '$2a$10$K4o5zClvG7.GkpXj6KZ0qOxH3f3TBjKpCkxHkFDO3tX0b1MCaJY5S', // password is "password123"
    },
];

// Secret key for JWT
const secretKey = 'your_jwt_secret_key';

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, {
            expiresIn: '1hr',
        });

        res.json({ token });
    });
});

// Protected route example
app.get('/protected', (req, res) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        res.json({ message: 'Access granted to protected route', user: req.user });
    } catch (e) {
        res.status(400).json({ message: 'Token is not valid' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
