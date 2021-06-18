/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import * as $$ from "../lib/index";
import { expect, should } from 'chai';
should();
 
 
 
describe(`...`, function() {
 
  it(`#...()`, function() {
    "test".toString().should.to.be.equal("test");
    expect( () => {throw new Error();} ).to.throw();
  });
 
});