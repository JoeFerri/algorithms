/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */

import { lt } from "../comparison";
import { int } from "../types";
import { insertionSort } from "./insertionsort";


/**
 * The mergeSortObj() sorts the array using additional space.
 * 
 * @param {T[]} A - An array of T.
 * @param {lt<T>} lessThan - A comparison function for sorting.
 * @param {T} limit - extreme limit for sorting.
 * @returns {T[]} The sorted array.
 */
export function mergeSortObj<T>(A: T[], lessThan: lt<T>, limit: T) : T[] {
  ms(A,0,A.length-1,lessThan,limit);
  return A;
}

/**
 * The mergeSort() sorts the array using additional space.
 * 
 * @param {number[]} A - An array of number
 * @param {lt<number>} lessThan - Optional - A comparison function for sorting.
 * @returns {number[]} The sorted array.
 */
export function mergeSort(A: number[], lessThan?: lt<number>) : number[] {
  if (lessThan == undefined)
    lessThan = (a,b) => a < b;
  let limit = lessThan(1,2) ? Infinity : -Infinity;
  ms(A,0,A.length-1,lessThan,limit);
  return A;
}

function ms<T>(A: T[], p: int, r: int, lessThan: lt<T>, limit: T) : void {
  if (p < r) {
    let q: int = Math.floor((p+r)/2);
    ms(A,p,q,lessThan,limit);
    ms(A,q+1,r,lessThan,limit);
    merge(A,p,q,r,lessThan,limit);
  }
}

function merge<T>(A: T[], p: int, q: int, r: int, lessThan: lt<T>, limit: T) : void {
  let
    n1: int = q-p+1,
    n2: int = r-q,
    L: T[] = [],
    R: T[] = [];
  for (let i = 0; i < n1; i++)
    L.push(A[p+i]);
  for (let i = 0; i < n2; i++)
    R.push(A[q+i+1]);
  L[n1] = limit;
  R[n2] = limit;
  let i = 0, j = 0;
  for (let k = p; k <= r; k++) {
    if (lessThan(L[i],R[j])) {
      A[k] = L[i];
      i++;
    }
    else {
      A[k] = R[j];
      j++;
    }
  }
}