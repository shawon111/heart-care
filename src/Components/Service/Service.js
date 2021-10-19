import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css';

const Service = (props) => {
    const {title, description, thumbnail, id} = props.service;
    const serviceUrl = `/${id}`
    return (
        <Card className="service-card">
  <div className="service-thumb">
  <img alt="service-thumbnail" src={thumbnail} />
  </div>
  <Card.Body>
    <h3 className="service-title text-start mb-4">{title}</h3>
    <Card.Text className="text-start mb-4">
      {description.slice(0,150)}...
    </Card.Text>
    <div className="read-more-btn d-flex text-start">
        <Link to={serviceUrl} className="btn red-btn">Read More</Link>
    </div>
  </Card.Body>
</Card>
    );
};

export default Service;