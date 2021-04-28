"use strict";

/*
Giving the right name
1. Create a variable with the name of our planet. How would you name such a variable?
2. Create a variable to store the name of a current visitor to a website. How would you name that variable? 
*/
let planetEarth;
let currentVisitorName;

//What is the output of the script?
let name = "Ilya";
console.log(`hello ${1}`); // ktpi hello 1;
console.log(`hello ${"name"} `); // ktpi hello name
console.log(`hello ${name}`); // ktpi hello Ilya

//What is the code below going to output?

alert(null || 2 || undefined); // կտպի 2, քանի որ ձախից գալուց առաջին true արժեք ունեցողը 2-ն է

//What will the code below output?

alert(alert(1) || 2 || alert(3)); // կտպի սկզբից 1/կանի alert(1)-ը, հետո 2, քանի որ ձախից առաջին alert(1)-ը արժեք չի վերադարձնում, վերադարձնում է undefined, հետևաբար ստուգում է 2-ը, որը true է, և տպում է 2-ը/նայել եմ լուծումը/

//What is this code going to show?

alert(1 && null && 2); // կտպի null, քանի որ ձախից առաջին 1-ը true է, հաջորդ null-ը արդեն false է, => կտպի null

//What will this code show?

alert(alert(1) && alert(2)); // սկզբից կտպի 1/կանի alert(1)-ը/, հետո քանի որ alert(1)-ը վերադարձնում է undefined, կտպի undefined /undefined-ը falsy value է/

//What will the result be?

alert(null || (2 && 3) || 4); // կտպի 3
// &&-ը գերակայություն ունի ||-ի նկատմամբ, առաջինը նայում ենք &&-ը
//2 && 3, կվերադարձնի 3 /2-րդ true-ն/
//հետո կաշխանտեն կամ-երը, ձախից առաջին null-ի վրայով կանցնի, կհանդիպի 3-ին /առաջին true-ին/ ու կտպի 3-ը

let str = "stringify";
console.log(str.slice(0, 6)); // 'strin', the substring from 0 to 5 (not including 5)
console.log(str.slice(3, 8)); // 's', from 0 to 1, but not including 1, so only character at 0

/*Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.*/

if (age >= 14 && age <= 90) if (age < 14 && age > 90); //??

/*
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?
*/

if (-1 || 0) alert("first"); // alert-ը կաշխատի, քանի որ -1-ը true ա, կամ-ի մեջ true կա, => պայմանը true ա
if (-1 && 0) alert("second"); // alert-ը չի աշխատի, -1-ը թրու  ա, բայց 0-ն ֆոլս ա, հետևաբար պամանը ֆոլս ա
if (null || (-1 && 1)) alert("third"); // ալերտը կաշխատի
//ստուգում ա և-ի պայմանը, երկուսն էլ թրու են, հետևաբար մնում ա վերջին թրու 1-ը, հիմա ստուգում ա կամը, null-ը ֆոլս ա, բայց վերոնշյալ 1-ը թրու ա, հետևաբար պայմանը ճիշտ ա

//Check the login
//prompt chi toxum kirarem, asum a prompt is not defined

//klorancman sxal

//alert( 1.35.toFixed(1) ); // 1.4
// but
//alert( 6.35.toFixed(1) ); // 6.3
//why?
//որովհետև կետիկով թվերը, որ պահվում են 2ական համակարգով, այդ համակարգում անվերջ երկար թվեր են, ու իրականում գրված երևացող թվերից հետո գալիս են այլ թվեր, ու այդ թվերից կախված կլորացնելուց արժեքը փոխվում է
//How can we fix the problem with 6.35 if we want it to be rounded the right way?
console.log((6.35 * 10).toFixed(20)); // ktpi 63.50000000000000000000, vorovhetev 0.5-y chi popoxvum 2akan hamakargum
// hima vor stananq 6.35-i jisht kloracum mi tvanshanov, kanenq ayspes
console.log(Math.round(6.35 * 10) / 10); // math.roundi mej kmna 63.5, durs kga 64, 64n el bajanac 10i kstacvi 6.4, inchn el mez petq e

//arajin tari mecatar sarqel
//menq chenq karox popoxel stringy qani vor ayn anpopoxeli e, ayd patjarov stexcum en nor string, vori arajin tary mer stringi arajin tarn e, bayc mecacrac, yev dran kpcnum enq naxnakan stringi 2rdic minchev verjin tarery
let newStr = str[0].toUpperCase() + str.slice(1);

//checkspam

function checkSpam(str) {
  let lowerStr = str.toLowerCase(); // mer stringy sarqum a poqratar

  return lowerStr.includes("viagra") || lowerStr.includes("xxx"); // yete mer stringy parua=nakum a 'viagra', miangamic talis a true
  //yete chi parunakum 'viagra', stugum a ardyoq parunakum a 'xxx', yete ayo, talis a true, yete voch, talis a false
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));

//stringi yerkarutyan sahmanapakum '...'ov

function truncate(str, maxlength) {
  //funkcian stanum a stringy u tuylatreli maximal yerkarutyuny
  return str.length > maxlength //yete mer stringi yerkarutyuny mec a max-ic, apa stringi skzbic minchev tuylatreli yerkarutyun-1 vercnum a u koxqic grum a '...'
    ? str.slice(0, maxlength - 1) + "…"
    : str; // yete mer stringi yerkarutyuny mec chi max-ic, uxxaki tpum a stringy
}

//dolari nshani heracum

function extractCurrencyValue(str) {
  //stanum a mer $000 tipi stringy
  return +str.slice(1); // veradarcnum a arajin nshany, aysinqn '$'-y hanac
}
