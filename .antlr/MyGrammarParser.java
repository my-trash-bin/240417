// Generated from /Users/user/workspace/my-trash-bin/240417/MyGrammar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MyGrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, ID=3, WS=4;
	public static final int
		RULE_eqAssertion = 0;
	private static String[] makeRuleNames() {
		return new String[] {
			"eqAssertion"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'.'", "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "ID", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MyGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MyGrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EqAssertionContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MyGrammarParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MyGrammarParser.ID, i);
		}
		public List<TerminalNode> WS() { return getTokens(MyGrammarParser.WS); }
		public TerminalNode WS(int i) {
			return getToken(MyGrammarParser.WS, i);
		}
		public EqAssertionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eqAssertion; }
	}

	public final EqAssertionContext eqAssertion() throws RecognitionException {
		EqAssertionContext _localctx = new EqAssertionContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_eqAssertion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2);
			match(ID);
			setState(7);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(3);
				match(T__0);
				setState(4);
				match(ID);
				}
				}
				setState(9);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(11);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(10);
				match(WS);
				}
			}

			setState(13);
			match(T__1);
			setState(15);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WS) {
				{
				setState(14);
				match(WS);
				}
			}

			setState(17);
			match(ID);
			setState(22);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(18);
				match(T__0);
				setState(19);
				match(ID);
				}
				}
				setState(24);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0004\u001a\u0002\u0000\u0007\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0005\u0000\u0006\b\u0000\n\u0000\f\u0000\t\t\u0000\u0001"+
		"\u0000\u0003\u0000\f\b\u0000\u0001\u0000\u0001\u0000\u0003\u0000\u0010"+
		"\b\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0005\u0000\u0015\b\u0000"+
		"\n\u0000\f\u0000\u0018\t\u0000\u0001\u0000\u0000\u0000\u0001\u0000\u0000"+
		"\u0000\u001c\u0000\u0002\u0001\u0000\u0000\u0000\u0002\u0007\u0005\u0003"+
		"\u0000\u0000\u0003\u0004\u0005\u0001\u0000\u0000\u0004\u0006\u0005\u0003"+
		"\u0000\u0000\u0005\u0003\u0001\u0000\u0000\u0000\u0006\t\u0001\u0000\u0000"+
		"\u0000\u0007\u0005\u0001\u0000\u0000\u0000\u0007\b\u0001\u0000\u0000\u0000"+
		"\b\u000b\u0001\u0000\u0000\u0000\t\u0007\u0001\u0000\u0000\u0000\n\f\u0005"+
		"\u0004\u0000\u0000\u000b\n\u0001\u0000\u0000\u0000\u000b\f\u0001\u0000"+
		"\u0000\u0000\f\r\u0001\u0000\u0000\u0000\r\u000f\u0005\u0002\u0000\u0000"+
		"\u000e\u0010\u0005\u0004\u0000\u0000\u000f\u000e\u0001\u0000\u0000\u0000"+
		"\u000f\u0010\u0001\u0000\u0000\u0000\u0010\u0011\u0001\u0000\u0000\u0000"+
		"\u0011\u0016\u0005\u0003\u0000\u0000\u0012\u0013\u0005\u0001\u0000\u0000"+
		"\u0013\u0015\u0005\u0003\u0000\u0000\u0014\u0012\u0001\u0000\u0000\u0000"+
		"\u0015\u0018\u0001\u0000\u0000\u0000\u0016\u0014\u0001\u0000\u0000\u0000"+
		"\u0016\u0017\u0001\u0000\u0000\u0000\u0017\u0001\u0001\u0000\u0000\u0000"+
		"\u0018\u0016\u0001\u0000\u0000\u0000\u0004\u0007\u000b\u000f\u0016";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}