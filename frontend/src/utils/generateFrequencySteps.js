export default function generateFrequencySteps(min, max, stepHz) {
    const stepsArray = [];

    for (let i = min; i <= max; i += stepHz) {
        stepsArray.push(i);
    }

    return stepsArray;
}
