import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const [services] = useServices();
    const {serviceId} = useParams();
    const foundService = services.find(service => service.id === parseInt(serviceId));
    console.log(services)
    return (
        <section>
            <div className="container">
                <div className="service-contents">
                <img className="service-image" alt="" src={foundService?.thumbnail}/>
                <h2 className="service-heading text-uppercase red-text mt-3"> <FontAwesomeIcon icon={faHeartbeat} /> {foundService?.title}</h2>
                <p className="service-description mt-5">
                    {foundService?.description}
                </p>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;