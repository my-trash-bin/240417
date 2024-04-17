// Generated from ./MyGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MyGrammarLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly ID = 3;
	public static readonly WS = 4;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "ID", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyGrammarLexer._LITERAL_NAMES, MyGrammarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MyGrammarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MyGrammarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "MyGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MyGrammarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MyGrammarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MyGrammarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MyGrammarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x06\x1B\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04\x12\n\x04\f\x04\x0E\x04\x15\v" +
		"\x04\x03\x05\x06\x05\x18\n\x05\r\x05\x0E\x05\x19\x02\x02\x02\x06\x03\x02" +
		"\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\x03\x02\x05\x05\x02C\\aac|\x06" +
		"\x022;C\\aac|\x04\x02\v\v\"\"\x02\x1C\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x03\v\x03" +
		"\x02\x02\x02\x05\r\x03\x02\x02\x02\x07\x0F\x03\x02\x02\x02\t\x17\x03\x02" +
		"\x02\x02\v\f\x070\x02\x02\f\x04\x03\x02\x02\x02\r\x0E\x07?\x02\x02\x0E" +
		"\x06\x03\x02\x02\x02\x0F\x13\t\x02\x02\x02\x10\x12\t\x03\x02\x02\x11\x10" +
		"\x03\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14" +
		"\x03\x02\x02\x02\x14\b\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x16\x18" +
		"\t\x04\x02\x02\x17\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x17" +
		"\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\n\x03\x02\x02\x02\x05\x02" +
		"\x13\x19\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarLexer.__ATN) {
			MyGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyGrammarLexer._serializedATN));
		}

		return MyGrammarLexer.__ATN;
	}

}

