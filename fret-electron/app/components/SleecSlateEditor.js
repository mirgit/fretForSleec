import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const antlr4 = require('antlr4/index');
const RequirementLexer = require('../parser/RequirementLexer');
const RequirementParser = require('../parser/RequirementParser');

const FretSemantics = require('../parser/FretSemantics');
const SleecSemanticsAnalyzer = require('../parser/SleecSemanticsAnalyzer').SleecSemanticsAnalyzer;
const sleecsemanticsAnalyzer = new SleecSemanticsAnalyzer();

const REQ_BODY_CTX_RULE = 'reqt_body'


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

  sleecCompile(text) {
    // let trimmedText = trimReqtText(text)
    var chars = new antlr4.InputStream(text);
    var lexer = new RequirementLexer.RequirementLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new RequirementParser.RequirementParser(tokens);
    // var annotations = [];
    // var listener = new AnnotatingErrorListener.AnnotatingErrorListener(annotations);
    // lexer.removeErrorListeners();
    // lexer.addErrorListener(listener);
    // parser.removeErrorListeners();
    // parser.addErrorListener(listener);
    var tree = parser[REQ_BODY_CTX_RULE]();
    // if (annotations.length > 0)
    //   return {parseErrors: annotations.map(a => a.text).join('; ' )}
    sleecsemanticsAnalyzer.clearResult();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(sleecsemanticsAnalyzer, tree);
    // const reqtErrors = checkReqt(text)
    // if (reqtErrors.length > 0) return {parseErrors: reqtErrors}else return {
      this.state.semantics = sleecsemanticsAnalyzer.semantics();
      return this.state.semantics;

  }


  handleTextChange = (event) => {
    const fulltext = event.target.value;
    
    // Parse while typing to show errors in real-time
    //MM: change to SLEEC ones..
    // const result = FretSemantics.compilePartialText(fulltext);
    this.setState({ 
      fulltext,
      // errors: result.parseErrors || null,
    });
//CLAUDE
    // if (this.props.onTextChange) {
    //   this.props.onTextChange(fulltext);
    // }
  }
  handleSemanticsClick = () => {
    let fretish_break = this.sleecCompile(this.state.fulltext)
    let result=[];
    fretish_break.forEach(element => {
      result.push({...FretSemantics.compile(element),fulltext: element});
    });
    // const result = FretSemantics.compile(this.state.fulltext);
    console.log(result);

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
       else{
      this.setState({ 
        semantics: result.collectedSemantics,
        errors: null,
        buttonClicked: true
      });
      
      // Notify parent about successful semantics extraction
      if (this.props.onSemanticsUpdate) {
        this.props.onSemanticsUpdate(result, null);
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