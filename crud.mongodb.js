// Create data

use("crudedb")
console.log(db);

db.createCollection("courses")
db.courses.insert(
    {
        Name: "Gyan Deep pal",
        Address: "Kathauli meja road",
        citi: "Allahabad"

    }
)

db.courses.insertMany([
    {
        Name: "Gyan Deep Pal",
        Address: "Kathauli Meja Road",
        citi: "Allahabad"
    },
    {
        Name: "Rahul Sharma",
        Address: "Civil Lines",
        citi: "Prayagraj"
    },
    {
        Name: "Aman Verma",
        Address: "Naini",
        citi: "Prayagraj"
    },
    {
        Name: "Rohit Yadav",
        Address: "Meja Road",
        citi: "Prayagraj"
    },
    {
        Name: "Ankit Singh",
        Address: "Jhunsi",
        citi: "Prayagraj"
    },
    {
        Name: "Vikas Patel",
        Address: "Vijay Nagar",
        citi: "Indore"
    },
    {
        Name: "Aditya Gupta",
        Address: "Rajendra Nagar",
        citi: "Lucknow"
    },
    {
        Name: "Saurabh Mishra",
        Address: "Gomti Nagar",
        citi: "Lucknow"
    },
    {
        Name: "Deepak Kumar",
        Address: "Sigra",
        citi: "Varanasi"
    },
    {
        Name: "Pankaj Tiwari",
        Address: "Civil Lines",
        citi: "Kanpur"
    }
])


// let a = db.courses.find({}, { name: 1 })

// console.log(a.toArray());

// let b = db.courses.findOne({
//     Name: "Gyan Deep Pal"
// });

// console.log(b);

// Update

// db.courses.updateOne(
//     { Name: "Vikas Patel" },
//     { $set: { Name: "Rahul Pal" } }
// )

// db.courses.updateMany(
//     { Name: "Rahul Pal" },
//     { $set: { Name: "Gyan Singh" } }
// )

// delete

db.courses.deleteOne({Name:"Gyan Deep pal"})


db.courses.deleteMany({Name:"Gyan Deep pal"})