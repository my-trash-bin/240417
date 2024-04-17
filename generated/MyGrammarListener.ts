// Generated from ./MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { EqAssertionContext } from "./MyGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyGrammarParser`.
 */
export interface MyGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MyGrammarParser.eqAssertion`.
	 * @param ctx the parse tree
	 */
	enterEqAssertion?: (ctx: EqAssertionContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.eqAssertion`.
	 * @param ctx the parse tree
	 */
	exitEqAssertion?: (ctx: EqAssertionContext) => void;
}

