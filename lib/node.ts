/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



export interface OptNode<T,N> {
  parent?:   Node<T,N>|null|undefined;
  child?:    Node<T,N>|null|undefined;
  sibling?:  Node<T,N>|null|undefined;
  value?:    T|null|undefined;
}

export abstract class Node<T,N> {

  parent: Node<T,N>|null|undefined;
  child: Node<T,N>|null|undefined;
  sibling: Node<T,N>|null|undefined;
  value: T|null|undefined;

  constructor (opt: OptNode<T,N> = {}) {
    this.parent = opt.parent;
    this.child = opt.child;
    this.sibling = opt.sibling;
    this.value = opt.value;
  }

  node() : Node<T,N> {
    return this;
  }

  abstract to() : N;
}