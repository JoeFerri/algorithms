/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */

import { swap } from "./array";
import { OperationError } from "./error";
import { Heap, maxHeapify } from "./heap";
import { int } from "./types";
 
 
 
 
export class HeapPriorityQueue<T> extends Heap<T> {
 
  constructor(A: T[], P: number[]) {
    super(A,P);
  }

  max() : [T,number] {
    if (this.size == 0)
      throw new OperationError("heap empty.");
    return [this._A[0] as T, this._P[0] as number];
  }

  extractMax() : [T,number] {
    if (this.size == 0)
      throw new OperationError("heap empty.");
    let max: [T,number] = [this._A[0] as T, this._P[0] as number];
    let VP = this.pop();
    [this._A[0],this._P[0]] = [VP[0],VP[1]];
    maxHeapify(this._A,this._P,0);
    return max;
  }

  insert(value: T, key: number) : void {
    this._A.push({} as T);
    this._P.push(-Infinity);
    increaseKey(this._A,this._P,this.size -1,value,key);
  }
}
 
function parent(i: int) : int {
  return Math.floor(i/2);
}

export function increaseKey<T>(A: T[], P: number[], i: int, value: T, key: int) : void {
  if (key < P[i])
    throw new OperationError("new key is smaller than current key.");
  A[i] = value;
  P[i] = key;
  while (i > 0 && P[parent(i)] < P[i]) {
    swap(A,i,parent(i));
    swap(P,i,parent(i));
    i = parent(i);
  }
}