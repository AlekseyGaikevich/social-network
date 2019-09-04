import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg' />
      {props.message}
      <div>
        <span>Likes {props.likesCount}</span>
      </div>
    </div>
  )

}

export default Post; 