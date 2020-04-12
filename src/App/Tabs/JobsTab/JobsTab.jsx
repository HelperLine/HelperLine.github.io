import React, {useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    tab: {
        minWidth: 125,
    },
    contentContainer: {
        marginTop: 25,
    },
    margin1: {
        marginBottom: theme.spacing(1),
    },
    margin2: {
        marginBottom: theme.spacing(2),
    },
    margin3: {
        marginBottom: theme.spacing(3),
    },
    margin4: {
        marginBottom: theme.spacing(4),
    },
    margin5: {
        marginBottom: theme.spacing(5),
    },
    margin6: {
        marginBottom: theme.spacing(6),
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    subtitle: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
    paragraph: {
        textAlign: "justify",
        marginBottom: theme.spacing(2),
    },
    pinkLink: {
        textDecoration: "none",
        color: theme.palette.secondary.main
    },

}));


export const JobsTab = (props) => {

    const classes = useStyles();

    function subtitle(text) {
        return (
            <Typography variant="h5" className={classes.subtitle}>
                {text}
            </Typography>
        );
    }

    function paragraph(text) {
        return (
            <Typography variant="subtitle1" className={classes.paragraph}>
                {text}
            </Typography>
        );
    }

    function link(url) {
        return (
            <a href={url} className={classes.pinkLink}>
                {url}
            </a>
        );
    }

    function email(email) {
        return (
            <a href={"mailto:" + email} className={classes.pinkLink}>
                {email}
            </a>
        );
    }


    return (
        <Container maxWidth="sm" className="TopContainer BottomContainer">
            <div className="ContentFlexBox">
                <Typography variant="h4" className={classes.title}>Jobs</Typography>

                {paragraph(
                    <React.Fragment>
                        Coming soon! Until then: see&nbsp;
                        <a className={classes.pinkLink}
                           href="https://github.com/Hilfe-am-Ohr/task-collection/blob/master/jobs.md"
                           target="_blank" rel="noopener noreferrer"><strong>jobs.md</strong></a>
                    </React.Fragment>
                )}
            </div>
        </Container>
    );
};

