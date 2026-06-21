
import React, {Component, useState} from 'react';


function getDaysInMonth(month : number, year : number) {
    return month===2 ? year & 3 || !(year%25) && year & 15 ? 28 : 29 : 30 + (month+(month>>3)&1);
}

function endOfMonth(myDate : Date){
  let date = new Date(myDate);
  date.setDate(1); // Avoids edge cases on the 31st day of some months
  date.setMonth(date.getMonth() +1);
  date.setDate(0);
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);
  return date;
}

export default endOfMonth;