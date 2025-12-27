interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));