const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');


// bring in monk and connect to database
const db = monk(process.env.MONGO_URI);

// accessing specific collection
const faqs = db.get('faqs');


const schema = Joi.object({
    question: Joi.string().trim().required(),
    answer: Joi.string().trim().required(),
    video_url: Joi.string(),
});


// create a router
const router = express.Router();

// read all
router.get('/', async (req, res, next) => {
    try {
        const items = await faqs.find({});
        res.json(items)
    } catch (error) {
        next(error);
    }
});

// read one
router.get('/:id', (req, res, next) => {
    res.json({
        message: `read one`,
    });
});

// create 
router.post('/', (req, res, next) => {
    try {

    } catch (error) {

    }
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