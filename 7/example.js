//пример конструирования типизированных объектов с типизированными под-объектами

function Human(name, age, topSize, middleSize, bottomSize) {
    this.name = name;
    this.age = age;
    this.size = new Size(topSize, middleSize, bottomSize);
}
function Size(topSize, middleSize, bottomSize) {
    this.top = topSize;
    this.middle = middleSize;
    this.bottom = bottomSize;
}
var tanya = new Human('Таня', 25, 90, 60, 90);
console.log(tanya);
