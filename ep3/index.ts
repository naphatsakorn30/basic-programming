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

