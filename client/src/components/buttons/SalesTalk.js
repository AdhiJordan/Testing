import React from 'react';
class SalesTalk extends React.Component {

    render() {
        return (
            <a href="https://calendly.com/leadiq/trial-kickoff/" className={"mt-2 btn liq-btn-primary  button-design liq-btn-primary-" + this.props.size}>TALK TO SALES</a>
        );
    }
}

export default SalesTalk;