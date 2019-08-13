import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
  displayAuthors() {
    // eslint-disable-next-line
    const { authors, loading } = this.props.data;

    if (loading) {
      return <option>Loading authors...</option>;
    }
    // eslint-disable-next-line
    return authors.map(author => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  }

  render() {
    return (
      <form id="add-book">
        <div className="field">
          {/* eslint-disable-next-line */}
          <label htmlFor="book-name">Book name:</label>
          <input id="book-name" type="text" />
        </div>
        <div className="field">
          {/* eslint-disable-next-line */}
          <label htmlFor="genre">Genre:</label>
          <input id="genre" type="text" />
        </div>
        <div className="field">
          {/* eslint-disable-next-line */}
          <label htmlFor="author">Author:</label>
          <select id="author">
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button type="button">+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
