// Generated from Calculator.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CalculatorParser.
function CalculatorListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CalculatorListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CalculatorListener.prototype.constructor = CalculatorListener;

// Enter a parse tree produced by CalculatorParser#programa.
CalculatorListener.prototype.enterPrograma = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#programa.
CalculatorListener.prototype.exitPrograma = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#sentencia.
CalculatorListener.prototype.enterSentencia = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#sentencia.
CalculatorListener.prototype.exitSentencia = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#declaracion.
CalculatorListener.prototype.enterDeclaracion = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#declaracion.
CalculatorListener.prototype.exitDeclaracion = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#impresion.
CalculatorListener.prototype.enterImpresion = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#impresion.
CalculatorListener.prototype.exitImpresion = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#operacionTexto.
CalculatorListener.prototype.enterOperacionTexto = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#operacionTexto.
CalculatorListener.prototype.exitOperacionTexto = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#transformacion.
CalculatorListener.prototype.enterTransformacion = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#transformacion.
CalculatorListener.prototype.exitTransformacion = function(ctx) {
};


// Enter a parse tree produced by CalculatorParser#valor.
CalculatorListener.prototype.enterValor = function(ctx) {
};

// Exit a parse tree produced by CalculatorParser#valor.
CalculatorListener.prototype.exitValor = function(ctx) {
};



exports.CalculatorListener = CalculatorListener;