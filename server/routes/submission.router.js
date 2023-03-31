const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// my post request to store my data on the server

router.post('/', (req,res) => {
    let newSubmission = req.body
    const querytext = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`
    pool.query(querytext, [newSubmission.feeling, newSubmission.understanding, newSubmission.support, newSubmission.comments])
    .then((results) => {
        res.sendStatus(200);
        console.log('POST worked!')
    }).catch((error) => {
        console.log('error in POST', error)
        res.sendStatus(500);
    })
})

module.exports = router;