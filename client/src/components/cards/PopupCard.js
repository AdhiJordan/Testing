import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class PopupCard extends Component {
    render() {
        return (
            <div className="col-md-6" key={this.props.data.title}>
                <Link to={this.props.data.linkUrl} className="popupData">
                    <h6 className="dropdown-item p-0"><b>{this.props.data.title}</b></h6>
                </Link>
                <p>{this.props.data.description}</p>
            </div>
        )
    }
}