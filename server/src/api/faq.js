const express = require('express');

// create a router
const router = express.Router();

// read all
router.get('/', (req, res, next) => {
    res.json({
        message: `read all`,
    });
});

// read one
router.get('/:id', (req, res, next) => {
    res.json({
        message: `read one`,
    });
});

// create 
router.post('/', (req, res, next) => {
    res.json({
        message: `create one`,
    });
});

// update 
router.put('/:id', (req, res, next) => {
    res.json({
        message: `update one`,
    });
});

// delete
router.delete('/:id', (req, res, next) => {
    res.json({
        message: `delete one`,
    });
});



module.exports = router;