/** Khai bao mang 1 chieu */
var names = ["Phuc", "Nam", "Thang", "Nam", "Minh"];
/** Truy xuat mang va In ra ten Thang */
document.write("*********IN RA TEN THANG*************</br>");
document.write(names[2]);
/** In ra tat ca cac ten trong mang */
document.write("*********IN RA TAT CA CAC TEN TRONG MANG*************</br>");
document.write(names[0] + "</br>");
document.write(names[1] + "</br>");
document.write(names[2] + "</br>");
document.write(names[3] + "</br>");
document.write(names[4] + "</br>");
/** In ra tat ca cac ten trong mang */
document.write("*********FOR*************</br>");
for (var i = 0; i < names.length; i++) {
    document.write(names[i] + "</br>");
}
/** Truong hop gia tri undefined */
document.write("*********OUT OF RANGE*************</br>")
document.write(names[5]);
/** For In */
document.write("*********FOR IN*************</br>")
for (index in names) {
    document.write(names[index] + "</br>");
}
/** For each */
document.write("*********FOR EACH*************</br>")
names.forEach(function (name) {
    document.write(name + "</br>");
});
document.write("*********push 2 ban*************</br>");
/** Them ten 2 ban con lai vao trong lop */
names.push("Tin");
names.push("Tuan");
document.write(names[names.length-1]);
/** */
document.write("*********chuyen phan tu cuoi len dau*************</br>");
var lastName = names.pop();
names.unshift(lastName);
for (index in names) {
    document.write(names[index] + "</br>");
    console.log(names.length);
}
document.write("*********Mang 2 chieu*************</br>");
var scores = [1, 2, 3, 4, 5, 6, 7];
var students = new Array(2);
for (var i = 0; i < students.length; i++) {
    students[i] = new Array(7);
}
for (var i = 0; i < names.length; i++) {
    students[0][i] = names[i];
    students[1][i] = scores[i];
}
for (var i = 0; i < 2; i++) {
    for (var j = 0; j < names.length; j++) {
        document.write(students[i][j] + "----");
    }
    document.write("<br>");
}