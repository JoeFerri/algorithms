/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */

import { int } from "./types";



export function binarySearch(A: number[], k: number) : int {
  let
    pos: int = -1,
    sx: int = 0,
    dx: int = A.length -1,
    center: int = -1;
  
  while (sx <= dx && pos == -1) {
    center = Math.floor((sx+dx)/2);
    if (k == A[center])
      pos = center;
    else if (k < A[center])
      dx = center -1;
    else
      sx = center +1;
  }
  return pos;
}