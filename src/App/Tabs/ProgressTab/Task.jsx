import React, {useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import CloudDoneIcon from '@material-ui/icons/CloudDone';
import DoneIcon from '@material-ui/icons/Done';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


import './Task.scss';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
    panel: {
        width: "100%",
    },

    summaryBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    summaryIcon: {
        marginRight: theme.spacing(2),
    },
    summaryIconReleased: {
        fill: "green",
    },
    summaryIconDone: {
        fill: "green",
    },
    summaryIconInProgress: {
        fill: "hsl(50, 100%, 50%)",
    },
    summaryIconToDo: {
        fill: "gray",
    },
    summaryIconOutlook: {
        fill: "gray",
    },
}));



export const Task = (props) => {

    const classes = useStyles();

    let icon;

    // possible status values: "released", "done", "in progress", "to do", "outlook"

    switch (props.status) {
        case "released":
            icon = <CloudDoneIcon className={clsx(classes.summaryIcon, classes.summaryIconReleased)}/>;
            break;
        case "done":
            icon = <DoneIcon className={clsx(classes.summaryIcon, classes.summaryIconDone)}/>;
            break;
        case "in progress":
            icon = <SettingsIcon className={clsx("TaskIcon", classes.summaryIcon, classes.summaryIconInProgress)}/>;
            break;
        case "to do":
            icon = <AssignmentIcon className={clsx(classes.summaryIcon, classes.summaryIconToDo)}/>;
            break;
        default: // case "outlook"
            icon = <EmojiObjectsIcon className={clsx(classes.summaryIcon, classes.summaryIconOutlook)}/>;
            break;
    }

    return (
        <ExpansionPanel elevation={2} className={classes.panel}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div  className={classes.summaryBox}>
                    {icon}
                    <Typography variant="h6">{props.name}</Typography>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography variant="subtitle1">
                    {props.description}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

