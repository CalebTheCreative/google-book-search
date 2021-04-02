import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const SearchResults = props => {
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Row className="searchRes" id={props.title + "Section"}>
                        <Col>
                            <Card.Img src={props.image} alt={props.title} />
                        </Col>
                        <Col>
                            <h4 className="bookTtl">{props.title}</h4>
                            <h5 className="bAthr">{props.authors}</h5>
                            <p className="bDesc">{props.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Button className="save mt-3" id={props.id} onClick={props.handleSave}>
                            Save This Book
                        </Button>
                        <Button href={props.link} target="_blank" rel="noopener noreferrer" className="view mt-3">
                            View This Book
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SearchResults;