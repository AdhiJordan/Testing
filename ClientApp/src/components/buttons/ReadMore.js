import React from 'react';
import { Link } from "react-router-dom";

class ReadMore extends React.Component {

    render() {
        return (
            <Link to="/tripactions-case-study"  className={"mt-4 btn liq-btn-primary button-design liq-btn-primary-" + this.props.size}>READ MORE</Link>
        );
    }
}

export default ReadMore;