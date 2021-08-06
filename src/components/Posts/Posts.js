import { useEffect } from 'react';
import Post from '../UI/Post/Post';
import classes from './Posts.module.css';



const Posts = () => {

    const arr = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    // useEffect(() => {

    // },[])

    return (
        <div className={classes.Posts}>
            {arr.map(el => (
                <Post username={el} key={el} />
            ))}
            {/* <Post /> */}
        </div>
    );
}

export default Posts;