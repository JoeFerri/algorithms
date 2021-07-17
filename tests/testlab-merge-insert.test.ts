/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import * as $$ from "../lib/index";
import { expect, should } from 'chai';
should();



let A: number[] = [];

function init() {
  A = $$.shuffle(A);
}

function ms(n: number) {
  $$.mergeSort(A);
}

function is(n: number) {
  $$.insertionSort(A);
}

describe.skip(`Test Lab`, function() {

  it(`...`, function() {

    let
      T = new $$.ConsoleTest(),
      timeM: number = -1,
      timeI: number = -1;

    T.init = init;
    // T.cicle = 50;

    for (let i = 0; i < 199; i++) {
      A.push(i);
      if (i >= 159) {
        timeM = T.testOne(ms)[1];
        timeI = T.testOne(is)[1];
        console.log(`size: ${i} →\t${timeM}\tvs\t${timeI}`);
      }
    }

    "x".should.to.be.equal("x");
  });
});