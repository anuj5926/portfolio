import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import form from "../../Assets/Projects/form.png";
import travel from "../../Assets/Projects/travel.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat"
              description="FrontEnd is built in React, backend with Nodejs, use Socket to send real time data to user and mongodb for storing data.In this first user will register yourself and after that he/ she will signup in our app and chat group of user"
              ghLink="https://github.com/anuj5926/chatApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={form}
              isBlog={false}
              title="Form Using MongoDb And Redis"
              description="FrontEnd is designed in React, backend with Nodejs, use Mongodb to store data and for fast data transfer use Redis. In this we have submit name, Language , input and souce code and i will store it an redis show using React."
              ghLink="https://github.com/anuj5926/TUFbackend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travelling Website"
              description="It is a travelling website which provides you with all the required information and facilities with respect to the places you want to visit. This website is created with help of HTML, CSS and bootstrap."
              ghLink="https://github.com/anuj5926/travel"
              demoLink="https://anuj5926.github.io/travel/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
