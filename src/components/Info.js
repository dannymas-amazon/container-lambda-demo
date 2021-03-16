import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background: "lightgrey",
    },
    paperWhite: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background: "white",
    },
    paperName: {
        padding: theme.spacing(2),
        fontSize: 40,
        textAlign: 'center',
        background: "lightgrey",
    },
    tweetHeader: {
        padding: theme.spacing(2),
        fontSize: 40,
        textAlign: 'center',
        background: "lightgrey",
    },
    tweet: {
        padding: theme.spacing(2),
        textAlign: 'left',
        background: "lightgrey",
    },
}));

export default function Info(props) {
    const classes = useStyles();

    useEffect(() => {console.log(props.data)}, [])

    return (
        <div className={classes.root}>
            {props.data.address ? (
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <img src={'https://internal-cdn.amazon.com/badgephotos.amazon.com/?uid=dannymas'} style={{height:'315px'}}/>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paperName}>{props.data.name}</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>Username:</Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper className={classes.paperWhite}>{props.data.username}</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>Email:</Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper className={classes.paperWhite}>{props.data.email}</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>Phone:</Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper className={classes.paperWhite}>{props.data.phone}</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>Address:</Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>Street:</Paper>
                                </Grid>
                                <Grid item xs={8}>
                                    <Paper className={classes.paperWhite}>{props.data.address.streetB}</Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>City:</Paper>
                                </Grid>
                                <Grid item xs={8}>
                                    <Paper className={classes.paperWhite}>{props.data.address.city}</Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>State:</Paper>
                                </Grid>
                                <Grid item xs={8}>
                                    <Paper className={classes.paperWhite}>{props.data.address.state}</Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>Country:</Paper>
                                </Grid>
                                <Grid item xs={8}>
                                    <Paper className={classes.paperWhite}>{props.data.address.country}</Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.tweetHeader}>Tweets</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.tweet}>{props.data.posts[0].paragraph}</Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.tweet}>{props.data.posts[1].paragraph}</Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> ) : (<div>{'Loading...'}</div>)}
        </div>
    );

}