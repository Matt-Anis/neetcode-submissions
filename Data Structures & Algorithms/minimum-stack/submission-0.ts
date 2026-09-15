class MinStack {
  private minStack: number[];
  private stack: number[];
  constructor() {
    this.minStack = [];
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val: number): void {
    this.stack.push(val);
    const lastMin = this.minStack[this.minStack.length - 1];
    const currentMin = lastMin === undefined ? val : Math.min(val, lastMin);
    this.minStack.push(currentMin);
  }

  /**
   * @return {void}
   */
  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  /**
   * @return {number}
   */
  top(): number {
    return this.stack[this.stack.length - 1] ?? NaN;
  }

  /**
   * @return {number}
   */
  getMin(): number {
    return this.minStack[this.minStack.length - 1] ?? NaN;
  }
}
