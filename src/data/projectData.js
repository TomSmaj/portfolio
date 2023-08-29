var rotatingWorkoutImage = require('./images/rotating-workout-app.png');
var giftdImage = require('./images/giftd.gif');
var reelTalkImage = require('./images/ReelTalk.gif');

exports.projectData = [
    {
        "name": "Rotating Workout App",
        "shortname": "rotating",
        "pic": rotatingWorkoutImage,
        "link": "http://ec2-3-135-194-20.us-east-2.compute.amazonaws.com:3000/",
        "github": "https://github.com/TomSmaj/rotating-workout-app",
        "description": ["SPA consisting of an exercise feed that a user can add to and cycle through to keep track of what exercises have been completed and know which exercises to do next ", "Individual exercises are stored in database and displayed in a list from which their order can be changed, or, set to done, which cycles to the next exercise to perform", "Exercises can be added or removed from the feed, as well as details for any exercise can be edited", "Hosted on AWS utilizing EC2 and RDS so as to be accessible through a web browser", "Built for personal use at the gym"],
        "languages": "React, JavaScript, HTML, MySQL",
        "topmargin":"0%"
    },
    {
        "name": "Giftd",
        "shortname": "giftd",
        "pic": giftdImage,
        "link": "https://github.com/gold-reel-media/giftd",
        "github": "https://github.com/gold-reel-media/giftd",
        "description": ["Full stack web program, express server with API communication to React component front end", "Users create accounts that they then create wishlists for, which are lists that contain items that they would like purchased for themselves", "Users then signup to buy gifts for other users without the intended recipient of that gift knowing who is getting it for them"],
        "languages": "React, JavaScript, HTML, MySQL",
        "topmargin":"45%"
    },
    {
        "name": "Reel Talk",
        "shortname": "reel",
        "pic": reelTalkImage,
        "link": "https://github.com/TomSmaj/movie-project",
        "github": "https://github.com/TomSmaj/movie-project",        
        "description": ["Full stack program, express server with API communication to Handlebars generated front end","Users create accounts that they then use to participate or begin movie discussion in various, topic focused discussion groups","Users are able to make posts in existing discussions and groups as well as create new ones."],
        "languages": "JavaScript, HTML, MySQL",
        "topmargin":"15%"
    }
]