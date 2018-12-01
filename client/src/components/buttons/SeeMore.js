import React from 'react';
import { Link } from "react-router-dom";

class SeeMore extends React.Component {

    render() {
        return (
            <Link to={"/" + this.props.data} className={"mt-2 mb-3 btn liq-btn-primary liq-btn-primary-" + this.props.size}>See More</Link>
        );
    }
}

export default SeeMore;