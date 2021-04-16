import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const IndexPage = () => {
    return (
        <Layout pageName="home">
            <Helmet>
                <title>Leah und Gabe</title>
                <link rel="stylesheet" href="https://use.typekit.net/xkh2evt.css"/>
            </Helmet>
            <Container>
                <div className="panel photo-panel">
                    <div className="panel-container">
                        <div className="photo-text hide-mobile"></div>
                        <div className="hide-desktop">
                            <h1>Gabe Kelley & Leah Schmidt</h1>
                        </div>
                    </div>
                </div>
                <div className="panel info-panel">
                    <div className="panel-container">
                        <div className="info-section">
                            <p>
                                We miss you
                                <br />
                                We love each other
                                <br />
                                We wish we could have done this sooner, but things
                                got in the way.
                            </p>
                        </div>
                        <div className="info-section">
                            <p className="fancy">
                                Join us for our engagement party <span>August 20th</span> from <span>3–9pm</span> at the <span>Esperanza View</span> in <span>Keuka Park, New York</span>.
                            </p>
                        </div>
                        <div className="info-section">
                            <p className="fancy">
                                We kindly ask that all guests are vaccinated against COVID-19 for the safety of other guests, our caterers, and venue staff.
                            </p>
                        </div>
                        <div className="info-section">
                            <p className="fancy">
                                We kindly ask that all guests are vaccinated against COVID-19 for the safety of other guests, our caterers, and venue staff.
                            </p>
                        </div>
                        <div className="info-section">
                            <p className="fancy">
                                We kindly ask that all guests are vaccinated against COVID-19 for the safety of other guests, our caterers, and venue staff.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default IndexPage;
