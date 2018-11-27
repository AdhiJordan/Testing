import React from 'react';
import ReadMore from '../buttons/ReadMore';

class TestimonialCard extends React.Component {

    render() {
        return (
            <div className="row">
                <div className={(this.props.browserVersion === "IE 11" || this.props.browserVersion === "IE 10" ||
                    this.props.browserVersion === "IE 9") ? "col-md-3" : "col-md-3 v-middle"}>
                    <div className="media quote ">
                        <img src="/img/quotes.png" className="img-fluid mr-3" alt="Quote" />
                        <div className="media-body">
                            <h2 className="liq-text-primary mb-0">David Zwerin</h2>
                            <p>VP of Sales Operations, TripActions</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 v-middle">
                    <img src="/img/leadIq-testimonal-image.png" className="img-fluid" alt="avatar" />
                </div>
                <div className="col-md-6 v-middle">
                    <blockquote className="blockquote">“In just two weeks, we brought in 6 new opportunities sourced by LeadIQ. ” <br /> <ReadMore size="lg" /></blockquote>
                </div>
            </div>
        );
    }
}

export default TestimonialCard;