import React, { Component } from 'react';
import { gql } from 'apollo-boost';
// import { graphql } from '@apollo/react-hooks';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

class BookList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul className="book-lists">
          <li>book 1</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
