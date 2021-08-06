import classes from './BlockA.module.css';
import Linked from '../UI/Link/Link';
import { SiFeedly } from 'react-icons/si';

const BlockA = () => {

    return (
        <div className={classes.BlockA}>
            <Linked icon={<SiFeedly size={20} />}  name={'feed'} />
        </div>
    );
}

export default BlockA;