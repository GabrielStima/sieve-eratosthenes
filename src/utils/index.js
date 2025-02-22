export const generateInicialArray = (number) => {
    let tempArray = [];
    for (let i = 1; i <= number; i++) {
      tempArray.push(i);
    }
    return tempArray;
  } 

export const generateDivisibleTwoArray = (array) => {
    let tempArray = [...array];

    tempArray.forEach((number, index) => {
        if (number % 2 === 0 && number !== 2 || number === 1) {
            tempArray.splice(index, 1);
        }
    });

    return tempArray;
}

export const generateFinalArray = (array) => {
    let finalArray = [...array];

    finalArray.forEach(element => {
        if(element === 2) return;

        finalArray.forEach((number, index) => {
            if (number % element === 0 && number !== element) {
                finalArray.splice(index, 1);
            }
        })
    })

    return finalArray;
} 