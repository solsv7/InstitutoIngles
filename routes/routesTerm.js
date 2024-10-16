const express = require('express');
const router = express.Router();
const { Term } = require('../models');


router.post('/', async (req, res) => {
    try {
        const term = await Term.create(req.body);
        res.status(201).json(term);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const terms = await Term.findAll();
        res.json(terms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
