import React from 'react';

class FreeLeads extends React.Component {

    render() {
        return (
            <a href="https://account.leadiq.com/app/signup/" rel="noopener noreferrer"  className={"mt-2 btn liq-btn-primary button-design liq-btn-primary-" + this.props.size}>100 LEADS FREE</a>
        );
    }
}

export default FreeLeads;