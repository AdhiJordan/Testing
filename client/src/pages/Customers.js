 import React from 'react';
import sliderImages from './../data/customer-slider-images.json';
import customerBlogs from './../data/customer-blog.json';
import clients from './../data/customer-clients.json';
import quotes from './../data/customer-quotes.json';
import CustomerClientCard from '../components/cards/CustomerClientCard';
import CustomerImageSliderCard from '../components/cards/CustomerImageSliderCard';
import CustomerQuotesCard from '../components/cards/CustomerQuotesCard';
import CustomerQuotesContentCard from '../components/cards/CustomerQuotesContentCard'; 
import CustomerBlogCard from '../components/cards/CustomerBlogCard';

export default class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: sliderImages,
            clients: clients,
            quotes: quotes,
            width: 0,
            displayContent: false,
            customerBlogs: customerBlogs
        };
    }


    componentDidMount() {
        if (window.outerWidth <= 768) {
            this.setState({
                width: window.outerWidth,
                displayContent: true
            })
        } else {
            this.setState({
                width: window.outerWidth
            })
        }
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" className=""></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3" className=""></li>
                    </ol>
                    <div className="carousel-inner">
                        {this.state.images.map((image, index) => { return (<CustomerImageSliderCard images={image} key={index} />) } )}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="waveDesignCampaign">
                    <img src="/img/wave-four.png" className="img-fluied imageWaveCampaign" alt="wave" />
                </div>
                <section>
                    <div className="row  pl-5 pr-5">
                        {this.state.clients.map((client, index) => { return (<CustomerClientCard clients={client} key={index} />) })}
                    </div>
                </section>
                <div id="carouselQuotesExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselQuotesExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselQuotesExampleIndicators" data-slide-to="1" className=""></li>
                        <li data-target="#carouselQuotesExampleIndicators" data-slide-to="2" className=""></li>
                    </ol>
                    <div className="carousel-inner">
                        {this.state.quotes.map((quote, index) => { return (<CustomerQuotesCard quotes={quote} key={index} />) })}

                        {(this.state.displayContent === true) ? <CustomerQuotesContentCard /> : null}
                    </div>
                    <a className="carousel-control-prev" href="#carouselQuotesExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselQuotesExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <section>
                    <div className="container">
                        <p className="text-center fa-2x" style={{color: "#8099bd"}}>Our customers are the best prospectors in the world.</p>
                        <p className="text-center fa-2x" style={{ color: "#8099bd" }}>Here’s where we’ve featured them.</p>

                        {(this.state.customerBlogs.map((blog, index) => { return (<CustomerBlogCard blog={blog} key={index} /> ) }))}

                    </div>
                </section>
            </div>
        );
    }

}