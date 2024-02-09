import { expect } from "chai";
import * as funcs from "./ch1-q1";

/* global describe, it -- Globals defined by Mocha */

for (const key in funcs) {
  describe("ch1-q1: " + key, function () {
    [
      "abcdefghi",
      "jklpoiuqwerzxcvmnsadf",
      "1234567890",
      "AaBbCcDdeFg1234567890(*&^%$#@!)",
    ].forEach((arg) => {
      it(`returns true for unique string: '${arg}'`, function () {
        expect(func(arg.split(""))).to.be.true;
      });
    });
  });
}
