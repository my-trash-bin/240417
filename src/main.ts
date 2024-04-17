import * as fs from "fs";
import { parseEqAssertionContext } from "./parseEqAssertionContext";

function main(filePath: string) {
  const input = fs.readFileSync(filePath, "utf-8");
  const eqAssertion = parseEqAssertionContext(input);

  if (Array.isArray(eqAssertion)) {
    console.log(eqAssertion);
    return;
  }

  const ids = eqAssertion.ID().map((node) => node.text);
  console.log({ ids });

  for (let i = 0; i < ids.length; i++) {
    console.log(`${i}: ${eqAssertion.ID(i).text}`);
  }
}

if (process.argv.length !== 3) {
  console.error("Usage: node test <file>");
  process.exit(0);
}

main(process.argv[2]!);
