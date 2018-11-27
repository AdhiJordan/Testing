import React from 'react';

export default class CustomerClientCard extends React.Component {

    render() {
        return (
            <div className="col-md-2 col-lg-2 text-center pb-3" key={this.props.clients.title}>
                <img src={this.props.clients.imageUrl} alt={this.props.clients.title} />
            </div>
        )
    }
}