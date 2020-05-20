function health(name, age, weight, height) {
    let status;
    let bmi = Math.round(weight / Math.pow(height / 100, 2));

    if (bmi < 18.5) {
        status = 'underweight'
    } else if (bmi < 25) {
        status = 'normal'
    } else if (bmi < 30) {
        status = 'overweight'
    } else {
        status = 'obese';
    }
    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: status
    }

    if (status === 'obese') {
        patient['recommendation'] = 'admission required';
    }
    return patient;

}
console.log(health('Peter', 29, 75, 12));
