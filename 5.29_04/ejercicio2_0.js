const format = function () {
    
    const courses = [
        { _id: 1, title: "JavaScript I" },
        { _id: 2, title: "HTML y CSS I" },
    ]      

    const students = [
        { _id: 1, name: "Pedro Perez" },
        { _id: 2, name: "Maria Gomez" },
    ]

    const enrollments = [
        { course_id: 1, student_id: 1 },
        { course_id: 2, student_id: 1 },
        { course_id: 2, student_id: 2 }
    ]

    return {
        curso: function () {
            var str;
            for (let i = 0; i < enrollments.length; i++) {
                if(enrollments[i].course_id === enrollments[i].item.course_id){
                    str = 
                }
                courses[item.course_id].title + ...
            });
        }
    }
};
const format1 = format();
console.log(format1.curso());

//- JavaScript I
//  * Pedro Perez
//- HTML y CSS I
//  * Pedro Perez
//  * Maria Gomez

//Pedro Perez
//  * JavaScript I
//  * HTML y CSS I
//- Maria Gomez
//  * HTML y CSS I

