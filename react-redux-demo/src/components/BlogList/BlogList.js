import React, { Component } from 'react';
import { connect } from 'react-redux';

import BlogItem from './BlogItem';
import {getBlogList from './../../services'
class BlogList extends Component {
  componentDidMount = () => {
    getBlogList().then(res => console.log(res))
  }
  render() {

    let {list, isLoading} = this.props;

    return (
      isLoading
      ?
      <div>isLoading...</div>
      :
      <ul>
        {
          list.map(blog => {
            return <BlogItem key={blog.id} {...blog} />
          })
        }
      </ul>
    )
  }
}
const mapState = state => ({list: state.blog.list, isLoading: state.blog.isLoading})

export default connect(mapState)(BlogList);
