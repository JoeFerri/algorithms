/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import * as $$ from "../lib/index";
import { expect, should } from 'chai';
should();



describe(`mergeSort`, function() {

  it(`all`, function() {

    let A = [5,6,4,7,3,8,2,9,1,0];
    // let A = [2,1];

    $$.mergeSort(A);
    A.join(',').should.to.be.equal("0,1,2,3,4,5,6,7,8,9");
    // A.join(',').should.to.be.equal("1,2");
  });

});