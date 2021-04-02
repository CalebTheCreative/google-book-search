import React, { Component } from "react";
import API from "../utils/API";
import { Col, Container, Row } from "react-bootstrap";
import GBookSearch from "../components/GBookSearch";
import SearchResults from "../components/SearchResults";


class SearchForBooks extends Component {
    state = {
        search: "",
        books: []
    };

    searchBooks = query => {
        API.searchBooks(query)
        .then(res =>
            this.setState(
                {
                    books: res.data.items,
                    search: ""
                },
                console.log(res.data.items)
            )
        ).catch(err => console.log(err.response.data));
    };

    handleInputChange = evt => {
        const value = evt.target.value;
        const name = evt.target.name;
        this.setState({[name]: value});
    };

    handleFormSubmit = evt => {
        evt.preventDefault();
        this.searchBooks(this.state.search);
    };

    handleSave = saveBooks => {
        API.saveBook(saveBooks)
            .then(res => alert("Saved book to database!"))
            .catch(err => console.log(err.response.data));
    };

    render() {
        return (
            <Container fluid>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <GBookSearch
                            value={this.state.search}
                            handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <h4>Results: </h4>
                    </Row>
                    <Row>
                        {this.state.books.map(book => (
                            <SearchResults
                                key={book.id}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors.join(", ")}
                                description={book.volumeInfo.description}
                                link={book.volumeInfo.infoLink}
                                handleSave={() => this.handleSave({
                                    title: book.volumeInfo.title,
                                    image: book.volumeInfo.imageLinks.thumbnail,
                                    authors: book.volumeInfo.authors,
                                    description: book.volumeInfo.description,
                                    link: book.volumeInfo.infoLink
                                })}
                            />
                        ))}
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default SearchForBooks;