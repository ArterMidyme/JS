checkAge = function(age_1) {
    let age_2 = 18;
    let age_3 = 60;
    if (typeof(age_1) == 'number') {
     if (age_1 < age_2) {
         console.log("You don't have access cause your age is " + age_1 + ". It's less than " + age_2);
        } else if (age_1 >= age_2 && age_1 < age_3) {
            console.log("Welcome!");
        } else if (age_1 > age_3) {
            console.log("Keep calm and look Culture channel");
        } 
    }   else {
        console.log("Error");
    }
}
checkAge(17);
checkAge(18);
checkAge(61);
checkAge('20');
checkAge('1f');
checkAge('f1');
checkAge('Alo');
checkAge('');
checkAge('NaN');