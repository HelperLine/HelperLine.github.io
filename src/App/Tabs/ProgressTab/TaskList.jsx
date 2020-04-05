
import React from 'react';


// possible status values: "released", "done", "in progress", "to do", "outlook"

export const TaskList = [
    {
        name: "Full Stack - Change Email",
        description: (
            <React.Fragment>
                New confirmation email! Keep user logged in and change his login data/cookies
                for server communication.

                <br/><br/>

                We currently only support this when the email has not been confirmed yet!

                <br/><br/>

                Not a top priority to make it work for changing the email afterwards. Security
                question: Doing bad stuff on our platform and changing email afterwards. We need
                some mechanism of storing these permanently - as bad as it sounds ...
            </React.Fragment>
        ),
        status: "released"
    },


    {
        name: "Full Stack - Change Password",
        description: (
            <React.Fragment>
                Popup on account page for changing your password afterwards.
            </React.Fragment>
        ),
        status: "released"
    },


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
                Receive calls and store/update the caller profile as well as the call record in our database.
            </React.Fragment>
        ),
        status: "done"
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
        status: "in progress"
    },


    {
        name: "Frontend - Different Landing Page when logged in",
        description: (
            <React.Fragment>
                Add the sidebar to landing page, hide login button, etc.
            </React.Fragment>
        ),
        status: "outlook"
    },
];