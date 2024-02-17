import Course from '../model/course.js';

const getData = async ()=> {
    try {
        const data = await Course.find({})
        console.log('data is fetched\n', data);
        return data;
    } catch (err) {
        console.log('Data is Missing\n', err.message);
        throw err;
    }
}

const addCourse = async (name, creater, isPublished, rating)=>{
    try {
        //Fill object with data
        const course = new Course({ name: name, creater: creater, isPublished: isPublished, rating: rating });
        //save model to push into database
        const res = await course.save();
        return res;
    } catch (err) {
        console.log('something went wrong\n', err.message);
    }
}

const deleteCourse = async (id) => {
    try{
        const course = await Course.findByIdAndDelete(id);
        console.log('data deleted', course);
    }catch(err){
        console.log('something went wrong on deletion',err.message);
        throw err;
    }
}

export {getData,addCourse,deleteCourse};