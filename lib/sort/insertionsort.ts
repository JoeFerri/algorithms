/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */

import { KeyObject, int } from "../types";



export function insertionSort(A: int[]) : int[] {
  for (let j = 1; j < A.length; j++) {
    let
      key: int = A[j],
      i = j-1;
    while (i >= 0 && A[i] > key) {
      A[i+1] = A[i];
      i--;
    }
    A[i+1] = key;
  }
  return A;
}


export function insertionSortObj<T>(A: T[], greaterThan: (k1: T, k2: T) => boolean) : T[] {
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