//SCENARIO 1
// MONTH 1: 31 MM YYYY
// MONTH 2: 30 MM YYYY
// MONTH 3: 28 MM YYYY

//SCENARIO 2: 
// MONTH 1: 30 MM YYYY
// MONTH 2: 31 MM YYYY
// MONTH 3: 28 MM YYYY

//SCENARIO 3:
// MONTH 1: 31 MM YYYY
// MONTH 2: 28 MM YYYY
// MONTH 3: 30 MM YYYY

//SCENARIO 4:
// MONTH 1: 30 MM YYYY
// MONTH 2: 28 MM YYYY
// MONTH 3: 31 MM YYYY

//SCENARIO 5:
// MONTH 1: 28 MM YYYY
// MONTH 2: 30 MM YYYY
// MONTH 3: 31 MM YYYY

//SCENARIO 6:
// MONTH 1: 28 MM YYYY
// MONTH 2: 31 MM YYYY
// MONTH 3: 30 MM YYYY

//Logic
//MONTH 1 -> PREV MONTH
//MONTH 2 -> CURR MONTH
//MONTH 3 -> NEXT MONTH

//Relevant Values
//year: number
//month: number
//dateDay: number
//prevMonth: boolean 
//tempBool: boolean
//savedDay: number

//Current Selected Date
//The date currently highlighted
//and displayed 
//dateDay-month-year

//Saved Day
// the day last selected by the user, 
// or the current default date

//Prev Month is a boolean to determine
//if user selected the (previous <) button
//or if user selected the (next >) button
//If true then user wants to go to prev month
//If false then user wants to go to next month

//If prev month is selected 
// if(prevMonth){
//Checks if Jan, because if Jan, need to reduce year and reset month to Dec
//     if(m === 0){
//         y = y - 1;
//         m = 11;
//     }
//     else{
//         m = m - 1 ;
//     }
// }
//If prev month is not selected, move date up to one month
//If Dec, then increase year by one year, and reset to Jan
// else{
//     if(m === 11){
//         y += 1;
//         m = 0;
//     }
//     else{
//         m = m + 1;
//     }
// }

//month year is the month and year of prev current selected date
//m, y is the month and year of the new updated current selected date

//endDay is the days of the month and year of the prev selected date
//newEndDay is the number of days of the month and year of the updated current selected date


//Temp Bool
//Temp boolean is meant to note that user should refer to the saved day
//And that selected day are not the current actual last selected date by user or current day

//Example
//If days are 31, 30, 28
//Scenario 1:
//1st month, 31 Dec 2026
//2nd Month, 30 Jan 2027
//3rd Month, 28 Feb 2027
//4th Month, 30 Mar 2027
//5th Month, 31 Apr 2027

//Scenario 2:
//1st month, 31 Dec 2026
//2nd Month, 30 Jan 2027
//3rd Month, 28 Feb 2027
//4th Month, 31 Mar 2027
//5th Month, 30 Apr 2027


//1st month,
//31 is selected and saved
//Currently is temp bool is false

//Next button is pressed
//Now 2nd month,
//Check if temp bool is false or true
//If temp bool is false
//That means saved day not relevant yet
//Dateday is correct and accurate

//endDay is the number of days of prev curr month and year
//newEndDay is the number of days of new curr month and year (m, y)

//If temp bool is false
//selected day pre change should be === saved day
//If temp bool is true
//Selected day not the same as saved day in prev current month
//but that ofc can change

//Scenario 1:

//31 -> 31 -> 31 dec -> 30 jan -> 28 feb -> 30 

//Date 31 nov to 31 dec

//year: 2026, month: 10, dateDay: 31, prevMonth: false, tempBool: false, savedDay: 31 (from earlier months)
//If temp bool is false
//means saved day same w date day
//set m = month, y = year

//check first if prev month is true or false
//since prev month is false
// check if m === 11, as month is 10, increase to 11
//month = 10, year = 2026, m = 11, y = 2026

//get days in month of prev month (10)
// end day of month 10 / nov == 31
// new day of month 11 / dec == 31

//temp bool is false
//means saved day and date day is same
//if(temp bool === false) -> if(saved day == selected day)

//dont need to check for end day bc saved day and selected day is enough for end day
//is new end day >= savedday or new end day < saved day

//if new end day >= saved day
// selected date = (y, m, dateday/savedday)
//tempbool alr false and saved day === alr selected day
//end

//if new end day < saved day

//move on 

//first is selected day >= end day or selectedday < new end day
//

//Assuming
//that means endDay is def >= selected day


//First update saved date or dateDay
//First is new End day < then end day
//If new end day is 28  < 30 then the selected day would need to change
//If new end day >= 30 then the selected day does not need to change 
//If new end day is == 30 then selected day same
//If new end day is more > 30 aka 31 > 30, 
//then check if new end day is >= saved day,




