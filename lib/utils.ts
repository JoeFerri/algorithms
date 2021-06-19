/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */




export function getObj<T>(obj: T|null|undefined) : T {
  return obj != null && obj != undefined ? obj : {} as T;
}


export function isNil(obj: any) : boolean {
  return obj == null || obj == undefined;
}