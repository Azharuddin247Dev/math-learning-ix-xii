// Class 9 - Chapter 14: Statistics
const class9Chapter14 = {
    reading: [
        { question: "What is statistics?", answer: "Statistics is the branch of mathematics dealing with collection, organization, presentation, analysis, and interpretation of data." },
        { question: "Types of data?", answer: "Quantitative (numerical) and Qualitative (categorical)." },
        { question: "Primary data?", answer: "Data collected directly by observation, survey, or experiment." },
        { question: "Secondary data?", answer: "Data obtained from books, records, reports, or websites." },
        { question: "Frequency distribution?", answer: "A table showing data values and their corresponding frequencies." },
        { question: "Class interval?", answer: "A range of values grouped together in a frequency distribution." },
        { question: "Cumulative frequency?", answer: "Sum of frequencies of all classes up to a given class." },
        { question: "Mean (average)?", answer: "Sum of all observations divided by number of observations." },
        { question: "Median?", answer: "The middle value of ordered data; if even number, average of two middle values." },
        { question: "Mode?", answer: "The value which occurs most frequently in the data." },
        { question: "Grouped data formulas?", answer: "Mean = (Σf·x)/Σf; Median = L + ((N/2 − CF)/f)·h; Mode = L + ((f1−f0)/(2f1−f0−f2))·h." },
        { question: "Bar graph?", answer: "Graphical representation using rectangular bars proportional to frequencies." },
        { question: "Histogram?", answer: "Graphical representation of frequency distribution with contiguous rectangles." },
        { question: "Frequency polygon?", answer: "Line graph connecting midpoints of histogram tops." },
        { question: "Ogive?", answer: "Cumulative frequency curve." },
        { question: "Mean deviation?", answer: "Average of absolute deviations from mean." },
        { question: "Variance?", answer: "Average of squared deviations from mean." },
        { question: "Standard deviation?", answer: "Square root of variance." },
        { question: "Applications of statistics?", answer: "Used in economics, business, social science, research, sports analysis." },
        { question: "Representation of data?", answer: "Tables, charts, graphs, and diagrams." }
    ],
    test: [
        { question: "Mean of 5, 7, 9, 11:", options: ["7", "8", "8.5", "9"], correct: 1 },
        { question: "Median of 3, 5, 7, 9, 11:", options: ["5", "7", "9", "6"], correct: 1 },
        { question: "Mode of 2, 3, 3, 5, 7:", options: ["2", "3", "5", "7"], correct: 1 },
        { question: "Sum of frequencies in distribution is:", options: ["Mean", "Median", "Total frequency", "Mode"], correct: 2 },
        { question: "Cumulative frequency is:", options: ["Sum up to class", "Frequency of class", "Mean", "Mode"], correct: 0 },
        { question: "Histogram uses:", options: ["Rectangles", "Points", "Lines", "Circles"], correct: 0 },
        { question: "Ogive represents:", options: ["Cumulative frequency", "Class frequency", "Mean", "Mode"], correct: 0 },
        { question: "Bar graph is:", options: ["Rectangles proportional to frequency", "Line graph", "Pie chart", "Dot plot"], correct: 0 },
        { question: "Variance is:", options: ["Average deviation", "Average squared deviation", "Median", "Mode"], correct: 1 },
        { question: "Standard deviation is:", options: ["Variance", "Square of variance", "Square root of variance", "Mean deviation"], correct: 2 }
    ]
};

// Export for dynamic loading
window.class9Chapter14 = class9Chapter14;
