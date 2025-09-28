// Class 12 - Chapter 14: Linear Programming
const class12Chapter14 = {
    reading: [
        { question: "What is Linear Programming (LPP)?", answer: "A method to achieve the best outcome (maximum or minimum) in a mathematical model whose requirements are represented by linear relationships." },
        { question: "Components of LPP?", answer: "Objective function, constraints, and non-negative variables." },
        { question: "Objective function?", answer: "Function to be maximized or minimized, e.g., Z = ax + by." },
        { question: "Constraints?", answer: "Linear inequalities representing restrictions on resources." },
        { question: "Feasible region?", answer: "Set of all points satisfying constraints; typically a convex polygon in 2D." },
        { question: "Corner point theorem?", answer: "Optimal solution occurs at a vertex (corner point) of the feasible region." },
        { question: "Graphical method?", answer: "Used for two-variable LPP: plot constraints, identify feasible region, evaluate objective function at corners." },
        { question: "Steps to solve LPP graphically?", answer: "1. Identify variables, 2. Formulate objective and constraints, 3. Draw feasible region, 4. Find vertices, 5. Evaluate objective function." },
        { question: "Slack and surplus?", answer: "Slack = unused resources in ≤ constraints; Surplus = excess in ≥ constraints." },
        { question: "Bounded and unbounded feasible region?", answer: "Bounded = finite region; Unbounded = extends infinitely in some direction." },
        { question: "Infeasible solution?", answer: "No point satisfies all constraints." },
        { question: "Multiple optimal solutions?", answer: "Occurs when objective function line is parallel to one edge of feasible region." },
        { question: "Real-life applications?", answer: "Production, diet, transportation, workforce scheduling, cost minimization." },
        { question: "Tips?", answer: "Always check non-negativity, correctly identify feasible region, calculate corner points accurately." },
        { question: "Common mistakes?", answer: "Wrong feasible region, missing corner points, calculation errors." },
        { question: "Alternative method?", answer: "Simplex method for more than 2 variables." },
        { question: "Feasible solution?", answer: "Any point within the feasible region that satisfies all constraints." },
        { question: "Optimal solution?", answer: "Feasible solution giving max or min value of objective function." },
        { question: "Graphing inequalities?", answer: "Use solid line for ≤ or ≥, dashed for < or >; shade appropriate side." },
        { question: "Check solution?", answer: "Substitute back into constraints to ensure all satisfied." }
    ],
    test: [
        { question: "Objective function Z=3x+4y, constraints x≥0, y≥0, x+y≤4. Feasible region vertices?", options: ["(0,0),(0,4),(4,0)", "(0,0),(2,2),(4,0)", "(0,0),(0,4),(2,2)", "(1,1),(0,0),(4,0)"], correct: 0 },
        { question: "Max Z occurs at?", options: ["One of the vertices of feasible region", "Inside the region", "Outside region", "Anywhere"], correct: 0 },
        { question: "Slack variable represents?", options: ["Unused resources", "Used resources", "Objective function", "Constraint"], correct: 0 },
        { question: "Feasible region is bounded if?", options: ["Region enclosed by constraints", "Region extends infinitely", "No region", "Region is a point"], correct: 0 },
        { question: "Infeasible LPP?", options: ["No solution satisfies all constraints", "Max Z exists", "Min Z exists", "All points feasible"], correct: 0 },
        { question: "Multiple optimal solutions occur when?", options: ["Objective function line parallel to an edge", "Feasible region is a triangle", "All constraints equal", "No feasible region"], correct: 0 },
        { question: "Graphical method used for?", options: ["Two-variable LPP", "Three-variable LPP", "Any LPP", "Non-linear"], correct: 0 },
        { question: "Corner point theorem?", options: ["Optimal at vertex", "Optimal inside region", "Optimal outside region", "Optimal at midpoint"], correct: 0 },
        { question: "Non-negative variable means?", options: ["x≥0, y≥0", "x≤0, y≤0", "x≠0, y≠0", "x=0 only"], correct: 0 },
        { question: "Objective function is?", options: ["To maximize or minimize", "Constraint", "Feasible region", "Slack"], correct: 0 }
    ],
    broad: [
        { question: "What is Linear Programming (LPP)?", answer: "A method to achieve the best outcome in a mathematical model with linear relationships." },
        { question: "Components of LPP?", answer: "Objective function, constraints, and non-negative variables." },
        { question: "Objective function?", answer: "Function to be maximized or minimized." },
        { question: "Constraints?", answer: "Linear inequalities representing restrictions on resources." },
        { question: "Feasible region?", answer: "All points satisfying constraints; usually convex." },
        { question: "Corner point theorem?", answer: "Optimal solution occurs at a vertex of feasible region." },
        { question: "Graphical method?", answer: "Plot constraints, find feasible region, evaluate objective function at corners." },
        { question: "Slack and surplus?", answer: "Slack = unused resources; Surplus = excess in ≥ constraints." },
        { question: "Bounded vs unbounded?", answer: "Bounded = finite; Unbounded = extends infinitely in some direction." },
        { question: "Infeasible solution?", answer: "No point satisfies all constraints." },
        { question: "Multiple optimal solutions?", answer: "Occurs when objective line is parallel to an edge of feasible region." },
        { question: "Tips?", answer: "Check non-negativity, feasible region, corner points." },
        { question: "Common mistakes?", answer: "Wrong feasible region, missed corners, calculation errors." },
        { question: "Feasible solution?", answer: "Any point in feasible region satisfying constraints." },
        { question: "Optimal solution?", answer: "Feasible solution giving max or min objective function value." },
        { question: "Graphing inequalities?", answer: "Solid line for ≤/≥, dashed for </>; shade correct side." },
        { question: "Check solution?", answer: "Substitute back into constraints." }
    ],
    broadTest: [
        { question: "Objective function Z=3x+4y, constraints x≥0, y≥0, x+y≤4. Feasible region vertices?", options: ["(0,0),(0,4),(4,0)", "(0,0),(2,2),(4,0)", "(0,0),(0,4),(2,2)", "(1,1),(0,0),(4,0)"], correct: 0 },
        { question: "Max Z occurs at?", options: ["One of the vertices of feasible region", "Inside the region", "Outside region", "Anywhere"], correct: 0 },
        { question: "Slack variable represents?", options: ["Unused resources", "Used resources", "Objective function", "Constraint"], correct: 0 },
        { question: "Feasible region is bounded if?", options: ["Region enclosed by constraints", "Region extends infinitely", "No region", "Region is a point"], correct: 0 },
        { question: "Infeasible LPP?", options: ["No solution satisfies all constraints", "Max Z exists", "Min Z exists", "All points feasible"], correct: 0 },
        { question: "Multiple optimal solutions occur when?", options: ["Objective function line parallel to an edge", "Feasible region is a triangle", "All constraints equal", "No feasible region"], correct: 0 },
        { question: "Graphical method used for?", options: ["Two-variable LPP", "Three-variable LPP", "Any LPP", "Non-linear"], correct: 0 },
        { question: "Corner point theorem?", options: ["Optimal at vertex", "Optimal inside region", "Optimal outside region", "Optimal at midpoint"], correct: 0 },
        { question: "Non-negative variable means?", options: ["x≥0, y≥0", "x≤0, y≤0", "x≠0, y≠0", "x=0 only"], correct: 0 },
        { question: "Objective function is?", options: ["To maximize or minimize", "Constraint", "Feasible region", "Slack"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter14 = class12Chapter14;
