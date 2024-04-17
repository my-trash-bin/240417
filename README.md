# 240417

Testing `antlr4ts`

## Problem

Consider the following grammar definition:

```antlr
eqAssertion: ID ('.' ID)* WS? '=' WS? ID ('.' ID)*;
```

In this scenario, the `EqAssertionContext::ID()` function could return three or more IDs. This presents a challenge in distinguishing which IDs appear before the `=` sign and which appear after. How can we effectively determine the position of each ID relative to the `=` sign in such cases?
