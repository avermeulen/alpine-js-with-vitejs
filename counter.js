export function Counter() {
  return {
    c: 7,
    plus() {
      this.c++;
    },
    minus() {
      this.c--;
    },
  };
}
