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

class VideoCard extends React.Component {
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

    handleClickOpen = (videoLinks) => {
        this.setState({
            open: true,
            videoLinkSet: videoLinks
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
                <div className="card mt-5">
                    <a onClick={this.handleClickOpen.bind(this, this.props.video.videoLinks)}>
                        <img src={this.props.video.webLinks} alt={this.props.video.title} className="img-fluied" />
                    </a>

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
                            <iframe src={this.props.video.videoLinks} title={this.props.video.title} className="iframeVideo" id="video" allowscriptaccess="always"></iframe>
                        </DialogContent>

                    </Dialog>

                    <div className="card-body">
                        <p className="liq-text-primary">{this.props.video.title}</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(VideoCard);