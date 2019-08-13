import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {
  displayBookDetails = () => {
    // eslint-disable-next-line
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          {/* eslint-disable */}
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>Others books by the author</p>
          <ul className="other-books">
            {book.author.books.map(item => {
              return (<li key={item.id}>{item.name}</li>)
            })}
          </ul>
          {/* eslint-enable */}
        </div>
      );
    }
    return <p>No book selected...</p>;
  };

  render() {
    return <div id="book-details">{this.displayBookDetails()}</div>;
  }
}

export default graphql(getBookQuery, {
  options: props => ({
    variables: {
      id: props.bookId,
    },
  }),
})(BookDetails);
