import React from 'react';
import { Link } from "react-router-dom";

class FreeLeads100 extends React.Component {

    render() {
        return (
            <Link to="/get-100-free-leads" className={"mt-2 mr-2 btn liq-btn-primary demo-button-design liq-btn-primary-" + this.props.size}>100 FREE LEADS</Link>
        );
    }
}

export default FreeLeads100;