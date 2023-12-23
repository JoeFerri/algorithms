/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri <jfinfoit@gmail.com>
 */

import { int } from "./types";



/**
 * @returns a random number from p to r (both included):
 */
export function rnd(p: number, r: number) : number {
  return (Math.random() * (r-p)) + p;
}

/**
 * @returns a random integer from p to r (both included):
 */
export function rndInt(p: int, r: int) : int {
  return Math.floor(Math.random() * (r-p)) + p;
}
