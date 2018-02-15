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
function getList(req, res, page) {
    // Store off the url
    var url = "https://swapi.co/api/people/";

    // If there is a page passed then use it
    if (page) {
        url += "?page=" + page
    }

    // Call SW API to get the list of 10
    request(url, function (error, response, body) {
        if (response.statusCode != 200) {
            res.status(response.statusCode).end();
        } else {
            var parsedBody = JSON.parse(body);
            // Since the API returns only 10 at a time then figure out how many pages you will have
            var numberOfPages = Math.ceil(parsedBody.count / 10);
            // Re-package object and send it as the response to the client
            res.json({
                // If there is a page number passed in that's the page the user's on, otherwise assume page one
                selectedPage: (page ? page : 1),
                resultsFound: parsedBody.count,
                people: parsedBody.results,
                pages: numberOfPages
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

router.get("/getPage", function (req, res) {
    console.log(req.query.page);
    getList(req, res, req.query.page);
})

module.exports = router;