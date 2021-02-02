import tussle from '../../images/projects/TussleGif.gif';
import whattodo from '../../images/projects/whattodo.gif';
import Rare from '../../images/projects/Rare.gif'
import holidayroad from '../../images/projects/holidayroad.gif'

const projectData = [
  {
    id:1,
    title: "What To Do?",
    description: "What To Do, a full-stack application built with a React client and Python/Django server. This application is a task prioritizer based on the Eisenhower Matrix. The app features complex filtering on the backend for cleaner implementation on the front end. The app is styled using React-Bootstrap for consistent styling and responsiveness. It is currently deployed with the client hosted on Heroku and the server on PythonAnywhere.",
    link: "https://importantvsurgentmatrix.herokuapp.com/",
    image:whattodo,
    clientRepo: 'https://github.com/Michaelr-Tyler/whattodo-client',
    serverRepo: 'https://github.com/Michaelr-Tyler/whattodo-server'
  }, {
    id:2,
    title: "Rare",
    description: "Rare, a 3 sprint agile-SCRUM group project. This full-stack publishing app with user roles and complex data relationships was initially built using a Python+SQL server, then replaced that server using Django. Developed a system on the server to track subscriptions, as well as built a post form with create and update capabilities on both ends. After each sprint, we held retrospective to learn from our experience and determine our plan of action for the next sprint. This was a great way to learn teamwork in an agile environment.",
    clientRepo: 'https://github.com/NSS-Day-Cohort-42/rare-news-hounds',
    serverRepo: 'https://github.com/NSS-Day-Cohort-42/news_hounds_django_server',
    image: Rare
  }, {
    id:3,
    title: "Tussle",
    description: 'Front end capstone, Tussle, a freelance contracting app for independent wrestling organizations. This app was built with React, styled with CSS, and featured a JSON server for data management. This project helped show my ability to wireframe and design an ERD with many to many relationships while creating an app with full CRUD functionality.',
    clientRepo: 'https://github.com/Michaelr-Tyler/Tussle.',
    image: tussle
  }, {
    id:4,
    title: "Holiday Road",
    description: "Holiday Road, a group learning project, finished in a 5-day agile-SCRUM sprint. Built a 5-day weather forecast component in Javascript. This project demonstrates event flow, asynchronous functions, external APIs, and user profiles.",
    clientRepo: 'https://github.com/NSS-Day-Cohort-42/holiday-road-elegant-eagles',
    image:holidayroad
  }, 
  // {
  //   id:5,
  //   title: "This site",
  //   description: "This site was built with a React client and uses Sanity content platform to handle my blog data. It features Spring React Library for animations and Responsive CSS.",
  //   link: 'www.github.com',
  //   image:tussle
  // } 
]

export const copyProjectData = projectData.slice()