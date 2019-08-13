import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

class BookList extends Component {
  displayBooks() {
    // eslint-disable-next-line
    const { loading, books } = this.props.data;
    if (loading) {
      return <h3>Loding books...</h3>;
    }
    // eslint-disable-next-line
    return books.map(book => <li key={book.id}>{book.name}</li>);
  }

  render() {
    return (
      <div>
        <ul className="book-lists">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
