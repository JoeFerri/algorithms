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
 * FIFO - First-in, First-out
 */

const MAX_DIM = 999;


export class Queue<T> {

  private A: (T|undefined)[];   // items - circular vector
  private head: int;            // head
  private n: int;               // dim
  readonly m: int;              // max dim.

  constructor(dim: int = MAX_DIM) {
    this.A = abuild(dim);
    this.m = dim;
    this.n = 0;
    this.head = 0;
  }

  isEmpty() : boolean {
    return this.n == 0;
  }

  get length() : int {
    return this.n;
  }

  top() : T {
    if (this.n == 0)
      throw new OperationError("queue empty.");
    return this.A[this.head] as T;
  }

  dequeue() : T {
    if (this.n == 0)
      throw new OperationError("queue empty.");
    let t: T = this.A[this.head] as T;
    this.head = (this.head+1)%this.m;
    this.n--;
    return t;
  }

  enqueue(item: T) : int {
    if (this.n >= this.m)
      throw new OperationError("queue full");
    this.A[(this.head + this.n)%this.m] = item;
    this.n++;
    return this.length;
  }
}