// Class 9 - Chapter 6: Rational Algebraic Expressions
const class9Chapter6 = {
    reading: [
        { question: "What is a rational algebraic expression?", answer: "A rational algebraic expression is a fraction in which both numerator and denominator are polynomials, and the denominator is not zero." },
        { question: "What is the domain of a rational expression?", answer: "The domain is all values of the variable for which the denominator is not zero." },
        { question: "Simplifying rational expressions?", answer: "Divide numerator and denominator by their greatest common factor (GCF) to simplify." },
        { question: "Multiplication of rational expressions?", answer: "Multiply numerators together and denominators together, then simplify if possible." },
        { question: "Division of rational expressions?", answer: "Multiply the first fraction by the reciprocal of the second fraction." },
        { question: "Addition of rational expressions?", answer: "Make denominators the same, then add the numerators." },
        { question: "Subtraction of rational expressions?", answer: "Make denominators the same, then subtract the numerators." },
        { question: "Reducing to lowest terms?", answer: "Factorize numerator and denominator completely and cancel common factors." },
        { question: "Example of multiplication:", answer: "(x/2) × (4/x²) = 2/x." },
        { question: "Example of division:", answer: "(x²+2x)/(x+1) ÷ (x+2)/(x) = (x²+2x)/ (x+2) × x/(x+1)."},
        { question: "Example of addition:", answer: "1/(x+2) + 1/(x+3) = (2x+5)/((x+2)(x+3))."},
        { question: "Example of subtraction:", answer: "1/(x+3) − 1/(x+2) = −1/((x+2)(x+3))."},
        { question: "What is a complex rational expression?", answer: "A rational expression in which numerator or denominator contains a rational expression itself." },
        { question: "Reciprocal of a rational expression?", answer: "Reciprocal of a/b is b/a." },
        { question: "Rules for adding/subtracting rational expressions?", answer: "Only add/subtract when denominators are same; otherwise, find LCM of denominators." },
        { question: "Rules for multiplying/dividing rational expressions?", answer: "Multiply/divide numerators and denominators; simplify common factors." },
        { question: "Why is domain important?", answer: "To avoid division by zero and undefined expressions." },
        { question: "Factorization helps in?", answer: "Simplifying expressions and solving equations." },
        { question: "Practical applications?", answer: "Used in algebraic problem solving, ratios, rates, and engineering calculations." },
        { question: "Check simplified rational expression?", answer: "Ensure numerator and denominator have no common factors other than 1." }
    ],
    test: [
        { question: "Simplify (x²−4)/(x²−2x):", options: ["(x+2)/(x)", "(x−2)/(x)", "(x+2)/(x−2)", "(x−2)/(x+2)"], correct: 0 },
        { question: "Multiply (x/2) × (4/x²):", options: ["2/x", "4/x²", "2x", "x/2"], correct: 0 },
        { question: "Divide (x²+2x)/(x+1) ÷ (x+2)/x:", options: ["x(x+2)/(x²+2x)(x+1)", "(x²+2x)/(x+2) × x/(x+1)", "(x²+2x)/(x+1) × (x+2)/x", "x/(x²+2x)"], correct: 1 },
        { question: "Add 1/(x+2) + 1/(x+3):", options: ["(2x+5)/((x+2)(x+3))", "1/((x+2)(x+3))", "(x+5)/((x+2)(x+3))", "x/(x+2)(x+3)"], correct: 0 },
        { question: "Subtract 1/(x+3) − 1/(x+2):", options: ["−1/((x+2)(x+3))", "1/((x+2)(x+3))", "1/(x+2)", "1/(x+3)"], correct: 0 },
        { question: "Reciprocal of x/(x+1):", options: ["x+1/x", "x/(x+1)", "1/(x+1)", "x"], correct: 0 },
        { question: "Domain of 1/(x−3):", options: ["x≠3", "x=3", "x>3", "x<3"], correct: 0 },
        { question: "Simplify (x²−9)/(x+3):", options: ["x−3", "x+3", "x²−3", "x²+3"], correct: 0 },
        { question: "Multiply (x−2)/(x+1) × (x+1)/(x−3):", options: ["(x−2)/(x−3)", "(x+1)/(x−3)", "(x−2)/(x+1)", "x−2"], correct: 0 },
        { question: "Simplify (x²−4)/(x²+2x):", options: ["(x−2)/x", "(x+2)/x", "(x+2)/(x−2)", "(x−2)/(x+2)"], correct: 1 }
    ]
};

// Export for dynamic loading
window.class9Chapter6 = class9Chapter6;
