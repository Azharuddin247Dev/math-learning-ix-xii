// Class 11 - Chapter 4: Principle of Mathematical Induction
const class11Chapter4 = {
    reading: [
        { question: "What is Mathematical Induction?", answer: "A method to prove statements or formulas true for all natural numbers." },
        { question: "Two steps of induction?", answer: "1. Base case: Verify the statement for the first natural number, usually n = 1. 2. Inductive step: Assume the statement is true for n = k and prove it for n = k + 1." },
        { question: "Base case?", answer: "Check that the statement holds for the initial value (n=1)." },
        { question: "Inductive hypothesis?", answer: "Assume the statement is true for n = k." },
        { question: "Inductive step?", answer: "Using the hypothesis for n=k, prove that the statement is true for n = k+1." },
        { question: "Conclusion?", answer: "If both base case and inductive step are true, the statement holds for all natural numbers n ≥ 1." },
        { question: "Example statement?", answer: "1 + 2 + 3 + ... + n = n(n+1)/2." },
        { question: "Base case for sum of first n natural numbers?", answer: "For n = 1: 1 = 1(1+1)/2 = 1, true." },
        { question: "Inductive hypothesis for sum formula?", answer: "Assume 1 + 2 + ... + k = k(k+1)/2 is true." },
        { question: "Inductive step for sum formula?", answer: "1 + 2 + ... + k + (k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2, true for n = k+1." },
        { question: "Other applications?", answer: "Proving inequalities, divisibility, sums of series, combinatorial identities." },
        { question: "Tips?", answer: "Always clearly state base case, assume n=k carefully, show n=k+1 properly." },
        { question: "Common mistakes?", answer: "Skipping base case, unclear inductive step, algebraic errors." },
        { question: "Divisibility example?", answer: "Prove 7ⁿ − 1 is divisible by 6 for all n ∈ N using induction." },
        { question: "Inequality example?", answer: "Prove 2ⁿ ≥ n + 1 for all n ≥ 1 using induction." },
        { question: "Importance?", answer: "It allows proving statements for infinitely many numbers with finite steps." },
        { question: "Notation?", answer: "Statements are often written as P(n) for a natural number n." },
        { question: "Step-by-step strategy?", answer: "1. Write P(n). 2. Verify base case. 3. Assume P(k) true. 4. Prove P(k+1) true. 5. Conclude P(n) true for all n ≥ 1." },
        { question: "Real-life analogy?", answer: "Domino effect: if first domino falls (base case) and each domino knocks the next (inductive step), all fall." },
        { question: "Check solution?", answer: "Verify algebra carefully during inductive step, and base case correctness." }
    ],
    test: [
        { question: "Base case is verified for:", options: ["n=1", "n=k", "n=k+1", "n=0"], correct: 0 },
        { question: "Inductive hypothesis is:", options: ["Assume statement true for n=k", "Prove statement for n=k+1", "Check n=1", "None"], correct: 0 },
        { question: "Inductive step proves:", options: ["Statement true for n=k+1", "Statement true for n=k", "Statement true for n=1", "Statement false"], correct: 0 },
        { question: "If base case and inductive step hold, statement is true for:", options: ["All n ≥ 1", "Only n=1", "Only n=k", "Only n=k+1"], correct: 0 },
        { question: "Sum of first n natural numbers formula:", options: ["n(n+1)/2", "n²", "n+1", "n²+n"], correct: 0 },
        { question: "Divisibility example uses induction to prove:", options: ["7ⁿ − 1 divisible by 6", "2ⁿ − 1 divisible by 3", "n² divisible by 2", "None"], correct: 0 },
        { question: "Inequality example:", options: ["2ⁿ ≥ n + 1", "2ⁿ ≤ n + 1", "n² ≥ 2n", "n² ≤ 2n"], correct: 0 },
        { question: "Notation P(n) means:", options: ["Statement for natural number n", "Probability of n", "Permutation of n", "Product of n"], correct: 0 },
        { question: "Analogy for induction?", options: ["Domino effect", "Coin toss", "Rolling die", "Card game"], correct: 0 },
        { question: "Check step-by-step induction solution:", options: ["Base case, hypothesis, step n=k+1", "Only base case", "Only step n=k+1", "Guess answer"], correct: 0 }
    ],
    broad: [
        { question: "What is Mathematical Induction?", answer: "A method to prove statements or formulas true for all natural numbers." },
        { question: "Two steps of induction?", answer: "1. Base case: Verify the statement for the first natural number, usually n = 1. 2. Inductive step: Assume the statement is true for n = k and prove it for n = k + 1." },
        { question: "Base case?", answer: "Check that the statement holds for the initial value (n=1)." },
        { question: "Inductive hypothesis?", answer: "Assume the statement is true for n = k." },
        { question: "Inductive step?", answer: "Using the hypothesis for n=k, prove that the statement is true for n = k+1." },
        { question: "Conclusion?", answer: "If both base case and inductive step are true, the statement holds for all natural numbers n ≥ 1." },
        { question: "Example statement?", answer: "1 + 2 + 3 + ... + n = n(n+1)/2." },
        { question: "Base case for sum of first n natural numbers?", answer: "For n = 1: 1 = 1(1+1)/2 = 1, true." },
        { question: "Inductive hypothesis for sum formula?", answer: "Assume 1 + 2 + ... + k = k(k+1)/2 is true." },
        { question: "Inductive step for sum formula?", answer: "1 + 2 + ... + k + (k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2, true for n = k+1." },
        { question: "Other applications?", answer: "Proving inequalities, divisibility, sums of series, combinatorial identities." },
        { question: "Tips?", answer: "Always clearly state base case, assume n=k carefully, show n=k+1 properly." },
        { question: "Common mistakes?", answer: "Skipping base case, unclear inductive step, algebraic errors." },
        { question: "Divisibility example?", answer: "Prove 7ⁿ − 1 is divisible by 6 for all n ∈ N using induction." },
        { question: "Inequality example?", answer: "Prove 2ⁿ ≥ n + 1 for all n ≥ 1 using induction." },
        { question: "Importance?", answer: "It allows proving statements for infinitely many numbers with finite steps." },
        { question: "Notation?", answer: "Statements are often written as P(n) for a natural number n." },
        { question: "Step-by-step strategy?", answer: "1. Write P(n). 2. Verify base case. 3. Assume P(k) true. 4. Prove P(k+1) true. 5. Conclude P(n) true for all n ≥ 1." },
        { question: "Real-life analogy?", answer: "Domino effect: if first domino falls (base case) and each domino knocks the next (inductive step), all fall." },
        { question: "Check solution?", answer: "Verify algebra carefully during inductive step, and base case correctness." }
    ],
    broadTest: [
        { question: "Base case is verified for:", options: ["n=1", "n=k", "n=k+1", "n=0"], correct: 0 },
        { question: "Inductive hypothesis is:", options: ["Assume statement true for n=k", "Prove statement for n=k+1", "Check n=1", "None"], correct: 0 },
        { question: "Inductive step proves:", options: ["Statement true for n=k+1", "Statement true for n=k", "Statement true for n=1", "Statement false"], correct: 0 },
        { question: "If base case and inductive step hold, statement is true for:", options: ["All n ≥ 1", "Only n=1", "Only n=k", "Only n=k+1"], correct: 0 },
        { question: "Sum of first n natural numbers formula:", options: ["n(n+1)/2", "n²", "n+1", "n²+n"], correct: 0 },
        { question: "Divisibility example uses induction to prove:", options: ["7ⁿ − 1 divisible by 6", "2ⁿ − 1 divisible by 3", "n² divisible by 2", "None"], correct: 0 },
        { question: "Inequality example:", options: ["2ⁿ ≥ n + 1", "2ⁿ ≤ n + 1", "n² ≥ 2n", "n² ≤ 2n"], correct: 0 },
        { question: "Notation P(n) means:", options: ["Statement for natural number n", "Probability of n", "Permutation of n", "Product of n"], correct: 0 },
        { question: "Analogy for induction?", options: ["Domino effect", "Coin toss", "Rolling die", "Card game"], correct: 0 },
        { question: "Check step-by-step induction solution:", options: ["Base case, hypothesis, step n=k+1", "Only base case", "Only step n=k+1", "Guess answer"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter4 = class11Chapter4;
