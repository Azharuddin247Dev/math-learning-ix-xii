// Class 9 - Chapter 5: Polynomials
const class9Chapter5 = {
    reading: [
        { question: "What is a polynomial?", answer: "A polynomial is an algebraic expression consisting of variables and coefficients, combined using only addition, subtraction, and multiplication." },
        { question: "Degree of a polynomial?", answer: "The degree is the highest power of the variable in the polynomial." },
        { question: "What is a monomial?", answer: "A polynomial with only one term is called a monomial." },
        { question: "What is a binomial?", answer: "A polynomial with exactly two terms is called a binomial." },
        { question: "What is a trinomial?", answer: "A polynomial with exactly three terms is called a trinomial." },
        { question: "Addition of polynomials?", answer: "Add corresponding coefficients of like terms." },
        { question: "Subtraction of polynomials?", answer: "Subtract corresponding coefficients of like terms." },
        { question: "Multiplication of polynomials?", answer: "Multiply each term of the first polynomial with each term of the second polynomial and combine like terms." },
        { question: "Division of polynomials?", answer: "Use long division or synthetic division to divide one polynomial by another." },
        { question: "Factor theorem?", answer: "If f(a) = 0 for a polynomial f(x), then (x-a) is a factor of f(x)."},
        { question: "Remainder theorem?", answer: "The remainder when f(x) is divided by (x-a) is f(a)."},
        { question: "Zeroes of a polynomial?", answer: "Values of x for which f(x)=0 are called zeroes of the polynomial." },
        { question: "Examples of factorisation?", answer: "x² + 5x + 6 = (x+2)(x+3)"},
        { question: "Product of two polynomials?", answer: "(x+2)(x+3) = x² + 5x + 6"},
        { question: "Sum of two polynomials?", answer: "(x² + 3x + 2) + (2x² + x + 1) = 3x² + 4x + 3"},
        { question: "Difference of two polynomials?", answer: "(3x² + 4x + 5) - (x² + 2x + 1) = 2x² + 2x + 4"},
        { question: "Real-life application of polynomials?", answer: "Used in algebraic modeling, physics equations, and economics calculations." },
        { question: "Polynomial identity?", answer: "An equation that holds for all values of the variable, e.g., (a+b)² = a² + 2ab + b²." },
        { question: "Cubic polynomial?", answer: "A polynomial of degree 3, e.g., x³ + 2x² + x + 1." },
        { question: "Quadratic polynomial?", answer: "A polynomial of degree 2, e.g., x² + 5x + 6." }
    ],
    test: [
        { question: "Degree of x³ + 2x² + 5x + 7:", options: ["2", "3", "1", "4"], correct: 1 },
        { question: "Which is a binomial?", options: ["x² + 5", "x³ + 2x² + x + 1", "x² + 3x + 2", "x²"], correct: 0 },
        { question: "Factor of x² + 5x + 6:", options: ["x+2", "x+3", "Both x+2 and x+3", "x-2"], correct: 2 },
        { question: "Remainder when x² + 5x + 6 divided by x+2:", options: ["0", "1", "2", "3"], correct: 0 },
        { question: "Zeroes of x² − 5x + 6:", options: ["2 and 3", "1 and 6", "3 and 5", "2 and 5"], correct: 0 },
        { question: "Sum of x² + 3x + 2 and 2x² + x + 1:", options: ["3x² + 4x + 3", "x² + 4x + 3", "3x² + 3x + 2", "None"], correct: 0 },
        { question: "Difference of 3x² + 4x + 5 and x² + 2x + 1:", options: ["2x² + 2x + 4", "2x² + 3x + 4", "x² + 2x + 4", "3x² + 2x + 4"], correct: 0 },
        { question: "Polynomial identity example:", options: ["(a+b)² = a² + 2ab + b²", "x² + 2x +1", "x³ + 3x² +3x +1", "x² - 1"], correct: 0 },
        { question: "Product of (x+2)(x+3):", options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 2x + 3", "x² + 3x + 2"], correct: 0 },
        { question: "Degree of x⁴ + 3x² − 5:", options: ["2", "3", "4", "5"], correct: 2 }
    ]
};

// Export for dynamic loading
window.class9Chapter5 = class9Chapter5;
