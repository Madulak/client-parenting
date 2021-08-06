import Avatar from 'react-avatar';
import classes from './Post.module.css';

const Post = ({username, message, postText}) => {

    return (
        <div className={classes.Post}>
            <div className={classes.UserContainer}>
                <h3>Username</h3>
                <h6>Date</h6>
            </div>

            <h2>Post message</h2>
            <div className={classes.AvatarContainer}>
                <Avatar round={true} size={40} name={username} />
            </div>
        </div>
    );
}

export default Post;