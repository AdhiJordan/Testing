import React from 'react';
import { Link } from "react-router-dom";

class PodcastAudio extends React.Component {

    render() {
        return (
            <div className="blog-cover">
                <div className="container">
                    <section>
                        <div className="text-center">
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className="mt-3 mb-3">
                            <hr />
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4 col-lg-4">
                                <img src={this.props.image} className="img-fluied" alt={this.props.title} />
                            </div>
                            <div className="col-md-8 col-lg-8">
                                <p>{this.props.description}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default PodcastAudio;