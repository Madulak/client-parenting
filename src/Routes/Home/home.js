import { useEffect } from 'react';
import classes from './home.module.css';
import Container from '../../Container/Container';
import CreatePost from '../../components/UI/CreatePost/CreatePost';
import Posts from '../../components/Posts/Posts';

import * as postActions from '../../redux/actions/postActions';
import { useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.get_posts());
    },[dispatch])

    return (
        <Container>
            <div className={classes.Home}>
                <h3>Create Post</h3>
                <CreatePost />
                <Posts />
            </div>
        </Container>
    );
}

export default Home;