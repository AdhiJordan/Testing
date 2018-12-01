import React from 'react';
import { Link } from "react-router-dom";

class BackToLessons extends React.Component {

    render() {
        return (
            <Link to="/category" className="btn liq-btn-primary mt-2">BACK TO LESSONS</Link>
        );
    }
}

export default BackToLessons;