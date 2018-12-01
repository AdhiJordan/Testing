import React from 'react';
import { Link } from "react-router-dom";

class Number extends React.Component {

    render() {
        return (
            <Link to="/" className={"mt-2 btn  liq-btn-primary numberDesign liq-btn-primary-" + this.props.size}>1-888-653-2347</Link>
        );
    }
}

export default Number;