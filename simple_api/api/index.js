var router = require ('express').Router ();
var dataLessons = require ('./initData');
var assign = require ('object-assign');

router.get ('/lesson', function (req, res, next) {
  res.header ('Access-Control-Allow-Headers', '*');
  res.header ('Access-Control-Allow-Origin', req.headers.origin);
  res.json (dataLessons);
});

module.exports = router;
