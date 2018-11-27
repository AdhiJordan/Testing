import React from 'react';
import { Link } from "react-router-dom";

class GetTryFree extends React.Component {

    render() {
        return (
            <Link to="/"  className={"mt-2  btn liq-btn-primary freeTextDesign liq-btn-primary-" + this.props.size}>Try it Free</Link>
        );
    }
}

export default GetTryFree;