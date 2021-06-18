/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import { OperationError } from "./error";
import { int } from "./types";


export class Stack<T> {

  A: T[];       // items
  n: int;       // cursor
  m: int;       // max dim.

  constructor(dim: int = 100) {
    this.A = new Array(dim);
    this.m = dim;
    this.n = 0;
  }

  top() : T {
    if (this.n == 0)
      throw new OperationError("n == 0");
    return this.A[this.n];
  }

  isEmpty() : boolean {
    return this.n == 0;
  }

  pop() : T {
    if (this.n == 0)
      throw new OperationError("n == 0");
    return this.A[this.n--];
  }

  push(item: T) {
    if (this.n == this.m)
      throw new OperationError("n == m");
    this.A[++this.n] = item;
  }
}