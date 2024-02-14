const mongoose = require('mongoose') //importing mongoose 
require('dotenv').config()


console.log(process.env.PASSWORD)
//connecting to mongodb atlasDatabase
mongoose.connect(`mongodb+srv://faiyazullah:${process.env.PASSWORD}@cluster0.yh89mwp.mongodb.net/?retryWrites=true&w=majority`).then(() => console.log("Connect to Database")).catch((err) => console.log("couldn't connect to databse!\n", err.message))


/*********************************Creating Table**************************************************** */
//Schems (Class)
const courseSchema = mongoose.Schema({
    name: String,
    creater: String,
    datePublished: { type: Date, default: Date.now },
    isPublished: Boolean,
    rating: Number
})

//Model (Object)
const Course = mongoose.model('courses', courseSchema)

//Fill object with data
// const course = new Course({ name: 'React', creater: 'Chai Aur React', isPublished: true })

//save model to push into database
// course.save().then((data) => console.log('Uploaded', data)).catch((err) => console.log('Something went wrong', err.message))

async function createCourse(name, creater, isPublished, rating) {
    try {
        //Fill object with data
        const course = new Course({ name: name, creater: creater, isPublished: isPublished, rating: rating })
        //save model to push into database
        const res = await course.save()
        console.log('data uploaded\n', res)
    } catch (err) {
        console.log('something went wrong\n', err.message)
    }
}

// createCourse("Dart", "HeyFlutter", true, 4.5)
// createCourse("Java", "Alpha", true, 3)
// createCourse("Flutter", "HeyFlutter", true, 4.5)
// createCourse("React", "ReactAurChai", true, 5)

/*********************************Reading Table**************************************************** */

async function getData() {
    try {
        const data = await Course.find({ creater: 'HeyFlutter' })
        console.log('data is fetched\n', data)
    } catch (err) {
        console.log('Data is Missing\n', err.message)
    }
}
// getData()

//comparison operators for mongodb query
//eq (==),lt (<),lte (<=),gt (>) ,gte (>=),
//in
//not in

async function getDataonRatings(rating) {
    try {
        const data = await Course.find({ rating: { $gte: rating, $lt: 5 } })
        const inOperatorData = await Course.find({ rating: { $in: [3, 5] } })
        console.log('data is fetched\n', data)
        console.log("in Operator data ie rating == 5 and rating == 3\n", inOperatorData)
    } catch (err) {
        console.log('Data is Missing\n', err.message)
    }
}

// getDataonRatings(4)

//Logical operators for mongodb query

//and
//or

async function getDataLogical() {
    try {
        const data = await Course.find().and([{ creater: "HeyFlutter" }, { rating: 4.5 }])
        console.log('data is fetched\n', data)
    } catch (err) {
        console.log('Data is Missing\n', err.message)
    }
}
// getDataLogical()

/*********************************Updating Table**************************************************** */

async function updateCourseRating(id, rating) {
    //find the course doc with id
    const course = await Course.findById(id)
    //if data not found
    if (!course) return;
    //if data found
    course.rating = rating
    const res = await course.save()
    console.log("data updated\n", res)
}

updateCourseRating('65cc9d69739a6b98069f0a24', 5)

/*********************************Deleting Table**************************************************** */

async function deleteData(id) {
    const course = await Course.findByIdAndDelete(id)
    console.log('data deleted', course)
}


deleteData('65cc9d69739a6b98069f0a23')


