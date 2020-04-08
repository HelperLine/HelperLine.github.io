import React, {useState} from 'react';
import ProjectImage from '../images/Drawing_Logo_Project.svg';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import clsx from 'clsx';

import './Page.scss';
import Container from "@material-ui/core/Container";

import {VisionTab} from './Tabs/VisionTab/VisionTab';
import {DetailsTab} from './Tabs/DetailsTab/DetailsTab';
import {ProgressTab} from './Tabs/ProgressTab/ProgressTab';
import {JobsTab} from './Tabs/JobsTab/JobsTab';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    tab: {
        minWidth: 125,
    },
    contentContainer: {
        marginTop: 25,
    }
});


export const Page = (props) => {

    const classes = useStyles();

    let [tab, setTab] = useState({tab: "vision"});

    let tabContent;

    switch (tab.tab) {
        case "vision":
            tabContent = <VisionTab/>;
            break;
        case "details":
            tabContent = <DetailsTab/>;
            break;
        case "progress":
            tabContent = <ProgressTab/>;
            break;
        case "jobs":
            tabContent = <JobsTab/>;
            break;
        default:
            tabContent = "";
            break;
    }

    return (
        <div>
            <div className="BannerWindow">
                <img src={ProjectImage} alt="Project Logo" className="Image"/>
                <Paper className={clsx(classes.root, "TabPaper")}>
                    <Tabs
                        value={tab.tab}
                        onChange={(event, value) => setTab({tab: value})}
                        indicatorColor="secondary"
                        textColor="secondary"
                        centered
                        variant="scrollable"
                    >
                        <Tab value="vision" label="Vision" className={classes.tab}/>
                        <Tab value="details" label="Details" className={classes.tab}/>
                        <Tab value="progress" label="Progress" className={classes.tab}/>
                        <Tab value="jobs" label="Jobs" className={classes.tab}/>
                    </Tabs>
                </Paper>
            </div>
            {tabContent}
        </div>
    );
};

