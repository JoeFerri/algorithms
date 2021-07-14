/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



export type int = number;


export interface KeyObject<T> {
  key: T;
}

export interface IndexObject {
  index: int;
}

export interface IndexNObject {
  index: number;
}

export interface ValueObject<T> {
  value: T;
}

export interface PriorityObject<T> {
  priority: T;
}