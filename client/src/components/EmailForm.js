 import React, { Component } from 'react';
import GetTryFree from '../components/buttons/GetTryFree';

export default class EmailComponent extends Component {
    render() {
        return (
            <div className="mt-5">
                <form id="free-leads-form">
                    <div className="form-group container" id="email-field">
                        <div className="row justify-content-center d-flex">
                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 row justify-content-end d-flex">
                                <div className="col-7 col-sm-7 col-md-6 col-lg-6 col-xl-6 tryFreeDesign">
                                    <i className="fa fa-envelope email-envlope"></i>
                                    <input type="email" className="form-control  email-text pr-2"
                                        id="email" name="email" placeholder="Email" required="required" />
                                </div>
                                <div className="col-5 col-sm-5 col-md-4 col-lg-4 col-xl-4 tryFreeDesign"><GetTryFree size="lg" /> </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}