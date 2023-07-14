// 1. Ədədlərdən ibarət olan bir massiv yaradın və onun uzunluğun iki dəfə azaldın.
let arr1 = [1, 2, 3, 4];
arr1.length = arr1.length / 2
console.log( arr1); 

//2. Massivdə yerləşən bütün ədədlərin cəmini tapın.

 let arr = [3, 5, 7, 9]; 
let sum = 0; 

for (let i = 0; i < arr.length; i++) {
  sum += arr[i]; 
}
console.log( sum); 

//3.Massivdə yerləşən ən böyük və ən kiçik ədədi tapın.
let ToArray = [14, 3, 4, 1, 7]; 
let min = ToArray[0];
let max = ToArray[0]; 

function GetMinMax() {
    for (let i = 1; i < ToArray.length; i++) {
        if (ToArray[i] < min) {
          min = ToArray[i]; 
      }
      if (ToArray[i] > max) {
          max = ToArray[i]; 
      }
    }
}
console.log(min); 
console.log(max); 

//4. Massivdə yerləşən bütün tək və cüt ədədlərı ayrı massivlərə 
let Number = [2, 3, 4, 5, 6]
let OddNumbers =[]
let EvenNumbers = []

for (let i = 0; i < Number.length; i++) {
    if (Number[i] % 2 === 0) {
        EvenNumbers.push(Number[i]); 
    } else {
        OddNumbers.push(Number[i]); 
    }
  }
  console.log(EvenNumbers);
  console.log(OddNumbers);

  //5.Massivdə yerləşən ədələri böyükdən kiçiyə və kiçikdən böyüyə çeşidliyin.
  //yaza bilmedim

  //6. Massivdən false deyimli (undefined, null, false və s.i.) elementləri silib yeni
  // massiv qaytaran funksiya yazın.

  //let code = [false, 5, underfiend, 7, null, 10]
 // let filtercode = filterFalsyElements(code)
  //function filterFalsyElements(arr) {
  // return arr.filter()
 // }
  // console.log(filtercode) 
 
// netice vermedi

//7.Massivdə yerləşən elementləri reverse edən funksiya yazın
let arr4 = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(arr4);

function reverseArray(arr) {
    return arr.reverse();
  }
  console.log(reversedArray)