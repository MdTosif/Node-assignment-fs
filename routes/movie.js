var express = require('express');
const { auth } = require('../middleware/auth');
const { movieByGenre } = require('../repositories/movie');
var router = express.Router();
/* GET users listing. */
router.get('/',auth, async function (req, res, next) {
    
    let resData = await movieByGenre();
    res.json(resData)
});

module.exports = router;
