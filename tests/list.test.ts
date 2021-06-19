/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import * as $$ from "../lib/index";
import { expect, should } from 'chai';
should();



describe(`List`, function() {

  let l1: $$.List<number> = new $$.List<number>();
  let pos: $$.PosNode<number>|null = l1.head;

  it(`all`, function() {
    l1.length.should.to.be.equal(0);
    expect( l1.head ).to.be.equal(null);
    expect( l1.tail ).to.be.equal(null);
    expect( l1.next(pos) ).to.be.equal(null);
    expect( l1.prev(pos) ).to.be.equal(null);
    
    l1.insert(1);
    pos = l1.head;

    l1.length.should.to.be.equal(1);
    expect( l1.head!.value ).to.be.equal(1);
    expect( l1.tail!.value ).to.be.equal(1);
    expect( l1.next(pos) ).to.be.equal(null);
    expect( l1.prev(pos) ).to.be.equal(null);
    
    l1.insert(2);

    l1.length.should.to.be.equal(2);
    expect( l1.head!.value ).to.be.equal(1);
    expect( l1.tail!.value ).to.be.equal(2);
    expect( l1.next(pos)!.value ).to.be.equal(2);
    expect( l1.prev(pos) ).to.be.equal(null);
    expect( l1.prev(l1.next(pos))!.value ).to.be.equal(1);
    
    l1.insert(3);
    l1.insert(4);
    l1.insert(5);

    let i = 1;
    while (pos != null) {
      expect( pos.value ).to.be.equal(i);
      pos = l1.next(pos);
      i++;
    }

    i = 5;
    pos = l1.tail;
    while (pos != null) {
      expect( pos.value ).to.be.equal(i);
      pos = l1.next(pos);
      i--;
    }

  });

});