import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ShareIcon from '@material-ui/icons/Share';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Grid from '@material-ui/core/Grid';
import Logo from '../assets/icon_onepack.15ec9319.png'
const useStyles = makeStyles((theme) => ({
    root: {
        // Width: '60%',
        textAlign: 'center',
        marginTop: 50
    },
    pytm: {
        marginTop: 10,
        color: '#06bcf3',
        fontWeight: 600,
        fontSize: 18
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 600
    },
    button: {
        // width: '25%',
        textTransform: "none",
        background: '#06bcf3'


    },

    pos: {

        fontWeight: 600,
        fontSize: 25
    },
}));

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} variant="h5" component="h2">
                    Share Payment Link
        </Typography>
                <Typography variant="h5" component="h2">
                    <img src={Logo} style={{ width: 40, marginTop: 15 }} />
                </Typography>
                <Typography className={classes.pos} >
                    ₹ 3,062
                </Typography>
                <Typography variant="body2" component="p" color='textSecondary' >
                    August Grocery bill
                </Typography>
                <Typography className={classes.pytm}>
                    P-y.tm/9qwer
                </Typography>
                <Grid container style={{ marginTop: 20 }}>
                    <Grid item sm={3}></Grid>
                    <Grid item sm={3}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<ShareIcon />}
                        >
                            Share Link
                    </Button>
                    </Grid>
                    <Grid item sm={3}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<FileCopyIcon />}
                        >
                            Copy
                    </Button>

                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    );
}
