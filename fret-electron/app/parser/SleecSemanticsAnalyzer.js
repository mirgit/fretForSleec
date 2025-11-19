const constants = require('./Constants');
const RequirementListener = require('./RequirementListener').RequirementListener;
const AntlrUtilities = require('../parser/AntlrUtilities').AntlrUtilities;
const antlrUtilities = new AntlrUtilities();
// const utilities = require('../../support/utilities');
// const utils = require('../../support/utils');
// const fetchSemantics = require('./FetchSemantics');
// const astsem = require('../../support/LTLParser/LTLASTSemantics');
// const xform = require('../../support/xform');

var sleecParse = {};

function initialize(type) {
  sleecParse = {
      type: type,
      scope : '',
      prev_conds : '',
      last_cond : '',
      last_time : '',
      last_oblg : '',
      FRETishReqs : []
//      timing: 'null',
    //   response: 'action',
    //   variables: []
  }
}

function SleecSemanticsAnalyzer() {
  RequirementListener.call(this);
  return this;
}

// inherit default listener
SleecSemanticsAnalyzer.prototype = Object.create(RequirementListener.prototype);
SleecSemanticsAnalyzer.prototype.constructor = SleecSemanticsAnalyzer;

RequirementListener.prototype.enterSleec = function(ctx) {
  initialize('Sleec');
};
RequirementListener.prototype.exitSleec = function(ctx) {
    let newrule = sleecParse.scope+' Whenever ( '+ sleecParse.prev_conds+' & '+
                    sleecParse.last_cond+' ) Component shall '+sleecParse.last_time+' satisfy '+ sleecParse.last_oblg;
    sleecParse.FRETishReqs.push(newrule);
    
    
};

SleecSemanticsAnalyzer.prototype.enterScope = function(ctx){
  sleecParse.scope = antlrUtilities.getText(ctx).trim();

};

SleecSemanticsAnalyzer.prototype.enterTrigger = function(ctx) {
    sleecParse.prev_conds = antlrUtilities.getText(ctx).trim();
};


SleecSemanticsAnalyzer.prototype.enterDefeater = function(ctx) {
    if(sleecParse.last_cond !=''){
        sleecParse.prev_conds+= '& ' + last_cond;
    }
    sleecParse.last_cond = antlrUtilities.getText(ctx).trim();

};


SleecSemanticsAnalyzer.prototype.enterAction = function(ctx) {
    sleecParse.last_oblg = antlrUtilities.getText(ctx).trim();
};


SleecSemanticsAnalyzer.prototype.enterObligation = function(ctx) {
    let newrule = sleecParse.scope+' Whenever ( '+ sleecParse.prev_conds+' & ! '+
                    sleecParse.last_cond+' ) Component shall '+sleecParse.last_time+' satisfy '+ sleecParse.last_oblg;
    sleecParse.FRETishReqs.push(newrule);
    sleecParse.last_oblg = antlrUtilities.getText(ctx).trim();
};

SleecSemanticsAnalyzer.prototype.enterTiming = function(ctx) {
    sleecParse.last_time = antlrUtilities.getText(ctx).trim();
};

SleecSemanticsAnalyzer.prototype.semantics = () => {
    return sleecParse.FRETishReqs;
};


SleecSemanticsAnalyzer.prototype.clearSemantics = () => {
    sleecParse = {};
};

// SleecSemanticsAnalyzer.prototype.semanticsNoFormalization = () => {
//   return sleecParse;
// }

exports.SleecSemanticsAnalyzer = SleecSemanticsAnalyzer;
