/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import * as $$ from "../lib/index";
import { expect, should } from 'chai';
should();



function lessThan(k1: string, k2: string) : boolean {
  return k1.charCodeAt(0) < k2.charCodeAt(0);
}

describe(`mergeSort`, function() {

  it(`base`, function() {
    $$.mergeSort([5,6,4,7,3,8,2,9,1,0]).join(',').should.to.be.equal("0,1,2,3,4,5,6,7,8,9");
    $$.mergeSort([]).join(',').should.to.be.equal("");
    $$.mergeSort([2]).join(',').should.to.be.equal("2");
    $$.mergeSort([2,1]).join(',').should.to.be.equal("1,2");
    $$.mergeSort([2,1,3]).join(',').should.to.be.equal("1,2,3");
  });

  it(`inverse`, function() {
    $$.mergeSort([5,6,4,7,3,8,2,9,1,0],(a,b)=>a>b).join(',').should.to.be.equal("9,8,7,6,5,4,3,2,1,0");
  });

  it(`mergeSortObj`, function() {
    $$.mergeSortObj([5,6,4,7,3,8,2,9,1,0],(a,b)=>a<b,Infinity).join(',').should.to.be.equal("0,1,2,3,4,5,6,7,8,9");
    $$.mergeSortObj($$.shuffle(['c','e','z','a','b','d']),lessThan,'z').join(',').should.to.be.equal("a,b,c,d,e,z");
  });
});