import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  content: {
    fontFamily: 'Monospace',
    fontSize: '14px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    padding: '10px'
  }
});

class SleecInstructions extends React.Component {
  render() {
    const { classes, editorText, errors, semantics } = this.props;

    return (
      <div style={{ padding: '24px' }}>
        <Typography variant='subtitle1' gutterBottom>
          FRETish child requirements:
        </Typography>
        
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              reqID 1:
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.content}>
              {editorText || 'No text entered yet'}
            </div>
          </AccordionDetails>
        </Accordion>
   
       {semantics && Object.keys(semantics).length > 0 && (
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading} style={{color: 'green'}}>
                Semantics
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.semantics}>
                <pre>{JSON.stringify(semantics, null, 2)}</pre>
              </div>
            </AccordionDetails>
          </Accordion>
        )}
        </div>
    );
  }
}

SleecInstructions.propTypes = {
  classes: PropTypes.object.isRequired,
  editorText: PropTypes.string,
  errors: PropTypes.string,
  semantics: PropTypes.object,

};

export default withStyles(styles)(SleecInstructions);