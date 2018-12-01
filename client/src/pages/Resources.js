import React, { Component } from 'react';
import StayConnected from '../components/buttons/StayConnected';
import ResourceCard from '../components/cards/ResourceCard';
import resources from "./../data/resources.json";

export default class Resources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: resources
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="cover">
                    <div className="d-none d-md-block">
                        <img src="/img/resource-home-cover.png" className="img-fluied" alt="resource-home-cover" />
                    </div>
                    <div className="cover-content">
                        <div className="container">
                            <section>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1>Resources</h1>
                                        <p>
                                            Help yourself to our collection of sales materials that will help you upgrade your sales processes.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-5 row">
                                    <div className="col-md-6">
                                        <form id="free-leads-form">
                                            <div className="form-group container" id="email-field">
                                                <div className="row">
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row">
                                                        <div className="col-7 col-sm-7 col-md-8 col-lg-8 col-xl-8 tryFreeDesign">
                                                            <input type="email" className="form-control resourcesEmail"
                                                                id="email" name="email" placeholder="Email" required="required" />
                                                        </div>
                                                        <div className="col-5 col-sm-5 col-md-4 col-lg-4 col-xl-4 tryFreeDesign"><StayConnected size="lg" /> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <div className="row">
                            {this.state.resources.map((resource, index) => { return (<ResourceCard resource={resource} />); })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}