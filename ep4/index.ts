function sayHi(dayofWeek: number){
    if (dayofWeek === 1) {
        console.log('วันอาทิตย์')
    }else if (dayofWeek === 2){
        console.log('วันจันทร์')
    }else if (dayofWeek === 3){
        console.log('วันอังคาร')
    }else if (dayofWeek ===4){
        console.log('วันพุธ')
    }else if (dayofWeek === 5){
        console.log('วันพฤหัสบดี')
    }else if (dayofWeek === 6){
        console.log('วันศุกร์')
    }else if (dayofWeek === 7){
        console.log('วันเสาร์')
    }
}
sayHi(1)

function sayhi(dayofWeek: number){
    switch (dayofWeek){
        case 1:
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2:
            console.log('สัวสดีวันจันทร์')
            break
        case 3:
            console.log('สวัสดีวันอังคาร')
            break
        case 4:
            console.log('สวัสดีวันพุธ')
            break
        case 5:
            console.log('สวัสดีวันพฤหัสบดี')
            break
        case 6:
            console.log('สวัสดีวันศุกร์')
            break
        case 7:
            console.log('สวัสดีวันเสาร์')
            break
        default:
            console.log('ระบุวันผิด')
            break
    }    
}
sayhi(2)
const x: number = 999999999999999
const y: number = 999999999999999

const z: number = 0.1 + 0.2 

console.log(x)
console.log(y)
console.log(z)


function fixedDecimal (n: number, digit: number){
    const x = n.toFixed(digit)
    return x
}
console.log(fixedDecimal (50.1888888888,6))

function cm(n: number){
    const a = n.toLocaleString( )
    return a 
}
console.log(cm(100000000))



const str: string =  "Naphatsakorn"
console.log(str.indexOf('k'))
 

