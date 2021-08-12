import Avatar from 'react-avatar';
import classes from './Post.module.css';

import { useSelector } from 'react-redux';

const Post = ({username, message, postText, postCreator, date, deletes}) => {

    const id = useSelector(state => state.auth.user._id);
    console.log('[ID] ', id);
    console.log('[POST CREATOR] ', postCreator);

    return (
        <div className={classes.Post}>
            <div className={classes.UserContainer}>
                <h3>{username && username}</h3>
                <h6>{date}</h6>
            </div>

            <h2>{postText && postText}</h2>
            <div className={classes.AvatarContainer}>
                <Avatar round={true} size={40} name={username} />
            </div>
            {postCreator === id && <button onClick={deletes}>Delete</button>}
        </div>
    );
}

export default Post;