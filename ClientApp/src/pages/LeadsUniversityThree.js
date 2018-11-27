import React from 'react';
import { Link } from "react-router-dom";
import BackToLessons from "./../components/buttons/BackToLessons.js";

export default class LeadsUniversityThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            browserVersion: ""
        };
    }


    componentDidMount() {
        window.scrollTo(0, 0)

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
                                                    <li><a onClick={this.scrollToTitle.bind(this, "coldoutreach")} ><p className="links-list mb-0">How to do effective cold outreach</p></a></li>
                                                    <li><a onClick={this.scrollToTitle.bind(this, "effectivecoldemail")} ><p className="links-list mb-0">How to write an effective cold email</p></a></li>
                                                    <li><a onClick={this.scrollToTitle.bind(this, "effectivecoldcalling")} className="links-list"><p className="links-list mb-0">How to do effective cold calling</p></a></li>
                                                    <li><a onClick={this.scrollToTitle.bind(this, "effectivesocialselling")} className="links-list"><p className="links-list mb-0">How to do effective social selling</p></a></li>

                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <h3 id="coldoutreach">How to do effective cold outreach </h3>
                                <p>The team at LeadIQ is constantly trying to investigate what makes the best cold outreach. We believe a combination of cold email, cold calling, and social can be the powerful 1, 2, 3 punch to get double digit response rates from prospect. Considering you are going to use all three of these media to conquer the world. Let’s go into how to use them independently from one another. </p>
                                <h3>How to write an effective cold email</h3>
                                <p>There are four key questions every cold email should be answering. If you follow these, it’ll be easier for your prospects to reply. </p>
                                <p>Let’s break down and talk about each of them.</p>
                                <h4 id="effectivecoldemail"><Link to="/">Question #1: Why are you contacting me?</Link></h4>
                                <p>This one’s pretty straight-forward, or rather it should be pretty clear to you by now.  You need a good reason to reach out to someone. </p>
                                <p>The “why” is your context. </p>
                                <p>You need to focus on your prospect, but clearly state your purpose for the email. </p>
                                <p>For example, if I’m writing an email to a prospect and I’m selling webinar software, I will add a context with our “why” sentence . Let’s say I’m prospecting Sales Hacker’s partner team. I can see Scott actually just did a webinar with the team at Drift. This could be a reason why I’m contacting him. </p>
                                <p>This uses a trigger to make you reach out. To find these sort of “excuses” you should check out recent posts from your prospects on social media. </p>
                                <img src="/img/university-third-webinar.png" alt="webinar" />
                                <p><i>Hey Scott, </i></p>
                                <p><i>I saw you did the webinar with Drift earlier today. I couldn’t make it =(. I’m the worst. I was curious if you guys are on the hunt for trying out new webinar software?</i></p>
                                <p>It’s clear, to the point, and easy to consume.  Scott doing a webinar is what made you reach out, and the reason you are reaching out is to find out if he’s wants to try your webinar software. </p>
                                <h4><Link to="/">Question #2: How am I special to you?</Link></h4>
                                <p>This is one of the most important parts of cold emailing. It’s the easiest spot to fit in personalization, and show off your research. When you write an email to a prospect, you aren’t proving why your company is the best fit for them. You need to prove to them that they are important to you, and that’s why you are picking them. This means using some of that research we talked about as a way to prove the prospect means a lot to you.</p>
                                <p>If we’re using the same example we used above, selling webinar software, we need to prove to Scott that he was chosen by me for a reason, and it can’t just involve our product. </p>
                                <img src="/img/university-third-salesHacker.png" alt="SalesHacker" />
                                <p>Let’s add to the email.</p>
                                <p><i>Hey Scott, </i></p>
                                <p><i>I saw you did the webinar with Drift earlier today. I couldn’t make it =(. I’m the worst. I was curious if you guys are on the hunt for trying out new webinar software?</i></p>
                                <p><i>I know you’ve been crushing it getting partners for SalesHacker. I saw you guys recently joined the team at Outreach, so they obviously know all the good things you are doing to help our space. </i></p>
                                <h4><Link to="/">Question #3: Who are you?</Link></h4>
                                <p>Our general rule of thumb is to get this down to one sentence and let your email signature do the rest. This is the one part where you can show value. Make your who are you sentence focused on  the feeling you will provide the buyer, and you’ll get more replies. </p>
                                <p>Let’s add to the email.</p>
                                <p><i>Hey Scott, </i></p>
                                <p><i>I saw you did the webinar with Drift earlier today. I couldn’t make it =(. I’m the worst. I was curious if you guys are on the hunt for trying out new webinar software?</i></p>
                                <p><i>I know you’ve been crushing it getting partners for SalesHacker. I saw you guys recently joined the team at Outreach, so they obviously know all the good things you are doing to help our space. </i></p>
                                <p><i>We help make it a lot easier for anyone on your team to throw webinars without having to be a rocket scientist. </i></p>
                                <p>For an email signature, you want to include as much useful info as possible to help comfort the prospect.</p>
                                <div className="row">
                                    <img src="/img/leadIq-marketing.png" alt="leadIq-marketing" className="col-md-4" />
                                </div>
                                <p>One little tip I also recommend is making a signature video that explains who you are a little bit. Here’s an example of mine.</p>
                                <div className="row mb-5 justify-content-center d-flex">
                                    <div className="embed-responsive embed-responsive-16by9 col-md-8">
                                        <iframe className="embed-responsive-item" title="Video" src="https://youtube.com/embed/HPxZuCYkgMk" allowFullScreen></iframe>
                                    </div>
                                </div>
                                <h4><Link to="/">Question #4: What do you want me to do?</Link></h4>
                                <p>This is simple. Every email needs a clear call to action. Are you asking them to check out a PDF? Are you asking for a meeting? You need to ask them ONE thing you want them to do. </p>
                                <p>TIP: End with an open ended question. It drives more replies. </p>
                                <p>Let’s finish up the email</p>
                                <img src="/img/leadIq-marketing-quote.png" alt="marketing-quote" />
                                <img src="/img/good-email-templates.png" alt="marketing-quote" className="justify-content-center d-flex mt-4" />
                                <h3 className="mt-3">Writing Effective Subject Lines</h3>
                                <p>If you want to start a relationship with a prospect, you could write the greatest cold email in the world, and it won't matter if the subject sucks.</p>
                                <img src="/img/university-prospect-inbox.png" alt="prospect-inbox" />
                                <p>If you were to look at data that’s out there, open rates are all over the place, based on industry.</p>
                                <img src="/img/university-global-stats.png" alt="prospect-inbox" />
                                <p>Average open rates by industry. Source: <Link to="http://www.smartinsights.com/email-marketing/email-communications-strategy/statistics-sources-for-email-marketing/?new=1"></Link></p>
                                <p>This is some quick commentary on how we grade subject lines, and why many BDRs, SDRs, and even the most Senior Account Reps are doing it wrong.</p>
                                <p>Here's the problem with judging your subject lines based on open rates:</p>
                                <p><b>The goal of your email is to get a positive reply, not an open.</b></p>
                                <p>Anyone can get a 99% open rate, but if you are trying to get a positive response that starts a relationship, the real thing to track with subject lines is replies, not open rates.</p>
                                <p>There is no one subject line to rule them all. So how do you write good email subjects for sales?</p>
                                <h3 className="mt-3">Characteristic #1: Good subject lines should be personalized, and vague.</h3>
                                <p>We see so many people shoot off their company's best bullet in the subject of the email. Let's use one of our Business Development guys, Jim Morris' email he personally wrote to a prospect as an example of why vague email subjects will increase reply rates.</p>
                                <p>Jim found a prospect that was wearing a Hawaii shirt and lei on Linkedin. He decided to use that angle to start a relationship with the prospect.</p>
                                <img src="/img/email-message.png" alt="email-message" />
                                <p>A vague subject line is a great way to use curiosity to draw someone to open the email. In a lot of ways, an email subject should be sort of like a more personalized version of <b>link bait</b>.</p>
                                <p>Don't be annoying link bait. Think of the curiosity link bait uses to draw in clicks on social. How many times have we all clicked on an article that had a vague headline off Twitter or Facebook? They got you didn't they!!!</p>
                                <p>Instead, give a hint of the content that is going to be in the email body.</p>
                                <p><b>Characteristic #2: Good email subjects should set the expectation of your cold email's body.</b></p>
                                <p>Remember how we just compared a good email subject to link bait? <b>Link bait sucks.</b> The reason it sucks is because more often than not, the headline is deceptive and disappoints. YOU NEVER WANT TO DO THIS.</p>
                                <p>You don’t want your prospects feeling like this when they actually read your email:</p>
                                <div className="row mb-5 justify-content-center d-flex">
                                    <div className="embed-responsive embed-responsive-16by9 col-md-8">
                                        <iframe className="embed-responsive-item" title="Video" src="https://www.youtube.com/embed/_O1hM-k3aUY" allowFullScreen></iframe>
                                    </div>
                                </div>
                                <p>Jim's subject mentions a Luau. Jim brilliantly didn't sell out and just pitch LeadIQ. He meets the expectation of the prospect by bringing up the prospect's Linkedin picture, which featured things we all would see at a Luau.</p>
                                <p>How angry do people get when they expect something to be a certain way and then that something disappoints? That same experience applies to email subjects.</p>
                                <p><b>Characteristic #3: Good email subjects should be personalized.</b></p>
                                <p>The fact is, the biggest advantage a human being has over a marketing automated email is that when we are prospecting, we can personalize anything. Too many prospectors fall into the trap of trying to find one subject that can apply to thousands of people.</p>
                                <p>When you are trying to figure out what to make your cold email about, find some angles that focus on the human you are prospecting first. If you can't find an angle, then you can use the company as a backup angle.</p>
                                <p>For example, if we look at the email below, we can see that the company used our company name in the subject. This normally would be great except it’s clear that the personalization here is just a mail merge splicing in the different customers. </p>
                                <img src="/img/adaptive-email.png" alt="adaptive-email" />
                                <p>The subject should be something that’s unique enough to draw an open, but relevant to us. An “adaptive email network” isn’t relevant to LeadIQ. It just sounds like a bunch of marketing jargon. </p>
                                <p>This company could have said something like “LeadIQ’s email deliverability” or “Getting LeadIQ emails delivered” and it probably would have drew more interest from our team. </p>
                                <p>Here's a great example of using personalization from one our customers, Wilson Lee when he worked at Boomtrain. </p>
                                <img src="/img/forwarded-email.png" alt="forwarded-email" />
                                <p>Wilson was scouting a prospect and saw that they mentioned on Twitter that they liked 90s pop. </p>
                                <p><b>Characteristic #4: Good email subjects should be unselfish.</b></p>
                                <p>As with the email's body content, the best subjects are unselfish. Your prospect doesn't care about your company's name, your features, or branded product line. So why do we keep using them in prospecting emails?</p>
                                <p>Using a company name, brand, or feature that is your company in an email just sets the expectation that this email is going to be about you. Emails that are about you rely on luck instead of likability to start a relationship.</p>
                                <p>The same things apply for pushing email content like "whitepapers, ebooks, and webinars." Using marketing phrases that push your content is selfish as well.</p>
                                <p><b>Characteristic #5: Good email subjects should be emails you'd want to receive.</b></p>
                                <p>Before you hit send, simply read the subject out loud. Ask yourself..."if this came up on my phone as a notification badge, or as an unread in my inbox, would I stop what I'm doing to read it and reply?"</p>
                                <p><b>To recap:</b></p>
                                <div>
                                    <ul>
                                        <li>Good subject lines should be personalized, and vague.</li>
                                        <li>Good email subjects should set the expectation of your cold email's body.</li>
                                        <li>Good email subjects should be personalized.</li>
                                        <li>Good email subjects should be unselfish.</li>
                                        <li>Good email subjects should be emails you'd want to receive.</li>
                                    </ul>
                                </div>
                                <h3 className="mt-3" id="effectivecoldcalling">How to Cold Call Like a Pro</h3>
                                <p>2 step cold calling sales hack when using LeadIQ + SalesLoft/Outreach or whatever prospecting platform you are working on. </p>
                                <p>Here’s how we cold call. Caveat - this hack only works if you use SalesLoft or Outreach in conjunction with LeadIQ. </p>
                                <p><b>Step#1</b></p>
                                <p>Start working 30-60 minutes early to bang out as many personalized, value-driven emails you can for target prospects. Try to send out at least 10-20+ good ones. </p>
                                <p>Throughout the day, monitor SalesLoft/Outreach to see who is opening your emails. As you see notifications pop up in SalesLoft/Outreach that your prospect has viewed your email, pick up the phone and call them. </p>
                                <p>Make calls throughout the day as prospects open your email. Then at the end of the day, spend the last 30-60 minutes banging out calls to all the remaining prospects you emailed that morning who didn’t open the email. </p>
                                <p><b>Step #2</b></p>
                                <p> Visit the prospect’s LinkedIn profile. Don’t spend too much time doing research but see what you can find that you could bring up in conversation. While still on the prospect’s LinkedIn page, highlight their cell number in the LeadIQ chrome extension, right click and then click the SalesLoft/Outreach dialer. If you use another dialer, contact your vendor and ask how to setup your default dialing inside the browser.</p>
                                <img src="/img/leadIq-linkedin-Profile.png" alt="leadIq-linkedin-Profile" />
                                <p>Make sure your headphones are plugged into your computer and just like that you’re having a conversation!</p>
                                <p>Use those cell numbers we have in LeadIQ. You should see a much higher connect rate than calling company main lines or desk phones. We’re seeing a 40-50% connect rate - on outbound cold calls!</p>
                                <p id="effectivesocialselling"><b>Other Tips:</b></p>
                                <div>
                                    <ul>
                                        <li>If there’s more than one cell phone number we have listed for the prospect, more than likely the first one listed will be the correct one. But sometimes it’s not. So the first time you call a prospect you might have to do a little trial and error of figuring out which number is correct. If one of the cell numbers is wrong, use our new data police feature to mark them as incorrect. That way, it will make our data better and the next time you try calling that prospect, only the correct phone number will appear. </li>
                                        <li>Close on the meeting. When you’re on a cold call, wrap it up quick, book the meeting and get off the phone. Don’t take too much time, because the prospect is super busy. Have your calendar up so you can see open time slots and get verbal commitment from the prospect on their availability while you have them on the phone. </li>
                                        <li>Once you have the meeting locked in, make sure you have the right email address to send the invite to. You can impress the prospect by showing that you already have their email (using LeadIQ). </li>
                                        <li>If the prospect gives you a hard time about calling their cell phone, just calmly say something like “I totally get that. We’re actually seeing a trend though where lots of companies are getting rid of their desk phones - plus many people these days are using their cell phone for work purposes - like checking their work email on their cell while they’re watching TV at night.” </li>
                                    </ul>
                                </div>
                                <p>Then the prospect will be like, “Okay, yeah I guess you’re right.” From there you’re right back into your normal call flow and can proceed with their conversation as normal. </p>
                                <p> If they keep grilling you about where you got their cell number, say something like “If I have the number in my CRM, it’s somewhere else online, in public records, perhaps you typed it into a form somewhere, etc.” Again, at that point they’ll be like. “Okay got it.” The you’re right back into your normal call flow. </p>
                                <div>
                                    <ul>
                                        <li>Show that you did your research and use a trigger event. Start the call off by saying something like:</li>
                                        <li>”I noticed that you guys are hiring SDRs and….”</li>
                                        <li>Noticed that you used to work at XYZ Company, they actually just became a customer of ours…..”</li>
                                        <li>”I saw your comment on (First name Last name)’s post about your recent deployment of (insert technology) and….”</li>
                                        <li>”I checked out your company website, looks like you guys have some cool solutions for procurement - those executives are probably really hard to get on the phone. Well…..”</li>
                                    </ul>
                                </div>
                                <p>By showing you did your research and you have some type of trigger event about that contact or their company that you can relate back to your value prop, you’re more likely to get a positive response from the prospect. </p>
                                <p><b>Leaving voicemails</b></p>
                                <p>You have your tier-1, tier-2 and tier-3 accounts. Always leave voicemails for the tier-1 accounts - follow the voicemail up with an email. Don’t leave voicemails for the tier-3 accounts. Leave voicemails for the tier-2 accounts as well. </p>
                                <p>Tricky thing though is with LeadIQ you’re going to be mostly calling cell numbers. Often times on a voicemail greeting on a cell phone phone though all the greeting says is “you’ve reached (insert phone number here” and that’s it. So while our cell phone data is really good, I probably wouldn’t spend the 20-30 seconds leaving a voicemail unless I was positive that it was the correct phone number for that prospect. </p>
                                <p>Now, if their voicemail greeting says, “You’ve reached (Prospect name) at (target account), I’m not here right now, but…..” then by all means, definitely leave them a voicemail. </p>
                                <div>
                                    <ul>
                                        <li>Connect rate will be much higher calling cell phones, so be ready for them to pick up!</li>
                                        <li>If the prospect answers but they don’t say their name when they answer, assume that you have the right contact on the phone. So like, if they answer by saying, “Hello”, don’t reply by saying, “Hello, is this Gerald?” because instantly they’re gonna be thinking in their head, “Oh god, this is someone who I don’t know and it’s a salesperson”. </li>
                                    </ul>
                                </div>
                                <p>Instead, when they say, “Hello”, be smooth and say, “Hey Gerald, it’s Jeremy and the reason I’m calling is….”</p>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

