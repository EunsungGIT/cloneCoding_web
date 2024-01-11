//Q. "like_off.png" 클릭 시 src속성값을 "like_on.png" 변경하기
const like = document.querySelectorAll('.like')
const comment = document.querySelectorAll('.comment')
const send = document.querySelectorAll('.send')
console.log(like, comment, send)
console.log(like[0])

function onOff(name, status){
    return `./images/${name}_${status}.png`
}
function onOff_v2(target, name, status){
    return target.children[0].src = `./images/${name}_${status}.png`
}

like[0].addEventListener('click', function(){
    // this == 현재 이벤트 대상 객체 키워드('이벤트종류', function(){이벤트 함수 내에서 사용할 때})
    console.log(this.children[0].src)
    // like.children[0].src = onOff('like', 'on')
    onOff_v2(this, 'like', 'on')
})
comment[0].addEventListener('click', function(){
    console.log(this.children[0].src)
    onOff_v2(this, 'comment', 'on')
})
send[0].addEventListener('click', function(){
    console.log(this.children[0].src)
    onOff_v2(this, 'paper', 'on')
})
like[1].addEventListener('click', function(){
    console.log(this.children[0].src)
    // like.children[0].src = onOff('like', 'on')
    onOff_v2(this, 'like', 'on')
})
comment[1].addEventListener('click', function(){
    console.log(this.children[0].src)
    onOff_v2(this, 'comment', 'on')
})
send[1].addEventListener('click', function(){
    console.log(this.children[0].src)
    onOff_v2(this, 'paper', 'on')
})
like[2].addEventListener('click', function(){
    console.log(this.children[0].src)
    // like.children[0].src = onOff('like', 'on')
    onOff_v2(this, 'like', 'on')
})
comment[2].addEventListener('click', function(){
    console.log(this.children[0].src)
    onOff_v2(this, 'comment', 'on')
})
send[2].addEventListener('click', function(){
    console.log(this.children[0].src)
    onOff_v2(this, 'paper', 'on')
})