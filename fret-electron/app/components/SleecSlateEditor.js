import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const FretSemantics = require('../parser/FretSemantics');

class SleecSlateEditor extends React.Component {
  state = {
    fulltext: '',
    semantics: null,      // Will be set when button clicked
    errors: null,         // Real-time errors while typing
    buttonClicked: false  // Track if semantics button was clicked

  }

  handleTextChange = (event) => {
    const fulltext = event.target.value;
    
    // Parse while typing to show errors in real-time
    const result = FretSemantics.compilePartialText(fulltext);
    
    this.setState({ 
      fulltext,
      errors: result.parseErrors || null,
    });
  }
  handleSemanticsClick = () => {
    const result = FretSemantics.compile(this.state.fulltext);
    
    if (result.parseErrors) {
      this.setState({ 
        errors: result.parseErrors,
        semantics: null,
        buttonClicked: true
      });
    } else if (result.collectedSemantics) {
      this.setState({ 
        semantics: result.collectedSemantics,
        errors: null,
        buttonClicked: true
      });
      
      // TODO: Send semantics to backend here
      console.log('Semantics:', result.collectedSemantics);
    }
  }

  render() {
    const { classes } = this.props;
    const { fulltext, errors, semantics } = this.state;
  
    return (
    //   <div className={classes.container}>
       <div style={{ padding: 20 }}>
        <Typography variant='h6'>
          SLEEC Requirement
        </Typography>
        
        <TextField
          label="Sleec Requirement"
          value={fulltext}
          onChange={this.handleTextChange}
          multiline
          fullWidth
          rows={6}
          variant="outlined"
          margin="normal"
        />
        
        {errors && (
          <Typography color='error' variant='caption'>
            Errors: {errors}
          </Typography>
        )}
        
        <div style={{textAlign:'right'}}>
            <Button id="qa_crt_btn_semantics"
                onClick={this.handleSemanticsClick}
                size='small'
                color='secondary' 
                // disabled={this.enableSemantics()}
                disabled={errors}
                style={{ marginTop: 10 }}
            >
                Map to FRETish
            </Button>
        </div>
      </div>
    );
  }
}

export default SleecSlateEditor;




// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';

// const FretSemantics = require('../parser/FretSemantics');

// class SleecSlateEditor extends React.Component {
//   state = {
//     fulltext: '',
//     semantics: {},
//     errors: null
//   }

//   handleTextChange = (event) => {
//     this.setState({ fulltext: event.target.value });
//   }

//   extractSemantics = () => {
//     const result = FretSemantics.compile(this.state.fulltext);
    
//     if (result.parseErrors) {
//       this.setState({ errors: result.parseErrors });
//       return {};
//     }
    
//     this.setState({ 
//       semantics: result.collectedSemantics,
//       errors: null 
//     });
//     return result.collectedSemantics;
//   }

//   handleSemanticsClick = () => {
//     const semantics = this.extractSemantics();
//     // TODO: Send semantics to backend
//     console.log('Semantics:', semantics);
//   }

//   render() {
//     const { fulltext, errors } = this.state;
    
//     return (
//       <div style={{ padding: 20 }}>
//         <Typography variant='h6'>
//           SLEEC Requirement
//         </Typography>
        
//         <TextField
//           label="Enter Requirement Text"
//           value={fulltext}
//           onChange={this.handleTextChange}
//           multiline
//           fullWidth
//           rows={6}
//           variant="outlined"
//           margin="normal"
//         />
        
//         {errors && (
//           <Typography color='error' variant='caption'>
//             Errors: {errors}
//           </Typography>
//         )}
        
//         <div style={{textAlign:'right'}}>
//             <Button id="qa_crt_btn_semantics"
//                 onClick={this.handleSemanticsClick}
//                 size='small'
//                 color='secondary' 
//                 // disabled={this.enableSemantics()}
//                 disabled={!fulltext}
//                 style={{ marginTop: 10 }}
//             >
//                 Map to FRETish
//             </Button>
//         </div>
//       </div>
//     );
//   }
// }

// export default SleecSlateEditor;