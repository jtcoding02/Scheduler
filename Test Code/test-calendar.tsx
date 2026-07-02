

const changeSelectedMonth = 
    (year: number, month: number, dateDay: number, 
        prevMonth: boolean, tempBool: boolean, savedDay : number) => {
        //let month be 07
        // year be 2026
        //let dateDay be 31
        //original selected month is month and year before any changes
        //the goal function
        let m = month;
        let y = year;
        

        //0 is Jan, 11 is Dec
        if(prevMonth){
            if(m === 0){
                y = y - 1;
                m = 11;
            }
            else{
                m = m - 1 ;
            }
        }
        else{
            if(m === 11){
                y += 1;
                m = 0;
            }
            else{
                m = m + 1;
            }
        }

        //new month

        //d/dateday/selected date is what is the current highlighted day, 
        // not guarantee is the current actual selected / current day by the user
        //savedDay is actual selected day / current day
        //  not guaranteed the current reflected date in user interface

        let d = dateDay;
        //this is the number of days of the month and year that was selected before pressing arrow button
        const endDay = getDaysInMonth(month, year);
        //this is the number of days of the month and year that appeared after arrow button
        const newEndDay = getDaysInMonth(m, y);

        const newChangedDate = new Date(y, m, d);
    

        //If prev mon < saved day
        if(tempBool){
            //31 -> 30, 
            //if 28 
            if(newEndDay < savedDay && newEndDay < endDay){
                //TEMP BOOL REMAINS TRUE
                //SAVED DAY IS TRUE
                setSelectedDate(new Date(y, m, newEndDay));
            }
            //if 31 -> 28,
            //if 30
            else if(newEndDay < savedDay){
                setSelectedDate(new Date(y, m, endDay));
            }
            //
            //saved Day: 30 -> endDay -> 28
            //if newEndDay => savedDay
            //if newEndDay >
            else{
                setSelectedDate(new Date(y, m, savedDay));
                setTempDayBool(false);
            }
        }

        //If prev mon >= saved day
        else{
            //check curr mon >= or < day
            if(newEndDay < savedDay && newEndDay < endDay){
                //TEMP BOOL REMAINS TRUE
                //SAVED DAY IS TRUE
                setTempDayBool(true);
                setSelectedDate(new Date(y, m, newEndDay));
            }
            //if 31 -> 28,
            //if 30
            else if(newEndDay < savedDay){
                setSelectedDate(new Date(y, m, endDay));
            }
            //
            //saved Day: 30 -> endDay -> 28
            //if newEndDay => savedDay
            //if newEndDay >
            else{
                setSelectedDate(new Date(y, m, savedDay));
                setTempDayBool(false);
            }
            changeSavedDay(dateDay);                                            
            setSelectedDate(new Date(y, m, dateDay));
        }


        
    }
