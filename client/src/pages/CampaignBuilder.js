import React, { Component } from 'react';
import GetStarted from '../components/buttons/GetStarted';
import campaigns from "./../data/campaigns.json";
import FreeLeads from '../components/buttons/FreeLeads';
import CampaignCard from '../components/cards/CampaignCard';

export default class CampaignBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaign: campaigns
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="campaign">
                    <div className="videoCoverCampaign">
                        <video autoPlay loop>
                            <source src="/video/campaign-cover-video.mp4" />
                        </video>
                    </div>
                    <div className="container overlay">
                        <section className="pt-5">
                            <h1 className="text-white text-center"><b>Campaign Builder</b></h1>
                            <h4 className="text-white text-center mt-3">Organize and Speed Up Your Team’s Prospecting</h4>
                            <div className="text-center mt-2">
                                <GetStarted size="lg"  />
                            </div>
                        </section>
                    </div>
                </div>

                <div className="waveDesignCampaign">
                    <img src="/img/wave-four.png" className="img-fluied imageWaveCampaign" alt="wave" />
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-6 leftImageCover" />
                    <div className="col-md-6 col-lg-6 rightTextAlign">
                        <h1 className="prospectTitleText pl-4">Outbound like a pro.</h1>
                        <p className="pl-4">The best sales teams work together, and organize their prospecting efforts.</p>
                        <p className="pl-4">Campaign Builder organizes your sales team’s prospecting, and increases productivity.</p>
                    </div>
                </div>
                <section>
                    <div className="row">
                        <div className="col-md-6 col-lg-6 leftTextAlign">
                            <h1 className="prospectTitleText pl-4">Add leads right into your sales platforms in one click.</h1>
                            <p className="pl-4">Adding data into platforms like Salesforce is a huge pain. Campaign Builder streamlinesadding prospects from the web to Salesforce, Outreach, and SalesLoft in one simple click. </p>
                        </div>
                        <div className="col-md-6 col-lg-6 rightImageCover" />
                    </div>
                </section>
                <div className="waveProspectListBg">
                    <div className="container text-center">
                        <h1 className="text-center prospectTitleText pt-5">Make more intelligent prospect lists.</h1>
                        <section>
                            <img src="/img/prospect-laptop-one.png" className="img-fluied" alt="prospect-laptop-one" />
                        </section>
                        <p className="pb-4">Detect existing prospects from Salesforce as you build your prospecting campaigns.</p>
                    </div>
                </div>
                <section>
                    <div className="row waveContactDesign pt-5">
                        <div className="col-md-6 col-lg-6 leftCampaignImage" />
                        <div className="col-md-6 col-lg-6 rightTextAlign">
                            <h1 className="prospectTitleText pl-4">Find Your Prospect’s Contact Data in Real-time</h1>
                            <p className="pl-4">Finding and contact data isn’t a good use of your sales team’s time.</p>
                            <p className="pl-4">Neither is checking a database, then jumping between several tabs in your browser.</p>
                            <p className="pl-4">We search for contact information that directly imports into your prospecting campaigns, while simultaneously adding them to your sales platforms.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h1 className="prospectTitleText text-center">There are 3 ways to import leads into a campaign.</h1>
                        <div className="row mt-5 text-center">{this.state.campaign.map((campaigns, index) => { return (<CampaignCard campaign={campaigns} key={index} />); })}</div>
                    </div>
                </section>
                <section>
                    <h1 className="prospectTitleText text-center mt-5 pt-5 mb-5"><b>Build Up Pipeline Faster</b></h1>
                    <div className="justify-content-center d-flex mb-5 pb-5">
                        <FreeLeads size="lg" />
                    </div>
                </section>
            </div>
        )
    }
}