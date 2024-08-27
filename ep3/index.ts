function HellWorld() {
    console.log('สวัสดีท่านสมาชิก')
}
HellWorld()

function secondHello(name: string) {
    console.log(name)
}
console.log(secondHello('Aomsin'))

function getPi() {
    return 3.14
}
console.log(getPi())

function st(fname: string, sname: string, tname: string) {
    if ((fname === 'nan' || sname === 'pleum') && tname === 'yo') {
        console.log('เริ่มสอน')
    } else {
        console.log('ยังไม่สอน')
    }
}
st('as', 'pleum', 'you')

function aom(asex: string, sheight: number, weight: number) {
    if (asex === 'male' && (sheight > 170 || weight > 50 && weight < 110)) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์ทหาร')
    }
}
aom('female', 175, 80)

<<<<<<< HEAD


=======
>>>>>>> 4dd868c6fa9fd2996b08f1b010d0cc2712e136fd
function BMI (weight: number, height: number){
    height = height / 100;
    let BMI: number = weight / (height*height)
    
    if (BMI <18.50 ){
<<<<<<< HEAD
        console.log('น้ำหนักน้อย')    
    }else if (BMI >= 18.50 && BMI <= 22.90 ){
        console.log('น้ำหนักปกติ')
    }else if (BMI >= 23 && BMI <= 24.90 ){
        console.log('ท้วม')
    }else if (BMI >= 25 && BMI <= 29.90){
        console.log('อ้วน')
    }else if (BMI  >= 30) {
        console.log('อ้วนมาก')
=======
        console.log('น้ำหนักน้อย/ผอม')    
    }else if (BMI >= 18.50 && BMI <= 22.90 ){
        console.log('น้ำหนักปกติ/สุขภาพดี')
    }else if (BMI >= 23 && BMI <= 24.90 ){
        console.log('ท้วม/โรคอ้วนระดับ1')
    }else if (BMI >= 25 && BMI <= 29.90){
        console.log('อ้วน/โรคอ้วนระดับ2')
    }else if (BMI  >= 30) {
        console.log('อ้วนมาก/โรคอ้วนระดับ3')
>>>>>>> 4dd868c6fa9fd2996b08f1b010d0cc2712e136fd
    }
}
BMI(54,170)


<<<<<<< HEAD
=======
    
>>>>>>> 4dd868c6fa9fd2996b08f1b010d0cc2712e136fd
