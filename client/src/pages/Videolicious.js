import React, { Component } from 'react';
import QuoteCard from '../components/cards/QuoteCard';

export default class Videolicious extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="videoliciousCover">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2" />
                            <div className="col-md-8">
                                <div className="card card-excuse">
                                    <div className="card-body pt-5 pb-5">
                                        <h2>“There are over 18 billion video views a day.”</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-0 col-sm-0 col-md-2" />
                        </div>
                    </div>
                </div>

                <div className="wave-help-design"></div>
                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">
                                <p>It’s been 15 days since you last heard from your prospect. All hope is dimming. Calling, social, and emailing are equating to radio silence. The cold shoulder and silence of your prospect sinks in like deep space. With low fuel and your bag full of tricks near empty, you send your prospect a video, beaming 30 frames per second into your prospect’s heart. The ice instantly melts. </p>
                                <p>The average person is consuming over one hour of video everyday. Videolicious is helping sales reps everywhere use video to connect with prospects. Whether a rep is reaching out to a complete stranger or an existing customer, Videolicious makes video prospecting easy. </p>
                                <QuoteCard
                                    text="“When you buy something on Amazon, you watch a video to see how the product works. Why not recreate the same experience for your prospects?“"
                                    author="Charles Moreton"
                                />
                                <p>When it comes to prospecting, having data is a given. Videolicious already uses several data providers for contact information. However, there struggled in one area. Making the data work for their sales team’s workflow. That’s where LeadIQ comes in. </p>
                                <QuoteCard
                                    text="“The benefit to LeadIQ is speed. It’s not that we can't get data other places.  We have multiple data sources and there are a million out there. LeadIQ helps most with speeding up our team reaching out to new prospects.”"
                                    author="Charles Moreton"
                                />
                                <p>Growth is explosive at Videolicious. Sales is growing 80-90% a year, which means 30-40% quarter to quarter growth. Last year, Videolicious’ average deal size was around $15-20K. Today there average deal size is over $150K.</p>
                                <p>More teams are adopting video prospecting because it helps humanize reps doing outreach, and it’s working.  </p>
                                <p>Most of Videolicious’ reps work off researching their prospects on the web. Whether they are browsing a team page, or studying a prospect’s LinkedIn profile. There are a lot of different titles and industries they are selling to. LeadIQ helps them find accurate data for recruiting, L&D, HR, operations, finance, product, engineering. </p>
                                <QuoteCard
                                    text="“No data provider is perfect - and we all know that, but I would say for us, it's probably between 85-95% accurate which is pretty damn good given the type of people we are going after and the turnover that exists in the roles we prospect.”"
                                    author="Charles Moreton"
                                />
                                <p>The sales world is notorious for turnover, but VPs of Sales usually have a pretty good presence online. This makes LeadIQ’s workflow perfect for the team. </p>
                                <QuoteCard
                                    text="“LeadIQ saves us three or four steps per new prospect. This allows us to prospect faster and more efficiently.”"
                                    author="Charles Moreton"
                                />
                                <p>Being leaders in prospecting, Videolicious is always experimenting with other ways to reach new prospects. Since LeadIQ’s direct dials are primarily cell phone data, this opens up a whole new avenue for skipping gatekeepers. It’s also a bonus that the rep can personalize their outreach since they are working right from their prospect’s LinkedIn Profile, blog posts, or company team page. </p>
                                <p>Videolicious recently sourced one of their largest prospects ever with LeadIQ. </p>
                                <QuoteCard
                                    text="“We were going after a really big company, a Fortune 100 company, and with LeadIQ we found  a prospect’s cell number. I actually called him and said “Hey, is this your cell phone?” and he said “yes, how’d you get my number?” After the call ended, I engaged with him over text. Today we’re about to close  a 2000 seat opportunity with them.”"
                                    author="Charles Moreton"
                                />
                                <p>One to one prospecting is super important for Videolicious, and comboing it with LeadIQ helped make it easier than ever. </p>
                                <p>As the humanized sales movement continues, Videolicious will continue to be a leader is making it easier for sales teams everywhere to connect over video. Shooting sales videos should be fun and easy.  </p>
                                <p>There are over 18 billion video views a day. All you need is the right one.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
