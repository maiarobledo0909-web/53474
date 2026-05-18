const antlr4 = require('antlr4');
const fs = require('fs');

const CalculatorLexer =
    require('./generated/CalculatorLexer')
    .CalculatorLexer;

const CalculatorParser =
    require('./generated/CalculatorParser')
    .CalculatorParser;

const CustomCalculatorVisitor =
    require('./CustomCalculatorVisitor')
    .default;

const input = fs.readFileSync(
    'input.txt',
    'utf8'
);

console.log('\n===== CÓDIGO FUENTE =====\n');
console.log(input);

const chars =
    new antlr4.InputStream(input);

const lexer =
    new CalculatorLexer(chars);

const tokens = lexer.getAllTokens();

console.log('\n===== TABLA DE TOKENS =====');

tokens.forEach(token => {

    if (token.type !== -1) {

        console.log(
            `LEXEMA: ${token.text}`
            + ` | TOKEN: ${token.type}`
        );
    }
});

lexer.reset();

const tokenStream =
    new antlr4.CommonTokenStream(lexer);

const parser =
    new CalculatorParser(tokenStream);

parser.buildParseTrees = true;

const tree = parser.programa();

console.log('\n===== ANÁLISIS SINTÁCTICO =====');

if (parser.syntaxErrorsCount > 0) {

    console.log(
        'La entrada contiene errores'
    );

} else {

    console.log('Entrada válida');
}

console.log('\n===== ÁRBOL SINTÁCTICO =====');

console.log(
    tree.toStringTree(parser.ruleNames)
);

console.log('\n===== INTERPRETACIÓN =====');

const visitor =
    new CustomCalculatorVisitor();

visitor.visit(tree);

console.log(
    '\n===== TRADUCCIÓN A JAVASCRIPT ====='
);

visitor.jsCode.forEach(linea => {

    console.log(linea);
});