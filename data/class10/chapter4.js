// Class 10 - Chapter 4: Rational Algebraic Expressions
const class10Chapter4 = {
    reading: [
        { question: "What is a rational algebraic expression?", answer: "A rational algebraic expression is a fraction in which the numerator and denominator are polynomials and the denominator is not zero." },
        { question: "Simplification of rational expressions?", answer: "Factor numerator and denominator, then cancel common factors." },
        { question: "Addition of rational expressions?", answer: "Find LCM of denominators, express both fractions with LCM, then add numerators." },
        { question: "Subtraction of rational expressions?", answer: "Find LCM of denominators, express both fractions with LCM, then subtract numerators." },
        { question: "Multiplication of rational expressions?", answer: "Multiply numerators together and denominators together; then simplify." },
        { question: "Division of rational expressions?", answer: "Multiply by reciprocal of the divisor and simplify." },
        { question: "LCM of algebraic expressions?", answer: "LCM is the least common multiple of denominators to simplify addition/subtraction." },
        { question: "HCF of algebraic expressions?", answer: "HCF is the highest common factor of numerator and denominator to simplify fractions." },
        { question: "Factorization techniques?", answer: "Take common factors, use identities, grouping method, or quadratic factorization." },
        { question: "Zero in denominator?", answer: "Expression is undefined if denominator becomes zero." },
        { question: "Applications?", answer: "Used in algebraic simplification, solving equations, ratios, and real-life problems involving fractions." },
        { question: "Tips for solving problems?", answer: "Always factor first, check for restrictions on variable (denominator ≠ 0), then perform operations carefully." },
        { question: "Common mistakes?", answer: "Forgetting to find LCM, dividing incorrectly, ignoring restrictions on variable." },
        { question: "Example of addition:", answer: "1/(x+1) + 1/(x−1) = (x−1 + x+1)/(x²−1) = 2x/(x²−1)."},
        { question: "Example of multiplication:", answer: "(x²−1)/(x+2) × (x+2)/(x−1) = (x²−1)/(x−1) = x+1."},
        { question: "Simplify 2x²/4x:", answer: "2x²/4x = x/2."},
        { question: "Restrictions example:", answer: "1/(x−3) is undefined if x=3."},
        { question: "Dividing expressions example:", answer: "(x²−1)/(x+2) ÷ (x−1)/(x+3) = [(x²−1)/(x+2)] × [(x+3)/(x−1)] = (x+1)(x+3)/(x+2)"},
        { question: "Rational expression in simplest form?", answer: "Expression after factoring and cancelling common factors completely." },
        { question: "Checking results?", answer: "Substitute a number not causing zero in denominator to verify simplification." }
    ],
    test: [
        { question: "Simplify (x²−1)/(x−1):", options: ["x−1", "x+1", "x²−1", "(x−1)²"], correct: 1 },
        { question: "Add 1/(x+2) + 1/(x−2):", options: ["2/(x²−4)", "4/(x²−4)", "2x/(x²−4)", "x/(x²−4)"], correct: 2 },
        { question: "Multiply (x²−4)/(x+3) × (x+3)/(x−2):", options: ["x+2", "x−2", "x²−4", "x+4"], correct: 0 },
        { question: "Divide (x²−1)/(x+2) ÷ (x−1)/(x+3):", options: ["(x+1)(x+3)/(x+2)", "x²−1", "(x−1)/(x+2)", "(x+2)/(x+3)"], correct: 0 },
        { question: "Expression undefined when denominator zero: 1/(x−5):", options: ["x=5", "x=0", "x=1", "x=−5"], correct: 0 },
        { question: "Simplify 2x²/4x:", options: ["x²/2", "x/2", "2x", "x"], correct: 1 },
        { question: "LCM needed for:", options: ["Multiplication", "Division", "Addition/Subtraction", "Simplification"], correct: 2 },
        { question: "HCF needed for:", options: ["Simplification", "Multiplication", "Division", "LCM calculation"], correct: 0 },
        { question: "Factor x²−9:", options: ["(x−3)(x+3)", "(x−9)(x+1)", "(x−1)(x+9)", "Cannot factor"], correct: 0 },
        { question: "Subtract 1/(x+1) − 1/(x−1):", options: ["2/(x²−1)", "−2/(x²−1)", "0", "1/(x²−1)"], correct: 1 }
    ],
    broad: [
        { topic: "Understanding Rational Expressions", content: "Rational algebraic expressions represent fractions of polynomials. Denominator cannot be zero. Simplifying, adding, subtracting, multiplying, and dividing requires factoring and using LCM/HCF properly." },
        { topic: "Simplification & Factorization", content: "Always factor numerator and denominator fully before canceling. Factorization techniques include common factors, identities, grouping, and quadratics." },
        { topic: "Operations on Rational Expressions", content: "For addition/subtraction, find LCM of denominators. For multiplication/division, multiply numerators and denominators, applying reciprocal for division. Always check restrictions." },
        { topic: "Restrictions & Undefined Values", content: "Expressions are undefined if denominator = 0. Identify values causing zero in denominator before simplifying." },
        { topic: "Applications", content: "Used in solving equations, algebraic simplification, ratios, and real-life fractional problems." }
    ],
    broadTest: [
        { question: "Expression undefined when denominator zero: 1/(x−4):", options: ["x=4", "x=0", "x=−4", "x=1"], correct: 0 },
        { question: "Factor x²−16:", options: ["(x−4)(x+4)", "(x−8)(x+2)", "Cannot factor", "(x−2)(x+8)"], correct: 0 },
        { question: "Add 1/(x+1) + 1/(x−1):", options: ["2x/(x²−1)", "0", "1/(x²−1)", "−2x/(x²−1)"], correct: 0 },
        { question: "Multiply (x²−9)/(x+3) × (x+3)/(x−1):", options: ["x+3", "x−3", "x−1", "x²−9"], correct: 1 },
        { question: "Divide (x²−4)/(x+2) ÷ (x−2)/(x+3):", options: ["x+2", "(x+4)/(x+1)", "(x+2)(x+3)/(x−2)", "(x+2)(x+3)/(x−2)"], correct: 3 },
        { question: "LCM is required for:", options: ["Multiplication", "Addition/Subtraction", "Division", "Simplification"], correct: 1 },
        { question: "HCF is used for:", options: ["Simplification", "LCM", "Multiplication", "Division"], correct: 0 },
        { question: "Restrictions in 1/(x−5):", options: ["x≠5", "x=5", "x>5", "x<5"], correct: 0 },
        { question: "Simplify 6x²/3x:", options: ["2x", "2", "x²", "x/2"], correct: 0 },
        { question: "Factor x²−25:", options: ["(x−5)(x+5)", "(x−25)(x+1)", "(x+25)(x−1)", "Cannot factor"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class10Chapter4 = class10Chapter4;
