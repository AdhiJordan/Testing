import React from 'react';

class Subscribe extends React.Component {

    render() {
        return (
            <a href="https://account.leadiq.com/app/signup/"  className={"mt-2 btn liq-btn-primary  button-design liq-btn-primary-" + this.props.size}>SUBSCRIBE NOW</a>
        );
    }
}

export default Subscribe;