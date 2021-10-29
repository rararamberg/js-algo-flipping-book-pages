function pageCount(n, p) {
  // check if p is 1 or p is equal to n which is zero pages turned
  if (p === n || p === 1) {
    return 0;
  } else {
    // units are array within container array (pages in a book)
    let bookArray = [];
    let pageCount = 0;

    bookArray.push([1]);

    // check if number of pages (n) is odd or even
    if (n % 2 !== 0) {
      // odd: 1 is it's own unit and all remaining numbers paired unit
      for (let i = 2; i <= n; i += 2) {
        bookArray.push([i, i + 1]);
      }
      console.log(bookArray);
    } else {
      // even: 1 and n are their own unit (page) everthing between paired
      for (let i = 2; i <= n; i += 2) {
        if (i !== n) {
          bookArray.push([i, i + 1]);
        } else {
          bookArray.push([i]);
        }
      }
    }

    //  check if p is closer to n or to 1 (compare the difference)
    if (p - 1 < n - p) {
      // p closer to 1: start at beginning of "book" and count "page turns"
      for (let unit = 0; unit < bookArray.length; unit++) {
        // break loop when unit contains 'p' and return count
        if (bookArray[unit].includes(p)) return pageCount;
        pageCount++;
      }
    } else {
      // p closer to n: start at end of 'book' and count 'page turns'
      for (let unit = bookArray.length - 1; unit >= 0; unit--) {
        if (bookArray[unit].includes(p)) return pageCount;
        pageCount++;
      }
    }
  }
}

// pageCount(6, 2); // 1
pageCount(5, 4); // 0
pageCount(11, 4); // 0
// pageCount(5, 1); // 0
// pageCount(150, 32); //3810
// pageCount(37455, 29835); //3810

module.exports = pageCount;
