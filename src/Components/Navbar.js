import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';



const useStyle = makeStyles((theme) => ({
    button: {

    }
}))

const Navbar = () => {
    const classes = useStyle()
    return (
        <AppBar>
            <Toolbar></Toolbar>
        </AppBar>
    );
}

export default Navbar;
