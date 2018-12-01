import React from 'react';
import FreeLeads from '../components/buttons/FreeLeads';
import podcastAudioLists from './../data/podcast-audio-lists.json';
import PodcastCards from '../components/cards/PodcastCards';
import { Link } from "react-router-dom";

class Podcast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            podcasts: podcastAudioLists
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <div>
                <div>
                    <div className="privacy-Cover">
                        <div className="container prospectHeaderTitle">
                            <section className="pt-5 gettingStarted">
                                <h1 className="text-white text-center  mb-4 fa-2x prospectText"><b>Podcast</b></h1>
                                <p className="text-white text-center mb-4" style={{ fontWeight: "400" }}>LeadIQ not only provides great sales products. We also share content that will help you maximize your sales.</p>
                                <div className="justify-content-center d-flex">
                                    <FreeLeads size="lg" />
                                </div>
                            </section>
                        </div>

                    </div>
                    <div className="faq-waveDesign">
                        <img src="/img/wave-four.png" className="img-fluied faq-waveDesignProspect" alt="wave" />
                    </div>
                    <div className="blog-container">
                        <div className="container">
                            <div className="card">
                                <div className="card-body card-blog">
                                    <div className="row">
                                        {
                                            this.state.podcasts.map((podcast, index) => {
                                                return (
                                                    <div className={(index % 4 === 0 || (index + 1) % 4 === 0) ? "col-md-7 col-lg-7 pt-3 pb-3" : "col-md-5 col-lg-5 pt-3 pb-3"}>
                                                        <Link to={"/podcasts/" + podcast.url}>
                                                            <div className="blog-card-design" style={{ backgroundImage: 'linear-gradient(-180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) , url(${podcast.coverImage})' }}>
                                                                <div className="customer-card-text">
                                                                    <h3 className="text-white">{podcast.title}</h3>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Podcast;