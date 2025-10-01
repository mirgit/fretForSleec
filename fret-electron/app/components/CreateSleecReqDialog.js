import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/HelpOutline';
import { withStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InProgressIcon from '@material-ui/icons/MoreHoriz';
import PauseIcon from '@material-ui/icons/Pause';
import CompletedIcon from '@material-ui/icons/Done';
import AttentionIcon from '@material-ui/icons/PriorityHigh';
import TableCell from "@material-ui/core/TableCell";
import DeprecatedIcon from "@material-ui/icons/Close";

import styles from './CreateRequirementDialog.css';


class CreateSleecReqDialog extends React.Component {
  dialogRef = React.createRef();

  state = {
    createSleecDialogOpen: false,
  };

  handleClose = () => {
    this.setState({ createSleecDialogOpen: false });
  };

  handleTextFieldChange = () => {
    console.log("handleTextFieldChange called in createsleec");
  };
  handleTextFieldFocused =  () => {
    console.log("handleTextFieldFocused called in createsleed");
  };
  setDialogPosition =  () => {
    console.log("setDialogPosition called in createsleed");
  };
  handleCreate =  () => {
    console.log("handleCreate called in createsleed");
  };

//   componentWillReceiveProps(props, nextState) {
//     this.setState({
//       createSleecDialogOpen : props.open,
//       dialogCloseListener : props.handleCreateDialogClose,
//       edittingRequirement: props.editRequirement,
//     });
//   };
  render() {
        const { classes, open, onClose } = this.props;
        const dialogTitle = "Create Sleec";
        const commitButtonText = "Create";
    return (
        <div className={classes.root}>
                <Dialog
                  open={open}
                  onClose={onClose}
                  aria-labelledby="form-dialog-title"
                  fullWidth={true}
                  maxWidth='lg'
                  // fox for autocomplete new bug
                  onScroll={this.setDialogPosition}
                  // possible fix for dialog resizing due to variable expansions
                  style={{height: '95%'}}
                >
                  <div className={styles.layout}>
                    <div className={styles.form}>
                    <DialogTitle id="qa_crt_title"
                                 ref={this.dialogRef}>
                        <div className={classes.dialogTitle}>
                          {dialogTitle}
                          <FormControl >
                            <InputLabel id="status">Status</InputLabel>
                            {/* <Select
                              id="qa_crt_select_status"
                              classes={{ root: classes.selectRoot }}
                              style={statusSelectStyle}
                              disableUnderline
                              className={colorStyle}
                              value={this.state.status}
                              onChange={this.handleTextFieldChange('status')}
                            >
                              <MenuItem id ="qa_crt_mi_statusNone" value="None"/>
                              <MenuItem id ="qa_crt_mi_statusInProgress" value={'in progress'}>
                                <Tooltip title="In progress"><InProgressIcon className={classes.inProgressIcon}/></Tooltip>
                              </MenuItem>
                              <MenuItem id ="qa_crt_mi_statusPaused" value={'paused'}>
                                <Tooltip title="Paused"><PauseIcon className={classes.pauseIcon}/></Tooltip>
                              </MenuItem>
                              <MenuItem id ="qa_crt_mi_statusCompleted" value={'completed'}>
                                <Tooltip title="Completed"><CompletedIcon className={classes.completedIcon}/></Tooltip>
                              </MenuItem>
                              <MenuItem id ="qa_crt_mi_statusAttention" value={'attention'}>
                                <Tooltip title="Attention"><AttentionIcon className={classes.attentionIcon}/></Tooltip>
                              </MenuItem>
                              <MenuItem id ="qa_crt_mi_statusDeprecated" value={'deprecated'}>
                                <Tooltip title="Deprecated"><DeprecatedIcon/></Tooltip>
                              </MenuItem>
                            </Select> */}
                          </FormControl>
                        </div>
                      </DialogTitle>
                      <Divider/>
                      {/* <DialogContent>
                            <DialogContentText>
                            &nbsp;
                            </DialogContentText>
                            <ImageList cols={3} rowHeight={'auto'} >
                              <ImageListItem>
                                <TextField
                                  autoFocus
                                  id="qa_crt_tf_reqid"
                                  label="Requirement ID"
                                  type="text"
                                  defaultValue={this.state.reqid}
                                  fullWidth
                                  onChange={this.handleTextFieldChange('reqid')}
                                />
                              </ImageListItem>
                              <ImageListItem>
                                <TextField
                                  id="qa_crt_tf_parentReqid"
                                  label="Parent Requirement ID"
                                  type="text"
                                  defaultValue={this.state.parent_reqid}
                                  fullWidth
                                  onChange={this.handleTextFieldChange('parent_reqid')}
                                />
                              </ImageListItem>
                              <ImageListItem >
                                <FormControl fullWidth>
                                  <InputLabel htmlFor="project-field">Project</InputLabel>
                                  <Select id="qa_crt_select_project"
                                    value={this.state.project || ''}
                                    onChange={this.handleTextFieldChange('project')}
                                    inputProps={{
                                      name: 'project',
                                      id: 'project-field',
                                    }}
                                  >
                                    {
                                      this.props.listOfProjects.map(name => {
                                        return(
                                          <MenuItem id={"qa_crt_select_project_"+name} value={name} key={name}>{name}</MenuItem>
                                        )
                                      })
                                    }
                                  </Select>
                                </FormControl>
                              </ImageListItem>
                              <ImageListItem cols={3} className={classes.aux}>
                                <Accordion className={classes.accordion}>
                                  <AccordionSummary id="qa_crt_as_rationaleComments" expandIcon={<ExpandMoreIcon />}>
                                    <Typography id="qa_crt_as_rationaleComments_t" className={classes.heading}>Rationale and Comments</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <div className={classes.list}>
                                <TextField
                                  id="qa_crt_tf_rationale"
                                  label="Rationale"
                                  type="text"
                                  defaultValue={this.state.rationale}
                                  fullWidth
                                  multiline
                                  onChange={this.handleTextFieldChange('rationale')}
                                  onFocus={this.handleTextFieldFocused('rationale')}
                                  className={classes.text}
                                />
                                <TextField
                                  id="qa_crt_tf_comments"
                                  label="Comments"
                                  type="text"
                                  defaultValue={this.state.comments}
                                  fullWidth
                                  multiline
                                  onChange={this.handleTextFieldChange('comments')}
                                  onFocus={this.handleTextFieldFocused('comments')}
                                  className={classes.text}
                                />
                                </div>
                                </AccordionDetails>
                                </Accordion>
                              </ImageListItem>
                            </ImageList>
                            {this.renderEditor({
                              fulltext,
                              templateValues
                            }, selectedTemplate)}
                      </DialogContent> */}
                      <DialogActions>
                        <Button id="qa_crtsleec_btn_cancel" onClick={onClose}>
                          Cancel
                        </Button>
                        <Button id="qa_crt_btn_create" onClick={this.handleCreate} color="secondary" variant='contained'>
                          {commitButtonText}
                        </Button>
                      </DialogActions>
                    </div>
                  </div>
                </Dialog>
              </div>
    );
  }
}

CreateSleecReqDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(CreateSleecReqDialog);
