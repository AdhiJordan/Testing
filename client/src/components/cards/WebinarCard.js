import React from 'react';
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

class WebinarCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 0,
            btnDisplay: false,
            open: false,
            browserVersion: "",
            setUserEmail: "",
            emailStored: ""
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

    viewWebinar(e) {
        e.preventDefault();
        
        fetch('https://content.leadiq.com/acton/eform/35094/f2224b97-0303-4a39-aeb0-2b4d54ba1281/d-ext-0001', {
            method: 'post',
            body: new FormData(e.currentTarget.form)
        });

        this.setState({
            mode: 1
        }, () => {
            localStorage.setItem("email", JSON.stringify(this.state.setUserEmail));
        })
    }

    emailValidation(e) {
        let emailText = e.target.value;
        if (emailText.length > 0 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailText)) {
            this.setState({
                btnDisplay: true,
                setUserEmail: emailText
            })
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true }, () => {
            if (localStorage.getItem('email')) {
                this.setState({
                    mode: 1
                })
            } else {
                this.setState({
                    mode: 0
                })
            }
        });

    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { fullScreen, classes } = this.props;
        return (
            <div className={(this.state.browserVersion === "IE 11" || this.state.browserVersion === "IE 10" ||
                this.state.browserVersion === "IE 9") ? "col-md-6 col-lg-4" : "col-md-6 col-lg-4 d-flex"} key={this.props.index}>
                <div className="card mt-5 flex-fill">
                    <a>
                        <img src={this.props.video.webLinks} alt={this.props.video.title} onClick={this.handleClickOpen.bind(this)} className="img-fluied" />
                    </a>
                    <Dialog
                        fullScreen={fullScreen}
                        fullWidth={true}
                        maxWidth={'md'}
                        open={this.state.open}
                        onClose={this.handleClose.bind(this)}
                        aria-labelledby="responsive-dialog-title"
                        classes={ (this.state.mode === 0) ? "" : { paper: classes.dialogPaper }}
                    >
                        <DialogContent style={{ padding: "0" }}>
                            {(this.state.mode === 0) ?
                                <div className="modal-body text-center">
                                    <p className="pt-4 mb-4">Provide your email to see the webinar</p>
                                    <form className="justify-content-center d-flex row  m-3">
                                        <input type="email" name="email" placeholder="Enter your email here..."
                                            onChange={this.emailValidation.bind(this)} className="col-sm-6 col-md-3 col-lg-3 emailWebinar" />
                                        <input type="hidden" name="webinarTitle" value={this.props.video.title} />
                                        <input type="hidden" name="webinarUrl" value={this.props.video.navLink} />
                                        <button className="btn liq-btn-primary button-design col-sm-6 col-md-3 col-lg-3" disabled={!this.state.btnDisplay}
                                            onClick={this.viewWebinar.bind(this)}>VIEW NOW</button>
                                    </form>
                                </div> :

                                <iframe src={this.props.video.videoLinks} className="iframeVideo" title="video" allowscriptaccess="always"></iframe>}
                        </DialogContent>
                    </Dialog>
                    <div className="card-body">
                        <Link to={this.props.video.navLink} style={{ color: "#fff" }}>
                            <p className="liq-text-primary" onClick={this.handleClickOpen.bind(this)}>{this.props.video.title}</p>
                        </Link>
                    </div>
                    <div className="row justify-content-center d-flex">
                        <div className="col-md-6 justify-content-center d-flex">
                            <a  onClick={this.handleClickOpen.bind(this)} className={"mt-2 mb-3 text-white btn liq-btn-primary liq-btn-primary-lg"}>VIEW WEBINAR</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default (withStyles(styles)(WebinarCard));


