import React from 'react';
import { Link } from "react-router-dom";
import BackToLessons from "./../components/buttons/BackToLessons.js";

export default class LeadsUniversityTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            browserVersion: ""
        };
    }


    componentDidMount() {
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
        window.scrollTo(0, 0);
        this.setState({
            browserVersion: navigator.sayswho
        });
    }

    smoothScroll = {
        timer: null,

        stop: function () {
            clearTimeout(this.timer);
        },

        scrollTo: function (id, callback) {
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
                                            <img src="/img/leadIq-legend.png" alt="legend" className="img-fluied col-md-8 col-lg-8" />
                                            <span className="col-md-2 col-lg-2">&nbsp;</span>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="labelUniversityOne">
                                                <ul className="m-0">
                                                    <li><a onClick={this.scrollToTitle.bind(this, "researchingprospects")} ><p className="links-list mb-0">Researching prospects</p></a></li>
                                                    <li><a onClick={this.scrollToTitle.bind(this, "identifysalestriggers")} className="links-list"><p className="links-list mb-0">Identifying sales triggers</p></a></li>
                                                    <li><a onClick={this.scrollToTitle.bind(this, "accountfirstprospecting")} className="links-list"><p className="links-list mb-0">Account based vs role based prospecting</p></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-6">
                                            <h3 className="justify-content-left d-flex alignCenter" >Researching Prospects </h3>
                                            <p className="labelUniversityOne mb-3">Gone are the days of ‘spraying and praying’. There is so much information out there in the public about your prospects, so why send the same cold email or do the same cold call with your prospects, when you have info on the web as a free key to get past their doors?</p>
                                            <p className="labelUniversityOne">If you are prospecting today, and it feels like a positive response was due to luck, you aren’t doing things correctly. When you do your outreach, you need to be super targeted with not just your message, but who you prospect. </p>
                                            <p className="labelUniversityOne" id="researchingprospects">This is why sales teams need to be smart with their activity. Unfocused sales activity almost always leads to poor results.</p>
                                        </div>
                                        <div className="col-md-1 col-lg-1" />
                                        <div className="col-md-4 col-lg-4">
                                            <img src="/img/leadIq-cycle.png" alt="leadIq-cycle" className="img-fluied" />
                                        </div>
                                        <div className="col-md-1 col-lg-1" />
                                    </div>
                                </div>
                                <div>
                                    <p className="labelUniversityOne"> A prospect’s title, company name, and contact information isn’t enough data for outreach. You need to know more about your prospect. You have to get inside your prospect’s head.</p>
                                    <p className="labelUniversityOne">What recent activities have they done on their LinkedIn profile? Who are they connected with? How do they describe their current job? Are they even there anymore? Have they written on their company’s blog? What are their opinions on topics going on in their industry? Who is in their network?</p>
                                    <p className="labelUniversityOne">The problem with researching your prospects first is that the current sales stacks that most companies use today don’t support the workflow reps want to do.
                                    </p>
                                    <p className="labelUniversityOne mt-3">This is life without LeadIQ right now:</p>
                                    <div className=" mt-3 mb-3">
                                        <img src="/img/sales-navigator.png" alt="sales-navigator" className="img-fluied" />
                                    </div>
                                    <p className="labelUniversityOne">The average sales rep has 17 tabs open. How are you supposed to be focused when a few of your tabs are your CRM, your sales enablement software, your lead contact database, your inbox,and social profiles of your prospect. Add in a few personal tabs, and it’s no wonder thatresearch first prospecting is difficult.</p>
                                    <p className="labelUniversityOne">And just like that, spraying and praying unfortunately comes back into the picture.</p>
                                    <p className="labelUniversityOne">Did you know if your research your prospects and mention something you found in your research, you are 11x more likely to hear back from your prospect? The tough part though How do you research your prospects while still checking your CRM, sales enablement tools, and finding their contact data?</p>
                                    <p className="labelUniversityOne">With LeadIQ you can research your prospects first without having to keep a million tabs open.</p>
                                    <p className="labelUniversityOne">For example, above, you can link up LeadIQ to your Salesforce and see which leads, contacts, and accounts are in your CRM. If the prospect isn’t in your CRM, you can easily add them by capturing them. </p>
                                    <p className="labelUniversityOne">As we mentioned before, with spraying and praying not being the best approach to prospecting, you need to implement a different strategy to start your workflow.</p>
                                    <div className="alignCenter mb-3"><img src="/img/account-based-cover.png" alt="account-based-cover" className="img-fluied" /></div>
                                    <p className="labelUniversityOne">For example, above, you can link up LeadIQ to your Salesforce and see which leads, contacts, and accounts are in your CRM. If the prospect isn’t in your CRM, you can easily add them by capturing them. </p>
                                    <p className="labelUniversityOne">As we mentioned before, with spraying and praying not being the best approach to prospecting, you need to implement a different strategy to start your workflow.</p>
                                    <h3 className="justify-content-left d-flex alignCenter mt-4" id="identifysalestriggers">Identify Sales Triggers</h3>
                                    <p className="labelUniversityOne">First let’s define a sales trigger. Sales triggers are events that occur that could increase the likelihood of that prospect becoming a lead.</p>
                                    <p className="labelUniversityOne">Here is a good list (not all inclusive) of sales triggers</p>
                                    <div className="labelUniversityOne">
                                        <ul className="m-0">
                                            <li>New role – did your prospect change jobs recently. Did you know that 67% of decision makers are going to purchase a new tool within the first 3 months of their new role? Think about it when decision makers change roles they usually look to bring in new solutions that will help them do their jobs better.</li>
                                            <li>Funding announcement – when companies secure funding they are usually looking to expand operations. It’s no wonder why so many sales emails are sent to companies immediately after funding announcements.</li>
                                            <li>Company expansion – if the company is expanding into new markets this could definitely be a sales trigger. Company expansion triggers lots of changes, hiring, consolidating, etc.</li>
                                            <li>Key hire – typically when companies make a key hire there is some sort of press release or announcement made. Making a key hire like a VP Sales, VP Marketing or COO may mean strategically the company is investing in new people and new process.</li>
                                            <li>New product or service announcement – if a company launches a new product or service there is a lot of momentum behind that. Depending on the solution a new strategy, go to market, etc. can mean major operational changes to capitalize on. </li>
                                            <li>Changes in hiring velocity for certain departments </li>
                                            <li>Buyer visits website – If a buyer visits your website this is certainly a trigger. Especially when coupled with sales & marketing activity. Go get em’ tiger!</li>
                                            <li>Prospect opens email – It’s no wonder that all outreach tools track activities like: opens and clicks. Engagement equals buy signals!</li>
                                            <li>New market – expansion activities are always good triggers. New markets could mean your solution will help them solve a new problem.</li>
                                        </ul>
                                    </div>
                                    <p className="labelUniversityOne">Using Linkedin Sales Navigator and LeadIQ you can create a really tight campaign around your most likely to purchase prospects.</p>
                                    <p className="labelUniversityOne">Here’s how:</p>
                                    <p className="labelUniversityOne">Use Sales Navigator to pull companies and contacts for your ideal prospects and source contact information using the LeadIQ chrome extension.</p>
                                    <p className="labelUniversityOne"> Sales Navigator offers these filters aligned with your triggers above</p>
                                    <p className="labelUniversityOne mt-4"><b>Role & tenure filter</b></p>
                                    <p className="labelUniversityOne mt-3">Role trigger – what’s neat about LinkedIn Sales Navigator is that you can choose a current or past job from dropdown.</p>
                                    <div className="alignCenter mb-3"><img src="/img/role-tenure.png" alt="role-tenure" className="img-fluied" /></div>
                                    <p className="labelUniversityOne mt-4">
                                        <b>Account filters</b>
                                    </p>
                                    <p className="labelUniversityOne mt-3"> Size filters – search by department headcount and growth rate. If a company is investing in hiring it typically is on a growth track. This trigger works well when you’ve identified that your solution is a good fit for companies in high growth.</p>
                                    <div className="alignCenter mb-3"><img src="/img/account-filters.png" alt="account-filters" className="img-fluied" /></div>
                                    <p className="labelUniversityOne">Once you’ve identified your triggers it’s time to build your prospecting list. There are a few ways to go about this.</p>
                                    <p className="labelUniversityOne">Let’s say these are your triggers:</p>
                                    <p className="labelUniversityOne">
                                        Role:<br />
                                        Finance<br />
                                        Director, Manager, VP<br />
                                        US-based
                                    </p>
                                    <p className="labelUniversityOne">
                                        Account<br />
                                        Finance<br />
                                        1 to 5 employees<br />
                                        Up to $5 million in revenue
                                    </p>
                                    <p className="labelUniversityOne">That’s a great prospecting list</p>
                                    <p className="labelUniversityOne">You will then need to pull prospects that met one or all of the criteria. </p>
                                    <h3 className="justify-content-left d-flex alignCenter mt-4" id="accountfirstprospecting">Account first prospecting</h3>
                                    <p className="labelUniversityOne">Account-based prospecting is ideal for companies that have high Average Contract Values (AVCs) and multiple decision makers. You may have been handed a list of accounts to prospect or you may have to come up with your own account list. </p>
                                    <p className="labelUniversityOne">Either way LeadIQ can help.</p>
                                    <p className="labelUniversityOne">If you want to get more narrow on your account list say find companies that are using a certain technology – such as Salesforce, you can do that in LeadIQ.</p>
                                    <div className="alignCenter mb-3"><img src="/img/new-accounts.png" alt="new-accounts" className="img-fluied" /></div>
                                    <p className="labelUniversityOne">And then filter down into more specific criteria based on the account triggers you defined above (eg: company size, location, etc).</p>
                                    <p className="labelUniversityOne">One great trick that every account based sales and marketer knows is thatusing account first prospecting tactics will eliminate a lot of unhealthy prospects from your list.</p>
                                    <h3 className="justify-content-left d-flex alignCenter mt-4">Role first prospecting</h3>
                                    <p className="labelUniversityOne">Another method of prospecting is role first meaning you disregard a lot of the account based filter above. If you have a large target market or are selling to  small business, you will likely be role first prospecting. Meaning you are more interested in pulling a larger amount of contacts that meet your role criteria:  CEO/Founder, Marketing Director, etc.
                                    </p>
                                    <p className="labelUniversityOne">You won’t need as many advanced filters to create your prospecting list.  You will just need a solid understanding of your persona and then using  web based search you can find contacts from across the web.</p>
                                    <div className="alignCenter mb-3"><img src="/img/leadIq-linkedin.png" alt="leadIq-linkedin" className="img-fluied" /></div>
                                    <h3 className="justify-content-left d-flex alignCenter">Creating your first Campaign</h3>
                                    <p className="labelUniversityOne"> After you’ve researched your prospects, built your prospecting list and found your triggers, you are ready to start building your campaign!</p>
                                    <p className="labelUniversityOne">In LeadIQ this means creating either role specific or account specific campaigns so that you can easily take your prospecting list and send contacts directly to your sales outreach tool, dialer or CRM. The tighter your Campaign lists are the more easier it will be for you on Outreach. </p>
                                </div>
                                <section>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-9 col-lg-9 blogLinkReferenced">
                                                <h5 className="justify-content-left d-flex alignCenter"> <mark className="highlightText">Reference blogs to link to in text:</mark></h5>
                                                <p className="labelUniversityOne ">
                                                    <Link to="/making-outbound-sales-work/"> https://leadiq.com/2018/08/making-outbound-sales-work/ <br /></Link>
                                                    <Link to="/the-highs-and-lows-of-prospecting/"> https://leadiq.com/2018/08/the-highs-and-lows-of-prospecting/ </Link>
                                                </p>
                                            </div>
                                        </div>
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
                                <h3 className="card-title mb-5 font-weight-bold">Sales Outreach </h3>
                                <p className="card-text mb-5 labelUniversityOne">How to scale sales outreach to your heavily-researched prospecting lists. Get creative ideas you never even thought about!</p>
                                <Link className="helpDetails" to="/leadiq-university-three" >Next Lesson</Link>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2" />
                    </div>
                </div>
            </div>
        );
    }
}