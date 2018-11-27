import React, { Component } from 'react';
import FreeLeads from '../components/buttons/FreeLeads';
import GetStarted from '../components/buttons/GetStarted';

export default class ProspectAnywhere extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="prospectCover">
                    <div className="container prospectHeaderTitle">
                        <section className="pt-5 gettingStarted">
                            <h1 className="text-white text-center  mb-4 fa-2x prospectText"><b>Prospect Anywhere</b></h1>
                            <p className="text-white text-center mb-4" style={{ fontWeight: "400" }}>Chrome Extension</p>
                            <div className="justify-content-center d-flex">
                                <GetStarted size="lg" />
                            </div>
                        </section>
                    </div>
                </div>
                <div className="waveDesign">
                    <img src="/img/wave-four.png" className="img-fluied waveDesignProspect" alt="wave" />
                </div>
                <section className="pt-0">
                    <div className="container">
                        <h1 className="prospectTitleText justify-content-center d-flex mt-5">Why Use Prospect Anywhere?</h1>
                        <div className="row justify-content-center d-flex">
                            <div className="listProspect pt-5">
                                <ul className="m-0">
                                    <li>See emails as you browse the web.</li>
                                    <li>Gain access to millions of verified email addresses from over 250k companies, contributed by the LeadIQ Community.</li>
                                    <li>It’s easy to use.</li>
                                    <li>Used by thousands of sales reps and recruiters.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <section className="prospectLaptopOneDesign">
                        <img src="/img/prospect-laptop-one.png" className="img-fluied" alt="prospect-laptop-one" />
                    </section>
                </div>
                <div>
                    <div className="row salesForceCover pt-5 pb-5">
                        <div className="col-md-5 col-lg-5">
                            <img src="/img/prospect-laptop-second.png" className="img-fluied prospectLaptopSecondDesign" alt="prospect-laptop-second" />
                        </div>
                        <div className="col-md-7 col-lg-7 mt-5 pt-5">
                            <h1 className="prospectTitleText mt-5 pl-5">Connect to Salesforce and run lookups of existing prospects as you browse the web.</h1>
                            <h3 className="mt-5 pl-5  detailsProspectText">As you browse the web, we detect existing leads, contacts, accounts, and customers, and link right to the Salesforce records.</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row emailProspectCover pt-5 pb-5">
                        <div className="col-md-5 col-lg-5">
                            <img src="/img/prospect-laptop-third.png" className="img-fluied prospectLaptopSecondDesign" alt="prospect-laptop-third" />
                        </div>
                        <div className="col-md-7 col-lg-7 mt-5 pt-5">
                            <h1 className="prospectTitleText mt-5 pl-5">Find Your Prospect’s emails in Real-time</h1>
                            <h3 className="mt-5 pl-5 detailsProspectText">Finding and verifying email addresses isn’t a good use of your sales team’s time.In milliseconds, we’ll run hundreds of queries on the backend to find and verify email addresses.</h3>
                        </div>
                    </div>
                    <section>
                        <h1 className="prospectTitleText justify-content-center d-flex mt-5 pt-5 mb-5 textAlign"><b>Build Up Pipeline Faster</b></h1>
                        <div className="justify-content-center d-flex mb-5 pb-5">
                            <FreeLeads size="lg" />
                        </div>
                    </section>
                </div>
            </div >
        )
    }
}