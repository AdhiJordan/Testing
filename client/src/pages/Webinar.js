import React from 'react';
import WebinarCard from '../components/cards/WebinarCard';
import webinarVideos from "./../data/webinar-videos-links.json";

class Webinar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: webinarVideos,
            browser: ""
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
            browser: navigator.sayswho
        });
    }


    render() {
        return (
            <div>
                <div className={(this.state.browser === "IE 11" || this.state.browser === "IE 10" ||
                    this.state.browser === "IE 9") ? "" : "cover"}>
                    <div className="d-none d-md-block">
                        <img src="/img/sales-home-cover.png" className="img-fluied" alt="cover" />
                    </div>
                    <div className={(this.state.browser === "IE 11" || this.state.browser === "IE 10" ||
                        this.state.browser === "IE 9") ? "titleFix cover-content" : "cover-content"}>
                        <div className="container">
                            <section>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1>Webinars</h1>
                                        <p>Prospecting videos with a twist of Ryan O’Hara.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className="row">
                            {this.state.videos.map((video, index) => { return (<WebinarCard video={video} index={index} />); })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Webinar;