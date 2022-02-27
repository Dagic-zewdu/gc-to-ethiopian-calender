const {ethDateTime,converterDateTime,converterString} = require('./date')

/**
 * converts ethiopian date to gregorian calender 
 * @param {dd:number} dd-  number  from 1 to 7 
 * @param {mm:number} mm- number from 1 to 12
 * @param {*} yyyy- year  
 * @param {*} hr- optional parameter 
 * @param {*} min-optional parameter 
 * @param {*} sec -optional parameter
 * @returns gregorian in iso string
 */
const convertToGC=(dd,mm,yyyy,hr,min,sec)=>{
    let Hr=hr?hr:1
    let Min=min?min:0
    let Sec=sec?sec:0
   const eth=new ethDateTime(dd,mm,yyyy,Hr,Min,Sec)
   const ethDate=converterDateTime.toEuropean(eth)
   const gr=new Date(ethDate)
   const date=gr.toUTCString().slice(0,16)
   return date
}
const toEthiopianMonthString=DATE=>{
    const date=new Date(DATE?DATE:Date.now())
    const Month=parseInt(converterDateTime.toEthiopian(date).month)
    const month=Month===1?'መስከረም':Month===2?'ጥቅምት':Month===3?'ህዳር':Month===4?'ታህሳስ':
    Month===5?'ጥር':Month===6?'የካቲት':Month===7?'መጋቢት':Month===8?'ሚያዝያ':Month===9?'ግንቦት':
    Month===10?'ሰኔ':Month===11?'ሐምሌ':Month===12?'ነሐሴ':Month===13?'ጳጉሜ':'' 
    return month 
}
const toEthiopianDayString=DATE=>{
    const date=new Date(DATE?DATE:Date.now())
    const day=parseInt(date.getUTCDay())
    const ken=day===1?'ሰኞ':day===2?'ማክሰኞ':day===3?'ረቡዕ':day===4?'ሐሙስ':
        day===5?'አርብ':day===6?'ቅዳሜ':day===0?'እሁድ':day===7?'እሁድ':'' 
    return ken 
}
/**converts gregorian calender to ethiopian calender
 * @param {*} DATE- can be empty(returns to days date) or number or iso format 
 * @returns string- 20 የካቲት 2014 
 */
const toEthiopianDateString=(DATE)=>{
    const date=new Date(DATE?DATE:Date.now())
    const day=parseInt(date.getUTCDay())
    const ken=day===1?'ሰኞ':day===2?'ማክሰኞ':day===3?'ረቡዕ':day===4?'ሐሙስ':
        day===5?'አርብ':day===6?'ቅዳሜ':day===0?'እሁድ':day===7?'እሁድ':''
    const Month=parseInt(converterDateTime.toEthiopian(date).month)
    const DAte=parseInt(converterDateTime.toEthiopian(date).date) 
    const {year}=converterDateTime.toEthiopian(date)
    const month=Month===1?'መስከረም':Month===2?'ጥቅምት':Month===3?'ህዳር':Month===4?'ታህሳስ':
   Month===5?'ጥር':Month===6?'የካቲት':Month===7?'መጋቢት':Month===8?'ሚያዝያ':Month===9?'ግንቦት':
   Month===10?'ሰኔ':Month===11?'ሐምሌ':Month===12?'ነሐሴ':Month===13?'ጳጉሜ':''   
  return ken+' '+DAte+' '+month+' '+year  
}

module.exports={convertToGC,toEthiopianDateString,toEthiopianMonthString,toEthiopianDayString}