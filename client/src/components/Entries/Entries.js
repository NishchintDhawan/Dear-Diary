import React from 'react';
import { Grid, Typography, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Entry from './Entry/Entry.js';
import useStyles from './styles';

const Entries = ({ currentId, setCurrentId }) => {
    const entries = useSelector((state) => state.entries);
    const classes = useStyles();
    console.log(entries);
    return (
        //if no entries, then display 'You dont have any entries. Create one from the entries menu."
        (entries.length === 0) ?
            <div>
                <Typography variant="h6" component="h1" style={{color: "#ffffff"}} >You don't have any entries! Create one using the form.</Typography>
            </div> :
            !entries.length ? <CircularProgress /> :
                (
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {entries.map((entry) => (
                            <Grid key={entry._id} item xs={12} sm={6}>
                                <Entry entry={entry} setCurrentId={setCurrentId} />
                            </Grid>
                        ))}
                    </Grid>
                )

    );
}

export default Entries;
