/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    
    // Get google books from search
    searchGBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },
    
    // Get all books
    getBooks: function() {
        return axios.get("/api/books");
    },

    // Gets book w/ given id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    // Deletes book w/ given id
    deleteBook: function(id) {
        return axios.delete("/api/books" + id);
    },

    // Saves book to database
    saveBook: function(saveBooks) {
        return axios.post("/api/books", saveBooks);
    }

}