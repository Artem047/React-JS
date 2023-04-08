import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/564x/3d/68/54/3d6854e69b2efc6fb44fee0252ab4da4.jpg' />
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;