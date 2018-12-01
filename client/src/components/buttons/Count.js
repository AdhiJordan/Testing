import React from 'react';

class Count extends React.Component {

    render() {
        return (
            <a href="/" className={"btn liq-btn-primary liq-btn-primary-" + this.props.size}>COUNT ME IN!</a>
        );
    }
}

export default Count;