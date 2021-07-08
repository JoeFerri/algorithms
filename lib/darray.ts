/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */

import { int } from "./types";
import { abuild as buildarr } from "./array";
import { OperationError } from "./error";



const MAX_DIM = 999;


export function dbuild<T>(...items: T[]) : DArray<T> {
  let DA: DArray<T> = new DArray<T>(0);
  for (const item of items)
    DA.push(item);
  return DA;
}

export class DArray<T> {

  private A: (T|undefined)[];
  private _size: int;


  constructor(dim: int = MAX_DIM) {
    this._size = 0;
    this.A = buildarr(dim >= 0 ? dim : MAX_DIM);
  }
  
  push(...items: T[]): number {
    let
      size: int = this.size,
      length: int = items.length + size;

    doublingVerification(this.A,length);

    for (let i = size; i < length; i++)
      this.A[i] = items[i-size];
    
    this._size = length;
    return this._size;
  }
  
  unshift(...items: T[]): number {
    let
      size: int = this.size,
      length: int = items.length + size;

    doublingVerification(this.A,length);

    for (let i = length; i > size; i--)
      this.A[i] = this.A[i-items.length];
    
    for (let i = 0; i < items.length; i++)
      this.A[i] = items[i];

    this._size = length;
    return this._size;
  }

  pop() : T | undefined {
    let value: T|undefined = this.A[this._size -1];
    this.A[this._size -1] = undefined;
    this._size--;
    this.A = halvingVerification(this.A,this._size);
    return value;
  }

  shift() : T | undefined {
    let value: T|undefined = this.A[0];
    for (let i = 1; i < this._size; i++)
      this.A[i-1] = this.A[i];
    this.A[this._size-1] = undefined;
    this._size--;
    this.A = halvingVerification(this.A,this._size);
    return value;
  }

  values() : IterableIterator<T> {
    return this.filled().values(); // TODO: to improve
  }

  get(index: int) : T | undefined {
    if (index < 0 || index > this.size -1)
      throw new OperationError("index out of range.");
    return this.A[index];
  }

  set(index: int, value: T) : void {
    if (index < 0 || index > this.size -1)
      throw new OperationError("index out of range.");
    this.A[index] = value;
  }

  get size() : int {
    return this._size;
  }

  get length() : int {
    return this.A.length;
  }

  filled() : T[] {
    let 
      A: T[] = [],
      i = 0;
    while (i < this.size) { // the last elements are undefined
      A.push(this.A[i] as T);
      i++;
    }
    return A;
  }
};

export function doublingVerification<T>(A: (T|undefined)[], n: int) : (T|undefined)[] {
  if (n >= A.length) {
    for (let i = 0; i < n; i++)
      A.push(undefined);
  }
  return A;
}

export function halvingVerification<T>(A: (T|undefined)[], size: int) : (T|undefined)[] {
  let _A: (T|undefined)[] = [];
  if (A.length > 1 && size <= A.length/4) {
    for (let i = 0; i < size; i++)
      _A.push(A[i]);
  }
  return _A;
}