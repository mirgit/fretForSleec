// Generated from Requirement.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RequirementListener = require('./RequirementListener').RequirementListener;
var grammarFileName = "Requirement.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003P\u01e1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002X\n\u0002\u0003\u0002\u0005\u0002",
    "[\n\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0005\u0004`\n\u0004\u0003",
    "\u0004\u0005\u0004c\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004j\n\u0004\u0003\u0004\u0005\u0004m\n\u0004",
    "\u0003\u0004\u0005\u0004p\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0005\u0005u\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005{\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u007f\n\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u0085\n",
    "\u0005\u0003\u0005\u0003\u0005\u0007\u0005\u0089\n\u0005\f\u0005\u000e",
    "\u0005\u008c\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u00a0\n\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00a8\n\n\f",
    "\n\u000e\n\u00ab\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000b\u00b3\n\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0007\u000b\u00b8\n\u000b\f\u000b\u000e\u000b\u00bb",
    "\u000b\u000b\u0003\f\u0003\f\u0003\f\u0005\f\u00c0\n\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00cd\n\u0010",
    "\u0003\u0010\u0005\u0010\u00d0\n\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00d8\n\u0010",
    "\u0005\u0010\u00da\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00df\n\u0010\u0003\u0010\u0005\u0010\u00e2\n\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u00e7\n\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00eb\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00f9\n\u0010\u0005",
    "\u0010\u00fb\n\u0010\u0003\u0010\u0005\u0010\u00fe\n\u0010\u0003\u0011",
    "\u0005\u0011\u0101\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u0107\n\u0012\u0003\u0012\u0007\u0012\u010a\n\u0012",
    "\f\u0012\u000e\u0012\u010d\u000b\u0012\u0003\u0012\u0005\u0012\u0110",
    "\n\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u0118\n\u0014\u0003\u0015\u0005\u0015\u011b",
    "\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u0121\n\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u012b\n\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0005\u001a",
    "\u0132\n\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0005\u001d\u013c\n\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u0141\n\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    " \u0005 \u014a\n \u0003 \u0003 \u0005 \u014e\n \u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0005!\u0163\n!\u0003\"",
    "\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0005)\u0191\n)\u0003)\u0003)\u0003)\u0005)\u0196",
    "\n)\u0007)\u0198\n)\f)\u000e)\u019b\u000b)\u0005)\u019d\n)\u0003)\u0005",
    ")\u01a0\n)\u0003)\u0003)\u0005)\u01a4\n)\u0003)\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0007)\u01af\n)\f)\u000e)\u01b2",
    "\u000b)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0005",
    "*\u01bc\n*\u0003*\u0003*\u0003*\u0005*\u01c1\n*\u0007*\u01c3\n*\f*\u000e",
    "*\u01c6\u000b*\u0005*\u01c8\n*\u0003*\u0005*\u01cb\n*\u0003*\u0003*",
    "\u0003*\u0003*\u0005*\u01d1\n*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0007*\u01dc\n*\f*\u000e*\u01df\u000b*\u0003",
    "*\u0002\u0006\u0012\u0014PR+\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPR\u0002",
    "\u0012\u0004\u0002LLOO\u0004\u0002##EE\u0004\u0002\u0016\u0016\u001a",
    "\u001a\u0004\u0002\u001b\u001b%%\u0006\u0002##AACCEG\u0004\u0002\u001e",
    "\u001e@@\u0004\u0002\u0018\u001855\u0006\u0002  ))0088\u0004\u0002$",
    "$&&\u0006\u0002\"\"*,::>>\u0004\u0002\u0005\u0005\u000b\u000b\u0004",
    "\u00020066\u0004\u0002\u0007\u0007KK\u0003\u0002\f\u000f\u0004\u0002",
    "\u0013\u0014--\u0004\u0002\u0012\u0012\u0015\u0015\u0002\u020f\u0002",
    "W\u0003\u0002\u0002\u0002\u0004\\\u0003\u0002\u0002\u0002\u0006_\u0003",
    "\u0002\u0002\u0002\bt\u0003\u0002\u0002\u0002\n\u008f\u0003\u0002\u0002",
    "\u0002\f\u0091\u0003\u0002\u0002\u0002\u000e\u0093\u0003\u0002\u0002",
    "\u0002\u0010\u0095\u0003\u0002\u0002\u0002\u0012\u009f\u0003\u0002\u0002",
    "\u0002\u0014\u00b2\u0003\u0002\u0002\u0002\u0016\u00bf\u0003\u0002\u0002",
    "\u0002\u0018\u00c1\u0003\u0002\u0002\u0002\u001a\u00c3\u0003\u0002\u0002",
    "\u0002\u001c\u00c7\u0003\u0002\u0002\u0002\u001e\u00fa\u0003\u0002\u0002",
    "\u0002 \u0100\u0003\u0002\u0002\u0002\"\u0104\u0003\u0002\u0002\u0002",
    "$\u0111\u0003\u0002\u0002\u0002&\u0113\u0003\u0002\u0002\u0002(\u011a",
    "\u0003\u0002\u0002\u0002*\u0122\u0003\u0002\u0002\u0002,\u012a\u0003",
    "\u0002\u0002\u0002.\u012c\u0003\u0002\u0002\u00020\u012e\u0003\u0002",
    "\u0002\u00022\u0131\u0003\u0002\u0002\u00024\u0135\u0003\u0002\u0002",
    "\u00026\u0137\u0003\u0002\u0002\u00028\u013b\u0003\u0002\u0002\u0002",
    ":\u0142\u0003\u0002\u0002\u0002<\u0146\u0003\u0002\u0002\u0002>\u0149",
    "\u0003\u0002\u0002\u0002@\u0162\u0003\u0002\u0002\u0002B\u0164\u0003",
    "\u0002\u0002\u0002D\u0166\u0003\u0002\u0002\u0002F\u0168\u0003\u0002",
    "\u0002\u0002H\u016a\u0003\u0002\u0002\u0002J\u016c\u0003\u0002\u0002",
    "\u0002L\u016f\u0003\u0002\u0002\u0002N\u0171\u0003\u0002\u0002\u0002",
    "P\u01a3\u0003\u0002\u0002\u0002R\u01d0\u0003\u0002\u0002\u0002TX\u0005",
    "\u0006\u0004\u0002UX\u0005\b\u0005\u0002VX\u0005\u0004\u0003\u0002W",
    "T\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002WV\u0003\u0002\u0002",
    "\u0002XZ\u0003\u0002\u0002\u0002Y[\u0007\u0003\u0002\u0002ZY\u0003\u0002",
    "\u0002\u0002Z[\u0003\u0002\u0002\u0002[\u0003\u0003\u0002\u0002\u0002",
    "\\]\u0007M\u0002\u0002]\u0005\u0003\u0002\u0002\u0002^`\u0005\u001e",
    "\u0010\u0002_^\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`b\u0003",
    "\u0002\u0002\u0002ac\u0005 \u0011\u0002ba\u0003\u0002\u0002\u0002bc",
    "\u0003\u0002\u0002\u0002ci\u0003\u0002\u0002\u0002de\u00052\u001a\u0002",
    "ef\u0007;\u0002\u0002fj\u0003\u0002\u0002\u0002gh\u0007;\u0002\u0002",
    "hj\u00052\u001a\u0002id\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002",
    "\u0002jl\u0003\u0002\u0002\u0002km\u00058\u001d\u0002lk\u0003\u0002",
    "\u0002\u0002lm\u0003\u0002\u0002\u0002mo\u0003\u0002\u0002\u0002np\u0005",
    "> \u0002on\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002pq\u0003",
    "\u0002\u0002\u0002qr\u00054\u001b\u0002r\u0007\u0003\u0002\u0002\u0002",
    "su\u0005\u001e\u0010\u0002ts\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002",
    "\u0002uv\u0003\u0002\u0002\u0002vw\u0007#\u0002\u0002wx\u0005\n\u0006",
    "\u0002xz\u0007=\u0002\u0002y{\u0005> \u0002zy\u0003\u0002\u0002\u0002",
    "z{\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u008a\u0005\u000e",
    "\b\u0002}\u007f\u0007\u0004\u0002\u0002~}\u0003\u0002\u0002\u0002~\u007f",
    "\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0081",
    "\u0007A\u0002\u0002\u0081\u0082\u0005\f\u0007\u0002\u0082\u0084\u0007",
    "(\u0002\u0002\u0083\u0085\u0005> \u0002\u0084\u0083\u0003\u0002\u0002",
    "\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002",
    "\u0002\u0086\u0087\u0005\u0010\t\u0002\u0087\u0089\u0003\u0002\u0002",
    "\u0002\u0088~\u0003\u0002\u0002\u0002\u0089\u008c\u0003\u0002\u0002",
    "\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002",
    "\u0002\u008b\u008d\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0007\u0002\u0002\u0003\u008e\t\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0005\u0012\n\u0002\u0090\u000b\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0005\u0012\n\u0002\u0092\r\u0003\u0002\u0002\u0002",
    "\u0093\u0094\u0005\u0014\u000b\u0002\u0094\u000f\u0003\u0002\u0002\u0002",
    "\u0095\u0096\u0005\u0014\u000b\u0002\u0096\u0011\u0003\u0002\u0002\u0002",
    "\u0097\u0098\b\n\u0001\u0002\u0098\u0099\u0007\u0005\u0002\u0002\u0099",
    "\u00a0\u0005\u0012\n\u0007\u009a\u009b\u0007\b\u0002\u0002\u009b\u009c",
    "\u0005\u0012\n\u0002\u009c\u009d\u0007\t\u0002\u0002\u009d\u00a0\u0003",
    "\u0002\u0002\u0002\u009e\u00a0\u0005\u0016\f\u0002\u009f\u0097\u0003",
    "\u0002\u0002\u0002\u009f\u009a\u0003\u0002\u0002\u0002\u009f\u009e\u0003",
    "\u0002\u0002\u0002\u00a0\u00a9\u0003\u0002\u0002\u0002\u00a1\u00a2\f",
    "\u0006\u0002\u0002\u00a2\u00a3\u0007\u0006\u0002\u0002\u00a3\u00a8\u0005",
    "\u0012\n\u0007\u00a4\u00a5\f\u0005\u0002\u0002\u00a5\u00a6\u0007\u0007",
    "\u0002\u0002\u00a6\u00a8\u0005\u0012\n\u0006\u00a7\u00a1\u0003\u0002",
    "\u0002\u0002\u00a7\u00a4\u0003\u0002\u0002\u0002\u00a8\u00ab\u0003\u0002",
    "\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002",
    "\u0002\u0002\u00aa\u0013\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\b\u000b\u0001\u0002\u00ad\u00ae\u0007\b\u0002",
    "\u0002\u00ae\u00af\u0005\u0014\u000b\u0002\u00af\u00b0\u0007\t\u0002",
    "\u0002\u00b0\u00b3\u0003\u0002\u0002\u0002\u00b1\u00b3\u0005\u0016\f",
    "\u0002\u00b2\u00ac\u0003\u0002\u0002\u0002\u00b2\u00b1\u0003\u0002\u0002",
    "\u0002\u00b3\u00b9\u0003\u0002\u0002\u0002\u00b4\u00b5\f\u0005\u0002",
    "\u0002\u00b5\u00b6\u0007\u0006\u0002\u0002\u00b6\u00b8\u0005\u0014\u000b",
    "\u0006\u00b7\u00b4\u0003\u0002\u0002\u0002\u00b8\u00bb\u0003\u0002\u0002",
    "\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002",
    "\u0002\u00ba\u0015\u0003\u0002\u0002\u0002\u00bb\u00b9\u0003\u0002\u0002",
    "\u0002\u00bc\u00c0\u0005\u0018\r\u0002\u00bd\u00c0\u0005\u001a\u000e",
    "\u0002\u00be\u00c0\u0007\n\u0002\u0002\u00bf\u00bc\u0003\u0002\u0002",
    "\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00bf\u00be\u0003\u0002\u0002",
    "\u0002\u00c0\u0017\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007L\u0002",
    "\u0002\u00c2\u0019\u0003\u0002\u0002\u0002\u00c3\u00c4\u0005\u001c\u000f",
    "\u0002\u00c4\u00c5\u0007N\u0002\u0002\u00c5\u00c6\u0005\u001c\u000f",
    "\u0002\u00c6\u001b\u0003\u0002\u0002\u0002\u00c7\u00c8\t\u0002\u0002",
    "\u0002\u00c8\u001d\u0003\u0002\u0002\u0002\u00c9\u00d9\u00074\u0002",
    "\u0002\u00ca\u00d0\u0007\u001b\u0002\u0002\u00cb\u00cd\t\u0003\u0002",
    "\u0002\u00cc\u00cb\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002",
    "\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00d0\u0007%\u0002",
    "\u0002\u00cf\u00ca\u0003\u0002\u0002\u0002\u00cf\u00cc\u0003\u0002\u0002",
    "\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00da\u0005,\u0017",
    "\u0002\u00d2\u00d3\u0007H\u0002\u0002\u00d3\u00da\u0005*\u0016\u0002",
    "\u00d4\u00d7\t\u0004\u0002\u0002\u00d5\u00d8\u0005,\u0017\u0002\u00d6",
    "\u00d8\u0005*\u0016\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d7",
    "\u00d6\u0003\u0002\u0002\u0002\u00d8\u00da\u0003\u0002\u0002\u0002\u00d9",
    "\u00cf\u0003\u0002\u0002\u0002\u00d9\u00d2\u0003\u0002\u0002\u0002\u00d9",
    "\u00d4\u0003\u0002\u0002\u0002\u00da\u00fb\u0003\u0002\u0002\u0002\u00db",
    "\u00e6\u0007\u001d\u0002\u0002\u00dc\u00e2\u0007\u001b\u0002\u0002\u00dd",
    "\u00df\t\u0003\u0002\u0002\u00de\u00dd\u0003\u0002\u0002\u0002\u00de",
    "\u00df\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0",
    "\u00e2\u0007%\u0002\u0002\u00e1\u00dc\u0003\u0002\u0002\u0002\u00e1",
    "\u00de\u0003\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3",
    "\u00e7\u0005,\u0017\u0002\u00e4\u00e5\u0007H\u0002\u0002\u00e5\u00e7",
    "\u0005*\u0016\u0002\u00e6\u00e1\u0003\u0002\u0002\u0002\u00e6\u00e4",
    "\u0003\u0002\u0002\u0002\u00e7\u00fb\u0003\u0002\u0002\u0002\u00e8\u00ea",
    "\t\u0003\u0002\u0002\u00e9\u00eb\u00071\u0002\u0002\u00ea\u00e9\u0003",
    "\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003",
    "\u0002\u0002\u0002\u00ec\u00ed\u0007%\u0002\u0002\u00ed\u00fb\u0005",
    ",\u0017\u0002\u00ee\u00ef\t\u0005\u0002\u0002\u00ef\u00fb\u0005,\u0017",
    "\u0002\u00f0\u00f1\u0007A\u0002\u0002\u00f1\u00f2\u0007%\u0002\u0002",
    "\u00f2\u00fb\u0005,\u0017\u0002\u00f3\u00f4\u0007H\u0002\u0002\u00f4",
    "\u00fb\u0005*\u0016\u0002\u00f5\u00f8\t\u0004\u0002\u0002\u00f6\u00f9",
    "\u0005,\u0017\u0002\u00f7\u00f9\u0005*\u0016\u0002\u00f8\u00f6\u0003",
    "\u0002\u0002\u0002\u00f8\u00f7\u0003\u0002\u0002\u0002\u00f9\u00fb\u0003",
    "\u0002\u0002\u0002\u00fa\u00c9\u0003\u0002\u0002\u0002\u00fa\u00db\u0003",
    "\u0002\u0002\u0002\u00fa\u00e8\u0003\u0002\u0002\u0002\u00fa\u00ee\u0003",
    "\u0002\u0002\u0002\u00fa\u00f0\u0003\u0002\u0002\u0002\u00fa\u00f3\u0003",
    "\u0002\u0002\u0002\u00fa\u00f5\u0003\u0002\u0002\u0002\u00fb\u00fd\u0003",
    "\u0002\u0002\u0002\u00fc\u00fe\u0007\u0004\u0002\u0002\u00fd\u00fc\u0003",
    "\u0002\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe\u001f\u0003",
    "\u0002\u0002\u0002\u00ff\u0101\u0007\u0018\u0002\u0002\u0100\u00ff\u0003",
    "\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0102\u0003",
    "\u0002\u0002\u0002\u0102\u0103\u0005\"\u0012\u0002\u0103!\u0003\u0002",
    "\u0002\u0002\u0104\u010b\u0005&\u0014\u0002\u0105\u0107\u0007\u0004",
    "\u0002\u0002\u0106\u0105\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002",
    "\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u010a\u0005(",
    "\u0015\u0002\u0109\u0106\u0003\u0002\u0002\u0002\u010a\u010d\u0003\u0002",
    "\u0002\u0002\u010b\u0109\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002",
    "\u0002\u0002\u010c\u010f\u0003\u0002\u0002\u0002\u010d\u010b\u0003\u0002",
    "\u0002\u0002\u010e\u0110\u0007\u0004\u0002\u0002\u010f\u010e\u0003\u0002",
    "\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u0110#\u0003\u0002",
    "\u0002\u0002\u0111\u0112\t\u0006\u0002\u0002\u0112%\u0003\u0002\u0002",
    "\u0002\u0113\u0114\u0005$\u0013\u0002\u0114\u0117\u0005.\u0018\u0002",
    "\u0115\u0116\u0007\'\u0002\u0002\u0116\u0118\t\u0007\u0002\u0002\u0117",
    "\u0115\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002\u0118",
    "\'\u0003\u0002\u0002\u0002\u0119\u011b\t\b\u0002\u0002\u011a\u0119\u0003",
    "\u0002\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u011c\u0003",
    "\u0002\u0002\u0002\u011c\u011d\u0005$\u0013\u0002\u011d\u0120\u0005",
    ".\u0018\u0002\u011e\u011f\u0007\'\u0002\u0002\u011f\u0121\t\u0007\u0002",
    "\u0002\u0120\u011e\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002",
    "\u0002\u0121)\u0003\u0002\u0002\u0002\u0122\u0123\u0005P)\u0002\u0123",
    "+\u0003\u0002\u0002\u0002\u0124\u0125\u0007.\u0002\u0002\u0125\u012b",
    "\u0005H%\u0002\u0126\u0127\u0005H%\u0002\u0127\u0128\u0007.\u0002\u0002",
    "\u0128\u012b\u0003\u0002\u0002\u0002\u0129\u012b\u0005H%\u0002\u012a",
    "\u0124\u0003\u0002\u0002\u0002\u012a\u0126\u0003\u0002\u0002\u0002\u012a",
    "\u0129\u0003\u0002\u0002\u0002\u012b-\u0003\u0002\u0002\u0002\u012c",
    "\u012d\u0005P)\u0002\u012d/\u0003\u0002\u0002\u0002\u012e\u012f\u0005",
    "P)\u0002\u012f1\u0003\u0002\u0002\u0002\u0130\u0132\u0007<\u0002\u0002",
    "\u0131\u0130\u0003\u0002\u0002\u0002\u0131\u0132\u0003\u0002\u0002\u0002",
    "\u0132\u0133\u0003\u0002\u0002\u0002\u0133\u0134\u0005F$\u0002\u0134",
    "3\u0003\u0002\u0002\u0002\u0135\u0136\u00056\u001c\u0002\u01365\u0003",
    "\u0002\u0002\u0002\u0137\u0138\u00079\u0002\u0002\u0138\u0139\u0005",
    "N(\u0002\u01397\u0003\u0002\u0002\u0002\u013a\u013c\u0007\u0004\u0002",
    "\u0002\u013b\u013a\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002",
    "\u0002\u013c\u013d\u0003\u0002\u0002\u0002\u013d\u013e\u0007I\u0002",
    "\u0002\u013e\u0140\u0005:\u001e\u0002\u013f\u0141\u0007\u0004\u0002",
    "\u0002\u0140\u013f\u0003\u0002\u0002\u0002\u0140\u0141\u0003\u0002\u0002",
    "\u0002\u01419\u0003\u0002\u0002\u0002\u0142\u0143\u00077\u0002\u0002",
    "\u0143\u0144\u0007N\u0002\u0002\u0144\u0145\u0005<\u001f\u0002\u0145",
    ";\u0003\u0002\u0002\u0002\u0146\u0147\u0007O\u0002\u0002\u0147=\u0003",
    "\u0002\u0002\u0002\u0148\u014a\u0007\u0004\u0002\u0002\u0149\u0148\u0003",
    "\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014a\u014b\u0003",
    "\u0002\u0002\u0002\u014b\u014d\u0005@!\u0002\u014c\u014e\u0007\u0004",
    "\u0002\u0002\u014d\u014c\u0003\u0002\u0002\u0002\u014d\u014e\u0003\u0002",
    "\u0002\u0002\u014e?\u0003\u0002\u0002\u0002\u014f\u0150\u0007J\u0002",
    "\u0002\u0150\u0163\u0005B\"\u0002\u0151\u0152\u0007!\u0002\u0002\u0152",
    "\u0163\u0005B\"\u0002\u0153\u0154\u0007\u0016\u0002\u0002\u0154\u0163",
    "\u0005D#\u0002\u0155\u0156\u0007B\u0002\u0002\u0156\u0163\u00050\u0019",
    "\u0002\u0157\u0158\u0007\u001a\u0002\u0002\u0158\u0163\u00050\u0019",
    "\u0002\u0159\u015a\u0007\u0019\u0002\u0002\u015a\u015b\u0007<\u0002",
    "\u0002\u015b\u015c\t\t\u0002\u0002\u015c\u0163\u0007?\u0002\u0002\u015d",
    "\u0163\t\n\u0002\u0002\u015e\u0163\u0007\u001f\u0002\u0002\u015f\u0163",
    "\u0007\u001c\u0002\u0002\u0160\u0163\u0007\u0017\u0002\u0002\u0161\u0163",
    "\u0007/\u0002\u0002\u0162\u014f\u0003\u0002\u0002\u0002\u0162\u0151",
    "\u0003\u0002\u0002\u0002\u0162\u0153\u0003\u0002\u0002\u0002\u0162\u0155",
    "\u0003\u0002\u0002\u0002\u0162\u0157\u0003\u0002\u0002\u0002\u0162\u0159",
    "\u0003\u0002\u0002\u0002\u0162\u015d\u0003\u0002\u0002\u0002\u0162\u015e",
    "\u0003\u0002\u0002\u0002\u0162\u015f\u0003\u0002\u0002\u0002\u0162\u0160",
    "\u0003\u0002\u0002\u0002\u0162\u0161\u0003\u0002\u0002\u0002\u0163A",
    "\u0003\u0002\u0002\u0002\u0164\u0165\u0005J&\u0002\u0165C\u0003\u0002",
    "\u0002\u0002\u0166\u0167\u0005J&\u0002\u0167E\u0003\u0002\u0002\u0002",
    "\u0168\u0169\u0007L\u0002\u0002\u0169G\u0003\u0002\u0002\u0002\u016a",
    "\u016b\u0007L\u0002\u0002\u016bI\u0003\u0002\u0002\u0002\u016c\u016d",
    "\u0007O\u0002\u0002\u016d\u016e\u0005L\'\u0002\u016eK\u0003\u0002\u0002",
    "\u0002\u016f\u0170\t\u000b\u0002\u0002\u0170M\u0003\u0002\u0002\u0002",
    "\u0171\u0172\u0005P)\u0002\u0172O\u0003\u0002\u0002\u0002\u0173\u0174",
    "\b)\u0001\u0002\u0174\u0175\t\f\u0002\u0002\u0175\u01a4\u0005P)\r\u0176",
    "\u0177\u0007#\u0002\u0002\u0177\u0178\u0005P)\u0002\u0178\u0179\u0007",
    "=\u0002\u0002\u0179\u017a\u0005P)\t\u017a\u01a4\u0003\u0002\u0002\u0002",
    "\u017b\u017c\u0007\u0019\u0002\u0002\u017c\u017d\u0007<\u0002\u0002",
    "\u017d\u017e\t\r\u0002\u0002\u017e\u017f\u00072\u0002\u0002\u017f\u0180",
    "\u00073\u0002\u0002\u0180\u0181\u0005P)\u0002\u0181\u0182\u0007\u0004",
    "\u0002\u0002\u0182\u0183\u0005P)\b\u0183\u01a4\u0003\u0002\u0002\u0002",
    "\u0184\u0185\u0007\b\u0002\u0002\u0185\u0186\u0005P)\u0002\u0186\u0187",
    "\u0007\t\u0002\u0002\u0187\u01a4\u0003\u0002\u0002\u0002\u0188\u0189",
    "\u0005R*\u0002\u0189\u018a\u0007N\u0002\u0002\u018a\u018b\u0005R*\u0002",
    "\u018b\u01a4\u0003\u0002\u0002\u0002\u018c\u019f\u0007L\u0002\u0002",
    "\u018d\u019c\u0007\b\u0002\u0002\u018e\u0191\u0005P)\u0002\u018f\u0191",
    "\u0005R*\u0002\u0190\u018e\u0003\u0002\u0002\u0002\u0190\u018f\u0003",
    "\u0002\u0002\u0002\u0191\u0199\u0003\u0002\u0002\u0002\u0192\u0195\u0007",
    "\u0004\u0002\u0002\u0193\u0196\u0005P)\u0002\u0194\u0196\u0005R*\u0002",
    "\u0195\u0193\u0003\u0002\u0002\u0002\u0195\u0194\u0003\u0002\u0002\u0002",
    "\u0196\u0198\u0003\u0002\u0002\u0002\u0197\u0192\u0003\u0002\u0002\u0002",
    "\u0198\u019b\u0003\u0002\u0002\u0002\u0199\u0197\u0003\u0002\u0002\u0002",
    "\u0199\u019a\u0003\u0002\u0002\u0002\u019a\u019d\u0003\u0002\u0002\u0002",
    "\u019b\u0199\u0003\u0002\u0002\u0002\u019c\u0190\u0003\u0002\u0002\u0002",
    "\u019c\u019d\u0003\u0002\u0002\u0002\u019d\u019e\u0003\u0002\u0002\u0002",
    "\u019e\u01a0\u0007\t\u0002\u0002\u019f\u018d\u0003\u0002\u0002\u0002",
    "\u019f\u01a0\u0003\u0002\u0002\u0002\u01a0\u01a4\u0003\u0002\u0002\u0002",
    "\u01a1\u01a4\u0007\n\u0002\u0002\u01a2\u01a4\u0007\u0010\u0002\u0002",
    "\u01a3\u0173\u0003\u0002\u0002\u0002\u01a3\u0176\u0003\u0002\u0002\u0002",
    "\u01a3\u017b\u0003\u0002\u0002\u0002\u01a3\u0184\u0003\u0002\u0002\u0002",
    "\u01a3\u0188\u0003\u0002\u0002\u0002\u01a3\u018c\u0003\u0002\u0002\u0002",
    "\u01a3\u01a1\u0003\u0002\u0002\u0002\u01a3\u01a2\u0003\u0002\u0002\u0002",
    "\u01a4\u01b0\u0003\u0002\u0002\u0002\u01a5\u01a6\f\f\u0002\u0002\u01a6",
    "\u01a7\u0007\u0006\u0002\u0002\u01a7\u01af\u0005P)\r\u01a8\u01a9\f\u000b",
    "\u0002\u0002\u01a9\u01aa\t\u000e\u0002\u0002\u01aa\u01af\u0005P)\f\u01ab",
    "\u01ac\f\n\u0002\u0002\u01ac\u01ad\t\u000f\u0002\u0002\u01ad\u01af\u0005",
    "P)\u000b\u01ae\u01a5\u0003\u0002\u0002\u0002\u01ae\u01a8\u0003\u0002",
    "\u0002\u0002\u01ae\u01ab\u0003\u0002\u0002\u0002\u01af\u01b2\u0003\u0002",
    "\u0002\u0002\u01b0\u01ae\u0003\u0002\u0002\u0002\u01b0\u01b1\u0003\u0002",
    "\u0002\u0002\u01b1Q\u0003\u0002\u0002\u0002\u01b2\u01b0\u0003\u0002",
    "\u0002\u0002\u01b3\u01b4\b*\u0001\u0002\u01b4\u01b5\u0007\u0012\u0002",
    "\u0002\u01b5\u01d1\u0005R*\b\u01b6\u01d1\u0007O\u0002\u0002\u01b7\u01ca",
    "\u0007L\u0002\u0002\u01b8\u01c7\u0007\b\u0002\u0002\u01b9\u01bc\u0005",
    "P)\u0002\u01ba\u01bc\u0005R*\u0002\u01bb\u01b9\u0003\u0002\u0002\u0002",
    "\u01bb\u01ba\u0003\u0002\u0002\u0002\u01bc\u01c4\u0003\u0002\u0002\u0002",
    "\u01bd\u01c0\u0007\u0004\u0002\u0002\u01be\u01c1\u0005P)\u0002\u01bf",
    "\u01c1\u0005R*\u0002\u01c0\u01be\u0003\u0002\u0002\u0002\u01c0\u01bf",
    "\u0003\u0002\u0002\u0002\u01c1\u01c3\u0003\u0002\u0002\u0002\u01c2\u01bd",
    "\u0003\u0002\u0002\u0002\u01c3\u01c6\u0003\u0002\u0002\u0002\u01c4\u01c2",
    "\u0003\u0002\u0002\u0002\u01c4\u01c5\u0003\u0002\u0002\u0002\u01c5\u01c8",
    "\u0003\u0002\u0002\u0002\u01c6\u01c4\u0003\u0002\u0002\u0002\u01c7\u01bb",
    "\u0003\u0002\u0002\u0002\u01c7\u01c8\u0003\u0002\u0002\u0002\u01c8\u01c9",
    "\u0003\u0002\u0002\u0002\u01c9\u01cb\u0007\t\u0002\u0002\u01ca\u01b8",
    "\u0003\u0002\u0002\u0002\u01ca\u01cb\u0003\u0002\u0002\u0002\u01cb\u01d1",
    "\u0003\u0002\u0002\u0002\u01cc\u01cd\u0007\b\u0002\u0002\u01cd\u01ce",
    "\u0005R*\u0002\u01ce\u01cf\u0007\t\u0002\u0002\u01cf\u01d1\u0003\u0002",
    "\u0002\u0002\u01d0\u01b3\u0003\u0002\u0002\u0002\u01d0\u01b6\u0003\u0002",
    "\u0002\u0002\u01d0\u01b7\u0003\u0002\u0002\u0002\u01d0\u01cc\u0003\u0002",
    "\u0002\u0002\u01d1\u01dd\u0003\u0002\u0002\u0002\u01d2\u01d3\f\t\u0002",
    "\u0002\u01d3\u01d4\u0007\u0011\u0002\u0002\u01d4\u01dc\u0005R*\n\u01d5",
    "\u01d6\f\u0007\u0002\u0002\u01d6\u01d7\t\u0010\u0002\u0002\u01d7\u01dc",
    "\u0005R*\b\u01d8\u01d9\f\u0006\u0002\u0002\u01d9\u01da\t\u0011\u0002",
    "\u0002\u01da\u01dc\u0005R*\u0007\u01db\u01d2\u0003\u0002\u0002\u0002",
    "\u01db\u01d5\u0003\u0002\u0002\u0002\u01db\u01d8\u0003\u0002\u0002\u0002",
    "\u01dc\u01df\u0003\u0002\u0002\u0002\u01dd\u01db\u0003\u0002\u0002\u0002",
    "\u01dd\u01de\u0003\u0002\u0002\u0002\u01deS\u0003\u0002\u0002\u0002",
    "\u01df\u01dd\u0003\u0002\u0002\u0002=WZ_bilotz~\u0084\u008a\u009f\u00a7",
    "\u00a9\u00b2\u00b9\u00bf\u00cc\u00cf\u00d7\u00d9\u00de\u00e1\u00e6\u00ea",
    "\u00f8\u00fa\u00fd\u0100\u0106\u010b\u010f\u0117\u011a\u0120\u012a\u0131",
    "\u013b\u0140\u0149\u014d\u0162\u0190\u0195\u0199\u019c\u019f\u01a3\u01ae",
    "\u01b0\u01bb\u01c0\u01c4\u01c7\u01ca\u01d0\u01db\u01dd"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'.'", "','", "'!'", "'&'", "'|'", "'('", "')'", 
                     "'true'", "'~'", "'->'", "'=>'", "'<->'", "'<=>'", 
                     "'false'", "'^'", "'-'", "'*'", "'/'", "'+'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, "AFTER", "ALWAYS", "AND", "AT", "BEFORE", 
                      "DURING", "EVENTUALLY", "EXCEPT", "FALSE", "FINALLY", 
                      "FIRST", "FOR", "HOUR", "IF", "IMMEDIATELY", "IN", 
                      "INITIALLY", "IS", "IWC", "LAST", "MICROSECOND", "MILLISECOND", 
                      "MINUTE", "MOD", "MODE", "NEVER", "NEXT", "NOT", "OCCURRENCE", 
                      "OF", "ONLY", "OR", "PREVIOUS", "PROB", "SAME", "SATISFY", 
                      "SECOND", "SHALL", "THE", "THEN", "TICK", "TIMEPOINT", 
                      "TRUE", "UNLESS", "UNTIL", "UPON", "WHAT", "WHEN", 
                      "WHENEVER", "WHERE", "WHILE", "WITH", "WITHIN", "XOR", 
                      "ID", "STRING", "RELATIONAL_OP", "NUMBER", "WS" ];

var ruleNames =  [ "reqt_body", "freeform", "nasa", "sleec", "trigger", 
                   "defeater", "action", "obligation", "cond_expression", 
                   "obl_expression", "predicate", "atomic_predicate", "comparison_predicate", 
                   "var_name", "scope", "reqt_condition", "regular_condition", 
                   "qualifier_word", "qualified_condition1", "qualified_condition2", 
                   "scope_condition", "scope_mode", "pre_condition", "stop_condition", 
                   "component", "response", "satisfaction", "probability", 
                   "probability_aux", "prob_num", "timing", "timing_aux", 
                   "duration_upper", "duration_lower", "component_name", 
                   "mode_name", "duration", "timeunit", "post_condition", 
                   "bool_expr", "numeric_expr" ];

function RequirementParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RequirementParser.prototype = Object.create(antlr4.Parser.prototype);
RequirementParser.prototype.constructor = RequirementParser;

Object.defineProperty(RequirementParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RequirementParser.EOF = antlr4.Token.EOF;
RequirementParser.T__0 = 1;
RequirementParser.T__1 = 2;
RequirementParser.T__2 = 3;
RequirementParser.T__3 = 4;
RequirementParser.T__4 = 5;
RequirementParser.T__5 = 6;
RequirementParser.T__6 = 7;
RequirementParser.T__7 = 8;
RequirementParser.T__8 = 9;
RequirementParser.T__9 = 10;
RequirementParser.T__10 = 11;
RequirementParser.T__11 = 12;
RequirementParser.T__12 = 13;
RequirementParser.T__13 = 14;
RequirementParser.T__14 = 15;
RequirementParser.T__15 = 16;
RequirementParser.T__16 = 17;
RequirementParser.T__17 = 18;
RequirementParser.T__18 = 19;
RequirementParser.AFTER = 20;
RequirementParser.ALWAYS = 21;
RequirementParser.AND = 22;
RequirementParser.AT = 23;
RequirementParser.BEFORE = 24;
RequirementParser.DURING = 25;
RequirementParser.EVENTUALLY = 26;
RequirementParser.EXCEPT = 27;
RequirementParser.FALSE = 28;
RequirementParser.FINALLY = 29;
RequirementParser.FIRST = 30;
RequirementParser.FOR = 31;
RequirementParser.HOUR = 32;
RequirementParser.IF = 33;
RequirementParser.IMMEDIATELY = 34;
RequirementParser.IN = 35;
RequirementParser.INITIALLY = 36;
RequirementParser.IS = 37;
RequirementParser.IWC = 38;
RequirementParser.LAST = 39;
RequirementParser.MICROSECOND = 40;
RequirementParser.MILLISECOND = 41;
RequirementParser.MINUTE = 42;
RequirementParser.MOD = 43;
RequirementParser.MODE = 44;
RequirementParser.NEVER = 45;
RequirementParser.NEXT = 46;
RequirementParser.NOT = 47;
RequirementParser.OCCURRENCE = 48;
RequirementParser.OF = 49;
RequirementParser.ONLY = 50;
RequirementParser.OR = 51;
RequirementParser.PREVIOUS = 52;
RequirementParser.PROB = 53;
RequirementParser.SAME = 54;
RequirementParser.SATISFY = 55;
RequirementParser.SECOND = 56;
RequirementParser.SHALL = 57;
RequirementParser.THE = 58;
RequirementParser.THEN = 59;
RequirementParser.TICK = 60;
RequirementParser.TIMEPOINT = 61;
RequirementParser.TRUE = 62;
RequirementParser.UNLESS = 63;
RequirementParser.UNTIL = 64;
RequirementParser.UPON = 65;
RequirementParser.WHAT = 66;
RequirementParser.WHEN = 67;
RequirementParser.WHENEVER = 68;
RequirementParser.WHERE = 69;
RequirementParser.WHILE = 70;
RequirementParser.WITH = 71;
RequirementParser.WITHIN = 72;
RequirementParser.XOR = 73;
RequirementParser.ID = 74;
RequirementParser.STRING = 75;
RequirementParser.RELATIONAL_OP = 76;
RequirementParser.NUMBER = 77;
RequirementParser.WS = 78;

RequirementParser.RULE_reqt_body = 0;
RequirementParser.RULE_freeform = 1;
RequirementParser.RULE_nasa = 2;
RequirementParser.RULE_sleec = 3;
RequirementParser.RULE_trigger = 4;
RequirementParser.RULE_defeater = 5;
RequirementParser.RULE_action = 6;
RequirementParser.RULE_obligation = 7;
RequirementParser.RULE_cond_expression = 8;
RequirementParser.RULE_obl_expression = 9;
RequirementParser.RULE_predicate = 10;
RequirementParser.RULE_atomic_predicate = 11;
RequirementParser.RULE_comparison_predicate = 12;
RequirementParser.RULE_var_name = 13;
RequirementParser.RULE_scope = 14;
RequirementParser.RULE_reqt_condition = 15;
RequirementParser.RULE_regular_condition = 16;
RequirementParser.RULE_qualifier_word = 17;
RequirementParser.RULE_qualified_condition1 = 18;
RequirementParser.RULE_qualified_condition2 = 19;
RequirementParser.RULE_scope_condition = 20;
RequirementParser.RULE_scope_mode = 21;
RequirementParser.RULE_pre_condition = 22;
RequirementParser.RULE_stop_condition = 23;
RequirementParser.RULE_component = 24;
RequirementParser.RULE_response = 25;
RequirementParser.RULE_satisfaction = 26;
RequirementParser.RULE_probability = 27;
RequirementParser.RULE_probability_aux = 28;
RequirementParser.RULE_prob_num = 29;
RequirementParser.RULE_timing = 30;
RequirementParser.RULE_timing_aux = 31;
RequirementParser.RULE_duration_upper = 32;
RequirementParser.RULE_duration_lower = 33;
RequirementParser.RULE_component_name = 34;
RequirementParser.RULE_mode_name = 35;
RequirementParser.RULE_duration = 36;
RequirementParser.RULE_timeunit = 37;
RequirementParser.RULE_post_condition = 38;
RequirementParser.RULE_bool_expr = 39;
RequirementParser.RULE_numeric_expr = 40;


function Reqt_bodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_reqt_body;
    return this;
}

Reqt_bodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Reqt_bodyContext.prototype.constructor = Reqt_bodyContext;

Reqt_bodyContext.prototype.nasa = function() {
    return this.getTypedRuleContext(NasaContext,0);
};

Reqt_bodyContext.prototype.sleec = function() {
    return this.getTypedRuleContext(SleecContext,0);
};

Reqt_bodyContext.prototype.freeform = function() {
    return this.getTypedRuleContext(FreeformContext,0);
};

Reqt_bodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterReqt_body(this);
	}
};

Reqt_bodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitReqt_body(this);
	}
};




RequirementParser.Reqt_bodyContext = Reqt_bodyContext;

RequirementParser.prototype.reqt_body = function() {

    var localctx = new Reqt_bodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RequirementParser.RULE_reqt_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.state = 82;
            this.nasa();
            break;

        case 2:
            this.state = 83;
            this.sleec();
            break;

        case 3:
            this.state = 84;
            this.freeform();
            break;

        }
        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RequirementParser.T__0) {
            this.state = 87;
            this.match(RequirementParser.T__0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FreeformContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_freeform;
    return this;
}

FreeformContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FreeformContext.prototype.constructor = FreeformContext;

FreeformContext.prototype.STRING = function() {
    return this.getToken(RequirementParser.STRING, 0);
};

FreeformContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterFreeform(this);
	}
};

FreeformContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitFreeform(this);
	}
};




RequirementParser.FreeformContext = FreeformContext;

RequirementParser.prototype.freeform = function() {

    var localctx = new FreeformContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RequirementParser.RULE_freeform);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(RequirementParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NasaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_nasa;
    return this;
}

NasaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NasaContext.prototype.constructor = NasaContext;

NasaContext.prototype.response = function() {
    return this.getTypedRuleContext(ResponseContext,0);
};

NasaContext.prototype.component = function() {
    return this.getTypedRuleContext(ComponentContext,0);
};

NasaContext.prototype.SHALL = function() {
    return this.getToken(RequirementParser.SHALL, 0);
};

NasaContext.prototype.scope = function() {
    return this.getTypedRuleContext(ScopeContext,0);
};

NasaContext.prototype.reqt_condition = function() {
    return this.getTypedRuleContext(Reqt_conditionContext,0);
};

NasaContext.prototype.probability = function() {
    return this.getTypedRuleContext(ProbabilityContext,0);
};

NasaContext.prototype.timing = function() {
    return this.getTypedRuleContext(TimingContext,0);
};

NasaContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterNasa(this);
	}
};

NasaContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitNasa(this);
	}
};




RequirementParser.NasaContext = NasaContext;

RequirementParser.prototype.nasa = function() {

    var localctx = new NasaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RequirementParser.RULE_nasa);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 92;
            this.scope();

        }
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RequirementParser.AND || _la===RequirementParser.IF || ((((_la - 63)) & ~0x1f) == 0 && ((1 << (_la - 63)) & ((1 << (RequirementParser.UNLESS - 63)) | (1 << (RequirementParser.UPON - 63)) | (1 << (RequirementParser.WHEN - 63)) | (1 << (RequirementParser.WHENEVER - 63)) | (1 << (RequirementParser.WHERE - 63)))) !== 0)) {
            this.state = 95;
            this.reqt_condition();
        }

        this.state = 103;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RequirementParser.THE:
        case RequirementParser.ID:
            this.state = 98;
            this.component();
            this.state = 99;
            this.match(RequirementParser.SHALL);
            break;
        case RequirementParser.SHALL:
            this.state = 101;
            this.match(RequirementParser.SHALL);
            this.state = 102;
            this.component();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 106;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        if(la_===1) {
            this.state = 105;
            this.probability();

        }
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RequirementParser.T__1) | (1 << RequirementParser.AFTER) | (1 << RequirementParser.ALWAYS) | (1 << RequirementParser.AT) | (1 << RequirementParser.BEFORE) | (1 << RequirementParser.EVENTUALLY) | (1 << RequirementParser.FINALLY) | (1 << RequirementParser.FOR))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (RequirementParser.IMMEDIATELY - 34)) | (1 << (RequirementParser.INITIALLY - 34)) | (1 << (RequirementParser.NEVER - 34)) | (1 << (RequirementParser.UNTIL - 34)))) !== 0) || _la===RequirementParser.WITHIN) {
            this.state = 108;
            this.timing();
        }

        this.state = 111;
        this.response();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SleecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_sleec;
    return this;
}

SleecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SleecContext.prototype.constructor = SleecContext;

SleecContext.prototype.IF = function() {
    return this.getToken(RequirementParser.IF, 0);
};

SleecContext.prototype.trigger = function() {
    return this.getTypedRuleContext(TriggerContext,0);
};

SleecContext.prototype.THEN = function() {
    return this.getToken(RequirementParser.THEN, 0);
};

SleecContext.prototype.action = function() {
    return this.getTypedRuleContext(ActionContext,0);
};

SleecContext.prototype.EOF = function() {
    return this.getToken(RequirementParser.EOF, 0);
};

SleecContext.prototype.scope = function() {
    return this.getTypedRuleContext(ScopeContext,0);
};

SleecContext.prototype.timing = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TimingContext);
    } else {
        return this.getTypedRuleContext(TimingContext,i);
    }
};

SleecContext.prototype.UNLESS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RequirementParser.UNLESS);
    } else {
        return this.getToken(RequirementParser.UNLESS, i);
    }
};


SleecContext.prototype.defeater = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DefeaterContext);
    } else {
        return this.getTypedRuleContext(DefeaterContext,i);
    }
};

SleecContext.prototype.IWC = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RequirementParser.IWC);
    } else {
        return this.getToken(RequirementParser.IWC, i);
    }
};


SleecContext.prototype.obligation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObligationContext);
    } else {
        return this.getTypedRuleContext(ObligationContext,i);
    }
};

SleecContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterSleec(this);
	}
};

SleecContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitSleec(this);
	}
};




RequirementParser.SleecContext = SleecContext;

RequirementParser.prototype.sleec = function() {

    var localctx = new SleecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RequirementParser.RULE_sleec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        if(la_===1) {
            this.state = 113;
            this.scope();

        }
        this.state = 116;
        this.match(RequirementParser.IF);
        this.state = 117;
        this.trigger();
        this.state = 118;
        this.match(RequirementParser.THEN);
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RequirementParser.T__1) | (1 << RequirementParser.AFTER) | (1 << RequirementParser.ALWAYS) | (1 << RequirementParser.AT) | (1 << RequirementParser.BEFORE) | (1 << RequirementParser.EVENTUALLY) | (1 << RequirementParser.FINALLY) | (1 << RequirementParser.FOR))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (RequirementParser.IMMEDIATELY - 34)) | (1 << (RequirementParser.INITIALLY - 34)) | (1 << (RequirementParser.NEVER - 34)) | (1 << (RequirementParser.UNTIL - 34)))) !== 0) || _la===RequirementParser.WITHIN) {
            this.state = 119;
            this.timing();
        }

        this.state = 122;
        this.action();
        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RequirementParser.T__1 || _la===RequirementParser.UNLESS) {
            this.state = 124;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RequirementParser.T__1) {
                this.state = 123;
                this.match(RequirementParser.T__1);
            }

            this.state = 126;
            this.match(RequirementParser.UNLESS);
            this.state = 127;
            this.defeater();
            this.state = 128;
            this.match(RequirementParser.IWC);
            this.state = 130;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RequirementParser.T__1) | (1 << RequirementParser.AFTER) | (1 << RequirementParser.ALWAYS) | (1 << RequirementParser.AT) | (1 << RequirementParser.BEFORE) | (1 << RequirementParser.EVENTUALLY) | (1 << RequirementParser.FINALLY) | (1 << RequirementParser.FOR))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (RequirementParser.IMMEDIATELY - 34)) | (1 << (RequirementParser.INITIALLY - 34)) | (1 << (RequirementParser.NEVER - 34)) | (1 << (RequirementParser.UNTIL - 34)))) !== 0) || _la===RequirementParser.WITHIN) {
                this.state = 129;
                this.timing();
            }

            this.state = 132;
            this.obligation();
            this.state = 138;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 139;
        this.match(RequirementParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TriggerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_trigger;
    return this;
}

TriggerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TriggerContext.prototype.constructor = TriggerContext;

TriggerContext.prototype.cond_expression = function() {
    return this.getTypedRuleContext(Cond_expressionContext,0);
};

TriggerContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterTrigger(this);
	}
};

TriggerContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitTrigger(this);
	}
};




RequirementParser.TriggerContext = TriggerContext;

RequirementParser.prototype.trigger = function() {

    var localctx = new TriggerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RequirementParser.RULE_trigger);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.cond_expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DefeaterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_defeater;
    return this;
}

DefeaterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefeaterContext.prototype.constructor = DefeaterContext;

DefeaterContext.prototype.cond_expression = function() {
    return this.getTypedRuleContext(Cond_expressionContext,0);
};

DefeaterContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterDefeater(this);
	}
};

DefeaterContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitDefeater(this);
	}
};




RequirementParser.DefeaterContext = DefeaterContext;

RequirementParser.prototype.defeater = function() {

    var localctx = new DefeaterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RequirementParser.RULE_defeater);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.cond_expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ActionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_action;
    return this;
}

ActionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActionContext.prototype.constructor = ActionContext;

ActionContext.prototype.obl_expression = function() {
    return this.getTypedRuleContext(Obl_expressionContext,0);
};

ActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterAction(this);
	}
};

ActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitAction(this);
	}
};




RequirementParser.ActionContext = ActionContext;

RequirementParser.prototype.action = function() {

    var localctx = new ActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RequirementParser.RULE_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.obl_expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ObligationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_obligation;
    return this;
}

ObligationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObligationContext.prototype.constructor = ObligationContext;

ObligationContext.prototype.obl_expression = function() {
    return this.getTypedRuleContext(Obl_expressionContext,0);
};

ObligationContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterObligation(this);
	}
};

ObligationContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitObligation(this);
	}
};




RequirementParser.ObligationContext = ObligationContext;

RequirementParser.prototype.obligation = function() {

    var localctx = new ObligationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RequirementParser.RULE_obligation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.obl_expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Cond_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_cond_expression;
    return this;
}

Cond_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Cond_expressionContext.prototype.constructor = Cond_expressionContext;

Cond_expressionContext.prototype.cond_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Cond_expressionContext);
    } else {
        return this.getTypedRuleContext(Cond_expressionContext,i);
    }
};

Cond_expressionContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};

Cond_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterCond_expression(this);
	}
};

Cond_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitCond_expression(this);
	}
};



RequirementParser.prototype.cond_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Cond_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, RequirementParser.RULE_cond_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RequirementParser.T__2:
            this.state = 150;
            this.match(RequirementParser.T__2);
            this.state = 151;
            this.cond_expression(5);
            break;
        case RequirementParser.T__5:
            this.state = 152;
            this.match(RequirementParser.T__5);
            this.state = 153;
            this.cond_expression(0);
            this.state = 154;
            this.match(RequirementParser.T__6);
            break;
        case RequirementParser.T__7:
        case RequirementParser.ID:
        case RequirementParser.NUMBER:
            this.state = 156;
            this.predicate();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 167;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 165;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Cond_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RequirementParser.RULE_cond_expression);
                    this.state = 159;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 160;
                    this.match(RequirementParser.T__3);
                    this.state = 161;
                    this.cond_expression(5);
                    break;

                case 2:
                    localctx = new Cond_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RequirementParser.RULE_cond_expression);
                    this.state = 162;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 163;
                    this.match(RequirementParser.T__4);
                    this.state = 164;
                    this.cond_expression(4);
                    break;

                } 
            }
            this.state = 169;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Obl_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_obl_expression;
    return this;
}

Obl_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Obl_expressionContext.prototype.constructor = Obl_expressionContext;

Obl_expressionContext.prototype.obl_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Obl_expressionContext);
    } else {
        return this.getTypedRuleContext(Obl_expressionContext,i);
    }
};

Obl_expressionContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};

Obl_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterObl_expression(this);
	}
};

Obl_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitObl_expression(this);
	}
};



RequirementParser.prototype.obl_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Obl_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, RequirementParser.RULE_obl_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RequirementParser.T__5:
            this.state = 171;
            this.match(RequirementParser.T__5);
            this.state = 172;
            this.obl_expression(0);
            this.state = 173;
            this.match(RequirementParser.T__6);
            break;
        case RequirementParser.T__7:
        case RequirementParser.ID:
        case RequirementParser.NUMBER:
            this.state = 175;
            this.predicate();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 183;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Obl_expressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, RequirementParser.RULE_obl_expression);
                this.state = 178;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 179;
                this.match(RequirementParser.T__3);
                this.state = 180;
                this.obl_expression(4); 
            }
            this.state = 185;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function PredicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_predicate;
    return this;
}

PredicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateContext.prototype.constructor = PredicateContext;

PredicateContext.prototype.atomic_predicate = function() {
    return this.getTypedRuleContext(Atomic_predicateContext,0);
};

PredicateContext.prototype.comparison_predicate = function() {
    return this.getTypedRuleContext(Comparison_predicateContext,0);
};

PredicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterPredicate(this);
	}
};

PredicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitPredicate(this);
	}
};




RequirementParser.PredicateContext = PredicateContext;

RequirementParser.prototype.predicate = function() {

    var localctx = new PredicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, RequirementParser.RULE_predicate);
    try {
        this.state = 189;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 186;
            this.atomic_predicate();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 187;
            this.comparison_predicate();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 188;
            this.match(RequirementParser.T__7);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Atomic_predicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_atomic_predicate;
    return this;
}

Atomic_predicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Atomic_predicateContext.prototype.constructor = Atomic_predicateContext;

Atomic_predicateContext.prototype.ID = function() {
    return this.getToken(RequirementParser.ID, 0);
};

Atomic_predicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterAtomic_predicate(this);
	}
};

Atomic_predicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitAtomic_predicate(this);
	}
};




RequirementParser.Atomic_predicateContext = Atomic_predicateContext;

RequirementParser.prototype.atomic_predicate = function() {

    var localctx = new Atomic_predicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, RequirementParser.RULE_atomic_predicate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(RequirementParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Comparison_predicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_comparison_predicate;
    return this;
}

Comparison_predicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Comparison_predicateContext.prototype.constructor = Comparison_predicateContext;

Comparison_predicateContext.prototype.var_name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Var_nameContext);
    } else {
        return this.getTypedRuleContext(Var_nameContext,i);
    }
};

Comparison_predicateContext.prototype.RELATIONAL_OP = function() {
    return this.getToken(RequirementParser.RELATIONAL_OP, 0);
};

Comparison_predicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterComparison_predicate(this);
	}
};

Comparison_predicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitComparison_predicate(this);
	}
};




RequirementParser.Comparison_predicateContext = Comparison_predicateContext;

RequirementParser.prototype.comparison_predicate = function() {

    var localctx = new Comparison_predicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, RequirementParser.RULE_comparison_predicate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.var_name();
        this.state = 194;
        this.match(RequirementParser.RELATIONAL_OP);
        this.state = 195;
        this.var_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Var_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_var_name;
    return this;
}

Var_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_nameContext.prototype.constructor = Var_nameContext;

Var_nameContext.prototype.ID = function() {
    return this.getToken(RequirementParser.ID, 0);
};

Var_nameContext.prototype.NUMBER = function() {
    return this.getToken(RequirementParser.NUMBER, 0);
};

Var_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterVar_name(this);
	}
};

Var_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitVar_name(this);
	}
};




RequirementParser.Var_nameContext = Var_nameContext;

RequirementParser.prototype.var_name = function() {

    var localctx = new Var_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, RequirementParser.RULE_var_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        _la = this._input.LA(1);
        if(!(_la===RequirementParser.ID || _la===RequirementParser.NUMBER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ScopeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_scope;
    return this;
}

ScopeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScopeContext.prototype.constructor = ScopeContext;

ScopeContext.prototype.ONLY = function() {
    return this.getToken(RequirementParser.ONLY, 0);
};

ScopeContext.prototype.EXCEPT = function() {
    return this.getToken(RequirementParser.EXCEPT, 0);
};

ScopeContext.prototype.IN = function() {
    return this.getToken(RequirementParser.IN, 0);
};

ScopeContext.prototype.scope_mode = function() {
    return this.getTypedRuleContext(Scope_modeContext,0);
};

ScopeContext.prototype.UNLESS = function() {
    return this.getToken(RequirementParser.UNLESS, 0);
};

ScopeContext.prototype.WHILE = function() {
    return this.getToken(RequirementParser.WHILE, 0);
};

ScopeContext.prototype.scope_condition = function() {
    return this.getTypedRuleContext(Scope_conditionContext,0);
};

ScopeContext.prototype.WHEN = function() {
    return this.getToken(RequirementParser.WHEN, 0);
};

ScopeContext.prototype.IF = function() {
    return this.getToken(RequirementParser.IF, 0);
};

ScopeContext.prototype.DURING = function() {
    return this.getToken(RequirementParser.DURING, 0);
};

ScopeContext.prototype.AFTER = function() {
    return this.getToken(RequirementParser.AFTER, 0);
};

ScopeContext.prototype.BEFORE = function() {
    return this.getToken(RequirementParser.BEFORE, 0);
};

ScopeContext.prototype.NOT = function() {
    return this.getToken(RequirementParser.NOT, 0);
};

ScopeContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterScope(this);
	}
};

ScopeContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitScope(this);
	}
};




RequirementParser.ScopeContext = ScopeContext;

RequirementParser.prototype.scope = function() {

    var localctx = new ScopeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, RequirementParser.RULE_scope);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RequirementParser.ONLY:
            this.state = 199;
            this.match(RequirementParser.ONLY);
            this.state = 215;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RequirementParser.DURING:
            case RequirementParser.IF:
            case RequirementParser.IN:
            case RequirementParser.WHEN:
                this.state = 205;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case RequirementParser.DURING:
                    this.state = 200;
                    this.match(RequirementParser.DURING);
                    break;
                case RequirementParser.IF:
                case RequirementParser.IN:
                case RequirementParser.WHEN:
                    this.state = 202;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===RequirementParser.IF || _la===RequirementParser.WHEN) {
                        this.state = 201;
                        _la = this._input.LA(1);
                        if(!(_la===RequirementParser.IF || _la===RequirementParser.WHEN)) {
                        this._errHandler.recoverInline(this);
                        }
                        else {
                        	this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }

                    this.state = 204;
                    this.match(RequirementParser.IN);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 207;
                this.scope_mode();
                break;
            case RequirementParser.WHILE:
                this.state = 208;
                this.match(RequirementParser.WHILE);
                this.state = 209;
                this.scope_condition();
                break;
            case RequirementParser.AFTER:
            case RequirementParser.BEFORE:
                this.state = 210;
                _la = this._input.LA(1);
                if(!(_la===RequirementParser.AFTER || _la===RequirementParser.BEFORE)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 213;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 211;
                    this.scope_mode();
                    break;

                case 2:
                    this.state = 212;
                    this.scope_condition();
                    break;

                }
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case RequirementParser.EXCEPT:
            this.state = 217;
            this.match(RequirementParser.EXCEPT);
            this.state = 228;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RequirementParser.DURING:
            case RequirementParser.IF:
            case RequirementParser.IN:
            case RequirementParser.WHEN:
                this.state = 223;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case RequirementParser.DURING:
                    this.state = 218;
                    this.match(RequirementParser.DURING);
                    break;
                case RequirementParser.IF:
                case RequirementParser.IN:
                case RequirementParser.WHEN:
                    this.state = 220;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===RequirementParser.IF || _la===RequirementParser.WHEN) {
                        this.state = 219;
                        _la = this._input.LA(1);
                        if(!(_la===RequirementParser.IF || _la===RequirementParser.WHEN)) {
                        this._errHandler.recoverInline(this);
                        }
                        else {
                        	this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }

                    this.state = 222;
                    this.match(RequirementParser.IN);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 225;
                this.scope_mode();
                break;
            case RequirementParser.WHILE:
                this.state = 226;
                this.match(RequirementParser.WHILE);
                this.state = 227;
                this.scope_condition();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case RequirementParser.IF:
        case RequirementParser.WHEN:
            this.state = 230;
            _la = this._input.LA(1);
            if(!(_la===RequirementParser.IF || _la===RequirementParser.WHEN)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 232;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RequirementParser.NOT) {
                this.state = 231;
                this.match(RequirementParser.NOT);
            }

            this.state = 234;
            this.match(RequirementParser.IN);
            this.state = 235;
            this.scope_mode();
            break;
        case RequirementParser.DURING:
        case RequirementParser.IN:
            this.state = 236;
            _la = this._input.LA(1);
            if(!(_la===RequirementParser.DURING || _la===RequirementParser.IN)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 237;
            this.scope_mode();
            break;
        case RequirementParser.UNLESS:
            this.state = 238;
            this.match(RequirementParser.UNLESS);
            this.state = 239;
            this.match(RequirementParser.IN);
            this.state = 240;
            this.scope_mode();
            break;
        case RequirementParser.WHILE:
            this.state = 241;
            this.match(RequirementParser.WHILE);
            this.state = 242;
            this.scope_condition();
            break;
        case RequirementParser.AFTER:
        case RequirementParser.BEFORE:
            this.state = 243;
            _la = this._input.LA(1);
            if(!(_la===RequirementParser.AFTER || _la===RequirementParser.BEFORE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 246;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
            switch(la_) {
            case 1:
                this.state = 244;
                this.scope_mode();
                break;

            case 2:
                this.state = 245;
                this.scope_condition();
                break;

            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 251;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RequirementParser.T__1) {
            this.state = 250;
            this.match(RequirementParser.T__1);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Reqt_conditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_reqt_condition;
    return this;
}

Reqt_conditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Reqt_conditionContext.prototype.constructor = Reqt_conditionContext;

Reqt_conditionContext.prototype.regular_condition = function() {
    return this.getTypedRuleContext(Regular_conditionContext,0);
};

Reqt_conditionContext.prototype.AND = function() {
    return this.getToken(RequirementParser.AND, 0);
};

Reqt_conditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterReqt_condition(this);
	}
};

Reqt_conditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitReqt_condition(this);
	}
};




RequirementParser.Reqt_conditionContext = Reqt_conditionContext;

RequirementParser.prototype.reqt_condition = function() {

    var localctx = new Reqt_conditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, RequirementParser.RULE_reqt_condition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RequirementParser.AND) {
            this.state = 253;
            this.match(RequirementParser.AND);
        }

        this.state = 256;
        this.regular_condition();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Regular_conditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_regular_condition;
    return this;
}

Regular_conditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Regular_conditionContext.prototype.constructor = Regular_conditionContext;

Regular_conditionContext.prototype.qualified_condition1 = function() {
    return this.getTypedRuleContext(Qualified_condition1Context,0);
};

Regular_conditionContext.prototype.qualified_condition2 = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Qualified_condition2Context);
    } else {
        return this.getTypedRuleContext(Qualified_condition2Context,i);
    }
};

Regular_conditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterRegular_condition(this);
	}
};

Regular_conditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitRegular_condition(this);
	}
};




RequirementParser.Regular_conditionContext = Regular_conditionContext;

RequirementParser.prototype.regular_condition = function() {

    var localctx = new Regular_conditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, RequirementParser.RULE_regular_condition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.qualified_condition1();
        this.state = 265;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 260;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===RequirementParser.T__1) {
                    this.state = 259;
                    this.match(RequirementParser.T__1);
                }

                this.state = 262;
                this.qualified_condition2(); 
            }
            this.state = 267;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
        }

        this.state = 269;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RequirementParser.T__1) {
            this.state = 268;
            this.match(RequirementParser.T__1);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Qualifier_wordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_qualifier_word;
    return this;
}

Qualifier_wordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Qualifier_wordContext.prototype.constructor = Qualifier_wordContext;

Qualifier_wordContext.prototype.UPON = function() {
    return this.getToken(RequirementParser.UPON, 0);
};

Qualifier_wordContext.prototype.WHENEVER = function() {
    return this.getToken(RequirementParser.WHENEVER, 0);
};

Qualifier_wordContext.prototype.WHEN = function() {
    return this.getToken(RequirementParser.WHEN, 0);
};

Qualifier_wordContext.prototype.UNLESS = function() {
    return this.getToken(RequirementParser.UNLESS, 0);
};

Qualifier_wordContext.prototype.WHERE = function() {
    return this.getToken(RequirementParser.WHERE, 0);
};

Qualifier_wordContext.prototype.IF = function() {
    return this.getToken(RequirementParser.IF, 0);
};

Qualifier_wordContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterQualifier_word(this);
	}
};

Qualifier_wordContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitQualifier_word(this);
	}
};




RequirementParser.Qualifier_wordContext = Qualifier_wordContext;

RequirementParser.prototype.qualifier_word = function() {

    var localctx = new Qualifier_wordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, RequirementParser.RULE_qualifier_word);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        _la = this._input.LA(1);
        if(!(_la===RequirementParser.IF || _la===RequirementParser.UNLESS || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (RequirementParser.UPON - 65)) | (1 << (RequirementParser.WHEN - 65)) | (1 << (RequirementParser.WHENEVER - 65)) | (1 << (RequirementParser.WHERE - 65)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Qualified_condition1Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_qualified_condition1;
    return this;
}

Qualified_condition1Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Qualified_condition1Context.prototype.constructor = Qualified_condition1Context;

Qualified_condition1Context.prototype.qualifier_word = function() {
    return this.getTypedRuleContext(Qualifier_wordContext,0);
};

Qualified_condition1Context.prototype.pre_condition = function() {
    return this.getTypedRuleContext(Pre_conditionContext,0);
};

Qualified_condition1Context.prototype.IS = function() {
    return this.getToken(RequirementParser.IS, 0);
};

Qualified_condition1Context.prototype.TRUE = function() {
    return this.getToken(RequirementParser.TRUE, 0);
};

Qualified_condition1Context.prototype.FALSE = function() {
    return this.getToken(RequirementParser.FALSE, 0);
};

Qualified_condition1Context.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterQualified_condition1(this);
	}
};

Qualified_condition1Context.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitQualified_condition1(this);
	}
};




RequirementParser.Qualified_condition1Context = Qualified_condition1Context;

RequirementParser.prototype.qualified_condition1 = function() {

    var localctx = new Qualified_condition1Context(this, this._ctx, this.state);
    this.enterRule(localctx, 36, RequirementParser.RULE_qualified_condition1);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.qualifier_word();
        this.state = 274;
        this.pre_condition();
        this.state = 277;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RequirementParser.IS) {
            this.state = 275;
            this.match(RequirementParser.IS);
            this.state = 276;
            _la = this._input.LA(1);
            if(!(_la===RequirementParser.FALSE || _la===RequirementParser.TRUE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Qualified_condition2Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_qualified_condition2;
    return this;
}

Qualified_condition2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Qualified_condition2Context.prototype.constructor = Qualified_condition2Context;

Qualified_condition2Context.prototype.qualifier_word = function() {
    return this.getTypedRuleContext(Qualifier_wordContext,0);
};

Qualified_condition2Context.prototype.pre_condition = function() {
    return this.getTypedRuleContext(Pre_conditionContext,0);
};

Qualified_condition2Context.prototype.IS = function() {
    return this.getToken(RequirementParser.IS, 0);
};

Qualified_condition2Context.prototype.AND = function() {
    return this.getToken(RequirementParser.AND, 0);
};

Qualified_condition2Context.prototype.OR = function() {
    return this.getToken(RequirementParser.OR, 0);
};

Qualified_condition2Context.prototype.TRUE = function() {
    return this.getToken(RequirementParser.TRUE, 0);
};

Qualified_condition2Context.prototype.FALSE = function() {
    return this.getToken(RequirementParser.FALSE, 0);
};

Qualified_condition2Context.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterQualified_condition2(this);
	}
};

Qualified_condition2Context.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitQualified_condition2(this);
	}
};




RequirementParser.Qualified_condition2Context = Qualified_condition2Context;

RequirementParser.prototype.qualified_condition2 = function() {

    var localctx = new Qualified_condition2Context(this, this._ctx, this.state);
    this.enterRule(localctx, 38, RequirementParser.RULE_qualified_condition2);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RequirementParser.AND || _la===RequirementParser.OR) {
            this.state = 279;
            _la = this._input.LA(1);
            if(!(_la===RequirementParser.AND || _la===RequirementParser.OR)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 282;
        this.qualifier_word();
        this.state = 283;
        this.pre_condition();
        this.state = 286;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RequirementParser.IS) {
            this.state = 284;
            this.match(RequirementParser.IS);
            this.state = 285;
            _la = this._input.LA(1);
            if(!(_la===RequirementParser.FALSE || _la===RequirementParser.TRUE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Scope_conditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_scope_condition;
    return this;
}

Scope_conditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scope_conditionContext.prototype.constructor = Scope_conditionContext;

Scope_conditionContext.prototype.bool_expr = function() {
    return this.getTypedRuleContext(Bool_exprContext,0);
};

Scope_conditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterScope_condition(this);
	}
};

Scope_conditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitScope_condition(this);
	}
};




RequirementParser.Scope_conditionContext = Scope_conditionContext;

RequirementParser.prototype.scope_condition = function() {

    var localctx = new Scope_conditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, RequirementParser.RULE_scope_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
        this.bool_expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Scope_modeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_scope_mode;
    return this;
}

Scope_modeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scope_modeContext.prototype.constructor = Scope_modeContext;

Scope_modeContext.prototype.MODE = function() {
    return this.getToken(RequirementParser.MODE, 0);
};

Scope_modeContext.prototype.mode_name = function() {
    return this.getTypedRuleContext(Mode_nameContext,0);
};

Scope_modeContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterScope_mode(this);
	}
};

Scope_modeContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitScope_mode(this);
	}
};




RequirementParser.Scope_modeContext = Scope_modeContext;

RequirementParser.prototype.scope_mode = function() {

    var localctx = new Scope_modeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, RequirementParser.RULE_scope_mode);
    try {
        this.state = 296;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 290;
            this.match(RequirementParser.MODE);
            this.state = 291;
            this.mode_name();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 292;
            this.mode_name();
            this.state = 293;
            this.match(RequirementParser.MODE);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 295;
            this.mode_name();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Pre_conditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_pre_condition;
    return this;
}

Pre_conditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Pre_conditionContext.prototype.constructor = Pre_conditionContext;

Pre_conditionContext.prototype.bool_expr = function() {
    return this.getTypedRuleContext(Bool_exprContext,0);
};

Pre_conditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterPre_condition(this);
	}
};

Pre_conditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitPre_condition(this);
	}
};




RequirementParser.Pre_conditionContext = Pre_conditionContext;

RequirementParser.prototype.pre_condition = function() {

    var localctx = new Pre_conditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, RequirementParser.RULE_pre_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
        this.bool_expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Stop_conditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_stop_condition;
    return this;
}

Stop_conditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Stop_conditionContext.prototype.constructor = Stop_conditionContext;

Stop_conditionContext.prototype.bool_expr = function() {
    return this.getTypedRuleContext(Bool_exprContext,0);
};

Stop_conditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterStop_condition(this);
	}
};

Stop_conditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitStop_condition(this);
	}
};




RequirementParser.Stop_conditionContext = Stop_conditionContext;

RequirementParser.prototype.stop_condition = function() {

    var localctx = new Stop_conditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, RequirementParser.RULE_stop_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        this.bool_expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_component;
    return this;
}

ComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComponentContext.prototype.constructor = ComponentContext;

ComponentContext.prototype.component_name = function() {
    return this.getTypedRuleContext(Component_nameContext,0);
};

ComponentContext.prototype.THE = function() {
    return this.getToken(RequirementParser.THE, 0);
};

ComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterComponent(this);
	}
};

ComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitComponent(this);
	}
};




RequirementParser.ComponentContext = ComponentContext;

RequirementParser.prototype.component = function() {

    var localctx = new ComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, RequirementParser.RULE_component);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RequirementParser.THE) {
            this.state = 302;
            this.match(RequirementParser.THE);
        }

        this.state = 305;
        this.component_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ResponseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_response;
    return this;
}

ResponseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResponseContext.prototype.constructor = ResponseContext;

ResponseContext.prototype.satisfaction = function() {
    return this.getTypedRuleContext(SatisfactionContext,0);
};

ResponseContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterResponse(this);
	}
};

ResponseContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitResponse(this);
	}
};




RequirementParser.ResponseContext = ResponseContext;

RequirementParser.prototype.response = function() {

    var localctx = new ResponseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, RequirementParser.RULE_response);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
        this.satisfaction();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SatisfactionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_satisfaction;
    return this;
}

SatisfactionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SatisfactionContext.prototype.constructor = SatisfactionContext;

SatisfactionContext.prototype.SATISFY = function() {
    return this.getToken(RequirementParser.SATISFY, 0);
};

SatisfactionContext.prototype.post_condition = function() {
    return this.getTypedRuleContext(Post_conditionContext,0);
};

SatisfactionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterSatisfaction(this);
	}
};

SatisfactionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitSatisfaction(this);
	}
};




RequirementParser.SatisfactionContext = SatisfactionContext;

RequirementParser.prototype.satisfaction = function() {

    var localctx = new SatisfactionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, RequirementParser.RULE_satisfaction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this.match(RequirementParser.SATISFY);
        this.state = 310;
        this.post_condition();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProbabilityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_probability;
    return this;
}

ProbabilityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProbabilityContext.prototype.constructor = ProbabilityContext;

ProbabilityContext.prototype.WITH = function() {
    return this.getToken(RequirementParser.WITH, 0);
};

ProbabilityContext.prototype.probability_aux = function() {
    return this.getTypedRuleContext(Probability_auxContext,0);
};

ProbabilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterProbability(this);
	}
};

ProbabilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitProbability(this);
	}
};




RequirementParser.ProbabilityContext = ProbabilityContext;

RequirementParser.prototype.probability = function() {

    var localctx = new ProbabilityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, RequirementParser.RULE_probability);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RequirementParser.T__1) {
            this.state = 312;
            this.match(RequirementParser.T__1);
        }

        this.state = 315;
        this.match(RequirementParser.WITH);
        this.state = 316;
        this.probability_aux();
        this.state = 318;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        if(la_===1) {
            this.state = 317;
            this.match(RequirementParser.T__1);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Probability_auxContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_probability_aux;
    return this;
}

Probability_auxContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Probability_auxContext.prototype.constructor = Probability_auxContext;

Probability_auxContext.prototype.PROB = function() {
    return this.getToken(RequirementParser.PROB, 0);
};

Probability_auxContext.prototype.RELATIONAL_OP = function() {
    return this.getToken(RequirementParser.RELATIONAL_OP, 0);
};

Probability_auxContext.prototype.prob_num = function() {
    return this.getTypedRuleContext(Prob_numContext,0);
};

Probability_auxContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterProbability_aux(this);
	}
};

Probability_auxContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitProbability_aux(this);
	}
};




RequirementParser.Probability_auxContext = Probability_auxContext;

RequirementParser.prototype.probability_aux = function() {

    var localctx = new Probability_auxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, RequirementParser.RULE_probability_aux);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        this.match(RequirementParser.PROB);
        this.state = 321;
        this.match(RequirementParser.RELATIONAL_OP);
        this.state = 322;
        this.prob_num();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Prob_numContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_prob_num;
    return this;
}

Prob_numContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Prob_numContext.prototype.constructor = Prob_numContext;

Prob_numContext.prototype.NUMBER = function() {
    return this.getToken(RequirementParser.NUMBER, 0);
};

Prob_numContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterProb_num(this);
	}
};

Prob_numContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitProb_num(this);
	}
};




RequirementParser.Prob_numContext = Prob_numContext;

RequirementParser.prototype.prob_num = function() {

    var localctx = new Prob_numContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, RequirementParser.RULE_prob_num);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 324;
        this.match(RequirementParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TimingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_timing;
    return this;
}

TimingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimingContext.prototype.constructor = TimingContext;

TimingContext.prototype.timing_aux = function() {
    return this.getTypedRuleContext(Timing_auxContext,0);
};

TimingContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterTiming(this);
	}
};

TimingContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitTiming(this);
	}
};




RequirementParser.TimingContext = TimingContext;

RequirementParser.prototype.timing = function() {

    var localctx = new TimingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, RequirementParser.RULE_timing);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 327;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RequirementParser.T__1) {
            this.state = 326;
            this.match(RequirementParser.T__1);
        }

        this.state = 329;
        this.timing_aux();
        this.state = 331;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RequirementParser.T__1) {
            this.state = 330;
            this.match(RequirementParser.T__1);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Timing_auxContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_timing_aux;
    return this;
}

Timing_auxContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Timing_auxContext.prototype.constructor = Timing_auxContext;

Timing_auxContext.prototype.WITHIN = function() {
    return this.getToken(RequirementParser.WITHIN, 0);
};

Timing_auxContext.prototype.duration_upper = function() {
    return this.getTypedRuleContext(Duration_upperContext,0);
};

Timing_auxContext.prototype.FOR = function() {
    return this.getToken(RequirementParser.FOR, 0);
};

Timing_auxContext.prototype.AFTER = function() {
    return this.getToken(RequirementParser.AFTER, 0);
};

Timing_auxContext.prototype.duration_lower = function() {
    return this.getTypedRuleContext(Duration_lowerContext,0);
};

Timing_auxContext.prototype.UNTIL = function() {
    return this.getToken(RequirementParser.UNTIL, 0);
};

Timing_auxContext.prototype.stop_condition = function() {
    return this.getTypedRuleContext(Stop_conditionContext,0);
};

Timing_auxContext.prototype.BEFORE = function() {
    return this.getToken(RequirementParser.BEFORE, 0);
};

Timing_auxContext.prototype.AT = function() {
    return this.getToken(RequirementParser.AT, 0);
};

Timing_auxContext.prototype.THE = function() {
    return this.getToken(RequirementParser.THE, 0);
};

Timing_auxContext.prototype.TIMEPOINT = function() {
    return this.getToken(RequirementParser.TIMEPOINT, 0);
};

Timing_auxContext.prototype.FIRST = function() {
    return this.getToken(RequirementParser.FIRST, 0);
};

Timing_auxContext.prototype.SAME = function() {
    return this.getToken(RequirementParser.SAME, 0);
};

Timing_auxContext.prototype.NEXT = function() {
    return this.getToken(RequirementParser.NEXT, 0);
};

Timing_auxContext.prototype.LAST = function() {
    return this.getToken(RequirementParser.LAST, 0);
};

Timing_auxContext.prototype.IMMEDIATELY = function() {
    return this.getToken(RequirementParser.IMMEDIATELY, 0);
};

Timing_auxContext.prototype.INITIALLY = function() {
    return this.getToken(RequirementParser.INITIALLY, 0);
};

Timing_auxContext.prototype.FINALLY = function() {
    return this.getToken(RequirementParser.FINALLY, 0);
};

Timing_auxContext.prototype.EVENTUALLY = function() {
    return this.getToken(RequirementParser.EVENTUALLY, 0);
};

Timing_auxContext.prototype.ALWAYS = function() {
    return this.getToken(RequirementParser.ALWAYS, 0);
};

Timing_auxContext.prototype.NEVER = function() {
    return this.getToken(RequirementParser.NEVER, 0);
};

Timing_auxContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterTiming_aux(this);
	}
};

Timing_auxContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitTiming_aux(this);
	}
};




RequirementParser.Timing_auxContext = Timing_auxContext;

RequirementParser.prototype.timing_aux = function() {

    var localctx = new Timing_auxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, RequirementParser.RULE_timing_aux);
    var _la = 0; // Token type
    try {
        this.state = 352;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RequirementParser.WITHIN:
            this.enterOuterAlt(localctx, 1);
            this.state = 333;
            this.match(RequirementParser.WITHIN);
            this.state = 334;
            this.duration_upper();
            break;
        case RequirementParser.FOR:
            this.enterOuterAlt(localctx, 2);
            this.state = 335;
            this.match(RequirementParser.FOR);
            this.state = 336;
            this.duration_upper();
            break;
        case RequirementParser.AFTER:
            this.enterOuterAlt(localctx, 3);
            this.state = 337;
            this.match(RequirementParser.AFTER);
            this.state = 338;
            this.duration_lower();
            break;
        case RequirementParser.UNTIL:
            this.enterOuterAlt(localctx, 4);
            this.state = 339;
            this.match(RequirementParser.UNTIL);
            this.state = 340;
            this.stop_condition();
            break;
        case RequirementParser.BEFORE:
            this.enterOuterAlt(localctx, 5);
            this.state = 341;
            this.match(RequirementParser.BEFORE);
            this.state = 342;
            this.stop_condition();
            break;
        case RequirementParser.AT:
            this.enterOuterAlt(localctx, 6);
            this.state = 343;
            this.match(RequirementParser.AT);
            this.state = 344;
            this.match(RequirementParser.THE);
            this.state = 345;
            _la = this._input.LA(1);
            if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (RequirementParser.FIRST - 30)) | (1 << (RequirementParser.LAST - 30)) | (1 << (RequirementParser.NEXT - 30)) | (1 << (RequirementParser.SAME - 30)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 346;
            this.match(RequirementParser.TIMEPOINT);
            break;
        case RequirementParser.IMMEDIATELY:
        case RequirementParser.INITIALLY:
            this.enterOuterAlt(localctx, 7);
            this.state = 347;
            _la = this._input.LA(1);
            if(!(_la===RequirementParser.IMMEDIATELY || _la===RequirementParser.INITIALLY)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case RequirementParser.FINALLY:
            this.enterOuterAlt(localctx, 8);
            this.state = 348;
            this.match(RequirementParser.FINALLY);
            break;
        case RequirementParser.EVENTUALLY:
            this.enterOuterAlt(localctx, 9);
            this.state = 349;
            this.match(RequirementParser.EVENTUALLY);
            break;
        case RequirementParser.ALWAYS:
            this.enterOuterAlt(localctx, 10);
            this.state = 350;
            this.match(RequirementParser.ALWAYS);
            break;
        case RequirementParser.NEVER:
            this.enterOuterAlt(localctx, 11);
            this.state = 351;
            this.match(RequirementParser.NEVER);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Duration_upperContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_duration_upper;
    return this;
}

Duration_upperContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Duration_upperContext.prototype.constructor = Duration_upperContext;

Duration_upperContext.prototype.duration = function() {
    return this.getTypedRuleContext(DurationContext,0);
};

Duration_upperContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterDuration_upper(this);
	}
};

Duration_upperContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitDuration_upper(this);
	}
};




RequirementParser.Duration_upperContext = Duration_upperContext;

RequirementParser.prototype.duration_upper = function() {

    var localctx = new Duration_upperContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, RequirementParser.RULE_duration_upper);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 354;
        this.duration();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Duration_lowerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_duration_lower;
    return this;
}

Duration_lowerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Duration_lowerContext.prototype.constructor = Duration_lowerContext;

Duration_lowerContext.prototype.duration = function() {
    return this.getTypedRuleContext(DurationContext,0);
};

Duration_lowerContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterDuration_lower(this);
	}
};

Duration_lowerContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitDuration_lower(this);
	}
};




RequirementParser.Duration_lowerContext = Duration_lowerContext;

RequirementParser.prototype.duration_lower = function() {

    var localctx = new Duration_lowerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, RequirementParser.RULE_duration_lower);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 356;
        this.duration();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Component_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_component_name;
    return this;
}

Component_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Component_nameContext.prototype.constructor = Component_nameContext;

Component_nameContext.prototype.ID = function() {
    return this.getToken(RequirementParser.ID, 0);
};

Component_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterComponent_name(this);
	}
};

Component_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitComponent_name(this);
	}
};




RequirementParser.Component_nameContext = Component_nameContext;

RequirementParser.prototype.component_name = function() {

    var localctx = new Component_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, RequirementParser.RULE_component_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this.match(RequirementParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Mode_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_mode_name;
    return this;
}

Mode_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mode_nameContext.prototype.constructor = Mode_nameContext;

Mode_nameContext.prototype.ID = function() {
    return this.getToken(RequirementParser.ID, 0);
};

Mode_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterMode_name(this);
	}
};

Mode_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitMode_name(this);
	}
};




RequirementParser.Mode_nameContext = Mode_nameContext;

RequirementParser.prototype.mode_name = function() {

    var localctx = new Mode_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, RequirementParser.RULE_mode_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 360;
        this.match(RequirementParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DurationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_duration;
    return this;
}

DurationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DurationContext.prototype.constructor = DurationContext;

DurationContext.prototype.NUMBER = function() {
    return this.getToken(RequirementParser.NUMBER, 0);
};

DurationContext.prototype.timeunit = function() {
    return this.getTypedRuleContext(TimeunitContext,0);
};

DurationContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterDuration(this);
	}
};

DurationContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitDuration(this);
	}
};




RequirementParser.DurationContext = DurationContext;

RequirementParser.prototype.duration = function() {

    var localctx = new DurationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, RequirementParser.RULE_duration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 362;
        this.match(RequirementParser.NUMBER);
        this.state = 363;
        this.timeunit();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TimeunitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_timeunit;
    return this;
}

TimeunitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimeunitContext.prototype.constructor = TimeunitContext;

TimeunitContext.prototype.TICK = function() {
    return this.getToken(RequirementParser.TICK, 0);
};

TimeunitContext.prototype.MICROSECOND = function() {
    return this.getToken(RequirementParser.MICROSECOND, 0);
};

TimeunitContext.prototype.MILLISECOND = function() {
    return this.getToken(RequirementParser.MILLISECOND, 0);
};

TimeunitContext.prototype.SECOND = function() {
    return this.getToken(RequirementParser.SECOND, 0);
};

TimeunitContext.prototype.MINUTE = function() {
    return this.getToken(RequirementParser.MINUTE, 0);
};

TimeunitContext.prototype.HOUR = function() {
    return this.getToken(RequirementParser.HOUR, 0);
};

TimeunitContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterTimeunit(this);
	}
};

TimeunitContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitTimeunit(this);
	}
};




RequirementParser.TimeunitContext = TimeunitContext;

RequirementParser.prototype.timeunit = function() {

    var localctx = new TimeunitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, RequirementParser.RULE_timeunit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 365;
        _la = this._input.LA(1);
        if(!(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (RequirementParser.HOUR - 32)) | (1 << (RequirementParser.MICROSECOND - 32)) | (1 << (RequirementParser.MILLISECOND - 32)) | (1 << (RequirementParser.MINUTE - 32)) | (1 << (RequirementParser.SECOND - 32)) | (1 << (RequirementParser.TICK - 32)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Post_conditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_post_condition;
    return this;
}

Post_conditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Post_conditionContext.prototype.constructor = Post_conditionContext;

Post_conditionContext.prototype.bool_expr = function() {
    return this.getTypedRuleContext(Bool_exprContext,0);
};

Post_conditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterPost_condition(this);
	}
};

Post_conditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitPost_condition(this);
	}
};




RequirementParser.Post_conditionContext = Post_conditionContext;

RequirementParser.prototype.post_condition = function() {

    var localctx = new Post_conditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, RequirementParser.RULE_post_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        this.bool_expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Bool_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_bool_expr;
    return this;
}

Bool_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Bool_exprContext.prototype.constructor = Bool_exprContext;

Bool_exprContext.prototype.bool_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Bool_exprContext);
    } else {
        return this.getTypedRuleContext(Bool_exprContext,i);
    }
};

Bool_exprContext.prototype.IF = function() {
    return this.getToken(RequirementParser.IF, 0);
};

Bool_exprContext.prototype.THEN = function() {
    return this.getToken(RequirementParser.THEN, 0);
};

Bool_exprContext.prototype.AT = function() {
    return this.getToken(RequirementParser.AT, 0);
};

Bool_exprContext.prototype.THE = function() {
    return this.getToken(RequirementParser.THE, 0);
};

Bool_exprContext.prototype.OCCURRENCE = function() {
    return this.getToken(RequirementParser.OCCURRENCE, 0);
};

Bool_exprContext.prototype.OF = function() {
    return this.getToken(RequirementParser.OF, 0);
};

Bool_exprContext.prototype.PREVIOUS = function() {
    return this.getToken(RequirementParser.PREVIOUS, 0);
};

Bool_exprContext.prototype.NEXT = function() {
    return this.getToken(RequirementParser.NEXT, 0);
};

Bool_exprContext.prototype.numeric_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Numeric_exprContext);
    } else {
        return this.getTypedRuleContext(Numeric_exprContext,i);
    }
};

Bool_exprContext.prototype.RELATIONAL_OP = function() {
    return this.getToken(RequirementParser.RELATIONAL_OP, 0);
};

Bool_exprContext.prototype.ID = function() {
    return this.getToken(RequirementParser.ID, 0);
};

Bool_exprContext.prototype.XOR = function() {
    return this.getToken(RequirementParser.XOR, 0);
};

Bool_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterBool_expr(this);
	}
};

Bool_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitBool_expr(this);
	}
};



RequirementParser.prototype.bool_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Bool_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 78;
    this.enterRecursionRule(localctx, 78, RequirementParser.RULE_bool_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 417;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        switch(la_) {
        case 1:
            this.state = 370;
            _la = this._input.LA(1);
            if(!(_la===RequirementParser.T__2 || _la===RequirementParser.T__8)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 371;
            this.bool_expr(11);
            break;

        case 2:
            this.state = 372;
            this.match(RequirementParser.IF);
            this.state = 373;
            this.bool_expr(0);
            this.state = 374;
            this.match(RequirementParser.THEN);
            this.state = 375;
            this.bool_expr(7);
            break;

        case 3:
            this.state = 377;
            this.match(RequirementParser.AT);
            this.state = 378;
            this.match(RequirementParser.THE);
            this.state = 379;
            _la = this._input.LA(1);
            if(!(_la===RequirementParser.NEXT || _la===RequirementParser.PREVIOUS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 380;
            this.match(RequirementParser.OCCURRENCE);
            this.state = 381;
            this.match(RequirementParser.OF);
            this.state = 382;
            this.bool_expr(0);
            this.state = 383;
            this.match(RequirementParser.T__1);
            this.state = 384;
            this.bool_expr(6);
            break;

        case 4:
            this.state = 386;
            this.match(RequirementParser.T__5);
            this.state = 387;
            this.bool_expr(0);
            this.state = 388;
            this.match(RequirementParser.T__6);
            break;

        case 5:
            this.state = 390;
            this.numeric_expr(0);
            this.state = 391;
            this.match(RequirementParser.RELATIONAL_OP);
            this.state = 392;
            this.numeric_expr(0);
            break;

        case 6:
            this.state = 394;
            this.match(RequirementParser.ID);
            this.state = 413;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
            if(la_===1) {
                this.state = 395;
                this.match(RequirementParser.T__5);
                this.state = 410;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (RequirementParser.T__2 - 3)) | (1 << (RequirementParser.T__5 - 3)) | (1 << (RequirementParser.T__7 - 3)) | (1 << (RequirementParser.T__8 - 3)) | (1 << (RequirementParser.T__13 - 3)) | (1 << (RequirementParser.T__15 - 3)) | (1 << (RequirementParser.AT - 3)) | (1 << (RequirementParser.IF - 3)))) !== 0) || _la===RequirementParser.ID || _la===RequirementParser.NUMBER) {
                    this.state = 398;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
                    switch(la_) {
                    case 1:
                        this.state = 396;
                        this.bool_expr(0);
                        break;

                    case 2:
                        this.state = 397;
                        this.numeric_expr(0);
                        break;

                    }
                    this.state = 407;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while(_la===RequirementParser.T__1) {
                        this.state = 400;
                        this.match(RequirementParser.T__1);
                        this.state = 403;
                        this._errHandler.sync(this);
                        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
                        switch(la_) {
                        case 1:
                            this.state = 401;
                            this.bool_expr(0);
                            break;

                        case 2:
                            this.state = 402;
                            this.numeric_expr(0);
                            break;

                        }
                        this.state = 409;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }

                this.state = 412;
                this.match(RequirementParser.T__6);

            }
            break;

        case 7:
            this.state = 415;
            this.match(RequirementParser.T__7);
            break;

        case 8:
            this.state = 416;
            this.match(RequirementParser.T__13);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 430;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,50,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 428;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Bool_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RequirementParser.RULE_bool_expr);
                    this.state = 419;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 420;
                    this.match(RequirementParser.T__3);
                    this.state = 421;
                    this.bool_expr(11);
                    break;

                case 2:
                    localctx = new Bool_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RequirementParser.RULE_bool_expr);
                    this.state = 422;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 423;
                    _la = this._input.LA(1);
                    if(!(_la===RequirementParser.T__4 || _la===RequirementParser.XOR)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 424;
                    this.bool_expr(10);
                    break;

                case 3:
                    localctx = new Bool_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RequirementParser.RULE_bool_expr);
                    this.state = 425;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 426;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RequirementParser.T__9) | (1 << RequirementParser.T__10) | (1 << RequirementParser.T__11) | (1 << RequirementParser.T__12))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 427;
                    this.bool_expr(9);
                    break;

                } 
            }
            this.state = 432;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,50,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Numeric_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RequirementParser.RULE_numeric_expr;
    return this;
}

Numeric_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Numeric_exprContext.prototype.constructor = Numeric_exprContext;

Numeric_exprContext.prototype.numeric_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Numeric_exprContext);
    } else {
        return this.getTypedRuleContext(Numeric_exprContext,i);
    }
};

Numeric_exprContext.prototype.NUMBER = function() {
    return this.getToken(RequirementParser.NUMBER, 0);
};

Numeric_exprContext.prototype.ID = function() {
    return this.getToken(RequirementParser.ID, 0);
};

Numeric_exprContext.prototype.bool_expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Bool_exprContext);
    } else {
        return this.getTypedRuleContext(Bool_exprContext,i);
    }
};

Numeric_exprContext.prototype.MOD = function() {
    return this.getToken(RequirementParser.MOD, 0);
};

Numeric_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.enterNumeric_expr(this);
	}
};

Numeric_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RequirementListener ) {
        listener.exitNumeric_expr(this);
	}
};



RequirementParser.prototype.numeric_expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Numeric_exprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 80;
    this.enterRecursionRule(localctx, 80, RequirementParser.RULE_numeric_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 462;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RequirementParser.T__15:
            this.state = 434;
            this.match(RequirementParser.T__15);
            this.state = 435;
            this.numeric_expr(6);
            break;
        case RequirementParser.NUMBER:
            this.state = 436;
            this.match(RequirementParser.NUMBER);
            break;
        case RequirementParser.ID:
            this.state = 437;
            this.match(RequirementParser.ID);
            this.state = 456;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
            if(la_===1) {
                this.state = 438;
                this.match(RequirementParser.T__5);
                this.state = 453;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (RequirementParser.T__2 - 3)) | (1 << (RequirementParser.T__5 - 3)) | (1 << (RequirementParser.T__7 - 3)) | (1 << (RequirementParser.T__8 - 3)) | (1 << (RequirementParser.T__13 - 3)) | (1 << (RequirementParser.T__15 - 3)) | (1 << (RequirementParser.AT - 3)) | (1 << (RequirementParser.IF - 3)))) !== 0) || _la===RequirementParser.ID || _la===RequirementParser.NUMBER) {
                    this.state = 441;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
                    switch(la_) {
                    case 1:
                        this.state = 439;
                        this.bool_expr(0);
                        break;

                    case 2:
                        this.state = 440;
                        this.numeric_expr(0);
                        break;

                    }
                    this.state = 450;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while(_la===RequirementParser.T__1) {
                        this.state = 443;
                        this.match(RequirementParser.T__1);
                        this.state = 446;
                        this._errHandler.sync(this);
                        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
                        switch(la_) {
                        case 1:
                            this.state = 444;
                            this.bool_expr(0);
                            break;

                        case 2:
                            this.state = 445;
                            this.numeric_expr(0);
                            break;

                        }
                        this.state = 452;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }

                this.state = 455;
                this.match(RequirementParser.T__6);

            }
            break;
        case RequirementParser.T__5:
            this.state = 458;
            this.match(RequirementParser.T__5);
            this.state = 459;
            this.numeric_expr(0);
            this.state = 460;
            this.match(RequirementParser.T__6);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 475;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,58,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 473;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Numeric_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RequirementParser.RULE_numeric_expr);
                    this.state = 464;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 465;
                    this.match(RequirementParser.T__14);
                    this.state = 466;
                    this.numeric_expr(8);
                    break;

                case 2:
                    localctx = new Numeric_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RequirementParser.RULE_numeric_expr);
                    this.state = 467;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 468;
                    _la = this._input.LA(1);
                    if(!(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (RequirementParser.T__16 - 17)) | (1 << (RequirementParser.T__17 - 17)) | (1 << (RequirementParser.MOD - 17)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 469;
                    this.numeric_expr(6);
                    break;

                case 3:
                    localctx = new Numeric_exprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RequirementParser.RULE_numeric_expr);
                    this.state = 470;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 471;
                    _la = this._input.LA(1);
                    if(!(_la===RequirementParser.T__15 || _la===RequirementParser.T__18)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 472;
                    this.numeric_expr(5);
                    break;

                } 
            }
            this.state = 477;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,58,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


RequirementParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 8:
			return this.cond_expression_sempred(localctx, predIndex);
	case 9:
			return this.obl_expression_sempred(localctx, predIndex);
	case 39:
			return this.bool_expr_sempred(localctx, predIndex);
	case 40:
			return this.numeric_expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

RequirementParser.prototype.cond_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

RequirementParser.prototype.obl_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

RequirementParser.prototype.bool_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 9);
		case 5:
			return this.precpred(this._ctx, 8);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

RequirementParser.prototype.numeric_expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.precpred(this._ctx, 7);
		case 7:
			return this.precpred(this._ctx, 5);
		case 8:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.RequirementParser = RequirementParser;
