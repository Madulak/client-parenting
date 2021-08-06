// import { Avatar, Input, InputAdornment } from '@material-ui/core';
import Avatar from 'react-avatar';
import classes from './Toolbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

import { useSelector } from 'react-redux';

const Toolbar = () => {

    const username = useSelector(state => state.auth.user.username);
    console.log('[username] ', username);

    return (
        <div className={classes.Toolbar}>
            <div className={classes.LogoContainer}>
               <h2>Parenting</h2> 
            </div>

            <div className={classes.SearchContainer}>
                <form>
                    <div className={classes.topSearch}>
                        <AiOutlineSearch size={20} />
                        <input placeholder='Search...' />
                    </div>
                </form>
            </div>

            <div className={classes.UserContainer}>
                <Avatar fgColor='white' size={50} name={username} round={true} />
            </div>
        </div>
    );
}

export default Toolbar;