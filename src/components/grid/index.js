import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Step from '../../components/step'
import Card from '../card'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 40,
        // height: '50vh'
    },
    type: {
        textAlign: 'center',
        marginBottom: 60,
        fontWeight: 600
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="body2" component="h6" variant='h4' className={classes.type}>
                Collect Payments in 3 Easy Steps
                </Typography>
            <Grid container spacing={3}>
                <Grid item sm={2}></Grid>
                <Grid item sm={5}>
                    <Card className={classes.paper} />
                </Grid>
                <Grid item xs={3}>
                    <Step className={classes.paper} />
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </div>
    );
}
