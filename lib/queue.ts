/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import { OperationError } from "./error";
import { List, PosNode } from "./list";
import { int } from "./types";
import { getArray } from "./utils";

/*
* FIFO - First-in, First-out
*/

const MAX_DIM = 999999;


export class Queue<T> {

  private A: T[];     // items
  private head: int;  // head
  private n: int;     // dim
  readonly m: int;    // max dim.

  constructor(dim: int = 100) {
    this.A = new Array(dim);
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
      throw new OperationError("stack empty.");
    return this.A[this.head];
  }

  dequeue() : T {
    if (this.n == 0)
      throw new OperationError("stack empty.");
    let t: T = this.A[this.head];
    this.head = (this.head+1)%this.m;
    this.n--;
    return t;
  }

  enqueue(item: T) : int {
    if (this.n >= this.m)
      throw new OperationError("stack full");
    this.A[(this.head + this.n)%this.m] = item;
    this.n++;
    return this.length;
  }
}


export class DQueue<T> {

  private A: T[];     // items
  readonly m: int;    // max dim.

  constructor(dim: int = MAX_DIM) {
    this.A = [];
    this.m = dim;
  }

  isEmpty() : boolean {
    return this.A.length == 0;
  }

  get length() : int {
    return this.A.length;
  }

  top() : T {
    if (this.A.length == 0)
      throw new OperationError("stack empty.");
    return this.A[0];
  }

  dequeue() : T {
    if (this.A.length == 0)
      throw new OperationError("stack empty.");
    return this.A.shift()!;
  }

  enqueue(item: T) : int {
    if (this.A.length >= this.m)
      throw new OperationError("stack full");
    return this.A.push(item);
  }
}


export class PQueue<T> {

  private L: List<T>;     // items
  readonly m: int;        // max dim.

  constructor(dim: int = MAX_DIM) {
    this.L = new List<T>();
    this.m = dim;
  }

  isEmpty() : boolean {
    return this.L.isEmpty();
  }

  get length() : int {
    return this.L.length;
  }

  top() : T {
    if (this.L.length == 0)
      throw new OperationError("stack empty.");
    return this.L.head!.value as T;
  }

  dequeue() : T {
    if (this.L.length == 0)
      throw new OperationError("stack empty.");
    let t: PosNode<T> = this.L.head!;
    this.L.remove(t);
    return t.value as T;
  }

  enqueue(item: T) : int {
    if (this.L.length == this.m)
      throw new OperationError("stack full");
    this.L.insert(item);
    return this.L.length;
  }
}