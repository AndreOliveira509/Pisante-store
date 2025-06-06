const express = require('express');

const routes = express.Router();
const users = [{
    id: 1,
    name: 'André Oliveira',
    email: 'contato@bitloop.com.br',
    password: '123456',
}]

routes.post('/login', (req, res) => {
    const { email, password } = req.body; 
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        return res.status(200).json(user);
  
    } else {
        return res.status(401).send('Invalid credentials');
    }
});

module.exports = routes;