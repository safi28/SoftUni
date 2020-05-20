function args(...input) {
    let arr = [];
    let argType = {};


    for (let line of input) {
        let typeOfEl = typeof line;
        arr.push(`${typeOfEl}: ${line}`);

        if (!argType.hasOwnProperty(typeOfEl)) {
            argType[typeOfEl] = 0;
        }
        argType[typeOfEl]++;

    }
    return arr.join('\n') + '\n' +
        Object.entries(argType)
            .sort((a, b) => b[1] - a[1]).forEach(element => {
                console.log(`${element[0]} = ${element[1]}`);
                
            });
           
}
console.log(args('cat', 'dog', 42, function () { console.log('Hello world!'); }));
