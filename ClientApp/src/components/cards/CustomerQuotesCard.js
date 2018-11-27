import React from 'react';

export default class CustomerQuotesCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className={"carousel-item " + this.props.quotes.addCls} key={this.props.quotes.title}>
                <img src={this.props.quotes.imageUrl} className="d-block w-100" alt={this.props.quotes.title} />
                <div className="carousel-edit-caption d-none d-md-block">
                    <h4 className="liq-text-primary">{this.props.quotes.title}</h4>
                    <p style={{color: "#000"}}>{this.props.quotes.quote}</p>
                </div>
            </div>
        )
    }
}