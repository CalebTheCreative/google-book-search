import React, { Component } from "react";
import API from "../utils/API";
import SaveResults from "../components/SaveResults/";

class Saved extends Component {
    state = {
        saveBooks: []
    };

    componentDidMount() {
        API.getBooks()
        .then(res => this.setState({saveBooks: res.data }))
        .catch(err => console.log(err))
    }

    handleDelete = id => {
        API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }

    render() {
        return (
            <SaveResults saveBooks={this.state.saveBooks} handleDelete={this.handleDelete} />
        )
    }
}

export default Saved;