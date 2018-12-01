import React, { Component } from 'react';
import VideoCard from '../components/cards/VideoCard';
import videos from "./../data/videos.json";

export default class PublicSalesAnnouncements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: videos
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="cover">
                    <div className="d-none d-md-block">
                        <img src="/img/sales-home-cover.png" className="img-fluied" alt="cover" />
                    </div>
                    <div className="cover-content">
                        <div className="container">
                            <section>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1>Public Sales Announcement</h1>
                                        <p> Prospecting videos with a twist of Ryan O’Hara.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <section>
                    <div className="container">
                        <div className="row">
                            {this.state.videos.map((video, index) => { return (<VideoCard video={video} />); })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}