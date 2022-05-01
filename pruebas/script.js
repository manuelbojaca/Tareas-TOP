const imprimir = function () {

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
  // 1. Imprimir los cursos y los estudiantes de cada curso con el siguiente formato:

    return {
    // ref = .name o .title
    // list = {
    //   Print curso/estudiante => courses-students
    //   Print estudiante/curso => students-courses
    // }
    // id = course_id o student_id
    // id2 = solo en ultimo id de relleno, contrario a id

        arr: [],

        titulo: function (ref, list, id) {
            enrollments.forEach((obj) => {
                if (this.arr[obj[id] - 1] === undefined) {
                    this.arr[obj[id] - 1] = `- ${list.find(item => item._id === obj[id])[ref]}`; 
                }
            });
        },
        relleno: function (ref, list, id, id2) {
            enrollments.forEach((obj) => {
                this.arr[obj[id] - 1] = this.arr[obj[id] - 1].concat( '\n   * ', `${list.find(item => item._id === obj[id2])[ref]}`);
                
            });
        },
        cursos: function () {
            this.arr = [];
            this.titulo('title', courses, 'course_id');
            this.relleno('name', students, 'course_id', 'student_id');
            return `${this.arr.forEach((item) => {console.log(item);})}`;
        },
        estudiantes: function () {
            this.arr = [];
            this.titulo('name', students, 'student_id');
            this.relleno('title', courses, 'student_id', 'course_id');
            return `${this.arr.forEach((item) => {console.log(item);})}`;
        },
    }
}

const prueba = imprimir();
prueba.cursos();
prueba.estudiantes();
/*
 // 1. Imprimir los cursos y los estudiantes de cada curso con el siguiente formato:
const cursosEstudiantes = `- ${courses[0].title} \n * ${students[0].name} \n- ${courses[1].title} \n * ${students[0].name} \n * ${students[1].name}`

console.log(cursosEstudiantes)
//   - JavaScript I
//      * Pedro Perez
//   - HTML y CSS I
//      * Pedro Perez
//      * Maria Gomez

// Imprimir los estudiantes y los cursos a los que están matriculados con el siguiente formato:
console.log('---------------')

const matriculasEstudiantes = `- ${students[0].name} \n * ${courses[0].title} \n * ${courses[1].title}\n- ${students[1].name} \n * ${courses[1].title}`

console.log(matriculasEstudiantes)

// - Pedro Perez
//   * JavaScript I
//   * HTML y CSS I
// - Maria Gomez
//   * HTML y CSS I
*/

