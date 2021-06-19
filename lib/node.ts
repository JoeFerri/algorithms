/**
 * @author Giuseppe Ferri
 * @license LGPL-3.0
 *
 * Copyright (c) 2021, Giuseppe Ferri (joeferri83prog@libero.it)
 */



export interface OptINode<T,N> {
  parent?:   INode<T,N>|null;
  childs?:   INode<T,N>[];
  value:     T;
}

export interface OptNode<T,N> {
  parent?:   Node<T,N>|null;
  value:     T;
  child?:    Node<T,N>|null;
}

export interface OptBNode<T,N> {
  parent?:   BNode<T,N>|null;
  value:     T;
  left?:     BNode<T,N>|null;
  right?:    BNode<T,N>|null;
}



export abstract class INode<T,N> {

  protected _parent: INode<T,N>|null;
  protected _childs: INode<T,N>[];
  value: T;

  constructor (opt: OptINode<T,N>) {
    this._parent = opt.parent || null;
    this._childs = opt.childs || [];
    this.value = opt.value;
  }

  get parent() : INode<T,N>|null {
    return this._parent;
  }

  get childs() : INode<T,N>[] {
    return [...this._childs];
  }

  set parent(node: INode<T,N>|null) {
    this._parent = node;
  }

  node() : INode<T,N> {
    return this;
  }

  abstract to() : N;
}

export abstract class Node<T,N> extends INode<T,N> {

  constructor (opt: OptNode<T,N>) {
    super(opt);
    if (opt.child != undefined)
      this.childs.push(opt.child);
  }

  override get parent() : Node<T,N>|null {
    return super.parent as Node<T,N>;
  }

  override set parent(node: Node<T,N>|null) {
    super.parent = node;
  }

  override get childs() : Node<T,N>[] {
    return super.childs as Node<T,N>[];
  }

  get child() : Node<T,N>|null {
    return this.childs[0] != undefined ? this.childs[0] : null;
  }

  set child(node: Node<T,N>|null) {
    if (node == null && this.childs.length > 0)
      this.childs.pop();
    if (node != null)
      if (this.childs.length > 0)
        this.childs[0] = node;
      else this.childs.push(node);
  }

  override node() : Node<T,N> {
    return this;
  }
}

export abstract class BNode<T,N> extends INode<T,N> {

  left: BNode<T,N>|null = null;
  right: BNode<T,N>|null = null;

  constructor (opt: OptBNode<T,N>) {
    super(opt);
    if (opt.left != undefined)
      this.left = opt.left;
    if (opt.right != undefined)
      this.right = opt.right;
  }

  override get parent() : BNode<T,N>|null {
    return super.parent as BNode<T,N>;
  }

  override set parent(node: BNode<T,N>|null) {
    super.parent = node;
  }

  override get childs() : BNode<T,N>[] {
    let childs: BNode<T,N>[] = [];
    if (this.left != null)
      childs.push(this.left);
    if (this.right != null)
      childs.push(this.right);
    return childs;
  }

  override node() : BNode<T,N> {
    return this;
  }
}