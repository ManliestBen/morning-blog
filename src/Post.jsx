import React from 'react';
import PropTypes from 'prop-types';

const Post = ({title, author, user, content, handleDelete, id}) => {
    return (
        <li key={id} className='post'>
          <h3 className='postTitles'>{title}</h3>
          <p>{content}</p>
          <h6>{user}</h6>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
    )
}


export default Post;

Post.propTypes = {
    title: PropTypes.string,
    user: PropTypes.string,
    content: PropTypes.string,
    handleDelete: PropTypes.func,
    id: PropTypes.string
}


