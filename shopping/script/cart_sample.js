// 왼쪽 썸네일 이미지 JS
//1. small_thumnail-a 마우스를 올리면(ex) small1 마우스를 올렸다면
//2. big_thumnail-img(src) 값이 변경된다. (ex) big1이 big2 이미지 변경
const item_detail = document.querySelector('.item_detail')
const small_thumnail = document.querySelectorAll('.small_thumnail a')
const big_thumnail = document.querySelector('.big_thumnail img')
console.log(item_detail, small_thumnail, big_thumnail)

small_thumnail[0].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_images/big1.jpg"
})
small_thumnail[1].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_images/big2.jpg"
})
small_thumnail[2].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_images/big1.jpg"
})
small_thumnail[3].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_images/big2.jpg"
})
small_thumnail[4].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_images/big1.jpg"
})
small_thumnail[5].addEventListener('mouseover', function(){
    big_thumnail.src = "./dog_images/big2.jpg"
})

//가격 할인 정보 클릭 시 나오는 정보 팝업
//1. 팝업 숨기기
//2. i 클릭하면 팝업 보이기
const price_info = item_detail.querySelector('.price i[class$=info]')
const price_info_open = item_detail.querySelector('.price .open')
console.log(price_info, price_info_open)
price_info_open.style.display = 'none'
let price_info_open_status = false

price_info.addEventListener('click', function(){
    if(price_info_open_status == false){
        price_info_open.style.display = 'block'
        price_info_open_status = !price_info_open_status
    }else{
        price_info_open.style.display = 'none'
        price_info_open_status = !price_info_open_status
    }
})

//내일 출발 i 클릭 시 팝업 출력하고 팝업 내 X 클릭 시 팝업 닫히기 JS
//1. 팝업 숨기기
//2. i 클릭 시 팝업 출력
//3. X 클릭 시 팝업 닫히기
const shipping_info = item_detail.querySelector('.benefit_shipping dd:nth-of-type(2) > span span i[class$=info]')
const shipping_info_open = item_detail.querySelector('.benefit_shipping dd:nth-of-type(2) > span span .open')
const shipping_info_open_close = item_detail.querySelector('.benefit_shipping dd:nth-of-type(2) > span span .open .close')
console.log(shipping_info, shipping_info_open, shipping_info_open_close)
shipping_info_open.style.display = 'none'
let shipping_info_open_status = false

shipping_info.addEventListener('click', function(){
    if(shipping_info_open_status == false){
        shipping_info_open.style.display = 'block'
        shipping_info_open_status = !shipping_info_open_status
    }else{
        shipping_info_open.style.display = 'none'
        shipping_info_open_status = !shipping_info_open_status
    }
})
shipping_info_open_close.addEventListener('click', function(){
    shipping_info_open.style.display = 'none'
})

const delivery_menu = item_detail.querySelector('.benefit_shipping dd:nth-of-type(2) .delivery_menu')
const delivery_menu_open = item_detail.querySelector('.benefit_shipping dd:nth-of-type(2) .delivery_menu_open')
const delivery_menu_icon = delivery_menu.querySelector('i[class$=down]')
console.log(delivery_menu, delivery_menu_open, delivery_menu_icon)
delivery_menu_open.style.display = 'none'

let delivery_menu_open_status = false //현재 상태 변수(false==숨김)
delivery_menu.addEventListener('click', function(){
    if(delivery_menu_open_status == false){
        console.log(delivery_menu_open_status)//open
        delivery_menu_open.style.display = 'block';
        delivery_menu.style.borderBottomLeftRadius = '0';
        delivery_menu.style.borderBottomRightRadius = '0';
        delivery_menu_icon.style.transform = 'scaleY(-1)';
        delivery_menu_open_status = !delivery_menu_open_status
    }else{
        console.log(delivery_menu_open_status)
        delivery_menu_open.style.display = 'none';
        delivery_menu.style.borderBottomLeftRadius = '5px';
        delivery_menu.style.borderBottomRightRadius = '5px';
        delivery_menu_icon.style.transform = 'scaleY(1)';
        delivery_menu_open_status = !delivery_menu_open_status
    }
})

//상품 색상, 사이즈 옵션을 선택했을 때 선택 정보가 selectResult에 결과값으로 출력되고 num_result의 구매수량에 따라 order_price에 가격이 출력되는 결과
//---------------------------------------------------------
//상세절차 : 상품 색상, 사이즈 옵션을 선택했을 때
//1. 색상(옵션1) 선택 전 사이즈(옵션2) 비활성화
//2. 옵션1 선택 시 옵션2 활성화
//3. 옵션1 선택 후 옵션2 클릭 시 결과 출력
//3-1. (위) 조건 달성 기준 결과 출력이 되어있는 상태라면 같은 옵션 클릭 시 중복 데이터 결과 팝업 출력
//3-2. (위) 조건 달성 기준 결과 출력과 다른 옵션을 클릭 시 추가 데이터 기존 데이터 (아래) 출력
//3-3. (위) 조건 달성 기준 옵션1, 옵션2의 선택 데이터는 초기화됨.
const colorOpt = document.querySelector('#colorOpt');
const sizeOpt = document.querySelector('#sizeOpt');
const selectResult = document.querySelector('.selectResult')
console.log(colorOpt, sizeOpt);
console.log(colorOpt.options[1].value);
console.log(colorOpt.options[1].value.text);
selectResult.style.display = 'none';

sizeOpt.disabled = true; //size select 비활성화

//colorOpt, sizeOpt text 데이터를 모두 변수로 수집 후
//creatElement, appendChild를 이용해서 opt1, opt2 선택 데이터 출력하기
const optResult1 = document.createElement('span');
const optResult2 = document.createElement('span');
const resultView = document.querySelectorAll('.item_detail .right_container #itemFrm fieldset .selectResult .opt_list span')
console.log(optResult1, optResult2, resultView)
const num_count = selectResult.querySelector('#num_count')
const order_price = selectResult.querySelector('.order_price')
const priceTotalView = document.querySelector('fieldset:nth-child(2) .order_price')
let num = 1;
let price = 36900;
console.log(num_count, order_price)

colorOpt.addEventListener('change', function(){
    sizeOpt.disabled = false
    console.log(colorOpt.options[colorOpt.selectedIndex].text)
    optResult1.innerHTML = colorOpt.options[colorOpt.selectedIndex].text
})
sizeOpt.addEventListener('change', function(){
    //선택 option 데이터 저장하기
    console.log(sizeOpt.options[sizeOpt.selectedIndex].text)
    optResult2.innerHTML = sizeOpt.options[sizeOpt.selectedIndex].text
    //선택옵션 부모 보이기
    selectResult.style.display = 'grid';
    selectResult_status = true
    //선택옵션 적용 대상에 위 option데이터값 출력하기
    resultView[0].appendChild(optResult1)
    resultView[1].appendChild(optResult2)
    //선택옵션의 수량(num) 출력하기
    num_count.value = num
    //선택옵션의 가격(price) 출력하기
    order_price.innerHTML = price.toLocaleString('ko-kr') + '원'
    priceTotalView.innerHTML = price.toLocaleString('ko-kr') + '원'
})

//selectResult 안 X 클릭 시 X의 부모(selecResult)를 DOM관계로 선택해서 숨기기
const close = selectResult.querySelector('.close')
close.addEventListener('click', function(){
    close.parentElement.style.display = 'none';
    selectResult_status = false
})

//수량 -, + 버튼 클릭 시 수량값이 변경되며 그에 따라 가격 변동
const plus = selectResult.querySelector('#plus')
const minus = selectResult.querySelector('#minus')
let total = 0
console.log(plus, minus)
console.log(typeof num_count.value)
num_count.value = num

//최소 구매 수량1, 최대 구매 수량7
//최소 구매 수량입니다.
//재고 7개로 더 구매할 수 없습니다.
plus.addEventListener('click', ()=>{
    //1. 수량 1 증가
    //1-1. 수량 1 증가한 값 표시
    if(num < 7){
        num++
        num_count.value = num
        total = num*price;
    }else{
        alert('재고 7개로 더 구매할 수 없습니다.')
    }
    order_price.innerHTML = total.toLocaleString('ko-kr') + '원'
    priceTotalView.innerHTML = total.toLocaleString('ko-kr') + '원'
})
minus.addEventListener('click', ()=>{
    if(num > 1){
        num--
        num_count.value = num
        total = num*price;
    }else{
        alert('최소 구매 수량입니다.')
    }
    order_price.innerHTML = total.toLocaleString('ko-kr') + '원'
    priceTotalView.innerHTML = total.toLocaleString('ko-kr') + '원'
})

//장바구니, 바로구매
const cartBtn = document.querySelector('#cart')
const buyBtn = document.querySelector('#buy')
let selectResult_status = false

cartBtn.addEventListener('click', ()=>{
    if(selectResult_status == false){
        alert('상품을 선택해주세요')
    }else{
        alert('장바구니에 담겼습니다')
    }
})