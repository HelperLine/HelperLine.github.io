
import React from 'react';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    pinkLink: {
        color: theme.palette.secondary.main
    },
}));


const Link = (props) => {
    const classes = useStyles();

    return (
        <a href={props.url} className={classes.pinkLink}>
            {props.url}
        </a>
    );
};


// possible status values: "released", "done", "in progress", "to do", "outlook"

export const TaskList = [

    {
        name: "Frontend - New Landing Page",
        description: (
            <React.Fragment>
                A new landing page, briefly describing what our product is.
            </React.Fragment>
        ),
        status: "released"
    },


    {
        name: "Frontend - New Calls Page #2 (with Stats)",
        description: (
            <React.Fragment>
                Stats for community (local volunteers/callers) and your own account.
            </React.Fragment>
        ),
        status: "released"
    },


    {
        name: "Frontend - Restructure Calls Page #3",
        description: (
            <React.Fragment>
                Restructure the page to be more intuitive. 1. Move Performance Panel, 2. Adjust filter descriptions
            </React.Fragment>
        ),
        status: "to do"
    },


    {
        name: "Backend - Receive Calls",
        description: (
            <React.Fragment>
                Replace the current survey with the actual hotline

                <br/><br/>

                Receive calls and store/update the caller profile as well as the call record in our database.
            </React.Fragment>
        ),
        status: "released"
    },

    {
        name: "Backend - Enqueuing of calls",
        description: (
            <React.Fragment>
                Add every - for now - incoming call to the local/global call queue. Actually all three queues (see
                details tab) are in one single collection with clever querying.
            </React.Fragment>
        ),
        status: "done"
    },


    {
        name: "Backend - Dequeuing of calls",
        description: (
            <React.Fragment>
                Add method for dequeuing calls from these queues according to the filters.
            </React.Fragment>
        ),
        status: "done"
    },


    {
        name: "Connection - \"Accept Call\" Button and Dequeuing",
        description: (
            <React.Fragment>
                Very straight forward.
            </React.Fragment>
        ),
        status: "done"
    },


    {
        name: "Backend - Add phone number (+ verification)",
        description: (
            <React.Fragment>
                Add all database fields.

                <br/><br/>

                Test out the Twilio SMS API.

                <br/><br/>

                Implement the actual SMS verification trigger.

                <br/><br/>

                Add REST-endpoint to enter phone number/resend verification.

            </React.Fragment>
        ),
        status: "done"
    },


    {
        name: "Frontend - Add phone number (+ verification)",
        description: (
            <React.Fragment>
                Add phone number and resend verification button to account form
            </React.Fragment>
        ),
        status: "done"
    },


    {
        name: "Backend - Add comments to calls",
        description: (
            <React.Fragment>
                Possibility to store a comment with each call (in call record itself).

                <br/><br/>

                The helper can make notes about a call (no formatting just plan text).

                <br/><br/>

                When call is rejected that comment is removed.
            </React.Fragment>
        ),
        status: "done"
    },


    {
        name: "Frontend - Add comments to calls",
        description: (
            <React.Fragment>
                A comment block as a multiline text field under every call record.

                <br/><br/>

                For now: save changes on blur. Don't want too many "submit"/"save"/... buttons.

                <br/><br/>

                A small cross/spinner/checked icon indicating that comment is unsaved/saving/saved
            </React.Fragment>
        ),
        status: "done"
    },


    {
        name: "Backend - Implement Call Forwarding",
        description: (
            <React.Fragment>
                Add all database fields - without scheduling.

                <br/><br/>

                Test out call forwarding with Twilio.

                <br/><br/>

                Implement the actual forwarding.

                <br/><br/>

                Add REST-endpoint to toggle forwarding.

            </React.Fragment>
        ),
        status: "in progress"
    },


    {
        name: "Frontend - Implement Call Forwarding",
        description: (
            <React.Fragment>
                Conceptualize forward toggle panel.

                <br/><br/>

                Add call forwarding panel to calls tab (without time triggered forwarding schedule).
            </React.Fragment>
        ),
        status: "in progress"
    },


    {
        name: "Frontend - Translate all the new features",
        description: (
            <React.Fragment>
                For now only english and german.
            </React.Fragment>
        ),
        status: "in progress"
    },


    {
        name: "Frontend - Add footer to page",
        description: (
            <React.Fragment>
                The footer shall include links to: About (this page), Source Code (GitHub)
            </React.Fragment>
        ),
        status: "to do"
    },

    {
        name: "FullStack - Refined error messages",
        description: (
            <React.Fragment>
                More precise error messages.

                <br/><br/>

                Modify Client "Error Snackbar". New version: Permanent with close icon.
                Maybe at least "success" will be non permanent.

                <br/><br/>

                Separate React component for Error Message.
            </React.Fragment>
        ),
        status: "to do"
    },


    {
        name: "Frontend - Landing Page when logged in",
        description: (
            <React.Fragment>
                Add the sidebar to landing page, hide login button, etc.
            </React.Fragment>
        ),
        status: "outlook"
    },


    {
        name: "FullStack - Reduce data transfer",
        description: (
            <React.Fragment>
                Currently with most requests, the result gets send back to the client in the form of the full
                account/calls data. The frontend state changes only a little bit (e.g. fulfilling a call).

                <br/><br/>

                A full fetch after every operation is totally unnecessary!

                <br/><br/>

                Goal: Further reduced server load by reducing the amount fetching data that the client already has.
            </React.Fragment>
        ),
        status: "outlook"
    },


    {
        name: "Backend - Switching from Flask to Sanic",
        description: (
            <React.Fragment>
                Currently our server side code is synchronous and blocking ...

                <br/><br/>

                Because we are using a lot of communication with our MongoDB Atlas
                Cluster we definitely need to improve our server side code.

                <br/><br/>

                The best option for that would be to switch to Sanic: <Link url="https://sanicframework.org/"/>,&nbsp;
                <Link url="https://github.com/huge-success/sanic"/>.
            </React.Fragment>
        ),
        status: "outlook"
    },


    {
        name: "Backend - Migrating from Heroku to GCP",
        description: (
            <React.Fragment>
                Currently we are host the whole webapp and the hotline on Heroku.

                <br/><br/>

                However until now Heroku does not offer any Covid-19 related funding,
                whereas GCP does.

                <br/><br/>

                We could easily switch to the <strong>GCP AppEngine</strong>. Deploying
                and scaling seems to be super easy and fast.
            </React.Fragment>
        ),
        status: "outlook"
    },


    {
        name: "Full Stack - Add new call categories",
        description: (
            <React.Fragment>
                Add new call categories. Types: "question about the hotline", "local", "global",
                "local but with non-local helper".

                <br/><br/>

                Add these options to hotline.

                <br/><br/>

                Display these types to volunteer.
            </React.Fragment>
        ),
        status: "outlook"
    },
];