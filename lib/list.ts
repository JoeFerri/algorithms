/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



import { Node } from "./node";
import { int } from "./types";
import { getObj } from "./utils";



export interface OptPosNode<T> {
  pred?:  PosNode<T>|null;
  succ?:  PosNode<T>|null;
  value?: T|null|undefined;
}


export class PosNode<T> extends Node<T,PosNode<T>> {

  constructor(opt: OptPosNode<T> = {}) {
    super({
      parent: opt.pred != undefined ? opt.pred.node() : null,
      child: opt.succ != undefined ? opt.succ.node() : null,
      value: opt.value
    });
  }


  override to() : PosNode<T> {
    return this;
  }

  get pred() : PosNode<T>|null {
    return this.parent != null ? this.parent?.to() : null;
  }

  set pred(p: PosNode<T>|null) {
    this.parent = p;
  }

  get succ() : PosNode<T>|null {
    return this.child != null ? this.child?.to() : null;
  }

  set succ(p: PosNode<T>|null) {
    this.child = p;
  }

  hasSucc() : boolean {
    return this.succ != null;
  }

  hasPred() : boolean {
    return this.pred != null;
  }
}


export interface OptList{
  circular?: boolean|undefined
}


export class List<T> {

  protected _head: PosNode<T>|null;
  protected _tail: PosNode<T>|null;

  private circular: boolean;
  protected _length: int = 0;


  constructor(opt: OptList = {}) {
    this._head = null;
    this._tail = null;
    this.circular = opt.circular != undefined ? opt.circular : false;
  }


  get head() : PosNode<T>|null {
    return this._head;
  }

  get tail() : PosNode<T>|null {
    return this._tail;
  }

  get length() : int {
    return this._length;
  }


  isEmpty() : boolean {
    return this._head == null;
  }

  next(p: PosNode<T>|null) : PosNode<T>|null {
    if (p != null && p.hasSucc())
      return p.succ;
    if (this.circular)
      return this._head;
    return null;
  }

  prev(p: PosNode<T>|null) : PosNode<T>|null {
    if (p != null && p.hasPred())
      return p.pred;
    if (this.circular)
      return this._tail;
    return null;
  }

  started(p: PosNode<T>) : boolean {
    return p == this._head;
  }

  finished(p: PosNode<T>) : boolean {
    return p == this._tail;
  }

  read(p: PosNode<T>) : T|null|undefined {
    return p.value;
  }


  write(p: PosNode<T>, value: T) {
    p.value = value;
  }

  insert(value: T, p: PosNode<T>|null = null) : PosNode<T> {
    let t: PosNode<T> = new PosNode<T>({value: value});
    if (this._head == null) {
      this._head = t;
      this._tail = t;

    } else if (p == null) {
      t.pred = this._tail; // Insert at the end
      this._tail!.succ = t;
      this._tail = t;

    } else {
      t.pred = p.pred; // Insert in front of an existing position
      if (t.pred != null)
        t.pred.succ = t;
      else
        this._head = t;
      t.succ = p;
      p.pred = t;
    }
    this._length++;
    return t;
  }

  previnsert(value: T, p: PosNode<T>|null = null) : PosNode<T> {
    if (p == null) {
      if (this._tail != null)
        p = this._tail.pred;
    } else {
      if (p.hasPred())
        p = p.pred;
      else if (this.circular)
        p = this._tail;
    }
    return this.insert(value, p);
  }

  headinsert(value: T) : PosNode<T> {
    if (this._head == null)
      return this.insert(value);
    let t: PosNode<T> = new PosNode<T>({value: value});
    t.succ = this._head; // Insert at the end
    this._head!.pred = t;
    this._head = t;
    return t;
  }

  remove(p: PosNode<T>) {
    if (p.pred == null)
      this._head = p.succ;
    else
      p.pred.succ = p.succ;
    if (p.succ == null)
      this._tail = p.pred;
    else
      p.succ.pred = p.pred;
    this._length--;
  }

}