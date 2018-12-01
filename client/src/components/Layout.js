import React from 'react';
import TopNav from './TopNav';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
   
    render() {
        return (
            <div>
                <TopNav />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;