import React from 'react';
import videos from "./../data/videos-links.json";
import Slider from "react-slick";
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import { Link } from "react-router-dom";

const styles = {
    dialogPaper: {
        minHeight: '50vh',
        maxHeight: '50vh',
        overflow: 'hidden'
    },
    MuiDialogContentroot45: {
        padding: 0
    }
}



class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: videos,
            videoLinkSet: "",
            dataTargetSet: "",
            open: false,
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

    handleClickOpen(videoLinks, navLink, evt) {
        evt.preventDefault();
        this.setState({
            open: true,
            videoLinkSet: videoLinks
        }, () => {
            console.log("display--->", this.state.open)
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { fullScreen, classes } = this.props;
        var settings = {
            responsive: [
                {
                    breakpoint: 768, settings: {
                        dots: false,
                        slidesToShow: 1,
                        swipeToSlide: true,
                        touchMove: true,
                        draggable: true
                    }
                },

                {
                    breakpoint: 959, settings: {
                        dots: false,
                        slidesToShow: 6,
                        swipeToSlide: true,
                        touchMove: true,
                        draggable: true,
                        slidesToScroll: 6,
                        autoplaySpeed: 5e3,
                    }
                },
                {
                    breakpoint: 1441, settings: {
                        dots: false,
                        slidesToShow: 6,
                        swipeToSlide: true,
                        touchMove: true,
                        draggable: true,
                        slidesToScroll: 6
                    }
                },
                {
                    breakpoint: 100000, settings: {
                        dots: false,
                        slidesToShow: 6,
                        initialSlide: 0,
                        swipeToSlide: false,
                        touchMove: false,
                        draggable: false,
                        slidesToScroll: 6,
                        slickGoTo: 0,
                    }
                }
            ]
        };
        return (
            <div>
                <div className={(this.state.browserVersion === "IE 11" || this.state.browserVersion === "IE 10" ||
                    this.state.browserVersion === "IE 9") ? "" : "cover"}>
                    <div className="d-none d-md-block">
                        <img src="/img/sales-home-cover.png" className="img-fluied" alt="cover" />
                    </div>
                    <div className={(this.state.browserVersion === "IE 11" || this.state.browserVersion === "IE 10" ||
                        this.state.browserVersion === "IE 9") ? "titleFix cover-content" : "cover-content"}>
                        <div className="container">
                            <section>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h1>Videos</h1>
                                        <p>Prospecting videos with a twist of Ryan O’Hara.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <section className="mt-5">
                    <div className="video-slider-container">
                        <Slider {...settings}>
                            {
                                this.state.videos.map((video, index) => {
                                    return (
                                        <div className="p-4" key={index} >
                                            <div onClick={this.handleClickOpen.bind(this, video.videoLinks, video.navLink)}>
                                                <Link to={video.navLink}>
                                                    <img src={video.webLinks} alt={video.title} className="img-fluied" />
                                                </Link>
                                            </div>
                                            <br />
                                            <p className="text-center">{video.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </Slider>

                        <Dialog
                            fullScreen={fullScreen}
                            fullWidth={true}
                            maxWidth={'md'}
                            open={this.state.open}
                            onClose={this.handleClose.bind(this)}
                            aria-labelledby="responsive-dialog-title"
                            classes={{ paper: classes.dialogPaper }}
                        >
                            <DialogContent style={{ padding: "0" }}>
                                <iframe src={this.state.videoLinkSet} className="iframeVideo" title="video" allowscriptaccess="always"></iframe>
                            </DialogContent>

                        </Dialog>
                    </div>
                </section>
            </div>
        );
    }
}

export default withStyles(styles)(Videos);