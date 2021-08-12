import { useState } from 'react';
// import { Avatar, Input, InputAdornment } from '@material-ui/core';
import Avatar from 'react-avatar';
import classes from './Toolbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

import { useSelector } from 'react-redux';
import { Button, Dialog, List, DialogTitle } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import * as authActions from '../../redux/actions/authActions';

const Toolbar = () => {

    const [search, setSearch] = useState('');
    const username = useSelector(state => state.auth.user.username);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    

    const searchHandler = (e) => {
        e.preventDefault();
        setSearch('');
    }

    const onCloseDialog = () => {
        dispatch(authActions.logout())
        setOpen(false);
    }

    const onClose = ()  => {
        setOpen(false);
    }

    return (
        <div className={classes.Toolbar}>
            <div className={classes.LogoContainer}>
               <h2>Parenting</h2> 
            </div>

            <div className={classes.SearchContainer}>
                <form onSubmit={searchHandler} >
                    <div className={classes.topSearch}>
                        <AiOutlineSearch size={20} />
                        <input placeholder='Search...' onChange={e => setSearch(e.target.value)} value={search} />
                    </div>
                </form>
            </div>

            <div className={classes.UserContainer}>
                <Button onClick={() => setOpen(true)} >
                    <Avatar fgColor='white' size={50} name={username} round={true} />
                </Button>
            </div>
            <Dialog open={open} onClose={onClose}>
                {/* <DialogTitle id="simple-dialog-title">Log Out</DialogTitle> */}
                <List>
                    <Button>
                        <h4 onClick={onCloseDialog}>Logout</h4>
                    </Button>
                </List>
            </Dialog>
        </div>
    );
}

export default Toolbar;