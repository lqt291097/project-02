var courses = [
    {
        id: 1,
        name: "JS",
        coin: 0,
    },
    {
        id: 2,
        name: "HTML",
        coin: 200,
    },
    {
        id: 3,
        name: "PY",
        coin: 100,
    },
    {
        id: 4,
        name: "Ruby",
        coin: 0,
    },
];
var newCourses = courses.map(function courseHandle(course, stt) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin * 10}`,
        index: stt,
    };
});
console.log(newCourses);
