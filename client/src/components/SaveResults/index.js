import React from "react";
import { Card, Container, Button, Col, Row } from "react-bootstrap";
import "./style.css";

const SaveResults = props => {
    return (
        <Container>
            <Container>
                <Card>
                    <Card.Body>
                        <Row className="searchRes" id={props.title + "Section"}>
                            <Col xs={3}>
                                <Card.Img src={props.image} alt={props.title} />
                            </Col>
                            <Col>
                                <h4 className="bookTtl">{props.title}</h4>
                                <h5 className="bAthr">{props.authors}</h5>
                                <p className="bDesc">{props.description}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3} className="justify-content-center text-center">
                                <Button className="save mt-2 mx-1" onClick={props.handleDelete}>
                                    <b>Remove</b>
                                </Button>
                                <Button href={props.link} variant="secondary" target="_blank" rel="noopener noreferrer" className="view mt-2 mx-1">
                                    <b>View</b>
                                </Button>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}

export default SaveResults;