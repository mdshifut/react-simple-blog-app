import React, { Component } from 'react';
import Modal from '../../../common/modal/Modal';
import Form from '../../../common/form/Form';
import axios from 'axios';

class PostForms extends Component {
  state = {
    post: {},
    categories: []
  };

  onChange = event => {
    let post = {
      ...this.state.post,
      [event.target.name]: event.target.value
    };
    this.setState({
      post
    });
  };

  submitHandeler = event => {
    event.preventDefault();
    let post = { ...this.state.post };
    let month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    if (!this.props.editPost) {
      post.publish = month[new Date().getMonth()];
      this.props.submitHandeler(post, 'new');
      return false;
    }

    this.props.submitHandeler(post);
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/categories')
      .then(response => this.setState({ categories: response.data }));

    if (this.props.editPost) {
      this.setState({
        post: { ...this.props.editPost }
      });
    }
  }

  render() {
    return (
      <Modal
        title="Create new post"
        isLarge="true"
        modalController={this.props.modalController}
      >
        <Form
          submitHandeler={this.submitHandeler}
          fields={[
            {
              name: 'title',
              type: 'text',
              label: 'Enter post title',
              placeholder: 'Title',
              value: this.state.post.title,
              required: true,
              onChange: this.onChange
            },
            {
              name: 'category',
              type: 'select',
              label: 'Select post category',

              onChange: this.onChange,
              options: this.state.categories.map(category => {
                let option = {};
                option.value = category;
                option.text = category;
                if (
                  this.props.editPost &&
                  this.props.editPost.category === category
                ) {
                  option.isSelected = true;
                }
                return option;
              })
            },
            {
              name: 'author',
              type: 'text',
              label: 'Enter author name',
              placeholder: 'Author Name',
              value: this.state.post.author,
              required: true,
              onChange: this.onChange
            },

            {
              name: 'imageURL',
              type: 'text',
              label: 'Enter image URL',
              placeholder: 'Image URL',
              value: this.state.post.imageURL,
              required: true,
              onChange: this.onChange
            },
            {
              type: 'textarea',
              name: 'content',
              label: 'Enter you content',
              placeholder: 'Enter your name',
              value: this.state.post.content,
              required: true,
              onChange: this.onChange
            }
          ]}
        >
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </Form>
      </Modal>
    );
  }
}

export default PostForms;
