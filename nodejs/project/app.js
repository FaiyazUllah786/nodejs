import express, { json } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Course from './model/course.js';
import {getData,addCourse,deleteCourse} from './controller/course_controller.js'

dotenv.config({path:'./env'});

const app = express();

app.use(express.json())
//IIFE function execution
;(async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DB}`)
        console.log('MongoDB connected !! DB HOST',connectionInstance.connection.host);
        app.on('error',(error)=>{
            console.log('Something went wrong',error);
            throw error;
        });
        app.listen(process.env.PORT,()=>console.log("App is listening on PORT,",process.env.PORT))
    } catch (error) {
        console.log("Error Occured",error.message);
        throw error;
    }
})()

app.get('/',(req,res)=>{res.send("Connected Sucessfully")});


app.get('/courses',async (req,res)=>{
    const courses = await getData();
    res.json(courses);
});



app.post('/addCourse',async (req,res)=>{
    console.log(req.body);
    const name=req.body.name;
    const creater=req.body.creater; 
    const isPublished=req.body.isPublished; 
    const rating=req.body.rating;

    const data = await addCourse(name, creater, isPublished, rating);
    res.send(data);
});

app.put('/updateCourseRating/:courseId',async(req,res)=>{
    try{
        const course = await Course.findById(req.params.courseId);
        if (!course) return;
        course.rating = req.body.rating;
        const updatedData = await course.save();
        res.send(updatedData);
    }catch(err){
        console.log('Something went wrong',err.message);
    }
});


app.delete('/deleteCourse/:courseId',async(req,res)=>{
    const deletedCourse = await deleteCourse(req.params.courseId);
    res.send(deletedCourse);
});



