// Class 11 - Chapter 14: Statistics
const class11Chapter14 = {
    reading: [
        { question: "What is statistics?", answer: "Science of collecting, organizing, analyzing, and interpreting data." },
        { question: "Types of data?", answer: "Qualitative (categorical) and Quantitative (numerical) data." },
        { question: "Mean?", answer: "Average of data values; sum of observations divided by number of observations." },
        { question: "Median?", answer: "Middle value when data is arranged in ascending/descending order; for even n, average of two middle values." },
        { question: "Mode?", answer: "Observation occurring most frequently in data set." },
        { question: "Range?", answer: "Difference between maximum and minimum values." },
        { question: "Variance?", answer: "Measure of dispersion; average squared deviation from mean." },
        { question: "Standard deviation?", answer: "Square root of variance; measures spread of data." },
        { question: "Grouped data?", answer: "Data arranged in intervals (classes) with frequency counts." },
        { question: "Histogram?", answer: "Bar graph representing frequency distribution of grouped data."},
        { question: "Frequency polygon?", answer: "Line graph connecting midpoints of class intervals against frequency."},
        { question: "Ogive?", answer: "Cumulative frequency graph."},
        { question: "Tips?", answer: "Always arrange data, check class intervals, use formula carefully."},
        { question: "Common mistakes?", answer: "Misidentifying class boundaries, wrong cumulative frequency, calculation errors."},
        { question: "Applications?", answer: "Economics, business, research, social science, weather prediction."},
        { question: "Population vs sample?", answer: "Population: all elements; Sample: subset of population."},
        { question: "Measures of central tendency?", answer: "Mean, Median, Mode."},
        { question: "Measures of dispersion?", answer: "Range, Variance, Standard deviation."},
        { question: "Check solution?", answer: "Verify sum of frequencies, recalculate mean/median/mode."},
        { question: "Data representation?", answer: "Tables, charts, graphs, pictograms."}
    ],
    test: [
        { question: "Mean of 2, 4, 6, 8, 10:", options: ["6", "5", "7", "8"], correct: 0 },
        { question: "Median of 3, 7, 5, 9, 11:", options: ["7", "5", "9", "6"], correct: 0 },
        { question: "Mode of 2, 3, 4, 2, 5:", options: ["2", "3", "4", "5"], correct: 0 },
        { question: "Range of 5, 9, 12, 7, 3:", options: ["9", "12", "8", "7"], correct: 0 },
        { question: "Variance of 2,4,6:", options: ["4", "2", "6", "8"], correct: 0 },
        { question: "Standard deviation of 1,3,5,7:", options: ["√5", "2", "√2", "√3"], correct: 0 },
        { question: "Cumulative frequency of data 2,3,5,7:", options: ["2,5,10,17", "2,3,5,7", "1,2,3,4", "None"], correct: 0 },
        { question: "Histogram represents:", options: ["Frequency distribution", "Mean", "Median", "Mode"], correct: 0 },
        { question: "Frequency polygon uses:", options: ["Midpoints of class intervals", "Class boundaries", "Mode", "Mean"], correct: 0 },
        { question: "Ogive shows:", options: ["Cumulative frequency", "Frequency", "Range", "Median"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter14 = class11Chapter14;
