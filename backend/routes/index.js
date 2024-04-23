const express = require('express');


// router instance to initialize routes with different methods
const router = express.Router();

router.get('/backend', (req, res) => {
    res.status(200).send({
        success: true,
        message: 'Backend is running successfully!!'
    })
})

module.exports = router;