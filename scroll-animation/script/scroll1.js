const bg = document.querySelectorAll('.bg')
const contents_a = document.querySelectorAll('.contents a')

contents_a.forEach((t,i)=>{
    t.addEventListener('click', (e)=>{
        e.preventDefault()
        window.scrollTo(0, bg[i].offsetTop)
    })
})