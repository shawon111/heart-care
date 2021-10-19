import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services] = useServices();
    return (
        <div>
            <section className="home-banner">
                <div className="container d-flex">
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
        </div>
    );
};

export default Home;