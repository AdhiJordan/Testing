import React from 'react';

class RyanOHara extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body card-blog">
                        <div className="media">
                            <img className="mr-3 rounded-circle" src='/img/Ryan-OHara-Headshot.png' alt='Ryan OHara' height="200px" />
                            <div className="media-body">
                                <h2 className="mt-0">Author: Ryan O'Hara</h2>
                                Ryan O'Hara has been an early employee at several startups helping them with marketing and prospecting tactics, including Dyn who was acquired by Oracle for $600+ million in 2016. He's had prospecting campaigns featured in Fortune, Mashable, and TheNextWeb. Ryan specializes in branding, business development, prospecting, and coaching people on how to make good digital first impressions. He also mentors two accelerators, The Iron Yard and The Alpha Loft, and hosts The Prospecting Podcast.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RyanOHara;