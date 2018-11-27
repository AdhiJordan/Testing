import React from 'react';
class Demo extends React.Component {
    render() {
        return (
            <div>
                <a href="https://calendly.com/leadiq/trial-kickoff/" className={"mt-2 btn liq-btn-secondary button-design liq-btn-primary-" + this.props.size}>GET A DEMO</a>
            </div>
        );
    }
}

export default Demo;