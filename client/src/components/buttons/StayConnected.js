import React from 'react';
import { Link } from "react-router-dom";

class StayConnected extends React.Component {

    render() {
        return (
            <Link to="/"  className={"btn liq-btn-primary freeTextDesign liq-btn-primary-" + this.props.size}>Stay Connected</Link>
        );
    }
}

export default StayConnected;