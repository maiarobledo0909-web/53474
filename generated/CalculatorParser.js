// Generated from Calculator.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalculatorListener = require('./CalculatorListener').CalculatorListener;
var CalculatorVisitor = require('./CalculatorVisitor').CalculatorVisitor;

var grammarFileName = "Calculator.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\20\67\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3\2",
    "\7\2\22\n\2\f\2\16\2\25\13\2\3\2\3\2\3\3\3\3\3\3\5\3\34\n\3\3\4\3\4",
    "\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6",
    "\3\6\3\6\3\7\3\7\3\b\3\b\3\b\2\2\t\2\4\6\b\n\f\16\2\4\3\2\t\f\3\2\r",
    "\17\62\2\23\3\2\2\2\4\33\3\2\2\2\6\35\3\2\2\2\b#\3\2\2\2\n)\3\2\2\2",
    "\f\62\3\2\2\2\16\64\3\2\2\2\20\22\5\4\3\2\21\20\3\2\2\2\22\25\3\2\2",
    "\2\23\21\3\2\2\2\23\24\3\2\2\2\24\26\3\2\2\2\25\23\3\2\2\2\26\27\7\2",
    "\2\3\27\3\3\2\2\2\30\34\5\6\4\2\31\34\5\b\5\2\32\34\5\n\6\2\33\30\3",
    "\2\2\2\33\31\3\2\2\2\33\32\3\2\2\2\34\5\3\2\2\2\35\36\7\7\2\2\36\37",
    "\7\r\2\2\37 \7\3\2\2 !\5\16\b\2!\"\7\4\2\2\"\7\3\2\2\2#$\7\b\2\2$%\7",
    "\5\2\2%&\5\16\b\2&\'\7\6\2\2\'(\7\4\2\2(\t\3\2\2\2)*\7\7\2\2*+\7\r\2",
    "\2+,\7\3\2\2,-\5\f\7\2-.\7\5\2\2./\5\16\b\2/\60\7\6\2\2\60\61\7\4\2",
    "\2\61\13\3\2\2\2\62\63\t\2\2\2\63\r\3\2\2\2\64\65\t\3\2\2\65\17\3\2",
    "\2\2\4\23\33"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'='", "';'", "'('", "')'", "'variable'", "'imprimir'", 
                     "'mayusculas'", "'minusculas'", "'longitud'", "'invertir'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', "VARIABLE", 
                      "IMPRIMIR", "MAYUSCULAS", "MINUSCULAS", "LONGITUD", 
                      "INVERTIR", "ID", "NUMERO", "TEXTO", "WS" ];

var ruleNames =  [ "programa", "sentencia", "declaracion", "impresion", 
                   "operacionTexto", "transformacion", "valor" ];

function CalculatorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CalculatorParser.prototype = Object.create(antlr4.Parser.prototype);
CalculatorParser.prototype.constructor = CalculatorParser;

Object.defineProperty(CalculatorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.VARIABLE = 5;
CalculatorParser.IMPRIMIR = 6;
CalculatorParser.MAYUSCULAS = 7;
CalculatorParser.MINUSCULAS = 8;
CalculatorParser.LONGITUD = 9;
CalculatorParser.INVERTIR = 10;
CalculatorParser.ID = 11;
CalculatorParser.NUMERO = 12;
CalculatorParser.TEXTO = 13;
CalculatorParser.WS = 14;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_sentencia = 1;
CalculatorParser.RULE_declaracion = 2;
CalculatorParser.RULE_impresion = 3;
CalculatorParser.RULE_operacionTexto = 4;
CalculatorParser.RULE_transformacion = 5;
CalculatorParser.RULE_valor = 6;

function ProgramaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_programa;
    return this;
}

ProgramaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramaContext.prototype.constructor = ProgramaContext;

ProgramaContext.prototype.EOF = function() {
    return this.getToken(CalculatorParser.EOF, 0);
};

ProgramaContext.prototype.sentencia = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SentenciaContext);
    } else {
        return this.getTypedRuleContext(SentenciaContext,i);
    }
};

ProgramaContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterPrograma(this);
	}
};

ProgramaContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitPrograma(this);
	}
};

ProgramaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitPrograma(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.ProgramaContext = ProgramaContext;

CalculatorParser.prototype.programa = function() {

    var localctx = new ProgramaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CalculatorParser.VARIABLE || _la===CalculatorParser.IMPRIMIR) {
            this.state = 14;
            this.sentencia();
            this.state = 19;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 20;
        this.match(CalculatorParser.EOF);
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

function SentenciaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_sentencia;
    return this;
}

SentenciaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SentenciaContext.prototype.constructor = SentenciaContext;

SentenciaContext.prototype.declaracion = function() {
    return this.getTypedRuleContext(DeclaracionContext,0);
};

SentenciaContext.prototype.impresion = function() {
    return this.getTypedRuleContext(ImpresionContext,0);
};

SentenciaContext.prototype.operacionTexto = function() {
    return this.getTypedRuleContext(OperacionTextoContext,0);
};

SentenciaContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterSentencia(this);
	}
};

SentenciaContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitSentencia(this);
	}
};

SentenciaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitSentencia(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.SentenciaContext = SentenciaContext;

CalculatorParser.prototype.sentencia = function() {

    var localctx = new SentenciaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CalculatorParser.RULE_sentencia);
    try {
        this.state = 25;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 22;
            this.declaracion();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 23;
            this.impresion();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 24;
            this.operacionTexto();
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

function DeclaracionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_declaracion;
    return this;
}

DeclaracionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeclaracionContext.prototype.constructor = DeclaracionContext;

DeclaracionContext.prototype.VARIABLE = function() {
    return this.getToken(CalculatorParser.VARIABLE, 0);
};

DeclaracionContext.prototype.ID = function() {
    return this.getToken(CalculatorParser.ID, 0);
};

DeclaracionContext.prototype.valor = function() {
    return this.getTypedRuleContext(ValorContext,0);
};

DeclaracionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterDeclaracion(this);
	}
};

DeclaracionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitDeclaracion(this);
	}
};

DeclaracionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitDeclaracion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.DeclaracionContext = DeclaracionContext;

CalculatorParser.prototype.declaracion = function() {

    var localctx = new DeclaracionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CalculatorParser.RULE_declaracion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.match(CalculatorParser.VARIABLE);
        this.state = 28;
        this.match(CalculatorParser.ID);
        this.state = 29;
        this.match(CalculatorParser.T__0);
        this.state = 30;
        this.valor();
        this.state = 31;
        this.match(CalculatorParser.T__1);
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

function ImpresionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_impresion;
    return this;
}

ImpresionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImpresionContext.prototype.constructor = ImpresionContext;

ImpresionContext.prototype.IMPRIMIR = function() {
    return this.getToken(CalculatorParser.IMPRIMIR, 0);
};

ImpresionContext.prototype.valor = function() {
    return this.getTypedRuleContext(ValorContext,0);
};

ImpresionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterImpresion(this);
	}
};

ImpresionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitImpresion(this);
	}
};

ImpresionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitImpresion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.ImpresionContext = ImpresionContext;

CalculatorParser.prototype.impresion = function() {

    var localctx = new ImpresionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CalculatorParser.RULE_impresion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        this.match(CalculatorParser.IMPRIMIR);
        this.state = 34;
        this.match(CalculatorParser.T__2);
        this.state = 35;
        this.valor();
        this.state = 36;
        this.match(CalculatorParser.T__3);
        this.state = 37;
        this.match(CalculatorParser.T__1);
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

function OperacionTextoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_operacionTexto;
    return this;
}

OperacionTextoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperacionTextoContext.prototype.constructor = OperacionTextoContext;

OperacionTextoContext.prototype.VARIABLE = function() {
    return this.getToken(CalculatorParser.VARIABLE, 0);
};

OperacionTextoContext.prototype.ID = function() {
    return this.getToken(CalculatorParser.ID, 0);
};

OperacionTextoContext.prototype.transformacion = function() {
    return this.getTypedRuleContext(TransformacionContext,0);
};

OperacionTextoContext.prototype.valor = function() {
    return this.getTypedRuleContext(ValorContext,0);
};

OperacionTextoContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterOperacionTexto(this);
	}
};

OperacionTextoContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitOperacionTexto(this);
	}
};

OperacionTextoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitOperacionTexto(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.OperacionTextoContext = OperacionTextoContext;

CalculatorParser.prototype.operacionTexto = function() {

    var localctx = new OperacionTextoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CalculatorParser.RULE_operacionTexto);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.match(CalculatorParser.VARIABLE);
        this.state = 40;
        this.match(CalculatorParser.ID);
        this.state = 41;
        this.match(CalculatorParser.T__0);
        this.state = 42;
        this.transformacion();
        this.state = 43;
        this.match(CalculatorParser.T__2);
        this.state = 44;
        this.valor();
        this.state = 45;
        this.match(CalculatorParser.T__3);
        this.state = 46;
        this.match(CalculatorParser.T__1);
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

function TransformacionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_transformacion;
    return this;
}

TransformacionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TransformacionContext.prototype.constructor = TransformacionContext;

TransformacionContext.prototype.MAYUSCULAS = function() {
    return this.getToken(CalculatorParser.MAYUSCULAS, 0);
};

TransformacionContext.prototype.MINUSCULAS = function() {
    return this.getToken(CalculatorParser.MINUSCULAS, 0);
};

TransformacionContext.prototype.LONGITUD = function() {
    return this.getToken(CalculatorParser.LONGITUD, 0);
};

TransformacionContext.prototype.INVERTIR = function() {
    return this.getToken(CalculatorParser.INVERTIR, 0);
};

TransformacionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterTransformacion(this);
	}
};

TransformacionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitTransformacion(this);
	}
};

TransformacionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitTransformacion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.TransformacionContext = TransformacionContext;

CalculatorParser.prototype.transformacion = function() {

    var localctx = new TransformacionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CalculatorParser.RULE_transformacion);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalculatorParser.MAYUSCULAS) | (1 << CalculatorParser.MINUSCULAS) | (1 << CalculatorParser.LONGITUD) | (1 << CalculatorParser.INVERTIR))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
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

function ValorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_valor;
    return this;
}

ValorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValorContext.prototype.constructor = ValorContext;

ValorContext.prototype.TEXTO = function() {
    return this.getToken(CalculatorParser.TEXTO, 0);
};

ValorContext.prototype.NUMERO = function() {
    return this.getToken(CalculatorParser.NUMERO, 0);
};

ValorContext.prototype.ID = function() {
    return this.getToken(CalculatorParser.ID, 0);
};

ValorContext.prototype.enterRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.enterValor(this);
	}
};

ValorContext.prototype.exitRule = function(listener) {
    if(listener instanceof CalculatorListener ) {
        listener.exitValor(this);
	}
};

ValorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitValor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.ValorContext = ValorContext;

CalculatorParser.prototype.valor = function() {

    var localctx = new ValorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CalculatorParser.RULE_valor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalculatorParser.ID) | (1 << CalculatorParser.NUMERO) | (1 << CalculatorParser.TEXTO))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
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


exports.CalculatorParser = CalculatorParser;
