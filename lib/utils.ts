/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */




export type nil = null | undefined;

export function isNil(obj: any) : obj is nil {
  return obj == null || obj == undefined;
}

export function getArray<T>(dim: number, init: (i: number)=>T) {
  let a: T[] = [];
  for (let i = 0; i < dim; i++)
    a.push(init(i));
  return a;
}