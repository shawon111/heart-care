import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <section className="about-banner">
                <div className="container d-flex">
                <div className="about-banner-empty w-50">

                </div>
                <div className="about-banner-texts w-50">
                <h4 className="text-start text-uppercase fw-normal about-subheading">Get the notifications</h4>
                        <h1 className="about-heading text-dark text-start my-4 fw-normal">
                        <span>We have some</span><br/>
                        <span className="red-text">Good news</span>
                        </h1>
                        <p className="about-paragraph text-start text-dark">
                        Sign up for Medicare newsletter to receive all the new offers and discounts from Medicare clinic. Discounts are only valid four our newsletter subscribers.
                        </p>
                </div>
                </div>
            </section>
            <section>
                <div className="container text-start d-flex">
                    <div className="about-info w-50 p-4">
                        <h3 className="red-text">Professional team</h3>
                        <p>Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities.</p>
                    </div>
                    <div className="about-info w-50 p-4">
                    <h3 className="red-text">Services and technology</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;