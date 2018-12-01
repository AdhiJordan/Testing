import React from 'react';

class AccessUniversity extends React.Component {

    render() {
        return (
            <a href="https://account.leadiq.com/app/get-started/"  className={"mt-2 btn liq-btn-primary liq-btn-primary-" + this.props.size}>ACCESS THE UNIVERSITY</a>
        );
    }
}

export default AccessUniversity;