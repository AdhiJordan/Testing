import React from 'react';
import quotes from './../../data/customer-quotes.json';

export default class CustomerQuotesContentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: quotes
        };
    }

    render() {
        return (
            <div id="carouselQuotesContentExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {
                        this.state.quotes.map((quote, index) => {
                            return (
                                <div key={index} className={"carousel-item pl-3 pr-3 " + quote.addCls}>
                                    <h3 className="liq-text-primary">{quote.title}</h3>
                                    <p>{quote.quote}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}