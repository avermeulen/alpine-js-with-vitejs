import * as fun from 'everyday-fun';

export default function Fun() {
  // function () {
  return {
    quote: {},
    previous: {},
    init() {
      // this.quote = fun.getRandomQuote();
      this.nextQuote();

      setInterval(() => {
        this.quote = fun.getRandomQuote();
      }, 5000);
    },
    nextQuote() {
      this.quote = fun.getRandomQuote();
      this.previous = this.quote;
    },

    previousQuote() {
      const current = this.quote;
      this.quote = this.previous;
      this.previous = current;
    },

    // tell: 'yoyo!',
  };
  // }
}
