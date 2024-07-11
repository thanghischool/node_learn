var express = require('express');
var router = express.Router();

router.get('/code', function (req, res) {
    res.render('code', { title: 'code tutorial' });
});

router.get('/doctype', function (req, res) {
    res.render('doctype', { title: 'doctype tutorial' });
});

router.get('/extends', function (req, res) {
    res.render('extends', { title: 'extends tutorial' });
});

router.get('/include', function (req, res) {
    res.render('include', { title: 'include tutorial' });
});

module.exports = router;
