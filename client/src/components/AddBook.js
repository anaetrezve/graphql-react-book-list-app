import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from '../queries/queries';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line
    this.props.addBook({
      variables: this.state,
      refetchQueries: [{ query: getBooksQuery }],
    });
    this.setState({ name: '', genre: '', authorId: '' });
  };

  displayAuthors() {
    // eslint-disable-next-line
    const { authors, loading } = this.props.getAuthors;

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
    const { name, genre, authorId } = this.state;
    return (
      <form id="add-book" onSubmit={this.handleSubmit}>
        <div className="field">
          {/* eslint-disable-next-line */}
          <label htmlFor="book-name">Book name:</label>
          <input
            id="book-name"
            type="text"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          {/* eslint-disable-next-line */}
          <label htmlFor="genre">Genre:</label>
          <input
            id="genre"
            type="text"
            value={genre}
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          {/* eslint-disable-next-line */}
          <label htmlFor="author">Author:</label>
          <select
            id="author"
            value={authorId}
            onChange={e => this.setState({ authorId: e.target.value })}
          >
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button type="submit">+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthors' }),
  graphql(addBookMutation, { name: 'addBook' })
)(AddBook);
