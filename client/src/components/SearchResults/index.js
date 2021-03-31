import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const SearchResults = props => {
    return (
        <Container>
            <h4>Results: </h4>
            {props.books.map(book => {
                return (
                    <div>
                        <Card>
                            <Card.Body>
                                
                                <Row className="searchRes" id={book.title + "Section"} key={book.id}>
                                    <Col>
                                        <Card.Img src={book.image} alt={book.title} />
                                    </Col>
                                    <Col>
                                        <h4 className="bookTtl">{book.title}</h4>
                                        <h5 className="bAthr">{book.author}</h5>
                                        <p className="bDesc">{book.description}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button className="save mt-3" id={book.id} onClick={(evt) => props.handleSave(evt)}>
                                        Save This Book
                                    </Button>
                                    <br />
                                    <Button href={book.link} target="_blank" rel="noopener noreferrer" className="view mt-3">
                                        View This Book
                                    </Button>
                                </Row>

                            </Card.Body>
                        </Card>
                    </div>
                );
            })}
        </Container>
    )
}

export default SearchResults;