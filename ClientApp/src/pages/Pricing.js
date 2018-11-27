import React from 'react';
import FreeLeads from '../components/buttons/FreeLeads';
import SalesTalk from '../components/buttons/SalesTalk';
import Subscribe from '../components/buttons/Subscribe';
import partner from "./../data/partners-free-leads.json";
import axios from 'axios';

export default class Pricing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: partner
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="container pricingSection">
                    <section>
                        <div className="row justify-content-center d-flex mb-5">
                            <div className="col-md-8">
                                <h3><mark className="highlightText">Prospect Smarter.</mark></h3>
                                <h3><mark className="highlightText">Build a lead list in minutes, not days.</mark></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 col-lg-2" />
                            <div className="col-md-4 col-lg-4 soloSection">
                                <div className="justify-content-center d-flex">
                                    <img src="/img/leadIq-solo.png" alt="leadIq-solo" className="img-fluied mb-3" />
                                </div>
                                <p className="justify-content-center d-flex mb-3 alignCenter premiumTitle">Get more leads faster<br />$60/month</p>
                                <div className="justify-content-center d-flex mb-5">
                                    <Subscribe size="lg" className="btn-xl" />
                                </div>
                                <div className="leadIqOffersText">
                                    <p>Build campaigns of up to 300 prospects per month</p>
                                    <p>See millions of crowdsourced emails as you browse the web</p>
                                    <p>Detect existing prospects in Salesforce</p>
                                    <p>30 free premium credits per month</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 teamSection">
                                <div className="justify-content-center d-flex">
                                    <img src="/img/leadIq-team.png" alt="leadIq-team" className="img-fluied mb-3" />
                                </div>
                                <p className="justify-content-center d-flex mb-3 alignCenter premiumTitle">Empower your sales team with  <br /> powerful collaboration tools</p>
                                <div className="justify-content-center d-flex mb-4 pt-1">
                                    <SalesTalk size="lg" />
                                </div>
                                <h6 className=" justify-content-center d-flex mb-3 font-weight-bold">Integrations</h6>
                                <div className="row mb-2 justify-content-center d-flex">
                                    {this.state.partners.map((partner, index) => {return (<img src={partner.imageUrl} key={index} alt="partner" className={partner.addCls} /> ) })}
                                </div>
                                <div className="leadIqOffersText">
                                    <p>All LeadIQ Solo features</p>
                                    <p>Unlimited Campaigns</p>
                                    <p>100 premium credits per month</p>
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-2" />
                        </div>
                    </section>
                </div>
                <div className="prospectLikePro">
                    <div className="container">
                        <section>
                            <div className="row ratingMobileDesign">
                                <div className="col-md-2 col-lg-2 ">
                                    <img src="/img/five-star-rating.svg" className="img-fluied" alt="rating" /><br />
                                    <label>April 3 , 2018</label>
                                    <p><mark>“Prospect <br /> Like A Pro.“</mark></p>
                                </div>
                                <div className="col-md-10 col-lg-10">
                                    <img src="/img/quotes.png" className="img-fluied" alt="quotes" /> <label><mark>Christy K</mark></label>
                                    <p><a href="https://www.g2crowd.com/products/leadiq/reviews" className="reviewPage">G2 Crowd verified review</a></p>
                                    <h3>12/10 would recommend!</h3>
                                    <p className="reviewText">LeadIQ has saved me so much time in my outbounding process. With the integration between LinkedIn Nav & SalesLoft, I can get multi-threaded by searching and simply importing them into a SalesLoft cadence.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="container">
                    <section>
                        <h3 className="justify-content-left d-flex mb-3"><b>Frequently Asked Questions (FAQs)</b></h3>
                        <p className="mb-0"><mark className="highlightText">Do you have a trial ?</mark></p>
                        <p className="answerText">We have a 7-day trial and during the trial period you will also be given 100 credits to use for free!</p>
                        <p className="mb-0"><mark className="highlightText">Where does LeadIQ gets its data?</mark></p>
                        <p className="answerText">We pull our data from publicly available sources. We also have machine learning that helps to validate contact details making LeadIQ one of the most accurat resources on the web for sales teams. We also perform 111 different queries per second to find and validate contact information. That’s a lot of mouse clicks!</p>
                        <p className="mb-0"><mark className="highlightText">How are you different than a database tool?</mark></p>
                        <p className="answerText">Database tools typically have very low quality data.They also reinforce mass messaging and outreach ,which we know is not effective. With LeadIQ we help you prospect smarter by giving you only the contact details you need. </p>
                        <p className="mb-0"><mark className="highlightText">What kind of support do you offer ?</mark></p>
                        <p className="answerText">In addition to in app support we also offer a robust knowledge base and coming soon a LeadIQ University. Our mission is to help sales teams prospect smarter and we work to make sure you have all the resources you need to maximize your outbound.</p>
                    </section>
                    <section>
                        <h1 className="justify-content-center d-flex mb-3 pipelineText">Build Up Pipeline Faster</h1>
                        <div className="justify-content-center d-flex">
                            <FreeLeads size="lg" />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
