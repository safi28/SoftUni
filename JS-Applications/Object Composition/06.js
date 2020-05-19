function sortedList() {
  return {
    elements: [],
    size: 0,
    add: function(el) {
      this.elements.push(el);
      this.elements.sort((a, b) => a - b);
      this.size++;
    },
    remove: function(el) {
      if (el > this.elements || el < 0) {
        throw new RangeError("Invalid index");
      }
      this.elements.splice(el, 1);
      this.elements.sort((a, b) => a - b);

      this.size--;
    },
    get: function(i) {
      return this.elements[i];
    }
  };
}
