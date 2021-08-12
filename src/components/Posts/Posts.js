import Post from '../UI/Post/Post';
import classes from './Posts.module.css';

import { useSelector, useDispatch } from 'react-redux';
import * as postActions from '../../redux/actions/postActions';

const Posts = () => {

    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    const postDelete = (id) => {
        
        dispatch(postActions.post_delete(id));
    }

    return (
        <div className={classes.Posts}>
            {posts.map(el => (
                <Post 
                    username={el.postCreator.username} 
                    postText={el.postText} 
                    key={el._id} 
                    postCreator={el.postCreator._id}
                    date={el.createdAt}
                    deletes={() => postDelete(el.postCreator._id)}
                />
            ))}
            {/* <Post /> */}
        </div>
    );
}

export default Posts;