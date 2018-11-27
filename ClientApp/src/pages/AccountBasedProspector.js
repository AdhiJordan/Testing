import React, { Component } from 'react';
import FreeLeads from '../components/buttons/FreeLeads';
import GetStarted from '../components/buttons/GetStarted';

export default class AccountBasedProspector extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="campaign">
                    <div className="videoCoverCampaign">
                        <video autoPlay loop>
                            <source src="/video/account-video.mp4" />
                        </video>
                    </div>
                    <div className="container overlay">
                        <section className="pt-5">
                            <h1 className="text-white text-center"><b>Account Based Prospector</b></h1>
                            <div className="text-center mt-2">
                                <GetStarted size="lg" />
                            </div>
                        </section>
                    </div>
                </div>
                <div className="waveDesignCampaign">
                    <img src="/img/wave-four.png" className="img-fluied imageWaveCampaign" alt="wave" />
                </div>

                <section>
                    <div className="row">
                        <div className="col-md-6 col-lg-6 leftTextAlign">
                            <h1 className="prospectTitleText pl-4">Add leads right into your sales platforms in one click.</h1>
                            <p className="pl-4">Adding data into platforms like Salesforce is a huge pain. Campaign Builder streamlinesadding prospects from the web to Salesforce, Outreach, and SalesLoft in one simple click. </p>
                        </div>
                        <div className="col-md-6 col-lg-6 rightImageAccountCover" />
                    </div>
                </section>
                <div className="waveProspectListBg">
                    <div className="container text-center pt-4">
                            <h1 className="text-center prospectTitleText pt-3">Add prospects to campaigns as you browse our data.</h1>
                            <img src="/img/account-based-laptop-third.png" className="img-fluied mt-5" alt="account-based-laptop-third" />
                            <p className="mt-3 mb-4">Hand pick what prospects are most important to you, and add them to your campaigns inside Campaign Builder. Import prospects into Salesforce as Leads or Contacts in one easy click.</p>
                    </div>
                </div>
                <div>
                    <section>
                        <div className="row waveBottomDesign pt-5 ">
                            <div className="col-md-6 col-lg-6 leftImageAccountCover" />
                            <div className="col-md-6 col-lg-6 rightTextAlign">
                                <h1 className="prospectTitleText pl-4">Find prospects uploading spreadsheets</h1>
                                <p className="pl-4">Every month, new accounts get assigned. Upload a CSV of your accounts and titles,and let LeadIQ find the best matching prospects with full contact information.</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1 className="prospectTitleText justify-content-center d-flex mt-5 pt-5 mb-5 textAlign"><b>Build Up Pipeline Faster</b></h1>
                        <div className="justify-content-center d-flex mb-5 pb-5">
                            <FreeLeads size="lg" />
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}