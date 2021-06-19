/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import * as $$ from "../lib/index";
import { expect, should } from 'chai';
should();



describe(`Stack`, function() {

  let MAX_DIM: number = 999;
  let stack: $$.Stack<number> = new $$.Stack<number>(MAX_DIM+1);
  let dstack: $$.DStack<number> = new $$.DStack<number>(MAX_DIM+1);
  let pstack: $$.PStack<number> = new $$.PStack<number>(MAX_DIM+1);

  it(`Stack`, function() {
    for (let i = 0; i <= MAX_DIM; i++)
      stack.push(i);

    let i = MAX_DIM, start = Date.now();
    while(!stack.isEmpty()) {
      expect( stack.pop() ).to.be.equal(i);
      i--;
    }
    console.log(`time: ${Date.now() - start}ms`);
  });

  it(`DStack`, function() {
    for (let i = 0; i <= MAX_DIM; i++)
      dstack.push(i);

    let i = MAX_DIM, start = Date.now();
    while(!dstack.isEmpty()) {
      expect( dstack.pop() ).to.be.equal(i);
      i--;
    }
    console.log(`time: ${Date.now() - start}ms`);
  });

  it(`PStack`, function() {
    for (let i = 0; i <= MAX_DIM; i++)
      pstack.push(i);

    let i = MAX_DIM, start = Date.now();
    while(!pstack.isEmpty()) {
      expect( pstack.pop() ).to.be.equal(i);
      i--;
    }
    console.log(`time: ${Date.now() - start}ms`);
  });

});