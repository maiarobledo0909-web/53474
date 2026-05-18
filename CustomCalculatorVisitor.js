import CalculatorVisitor from './generated/CalculatorVisitor.js';

export default class CustomCalculatorVisitor extends CalculatorVisitor {

    constructor() {
        super();
        this.memory = new Map();
        this.jsCode = [];
    }

    visitPrograma(ctx) {
        return this.visitChildren(ctx);
    }

    visitDeclaracion(ctx) {

        const nombre = ctx.ID().getText();
        const valor = this.obtenerValor(ctx.valor());

        this.memory.set(nombre, valor);

        let jsValor = typeof valor === 'string'
            ? `"${valor}"`
            : valor;

        this.jsCode.push(`let ${nombre} = ${jsValor};`);

        console.log(`Variable declarada: ${nombre} = ${valor}`);
    }

    visitOperacionTexto(ctx) {

        const nombre = ctx.ID().getText();

        const operacion =
            ctx.transformacion().getText();

        let valor =
            this.obtenerValor(ctx.valor());

        let resultado;
        let jsOperacion;

        switch (operacion) {

            case 'mayusculas':

                resultado = valor.toUpperCase();

                jsOperacion =
                    `"${valor}".toUpperCase()`;

                break;

            case 'minusculas':

                resultado = valor.toLowerCase();

                jsOperacion =
                    `"${valor}".toLowerCase()`;

                break;

            case 'longitud':

                resultado = valor.length;

                jsOperacion =
                    `"${valor}".length`;

                break;

            case 'invertir':

                resultado = valor
                    .split('')
                    .reverse()
                    .join('');

                jsOperacion =
                    `"${valor}".split('').reverse().join('')`;

                break;
        }

        this.memory.set(nombre, resultado);

        this.jsCode.push(
            `let ${nombre} = ${jsOperacion};`
        );

        console.log(
            `Resultado: ${nombre} = ${resultado}`
        );
    }

    visitImpresion(ctx) {

        const valor =
            this.obtenerValor(ctx.valor());

        console.log(`SALIDA: ${valor}`);

        this.jsCode.push(
            `console.log("${valor}");`
        );
    }

    obtenerValor(ctx) {

        if (ctx.TEXTO()) {

            return ctx
                .getText()
                .replace(/"/g, '');
        }

        if (ctx.NUMERO()) {

            return Number(ctx.getText());
        }

        if (ctx.ID()) {

            const nombre = ctx.getText();

            if (this.memory.has(nombre)) {

                return this.memory.get(nombre);
            }

            throw new Error(
                `Variable no definida: ${nombre}`
            );
        }
    }
}