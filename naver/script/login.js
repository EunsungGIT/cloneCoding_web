// 로그인 탭 제목 클릭 시 해당 내용 활성화 JS
// 0. (초기) 로그인 내용 o, 일회용 내용 x, QR코드 내용 x, ID로그인 제목 활성화(css)
// 1. ID로그인을 클릭하면 로그인 내용o, 일회용 내용 x, QR코드 내용 X
// 2. 일회용을 클릭하면 로그인 내용x, 일회용 내용 o, QR코드 내용 X
// 3. QR코드을 클릭하면 로그인 내용x, 일회용 내용 x, QR코드 내용 o
// 제목 변수
const login_title = document.querySelectorAll('.login_title h2 > a')
// 통합 내용 변수
const login_c = document.querySelectorAll('.login_c')

const login_c_hide = ()=>{for(let i of login_c){i.style.display = 'none'}}
login_c_hide()
login_c[0].style.display = 'block'

const login_title_hide = ()=>{for(let j of login_title){j.parentElement.classList.remove('active')}}
login_title_hide()
login_title[0].parentElement.classList.add('active')

login_title.forEach((t,i)=>{
    t.addEventListener('click', ()=>{
        login_c_hide()
        login_title_hide()
        login_c[i].style.display = 'block'
        login_title[i].parentElement.classList.add('active')
    })
})

//========================================================
console.log('로그인 메세지 출력============================')
//아이디 로그인 시 틀린 정보 또는 입력되지 않은 정보에 따라 error message 출력하기
//1. 아이디 미입력 후 로그인 버튼 클릭 => "아이디를 입력해주세요"
//2. 아이디 입력, 비밀번호 미입력 후 로그인 버튼 클릭 => "비밀번호를 입력해주세요"
//3. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞지 않다면 => "아이디(로그인 전용 아이디)또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
//4. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞다면 => 로그인 성공 팝업 "어서오세오 OO님"
const userIdInput = document.querySelector('#userId')
const userPwInput = document.querySelector('#userPw')
const error_message = document.querySelector('.error_message')
const loginBtn = document.querySelector('#loginBtn')
const userList = [{
    id:'admin',
    pw:'1234'
}]
console.log(userIdInput, userPwInput, error_message, loginBtn)
console.log(userList[0].id)

loginBtn.addEventListener('click', ()=>{
    if(userIdInput.value == ''){//아이디 빈 문자열 검사 -> 참이라면
        error_message.innerHTML = '아이디를 입력해주세요' //참일 때 실행
    }else if(userPwInput.value == ''){
        error_message.innerHTML = '비밀번호를 입력해주세요'
    }else if(userIdInput.value == userList[0].id && userPwInput.value == userList[0].pw){
        alert('어서오세요 OO님')
    }else{
        error_message.innerHTML = '아이디(로그인 전용 아이디)또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
        userPwInput.value = ''
    }
})

const disposableNumInput = document.querySelector('#disposable_num')
const disposableErrorMessage = document.querySelector('.disposable_error_message')
const disposableLoginBtn = document.querySelector('#disposable_loginBtn')

console.log(disposableNumInput,disposableErrorMessage,disposableLoginBtn)

disposableLoginBtn.addEventListener('click', ()=>{
    if(disposableNumInput.value == ''){
        disposableErrorMessage.innerHTML = '일회용 번호를 입력하세요'
    }
})