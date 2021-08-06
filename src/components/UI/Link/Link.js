import { Link } from 'react-router-dom';
import classes from './Link.module.css';

const Linked = ({icon, name}) => {

    return (
        <Link to={name === 'feed' ? '/' : '/'+name} className={classes.Link}>
            <div>

            </div>
            <div>
                <h3>{name}</h3>
            </div>

        </Link>
    );
}

export default Linked;