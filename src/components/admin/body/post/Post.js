import React, { Component } from 'react';
import PostsTable from './PostsTable';
import './Post.scss';
import PostForms from './PostForms';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);

    this.dropdownMenu = React.createRef();
    this.inputGroup = React.createRef();
    this.state = {
      dropdownOpen: false,
      modalIsOpen: false,
      posts: [],
      editPost: null
    };
  }

  componentDidMount = () => {
    this.getPost();
  };

  dropdownHandeller = e => {
    if (this.state.dropdownOpen) {
      this.dropdownMenu.current.classList.remove('show');
      this.inputGroup.current.classList.remove('show');
      e.target.blur();
    } else {
      this.dropdownMenu.current.classList.add('show');
      this.inputGroup.current.classList.add('show');
    }
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  modalController = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  };

  getPost = () => {
    axios
      .get('http://localhost:3000/posts')
      .then(response => this.setState({ posts: response.data }));
  };

  submitHandeler = (post, type) => {
    if (type === 'new') {
      axios.post('http://localhost:3000/posts', post).then(response => {
        this.modalController();
        this.setState({
          posts: [...this.state.posts, response.data]
        });
      });
    } else {
      axios
        .put(`http://localhost:3000/posts/${post.id}`, post)
        .then(response => {
          this.modalController();
          this.setState({
            posts: this.state.posts.map(oldPost => {
              if (oldPost.id === post.id) {
                return post;
              } else {
                return oldPost;
              }
            })
          });
        });
    }
  };

  editButtonHandeler = post => {
    this.setState({
      editPost: post,
      modalIsOpen: !this.state.modalIsOpen
    });
  };

  deleteButtonHandeler = post => {
    axios.delete(`http://localhost:3000/posts/${post.id}`).then(response => {
      if (response.status === 200) {
        this.setState({
          posts: this.state.posts.filter(oldPost => oldPost !== post)
        });
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.modalIsOpen && (
          <PostForms
            modalController={this.modalController}
            submitHandeler={this.submitHandeler}
            editPost={this.state.editPost}
          />
        )}
        <div className="post-controller">
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <div className="input-group-prepend" ref={this.inputGroup}>
                  <button
                    className="btn btn-outline-secondary dropdown-toggle post-controller__btn"
                    onClick={this.dropdownHandeller}
                  >
                    Search by
                  </button>
                  <div className="dropdown-menu" ref={this.dropdownMenu}>
                    <button className="dropdown-item">Category</button>
                    <button className="dropdown-item">Title</button>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control  post-controller__input"
                  placeholder="Enter your search text"
                  aria-label="Text input with dropdown button"
                />
              </div>
            </div>
            <div className="col-md-6 text-right">
              <button
                className="btn btn-outline-secondary  post-controller__btn"
                onClick={this.modalController}
              >
                Create new post
              </button>
            </div>
          </div>
        </div>

        <PostsTable
          posts={this.state.posts}
          editButtonHandeler={this.editButtonHandeler}
          deleteButtonHandeler={this.deleteButtonHandeler}
        />
      </React.Fragment>
    );
  }
}

export default Post;
