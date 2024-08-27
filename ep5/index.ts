//for loop

// for (let i = 0; i <= 5; i++) { //let i = 0; คือ เริ่มจากเลข 0 ใส่ไว้ใน i จบด้วย ; i <= 5; คือ ถ้า i น้อยกว่าหรือเท่ากับ 5 ให้มัน i++ คือ i บวกเพิ่มไปจนกว่าจะ === 5
//     console.log(i)
// }


// let sum: number = 0 // สร้าง sum เพื่อรอรับเลขที่บวก

//i++ = i บวกเพิ่มทีละ 1  
// for (let i = 1; i <= 365; i++) { // สร้าง loop ในการบวกเลขไปเรื่อยๆ จนถึง 1000 ครั้ง 
//     sum = sum + i // เอาตัวเองมาบวก 1
// }


// console.log('total : ' , sum)

// while loop

//let i: number = 1
//let sum: number = 0 

//for (let j= 1; j < 10; j++) {
//   i = i *5
//}

//while (i <= 365 ){
//    sum = sum + 1
 //   i++
//}
//console.log('Total:' , sum)

//let sum: number = 0
//let isBeark: boolean = false
//let row: number = 0 


//while (true) {
//    console.log('โสด')
//    row++
//    if (row === 3) {
//        break
//    }
//}

//let car1: string = 'Honda'
//let car2: string = 'Yammaha'
//let car3: string = 'Toyota'
//let car4: string = 'Suzaki'
//let car5: string = 'Mazda'

//const cars: string[]= ['Honda','Yammaha','Toyota','Suzaki','Mazda']

//for (let i = 0; i < cars.length; i++){
 //   if (cars[i] === 'Yammaha') {
  //       console.log('รถซื้อแกง จะแรงได้ไง')
 //   }
//}

const cars: string[]= ['Honda','Yammaha','Toyota','Suzaki','Mazda']

cars.forEach(function(c) {
    console.log(c)
})