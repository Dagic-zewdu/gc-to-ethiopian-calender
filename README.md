# What is this?

Converts gregorian calendar to ethiopian calendar string

# Installation

<code>npm i gc-to-ethiopian-calendar </code>

# simple conversion

```
import {
convertToGC,
toEthiopianDateString,
toEthiopianMonthString,
toEthiopianDayString} from 'gc-to-ethiopian-calender'

/** parameters can be empty(returns todays date) or number or iso format*/
const dateNow=toEthiopianDateString()
const dayToday=toEthiopianDayString()
const monthOfTOday=toEthiopianMonthString()

const gcDate=convertToGC(20,6,2014)

console.log(dateNow) // እሁድ 20 የካቲት 2014
console.log(dayToday) // እሁድ
console.log(monthOfTOday) //የካቲት
console.log(gcDate) // Sun, 27 Feb 2022

```


Huge thanks to [Ethio-European Date Converter](https://www.npmjs.com/package/ethiopian-calendar-date-converter)
