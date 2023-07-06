//prices of goods
const tv = 15.678;
const laptop = 123.965;
const phone = 90.2345;
console.log(tv,laptop,phone)
// max & min number
console.log(Math.max(tv,laptop,phone))
console.log(Math.min(tv,laptop,phone))
// suum of all goods
const z = (tv+laptop+phone);
console.log(z)
//cost of goods without pennies
console.log (Math.round(tv),Math.round(laptop),Math.round(phone))
//tv and laptop
const a = Math.round(tv+laptop) ;
console.log(a)
//tv and phone
const b = Math.round(tv+phone) ;
console.log(b)
//laptop and phone
const c =Math.round(laptop+phone) ;
console.log(c)
//rouding the prices down
console.log(Math.floor(tv),Math.floor(laptop),Math.floor(phone))
//rounding to hundreds
console.log(tv.toFixed(2),laptop.toFixed(2),phone.toFixed(2))
//
const y = 500;
const x =(y-z) ;
console.log(x)
//
const d = (z/3) ;
console.log(d.toFixed(2))
//discont and price
const min = 1 ;
const max = 99 ;
const price = 990 ;
const k = (max+min)*Math.random () + min ;
const l = (price-k.toFixed(2))
console.log(l)
//
const m = 990/2
const n = (m-l)
console.log(n)
//
console.log(tv,laptop,phone,(Math.max(tv,laptop,phone)),(Math.min(tv,laptop,phone)),
z,Math.round(tv),Math.round(laptop),Math.round(phone),a,b,c,Math.floor(tv),
Math.floor(laptop),Math.floor(phone),tv.toFixed(2),laptop.toFixed(2),phone.toFixed(2),
x,d.toFixed(2),l,n)