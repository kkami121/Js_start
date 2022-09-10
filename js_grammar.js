// 별 찍기 연습 해보자
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 5; j++){
//         console.log('*'.repeat(i + 1));
//     }
// }

let ab = '3월';
let abc = parseInt(ab);;
console.log(abc);

//-------------------------배열-------------------------
const arr = [1, 2, 3, 4];

arr[arr.length - 1]; // 마지막 인덱스
 
arr.unshift(0); // 맨 앞에 추가
arr.push(5); //맨 뒤에 추가

console.log(arr);

arr.shift(); // 첫 번째 요소 제거 
arr.pop(); // 마지막 요소 제거
console.log(arr);


arr.splice(1, 1); // 1인덱스를 기준으로 한 개 제거
console.log(arr);

arr.splice(2, 1); // 2인덱스를 기준으로 두 개 제거
console.log(arr);

arr.splice(1); // 1인덱스를 기준으로 뒤에 다 제거
console.log(arr);

arr.splice(0, 1, '1', '6'); // 0인덱스를 기준으로 한 개 제거 하고 지운 자리에 '1'과'6'을 넣어준다
console.log(arr);

arr.splice(0, 0, '5'); // 아무것도 제거 하지 않고 0인덱스에 '5' 추가
console.log(arr);

arr.includes('5'); // 배열안에 '5'가 있으면 True 반환
arr.indexOf('5'); // 앞에서 부터 인덱스 찾기
arr.lastIndexOf('5'); // 뒤에서 부터 인덱스 찾기

const arr_1 = ['가', '라', '다', '라', '마', '라'];

for(let i = 0; i < arr_1.length; i++){ // '라' 제거하기
    arr_1.splice(arr_1.indexOf('라'), 1);
}
console.log(arr_1);


//-------------------------함수-------------------------
function a(){
    console.log('함수');
};
a();

const c = (x, y) => {
    return x + y;
};
console.log(c(1, 6));

//-------------------------객체 리터럴-------------------------
const guiyeol = {
    name : '박귀열',
    year : '1994',
    '2ds' : 'weee',
};
console.log(guiyeol.name);
console.log(guiyeol['2ds']);

guiyeol.name = '박귀열22'; // 수정 가능
guiyeol.gender = 'M'; // 추가 할 때는 그냥 이름 넣고 추가

console.log(guiyeol.name);
console.log(guiyeol['gender']);

// 객체 안에 함수 넣기 == 메서드
const debug = {
    log : function(value){
        console.log(value);
    },
};
debug.log('hi');

// 객체는 참조를 하기 때문에 기존 값을 변경하면 참조하는 값도 변경된다.
const a = { name : '귀열'};
const b = a;
a.name = 'hero';
console.log(b.name); // hero

//객체가 아닌 일반 변수는 참조를 해도 값이 변경되지 않음
let j = '귀열';
let h = a;
j = 'hero';
console.log(b); // 귀열