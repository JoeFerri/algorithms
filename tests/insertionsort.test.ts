/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import * as $$ from "../lib/index";
import { expect, should } from 'chai';
should();



function greaterThan(k1: string, k2: string) : boolean {
  return k1.charCodeAt(0) > k2.charCodeAt(0);
}

describe(`insertionSort`, function() {

  it(`insertionSort`, function() {
    $$.insertionSort($$.shuffle([])).join(',').should.to.be.equal("");
    $$.insertionSort($$.shuffle([1])).join(',').should.to.be.equal("1");
    $$.insertionSort($$.shuffle([1,2])).join(',').should.to.be.equal("1,2");
    $$.insertionSort($$.shuffle([1,2,3,4,5,6])).join(',').should.to.be.equal("1,2,3,4,5,6");
    $$.insertionSort($$.shuffle($$.aint())).join(',').should.to.be.equal($$.aint().join(',')); // 0,1,2,3,..,99
  });

  it(`insertionSort inverse`, function() {
    $$.insertionSort($$.shuffle([1,2,3,4,5,6]),(a,b)=>a<b).join(',').should.to.be.equal("6,5,4,3,2,1");
  });

  it(`insertionSortObj`, function() {
    $$.insertionSortObj($$.shuffle([]),greaterThan).join(',').should.to.be.equal("");
    $$.insertionSortObj($$.shuffle(['a']),greaterThan).join(',').should.to.be.equal("a");
    $$.insertionSortObj($$.shuffle(['c','e','f','a','b','d']),greaterThan).join(',').should.to.be.equal("a,b,c,d,e,f");
  });

});