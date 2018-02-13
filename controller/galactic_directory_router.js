///////////////////////////////////////////////////////////////////////////////////////
//                             Dependencies & Variables                              //
///////////////////////////////////////////////////////////////////////////////////////
// Require express so we can make an express application
var express = require("express");
// Makes HTTP request for HTML page
var request = require("request");
var bodyParser = require("body-parser");
var router = express.Router();

///////////////////////////////////////////////////////////////////////////////////////
//                                    Functions                                      //
///////////////////////////////////////////////////////////////////////////////////////
function getList(req, res) {
    request('https://swapi.co/api/people/', function (error, response, body) {
        if (error) {
            res.status(500).end();
        } else {
            var parsedBody = JSON.parse(body);
            console.log(parsedBody.results.length);
            res.json({
                people: (parsedBody.results)
            });
        }
    });
}

///////////////////////////////////////////////////////////////////////////////////////
//                                      Routes                                       //
///////////////////////////////////////////////////////////////////////////////////////
router.get("/getList", function (req, res) {
    getList(req, res);
});

module.exports = router;