// Class 10 - Chapter 13: Statistics
const class10Chapter13 = {
    reading: [
        { question: "What is Statistics?", answer: "Statistics is the science of collecting, organizing, summarizing, and interpreting numerical data." },
        { question: "Types of data?", answer: "Qualitative (non-numerical) and Quantitative (numerical) data." },
        { question: "Frequency distribution?", answer: "Tabular representation of data showing each value or class and its frequency." },
        { question: "Bar graph?", answer: "Graphical representation using bars of lengths proportional to frequencies." },
        { question: "Histogram?", answer: "Graphical representation of frequency distribution for continuous data using adjacent rectangles." },
        { question: "Frequency polygon?", answer: "Line graph connecting midpoints of top of bars of a histogram." },
        { question: "Ogive?", answer: "Cumulative frequency curve representing cumulative data." },
        { question: "Mean?", answer: "Average of observations: sum of all values / number of observations." },
        { question: "Median?", answer: "Middle value when data is arranged in ascending order; for even n, average of two middle values." },
        { question: "Mode?", answer: "Value occurring most frequently in data." },
        { question: "Cumulative frequency?", answer: "Sum of frequencies of all classes up to a given class." },
        { question: "Class interval?", answer: "Difference between upper and lower limits of a class." },
        { question: "Step to construct histogram?", answer: "Draw axes, mark class intervals on x-axis, frequencies on y-axis, draw rectangles." },
        { question: "Step to construct frequency polygon?", answer: "Mark midpoints of classes, plot points using frequencies, join points with lines." },
        { question: "Step to construct ogive?", answer: "Plot cumulative frequencies against upper class boundaries and join points smoothly." },
        { question: "Advantages of statistics?", answer: "Summarizes large data, helps in decision-making, useful in analysis and prediction." },
        { question: "Real-life applications?", answer: "Population studies, economics, social surveys, research, business analysis." },
        { question: "Tips for solving statistics problems?", answer: "Organize data properly, calculate frequency, cumulative frequency, choose correct formula for mean/median/mode." },
        { question: "Check results?", answer: "Verify sum of frequencies equals total number of observations; mean lies between min and max; median and mode logical." },
        { question: "Difference between mean, median, mode?", answer: "Mean = average; Median = middle value; Mode = most frequent value." }
    ],
    test: [
        { question: "Mean of 5, 10, 15, 20:", options: ["12.5", "10", "15", "20"], correct: 0 },
        { question: "Median of 2, 5, 7, 10, 12:", options: ["7", "5", "10", "6"], correct: 0 },
        { question: "Mode of 4, 4, 5, 6, 7:", options: ["4", "5", "6", "7"], correct: 0 },
        { question: "Cumulative frequency is:", options: ["Sum of frequencies up to class", "Frequency of class", "Difference of frequencies", "Average frequency"], correct: 0 },
        { question: "Histogram represents:", options: ["Continuous data", "Discrete data", "Qualitative data", "All data"], correct: 0 },
        { question: "Frequency polygon is:", options: ["Line graph", "Bar graph", "Histogram", "Pie chart"], correct: 0 },
        { question: "Ogive shows:", options: ["Cumulative frequency", "Frequency", "Mode", "Mean"], correct: 0 },
        { question: "Step in finding mean:", options: ["Add all values and divide by number", "Find middle value", "Find most frequent", "Construct graph"], correct: 0 },
        { question: "Step in finding median:", options: ["Arrange data, find middle value", "Add all values", "Most frequent value", "Draw graph"], correct: 0 },
        { question: "Step in finding mode:", options: ["Find most frequent value", "Add all values", "Find middle value", "Calculate cumulative frequency"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class10Chapter13 = class10Chapter13;
