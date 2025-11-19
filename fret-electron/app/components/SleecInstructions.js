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
    const { data, classes, editorText, errors, semantics } = this.props;
    return (
      <div style={{ padding: '24px' }}>
        {Array.isArray(semantics) && semantics.length > 0 && (
      <Typography variant='subtitle1' gutterBottom>
        FRETish child requirements:
      </Typography>
    )}
        {semantics && Object.keys(semantics).length > 0 ? (
          // Check if semantics is an array
          Array.isArray(semantics) ? (
            
            semantics.map((item, index) => (
              <Accordion key={index} >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    reqID_{index + 1}:
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={classes.content}>
                    <pre>{JSON.stringify(item, null, 2)}</pre>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            // If semantics is an object, treat it as a single item
            <Accordion >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  reqID_1:
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.content}>
                  <pre>{JSON.stringify(semantics, null, 2)}</pre>
                </div>
              </AccordionDetails>
            </Accordion>
          )
        ) :(
        <Typography variant='subtitle1' gutterBottom>
        Press "MAP TO FRETISH" to see the child requirements. 
        </Typography>
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