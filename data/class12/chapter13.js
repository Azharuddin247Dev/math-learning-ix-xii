// Class 12 - Chapter 13: Statistics
const class12Chapter13 = {
    reading: [
        { question: "What is statistics?", answer: "A branch of mathematics dealing with collection, analysis, interpretation, and presentation of data." },
        { question: "Mean?", answer: "Average of data values, sum of all values divided by number of values." },
        { question: "Median?", answer: "Middle value when data is arranged in ascending or descending order." },
        { question: "Mode?", answer: "Value that occurs most frequently in the data set." },
        { question: "Variance?", answer: "Measure of spread; average of squared deviations from the mean." },
        { question: "Standard deviation?", answer: "Square root of variance; indicates how data points deviate from mean." },
        { question: "Coefficient of variation?", answer: "Ratio of standard deviation to mean, expressed as a percentage." },
        { question: "Skewness?", answer: "Measure of asymmetry of a distribution around its mean." },
        { question: "Kurtosis?", answer: "Measure of peakedness or flatness of the data distribution." },
        { question: "Empirical relationship?", answer: "Relation between mean, median, and mode: Mean − Mode ≈ 3(Mean − Median)." },
        { question: "Grouped data?", answer: "Data organized into intervals or classes with corresponding frequencies." },
        { question: "Frequency distribution?", answer: "Table showing data values or class intervals and their frequencies." },
        { question: "Tips?", answer: "Always arrange data, check frequency totals, use formulas carefully." },
        { question: "Common mistakes?", answer: "Mixing up mean, median, mode formulas; ignoring class width; calculation errors." },
        { question: "Check solution?", answer: "Verify sums, ensure variance and SD are positive, median and mode within range." }
    ],
    test: [
        { question: "Mean of 5, 10, 15, 20?", options: ["12.5", "10", "15", "20"], correct: 0 },
        { question: "Median of 3, 5, 7, 9, 11?", options: ["5", "7", "9", "6"], correct: 1 },
        { question: "Mode of 2, 4, 4, 6, 6, 6, 8?", options: ["4", "6", "2", "8"], correct: 1 },
        { question: "Variance of 2, 4, 6?", options: ["2.67", "3", "4", "5"], correct: 0 },
        { question: "Standard deviation of 2, 4, 6?", options: ["1.63", "1.5", "2", "2.5"], correct: 0 },
        { question: "Coefficient of variation formula?", options: ["SD/Mean", "Mean/SD", "Variance/Mean", "Mean×SD"], correct: 0 },
        { question: "Empirical relationship formula?", options: ["Mean−Mode=3(Mean−Median)", "Mean+Mode=Median", "Median−Mode=Mean", "Mode−Mean=3(Median−Mean)"], correct: 0 },
        { question: "Frequency distribution shows?", options: ["Data values and frequencies", "Only mean", "Only median", "Only mode"], correct: 0 },
        { question: "Grouped data is?", options: ["Data in intervals", "Single values only", "Mean only", "Mode only"], correct: 0 },
        { question: "Skewness measures?", options: ["Asymmetry", "Spread", "Central tendency", "Peakedness"], correct: 0 }
    ],
    broad: [
        { question: "Mean?", answer: "Average of data values." },
        { question: "Median?", answer: "Middle value of ordered data." },
        { question: "Mode?", answer: "Most frequent value." },
        { question: "Variance?", answer: "Average squared deviation from mean." },
        { question: "Standard deviation?", answer: "Square root of variance." },
        { question: "Coefficient of variation?", answer: "SD divided by mean." },
        { question: "Skewness?", answer: "Asymmetry of data distribution." },
        { question: "Kurtosis?", answer: "Peakedness of data distribution." },
        { question: "Empirical relationship?", answer: "Mean − Mode ≈ 3(Mean − Median)." },
        { question: "Grouped data?", answer: "Data arranged in intervals." },
        { question: "Frequency distribution?", answer: "Table of data values and frequencies." },
        { question: "Tips?", answer: "Arrange data, sum frequencies correctly, use formulas properly." },
        { question: "Common mistakes?", answer: "Confusing mean, median, mode; calculation errors." },
        { question: "Check solution?", answer: "Verify totals and SD positivity." }
    ],
    broadTest: [
        { question: "Mean of 4, 8, 12?", options: ["8", "10", "12", "6"], correct: 0 },
        { question: "Median of 1, 3, 5, 7?", options: ["3", "5", "4", "6"], correct: 2 },
        { question: "Mode of 1, 2, 2, 3, 3, 3, 4?", options: ["2", "3", "1", "4"], correct: 1 },
        { question: "Variance of 3, 5, 7?", options: ["4", "2.67", "3", "5"], correct: 1 },
        { question: "SD of 3, 5, 7?", options: ["1.63", "2", "1.5", "2.5"], correct: 0 },
        { question: "CV formula?", options: ["SD/Mean", "Mean/SD", "Variance/Mean", "Mean×SD"], correct: 0 },
        { question: "Empirical relationship?", options: ["Mean−Mode=3(Mean−Median)", "Mean+Mode=Median", "Median−Mode=Mean", "Mode−Mean=3(Median−Mean)"], correct: 0 },
        { question: "Frequency distribution shows?", options: ["Data values and frequencies", "Only mean", "Only median", "Only mode"], correct: 0 },
        { question: "Grouped data is?", options: ["Data in intervals", "Single values only", "Mean only", "Mode only"], correct: 0 },
        { question: "Skewness measures?", options: ["Asymmetry", "Spread", "Central tendency", "Peakedness"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter13 = class12Chapter13;
