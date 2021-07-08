/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */

import { swap } from "./array";
import { OperationError } from "./error";
import { int } from "./types";




export class Heap<T> {
  protected _A: T[];      // values
  protected _P: number[]; // priority values

  constructor(A: T[], P: number[]) {
    this._A = [...A];
    this._P = [...P];
    for (let i = Math.floor(A.length/2); i > 0; i--)
      maxHeapify(this._A,this._P,i);
  }

  get size() : int {
    return this._A.length;
  }

  get(i: int) : [T,number] {
    if (this.size == 0)
      throw new OperationError("heap empty.");
    if (this.size < i)
      throw new OperationError("size < i.");
    return [this._A[i],this._P[i]];
  }

  A() : T[] {
    return [...this._A];
  }

  P() : number[] {
    return [...this._P];
  }

  pop() : [T,number] {
    let AV: [T,number] = [this._A.pop() as T, this._P.pop() as number];
    return AV;
  }
}

function parent(i: int) : int {
  return Math.floor(i/2);
}

function left(i: int) : int {
  return 2*i;
}

function right(i: int) : int {
  return 2*i +1;
}

export function maxHeapify<T>(A: T[], P: number[], i: int) {
  let
    l = left(i),
    r = right(i),
    largest = -1;

  if (l <= P.length -1 && P[l] > P[i])
    largest = l;
  else
    largest = i;
  if (r <= P.length && P[r] > P[largest])
    largest = r;
  if (largest != i) {
    swap(A,i,largest);
    swap(P,i,largest);
  }
}