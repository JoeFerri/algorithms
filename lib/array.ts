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


export function abuild<T>(dim: number, init?: (i: int)=>T|undefined) : (T|undefined)[] {
  if (init == undefined)
    init = (i: int) => undefined;

  let A: (T|undefined)[] = [];
  for (let i = 0; i < dim; i++)
    A.push(init(i));
  return A;
}

export function atbuild<T>(dim: number, init: (i: number)=>T) {
  let a: T[] = [];
  for (let i = 0; i < dim; i++)
    a.push(init(i));
  return a;
}

// return array di interi
export function aint(from: int = 0, to: int = 99) : int[] {
  return abuild(to-from +1,(i)=>i) as int[];
}


/**
 * Shuffle the elements of the array passed as an argument.
 *
 * Does not modify the calling array.
 *
 * Uses the Fisher–Yates shuffle algorithm.
 * 
 * Eg. shuffle([0,1,2,3]) ---> [3,1,0,2]
 * 
 * @param {T[]} array: a generic array
 * 
 * @see https://javascript.info/task/shuffle
 * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * 
 * @returns a new array with the mixed elements
 */
export function shuffle<T>(array?: T[]) : T[] {
  array = [...(array || [])];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};