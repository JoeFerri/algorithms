/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import * as $$ from "../lib/index";
import { expect, should } from 'chai';
should();



describe(`Queue`, function() {

  let MAX_DIM: number = 9;
  let queue: $$.Queue<number> = new $$.Queue<number>(MAX_DIM+1);
  let dqueue: $$.DQueue<number> = new $$.DQueue<number>(MAX_DIM+1);
  let pqueue: $$.PQueue<number> = new $$.PQueue<number>(MAX_DIM+1);

  it(`Queue`, function() {
    for (let i = 0; i <= MAX_DIM; i++)
      queue.enqueue(i);

    let i = 0, start = Date.now();
    while(!queue.isEmpty()) {
      expect( queue.dequeue() ).to.be.equal(i);
      i++;
    }
    console.log(`time: ${Date.now() - start}ms`);
  });

  it(`DQueue`, function() {
    for (let i = 0; i <= MAX_DIM; i++)
      dqueue.enqueue(i);

    let i = 0, start = Date.now();
    while(!dqueue.isEmpty()) {
      expect( dqueue.dequeue() ).to.be.equal(i);
      i++;
    }
    console.log(`time: ${Date.now() - start}ms`);
  });

  it(`PQueue`, function() {
    for (let i = 0; i <= MAX_DIM; i++)
      pqueue.enqueue(i);

    let i = 0, start = Date.now();
    while(!pqueue.isEmpty()) {
      expect( pqueue.dequeue() ).to.be.equal(i);
      i++;
    }
    console.log(`time: ${Date.now() - start}ms`);
  });

});