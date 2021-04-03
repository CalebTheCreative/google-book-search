import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";

const SearchResults = props => {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Row className="searchRes" id={props.title + "Section"}>
                        <Col xs={3}>
                            <Card.Img className="bImg ml-1 mt-3" src={props.image} alt={props.title} />
                        </Col>
                        <Col>
                            <h4 className="bookTtl mt-3">{props.title}</h4>
                            <h5 className="bAthr">{props.authors}</h5>
                            <p className="bDesc">{props.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3} className="justify-content-center text-center">
                            <Button className="save mt-2 mx-1" id={props.id} onClick={props.handleSave}>
                                <b>Save</b>
                            </Button>
                            <Button variant="secondary" href={props.link} target="_blank" rel="noopener noreferrer" className="view mt-2 mx-1">
                                <b>View</b>
                            </Button>
                        </Col>
                        
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SearchResults;