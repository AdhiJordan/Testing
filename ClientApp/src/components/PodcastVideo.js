import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';


const styles = {
    dialogPaper: {
        minHeight: '50vh',
        maxHeight: '50vh',
    },
    MuiDialogContentroot45: {
        padding: 0
    }
}


class PodcastVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleClickOpen()  {
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false });
    };


    render() {
        const { fullScreen, classes } = this.props;

        return (
            <div className="card">
                <div className="card-body card-blog">
                <a  onClick={this.handleClickOpen.bind(this)}>
                    <img src={this.props.webImage} alt="Audio"  />
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
                        <iframe src={this.props.audioLinks} className="iframeVideo" title="video" id="video" allowscriptaccess="always"></iframe>
                    </DialogContent>
                </Dialog>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(PodcastVideo);