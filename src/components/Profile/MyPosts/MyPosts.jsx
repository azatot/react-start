import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {
    let state = props.profilePage;


    let onAddPost = (e) => {
        props.addPost();
    };
    let onPostChange = (e) => {
        let newText = e.target.value;
        props.updateNewPostText(newText);
    };



    let posts = state.postsData.map(p => (
            <Post
                id={p.id}
                likes={p.likes}
                text={p.postMessage}
                addLike={props.addLike}
            />
        )
    );
    return (
        <div className={classes.my_posts}>
            <h3>WALL:</h3>
            <div className={classes.post_add}>

                <textarea
                    onChange={onPostChange}
                    value={state.changeAblePostText}
                    // ref={newPostElement}
                />

                <input
                    value="SEND"
                    type="submit"
                    onClick={onAddPost}
                />
            </div>

            {posts}

        </div>
    )
};


export default MyPosts;