grammar MyGrammar;

ID: [a-zA-Z_] [a-zA-Z0-9_]*;
WS: [ \t]+;

eqAssertion: ID ('.' ID)* WS? '=' WS? ID ('.' ID)*;