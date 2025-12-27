interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

interface exerciseParams {
    dayHours: number[]
    target: number
}

const parseArgs = (args: string[]): exerciseParams => {
    if (args.length < 3) {
        throw new Error('Too few arguments');
    }

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            dayHours: args.slice(3).map(arg => Number(arg)),
            target: Number(args[2])
        }

  } else {
    throw new Error('Provided arguments are invalid!');
  }
}

const calculateExercises = (days: number[], target: number): Result => {
    const sum = days.reduce((acc: number, c: number) => acc + c, 0);
    const average: number = sum / days.length;
    const succ: boolean = average >= target;
    let rating: number = 0;

    if (average < target - 1) {
        rating = 1;
    } else if (average < target) {
        rating = 2;
    } else {
        rating = 3;
    }

    let ratingDescription: string;

    switch (rating) {
    case 1:
        ratingDescription = 'do better next week!';
        break;
    case 2:
        ratingDescription = 'pretty good, but target was not reached';
        break;
    default:
        ratingDescription = 'good job!';
    }

    return {
        periodLength: days.length,
        trainingDays: days.filter(day => day > 0).length,
        success: succ,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    };
};

try {
    const { dayHours, target } = parseArgs(process.argv);
    console.log(calculateExercises(dayHours, target));
} catch (error) {
    let errorMessage = 'Error occurred!';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}
