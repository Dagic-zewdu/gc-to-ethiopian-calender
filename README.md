# What is this?

It is package that Converts Gregorian calendar to ethiopian. And also Ethiopian calendar to Gregorian calendar. Ethiopian calendar is unique for having 13 months, 12 months each with 13 days and 1 more month with 5 or 6 days. It is also 7/8 years behind the European/Gregorian calendar.
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
const someDay=toEthiopianDateString('2022-02-28T20:58:22.272Z')

console.log(dateNow) // እሁድ 20 የካቲት 2014
console.log(dayToday) // እሁድ
console.log(monthOfTOday) //የካቲት
console.log(gcDate) // Sun, 27 Feb 2022
console.log(someDay) // ሰኞ 21 የካቲት 2014
```


Huge thanks to [Ethio-European Date Converter](https://www.npmjs.com/package/ethiopian-calendar-date-converter)
