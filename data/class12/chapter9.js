// Class 12 - Chapter 9: Differential Equations
const class12Chapter9 = {
    reading: [
        { question: "What is a differential equation?", answer: "An equation involving a function and its derivatives." },
        { question: "Order of differential equation?", answer: "The highest order derivative present in the equation." },
        { question: "Degree of differential equation?", answer: "The power of the highest order derivative, after removing radicals and fractions." },
        { question: "General solution?", answer: "Solution containing arbitrary constants equal to the order of the differential equation." },
        { question: "Particular solution?", answer: "Solution obtained by assigning values to arbitrary constants using initial/boundary conditions." },
        { question: "Formation of differential equations?", answer: "Eliminate arbitrary constants from given family of curves to form the differential equation." },
        { question: "Separable differential equations?", answer: "dy/dx = f(x)g(y), separate variables and integrate: ∫1/g(y) dy = ∫f(x) dx." },
        { question: "Homogeneous differential equations?", answer: "dy/dx = F(y/x) or can be reduced to form dy/dx = F(v) using substitution y=vx." },
        { question: "Linear differential equation?", answer: "dy/dx + P(x)y = Q(x), solution using integrating factor method." },
        { question: "Integrating factor (IF)?", answer: "IF = e^∫P(x) dx, used to solve linear DE." },
        { question: "Exact differential equation?", answer: "M(x,y) dx + N(x,y) dy = 0 is exact if ∂M/∂y = ∂N/∂x." },
        { question: "Solution of exact DE?", answer: "Find F(x,y) such that dF = M dx + N dy; solution F(x,y)=C." },
        { question: "Initial value problem?", answer: "Differential equation with given value(s) of function or derivative at some point." },
        { question: "Applications?", answer: "Growth and decay, motion, temperature change, circuits, population models." },
        { question: "Tips?", answer: "Check type of DE first, choose method (separable, linear, exact, substitution)."},
        { question: "Common mistakes?", answer: "Sign errors, incorrect integrating factor, wrong separation of variables." },
        { question: "Higher order DE?", answer: "Involves derivatives of order 2 or more." },
        { question: "Check solution?", answer: "Differentiate solution and substitute back into original DE." },
        { question: "Linear non-homogeneous DE?", answer: "dy/dx + P(x)y = Q(x), Q(x) ≠ 0." },
        { question: "Homogeneous solution of linear DE?", answer: "Solution of dy/dx + P(x)y = 0." }
    ],
    test: [
        { question: "Order of dy/dx + y = 0?", options: ["1", "2", "0", "Cannot say"], correct: 0 },
        { question: "Degree of (dy/dx)² + y = 0?", options: ["2", "1", "0", "Cannot say"], correct: 0 },
        { question: "Separable DE dy/dx = xy?", options: ["Yes", "No", "Sometimes", "Cannot say"], correct: 0 },
        { question: "Linear DE dy/dx + P(x)y = Q(x)?", options: ["Yes", "No", "Sometimes", "Cannot say"], correct: 0 },
        { question: "Integrating factor IF = e^∫P(x)dx used for?", options: ["Linear DE", "Separable DE", "Exact DE", "Any DE"], correct: 0 },
        { question: "Exact DE condition?", options: ["∂M/∂y = ∂N/∂x", "M=N", "∂M/∂x = ∂N/∂y", "None"], correct: 0 },
        { question: "Particular solution?", options: ["Assign constants using initial conditions", "General solution", "Any solution", "Cannot determine"], correct: 0 },
        { question: "Homogeneous DE dy/dx = F(y/x)?", options: ["Yes", "No", "Sometimes", "Cannot say"], correct: 0 },
        { question: "Check solution of DE by?", options: ["Substitute back into DE", "Integrate", "Differentiate only", "Use graph"], correct: 0 },
        { question: "Application of DE?", options: ["Population growth", "Area under curve", "Slope of tangent", "Volume of solid"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter9 = class12Chapter9;
