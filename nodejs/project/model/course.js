import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name: String,
    creater: String,
    datePublished: { type: Date, default: Date.now },
    isPublished: Boolean,
    rating: Number
});

const Course = mongoose.model('courses',courseSchema);

export default Course;

