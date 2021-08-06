import classes from './BlockC.module.css';

const BlockC = () => {

    const embedId = '0vdPxLfAsqo';

    return (
        <div className={classes.BlockC}>
            <h3> Suggested Parenting Videos</h3>

            <div className="video-responsive">
                <iframe
                width="300"
                height="260"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
               
                allowFullScreen
                title="Embedded youtube"
                />
            </div>
        </div>
    );
}

export default BlockC;