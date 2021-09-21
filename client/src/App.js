import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getEntries } from './actions/entries';
import Entries from './components/Entries/Entries';
import Form from './components/Form/Form.js';
import useStyles from './styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import quicksand from 'typeface-quicksand';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Quicksand',
            'sans-serif'
        ].join(','),
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [quicksand],
            },
        },
    }
});

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    useEffect(() => {
        dispatch(getEntries());
    }, [currentId, dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl">
                <AppBar className={classes.appBar} position="static">
                        <Typography variant="h3" align="center">Dear Diary</Typography>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid className={classes.mainContainer} container justify="space-between" alignitems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Entries setCurrentId={setCurrentId} />
                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>

                    </Container>
                </Grow>
            </Container>
        </ThemeProvider>
    );
}

export default App;