// Class 9 - Chapter 2: Indices and Logarithms
const class9Chapter2 = {
    reading: [
        { question: "What is an index (exponent)?", answer: "If a is a non-zero number and n is a positive integer, then aⁿ means a multiplied by itself n times. Here, n is called the index or exponent." },
        { question: "State the law aᵐ × aⁿ.", answer: "aᵐ × aⁿ = aᵐ⁺ⁿ." },
        { question: "State the law aᵐ ÷ aⁿ.", answer: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ, provided a ≠ 0." },
        { question: "State the law (aᵐ)ⁿ.", answer: "(aᵐ)ⁿ = aᵐⁿ." },
        { question: "State the law (ab)ⁿ.", answer: "(ab)ⁿ = aⁿbⁿ." },
        { question: "State the law (a/b)ⁿ.", answer: "(a/b)ⁿ = aⁿ / bⁿ, provided b ≠ 0." },
        { question: "What is a⁰?", answer: "For any non-zero a, a⁰ = 1." },
        { question: "What is a⁻ⁿ?", answer: "a⁻ⁿ = 1 / aⁿ, where a ≠ 0." },
        { question: "What is the value of 2³?", answer: "2³ = 2 × 2 × 2 = 8." },
        { question: "What is the value of 5⁻²?", answer: "5⁻² = 1 / 5² = 1/25." },
        { question: "What is a logarithm?", answer: "If aᵇ = N, then b is called the logarithm of N to the base a, written as logₐN = b." },
        { question: "What is the logarithm of 1 to any base?", answer: "logₐ1 = 0, for any a > 0, a ≠ 1." },
        { question: "What is the logarithm of the base itself?", answer: "logₐa = 1, for any a > 0, a ≠ 1." },
        { question: "What is the base of a logarithm?", answer: "The base of a logarithm is the number which is raised to a power to obtain the given number." },
        { question: "Convert log₂8 = 3 into exponential form.", answer: "log₂8 = 3 means 2³ = 8." },
        { question: "Convert 3² = 9 into logarithmic form.", answer: "3² = 9 means log₃9 = 2." },
        { question: "State the law logₐ(MN).", answer: "logₐ(MN) = logₐM + logₐN." },
        { question: "State the law logₐ(M/N).", answer: "logₐ(M/N) = logₐM – logₐN." },
        { question: "State the law logₐ(Mⁿ).", answer: "logₐ(Mⁿ) = n logₐM." },
        { question: "What is the change of base formula?", answer: "logₐN = log_bN / log_ba, where a, b > 0, a ≠ 1, b ≠ 1." }
    ],

    broad: [
        {
            question: "Simplify: 2³ × 2⁵",
            answer: "Using the law aᵐ × aⁿ = aᵐ⁺ⁿ, we get 2³ × 2⁵ = 2³⁺⁵ = 2⁸ = 256."
        },
        {
            question: "Simplify: (3²)⁴",
            answer: "Using the law (aᵐ)ⁿ = aᵐⁿ, we get (3²)⁴ = 3²×⁴ = 3⁸ = 6561."
        },
        {
            question: "Simplify: 5⁻³",
            answer: "Using the law a⁻ⁿ = 1/aⁿ, we get 5⁻³ = 1/5³ = 1/125."
        },
        {
            question: "Evaluate: log₂32",
            answer: "Since 2⁵ = 32, log₂32 = 5."
        },
        {
            question: "Simplify: log₃(9 × 27)",
            answer: "Using the law logₐ(MN) = logₐM + logₐN, log₃(9×27) = log₃9 + log₃27 = 2 + 3 = 5."
        }
    ],

    broadTest: [
        {
            question: "Simplify 2³ × 2⁵",
            options: ["2⁸ = 256", "2¹⁵ = 32768", "2⁵ = 32", "2³ = 8"],
            correct: 0
        },
        {
            question: "Simplify (3²)⁴",
            options: ["3⁶ = 729", "3⁸ = 6561", "3¹² = 531441", "3⁴ = 81"],
            correct: 1
        },
        {
            question: "Simplify 5⁻³",
            options: ["125", "1/25", "1/125", "25"],
            correct: 2
        },
        {
            question: "Evaluate log₂32",
            options: ["3", "4", "5", "6"],
            correct: 2
        },
        {
            question: "Simplify log₃(9×27)",
            options: ["3", "4", "5", "6"],
            correct: 2
        }
    ],

    test: [
        { question: "What is the value of 2³?", options: ["4", "6", "8", "9"], correct: 2 },
        { question: "What is the value of 5⁻²?", options: ["25", "1/25", "10", "0"], correct: 1 },
        { question: "Simplify: 3² × 3³", options: ["3⁵", "3⁶", "9³", "3"], correct: 0 },
        { question: "Simplify: (2³)²", options: ["2⁵", "2⁶", "4⁶", "8²"], correct: 1 },
        { question: "What is log₂8?", options: ["1", "2", "3", "4"], correct: 2 },
        { question: "What is log₅1?", options: ["0", "1", "5", "Undefined"], correct: 0 },
        { question: "What is log₄4?", options: ["0", "1", "2", "4"], correct: 1 },
        { question: "Convert 2⁵ = 32 into logarithmic form.", options: ["log₂32 = 5", "log₃2 = 5", "log₂5 = 32", "log₅32 = 2"], correct: 0 },
        { question: "Simplify log₂(4×8).", options: ["5", "4", "3", "2"], correct: 0 },
        { question: "Simplify log₃(9/3).", options: ["0", "1", "2", "3"], correct: 1 }
    ]
};

// Export for dynamic loading
window.class9Chapter2 = class9Chapter2;
