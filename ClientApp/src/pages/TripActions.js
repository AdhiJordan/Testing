import React, { Component } from 'react';
import QuoteCard from '../components/cards/QuoteCard';

export default class TripActions extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className="helpCenterCover">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2" />
                            <div className="col-md-8">
                                <div className="card card-excuse">
                                    <div className="card-body">
                                        <h2>“I hate booking travel. Can you please do this for me?”</h2>
                                        <p>- Thousands of execs everywhere</p>
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
                                <section>
                                    <p>Corporate travel is the worst. Did you know after salaries and insurance, travel costs is highest expense for companies?</p>
                                    <p>Ariel Cohen and Ilan Twig, successful co-founders who had sold Streamonce to Jive Software a few years back, set out on a mission to make travel suck less for businesses. 3 years later, they’ve never looked back.</p>

                                    <QuoteCard
                                        text="Our messaging is primarily centered around the three value based criteria people care most about corporate travel: Controlling costs, having visibility into what your employees are spending, but also helping save companies money."
                                        author="David Zwerin"
                                    />

                                    <p>TripActions introduces a huge plot twist in how companies save money on travel. They give the company’s savings back to the employees.</p>
                                    <p>Today some of the accounts they’ve helped include SurveyMonkey, Castlight Health, Malwarebytes, Robinhood, Favorite Healthcare and ThoughtSpot.</p>
                                    <p>Raising a nice large series B round of $53 million this year, with a growing sales team of warriors, they are changing travel for companies everywhere.</p>
                                    <p>There was one big problem on their path to world domination. How do they get their new sales reps to prospect efficiently?</p>
                                    <p>Targeting finance teams is tricky, and the number of buyers that TripActions touches and impacts in the buying cycle is more complicated than most companies. They help with savings, but it also impacts the logistics of how companies book travel.</p>
                                    <p>This means that combing through looking for the right prospect is not only difficult, but very important.</p>
                                    <p>A prospect’s title isn’t good enough. Because of this, all of TripActions’ reps are doing research first prospecting.</p>
                                    <p>This is how LeadIQ got introduced into the equation.</p>

                                    <QuoteCard
                                        text="Having prospect data is one thing, but being able to do something with that data is very important for us."
                                        author="David Zwerin"
                                    />

                                    <p>Having LinkedIn Sales Navigator in their sales stack, the TripActions team uses information their prospects post online about themselves to determine the best buyers for their target accounts. Reading a prospect’s description on LinkedIn helps give more clarity on a prospect’s responsibilities versus a traditional database. It also makes it easier for the team to personalize their outreach.</p>
                                    <p>With one swift click of a button, their mighty sales team can enrich their LinkedIn prospects in real time, while importing them into Salesforce and SalesLoft with full contact information.</p>

                                    <QuoteCard
                                        text="LeadIQ solved a majority of our problems and allows us to move a lot faster."
                                        author="David Zwerin"
                                    />

                                    <p>As their reps try to conquer the travel world, combining the ease of inMail with cold calling and cold emailing makes it way easier for the team to increase their productivity</p>

                                    <QuoteCard
                                        text="In just two weeks, we brought in 6 new opportunities sourced by LeadIQ."
                                        author="David Zwerin"
                                    />

                                    <p>In the next couple of months, TripActions will be adding 2-4 new SDRs each week, and an additional 4 Account Executives per month.</p>
                                    <p>With research first prospecting, an efficient sales stack, TripActions will continue their nobel mission to make traveling easier for everyone. Rest easy, executives everywhere.</p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}