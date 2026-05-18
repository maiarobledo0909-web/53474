grammar Calculator;

programa
    : sentencia* EOF
    ;

sentencia
    : declaracion
    | impresion
    | operacionTexto
    ;

declaracion
    : VARIABLE ID '=' valor ';'
    ;

impresion
    : IMPRIMIR '(' valor ')' ';'
    ;

operacionTexto
    : VARIABLE ID '=' transformacion '(' valor ')' ';'
    ;

transformacion
    : MAYUSCULAS
    | MINUSCULAS
    | LONGITUD
    | INVERTIR
    ;

valor
    : TEXTO
    | NUMERO
    | ID
    ;

VARIABLE    : 'variable';
IMPRIMIR    : 'imprimir';

MAYUSCULAS  : 'mayusculas';
MINUSCULAS  : 'minusculas';
LONGITUD    : 'longitud';
INVERTIR    : 'invertir';

ID          : [a-zA-Z_][a-zA-Z0-9_]*;

NUMERO      : [0-9]+;

TEXTO       : '"' (~["\r\n])* '"';

WS          : [ \t\r\n]+ -> skip;