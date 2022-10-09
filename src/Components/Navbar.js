import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';



const useStyle = makeStyles((theme) => ({
    button: {

    }
}))

const Navbar = () => {
    const classes = useStyle()
    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>
                    MaterialUi Poj.
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
