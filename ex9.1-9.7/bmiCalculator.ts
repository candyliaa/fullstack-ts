interface BMIParams {
    height: number;
    weight: number;
}

const parseArguments = (args: string[]): BMIParams => {
    if (args.length > 4) {
        throw new Error('Too many arguments');
    }
    if (args.length < 4) {
        throw new Error('Too few arguments');
    }

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        };

  } else {
    throw new Error('Provided values were not numbers!');
  }
};

const calculateBmi = (height: number, weight: number): string => {
    const bmi = weight / (height / 100) ** 2;
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9 && bmi > 18.5) {
        return 'Normal range';
    } else if (bmi < 29.9 && bmi > 24.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
};

if (require.main === module) {
    try {
        const { height, weight } = parseArguments(process.argv);
        console.log(calculateBmi(height, weight));
    } catch (error) {
        let errorMessage = 'Error occurred!';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        console.log(errorMessage);
    }
};



export default calculateBmi;