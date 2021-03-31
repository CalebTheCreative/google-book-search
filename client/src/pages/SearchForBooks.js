import React, { Component } from "react";
import API from "../utils/API";
import { Col, Container, Row } from "react-bootstrap";
import GBookSearch from "../components/GBookSearch";
import SearchResults from "../components/SearchResults";


class SearchForBooks extends Component {
    state = {
        search: "",
        books: [],
        errors: ""
    };

    handleInputChange = evt => {
        this.setState({ search: evt.target.value })
    }

    handleFormSubmit = evt => {
        evt.preventDefault();
        API.searchGBooks(this.state.search)
        .then(res => {
            if (res.data.items === "error") {
                throw new Error(res.data.items);
            } else {
                let searchRes = res.data.items;

                searchRes = searchRes.map(result => {
                    result = {
                        key: result.id,
                        id: result.id,
                        title: result.volumeInfo.title,
                        authors: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        link: result.volumeInfo.infoLink
                    }
                    return result;
                })
                this.setState({ books: searchRes, search: ""})
            }
        })
        .catch(err => this.setState({ error: err.items }));
    };

    handleSave = evt => {
        evt.preventDefault();
        let saveBooks = this.state.books.filter(book => book.id === evt.target.id)
        API.saveBook(saveBooks)
        .then(console.log(saveBooks))
        .catch(err => console.log(err))
    };

    render() {
        return (
            <Container fluid>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <GBookSearch
                            handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <SearchResults books={this.state.books} handleSave={this.handleSave} />
                </Container>
            </Container>
        )
    }
}

export default SearchForBooks;