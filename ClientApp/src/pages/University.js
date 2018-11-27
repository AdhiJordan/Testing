import React from 'react';
import { Link } from "react-router-dom";
import AccessUniversity from '../components/buttons/AccessUniversity';

class University extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="imageDesignUniversityHeader">
                    <section className="universityHeaderMain">
                        <div className="container mt-5">
                            <div className="row mb-5">
                                <div className="col-md-3 col-ls-3 col-xl-3">
                                    <img src="/img/logo-university.png" alt="art board" className="img-fluied justify-content-center d-flex" />
                                </div>
                                <div className="col-md-9 col-ls-9 col-xl-9" />
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <h1 className="liq-text-primary">Ditch the Database - Close Deals faster</h1>
                                    Start closing deals faster with thoughtful prospecting and campaign-based outreach. We wrote these guides to walk you through using LeadIQ (and other tools) to get things done. Follow these workflows, and you will be successful.
                                    <div className="mt-5">
                                        <AccessUniversity size="lg" />
                                    </div>
                                    <p className="mt-5">Already have a LeadIQ account . <a href="https://account.leadiq.com/app/signin/" ><mark className="hightlightText"> Login here.</mark></a></p>
                                </div>
                                <div className="col-md-1" />
                                <div className="col-md-5">
                                    <img src="/img/artBoard.png" alt="art board" className="img-fluied" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="imageDesignUniversityHeader">
                <div className="container mt-5">
                        <section className="universityHeaderMain">
                        <div className="row mb-3">
                            <div className="col-md-3 col-ls-3 col-xl-3 accountTextTitle mt-3">
                                <h3>Lessons</h3>
                                <p className="labelUniversityOne">The ultimate <br /> sales prospecting toolkit</p>
                            </div>
                            <div className="col-md-9 col-ls-9 col-xl-9 justify-content-end d-flex mt-5">
                                    <label className="accountLogin labelUniversityOne">To get access,
                                        <a href="https://account.leadiq.com/app/signup/?referralCode=summershowdown" >    
                                            <mark className="highlightText">create a free account.</mark> 
                                        </a>
                                        <br />if you already have a leadIQ account ,
                                        <a href="https://account.leadiq.com/app/signin/" >
                                            <mark className="highlightText">click here to login</mark>
                                        </a>
                                   </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-md-4 col-ls-4 col-xl-4 mb-3">
                                <img src="/img/why-leadIq.png" className="img-fluied" alt="" />
                                <p className="justify-content-center d-flex mt-3 mb-3"><mark className="highlightText">Why LeadIQ</mark></p>
                            </div>
                            <div className="col-md-4 col-ls-4 col-xl-4 mb-3">
                                <img src="/img/list-building.png" className="img-fluied" alt="" />
                                <p className="justify-content-center d-flex mt-3 mb-3"><mark className="highlightText">List Building</mark></p>
                            </div>
                            <div className="col-md-4 col-ls-4 col-xl-4 mb-3">
                                <img src="/img/sales-outreach.png" className="img-fluied" alt="" />
                                <p className="justify-content-center d-flex mt-3 mb-3"><mark className="highlightText">Sales Outreach</mark></p>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <h1 className="text-center">What's Included</h1>
                        <div className="row">
                            <div className="col-md-3" />
                            <div className="col-md-6">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://fast.wistia.net/embed/iframe/nzb9witd22" title="video" allowFullScreen />
                                </div>
                                <div className="mt-5 text-center">
                                    <AccessUniversity size="lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default University;