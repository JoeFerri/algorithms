/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */

import { gt } from "../comparison";
import { int } from "../types";



/**
 * The insertionSort() sorts the array in loco.
 * 
 * Time(n)  = Θ(n²).
 * Space(n) = Θ(n).
 * 
 * @param {int[]} A - An array of integers
 * @param {gt<int>} greaterThan - Optional - A comparison function for sorting.
 * @returns {int[]} The sorted array.
 */
export function insertionSort(A: int[], greaterThan?: gt<int>) : int[] {
  if (greaterThan == undefined)
    greaterThan = (a,b) => a > b;

  for (let j = 1; j < A.length; j++) {
    let
      key: int = A[j],
      i = j-1;
    while (i >= 0 && greaterThan(A[i],key)) {
      A[i+1] = A[i];
      i--;
    }
    A[i+1] = key;
  }
  return A;
}


/**
 * The insertionSortObj() sorts the array in loco.
 * 
 * Time(n)  = Θ(n²).
 * Space(n) = Θ(n).
 * 
 * @param {T[]} A - An array of T.
 * @param {gt<T>} greaterThan - A comparison function for sorting.
 * @returns {T[]} The sorted array.
 */
export function insertionSortObj<T>(A: T[], greaterThan: gt<T>) : T[] {
  for (let j = 1; j < A.length; j++) {
    let
      keyObj: T = A[j],
      i = j-1;
    while (i >= 0 && greaterThan(A[i],keyObj)) {
      A[i+1] = A[i];
      i--;
    }
    A[i+1] = keyObj;
  }
  return A;
}