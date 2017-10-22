# Blasteroid

A educational website on the theme of asteroids aimed at a children. The site features live data from the NASA Near-Earth Objects API rendered via a HTML5 <canvas> element into an animation of projected asteroids passing the earth for the next 52 weeks, an interactive timeline of Asteroid Impacts and a scrollable collection of Asteroid Facts powered by a local database (MongoDB), and all set in a sleek and exciting front-end context inspired sci-fi/adventure aesthetics to create a compelling user experience.     

##Brief 

The BBC are looking to improve their online offering of educational content by developing some interactive apps that display information in a fun and interesting way. Your task is to make an MVP to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app. You might use an API to bring in content or a database to store facts. The topic of the app is your choice, but here are some suggestions you could look into:  - Interactive timeline, e.g. of the history of computer programming - Interactive map of a historical event - e.g. World War 1, the travels of Christopher Columbus

MVP  - Display some information about a particular topic in an interesting way - Have some user interactivity using event listeners, e.g to move through different sections of content

## Getting Started

* clone the Blasteroid git

### Prerequisites

* Node.js 
* MongoDB
* Text editor
* Terminal 

### Installing

in terminal:
* run 'npm install' 
* run 'npm build' 
* run 'npm start' 
* start mongo - 'mongod' in terminal
* run seed database 'mongo < seeds.js'
in browser:
* open address in brower 'http://localhost:3000/'
* wait a minute on first load while asteroid API data loads

### Controls

Once you're up and running, the canvas element can be control: 
* Return - pauses the animation
* Clicking on asteroids (while paused) - displays information about clicked asteroid
* Left/Right Arrow - alters the speed at which time passes in the animation; the faster days are passing, the more asteroids will be on screen
* 'e' key - easter egg button - changes the asteroids... 

## Built With

* [Node.js] - 
* [Express.js] - Web framework 
* [Webpack] -  Module bundler
* [MongoDB] - Database

## Authors

* **Stuart Bryce** - *Asteroid <canvas> element, caching API data in local storage* - [StuCorp](https://github.com/StuCorp)
* **Eddie Ng** - *HTML5 & CSS3* - [stephenedwardng](https://github.com/stephenedwardng)
* **Chris Burn** - *Database* - [chris-burn](https://github.com/chris-burn)
* **Kieran Marshall** - *API calls* - [kmar141](https://github.com/kmar141)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

