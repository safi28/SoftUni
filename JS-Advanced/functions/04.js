function health() {
    let mainInfo = {};

    let personalInfo = {
        name: arguments[0],
        age: arguments[1],
        weight: arguments[2],
        height: arguments[3]
    };

    mainInfo['name'] = personalInfo.name;
    delete personalInfo.name;
    mainInfo['PersonalInfo'] = personalInfo;

    let w = personalInfo.weight;
    let h = personalInfo.height;
    let bmi = Math.round(w / Math.pow(h / 100, 2));

    let hght = {
        'underweight': bmi < 18.5,
        'normal': bmi < 25,
        'overweight': bmi < 30,
        'obese': bmi >= 30,
    }
    let status;
    for (let line in hght) {
        let l = hght[line];
        if (l) {
            status = line;
            break;
        }
    }

    mainInfo['BMI'] = bmi;
    mainInfo['status'] = status;
    if (status === 'obese') {
        mainInfo['recommendation'] = 'admission required';
    }
    return mainInfo;

}
console.log(health('Honey Boo Boo', 9, 57, 137))