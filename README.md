# What is this?

Converts gregorian calender to ethiopian calender string

# Installation

<code>npm i gc-to-ethiopian-calender </code>

# simple conversion

````
const {toEthiopianDateString,toEthiopianDayString,toEthiopianMonthString,convertToGC}=require('./index')

// parameters can be empty(returns todays date) or number or iso format 
const dateNow=toEthiopianDateString()
//parameters can be empty(returns todays date) or number or iso format
const dayToday=toEthiopianDayString()
//parameters can be empty(returns todays date) or number or iso format
const monthOfTOday=toEthiopianMonthString()

const gcDate=convertToGC(20,6,2014)

console.log(dateNow) // እሁድ 20 የካቲት 2014
console.log(dayToday) // እሁድ
console.log(monthOfTOday) //የካቲት
console.log(gcDate) // Sun, 27 Feb 2022

```