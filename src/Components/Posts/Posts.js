import React from 'react'
import {Card, Button} from "reactstrap"
import './Posts.css'

const Posts = () => {
    return (
        <div>
            <Card className="card">
                <a href="https://www.whatsenroute.org/" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}><p className="title">Enroute</p></a>
                <p className="content">
                    I developed a website that uses Yelp’s API and Google Map’s API to display point of interests between to addresses. The server was created using Django to handle https requests from the client. 
                    While the website was developed with ReactJS using Bootstrap and Material-UI packages to create a single page website that is also mobile friendly. I deployed the website using AWS Amplify and deployed the server in AWS EC2.
                </p>
                <Button active className="button" onClick = {() => {window.open("https://github.com/along002/wip", '_blank')}}> Click for Source Code </Button>
            </Card>
            <Card className="card">
                <p className="normalTitle">Image-Share</p>
                <p className="content">
                    I built a web application that where users fill out a form to upload photos with a caption. The photos are then displayed to all other users whrere users can like, edit, or delete posts. I stored the users' posts
                    in a database using MongoDB. To communicate between the server and the client and I created a RESTful API with ExpressJS. NodeJS was used when developing the server as a runtime environment. I created 
                    the display with React to create a single page website.
                </p>
                <Button active className="button" onClick = {() => {window.open("https://github.com/ph-long/Image-Share", '_blank')}}> Click for Source Code </Button>
            </Card>
            <Card className="card">
                <p className="normalTitle">Coronavirus Tracker</p>
                <p className="content">
                    I built a web application that charts out Covid-19 cases, cases of recovery, and the death cases related to Covid-19. Users are able to check Covid-19 statistics internationally, or within a specific country.
                    I used an open source Covid API to get the statistics. Using ReactJS the client I created, visualizes graphs and charts for Covid-19 statistics.
                </p>
                <Button active className="button" onClick = {() => {window.open("https://github.com/ph-long/Coronavirus-Tracker", '_blank')}}> Click for Source Code </Button>
            </Card>
            <Card className="card">
                <p className="normalTitle">Chat System</p>
                <p className="content">
                    I worked in a team to develop a chatting service in C, where users can either directly message one another or users can join rooms to communicate. The server was
                    created with multithreading in mind. As a team we used Github to employ version control while developing the chat system.
                </p>
                <Button active className="button" onClick = {() => {window.open("https://github.com/ph-long/Petr-Chat", '_blank')}}> Click for Source Code </Button>
            </Card>
        </div>
    )
};

export default Posts;