import {
  ANTLRErrorListener,
  CharStreams,
  CommonTokenStream,
  RecognitionException,
  Recognizer,
} from "antlr4ts";
import { MyGrammarLexer } from "../generated/MyGrammarLexer";
import {
  EqAssertionContext,
  MyGrammarParser,
} from "../generated/MyGrammarParser";

export function parseEqAssertionContext(
  input: string
): EqAssertionContext | string[] {
  const chars = CharStreams.fromString(input);

  const lexer = new MyGrammarLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new MyGrammarParser(tokens);

  const errors: string[] = [];

  class VerboseListener implements ANTLRErrorListener<any> {
    syntaxError(
      _recognizer: Recognizer<any, any>,
      _offendingSymbol: any,
      line: number,
      charPositionInLine: number,
      msg: string,
      _e: RecognitionException | undefined
    ) {
      errors.push(`line ${line}:${charPositionInLine} ${msg}`);
    }
  }

  const listener = new VerboseListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(listener);
  parser.removeErrorListeners();
  parser.addErrorListener(listener);

  const result = parser.eqAssertion();

  if (errors.length) return errors;

  return result;
}
