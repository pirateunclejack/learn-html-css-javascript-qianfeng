function B1() {
    _b_common()
    console.log('B1_create')
}

function B2() {
    _b_common()
    console.log('B2_create')
}

function _b_common(){
    console.log('b_common')
}

function test(){
    console.log("B1-test")
}

function B_B(){
    console.log('B_B')
}

export{
    B1,
    B2,
    B_B,
    test
}