/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri <jfinfoit@gmail.com>
 */

import { gt } from "../comparison";



/**
 * The insertionSort() sorts the array in loco.
 * 
 * @param {number[]} A - An array of number
 * @param {gt<number>} greaterThan - Optional - A comparison function for sorting.
 * @returns {number[]} The sorted array.
 */
export function insertionSort(A: number[], greaterThan?: gt<number>) : number[] {
  if (greaterThan == undefined)
    greaterThan = (a,b) => a > b;
  return insertionSortObj(A, greaterThan);
}


/**
 * The insertionSortObj() sorts the array in loco.
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
