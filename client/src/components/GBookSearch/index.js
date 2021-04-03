import React from "react";
import { Button } from "react-bootstrap";

const GBookSearch = props => {
    return (
        <form>
            <div className="form-group">
                <label className="GoogleBookSearchLbl"><h3>Search For Google Books</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.value}
                    type="text"
                    name="search"
                    placeholder="Please Enter a Title"
                    onChange={props.handleInputChange} 
                    id="search"
                />
                    
            </div>
            <Button variant="danger" type="submit" className="submitBtn btn-danger" onClick={props.handleFormSubmit}>
                <b>Submit</b>
            </Button>
            <br />
        </form>
    )
}

export default GBookSearch;