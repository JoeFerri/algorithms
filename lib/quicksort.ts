/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */

import { swap } from "./array";
import { rndInt } from "./math";
import { int } from "./types";
import { isNil } from "./utils";



export function quickSort(A: number[]) : void {
  if (!isNil(A))
    qs(A,0,A.length-1);
}

export function quickSortRnd(A: number[]) : void {
  if (!isNil(A))
    qsRnd(A,0,A.length-1);
}

function qs(A: number[], p: int, r: int) : void {
  if (p < r) {
    let q: int = partition(A,p,r);
    qs(A,p,q-1);
    qs(A,q+1,r);
  }
}

function qsRnd(A: number[], p: int, r: int) : void {
  if (p < r) {
    let q: int = partitionRnd(A,p,r);
    qsRnd(A,p,q-1);
    qsRnd(A,q+1,r);
  }
}

function partition(A: number[], p: int, r: int) : int {
  let
    k: number = A[r],
    i: int = p-1;
    for (let j = p; j <= r-1; j++) {
      if (A[j] <= k) {
        i++;
        swap(A,i,j);
      }
    }
    swap(A,i+1,r);
    return i+1;
}

function partitionRnd(A: number[], p: int, r: int) : int {
  let i = rndInt(p,r);
  swap(A,i,r);
  return partition(A,p,r);
}