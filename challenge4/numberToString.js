module.exports = {
    numToString: numToString,
    numToString2: numToString2
}


function numToString(number){
    var stringnum = "";
    var numlength = (number + "").length;
    var num = number + "";
    var single_digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var two_digits = ["ten", "eleven", "twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var tens_multiple = ['', '','twenty', 'thirty', 'fourty','fifty','sixty','seventy','eighty','ninety'];
    var tens_power = ["hundred", "thousand"];
    var x = 0; 
    if(numlength == 1)
    {
        s = single_digits[num[x]];
        x = numlength;
    }
    while (x < numlength){
        if (numlength < 3)
        {
            t = two_digits[num[x]];
            x = numlength;
        }
    
    }
    


}
function numToString2(number){
    var stringnum = "";
    var s_number = number + ""; 
    if (number < 1){
        stringNum = "zero"
    }else {
    var hundred = s_number.substring(s_number.length-3, (s_number.length-3)+3);
    if(hundred > 0){
        stringnum = getNum(hundred) + "";
    }

    var thousand = s_number.substring(s_number.length-6, (s_number.length-6)+3);
    if(thousand > 0){
        stringnum = getNum(thousand) + "thousand";
    }

    var million = s_number.substring(s_number.length-9, (s_number.length-9)+3);
    if(million > 0){
        stringnum = getNum(million) + "million";
    }

    // var billion = s_number.substring(s_number.length-12, (s_number.length-12)+3);
    // if(billion > 0){
    //     stringnum = getNum(billion) + "billion";
    // }
}
    
 
     return stringnum; 
}
function getNum(pnumber){
    var threeDigitNum = "";
    // var s_number = number + ""; 
    var singleNum_array = ['', 'one', 'two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    var tens_array = ['', '','twenty', 'thirty', 'fourty','fifty','sixty','seventy','eighty','ninety'];
    var snum = pnumber;
    if(pnumber < 20){
        threeDigitNum = singleNum_array[pnumber];

    }else{
        //get hundred value
        var hundred = snum.substring(pnumber.length-3, (pnumber.length-3)+1);
        if(hundred > 0){
            threeDigitNum = threeDigitNum + singleNum_array[hundred] + " hundred ";
        } else {
            threeDigitNum = "";
        }

        //get tens value
        var tens = parseInt(pnumber.substring((pnumber.length-2), (pnumber.length-2)+1), 10);
        stringTens = "";
        if(tens > 0){
            stringTens = stringTens + tens_array[tens];
        }else {
            stringTens = "";
        }

        //get singles value 
        var singles = parseInt(pnumber.substring((pnumber.length-1), (pnumber.length-1)+1), 1);
        stringSingles = "";
        if(singles > 0){
            stringSingles = stringSingles + singleNum_array[singles];
        }else {
            stringSingles = "";
        }
    }

    return threeDigitNum;

} 
// 100,100, 100 
// one hundred million, one hundred thousand, one hundred