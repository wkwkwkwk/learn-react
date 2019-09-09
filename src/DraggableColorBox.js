import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        height: "20%", 
        width: "25%", 
        margin: "0 auto", 
        display: "inline-block", 
        position: "relative", 
        cursor: "pointer", 
        marginBottom: "-3.5px"
    }
};

function DraggableColorBox(props) {
    return(
        <div className={props.classes.root} style={{ backgroundColor: props.color }}></div>
    )
}

export default withStyles(styles)(DraggableColorBox);