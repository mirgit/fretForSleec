// Generated from Requirement.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RequirementParser.
function RequirementListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RequirementListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RequirementListener.prototype.constructor = RequirementListener;

// Enter a parse tree produced by RequirementParser#reqt_body.
RequirementListener.prototype.enterReqt_body = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#reqt_body.
RequirementListener.prototype.exitReqt_body = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#freeform.
RequirementListener.prototype.enterFreeform = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#freeform.
RequirementListener.prototype.exitFreeform = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#nasa.
RequirementListener.prototype.enterNasa = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#nasa.
RequirementListener.prototype.exitNasa = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#sleec.
RequirementListener.prototype.enterSleec = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#sleec.
RequirementListener.prototype.exitSleec = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#sleec_scope.
RequirementListener.prototype.enterSleec_scope = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#sleec_scope.
RequirementListener.prototype.exitSleec_scope = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#sleec_timing.
RequirementListener.prototype.enterSleec_timing = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#sleec_timing.
RequirementListener.prototype.exitSleec_timing = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#trigger.
RequirementListener.prototype.enterTrigger = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#trigger.
RequirementListener.prototype.exitTrigger = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#defeater.
RequirementListener.prototype.enterDefeater = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#defeater.
RequirementListener.prototype.exitDefeater = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#action.
RequirementListener.prototype.enterAction = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#action.
RequirementListener.prototype.exitAction = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#obligation.
RequirementListener.prototype.enterObligation = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#obligation.
RequirementListener.prototype.exitObligation = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#cond_expression.
RequirementListener.prototype.enterCond_expression = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#cond_expression.
RequirementListener.prototype.exitCond_expression = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#obl_expression.
RequirementListener.prototype.enterObl_expression = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#obl_expression.
RequirementListener.prototype.exitObl_expression = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#predicate.
RequirementListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#predicate.
RequirementListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#atomic_predicate.
RequirementListener.prototype.enterAtomic_predicate = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#atomic_predicate.
RequirementListener.prototype.exitAtomic_predicate = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#comparison_predicate.
RequirementListener.prototype.enterComparison_predicate = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#comparison_predicate.
RequirementListener.prototype.exitComparison_predicate = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#var_name.
RequirementListener.prototype.enterVar_name = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#var_name.
RequirementListener.prototype.exitVar_name = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#scope.
RequirementListener.prototype.enterScope = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#scope.
RequirementListener.prototype.exitScope = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#reqt_condition.
RequirementListener.prototype.enterReqt_condition = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#reqt_condition.
RequirementListener.prototype.exitReqt_condition = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#regular_condition.
RequirementListener.prototype.enterRegular_condition = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#regular_condition.
RequirementListener.prototype.exitRegular_condition = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#qualifier_word.
RequirementListener.prototype.enterQualifier_word = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#qualifier_word.
RequirementListener.prototype.exitQualifier_word = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#qualified_condition1.
RequirementListener.prototype.enterQualified_condition1 = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#qualified_condition1.
RequirementListener.prototype.exitQualified_condition1 = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#qualified_condition2.
RequirementListener.prototype.enterQualified_condition2 = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#qualified_condition2.
RequirementListener.prototype.exitQualified_condition2 = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#scope_condition.
RequirementListener.prototype.enterScope_condition = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#scope_condition.
RequirementListener.prototype.exitScope_condition = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#scope_mode.
RequirementListener.prototype.enterScope_mode = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#scope_mode.
RequirementListener.prototype.exitScope_mode = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#pre_condition.
RequirementListener.prototype.enterPre_condition = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#pre_condition.
RequirementListener.prototype.exitPre_condition = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#stop_condition.
RequirementListener.prototype.enterStop_condition = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#stop_condition.
RequirementListener.prototype.exitStop_condition = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#component.
RequirementListener.prototype.enterComponent = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#component.
RequirementListener.prototype.exitComponent = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#response.
RequirementListener.prototype.enterResponse = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#response.
RequirementListener.prototype.exitResponse = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#satisfaction.
RequirementListener.prototype.enterSatisfaction = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#satisfaction.
RequirementListener.prototype.exitSatisfaction = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#probability.
RequirementListener.prototype.enterProbability = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#probability.
RequirementListener.prototype.exitProbability = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#probability_aux.
RequirementListener.prototype.enterProbability_aux = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#probability_aux.
RequirementListener.prototype.exitProbability_aux = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#prob_num.
RequirementListener.prototype.enterProb_num = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#prob_num.
RequirementListener.prototype.exitProb_num = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#timing.
RequirementListener.prototype.enterTiming = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#timing.
RequirementListener.prototype.exitTiming = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#timing_aux.
RequirementListener.prototype.enterTiming_aux = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#timing_aux.
RequirementListener.prototype.exitTiming_aux = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#duration_upper.
RequirementListener.prototype.enterDuration_upper = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#duration_upper.
RequirementListener.prototype.exitDuration_upper = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#duration_lower.
RequirementListener.prototype.enterDuration_lower = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#duration_lower.
RequirementListener.prototype.exitDuration_lower = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#component_name.
RequirementListener.prototype.enterComponent_name = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#component_name.
RequirementListener.prototype.exitComponent_name = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#mode_name.
RequirementListener.prototype.enterMode_name = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#mode_name.
RequirementListener.prototype.exitMode_name = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#duration.
RequirementListener.prototype.enterDuration = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#duration.
RequirementListener.prototype.exitDuration = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#timeunit.
RequirementListener.prototype.enterTimeunit = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#timeunit.
RequirementListener.prototype.exitTimeunit = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#post_condition.
RequirementListener.prototype.enterPost_condition = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#post_condition.
RequirementListener.prototype.exitPost_condition = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#bool_expr.
RequirementListener.prototype.enterBool_expr = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#bool_expr.
RequirementListener.prototype.exitBool_expr = function(ctx) {
};


// Enter a parse tree produced by RequirementParser#numeric_expr.
RequirementListener.prototype.enterNumeric_expr = function(ctx) {
};

// Exit a parse tree produced by RequirementParser#numeric_expr.
RequirementListener.prototype.exitNumeric_expr = function(ctx) {
};



exports.RequirementListener = RequirementListener;