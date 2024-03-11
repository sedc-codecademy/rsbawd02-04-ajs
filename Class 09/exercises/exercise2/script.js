function Book(title, author, year) {
  this.title = title || "---";
  this.author = author || "---";
  this.year = Number(year) || 0;
  this.ratings = [];

  this.addRating = ({ grade, user = "unknown", comment = "" }) => {
    this.ratings.push({
      grade,
      user,
      comment,
    });
  };

  this.displayRatings = () => {
    if (this.ratings.length) {
      console.log("Ratings:");
      this.ratings.forEach((element) => {
        console.log(`Rating: ${element.grade}, User: ${element.user}`);
        console.log(`Comment: ${element.comment}`);
        console.log(`\n`);
      });
    }
  };

  this.getAverageRating = () => {
    const count = this.ratings.length;
    const sum = this.ratings.reduce((sum, rating) => (sum += rating.grade), 0);
    return sum / count;
  };

  this.displayDetails = () => {
    console.log(`${this.title} - ${this.author}`);
    console.log(`Year: ${this.year}`);
    const average = this.getAverageRating();

    if (average) {
      console.log(`Average rating: ${average}`);
    } else {
      console.log(
        "Book doesn't have ratings yet. Be the first one to add rating!"
      );
    }
  };
}

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
