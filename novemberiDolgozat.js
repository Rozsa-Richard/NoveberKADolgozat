//Disemvowel Trolls
function disemvowel(str) {
    return str.replace(/[aeiou]/ig,'');
}

//DNA to RNA Conversion
function DNAtoRNA(dna) {
    return dna.replaceAll('T','U');
}

//Fizz Buzz - Without ifs
const fizzBuzz = n => {
    switch(0){
        case (n % 3) + (n % 5):
        return "FizzBuzz";
        break;
        case (n % 3):
        return "Fizz";
        break;
        case (n % 5):
        return "Buzz";
        break;
        default:
        return n;
    }
  };

//Correct the date-string
function dateCorrect(datestring) {
    if (!datestring) return datestring;
    
    const datePattern = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    const match = datestring.match(datePattern);
    
    if (!match) return null; 

    let [ , day, month, year ] = match;
    
    day = parseInt(day, 10);
    month = parseInt(month, 10) - 1;
    year = parseInt(year, 10);

    const correctedDate = new Date(year, month, day);
    
    const correctedDay = String(correctedDate.getDate()).padStart(2, '0');
    const correctedMonth = String(correctedDate.getMonth() + 1).padStart(2, '0');
    const correctedYear = correctedDate.getFullYear();

    return `${correctedDay}.${correctedMonth}.${correctedYear}`;
  return "?";
}