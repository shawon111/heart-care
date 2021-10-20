import React from 'react';
import SingleDepartment from '../SingleDepartment/SingleDepartment';
import './Departments.css';

const Departments = () => {
    const headingOne = 'Cardiac electrophysiology';
    const headingTwo = 'Cardiogeriatrics';
    const headingThree = 'Pediatric cardiology';
    const headingFour = 'Interventional cardiology';
    const paragraphOne = 'Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies without market-driven best practices.Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing procedures whereas bricks-and-clicks processes.';
    const paragraphTwo = 'Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before process-centric communities. Dramatically evisculate holistic innovation rather than client-centric data.Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse catalysts for change for interoperable meta-services.';
    const paragraphThree = 'Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks.';
    const paragraphFour = 'Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences. Energistically myocardinate clicks-and-mortar testing procedures.Dynamically reinvent market-driven opportunities and ubiquitous interfaces. Energistically fabricate an expanded array of niche markets through robust products. Appropriately implement visionary e-services vis-a-vis strategic web-readiness.'
    return (
        <div>
            <section className="department-banner-section">
                <div className="container d-flex">
                    <div className="department-banner-texts w-50">
                    <h4 className="text-start text-uppercase fw-normal consults-subheading text-white">services at one glance</h4>
                        <h1 className="department-heading text-white text-start my-4 fw-normal">
                        <span>How can we</span><br/>
                        <span className="text-dark fw-bold">help you?</span>
                        </h1>
                        <p className="banner-paragraph text-start text-white">
                        Credibly innovate granular internal or “organic“ sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.
                        </p>
                    </div>
                    <div className="department-banner-empty-col w-50"></div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="department-items text-start">
                        <SingleDepartment heading={headingOne} paragraph={paragraphOne}></SingleDepartment>
                        <SingleDepartment heading={headingTwo} paragraph={paragraphTwo}></SingleDepartment>
                        <SingleDepartment heading={headingThree} paragraph={paragraphThree}></SingleDepartment>
                        <SingleDepartment heading={headingFour} paragraph={paragraphFour}></SingleDepartment>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Departments;