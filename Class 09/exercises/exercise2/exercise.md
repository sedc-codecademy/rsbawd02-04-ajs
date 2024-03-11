# Exercise 2
- Create constructor function `Book`
- The structure should be:
  * title - string
  * author - string
  * year - store it as a Number, even someone proceedes string here
  * ratings - array of ratings, not settable.
  * addRating - method which receives a rating object as a param. Use object destructuring to extract only `grade`, `user` and `comment` from it. 
    - if user not defined set it as `unknown`
    - if comment not set, set it as `''`
  * getAverageRating - method which calculates average rating for a book and returns it
  * displayDetails - method which displays details about book. Display details as:
    - `title - author`
    - `Year: {year}`
    - If there are ratings, display average rating as `Average rating: {average}`. If no rattings added, display message `Book doesn't have ratings yet. Be the first one to add rating!`.
  * displayRatings - method which displays each rating for book if there are ratings set.

Below is "testing" code for your template function:

```javascript
const rating1 = {
  grade: 5,
  user: "john",
  comment:
    "I love it! It was exactly what I was looking for! Now my Harry Potter collection is more complete then ever before",
  title: "Awesome!",
  id: 12,
  userId: 1,
  userEmail: "john@john.com",
  isVerified: true,
};

const rating2 = {
  grade: 4,
  user: "ana",
  comment:
    "This (the first in the series), or any other Harry Potter book for that matter, needs no introduction. Once you've followed Harry to Hogworts and back during his first term, you'll be coming back for more time and time again!",
  title: "A great escape!",
  id: 10,
  userId: 2,
  userEmail: "ana@ana.com",
  isVerified: true,
};

const rating3 = {
  grade: 3,
  user: "tom",
  comment: "Pages missing from my copy of the book.",
  title: "Missing pages",
  id: 11,
  userId: 3,
  userEmail: "tom@tom.com",
  isVerified: true,
};

const book = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J. K. Rowling",
  "1997"
);

book.addRating(rating1);
book.addRating(rating2);
book.addRating(rating3);

book.displayDetails();
book.displayRatings();

console.log("\n");
const book2 = new Book("Atomic Habits", "James Clear", "2018");
book2.displayDetails();
```