/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */

import { int } from "./types";
import { isNil } from "./types";



export function mergeSort(A: number[]) : void {
  if (!isNil(A))
    ms(A,0,A.length-1);
}

function ms(A: number[], p: int, r: int) : void {
  if (p < r) {
    let q: int = Math.floor((p+r)/2);
    // console.log("ms: p,q =", p,q, "  q+1,r =", q+1,r);
    ms(A,p,q);
    ms(A,q+1,r);
    merge(A,p,q,r);
  }
}

function merge(A: number[], p: int, q: int, r: int) : void {
  let
    n1: int = q-p+1,
    n2: int = r-q,
    L: number[] = [],
    R: number[] = [];
  for (let i = 0; i < n1; i++)
    L.push(A[p+i]);
  for (let i = 0; i < n2; i++)
    R.push(A[q+i+1]);
  L[n1] = Infinity;
  R[n2] = Infinity;
  // console.log(L,R,"p,q,r = ", p,q,r, "n1,n2 = ", n1,n2);
  let i = 0, j = 0;
  for (let k = p; k <= r; k++) {
    if (L[i] <= R[j]) {
      A[k] = L[i];
      i++;
    }
    else {
      A[k] = R[j];
      j++;
    }
  }
}