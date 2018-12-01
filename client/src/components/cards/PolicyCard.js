import React from 'react';

class PolicyCard extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-5 col-lg-5">
                    {(this.props.width >= 1024) ? null : <h4><mark className="liq-text-primary">Legal Rights</mark></h4> }
                    <p>{this.props.policy.legalRights}</p>
                </div>
                <div className="col-md-7 col-lg-7">
                    {(this.props.width >= 1024) ? null : <h4><mark className="liq-text-primary">Your Rights Under the GDPR</mark></h4>}
                    <p>{this.props.policy.GDPR}</p>
                </div>
            </div>
        );
    }
}

export default PolicyCard;