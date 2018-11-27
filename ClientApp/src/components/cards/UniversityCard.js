import React from 'react';
import JoinUniversity from './../../components/buttons/JoinUniversity';

class UniversityCard extends React.Component {

    render() {
        return (
            <div className="university-section">
                <div className="container">
                    <section>
                        <div className="row">
                            <div className="col-sm-6 col-md-4 mb-3">
                                <img src="/img/logo-university.png" className="img-fluid mb-3" alt="logo" />
                                <JoinUniversity />
                            </div>
                            <div className="col-sm-12 col-md-4 mb-3">
                                <small>
                                    We believe that prospecting should be fun and thoughtful. LeadIQ was built with research first prospecting in mind. Learn how you can drive sales with thoughtful outreach tactics using the power of LeadIQ’s platform.
                                </small>
                            </div>
                            <div className="col-sm-12 col-md-4 mb-3">
                                <img src="/img/artBoard.png" className="img-fluid" alt="ArtBoard" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default UniversityCard;