// Class 11 - Chapter 6: Linear Inequalities
const class11Chapter6 = {
    reading: [
        { question: "What is a linear inequality?", answer: "An inequality which can be written in the form ax + b < 0, ax + b ≤ 0, ax + b > 0, or ax + b ≥ 0, where a and b are real numbers and x is the variable." },
        { question: "Types of linear inequalities?", answer: "1-variable inequalities, 2-variable inequalities." },
        { question: "Solution of 1-variable inequality?", answer: "Set of all x-values that satisfy the inequality." },
        { question: "Graphical representation of 1-variable inequality?", answer: "On a number line, use open circle for < or > and closed circle for ≤ or ≥." },
        { question: "Addition/subtraction property?", answer: "Adding or subtracting the same number on both sides does not change the inequality." },
        { question: "Multiplication/division property?", answer: "Multiplying or dividing both sides by a positive number keeps inequality same; by negative number reverses inequality." },
        { question: "Example of solving 1-variable inequality?", answer: "2x + 3 ≤ 7 → 2x ≤ 4 → x ≤ 2." },
        { question: "2-variable linear inequality?", answer: "Inequality of the form ax + by ≤ c, ax + by < c, ax + by ≥ c, ax + by > c." },
        { question: "Graph of 2-variable inequality?", answer: "Graph the line ax + by = c, then shade the region satisfying the inequality." },
        { question: "Test point method?", answer: "Pick a point not on the line to check which side of the line satisfies the inequality." },
        { question: "Boundary line?", answer: "Line ax + by = c is the boundary; solid line for ≤ or ≥, dashed line for < or >." },
        { question: "Intersection of inequalities?", answer: "Graphical solution for system of inequalities is the region common to all individual solutions." },
        { question: "Applications?", answer: "Optimization, constraints in economics, linear programming." },
        { question: "Inequalities with absolute values?", answer: "|x| < a → −a < x < a, |x| > a → x < −a or x > a." },
        { question: "Important rules?", answer: "Always reverse inequality when multiplying/dividing by negative; check solution graphically if needed." },
        { question: "Word problem example?", answer: "Find x such that 3x − 5 < 7 → 3x < 12 → x < 4." },
        { question: "Graphical tip?", answer: "Always identify the boundary line and shade correctly." },
        { question: "Check solution?", answer: "Substitute a test point to ensure inequality is satisfied." },
        { question: "Open circle vs closed circle?", answer: "Open circle: < or >, Closed circle: ≤ or ≥." },
        { question: "Summary?", answer: "Linear inequalities can be solved algebraically or graphically; rules must be followed carefully." }
    ],
    test: [
        { question: "Solve 2x − 3 < 5:", options: ["x < 4", "x > 4", "x < 1", "x > 1"], correct: 0 },
        { question: "Solve −3x + 5 ≥ 2:", options: ["x ≤ 1", "x ≥ 1", "x ≤ −1", "x ≥ −1"], correct: 0 },
        { question: "Which inequality uses solid line on graph?", options: ["≤ or ≥", "< or >", "Only <", "Only >"], correct: 0 },
        { question: "Absolute value inequality |x| < 3:", options: ["−3 < x < 3", "x < −3 or x > 3", "x < 3", "x > −3"], correct: 0 },
        { question: "Absolute value inequality |x| > 2:", options: ["x < −2 or x > 2", "−2 < x < 2", "x < 2", "x > −2"], correct: 0 },
        { question: "Test point method is for:", options: ["2-variable inequalities", "1-variable inequalities", "Absolute value inequalities", "None"], correct: 0 },
        { question: "If multiply inequality by −1:", options: ["Reverse inequality", "Keep same inequality", "Add 1", "Subtract 1"], correct: 0 },
        { question: "Solve x/2 + 3 ≤ 5:", options: ["x ≤ 4", "x ≥ 4", "x ≤ 2", "x ≥ 2"], correct: 0 },
        { question: "2x + y ≤ 4 represents:", options: ["2-variable linear inequality", "1-variable linear inequality", "Quadratic inequality", "Absolute inequality"], correct: 0 },
        { question: "Graph shading shows:", options: ["Solution region", "Boundary only", "Test points", "None"], correct: 0 }
    ],
    broad: [
        { question: "What is a linear inequality?", answer: "An inequality which can be written in the form ax + b < 0, ax + b ≤ 0, ax + b > 0, or ax + b ≥ 0, where a and b are real numbers and x is the variable." },
        { question: "Types of linear inequalities?", answer: "1-variable inequalities, 2-variable inequalities." },
        { question: "Solution of 1-variable inequality?", answer: "Set of all x-values that satisfy the inequality." },
        { question: "Graphical representation of 1-variable inequality?", answer: "On a number line, use open circle for < or > and closed circle for ≤ or ≥." },
        { question: "Addition/subtraction property?", answer: "Adding or subtracting the same number on both sides does not change the inequality." },
        { question: "Multiplication/division property?", answer: "Multiplying or dividing both sides by a positive number keeps inequality same; by negative number reverses inequality." },
        { question: "Example of solving 1-variable inequality?", answer: "2x + 3 ≤ 7 → 2x ≤ 4 → x ≤ 2." },
        { question: "2-variable linear inequality?", answer: "Inequality of the form ax + by ≤ c, ax + by < c, ax + by ≥ c, ax + by > c." },
        { question: "Graph of 2-variable inequality?", answer: "Graph the line ax + by = c, then shade the region satisfying the inequality." },
        { question: "Test point method?", answer: "Pick a point not on the line to check which side of the line satisfies the inequality." },
        { question: "Boundary line?", answer: "Line ax + by = c is the boundary; solid line for ≤ or ≥, dashed line for < or >." },
        { question: "Intersection of inequalities?", answer: "Graphical solution for system of inequalities is the region common to all individual solutions." },
        { question: "Applications?", answer: "Optimization, constraints in economics, linear programming." },
        { question: "Inequalities with absolute values?", answer: "|x| < a → −a < x < a, |x| > a → x < −a or x > a." },
        { question: "Important rules?", answer: "Always reverse inequality when multiplying/dividing by negative; check solution graphically if needed." },
        { question: "Word problem example?", answer: "Find x such that 3x − 5 < 7 → 3x < 12 → x < 4." },
        { question: "Graphical tip?", answer: "Always identify the boundary line and shade correctly." },
        { question: "Check solution?", answer: "Substitute a test point to ensure inequality is satisfied." },
        { question: "Open circle vs closed circle?", answer: "Open circle: < or >, Closed circle: ≤ or ≥." },
        { question: "Summary?", answer: "Linear inequalities can be solved algebraically or graphically; rules must be followed carefully." }
    ],
    broadTest: [
        { question: "Solve 2x − 3 < 5:", options: ["x < 4", "x > 4", "x < 1", "x > 1"], correct: 0 },
        { question: "Solve −3x + 5 ≥ 2:", options: ["x ≤ 1", "x ≥ 1", "x ≤ −1", "x ≥ −1"], correct: 0 },
        { question: "Which inequality uses solid line on graph?", options: ["≤ or ≥", "< or >", "Only <", "Only >"], correct: 0 },
        { question: "Absolute value inequality |x| < 3:", options: ["−3 < x < 3", "x < −3 or x > 3", "x < 3", "x > −3"], correct: 0 },
        { question: "Absolute value inequality |x| > 2:", options: ["x < −2 or x > 2", "−2 < x < 2", "x < 2", "x > −2"], correct: 0 },
        { question: "Test point method is for:", options: ["2-variable inequalities", "1-variable inequalities", "Absolute value inequalities", "None"], correct: 0 },
        { question: "If multiply inequality by −1:", options: ["Reverse inequality", "Keep same inequality", "Add 1", "Subtract 1"], correct: 0 },
        { question: "Solve x/2 + 3 ≤ 5:", options: ["x ≤ 4", "x ≥ 4", "x ≤ 2", "x ≥ 2"], correct: 0 },
        { question: "2x + y ≤ 4 represents:", options: ["2-variable linear inequality", "1-variable linear inequality", "Quadratic inequality", "Absolute inequality"], correct: 0 },
        { question: "Graph shading shows:", options: ["Solution region", "Boundary only", "Test points", "None"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter6 = class11Chapter6;
