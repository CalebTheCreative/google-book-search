import React, { Component } from "react";
import API from "../utils/API";
import SaveResults from "../components/SaveResults/";
import { Col, Container, Row } from "react-bootstrap";

class Saved extends Component {
    state = {
        saveBooks: []
    };

    componentDidMount() {
        API.getBooks()
        .then(res => this.setState({saveBooks: res.data }, console.log(res.data)))
        .catch(err => console.log(err.response.data))
    }

    loadBooks = () => {
        API.getBooks()
        .then(res => 
            this.setState({saveBooks: res.data}))
    }

    handleDelete = id => {
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err.response.data))
    }

    render() {
        return (
            <Container>
                <Row>
                    <h4>Results: </h4>
                </Row>
                <Row>
                    <Col>
                        {this.state.saveBooks.map(book => (
                            <SaveResults 
                            key={book._id}
                            image={book.image}
                            title={book.title}
                            authors={book.authors.join(", ")}
                            description={book.description}
                            link={book.link}
                            saveBooks={this.state.saveBooks}
                            handleDelete={() => this.handleDelete(book._id)} />
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Saved;