
import { Meteor } from 'meteor/meteor';

var coors = [];

//The meteor method ensures it will not run until it receives the search term the user defines
Meteor.methods({
    event_trigger1: function(text){
    
    //imports the twit package (twitter api wrapper)
    var Twit = Meteor.npmRequire('twit');

    //istantiating twit
    var T = new Twit({
      consumer_key:         '96V5CdsQHJPnurNGHzXgosas5',
      consumer_secret:      'dlleudHXxiifCFFKhMtqHJtf1XVLQwQyQNyqsriYS4B7Uo1byO',
      access_token:         '867029806944309254-BFRDj18cvWMFk1Ff3BEehIlMclEplNk',
      access_token_secret:  '9gMlaleH2fbx29AJ9xI5PbDAQz1enzVmoDm8tkZYKjIy6',
    });

    //paramaters being passed to function
    var params = {
    q: text,
    count: 250
    };

    //runs the search functions with the defined parameters
    T.get('search/tweets', params, gotData);


    function gotData(err, data, response) {

        var tweets = data.statuses; //retrieves the statuses of each tweet that contains the key word
        //console.log(tweets.length);

        // DO WHILE TEST
        var i = 0;

        //DO while loop that pushes the coordinates of all the tweets that contain the term
        do {
            if (tweets[i].coordinates != null) { //if tweet is not null it gets pushed to coors array
                coors.push(tweets[i].coordinates);
                i++;
            } else { //if null goes to next i val
                i++
            }
        }
        while (i < tweets.length);
        //console.log(coors);
    }
    }
});

    //Another Meteor method so that array could be utilized in client
    Meteor.methods({
        coors_one: function(){
            return coors;
        }
    });