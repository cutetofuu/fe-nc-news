# NC News App

Link to the deployed app: https://cutetofuu-nc-news.netlify.app/

NC News is a web application that simulates a news/article website. It was built using JavaScript, React.js, Node.js, HTML and CSS.

## How does the app work?

### Home (landing page)
From this page, users can:

- view a collection of articles
- up or down vote articles
- sort the articles using the options in the dropdown list
- sort the articles in ascending/descending order using the up and down arrows
- click on a specific article, which links to a new page about that article

### Page for a specific article
From here, users can:

- read the article
- upvote or downvote the article
- post a new comment about the article
- delete their own comments only

### Topics
This page lists all of the available topics. When the user clicks on a topic, it will render a new page with a collection of articles related to the selected topic.

## Link to the back end repo

https://github.com/cutetofuu/nc-news

## Minimum requirements

```
Node: v19.1.0
```

## How to run this project locally
1. Fork this repo.
2. Clone the forked repo by pasting this command in the terminal:
```
git clone https://github.com/[YOUR USERNAME HERE]/fe-nc-news.git
```
3. Then type `cd fe-nc-news` to move into the repo folder.
4. And lastly type `code .` to open the repo in Visual Studio Code.
5. Within Visual Studio, run the following scripts: 
  - `npm install` - installs all the dependencies.
  - `npm start` - opens the app locally in the browser
