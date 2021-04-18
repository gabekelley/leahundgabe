import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import header_image from 'assets/images/1.jpeg';
import header_type from 'assets/images/type2.svg';

const IndexPage = () => {
    return (
        <Layout pageName="home">
            <Helmet>
                <title>Leah und Gabe</title>
                <link rel="stylesheet" href="https://use.typekit.net/xkh2evt.css"/>
            </Helmet>
            <Container>
                <div className="header">
                    <div className="header-image__container">
                        <img className="header-image" src={header_image} alt="Leah and Gabe where they got engaged in Brooklyn. Taken by Micah E. Wood" />
                    </div>
                    <div className="header-type__container">
                        <img className="header-type" src={header_type} width="320px" height="320px" alt="Gabe Kelley & Leah Schmidt" />
                        <a className="rsvp-link mono" href="http://LINKHERE.com" target="_blank" rel="noreferrer">RSVP Here ➜</a>
                    </div>
                </div>
                <div className="information">
                    <div className="info-section">
                        <p className="fancy">
                            We miss you. We love each other. We wish we could have done this sooner, but things got in the way.
                        </p>
                    </div>
                    <div className="info-section">
                        <p className="fancy">
                            Join us for our engagement party <span>August 20th</span> from <span>3–9pm</span> at the <a href="https://google.com" className="mono">Esperanza View</a> in <span>Keuka Park, New York</span>.
                        </p>
                    </div>
                    <div className="info-section">
                        <p className="fancy">
                            We kindly ask that, for the safety of those in attendance, only those who have been vaccinated against COVID-19 attend. 
                        </p>
                    </div>
                    <div className="info-section">
                        <br/><br/>
                        <p>
                            Located in the Finger Lakes, there are many vacation rentals around and hotels just a few minutes north and south of the Esperanza View.
                        </p>
                        <p>
                            If you’re flying in, we recommend flying into Rochester and renting a car.
                        </p>
                        <p>
                            There will be food and beverage provided at the event. If you have any dietary restrictions please send us an email and we will make sure to accomodate everyone’s needs.
                        </p>
                        <p>
                            The venue is not entirely toddler-friendly (there is slight drop at the end of the patio or something, Gabe can’t remember). If you’re bringing little ones please be sure to keep them close by (venue’s request).
                        </p>
                        <p>
                            Dress however you need to to be comfortable outside in late August! It could be a scorcher or breezy, who knows.
                        </p>
                        <p>Photo taken by <a href="https://micahewood.com">Micah E. Wood</a></p>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default IndexPage;
