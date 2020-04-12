import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


import Sketch1 from '../../../images/Call_Assignment_English.svg';
import Sketch2 from '../../../images/Online_Switch_English.svg';
import Sketch3 from '../../../images/Filter_Criteria_English.svg';
import clsx from "clsx";


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
        width: "100%",
        textAlign: "left",
    },
    list: {
        width: "calc(100% - 30px)",
        marginLeft: "30px",
        textAlign: "left",
    },
    pinkLink: {
        color: theme.palette.secondary.main
    },
    largeImage: {
        maxWidth: "100%",
    },
    imageBlock: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
    },

}));


export const DetailsTab = () => {

    const classes = useStyles();

    function subtitle(text) {
        return (
            <Typography variant="h5" className={clsx(classes.subtitle, classes.margin2)}>
                {text}
            </Typography>
        );
    }

    function paragraph(text) {
        return (
            <Typography variant="subtitle1" className={clsx(classes.paragraph, classes.margin2)}>
                {text}
            </Typography>
        );
    }

    function list(text) {
        return (
            <Typography variant="subtitle1" className={classes.list}>
                {text}
            </Typography>
        );
    }

    function image(src, alt) {
        return (
            <Container maxWidth="md" className={classes.imageBlock}>
                <div className="ContentFlexBox">
                    <img src={src} alt={alt} className={classes.largeImage}/>
                </div>
            </Container>
        );
    }


    return (
        <React.Fragment>
            <Container maxWidth="sm" className="TopContainer">
                <div className="ContentFlexBox">
                    <Typography variant="h4" className={classes.title}>Details</Typography>

                    {subtitle("The Process of Assigning Calls")}

                    <Typography variant="subtitle1" className={clsx(classes.paragraph)}>
                        Our strategy is to <strong>offer both services</strong>:
                    </Typography>
                    <Typography variant="subtitle1" className={clsx(classes.list)}>
                        <ul>
                            <li>
                                <strong>Manually accepting calls</strong> whenever the user wants to
                            </li>
                            <li>
                                <strong>Call forwarding</strong> only if the user sets it up
                            </li>
                        </ul>
                    </Typography>

                    <Typography variant="subtitle1" className={clsx(classes.paragraph, classes.margin4)}>
                        No user will be called directly without explicitly setting it up!
                    </Typography>

                    {paragraph(
                        <React.Fragment>
                            Whenever a <strong>call comes in</strong> (top part of the following image) <strong>we try
                            to immediately forward it </strong>to a volunteer that is currently "online" (= accepting
                            call forwarding) that matches the calls requirements.
                        </React.Fragment>
                    )}

                    {paragraph(
                        <React.Fragment>
                            <strong>If there is no such volunteer available</strong> right away we tell the caller that
                            we will call them back shortly and <strong>put that call in the local/global queue</strong>
                            - depending on the call type.
                        </React.Fragment>
                    )}

                    {paragraph(
                        <React.Fragment>
                            The calls from these queues can only be served when clicking "accept call".
                        </React.Fragment>
                    )}

                    {paragraph(
                        <React.Fragment>
                            After all certain time, local calls can also be accepted globally: <strong>In case there is
                            no volunteer from our hotline in that area</strong> we can help the caller find one in one
                            of many online-first forums.
                        </React.Fragment>
                    )}
                </div>
            </Container>

            {image(Sketch1, "Call Assignment")}

            <Container maxWidth="sm">
                <div className="ContentFlexBox">
                    {paragraph(
                        <React.Fragment>
                            On the volunteer side whenever the volunteer clicks "accept call", he gets assigned a call
                            form those queues, which matches his filter criteria (see below).
                        </React.Fragment>
                    )}

                    {paragraph(
                        <React.Fragment>
                            After some more time any call (urgent queue) will be preferred over regular local/global
                            calls so that callers do not have to wait indefinitely. Filter criteria still apply.
                        </React.Fragment>
                    )}

                    {subtitle("When can volunteers be called directly?")}

                    {paragraph(
                        <React.Fragment>
                            In order to enable that feature, a volunteer has to enter his number on the "account"-page
                            and confirm it (SMS Token, like the email confirmation).
                        </React.Fragment>
                    )}

                    {paragraph(
                        <React.Fragment>
                            Once he has done that, in the "calls"-tab he can manually click "go online" are can set up
                            a time triggered online/offline schedule.
                        </React.Fragment>
                    )}

                    {paragraph(
                        <React.Fragment>
                            <em>These features have not been released yet.</em>
                        </React.Fragment>
                    )}
                </div>
            </Container>

            {image(Sketch2, "Call Forwarding")}

            <Container maxWidth="sm">
                <div className="ContentFlexBox">
                    {subtitle("Which calls will be assigned?")}

                    {paragraph(
                        <React.Fragment>
                            Every volunteer can set filters to define which calls they want to take.
                        </React.Fragment>
                    )}

                    {paragraph(
                        <React.Fragment>
                            Right now we only offer three options: <strong>All calls</strong>, <strong>Only local calls
                            </strong> (e.g. "I don't want to mediate callers and other volunteers, I want to help in
                            person") and <strong>Only global calls</strong> (e.g. "I dont't want to leave my house but
                            still be able to help" -> Online-Services, Mediation, Just Talking).
                        </React.Fragment>
                    )}

                    {paragraph(
                        <React.Fragment>
                            Of course these filters are not perfect yet! But extending them is really simple on the tech
                            side, so we will definitely have more of these in the future!
                        </React.Fragment>
                    )}
                </div>
            </Container>

            {image(Sketch3, "Call Filtering")}

            <Container className="BottomContainer"/>
        </React.Fragment>
    );
};

