import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

import BookDetails from './BookDetails';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  displayBooks() {
    // eslint-disable-next-line
    const { loading, books } = this.props.data;
    if (loading) {
      return <h3>Loding books...</h3>;
    }
    // eslint-disable-next-line
    return books.map(book => <li onClick={e => this.setState({id: book.id})} key={book.id}>{book.name}</li>);
  }

  render() {
    const { id } = this.state;
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={id} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
