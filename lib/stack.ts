/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import { OperationError } from "./error";
import { List, PosNode } from "./list";
import { int } from "./types";

/*
 * LIFO - Last-in, First-out
 */

const MAX_DIM = 999999;


export class Stack<T> {

  private A: T[];     // items
  private n: int;     // cursor
  readonly m: int;    // max dim.

  constructor(dim: int = 100) {
    this.A = new Array(dim);
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
    return this.A[this.n];
  }

  pop() : T {
    if (this.n == -1)
      throw new OperationError("stack empty.");
    return this.A[this.n--];
  }

  push(item: T) : int {
    if (this.n == this.m -1)
      throw new OperationError("stack full");
    this.A[++this.n] = item;
    return this.length;
  }
}


export class DStack<T> {

  private A: T[];   // items
  readonly m: int;  // max dim.

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
    return this.A[this.A.length-1]!;
  }

  pop() : T {
    if (this.A.length == 0)
      throw new OperationError("stack empty.");
    return this.A.pop()!;
  }

  push(item: T) : int {
    if (this.A.length == this.m)
      throw new OperationError("stack full");
    return this.A.push(item);
  }
}


export class PStack<T> {

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
    return this.L.tail!.value as T;
  }

  pop() : T {
    if (this.L.length == 0)
      throw new OperationError("stack empty.");
    let t: PosNode<T> = this.L.tail!;
    this.L.remove(t);
    return t.value as T;
  }

  push(item: T) : int {
    if (this.L.length == this.m)
      throw new OperationError("stack full");
    this.L.insert(item);
    return this.L.length;
  }
}