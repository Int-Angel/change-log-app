# Getting Started with Create React App

This is a RESTful API for a Change Log App. This app allows a product manager or engineer to post projects/products updates for the team to see. This helps the team to keep track of the timelines of each one of them and show the stakeholders the progress made.<br />

Back-End: [ChangeLogAPI](https://github.com/Int-Angel/ChangeLogAppAPI)<br />

## Features

- User can sign up, sign in and sign out<br />
- The user can create, read, udate and delete:<br />
  - Projects<br />
  - Updates<br />
  - Points<br />
- The API supports filters for the projects:<br />
  - filter by creator<br />
  - filter by name of the project<br />
  - filter by publication date (you can filter by a range of dates or a specific date)<br />
- The API supports pagination for all get methods:<br />
  - Just need to specify limit and offset params in the query<br />
- All end-points are protected with jwt authentication token, user should sign in first to get a auth token to be able to use all end-points<br />
- An unauthenticated is not able to see projects or do modfications<br />
- Every user is able to create, read, update and delete projects<br />
- The API retursn data in JSON format<br />

## Installation

1. Install [ChangeLogAPI](https://github.com/Int-Angel/ChangeLogAppAPI)<br />
2. Clone this repo<br />
3. Update proxy inside package.json
4. run "npm install"<br />
5. run "npm start"<br />

## Video

Click to reproduce:

[![Watch the video](https://i.imgur.com/K5lpj7s.png)](https://youtu.be/YvhMqauyS3s)

## Images

![SignIn](https://i.imgur.com/L2z7MW6.png)
![SignUp](https://i.imgur.com/RiBa2r1.png)
![Home](https://i.imgur.com/K5lpj7s.png)
![Search](https://i.imgur.com/y2gN2kN.png)
![SignOut](https://i.imgur.com/ww4C3uy.png)
![Create Project](https://i.imgur.com/69PKLxx.png)
![Create Update](https://i.imgur.com/bZnhBJh.png)
![Edit](https://i.imgur.com/5gYYP67.png)
