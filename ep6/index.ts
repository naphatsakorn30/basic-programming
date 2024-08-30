//คิดผลรวมของข้อมูลใน score และหาค่าเฉลี่ย

const score = [10, 23, 26, 30, 33] //สร้างชุดข้อมูลใส่ score เป็น array
let sum: number = 0 // สร้างตัวแปร sum เพื่มรอเก็บผลรวม
for (let i = 0; i < score.length; i++) { // loop ที่สร้าง i = 0 เพราะต้องเริ่มนับข้อมูลใน score จาก 0
    //i < score.length คือให้ค่า i ที่เราคิด loop ไปจนถึง น้อยกว่า score.length คือจำนวนของ ข้อมูลใน score และ i++ คือการเพิ่มค่า i ขึ้นทุกครั้งที่ loop 1 ครั้ง
    sum = sum + score[i] // คือการนำข้อมูลในตัวแปร sum ออกมา และเอาตัวมันเองบวกกับค่าด้านในของ score ที่เริ่มนับจาก 0 หลังจากนั้นก็เก็บค่าที่ได้เข้าไปในตัว sum อีกครั้ง
}
const avg = sum / score.length // สร้างตัวแปร avg เพิ่มเก็บค่าเฉลี่ย โดยสูตรคือ ผลรวม หารจำนวนตัวมันเอง จากโจทย์คือ sum / score.length
console.log('Total : ', sum)
console.log('Total : ', avg)

//const sutdentsName: string = 'แนน,ฟู,อ้น,ลัค,นัท,เอ็ม,ออม,ปลื้ม,ก็อต'
//const sutdentsNameArray = sutdentsName.split(',')
//console.log(sutdentsNameArray.join('*'))
    
const animalsName: string = 'ลิง*หมู*หมา*หนู'
const animalsNameArray = animalsName.split('*')
console.log('เดิม',animalsNameArray)

animalsNameArray.pop() // ดึงหนูออก
console.log('ดึงตัวท้าย',animalsNameArray)

animalsNameArray.push('ม้า')
console.log('ใหม่',animalsNameArray)

animalsNameArray.pop()
console.log('ดึงตัวท้าย',animalsNameArray)
animalsNameArray.push('โลมา')
console.log('ใหม่',animalsNameArray)

animalsNameArray.shift() //ดึงลิงออก
console.log('ดึงตัวหน้า',animalsNameArray)

animalsNameArray.unshift('กวาง') //ใส่ตัวหน้าใหม่
console.log(animalsNameArray)

console.log(animalsNameArray.sort())  //เรียงตัวอักษร ก-ฮ
console.log(animalsNameArray.reverse())  //เรียงตัวอักษร ฮ-กวาง

console.log ('slice 0-2:' , animalsNameArray.slice(0,2))

const fruits = ["Banana","Orange","Apple","Mango"]
console.log(fruits.sort())  
console.log(fruits.reverse())
const me ={
    firtName:  'Naphatsakorn',
    LastName:  'Sriwongchai',
    age : 21
}

// ประวัติของฉัน

//ชื่อ: Naphatsakorn
//นามสกุล : Sriwongchai
//อายุ: 21