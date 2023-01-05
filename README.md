# Assignment 14: Tech Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project is a fullstack 'Tech Blog' web application leveraging the MVC paradigm for the architectural structure. 

The application (Tech Blog) allows a developer the abitlity to both view and post topics on the latest software development skills, strategies, and insight. 

Users are required to subscribe to the blog where they can then proceed to add their own posts with the ability to either modify or delete as they see fit.

The application uses: `Node.js`, `MySQL2`, `Express.js`, `Sequelize`, `Handlebars`, and `Bootswatch` to implement fullstack functionality.

Here is a snapshot of the Tech Blog homepage:
    <br />
![Tech Blog](TechBlogSnapshot.png)

 ## Challenges

This was a fun however, challenging assignment! Lot's of moving pieces to figure out with the different routes and models required for the application. Completing project 2 before this assignment proved useful since my project was architected using the MVC paradigm...this definitely provided the foundation to tackle this assignment. 

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)

## Installation

The application is deployed at: [TechBlog](https://assignment14-techblog.herokuapp.com/)

To run your own version of the app do the following:
1. Clone this git repo to your computer
2. Create a MySQL database in your `localhost` using the data in the `db` directory (`schema.sql`)
3. Rename `.env.EXAMPLE` as `.env` and add your DB credentials 
4. Inside a terminal run `npm install` to get all the necessary dependencies


## Credits

* Samdemarco

## License

MIT License

## Tests

N/A
