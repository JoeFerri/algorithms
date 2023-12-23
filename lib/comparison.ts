/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri <jfinfoit@gmail.com>
 */




/**
 * -1 → t1 less than t2
 *  0 → t1 equal to t2
 *  1 → t1 greater than t2
 */
 export interface compare<T> {
  (t1: T, t2: T) : -1|0|1;
}

/**
 * (r)eal compare
 * return k < 0 → t1 less than t2
 * return k = 0 → t1 equal to t2
 * return k > 0 → t1 greater than t2
 */
 export interface rcompare<T> {
  (t1: T, t2: T) : number;
}

/**
 * greater than
 */
export interface gt<T> {
  (t1: T, t2: T) : boolean;
}

/**
 * greater than or equal to
 */
export interface geq<T> {
  (t1: T, t2: T) : boolean;
}

/**
 * less than
 */
export interface lt<T> {
  (t1: T, t2: T) : boolean;
}

/**
 * less than or equal to
 */
export interface leq<T> {
  (t1: T, t2: T) : boolean;
}

/**
 * equal to
 */
export interface eq<T> {
  (t1: T, t2: T) : boolean;
}
