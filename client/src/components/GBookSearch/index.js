import React from "react";

const GBookSearch = props => {
    return (
        <form>
            <div className="form-group">
                <label className="GoogleBookSearchLbl"><h3>Search For Google Books</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchGoogleBooks"
                    placeholder="Please Enter a Title"
                    onChange={props.handleInputChange} />
            </div>
            <button type="submit" className="submitBtn btn-danger" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

export default GBookSearch;