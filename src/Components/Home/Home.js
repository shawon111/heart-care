import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services] = useServices();
    return (
        <div>
            <section className="home-banner">
                <div className="container home-banner-container d-flex">
                    <div className="banner-texts w-50">
                        <h4 className="text-start text-uppercase fw-normal banner-subheading">inspiring better health</h4>
                        <h1 className="banner-heading text-dark text-start my-4 fw-normal">
                        <span className="red-text">Healthy heart,</span><br/>
                        healthy family
                        </h1>
                        <p className="banner-paragraph text-start text-dark">
                        Globally harness multimedia based collaboration and idea-sharing with backend products. Continually whiteboard superior opportunities via covalent scenarios.
                        </p>
                        <div className="banner-buttons d-flex mt-5">
                            <button className="btn red-btn me-3">discover more</button>
                            <button className="btn dark-btn ms-3">view our services</button>
                        </div>
                    </div>
                    <div className="banner-empty-col w-50"></div>
                </div>
            </section>
                
            <section>
                <div className="container">
                    <h1 className="services-heading section-heading fw-bold text-dark">
                    Our <span className="red-text">Services</span>
                    </h1>
                    <div className="services-grid">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                    </div>
                </div>
            </section>
            <section className="consults-section">
                <div className="container">
                    <div className="consults-content d-flex align-items-center">
                        <div className="consults-texts w-50">
                        <h4 className="text-start text-uppercase fw-normal consults-subheading text-white">services at one glance</h4>
                        <h1 className="consults-heading text-dark text-start my-4 fw-normal">
                        <span>How can we</span><br/>
                        <span className="text-white fw-bold">help you?</span>
                        </h1>
                        <p className="banner-paragraph text-start text-dark text-white">
                        Credibly innovate granular internal or “organic“ sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.
                        </p>
                        </div>
                        <div className="consults-form w-50">
                            <div className="text-start w-75 m-auto">
                            <h5 className="text-start mb-4 text-uppercase fw-normal consults-form-subheading text-white">services at one glance</h5>
                            <h3 className="text-white fw-bold">Consult our doctors</h3>
                            <p className="text-white">Select the doctor you prefer to get a checkup and book a visit with them in a matter of minutes. Simply select from the list below.</p>
                            <FloatingLabel controlId="floatingSelect">
                                <Form.Select className="select-doctor text-white" aria-label="Floating label select example">
                                    <option className="p-1">Choose a doctor</option>
                                    <option value="1">Chase Franklin</option>
                                    <option value="2">Anna Wilson</option>
                                    <option value="3">Michel williams</option>
                                    <option value="3">George Mensell</option>
                                </Form.Select>
                            </FloatingLabel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="newsletter-section">
                <div className="container newsletter-container d-flex">
                    <div className="newsletter-form-col w-50">
                    <h4 className="text-start text-uppercase fw-normal newsletter-subheading">Get the notifications</h4>
                        <h1 className="newsletter-heading text-dark text-start my-4 fw-normal">
                        <span>We have some</span><br/>
                        <span className="red-text">Good news</span>
                        </h1>
                        <p className="newsletter-paragraph text-start text-dark">
                        Sign up for Medicare newsletter to receive all the new offers and discounts from Medicare clinic. Discounts are only valid four our newsletter subscribers.
                        </p>
                        <div className="newsletter-form mt-3">
                            <form className="d-flex subscribe-form">
                                <input className="form-control w-75 me-2" type="email" name="email" id="newsletter-email" placeholder="Your Email" />
                                <input className="btn red-btn w-25 ms-2 newsletter-submit" type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                    <div className="newsletter-empty-col w-50">
                    
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;