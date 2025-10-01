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
      prev_time : '',
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
    let conds = sleecParse.prev_conds;
     if(sleecParse.last_cond !=''){
        conds+= '& ' + sleecParse.last_cond;
    }
    let finalrule = sleecParse.scope+'Whenever ('+ conds+') Component shall '+sleecParse.last_time+'satisfy '+ sleecParse.last_oblg;
    sleecParse.FRETishReqs.push(finalrule);
};

RequirementListener.prototype.enterSleec_scope = function(ctx){
  sleecParse.scope = antlrUtilities.getText(ctx).trim()+' ';

};

RequirementListener.prototype.enterTrigger = function(ctx) {
    sleecParse.prev_conds = antlrUtilities.getText(ctx).trim();
};


RequirementListener.prototype.enterDefeater = function(ctx) {
    sleecParse.prev_time = sleecParse.last_time;
    sleecParse.last_time = '';
    if(sleecParse.last_cond !=''){
        sleecParse.prev_conds+= '& ' + sleecParse.last_cond;
    }
    sleecParse.last_cond = antlrUtilities.getText(ctx).trim();

};


RequirementListener.prototype.enterAction = function(ctx) {
    sleecParse.last_oblg = antlrUtilities.getText(ctx).trim();
};


RequirementListener.prototype.enterObligation = function(ctx) {
    let newrule = sleecParse.scope+'Whenever ('+ sleecParse.prev_conds+' & ! '+ sleecParse.last_cond+') Component shall '+sleecParse.prev_time+'satisfy '+ sleecParse.last_oblg;
    sleecParse.FRETishReqs.push(newrule);
    sleecParse.last_oblg = antlrUtilities.getText(ctx).trim();
};

RequirementListener.prototype.enterSleec_timing = function(ctx) {
    sleecParse.last_time = antlrUtilities.getText(ctx).trim()+' ';
};

SleecSemanticsAnalyzer.prototype.semantics = () => {
    return sleecParse.FRETishReqs;
};


SleecSemanticsAnalyzer.prototype.clearResult = () => {
    sleecParse = {};
};

// SleecSemanticsAnalyzer.prototype.semanticsNoFormalization = () => {
//   return sleecParse;
// }

exports.SleecSemanticsAnalyzer = SleecSemanticsAnalyzer;
