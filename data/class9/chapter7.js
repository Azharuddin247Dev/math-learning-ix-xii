// Class 9 - Chapter 7: Linear Equations in Two Variables
const class9Chapter7 = {
    reading: [
        { question: "What is a linear equation in two variables?", answer: "An equation that can be written in the form ax + by + c = 0, where a, b, and c are constants and x, y are variables." },
        { question: "What are the solutions of a linear equation in two variables?", answer: "Pairs of values (x, y) that satisfy the equation are called solutions." },
        { question: "Graphical representation?", answer: "The solutions of a linear equation in two variables form a straight line on the Cartesian plane." },
        { question: "How to find the graph?", answer: "Find at least two solutions, plot them, and draw a line through them." },
        { question: "Substitution method?", answer: "Solve one equation for one variable and substitute in the other equation to find the second variable." },
        { question: "Elimination method?", answer: "Add or subtract equations to eliminate one variable and solve for the other." },
        { question: "Cross-multiplication method?", answer: "Used to solve linear equations in two variables in the form a1x + b1y + c1 = 0 and a2x + b2y + c2 = 0." },
        { question: "Consistent system?", answer: "A system of equations having at least one solution is consistent." },
        { question: "Inconsistent system?", answer: "A system of equations with no solution is inconsistent." },
        { question: "Dependent system?", answer: "A system where equations represent the same line; infinitely many solutions." },
        { question: "Independent system?", answer: "A system where equations represent two different lines; exactly one solution." },
        { question: "Word problems?", answer: "Many real-life problems like cost, speed, age, distance can be modeled using linear equations in two variables." },
        { question: "Check solution?", answer: "Substitute values of x and y into both equations to verify." },
        { question: "Parallel lines?", answer: "Equations representing parallel lines have no solution (inconsistent system)."},
        { question: "Intersecting lines?", answer: "Equations representing intersecting lines have exactly one solution (independent system)."},
        { question: "Coincident lines?", answer: "Equations representing the same line have infinitely many solutions (dependent system)."},
        { question: "Practical applications?", answer: "Used in business, economics, geometry, and algebraic modeling of real-life situations." },
        { question: "Slope of line?", answer: "Slope = −a/b for line ax + by + c = 0." },
        { question: "Y-intercept?", answer: "Point where line intersects y-axis; x=0 gives y-intercept." },
        { question: "X-intercept?", answer: "Point where line intersects x-axis; y=0 gives x-intercept." }
    ],
    test: [
        { question: "Equation 2x + 3y − 6 = 0 is linear in:", options: ["One variable", "Two variables", "Three variables", "None"], correct: 1 },
        { question: "A solution of x + y = 5 is:", options: ["(2,3)", "(1,2)", "(3,3)", "(0,0)"], correct: 0 },
        { question: "Graph of linear equation in two variables is:", options: ["Circle", "Parabola", "Line", "Ellipse"], correct: 2 },
        { question: "Method to solve 2x + y = 5, x − y = 1:", options: ["Substitution", "Elimination", "Both", "None"], correct: 2 },
        { question: "Consistent system has:", options: ["No solution", "One or more solutions", "Infinite solutions only", "None"], correct: 1 },
        { question: "Parallel lines represent:", options: ["One solution", "No solution", "Infinite solutions", "Two solutions"], correct: 1 },
        { question: "Coincident lines represent:", options: ["No solution", "One solution", "Infinite solutions", "Two solutions"], correct: 2 },
        { question: "Independent system has:", options: ["No solution", "Exactly one solution", "Infinite solutions", "More than two solutions"], correct: 1 },
        { question: "Slope of line 3x − 2y + 6 = 0:", options: ["3/2", "−3/2", "2/3", "−2/3"], correct: 3 },
        { question: "X-intercept of 2x + 3y − 6 = 0:", options: ["3", "2", "6", "−3"], correct: 1 }
    ]
};

// Export for dynamic loading
window.class9Chapter7 = class9Chapter7;
