import fm from 'front-matter';
import marked from 'marked';
import React from 'react';
import PodcastAudio from "../components/PodcastAudio";
import PodcastVideo from "../components/PodcastVideo";
import TopNav from "../components/TopNav";
import Helmet from 'react-helmet';



class PodcastDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            podcast: null,
            podcastContent: ""
        };
    }

    componentDidMount() {

        try {
            const blogPath = require("./../podcasts/" + this.props.match.params.podcastId + ".md");

            fetch(blogPath)
                .then(response => { return response.text(); })
                .then(text => {
                    this.setState({
                        podcast: fm(text),
                        podcastContent: marked(fm(text).body)
                    });
                });

        } catch (e) {
            console.log(e);
        }

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                {
                    this.state.podcast &&
                    <div>
                        <TopNav />
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>{this.state.podcast.attributes.metaTitle}</title>
                            <meta name="description" content={this.state.podcast.attributes.metaDescription} />
                            <meta name="keywords" content={this.state.podcast.attributes.metaKeywords} />
                        </Helmet>

                        <PodcastAudio
                            title={this.state.podcast.attributes.title}
                            description={this.state.podcast.attributes.description}
                            image={this.state.podcast.attributes.coverImage}
                            link={this.state.podcast.attributes.refLink}
                        />
                        <div className="blog-container">
                            <div className="container">
                                <div className="card">
                                    <div className="card-body card-blog" dangerouslySetInnerHTML={{ __html: this.state.podcastContent }} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default PodcastDetails;