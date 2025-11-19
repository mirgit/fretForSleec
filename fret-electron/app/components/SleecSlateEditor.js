import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const FretSemantics = require('../parser/FretSemantics');
const SleecSemanticsAnalyzer = require('../parser/SleecSemanticsAnalyzer').SleecSemanticsAnalyzer;
const sleecsemanticsAnalyzer = new SleecSemanticsAnalyzer();


class SleecSlateEditor extends React.Component {
  state = {
    fulltext: '',
    semantics: null,      // Will be set when button clicked
    errors: null,         // Real-time errors while typing
    buttonClicked: false  // Track if semantics button was clicked

  }
  componentDidMount() {
    if (this.props.onRef){
      this.props.onRef(this);
    }

    if (this.props.fulltext) {
      this.setState({ fulltext: this.props.fulltext });
    }
  }
  componentWillUnmount() {
    // Unregister when unmounting
    if (this.props.onRef) {
      this.props.onRef(null);
    }
  }
  // Update if props change (for editing existing requirements)
  componentDidUpdate(prevProps) {
    if (prevProps.fulltext !== this.props.fulltext && this.props.fulltext) {
      this.setState({ fulltext: this.props.fulltext });
    }
  }

  getChildrenRequirements = () => {

    return this.semantics;
    //semantics after compile
  }


  handleTextChange = (event) => {
    const fulltext = event.target.value;
    
    // Parse while typing to show errors in real-time
    //MM: change to SLEEC ones..
    const result = FretSemantics.compilePartialText(fulltext);
    
    this.setState({ 
      fulltext,
      errors: result.parseErrors || null,
    });
//CLAUDE
    // if (this.props.onTextChange) {
    //   this.props.onTextChange(fulltext);
    // }
  }
  handleSemanticsClick = () => {
    const result = FretSemantics.compile(this.state.fulltext);
    console.log(JSON.stringify(sleecsemanticsAnalyzer.semantics()));
    if (result.parseErrors) {
      this.setState({ 
        errors: result.parseErrors,
        semantics: null,
        buttonClicked: true
      });
//CLAUDE{
      // Notify parent about errors
      if (this.props.onSemanticsUpdate) {
        this.props.onSemanticsUpdate(null, result.parseErrors);
      }
    }
       else if (result.collectedSemantics) {
      this.setState({ 
        semantics: result.collectedSemantics,
        errors: null,
        buttonClicked: true
      });
      
      // Notify parent about successful semantics extraction
      if (this.props.onSemanticsUpdate) {
        this.props.onSemanticsUpdate(result.collectedSemantics, null);
      }
    }
//}CLAUDE

  }

  render() {
    // const { classes } = this.props;
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