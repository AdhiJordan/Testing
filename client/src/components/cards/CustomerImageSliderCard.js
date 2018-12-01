import React from 'react';

export default class CustomerImageSliderCard extends React.Component {

    render() {
        return (
            <div className={"carousel-item " + this.props.images.addCls} key={this.props.images.title}>
                <img src={this.props.images.imageUrl} className="d-block w-100" alt={this.props.images.title} />
                <div className="carousel-caption-content d-none d-md-block">
                    <h3>{this.props.images.description}</h3>
                </div>
            </div>

        )
    }
}