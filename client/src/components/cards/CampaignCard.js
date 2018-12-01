import React from 'react';

class CampaignCard extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-lg-4" key={this.props.campaign.description}>
                <img src={this.props.campaign.imageUrl} className="img-fluied boxImageCampaign" alt="campaign-url" />
                <p className="mt-3">{this.props.campaign.description}</p>
            </div>
        );
    }
}

export default CampaignCard;