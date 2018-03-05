# Hotel Filter

Hotel search results with basic sort and facility filter functions

# Setup

### Check that node is installed

```node -v```

Install [here](https://nodejs.org/en/download/package-manager/)

### Check npm is installed

```npm -v```

Install [here](https://www.npmjs.com/get-npm)

### Check git is installed

```git --version```

Install [here](https://git-scm.com/)

# To run:
In order to run this project you will need to clone onto your local machine and install all dependencies.

Navigate to your favoured directory and clone the repository using this link: 

```https://github.com/barks1212/laterooms-hotel-filter.git``

Change into the project directory with:

```cd laterooms-hotel-filter```

Install all project dependancies using:

```npm install``

To run locally, navigate to the directory in a terminal window and run:

```npm start```

The program will run on 
http://localhost:3000

# Testing:

Testing has been programmed using snapshots(Jest) and Enzyme

To test:

```npm test```

# Improvements

Given the time I would have liked to have fleshed out the data with comprehensive descriptions and reviews as well as multiple images. The idea being that I could then create an overlay component which renders upon the user clicking a specific hotel which would ahve more detailed information about that hotel.

A clear all function to reset filters

Link up to google maps API and render the location of each hotel with markers

This was my first experience with testing React components, given more time I would have explored this area more deeply.

# This app was developed Mobile First and is intended for mobile use