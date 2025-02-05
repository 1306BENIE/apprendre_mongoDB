// use("librairy")
// db.getCollection("books").insertMany(
    
// )

use("librairy")
// db.books.find({author: "Ahmed Mourad"})
db.books.find({year:{$gt:1980}})

