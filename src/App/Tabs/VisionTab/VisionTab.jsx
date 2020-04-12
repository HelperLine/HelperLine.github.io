import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";


import DrawingTechSetup from '../../../images/Drawing_Tech_Setup.svg';

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
        color: theme.palette.secondary.main
    },

}));


export const VisionTab = (props) => {

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
                <Typography variant="h4" className={classes.title}>Vision</Typography>

                {subtitle(
                    <React.Fragment>
                        What do we do?
                    </React.Fragment>
                )}

                {paragraph(
                    <React.Fragment>
                        Tons of forums for local help are currently coming online/being developed. However,
                        do these online-forums really reach the ones threaded the most by a COVID-19 infection?
                    </React.Fragment>
                )}

                {paragraph(
                    <React.Fragment>
                        <strong>No!</strong> Many of these people do not use the internet.
                        That is why we've built <strong>a hotline</strong> to close that gap.
                    </React.Fragment>
                )}

                <img src={DrawingTechSetup} alt="Tech Setup" className={classes.margin2}/>


                {subtitle(
                    <React.Fragment>
                        Who is our service for?
                    </React.Fragment>
                )}

                {paragraph(
                    <React.Fragment>
                        <strong>1. People in need:</strong> Either we already have volunteers in that area which are
                        using
                        our hotline or we can help these people find a local volunteer in that area on a forum
                        like&nbsp;
                        {link("https://www.helferlein.me/")}.

                        <br/><br/><br/>
                    </React.Fragment>
                )}

                {paragraph(
                    <React.Fragment>
                        <strong>2. Volunteers:</strong> Either you can help locally or you can help them find a suitable
                        volunteer on mentioned online forums. Sometimes the callers might just want to have a friendly
                        conversation since they are even more isolated in these days.

                        <br/><br/><br/>
                    </React.Fragment>
                )}

                {paragraph(
                    <React.Fragment>
                        <strong>3. Communities that already offer a phone service:</strong> Your phone service is
                        probably
                        not operational 24/7. It does not have to be!

                        <br/><br/>

                        When becoming a part of our hotline you will still be able to get called directly. In addition
                        to
                        that, you can manually switch the call forward <em>on</em> or <em>off</em> anytime.

                        <br/><br/>

                        Whenever you are either in a call or <em>offline</em> (forwarding disabled) all the calls will
                        still
                        get answered by our system and stored in our database.

                        <br/><br/>

                        Whenever you'd like to fulfill one of the requests from the database you can click "accept call"
                        and
                        get assigned one of these requests with the associated phone number you are asked to call back.

                        <br/><br/>

                        You can easily set up an automatic <em>online</em>/<em>offline</em> schedule.

                        <br/><br/>

                        We'd love to hear from you! Contact us via {email("collab@helperline.io")}.

                        <br/><br/><br/>
                    </React.Fragment>
                )}

                {paragraph(
                    <React.Fragment>

                        <strong>4. Online-Forums that want to include a (better) phone-API:</strong> We'd love to
                        collaborate
                        with as many other online forums as possible! There are multiple ways how we might collaborate:

                        <br/><br/>

                        a) Sharing of knowledge

                        <br/><br/>

                        b) Sharing of resources: We could make use of more volunteers! You could make use of more actual
                        "help-listings" on your page!

                        <br/><br/>

                        c) Merging of features: You want to offer hotline functionality to your helpers as well? Great!
                        We
                        can talk about implementing the features from our "calls"-page inside your app using our API!
                        That
                        way you can offer our well thought-out hotline-system to your volunteer which don't even have to
                        leave your app and don't have to sign up for yet another service!

                        <br/><br/>

                        Bigger network, stronger service! Contact us via {email("collab@helperline.io")}.

                    </React.Fragment>
                )}

            </div>
        </Container>
    );
};

