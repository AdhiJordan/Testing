import React, { Component } from 'react';
import VideoCard from '../components/cards/VideoCard';
import videos from "./../data/videos.json";
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
const styles = {
    dialogPaper: {
        minHeight: '20vh',
        maxHeight: '20vh',
        overflow: 'hidden'
    },
    MuiDialogContentroot45: {
        padding: 0,
        overflow: 'hidden'
    }
}



class RateMyPitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: videos,
            open: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleClickOpen = (e) => {
        e.preventDefault();

        fetch('https://content.leadiq.com/acton/eform/35094/42804309-9c10-4fd1-bafe-7621ae8d9b51/d-ext-0001', {
            method: 'post',
            body: new FormData(e.currentTarget.form)
        });

        this.setState({ open: true }, () => {
            setTimeout(function () {
                this.setState({ open: false }, () => {
                    window.location = "/blog";
                });
            }.bind(this), 2000); 
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { fullScreen, classes } = this.props;
        return (
            <div>
                <div className="cover-rate-my-pitch">
                    <div className="container">
                        <section>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="media">
                                        <img src="/img/laptop-notification.png" className="img-fluied mr-3" height="64px" alt="laptop-notification" />
                                        <div className="media-body pl-2">
                                            <h3 className="mt-0 pl-3">RATE MY PITCH</h3>
                                            <ul>
                                                <li>We look at your cold email.</li>
                                                <li>We go through how to make it better.</li>
                                                <li>Share Feedback.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="media mt-5">
                                        <img src="/img/ryan-round-avatar.png" alt="ryan" className="img-fluied mr-3" height="64px" />
                                        <div className="media-body">
                                            <h3 className="mt-0">Hosted By</h3>
                                            <p className="authorText">Ryan O'Hara and friends will deep dive into your cold email, and give advice on how to write a sales email that will give you double digit reply rates.</p>
                                            <p className="mb-0 authorText"><b>More about Ryan</b></p>
                                            <p className="authorText">Ryan O'Hara has been an early employee at several startups helping them with marketing and prospecting tactics, including Dyn who was acquired by Oracle for $600+ million in 2016.He's had prospecting campaigns featured in Fortune, Mashable and TheNextWeb.Ryan specializes in branding, business development, prospecting and coaching people on how to make good digital first impressions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="text-center">Get your cold email reviewed!</h3>
                                    <form id="free-leads-form" className="mt-5">
                                        <div className="form-group container" id="email-field">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-lg" id="firstName" name="firstName" placeholder="First Name"  />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-lg" id="lastName" name="lastName" placeholder="Last Name"  />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="Email Address"  />
                                            </div>
                                            <div className="text-center">
                                                <button className="btn liq-btn-primary liq-btn-primary-lg" onClick={this.handleClickOpen.bind(this)}>COUNT ME IN!</button>
                                            </div>
                                            <p className="mt-3 authorText">
                                                We'll review emails periodically throughout the month. Fill out the form above and instructions will be sent to you via email.
                                            </p>
                                        </div>
                                    </form>

                                    <Dialog
                                        fullScreen={fullScreen}
                                        fullWidth={true}
                                        maxWidth={'md'}
                                        open={this.state.open}
                                        onClose={this.handleClose.bind(this)}
                                        aria-labelledby="responsive-dialog-title"
                                        classes={(this.state.mode === 0) ? "" : { paper: classes.dialogPaper }}
                                    >
                                        <DialogContent style={{ padding: "0" }}>
                                            <p className="text-center liq-text-primary pt-4 mb-2" style={{fontSize: "38px"}}>Thank you! We will email you with instructions on how to submit your cold email</p>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="container">
                    <section>
                        <div className="media mt-5">
                            <img className="img-fluied mr-5" src="/img/analytics-stats.png" alt="Analytics" height="100px" />
                            <div className="media-body">
                                <h1 className="mt-0">Join us to enhance your cold email tactics!</h1>
                                <h3>You’ll learn:</h3>
                                <ul>
                                    <li>Biggest cold email mistakes people make</li>
                                    <li>How others in your industry are cold emailing</li>
                                    <li>What makes a good cold email</li>
                                    <li>Real-time feedback on your cold emails*</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="container">
                    <section>
                        <h1 className="text-center">Previous Pitches</h1>
                        <div className="row mt-3">
                            {this.state.videos.map((video, index) => { return (<VideoCard video={video} key={index} />); })}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(RateMyPitch);