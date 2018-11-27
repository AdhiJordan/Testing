import React from 'react';

class QuoteCard extends React.Component {
    render() {
        return (
            <div className="mt-5 mb-5">
                <div className="card card-quote">
                    <img src="/img/double-quotes.png" className="img-quote" alt="quote" />
                    <div className="card-body">
                        <p>{this.props.text}</p>
                        <p className="text-right">- {this.props.author}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuoteCard;