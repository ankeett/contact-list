const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const contacts = await req.db.findContacts();
    res.render('home', { contacts: contacts });
});

router.post('/', async (req, res) => {
    res.render('home');
});

module.exports = router;