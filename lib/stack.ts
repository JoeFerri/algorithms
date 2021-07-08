/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import { abuild } from "./array";
import { OperationError } from "./error";
import { int } from "./types";

/*
* LIFO - Last-in, First-out
*/

const MAX_DIM = 999;


export class Stack<T> {

  private A: (T|undefined)[];   // items
  private n: int;               // cursor
  readonly m: int;              // max dim.

  constructor(dim: int = MAX_DIM) {
    this.A = abuild(dim);
    this.m = dim;
    this.n = -1;
  }

  isEmpty() : boolean {
    return this.n == -1;
  }

  get length() : int {
    return this.n +1;
  }

  top() : T {
    if (this.n == -1)
      throw new OperationError("stack empty.");
    return this.A[this.n] as T;
  }

  pop() : T {
    if (this.n == -1)
      throw new OperationError("stack empty.");
    return this.A[this.n--] as T;
  }

  push(item: T) : int {
    if (this.n == this.m -1)
      throw new OperationError("stack full");
    this.A[++this.n] = item;
    return this.length;
  }
}