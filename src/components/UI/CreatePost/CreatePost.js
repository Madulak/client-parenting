import { useState } from 'react';
import classes from './CreatePost.module.css';
import { ImAttachment } from 'react-icons/im';
import { FiCamera } from 'react-icons/fi';

import * as postActions from '../../../redux/actions/postActions';
import { useDispatch } from 'react-redux';

const CreatePost = () => {

    const dispatch = useDispatch();
    const [postText, setPostText] = useState('');

    const postHandler = () => {
        if (postText.length > 3) {
            const postData = {
                postText: postText
            }
            dispatch(postActions.create_post(postData));
            setPostText('');
        }
    }
    

    return (
        <div className={classes.CreatePost}>
            <div className={classes.TextAreaContainer}>
                <textarea onChange={e => setPostText(e.target.value)} value={postText} placeholder='any parenting advise...'></textarea>
            </div>
            <div className={classes.PostContainer}>
                <div className={classes.Icons}>
                    <ImAttachment className={classes.Icon} />
                    <FiCamera className={classes.Icon} />
                </div>
                <div onClick={postHandler} className={classes.Post}>
                    <span>Post</span>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;