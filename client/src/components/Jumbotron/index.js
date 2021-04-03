import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid d-flex align-items-center">
            <Container>
                <h1 className="display-4 text-danger"><b>(React) Google Books Search</b></h1>
                <h4 className="text-primary"><b>Search for and Save Books of Interest</b></h4>
            </Container>
        </div>
    )
}

export default Jumbotron;