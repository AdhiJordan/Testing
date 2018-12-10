import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
const styles = {
    dialogPaper: {
        minHeight: '50vh',
        maxHeight: '50vh',
        maxWidth: '400px',
        overflow: 'hidden'
    },
    MuiDialogContentroot45: {
        padding: 0
    }
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 0,
            open: false
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });

    };

    handleClose = () => {
        this.setState({ open: false });
    }



    getDemo() {

    }

    render() {
        const { fullScreen, classes } = this.props;
        return (
            <div>
                <div className={"mt-2 btn liq-btn-secondary button-design liq-btn-primary-" + this.props.size}
                    onClick={this.handleClickOpen.bind(this)}>GET A DEMO</div>
                <Dialog fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose.bind(this)}
                    aria-labelledby="responsive-dialog-title"
                    classes={(this.state.mode === 0) ? "" : { paper: classes.dialogPaper }}>
                    <DialogContent style={{ padding: "0" }}>
                        <div className="modal-body" style={{ minWidth: "550px" }}>
                            <iframe id="frame" src="https://leadiq.chilipiper.com/router/talk-to-sales" className="lightboxDesign" ></iframe>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default (withStyles(styles)(Demo));