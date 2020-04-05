import React, {useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Task} from "./Task";

import {TaskList} from "./TaskList";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
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
        color: theme.palette.secondary.main
    },

}));


export const ProgressTab = (props) => {

    const classes = useStyles();

    function subtitle(text) {
        return (
            <Typography variant="h5" className={classes.subtitle}>
                {text}
            </Typography>
        );
    }

    function renderTaskList(status) {
        const task_list = TaskList.filter(task => task.status === status).map((task, index) => (
            <Task status={task.status} name={task.name} description={task.description}/>
        ));

        return (
            <div className={clsx(classes.root, classes.margin4)}>
                {task_list}
            </div>
        );
    }


    return (
        <Container maxWidth="sm" className="TopContainer BottomContainer">
            <div className="ContentFlexBox">
                <Typography variant="h4" className={classes.title}>Development Progress</Typography>

                {subtitle("Released")}
                {renderTaskList("released")}

                {subtitle("Implemented but not released yet")}
                {renderTaskList("done")}

                {subtitle("In progress")}
                {renderTaskList("in progress")}

                {subtitle("To do")}
                {renderTaskList("to do")}

                {subtitle("Future ides")}
                {renderTaskList("outlook")}
            </div>
        </Container>
    );
};

