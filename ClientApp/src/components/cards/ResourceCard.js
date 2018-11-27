import React from 'react';
import PrimaryButton from './../PrimaryButton';

class ResourceCard extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-lg-4">
                <div className="card card-resource mt-5" key={this.props.resource.title}>
                    <div className="card-body">
                        <h3>{this.props.resource.title}</h3>
                        <p>{this.props.resource.description}</p>
                    </div>
                    <div className="row justify-content-center d-flex">
                        <div className="col-md-6 justify-content-center d-flex">
                            <PrimaryButton text="SEE MORE" link={this.props.resource.link} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResourceCard;