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
import SleecSlateEditor from './SleecSlateEditor';
import SleecInstructions from './SleecInstructions';

import templates from '../../templates/templates';
import {getRequirementStyle} from "../utils/utilityFunctions";
import {withReact} from "slate-react";
import {createEditor, Node, Range, Text, Transforms} from "slate";
import withFields from "../utils/withFields";

import { createOrUpdateRequirement } from '../reducers/allActionsSlice';
import { connect } from "react-redux";




const formStyles = theme => ({
  accordion: {
    width: '98%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft:  theme.spacing(),
  },
  aux:{
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  list: {
    width: '100%',
  },
  text: {
    marginBottom: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(),
  },
  ImageList: {
    width: 600,
    height: 600,
  },
  heading: {
  fontSize: theme.typography.pxToRem(16),
  fontWeight: theme.typography.fontWeightRegular,
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectRoot: {
    width: 60
  },
});

class CreateSleecReqDialog extends React.Component {
  dialogRef = React.createRef();

  state = {
    createSleecDialogOpen: false,
    project: null,
    reqid: '',
    parent_reqid: '',
    rationale: '',
    comments:'',
    focus: '',
    status: '',
    selectedTemplate: -1,
    // tabValue: 0, // for three tabs in the right panel
    editor: withReact(withFields(createEditor())),
    dialogTop: 0,
    dialogLeft: 0,
    autoFillVariables: [],
    existingFileName: '',
    // isProbabilistic: false,

  };

  handleClose = () => {
    this.setState({ createSleecDialogOpen: false });
  };

  handleTextFieldChange =  name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleTextFieldFocused = name => event => {
    this.setState({
      focus: name,
    });
  };
  setDialogPosition =  () => {
    if(this.dialogRef && this.dialogRef.current) {
      const { dialogTop, dialogLeft } = this.state;
      const clientRect = this.dialogRef.current.getBoundingClientRect();
      if (clientRect.top !== dialogTop || clientRect.left !== dialogLeft) {
        this.setState({ dialogTop: clientRect.top, dialogLeft: clientRect.left })
      }
    }
  };

  handleUpdateInstruction = (field) => {
    this.setState ({
        focus: field
  });
  }
  handleUpdateSemantics = (f) => {
    this.setState ({
        focus: 'semantics',
        formalization: f
  });
  }

  handleCreate =  () => {
    console.log("handleCreate called in createsleec");
  };

//   componentWillReceiveProps(props, nextState) {
//     this.setState({
//       createSleecDialogOpen : props.open,
//       dialogCloseListener : props.handleCreateDialogClose,
//       edittingRequirement: props.editRequirement,
//     });
//   };

  renderEditor = (inputFields, selectedTemplate) => {
    const {dialogTop, dialogLeft} = this.state;
    return (
        <SleecSlateEditor
    //   <SlateEditor2
        // editor={this.state.editor}
    //     onRef={ref => (this.stepper = ref)}
    //     updateInstruction={this.handleUpdateInstruction}
    //     updateSemantics={this.handleUpdateSemantics}
    //     inputFields={inputFields}
    //     template={templates[selectedTemplate]}
    //     autoFillVariables={this.state.autoFillVariables}
    //     dialogTop={dialogTop}
    //     dialogLeft={dialogLeft}
    //     // switchProbabilisticHandler ={this.switchProbabilisticHandler}
        />
    )
  }

  render() {
    //temp variable settings:
    const isRequirementUpdate = false;
    const { edittingRequirement, selectedTemplate} = this.state;
    const { classes, open, onClose } = this.props;
    const actionLabel = isRequirementUpdate ? 'Update' : 'Create';
    const dialogTitle = actionLabel + 'SLEEC Requirement';
    const commitButtonText = actionLabel
    const fulltext = isRequirementUpdate ? edittingRequirement.fulltext : undefined
    const templateValues = isRequirementUpdate ? edittingRequirement.template : undefined
    

    const statusSelectStyle = {
      borderStyle: 'None',
      borderWidth: 1,
      borderRadius: 5,
    }
    const colorStyle = isRequirementUpdate ? getRequirementStyle({semantics, fulltext},false) : 'req-grey';
        
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
                    <DialogTitle id="qa_crt_sleec_title"
                                 ref={this.dialogRef}>
                        <div className={classes.dialogTitle}>
                          {dialogTitle}
                          <FormControl >
                            <InputLabel id="status">Status</InputLabel>
                            <Select
                              id="qa_crt_sleec_select_status"
                              classes={{ root: classes.selectRoot }}
                              style={statusSelectStyle}
                              disableUnderline
                              className={colorStyle}
                              value={this.state.status}
                              onChange={this.handleTextFieldChange('status')}
                            >
                              <MenuItem id ="qa_crt_sleec_mi_statusNone" value="None"/>
                              <MenuItem id ="qa_crt_sleec_mi_statusInProgress" value={'in progress'}>
                                <Tooltip title="In progress"><InProgressIcon className={classes.inProgressIcon}/></Tooltip>
                              </MenuItem>
                              <MenuItem id ="qa_crt_sleec_mi_statusPaused" value={'paused'}>
                                <Tooltip title="Paused"><PauseIcon className={classes.pauseIcon}/></Tooltip>
                              </MenuItem>
                              <MenuItem id ="qa_crt_sleec_mi_statusCompleted" value={'completed'}>
                                <Tooltip title="Completed"><CompletedIcon className={classes.completedIcon}/></Tooltip>
                              </MenuItem>
                              <MenuItem id ="qa_crt_sleec_mi_statusAttention" value={'attention'}>
                                <Tooltip title="Attention"><AttentionIcon className={classes.attentionIcon}/></Tooltip>
                              </MenuItem>
                              <MenuItem id ="qa_crt_sleec_mi_statusDeprecated" value={'deprecated'}>
                                <Tooltip title="Deprecated"><DeprecatedIcon/></Tooltip>
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </DialogTitle>
                      <Divider/>
                      <DialogContent>
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
                                  <Select id="qa_crt_sleec_select_project"
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
                                          <MenuItem id={"qa_crt_sleec_select_project_"+name} value={name} key={name}>{name}</MenuItem>
                                        )
                                      })
                                    }
                                  </Select>
                                </FormControl>
                              </ImageListItem>
                              <ImageListItem cols={3} className={classes.aux}>
                                <Accordion className={classes.accordion}>
                                  <AccordionSummary id="qa_crt_sleec_as_rationaleComments" expandIcon={<ExpandMoreIcon />}>
                                    <Typography id="qa_crt_sleec_as_rationaleComments_t" className={classes.heading}>Rationale and Comments</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <div className={classes.list}>
                                <TextField
                                  id="qa_crt_sleec_tf_rationale"
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
                                  id="qa_crt_sleec_tf_comments"
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
                      </DialogContent>
                      <DialogActions>
                        <Button id="qa_crtsleec_btn_cancel" onClick={onClose}>
                          Cancel
                        </Button>
                        <Button id="qa_crtsleec_btn_create" onClick={this.handleCreate} color="secondary" variant='contained'>
                          {commitButtonText}
                        </Button>
                      </DialogActions>
                    </div>
                    <div className={styles.instruction}>
                        <SleecInstructions 
                        editorText={this.state.fulltext} 
                        />
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

function mapStateToProps(state) {
  const requirements = state.actionsSlice.requirements;
  const listOfProjects = state.actionsSlice.listOfProjects;
  const selectedProject = state.actionsSlice.selectedProject;
  return {
    requirements,
    listOfProjects,
    selectedProject,
  };
}
const mapDispatchToProps = {
  createOrUpdateRequirement
};

export default withStyles(formStyles)
  (connect(mapStateToProps,mapDispatchToProps)(CreateSleecReqDialog));