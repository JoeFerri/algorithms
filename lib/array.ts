/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */

import { int } from "./types";



export function swap<T>(A: T[], i: int, j: int) : T[] {
  [A[i],A[j]] = [A[j],A[i]];
  return A;
}