import React, { Component } from 'react';

export default class HelpCard extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-3 col-ls-3 mb-3" key={this.props.index}>
                <div className=" justify-content-center d-flex mb-3">
                    <img className="img-fluied" src={this.props.help.imageUrl} alt={this.props.help.title} />
                </div>
                <h5 className="justify-content-center d-flex mb-3 helpHeaderTitle">{this.props.help.title}</h5>
                <p className="justify-content-center d-flex alignCenter helpDetails mb-3">{this.props.help.description.replace(/([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)/g, "\"$1\":\"$2\"")}</p>
            </div>
        )
    }
}