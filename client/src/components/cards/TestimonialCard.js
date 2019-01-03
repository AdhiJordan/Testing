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
                <a onClick={this.handleClickOpen.bind(this)} style={{boxShadow: "0px 20px 20px #888888"}}>
                    <img src="https://play.vidyard.com/G6nvKM2EtRLTEfqQVAwY6W.jpg?email=1&" alt="Testimonal Card" className="img-fluied" />
                    <p className="p-4">
                        “In just two weeks, we brought in 6 new <br /> opportunities sourced by LeadIQ.”<br />
                    </p>
                    <p className="pl-4">VP of Sales Operations, TripActions <br /> <label className="liq-text-primary">David Zwerin</label></p>
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
                        <iframe src="https://play.vidyard.com/G6nvKM2EtRLTEfqQVAwY6W?" title="Testimonal Video" className="iframeVideo" id="video" allowscriptaccess="always"></iframe>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}


export default withStyles(styles)(TestimonialCard);
