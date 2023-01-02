# Assignment 14: Tech Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

JobSeeker is a job board that by using the [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch/details) in the backend provides a list of jobs posted across the web in real-time from many major and minor job sites.

JobSeeker is a subscription based service. Once the user creates an account and inputs their profile information they can browse through the available jobs and apply to those of interest in one click.

The application uses: `Node.js`, `MySQL2`, `Express.js`, `Sequelize`, and `Handlebars` to implement the full-stack functionality.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)

## Installation

The application is deployed at: [JobSeeker](https://jobseeker-proj2.herokuapp.com/job_board)

To run your own version of the app do the following:
1. Clone this git repo to your computer
2. Create a MySQL database in your `localhost` using the data in the `db` directory (`schema.sql`)
3. Rename `.env.EXAMPLE` as `.env` and add your DB credentials 
4. Inside a terminal run `npm install` to get all the necessary dependencies
5. Next run `node seeds/seed.js` to initialize the database tables. 

## Usage

To start the app type: `node server.js`

Click on the image below to watch a video of the JobSeeker site in action
[![Video of the JobSeeker in action](./public/assets/JobSeeker_black_font.png)](https://drive.google.com/file/d/1AjDFP5xnjXENPVc_oMNYDTSnb3Ox2XgO/view?usp=share_link)

## Credits

* Samdemarco
* mbenitez1607
* ghideluw
* NebiatHNana

## License

MIT License

## Tests

N/A
