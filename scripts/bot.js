/*
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

var params = {
    q: 'Beach',
    count: 250
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {

    var tweets = data.statuses;
    //console.log(tweets.length);

    // DO WHILE TEST
    var i = 0;
    var coors = [];

    do {
        if (tweets[i].coordinates != null) {
            coors.push(tweets[i].coordinates);
            i++;
        } else {
            i++
        }
    }
    while (i < tweets.length);
    //console.log(coors);


    //WRITES THE FILE
    var results = coors.map(JSON.stringify);

    var fs = require('fs');
    fs.writeFile('./msg.js', 'eqfeed_callback({"data":[' + results + ']});',
        function (err) {
            if (err) {
                console.error('An error has occured');
            }
        }
    );
};
*/

var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(  consumer_key:         '96V5CdsQHJPnurNGHzXgosas5',
  consumer_secret:      'dlleudHXxiifCFFKhMtqHJtf1XVLQwQyQNyqsriYS4B7Uo1byO',
  access_token:         '867029806944309254-BFRDj18cvWMFk1Ff3BEehIlMclEplNk',
  access_token_secret:  '9gMlaleH2fbx29AJ9xI5PbDAQz1enzVmoDm8tkZYKjIy6',);

var params = {
    q: 'Beach',
    count: 250
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {

    var tweets = data.statuses;
    //console.log(tweets.length);

    // DO WHILE TEST
    var i = 0;
    var coors = [];

    do {
        if (tweets[i].coordinates != null) {
            coors.push(tweets[i].coordinates);
            i++;
        } else {
            i++
        }
    }
    while (i < tweets.length);
    //console.log(coors);


    //WRITES THE FILE
    var results = coors.map(JSON.stringify);

    var fs = require('fs');
    fs.writeFile('./msg.js', 'eqfeed_callback({"info":[' + results + ']});',
        function (err) {
            if (err) {
                console.error('An error has occured');
            }
        }
    );
};