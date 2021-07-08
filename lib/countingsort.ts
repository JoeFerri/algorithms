/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */

import { int, KeyObject } from "./types";



export function countingSortInt(A: int[], k: int) : int[] {
  let
    B: int[] = new Array<int>(A.length),
    C: int[] = [];
  for (let i = 0; i <= k; i++)
    C.push(0);
  for (let j = 0; j <= A.length -1; j++)
    C[A[j]] += 1;
  let j = 0;
  for (let z = 0; z <= k; z++)
    for (let v = 0; v < C[z]; v++) {
      B[j] = z;
      j++;
    }
  return B;
}

export function countingSort<T extends KeyObject<int>>(A: T[], k: int) : T[] {
  let
    B: T[] = new Array<T>(A.length),
    C: int[] = [];
  for (let i = 0; i <= k; i++)
    C.push(0);
  for (let j = 0; j <= A.length -1; j++)
    C[A[j].key] += 1;
  for (let j = A.length-1; j >= 0; j--) {
    B[C[A[j].key]] = A[j];
    C[A[j].key] -= 1;
  }
  return B;
}