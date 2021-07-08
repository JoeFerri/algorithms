/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */

import { abuild, swap } from "./array";
import { Heap } from "./heap";



/**
 * 
 * @param A values
 * @param P priority
 */
export function heapSort<T>(A: T[], P?: number[]) : void {
  if (P == undefined)
    P = abuild<number>(A.length,(i)=>A.length -i -1) as number[];
  let
    heap = new Heap<T>(A,P),
    _A: T[] = heap.A(),
    _P: number[] = heap.P();
  for (let i = _A.length -1; i > 2; i--) {
    swap(_A,0,i);
    swap(_P,0,i);
    heap.pop();

  }
}