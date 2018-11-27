import React from 'react';
import { Link } from "react-router-dom";

class PrimaryButton extends React.Component {

    render() {
        return (
            <Link to={"/" + this.props.link} className={"mt-2 mb-3 btn liq-btn-primary liq-btn-primary-" + this.props.size}>{this.props.text}</Link>
        );
    }
}

export default PrimaryButton;