import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EmailForm from '../components/EmailForm';
import Number from '../components/buttons/Number';
import SalesTalk from '../components/buttons/SalesTalk';
import Subscribe from '../components/buttons/Subscribe';
import HelpCard from '../components/cards/HelpCard';

import partner from "./../data/partners-free-leads.json";
import leadsHelp from "./../data/help-sector.json";
import leadsTrust from "./../data/trusted-partners.json";

export default class GetLeads extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leads: leadsTrust,
            help: leadsHelp,
            partners: partner
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="leadIq-cover-contents leadIq-image-cover">
                    <div className="container">
                        <div className="row get-Touch"><Number size="lg" /></div>
                        <div className="row pt-3 ml-5 pl-5">
                            <div className="col-md-8 pt-5">
                                <img src="/img/leadIq-white.png" className="img-fluied mt-2" alt="leadIq-white-icon" />
                            </div>
                        </div>
                        <section className="mt-5">
                            <h1 className="justify-content-center d-flex mt-3 mb-3 mainTextDesign fa-2x">Where Your Next Deal Starts</h1>
                            <h3 className="justify-content-center d-flex mt-3 mb-3 textSizeDesign">The prospecting productivity suite that fills your pipeline.</h3>
                            <EmailForm className="mb-5" />
                            <div className="privacyPolicy">
                                <h6 className="justify-content-center d-flex ">No credit card required Sign up free today </h6>
                                <h6 className="justify-content-center termsPolicy d-flex mb-3 ">By signing up, you accept our &nbsp;
                                    <Link to="/terms-of-use" className="text-white">
                                        Term of Service
                                    </Link>&nbsp;
                                    and &nbsp;
                                    <Link to="/privacy-policy" className="text-white">
                                        Privacy Policy
                                    </Link>
                                </h6>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="container">
                    <section className="mt-3">
                        <h1 className="justify-content-center d-flex mt-3 mb-3 titleHeaderDesign">Trusted By</h1>
                        <div className="container">
                            <div className="row mt-5 justify-content-center d-flex">
                                {this.state.leads.map((trust, index) => { return (<img className="col-md-3 col-lg-3 mb-3 justify-content-center d-flex img-fluied" key={index} src={trust.imageUrl} alt={trust.title} />) })}
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1 className="justify-content-center d-flex mt-3 mb-3 alignCenter titleHeaderDesign">Sales Prospecting In Minutes Not Days</h1>
                        <div className="container">
                            <div className="row mt-5 justify-content-center d-flex">
                                <div className="col-md-6 col-lg-6 aptop-screen mb-4">
                                    <img src="/img/laptop-image-cover.png" className="img-laptop " alt="cover-screen" />
                                    <img src="/img/laptop-image.png" className="img-fluied" alt="laptop-screen" />
                                </div>
                                <div className="col-md-4 col-lg-4 pl-5 pt-4">
                                    <h6 className="justify-content-left d-flex listTitleSection">Increase productivity with our powerful
                                        <br /> chrome extension. Build prospecting  <br />lists in minutes.
                                    </h6>
                                    <div className="listSection">
                                        <ul className="m-0 pb-2">
                                            <li>Find contact information for prospects <br /> from across the web</li>
                                            <li>No long term contracts to sign</li>
                                            <li>Easily connect Salesforce and other <br /> tools your team uses</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <h1 className="justify-content-center d-flex mt-3 mb-4 alignCenter titleHeaderDesign">Increase efficiency for your entire sales team</h1>
                            <div className="row justify-content-center d-flex">
                                <div className="embed-responsive embed-responsive-16by9 col-md-6">
                                    <iframe className="embed-responsive-item" title="video" src="https://fast.wistia.net/embed/iframe/nzb9witd22" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="pt-0">
                        <h1 className="justify-content-center d-flex mt-3 mb-3 titleHeaderDesign">Who We Help ?</h1>
                        <div className="container">
                            <div className="row mt-5">
                                {this.state.help.map((help, index) => { return (<HelpCard help={help} index={index} />) })}
                            </div>
                        </div>
                    </section>
                </div>
                <div className="clientFeddback justify-content-left d-flex">
                    <div className="container">
                        <h2 className="mt-3 mb-3 text-white titleHeaderDesign pl-5">What Our Clients Say About Us</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-xl-4"><img src="/img/client-comment.jpg" alt="comment" className="img-fluied" /></div>
                    <div className="col-md-2 col-lg-1" />
                    <div className="col-md-4 col-lg-4  col-xl-4 clientFeedbackText">
                        <div className="justify-content-left d-flex mt-5">
                            <span><img src="/img/quote-left-1.png" className="quoteDesign" alt="quote" /></span>
                            <p className="clientFeedback pl-4">LeadIQ presents a solution that allows us to collect and organize leads quick and efficiently. We now collect more data and have significantly lowered our bounceback rate.</p>
                        </div>
                        <p className="font-weight-bold mb-2 rolePerson">Jack Matsen</p>
                        <p className="roleDesign mb-0">Senior Account Executive, Adstage</p>
                    </div>
                    <div className="col-md-2 col-lg-3" />
                </div>
                <div className="container">
                    <section>
                        <div className="row mt-3">
                            <div className="ol-md-1 col-lg-1 mb-3" />
                            <div className="col-md-4 col-lg-4 mb-3">
                                <div className="justify-content-center d-flex">
                                    <img src="/img/leadIq-solo.png"  alt="leadIq-solo" className="img-fluied mb-3" />
                                </div>
                                <p className="justify-content-center d-flex mb-3 alignCenter premiumTitle">Get more leads faster  <br /> $60/month</p>
                                <div className="justify-content-center d-flex mb-5">
                                    <Subscribe size="lg" />
                                </div>
                                <div className="pb-3">
                                    <img src="/img/tick-icon.png" alt="icon" />
                                    <label className="premium-list-text">Build campaigns of up to 300 prospects per month</label>
                                </div>
                                <div className="pb-3">
                                    <img src="/img/tick-icon.png" alt="icon" />
                                    <label className="premium-list-text">See millions of crowdsourced emails as you browse the web</label>
                                </div>
                                <div>
                                    <img src="/img/tick-icon.png" alt="icon" />
                                    <label className="premium-list-text">Detect existing prospects in Salesforce</label>
                                </div>
                                <div>
                                    <img src="/img/tick-icon.png" alt="icon" />
                                    <label className="premium-list-text">30 free premium credits per month</label>
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-2 mb-3">
                                <div className="splitter-line"></div>
                            </div>
                            <div className="col-md-4 col-lg-4 mb-3">
                                <div className="justify-content-center d-flex">
                                    <img src="/img/leadIq-team.png" alt="leadIq-team" className="img-fluied mb-3" />
                                </div>
                                <p className="justify-content-center d-flex mb-3 alignCenter premiumTitle">Empower your sales team with  <br /> powerful collaboration tools</p>
                                <div className="justify-content-center d-flex mb-4">
                                    <SalesTalk size="lg" />
                                </div>
                                <h6 className=" justify-content-center d-flex mb-3 font-weight-bold">Integrations</h6>
                                <div className="row mb-2 justify-content-center d-flex">
                                    {this.state.partners.map((partner, index) => { return (<img src={partner.imageUrl} key={index} alt={partner.label} className={partner.addCls} />) })}
                                </div>
                                <div className="pb-2">
                                    <img src="/img/tick-icon.png" alt="icon" />
                                    <label className="premium-list-text">All LeadIQ Solo features</label>
                                </div>
                                <div className="pb-2">
                                    <img src="/img/tick-icon.png" alt="icon" />
                                    <label className="premium-list-text">Unlimited Campaigns</label>
                                </div>
                                <div className="pb-2">
                                    <img src="/img/tick-icon.png" alt="icon" />
                                    <label className="premium-list-text">Get 100 free premium credits per month</label>
                                </div>
                            </div>
                            <div className="col-md-1 col-lg-1 mb-3" />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}