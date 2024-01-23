const body = document.querySelector('html, body')
const link_a = document.querySelectorAll('.link a')
const bg = document.querySelectorAll('.bg')
const nav_a = document.querySelectorAll('nav a')
const circle = document.querySelector('.circle')

window.addEventListener('mousemove',(m)=>{
    console.log(m.clientX)
    circle.style.left = `${m.clientX}px`
    circle.style.top = `${m.clientY}px`
})

link_a[0].classList.add('active')

bg.forEach((obj, idx)=>{
    console.log(bg[idx].offsetTop)
})

//스크롤 했을 때 각 bg의 위치에 닿으면 link-a 색상이 변경되고 싶다
window.addEventListener('scroll', ()=>{
    link_a.forEach((obj, idx)=>{
        console.log('..')
        if(body.scrollTop >= bg[idx].offsetTop-200){
            console.log('...')
            reset()
            link_a[idx].classList.add('active')
        }
    })
})

function reset(){
    link_a.forEach((obj,idx)=>{
        link_a[idx].classList.remove('active')
    })
}

//nav_a 클릭 시 각 bg1~4 위치로 스크롤 이동
nav_a.forEach((o, i)=>{
    o.addEventListener('click', (e)=>{
        e.preventDefault()
        window.scrollTo(0, bg[i].offsetTop)
    })
})