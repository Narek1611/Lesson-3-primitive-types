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
