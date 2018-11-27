import React from 'react';
import { Link } from "react-router-dom";
import blogs from "./../data/blogData.json";
import BlogReferenceCard from "./../components/BlogReferenceCard.js";
import BackToLessons from "./../components/buttons/BackToLessons.js";

export default class LeadsUniversityOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: blogs,
            browserVersion: ""
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        navigator.sayswho = (function () {
            var ua = navigator.userAgent, tem,
                M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE ' + (tem[1] || '');
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem !== null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) !== null) M.splice(1, 1, tem[1]);
            return M.join(' ');
        })();

        this.setState({
            browserVersion: navigator.sayswho
        });
    }

    smoothScroll(){
    timer: null,

    function stop () {
        clearTimeout(this.timer);
    },

    function scrollTo (id, callback) {
        var settings = {
            duration: 1000,
            easing: {
                outQuint: function (x, t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                }
            }
        };
        var percentage;
        var startTime;
        var node = document.getElementById(id);
        var nodeTop = node.offsetTop;
        var nodeHeight = node.offsetHeight;
        var body = document.body;
        var html = document.documentElement;
        var height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        var windowHeight = window.innerHeight
        var offset = window.pageYOffset;
        var delta = nodeTop - offset;
        var bottomScrollableY = height - windowHeight;
        var targetY = (bottomScrollableY < delta) ?
            bottomScrollableY - (height - nodeTop - nodeHeight + offset) :
            delta;

        startTime = Date.now();
        percentage = 0;

        if (this.timer) {
            clearInterval(this.timer);
        }

        function step() {
            var yScroll;
            var elapsed = Date.now() - startTime;

            if (elapsed > settings.duration) {
                clearTimeout(this.timer);
            }

            percentage = elapsed / settings.duration;

            if (percentage > 1) {
                clearTimeout(this.timer);

                if (callback) {
                    callback();
                }
            } else {
                yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
                window.scrollTo(0, yScroll);
                this.timer = setTimeout(step, 10);
            }
        }

        this.timer = setTimeout(step, 10);
    }
    };

    scrollToTitle(value) {
        this.smoothScroll.scrollTo(value);
    }


    render() {
        return (
            <div className="universityOne">
                <div className={(this.state.browserVersion === "IE 11" || this.state.browserVersion === "IE 10" ||
                    this.state.browserVersion === "IE 9") ? "" : "cover"}>
                    <div className="d-none d-md-block">
                        <img src="/img/leadIq-university-cover.png" alt="leadIq-cover" className="img-fluied" />
                        <img src="/img/logo-university-white.png" alt="leadIq-icon" className="leadIqUniversityOne" />
                    </div>
                </div>
                <div className="blog-container">
                    <div className="container">
                        <div className="card">
                            <div className="card-body card-blog">
                                <BackToLessons size="lg" />
                                <section>
                                    <span className="legend-cover-title">
                                        <label><mark className="highlight-text">Why LeadIQ</mark></label>
                                    </span>
                                    <div className="row legend-cover justify-content-center d-flex">
                                        <div className="col-md-6 col-lg-6 row">
                                            <span className="col-md-2 col-lg-2">&nbsp;</span>
                                            <img src="/img/leadIq-legend.png" alt="legend-box" className="img-fluied col-md-8 col-lg-8" />
                                            <span className="col-md-2 col-lg-2">&nbsp;</span>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="labelUniversityOne">
                                                <ul className="m-0">
                                                    <li><a onClick={this.scrollToTitle.bind(this, "introduction")} ><p className="links-list mb-0">Introduction</p></a></li>
                                                    <li><a onClick={this.scrollToTitle.bind(this, "thoughtfulprospecting")} className="links-list"><p className="links-list mb-0">Thoughtful prospecting and why you should do it</p></a></li>
                                                    <li><a onClick={this.scrollToTitle.bind(this, "databasesolutionvsleadIQ")} className="links-list"><p className="links-list mb-0">Database Solution vs LeadIQ</p></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="row">
                                        <div className=" col-md-6 col-lg-6">
                                            <h3 className="justify-content-left d-flex alignCenter" >Introduction</h3>
                                            <p className="labelUniversityOne mb-3"> We don’t need to tell you that sales prospecting is one of the hardest jobs in business.Let’s spell it out to remind anyone that doesn’t realize how hard our jobs are:</p>
                                            <p className="labelUniversityOne" id="introduction">We reach out to strangers, get a response on average 1.5% of the time. Over half of those responses are some version of  “NO”. Yet somehow, we generate enough business to keep the lights on and cover our salaries.</p>
                                        </div>
                                        <div className="col-md-1 col-lg-1">
                                            &nbsp;
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <img src="/img/leadIq-cycle.png" alt="leadIq-cycle" className="img-fluied" />
                                        </div>
                                        <div className="col-md-1 col-lg-1">
                                            &nbsp;
                                        </div>
                                    </div>
                                </section>
                                <div>
                                    <p className="labelUniversityOne" >Recent stats suggest that 63% of sales reps will never hit their quota,with the number one problem being a lack of deals in the pipeline. Yet over 84% of executives at companies have purchased something that was first introduced to them via cold outreach. </p>
                                    <p className="labelUniversityOne">Our jobs as prospectors is quietly super nobel. Every new opportunity that you generate could potentially create anywhere from 1-10+ new jobs depending on your average deal size. We’ve talked to some Sales Development Reps with yearly quotas was over 30x their salary. We’re money makers, but more importantly, we’re building our economy.</p>
                                    <p className="labelUniversityOne">While some of those stats earlier seem grim, the best prospectors in the entire world can score double digit response rates with their outreach. They make prospects feel loved, they smash quota goals, but most of all, they feel good about what they do when they wake up in the morning.</p>
                                    <p className="labelUniversityOne">That’s where we want all prospectors to be. We want to help you get more wins everyday.One activity at a time, we want prospects to hate saying “no” to you. We want to change the stigma that prospecting is a dirty job. That’s why we build LeadIQ, and why we’re sharing this University.
                                    </p>
                                    <p className="labelUniversityOne">Prospecting shouldn’t be about pressing a bunch of numbers, making a bunch of dials, and sending emails written by someone else. It should be about connecting with others, making them feel good, and showing them why you worth their time, money, and interest.</p>
                                    <div className="justify-content-center d-flex mt-5 mb-5">
                                        <img src="http://i.giphy.com/1S6xghiGMc6Hu.gif" alt="gif" />
                                    </div>
                                    <p className="labelUniversityOne">Today with the combination of your LeadIQ account, our content, and your brain, we’re going to help you conquer the world. We want to help you feel good about your prospecting, and as a result get more deals. Let’s jump in, shall we. Are you ready?</p>
                                </div>
                                <section>
                                    <h3 className="justify-content-left d-flex alignCenter mb-1">Prospecting is all about research first.</h3>
                                    <p className="labelUniversityOne">Mass messaging doesn’t work. So mass prospecting won’t work either. Your prospects are people and they have needs to meet in their organization, whether its to hit a revenue goal, align teams, save money.</p>
                                    <div className="row justify-content-center d-flex">
                                        <div className="embed-responsive embed-responsive-16by9 mt-4 col-md-6">
                                            <iframe className="embed-responsive-item" src="https://fast.wistia.net/embed/iframe/nzb9witd22" title="video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h3 className="justify-content-left d-flex alignCenter mb-1">What is account based prospecting?</h3>
                                    <p className="labelUniversityOne">I’m going to assume most of you already do this, but just as a quick refresher, Account-based prospecting is the reverse of prospecting to a large pool of prospects. It’s when you find the best companies to go after prior to reaching out to employees at that company.</p>
                                    <p className="mb-3 labelUniversityOne">Before even thinking about the role of your ideal customer eg: Finance Directors you will consider account-based factors, such as:</p>
                                    <div className="labelUniversityOne">
                                        <ul className="m-0">
                                            <li>Company size in revenue</li>
                                            <li>Employee count</li>
                                            <li>HQs location</li>
                                            <li>Technographics (eg: What technology and vendors the company uses)</li>
                                            <li>Industry</li>
                                        </ul>
                                    </div>
                                    <p className="mb-3 labelUniversityOne">LinkedIn is a good place to start to filter those account-based factors. If you don’t already have a LinkedIn Sales Navigator account it will definitely make your job so much easier. </p>
                                    <p className="mb-3 labelUniversityOne">Once you have your ideal company list figured out you can research for your ideal contact inside that company.</p>
                                    <div className="alignCenter mb-3">
                                        <img src="/img/account-based-cover.png" alt="account-based-cover" className="img-fluied" />
                                    </div>
                                    <h3 className="justify-content-left d-flex alignCenter mb-1" id="thoughtfulprospecting">What is Thoughtful Prospecting?</h3>
                                    <p className="labelUniversityOne">If you are implementing research first prospecting you are practicing thoughtful prospecting. Awesome job. It’s surprising that sales teams are still pulling large amounts of data to send out mass email campaigns or picking up the phone to dial a prospect without knowing anything other than their contact information.</p>
                                    <p className="mt-4 labelUniversityOne">There is no substitute for research. Not ever. No matter how cool you think a new sales prospecting tool is to maximize your impact on outreach you need to research your prospects individually not en masse.
                        </p>
                                </section>
                                <section>
                                    <h3 className="justify-content-left d-flex alignCenter mb-1" id="databasesolutionvsleadIQ">Database Solution vs LeadIQ</h3>
                                    <p className="labelUniversityOne">There are plenty of sales prospecting tools to pick from. Some teams from a data perspective may even be using more than one source for data. A good way to think about Database solutions vs. LeadIQ is sort of like a fish market vs. a fishing rod.</p>
                                    <p className="mt-4 labelUniversityOne">At a fish market, you buy fish. With database solutions, you are buying access to a large library of contacts.</p>
                                    <p className="mt-4 labelUniversityOne">Using this metaphor, when you buy LeadIQ, you are buying a fishing rod to find leads.</p>
                                    <p className="mt-4 labelUniversityOne">LeadIQ makes it easy for you find out the contact information for your leads in real time. All you have to do is find your prospect online somewhere. If you give us the first name, last name, and company name, we can enrich them with contact data.</p>
                                    <p className="mt-4 labelUniversityOne">Purchasing from a B2B database and using a prospecting tool has pros and cons, here they are:</p>
                                    <div className="row mt-5 mb-5">
                                        <div className=" col-md-2 col-ls-2 mb-3" />
                                        <div className="col-md-8 col-ls-8 mb-5">
                                            <div className="mt-5"><img src="/img/pros-cons.png" alt="pros-cons" className="img-fluied" /></div>
                                        </div>
                                        <div className="col-md-2 col-ls-2 mb-3" />
                                    </div>
                                    <div className="mt-5">
                                        <p className="mt-5 labelUniversityOne mb-5">LeadIQ gets its data from publicly available resources. Typically database solutions will collect data that sits stale for months or even years. When you pull data in real time you get the most up to date contact information. Depending on your prospecting activities accurate data is going to save you time and lots of energy. Why pull 1k contacts with a 30% bounce rate when you can find 800 contacts with a 5% bounce rate.  You also aren’t spamming your servers with a bunch of bounces.</p>
                                        <p className="labelUniversityOne">Make the right choice and research prospects first.</p>
                                    </div>
                                </section>
                                <div className="row justify-content-center d-flex mb-5">
                                    <div className="embed-responsive embed-responsive-16by9 mt-4 justify-content-center d-flex col-md-8">
                                        <iframe className="embed-responsive-item" src="https://fast.wistia.net/embed/iframe/nzb9witd22" title="video" allowFullScreen></iframe>
                                    </div>
                                </div>
                                <section className="blogReferenced">
                                    <div className="container">
                                        <h3 className="alignCenter"> <mark className="highlightText">Blogs referenced here:</mark></h3>
                                        {this.state.blogs.map((blogs, index) => { return (<BlogReferenceCard blog={blogs} key={index} />) })}
                                    </div>
                                </section>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="mt-5 row p-3">
                        <div className="col-md-2 col-lg-2" />
                        <div className="card mb-5 col-md-8 col-lg-8">
                            <div className="card-body">
                                <p className="justify-content-left d-flex alignCenter helpDetails">Lesson 2</p>
                                <h3 className="card-title mb-5 font-weight-bold">Building a Prospecting List</h3>
                                <p className="card-text mb-5 labelUniversityOne">Build your prospecting list with laser like precision. Learn the art of researching and identifying the right prospects to contact.</p>
                                <Link className="helpDetails" to="/leadiq-university-two">Next Lesson</Link>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2" />
                    </div>
                </div>
            </div>
        );
    }
}