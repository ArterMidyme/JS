const checkAge = function() {
    let age_1 = prompt('Skolko tebe let?', 100);
    let age_2 = 18;
    let age_3 = 60;
    age_1 = Number(age_1)
     if (age_1 < age_2) {
         alert("You don't have access cause your age is " + age_1 + ". It's less than " + age_2);
        } else if (age_1 >= age_2 && age_1 < age_3) {
            alert("Welcome!");
        } else if (age_1 > age_3) {
            alert("Keep calm and look Culture channel");
        } else {
            alert("Error");
        }
}
checkAge();