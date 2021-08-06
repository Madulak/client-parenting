import BlockA from '../components/BlockA/BlockA';
import Toolbar from '../components/Toolbar/Toolbar';
import classes from './Container.module.css';

const Container = ({children}) => {

    return (
        <div className={classes.Container}>

            <div className={classes.ToolbarContainer}>
                <Toolbar />
            </div>
            
            <div className={classes.BlockContainer}>

                <div className={classes.BlockA}>
                    <BlockA />
                </div>

                <div className={classes.BlockB}>
                    {children}
                </div>

                <div className={classes.BlockC}>
                    <h1>BlockC</h1>
                </div>

            </div>
        </div>
    );
}

export default Container;