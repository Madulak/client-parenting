import classes from './home.module.css';
import Container from '../../Container/Container';

const home = () => {

    return (
        <Container>
            <div className={classes.Home}>
                <h1>Home</h1>
            </div>
        </Container>
    );
}

export default home;