import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';

const styles = {
    dialogPaper: {
        minHeight: '50vh',
        maxHeight: '50vh'
    },
    MuiDialogContentroot45: {
        padding: 0
    }
}

class TestimonialCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            videoLinkSet: "",
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

        this.setState({
            browserVersion: navigator.sayswho
        });
    }

    handleClickOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        const { fullScreen, classes } = this.props;
        return (
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-5 col-lg-5 p-0" style={{ boxShadow: "0px 20px 20px #888888" }} >                   
                        <a onClick={this.handleClickOpen.bind(this)}>
                            <img src="https://play.vidyard.com/G6nvKM2EtRLTEfqQVAwY6W.jpg?email=1&"
                                style={{minWidth: "100%"}} alt="Testimonal Card" className="img-fluied" />
                            <div className="wave-design-testimonal">
                                <svg viewBox="0 0 100 25">
                                    <defs>
                                        <pattern id="Wave"
                                            x="0" y="0" width="100" height="25"
                                            patternUnits="userSpaceOnUse" >
                                            <path d="M0 25 0 6C20 9 38 11 55 7 72 4 87 4 100 6l0 19z" id="path4" fill="#fff" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#Wave)" />
                                </svg>
                            </div>
                            <p className="pl-4 pb-0 font-italic">
                                “In just two weeks, we brought in 6 new <br /> opportunities sourced by LeadIQ.”<br />
                            </p>
                            <p className="pl-4">VP of Sales Operations, TripActions <br /> <label className="liq-text-primary">David Zwerin</label></p>
                        </a>
                    </div>
                    <div className="col-md-7 col-lg-7 leader-tag">
                        <h2>Trusted by over 10,000 sales professionals worldwide!</h2>
                        <div class="d-flex pt-5">
                            <img src="./img/leader-tag.png" alt="Leader Tag" /> <p>G2 Crowd Leader <br /> <label style={{fontSize: "14px"}}>Check out our reviews </label></p>
                        </div>
                        </div>
                </div>
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
                        <iframe src="https://play.vidyard.com/G6nvKM2EtRLTEfqQVAwY6W?" title="Testimonal Video" className="iframeVideo" id="video" allowscriptaccess="always"></iframe>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}


export default withStyles(styles)(TestimonialCard);
