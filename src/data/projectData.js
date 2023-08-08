var rotatingWorkoutImage = require('./images/rotating-workout-app.png');

exports.projectData = [
    {
        "name": "Rotating Workout App",
        "pic": rotatingWorkoutImage,
        "link": "http://ec2-3-12-153-228.us-east-2.compute.amazonaws.com:3000/",
        "github": "https://github.com/TomSmaj/rotating-workout-app",
        "description": ["SPA consisting of an exercise feed that a user can add to and cycle through to keep track of what exercises have been completed and know which exercises to do next ", "Individual exercises are stored in database and displayed in a list from which their order can be changed, or, set to done, which cycles to the next exercise to perform", "Exercises can be added or removed from the feed, as well as details for any exercise can be edited", "Hosted on AWS utilizing EC2 and RDS so as to be accessible through a web browser", "Built for personal use at the gym"]
    }
]