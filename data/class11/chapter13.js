// Class 11 - Chapter 13: Limits and Derivatives
const class11Chapter13 = {
    reading: [
        { question: "What is a limit?", answer: "The value that a function approaches as the input approaches a certain point." },
        { question: "Limit notation?", answer: "limₓ→a f(x) = L, meaning as x approaches a, f(x) approaches L." },
        { question: "Left-hand limit?", answer: "limₓ→a⁻ f(x), value of f(x) as x approaches a from left." },
        { question: "Right-hand limit?", answer: "limₓ→a⁺ f(x), value of f(x) as x approaches a from right." },
        { question: "Limit exists?", answer: "If left-hand and right-hand limits are equal." },
        { question: "Indeterminate forms?", answer: "0/0, ∞/∞, 0×∞, ∞−∞, 0⁰, ∞⁰, 1^∞."},
        { question: "Derivative definition?", answer: "Derivative of f at x = a is f'(a) = limₕ→0 [f(a+h)−f(a)]/h." },
        { question: "Physical meaning of derivative?", answer: "Rate of change of quantity; slope of tangent to curve." },
        { question: "Differentiation rules?", answer: "Sum, difference, product, quotient, chain rules." },
        { question: "Power rule?", answer: "d/dx[x^n] = n*x^(n−1)."},
        { question: "Constant multiple rule?", answer: "d/dx[c*f(x)] = c*d/dx[f(x)]."},
        { question: "Sum and difference rule?", answer: "d/dx[f±g] = f' ± g'."},
        { question: "Product rule?", answer: "d/dx[f*g] = f'g + fg'."},
        { question: "Quotient rule?", answer: "d/dx[f/g] = (f'g − fg') / g²."},
        { question: "Chain rule?", answer: "d/dx[f(g(x))] = f'(g(x)) * g'(x)."},
        { question: "Higher order derivatives?", answer: "Derivative of a derivative; notation f''(x), f'''(x), etc."},
        { question: "Applications?", answer: "Velocity, acceleration, maxima, minima, curve sketching."},
        { question: "Tips?", answer: "Simplify function first, apply derivative rules carefully."},
        { question: "Common mistakes?", answer: "Misapplying chain/product/quotient rules, missing negative signs."},
        { question: "Checking solution?", answer: "Compare with known derivatives and verify limits."}
    ],
    test: [
        { question: "limₓ→2 (x²−4)/(x−2):", options: ["4", "2", "1", "0"], correct: 0 },
        { question: "Derivative of x³:", options: ["3x²", "x²", "3x³", "x³"], correct: 0 },
        { question: "Derivative of sin x:", options: ["cos x", "−cos x", "sin x", "−sin x"], correct: 0 },
        { question: "Derivative of e^x:", options: ["e^x", "x*e^(x−1)", "1", "ln x"], correct: 0 },
        { question: "limₓ→0 (sin x)/x:", options: ["1", "0", "∞", "−1"], correct: 0 },
        { question: "d/dx (x² + 3x):", options: ["2x + 3", "x² + 3", "2x", "3x"], correct: 0 },
        { question: "d/dx [ln x]:", options: ["1/x", "ln x", "x", "0"], correct: 0 },
        { question: "Derivative of cos x:", options: ["−sin x", "sin x", "cos x", "−cos x"], correct: 0 },
        { question: "d/dx [x*e^x]:", options: ["e^x + x*e^x", "e^x", "x*e^x", "x^2*e^x"], correct: 0 },
        { question: "d/dx [(x² +1)/(x)]:", options: ["1 − 1/x²", "x −1", "2x/x²", "None"], correct: 0 }
    ],
    broad: [
        { question: "What is a limit?", answer: "The value that a function approaches as the input approaches a certain point." },
        { question: "Limit notation?", answer: "limₓ→a f(x) = L, meaning as x approaches a, f(x) approaches L." },
        { question: "Left-hand limit?", answer: "limₓ→a⁻ f(x), value of f(x) as x approaches a from left." },
        { question: "Right-hand limit?", answer: "limₓ→a⁺ f(x), value of f(x) as x approaches a from right." },
        { question: "Limit exists?", answer: "If left-hand and right-hand limits are equal." },
        { question: "Indeterminate forms?", answer: "0/0, ∞/∞, 0×∞, ∞−∞, 0⁰, ∞⁰, 1^∞." },
        { question: "Derivative definition?", answer: "Derivative of f at x = a is f'(a) = limₕ→0 [f(a+h)−f(a)]/h." },
        { question: "Physical meaning of derivative?", answer: "Rate of change of quantity; slope of tangent to curve." },
        { question: "Differentiation rules?", answer: "Sum, difference, product, quotient, chain rules." },
        { question: "Power rule?", answer: "d/dx[x^n] = n*x^(n−1)." },
        { question: "Constant multiple rule?", answer: "d/dx[c*f(x)] = c*d/dx[f(x)]." },
        { question: "Sum and difference rule?", answer: "d/dx[f±g] = f' ± g'." },
        { question: "Product rule?", answer: "d/dx[f*g] = f'g + fg'." },
        { question: "Quotient rule?", answer: "d/dx[f/g] = (f'g − fg') / g²." },
        { question: "Chain rule?", answer: "d/dx[f(g(x))] = f'(g(x)) * g'(x)." },
        { question: "Higher order derivatives?", answer: "Derivative of a derivative; notation f''(x), f'''(x), etc." },
        { question: "Applications?", answer: "Velocity, acceleration, maxima, minima, curve sketching." },
        { question: "Tips?", answer: "Simplify function first, apply derivative rules carefully." },
        { question: "Common mistakes?", answer: "Misapplying chain/product/quotient rules, missing negative signs." },
        { question: "Checking solution?", answer: "Compare with known derivatives and verify limits." }
    ],
    broadTest: [
        { question: "limₓ→2 (x²−4)/(x−2):", options: ["4", "2", "1", "0"], correct: 0 },
        { question: "Derivative of x³:", options: ["3x²", "x²", "3x³", "x³"], correct: 0 },
        { question: "Derivative of sin x:", options: ["cos x", "−cos x", "sin x", "−sin x"], correct: 0 },
        { question: "Derivative of e^x:", options: ["e^x", "x*e^(x−1)", "1", "ln x"], correct: 0 },
        { question: "limₓ→0 (sin x)/x:", options: ["1", "0", "∞", "−1"], correct: 0 },
        { question: "d/dx (x² + 3x):", options: ["2x + 3", "x² + 3", "2x", "3x"], correct: 0 },
        { question: "d/dx [ln x]:", options: ["1/x", "ln x", "x", "0"], correct: 0 },
        { question: "Derivative of cos x:", options: ["−sin x", "sin x", "cos x", "−cos x"], correct: 0 },
        { question: "d/dx [x*e^x]:", options: ["e^x + x*e^x", "e^x", "x*e^x", "x^2*e^x"], correct: 0 },
        { question: "d/dx [(x² +1)/(x)]:", options: ["1 − 1/x²", "x −1", "2x/x²", "None"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter13 = class11Chapter13;
