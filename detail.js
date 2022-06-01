// 버튼0 누르면
// 버튼0,1,2에 붙어있던 orange 클래스명 전부 제거하라고 코드 3줄 짜기
// 버튼0에 orange 클래스명 부착
// 박스0,1,2에 붙어있던 show 클래스명 전부 제거하라고 코드 3줄 짜기
// 박스0에 show 클래스명 부착

let car = {
    name: '소나타',
    price: [50000, 3000, 4000]
}

const information = document.querySelector('.information');
information.textContent = `${car['name']} / ${car['price'][0]}`


// 상품선택 부분
const formSelect = document.querySelectorAll('.form-select');
const option = document.querySelectorAll('.option');

let pants = [28, 30, 32];

formSelect[0].addEventListener('input',()=>{
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(this);
    if(formSelect[0].value === '셔츠') {
        formSelect[1].classList.remove('form-hide')
        let 템플릿 = `
        <option>S</option>
        <option>M</option>
        <option>L</option>
        `
        formSelect[1].innerHTML = 템플릿;
    } else if(formSelect[0].value === '바지') {
        formSelect[1].classList.remove('form-hide')
        formSelect[1].innerHTML = '';
        pants.forEach((size)=>{
            formSelect[1].insertAdjacentHTML('beforeend', `<option>${size}</option>`)
        })
    } else if(formSelect[0].value === '모자') {
        formSelect[1].classList.add('form-hide')
    }
})


const tabBtn = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');

// for(let i = 0; i < tabBtn.length; i++) {
//     tabBtn[i].addEventListener('click', ()=> {
//         openTab(i);
//     })
// }

function openTab(num){
    tabBtn[0].classList.remove('orange');
    tabBtn[1].classList.remove('orange');
    tabBtn[2].classList.remove('orange');
    tabBtn[num].classList.add('orange');
    
    tabContent[0].classList.remove('show');
    tabContent[1].classList.remove('show');
    tabContent[2].classList.remove('show');
    tabContent[num].classList.add('show');
}

const list = document.querySelector('.list');
list.addEventListener('click', (event)=>{
    openTab(event.target.dataset.id)
   
    // if(event.target === tabBtn[0]) {
    //     openTab(0)
    // } else if(event.target === tabBtn[1]) {
    //     openTab(1)
    // } else if(event.target === tabBtn[2]) {
    //     openTab(2)
    // }
})