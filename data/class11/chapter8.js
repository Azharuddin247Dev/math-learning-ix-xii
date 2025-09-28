// Class 11 - Chapter 8: Binomial Theorem
const class11Chapter8 = {
    reading: [
        { question: "What is Binomial Theorem?", answer: "It provides a formula to expand expressions of the form (a + b)ⁿ, where n is a non-negative integer." },
        { question: "General term in expansion?", answer: "Tᵣ₊₁ = nCr × a^(n−r) × b^r, where r = 0,1,...,n." },
        { question: "Coefficient of a term?", answer: "The number multiplying the term, e.g., in (a+b)ⁿ, coefficient of a^(n−r)b^r is nCr." },
        { question: "Middle term?", answer: "For n even: middle term = n/2 +1 term; for n odd: two middle terms = (n+1)/2 and (n+3)/2 terms." },
        { question: "Sum of coefficients?", answer: "Set a = 1, b = 1 → sum = 2ⁿ." },
        { question: "Sum of alternate coefficients?", answer: "Set a = 1, b = −1 → sum = 0 (for n≥1)."}, 
        { question: "Binomial expansion examples?", answer: "(x + y)² = x² + 2xy + y², (x + y)³ = x³ + 3x²y + 3xy² + y³." },
        { question: "Pascal’s triangle?", answer: "Coefficients of (a+b)ⁿ can be obtained from the (n+1)th row of Pascal's triangle." },
        { question: "Properties of nCr?", answer: "nC0 = 1, nCn = 1, nCr = nC(n−r), sum of all nCr = 2ⁿ." },
        { question: "Applications?", answer: "Algebra, probability, combinatorics, approximation in mathematics." },
        { question: "Negative and fractional indices?", answer: "Binomial theorem can be extended using infinite series for |b/a|<1." },
        { question: "Tips?", answer: "Identify general term carefully, calculate coefficients using nCr formula." },
        { question: "Common mistakes?", answer: "Mixing up powers, incorrect value of r, forgetting nCr formula." },
        { question: "Special cases?", answer: "(a+1)ⁿ, (1−a)ⁿ, (x+y)², (x+y)³ are basic expansions." },
        { question: "Check by substitution?", answer: "Substitute small n to verify correctness of expansion." },
        { question: "Important formulas?", answer: "Tᵣ₊₁ = nCr a^(n−r)b^r, sum of coefficients = 2ⁿ, sum of alternate = 0." },
        { question: "Use in probability?", answer: "Coefficients correspond to probabilities in binomial distribution." },
        { question: "Algebraic simplification?", answer: "Helps to expand without full multiplication." },
        { question: "Power of a in general term?", answer: "n−r, where r is the term index starting from 0." },
        { question: "Power of b in general term?", answer: "r, where r is the term index starting from 0." }
    ],
    test: [
        { question: "General term Tᵣ₊₁ of (a+b)ⁿ:", options: ["nCr a^(n−r)b^r", "nCr a^r b^(n−r)", "a^n + b^r", "n!"], correct: 0 },
        { question: "Coefficient of x² in (1+x)⁴:", options: ["6", "4", "1", "3"], correct: 0 },
        { question: "Sum of coefficients in (x+1)³:", options: ["8", "4", "1", "6"], correct: 0 },
        { question: "Sum of alternate coefficients in (x+1)⁴:", options: ["0", "1", "2", "4"], correct: 0 },
        { question: "Middle term of (x+2)⁵:", options: ["3rd term", "2nd term", "4th term", "5th term"], correct: 0 },
        { question: "nCr = ?", options: ["n! / (r!(n−r)!)", "n! / (n−r)!", "n! / r!", "n!"], correct: 0 },
        { question: "Pascal’s triangle row for (a+b)³:", options: ["1 3 3 1", "1 2 1", "1 4 6 4 1", "1 1 1 1"], correct: 0 },
        { question: "T₂ in (x+3)⁴:", options: ["4x³×3", "x³×3", "4x²×3²", "x×3"], correct: 0 },
        { question: "Coefficient of x³ in (2+x)⁵:", options: ["80", "10", "20", "40"], correct: 0 },
        { question: "Power of a in Tᵣ₊₁:", options: ["n−r", "r", "n", "0"], correct: 0 }
    ],
    broad: [
        { question: "What is Binomial Theorem?", answer: "It provides a formula to expand expressions of the form (a + b)ⁿ, where n is a non-negative integer." },
        { question: "General term in expansion?", answer: "Tᵣ₊₁ = nCr × a^(n−r) × b^r, where r = 0,1,...,n." },
        { question: "Coefficient of a term?", answer: "The number multiplying the term, e.g., in (a+b)ⁿ, coefficient of a^(n−r)b^r is nCr." },
        { question: "Middle term?", answer: "For n even: middle term = n/2 +1 term; for n odd: two middle terms = (n+1)/2 and (n+3)/2 terms." },
        { question: "Sum of coefficients?", answer: "Set a = 1, b = 1 → sum = 2ⁿ." },
        { question: "Sum of alternate coefficients?", answer: "Set a = 1, b = −1 → sum = 0 (for n≥1)."}, 
        { question: "Binomial expansion examples?", answer: "(x + y)² = x² + 2xy + y², (x + y)³ = x³ + 3x²y + 3xy² + y³." },
        { question: "Pascal’s triangle?", answer: "Coefficients of (a+b)ⁿ can be obtained from the (n+1)th row of Pascal's triangle." },
        { question: "Properties of nCr?", answer: "nC0 = 1, nCn = 1, nCr = nC(n−r), sum of all nCr = 2ⁿ." },
        { question: "Applications?", answer: "Algebra, probability, combinatorics, approximation in mathematics." },
        { question: "Negative and fractional indices?", answer: "Binomial theorem can be extended using infinite series for |b/a|<1." },
        { question: "Tips?", answer: "Identify general term carefully, calculate coefficients using nCr formula." },
        { question: "Common mistakes?", answer: "Mixing up powers, incorrect value of r, forgetting nCr formula." },
        { question: "Special cases?", answer: "(a+1)ⁿ, (1−a)ⁿ, (x+y)², (x+y)³ are basic expansions." },
        { question: "Check by substitution?", answer: "Substitute small n to verify correctness of expansion." },
        { question: "Important formulas?", answer: "Tᵣ₊₁ = nCr a^(n−r)b^r, sum of coefficients = 2ⁿ, sum of alternate = 0." },
        { question: "Use in probability?", answer: "Coefficients correspond to probabilities in binomial distribution." },
        { question: "Algebraic simplification?", answer: "Helps to expand without full multiplication." },
        { question: "Power of a in general term?", answer: "n−r, where r is the term index starting from 0." },
        { question: "Power of b in general term?", answer: "r, where r is the term index starting from 0." }
    ],
    broadTest: [
        { question: "General term Tᵣ₊₁ of (a+b)ⁿ:", options: ["nCr a^(n−r)b^r", "nCr a^r b^(n−r)", "a^n + b^r", "n!"], correct: 0 },
        { question: "Coefficient of x² in (1+x)⁴:", options: ["6", "4", "1", "3"], correct: 0 },
        { question: "Sum of coefficients in (x+1)³:", options: ["8", "4", "1", "6"], correct: 0 },
        { question: "Sum of alternate coefficients in (x+1)⁴:", options: ["0", "1", "2", "4"], correct: 0 },
        { question: "Middle term of (x+2)⁵:", options: ["3rd term", "2nd term", "4th term", "5th term"], correct: 0 },
        { question: "nCr = ?", options: ["n! / (r!(n−r)!)", "n! / (n−r)!", "n! / r!", "n!"], correct: 0 },
        { question: "Pascal’s triangle row for (a+b)³:", options: ["1 3 3 1", "1 2 1", "1 4 6 4 1", "1 1 1 1"], correct: 0 },
        { question: "T₂ in (x+3)⁴:", options: ["4x³×3", "x³×3", "4x²×3²", "x×3"], correct: 0 },
        { question: "Coefficient of x³ in (2+x)⁵:", options: ["80", "10", "20", "40"], correct: 0 },
        { question: "Power of a in Tᵣ₊₁:", options: ["n−r", "r", "n", "0"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter8 = class11Chapter8;
