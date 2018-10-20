import React, { Component } from 'react';

let CreateRow = props => {
  return (
    <tr>
      <td>{props.post.title}</td>
      {/* <td>{props.post.content}</td> */}
      {/* <td>{props.post.imageURL}</td> */}
      <td>{props.post.category}</td>
      <td>{props.post.author}</td>
      <td>{props.post.publish}</td>
      <td>
        <div className="button-wrapper">
          <button
            className="btn btn-outline-warning mr-2"
            onClick={() => props.editButtonHandeler(props.post)}
          >
            Edit
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => props.deleteButtonHandeler(props.post)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

class PostsTable extends Component {
  render() {
    return (
      <table className="table table-hover post-table">
        <thead>
          <tr>
            <th>Title</th>
            {/* <th>Content</th> */}
            {/* <th>Image Url</th> */}
            <th>Category</th>
            <th>Author</th>
            <th>Publish On</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.posts.map(post => (
            <CreateRow
              post={post}
              key={post.id}
              editButtonHandeler={this.props.editButtonHandeler}
              deleteButtonHandeler={this.props.deleteButtonHandeler}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default PostsTable;
