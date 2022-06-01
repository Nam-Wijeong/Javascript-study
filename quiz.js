// array, for 과제

// 1. Array에서 철수라는 자료를 찾고 싶습니다
let 출석부 = ['흥민', '영희', '철수', '재석', '영희'];
function 이름찾기(name) {
    for(let i of 출석부) {
        if(name === i) {
            console.log('있어요');
            return;
        }
    }
    console.log('없어요');
}   

// 이름찾기('흥민')
// 이름찾기('영희')
// 이름찾기('철수')
// 이름찾기('재석')
이름찾기('위정')

// 2. 구구단 출력하기!
for(let i = 2; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 3. 평균점수 계산기 만들기
function average(arr, score) {
    let result = 0;

    for(let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    let average = result / arr.length;
    if(average < score) {
        console.log(`와~! 점수가 ${score - average}점 올랐네요!`);
        return
    } else {
        console.log(`흑,,점수가 똑같거나 ${average - score}점 떨어졌네요,,`);
    }
}

average([2,3,4], 10)
average([40, 40, 40], 20)