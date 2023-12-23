/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri <jfinfoit@gmail.com>
 */

import { int } from "../types";



export class ConsoleTest {

  cicle: int = 100;
  n: int = 999999;
  init: (i?: number) => void = () => {};

  constructor() {
    ;
  }

  testOne<T>(fn: (n: int) => T, m?: number): [T, number, number[]] {
    m = m || this.n;
    let ends = 0, time: number, lst: number[] = [];
    for (let i = 0; i < this.cicle; i++) {
      this.init(i);
      time = Date.now();
      fn(m);
      time = Date.now() - time;
      lst.push(time);
      ends += time;
    }
    return [fn(m),ends/this.cicle,lst];
  }
}
