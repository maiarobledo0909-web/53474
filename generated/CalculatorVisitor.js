// Generated from Calculator.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CalculatorParser.

function CalculatorVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CalculatorVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CalculatorVisitor.prototype.constructor = CalculatorVisitor;

// Visit a parse tree produced by CalculatorParser#programa.
CalculatorVisitor.prototype.visitPrograma = function(ctx) {
};


// Visit a parse tree produced by CalculatorParser#sentencia.
CalculatorVisitor.prototype.visitSentencia = function(ctx) {
};


// Visit a parse tree produced by CalculatorParser#declaracion.
CalculatorVisitor.prototype.visitDeclaracion = function(ctx) {
};


// Visit a parse tree produced by CalculatorParser#impresion.
CalculatorVisitor.prototype.visitImpresion = function(ctx) {
};


// Visit a parse tree produced by CalculatorParser#operacionTexto.
CalculatorVisitor.prototype.visitOperacionTexto = function(ctx) {
};


// Visit a parse tree produced by CalculatorParser#transformacion.
CalculatorVisitor.prototype.visitTransformacion = function(ctx) {
};


// Visit a parse tree produced by CalculatorParser#valor.
CalculatorVisitor.prototype.visitValor = function(ctx) {
};



exports.CalculatorVisitor = CalculatorVisitor;