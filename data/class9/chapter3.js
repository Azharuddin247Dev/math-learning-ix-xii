// Class 9 - Chapter 3: Compound Interest
const class9Chapter3 = {
    reading: [
        { question: "What is compound interest?", answer: "Compound interest is the interest calculated on the initial principal and also on the accumulated interest from previous periods." },
        { question: "How is compound interest different from simple interest?", answer: "In simple interest, interest is calculated only on the principal, while in compound interest, interest is calculated on both principal and accumulated interest." },
        { question: "What is the formula for compound interest annually?", answer: "Amount = P(1 + r/100)ⁿ, Compound Interest = Amount – Principal." },
        { question: "What does P stand for in the CI formula?", answer: "P stands for the principal, i.e., the initial amount invested or borrowed." },
        { question: "What does r stand for in the CI formula?", answer: "r stands for the rate of interest per time period (in %)." },
        { question: "What does n stand for in the CI formula?", answer: "n stands for the number of years (if interest is compounded annually)." },
        { question: "What is the formula for CI when compounded half-yearly?", answer: "Amount = P(1 + r/200)^(2n)." },
        { question: "What is the formula for CI when compounded quarterly?", answer: "Amount = P(1 + r/400)^(4n)." },
        { question: "How do you calculate compound interest when the time is not a whole number?", answer: "Break the time into whole years and partial years; calculate separately and combine." },
        { question: "If P = 1000, r = 10%, n = 2 years, what is the CI?", answer: "Amount = 1000(1 + 10/100)² = 1210, CI = 210." },
        { question: "If P = 5000, r = 5%, n = 3 years, what is the CI?", answer: "Amount = 5000(1.05)³ = 5788.125, CI = 788.125." },
        { question: "What is the formula for CI when compounded monthly?", answer: "Amount = P(1 + r/1200)^(12n)." },
        { question: "What is the formula for CI when compounded daily?", answer: "Amount = P(1 + r/36500)^(365n)." },
        { question: "What is the effective rate of interest?", answer: "It is the actual rate earned or paid after compounding is taken into account." },
        { question: "How do you find CI when interest rates change each year?", answer: "Calculate year by year: apply the interest rate of that year on the amount accumulated so far." },
        { question: "What is the difference between amount and compound interest?", answer: "Amount = Principal + Compound Interest." },
        { question: "What is continuous compounding?", answer: "When interest is compounded an infinite number of times per year, the formula is A = Pe^(rt)." },
        { question: "In which real-life cases is compound interest used?", answer: "It is used in banking, loans, investments, population growth, and depreciation calculations." },
        { question: "What happens to CI if the compounding frequency increases?", answer: "The CI increases as the compounding frequency increases, approaching continuous compounding." },
        { question: "If P = 8000, r = 12% compounded half-yearly for 1 year, what is the CI?", answer: "Amount = 8000(1 + 12/200)² = 8985.6, CI = 985.6." }
    ],
    test: [
        { question: "What is the formula for compound interest annually?", options: ["P(1 + r/100)ⁿ", "P + nr/100", "Prt/100", "P(1 – r/100)ⁿ"], correct: 0 },
        { question: "The difference between SI and CI is that:", options: ["SI includes previous interest", "CI includes previous interest", "Both include previous interest", "Neither include previous interest"], correct: 1 },
        { question: "If P = 1000, r = 10%, n = 2 years, CI is:", options: ["200", "210", "220", "230"], correct: 1 },
        { question: "If P = 5000, r = 5%, n = 3 years, CI is approximately:", options: ["750", "780", "788", "800"], correct: 2 },
        { question: "Which formula is used when compounded half-yearly?", options: ["P(1 + r/200)^(2n)", "P(1 + r/100)ⁿ", "P(1 + r/400)^(4n)", "P(1 + r/1200)^(12n)"], correct: 0 },
        { question: "Which formula is used when compounded quarterly?", options: ["P(1 + r/400)^(4n)", "P(1 + r/200)^(2n)", "P(1 + r/100)ⁿ", "P(1 + r/1200)^(12n)"], correct: 0 },
        { question: "What is the CI if P = 2000, r = 10%, n = 1 year, compounded half-yearly?", options: ["200", "210", "205", "220"], correct: 2 },
        { question: "If interest rates vary yearly, CI is calculated by:", options: ["Using average rate", "Year by year calculation", "Simple interest method", "None"], correct: 1 },
        { question: "Which compounding gives the highest return?", options: ["Annual", "Quarterly", "Monthly", "Continuous"], correct: 3 },
        { question: "What is the relation between Amount and CI?", options: ["Amount = Principal × CI", "Amount = CI – Principal", "Amount = Principal + CI", "CI = Amount + Principal"], correct: 2 }
    ]
};

// Export for dynamic loading
window.class9Chapter3 = class9Chapter3;
