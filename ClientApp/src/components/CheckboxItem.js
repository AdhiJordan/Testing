import React from 'react';

class CheckboxItem extends React.Component {

    render() {
        return (
            <li className="media">
                <img className="check-icon ml-0" src="/img/checkbox.png" alt="Check" height="16" />
                <div className="media-body">{this.props.text}</div>
            </li>
        );
    }
}

export default CheckboxItem;