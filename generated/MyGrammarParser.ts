// Generated from ./MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MyGrammarListener } from "./MyGrammarListener";

export class MyGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly ID = 3;
	public static readonly WS = 4;
	public static readonly RULE_eqAssertion = 0;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"eqAssertion",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyGrammarParser._LITERAL_NAMES, MyGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MyGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MyGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MyGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MyGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MyGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public eqAssertion(): EqAssertionContext {
		let _localctx: EqAssertionContext = new EqAssertionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MyGrammarParser.RULE_eqAssertion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2;
			this.match(MyGrammarParser.ID);
			this.state = 7;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MyGrammarParser.T__0) {
				{
				{
				this.state = 3;
				this.match(MyGrammarParser.T__0);
				this.state = 4;
				this.match(MyGrammarParser.ID);
				}
				}
				this.state = 9;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MyGrammarParser.WS) {
				{
				this.state = 10;
				this.match(MyGrammarParser.WS);
				}
			}

			this.state = 13;
			this.match(MyGrammarParser.T__1);
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MyGrammarParser.WS) {
				{
				this.state = 14;
				this.match(MyGrammarParser.WS);
				}
			}

			this.state = 17;
			this.match(MyGrammarParser.ID);
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MyGrammarParser.T__0) {
				{
				{
				this.state = 18;
				this.match(MyGrammarParser.T__0);
				this.state = 19;
				this.match(MyGrammarParser.ID);
				}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x06\x1C\x04\x02" +
		"\t\x02\x03\x02\x03\x02\x03\x02\x07\x02\b\n\x02\f\x02\x0E\x02\v\v\x02\x03" +
		"\x02\x05\x02\x0E\n\x02\x03\x02\x03\x02\x05\x02\x12\n\x02\x03\x02\x03\x02" +
		"\x03\x02\x07\x02\x17\n\x02\f\x02\x0E\x02\x1A\v\x02\x03\x02\x02\x02\x02" +
		"\x03\x02\x02\x02\x02\x02\x1E\x02\x04\x03\x02\x02\x02\x04\t\x07\x05\x02" +
		"\x02\x05\x06\x07\x03\x02\x02\x06\b\x07\x05\x02\x02\x07\x05\x03\x02\x02" +
		"\x02\b\v\x03\x02\x02\x02\t\x07\x03\x02\x02\x02\t\n\x03\x02\x02\x02\n\r" +
		"\x03\x02\x02\x02\v\t\x03\x02\x02\x02\f\x0E\x07\x06\x02\x02\r\f\x03\x02" +
		"\x02\x02\r\x0E\x03\x02\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\x11\x07\x04" +
		"\x02\x02\x10\x12\x07\x06\x02\x02\x11\x10\x03\x02\x02\x02\x11\x12\x03\x02" +
		"\x02\x02\x12\x13\x03\x02\x02\x02\x13\x18\x07\x05\x02\x02\x14\x15\x07\x03" +
		"\x02\x02\x15\x17\x07\x05\x02\x02\x16\x14\x03\x02\x02\x02\x17\x1A\x03\x02" +
		"\x02\x02\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x03\x03\x02" +
		"\x02\x02\x1A\x18\x03\x02\x02\x02\x06\t\r\x11\x18";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarParser.__ATN) {
			MyGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarParser._serializedATN));
		}

		return MyGrammarParser.__ATN;
	}

}

export class EqAssertionContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MyGrammarParser.ID);
		} else {
			return this.getToken(MyGrammarParser.ID, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MyGrammarParser.WS);
		} else {
			return this.getToken(MyGrammarParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyGrammarParser.RULE_eqAssertion; }
	// @Override
	public enterRule(listener: MyGrammarListener): void {
		if (listener.enterEqAssertion) {
			listener.enterEqAssertion(this);
		}
	}
	// @Override
	public exitRule(listener: MyGrammarListener): void {
		if (listener.exitEqAssertion) {
			listener.exitEqAssertion(this);
		}
	}
}


