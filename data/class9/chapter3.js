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

    broad: [
        {
            question: "Find the compound interest on ₹5000 at 10% per annum for 2 years compounded annually.",
            answer: "Amount = 5000(1 + 10/100)² = 5000(1.1)² = 5000 × 1.21 = 6050. CI = 6050 – 5000 = ₹1050."
        },
        {
            question: "Find the CI on ₹8000 at 12% per annum for 1 year compounded half-yearly.",
            answer: "Amount = 8000(1 + 12/200)² = 8000(1.06)² = 8000 × 1.1236 = 8988.8. CI = 8988.8 – 8000 = ₹988.8."
        },
        {
            question: "Find the CI on ₹10000 at 8% per annum for 9 months compounded quarterly.",
            answer: "Time = 9 months = 3 quarters. Amount = 10000(1 + 8/400)³ = 10000(1.02)³ = 10000 × 1.061208 = 10612.08. CI = 10612.08 – 10000 = ₹612.08."
        },
        {
            question: "Find the CI on ₹4000 for 3 years at 10% p.a. when interest is compounded yearly.",
            answer: "Amount = 4000(1 + 10/100)³ = 4000(1.1)³ = 4000 × 1.331 = 5324. CI = 5324 – 4000 = ₹1324."
        },
        {
            question: "The population of a town increases at 5% per annum. If the present population is 20000, find the population after 2 years.",
            answer: "Population after 2 years = 20000(1 + 5/100)² = 20000(1.05)² = 20000 × 1.1025 = 22050."
        }
    ],

    broadTest: [
        {
            question: "The CI on ₹5000 at 10% per annum for 2 years annually is:",
            options: ["₹1000", "₹1050", "₹1100", "₹1200"],
            correct: 1
        },
        {
            question: "The CI on ₹8000 at 12% p.a. for 1 year compounded half-yearly is closest to:",
            options: ["₹960", "₹970", "₹988.8", "₹1000"],
            correct: 2
        },
        {
            question: "The CI on ₹10000 at 8% for 9 months compounded quarterly is:",
            options: ["₹600", "₹612.08", "₹620", "₹650"],
            correct: 1
        },
        {
            question: "The CI on ₹4000 at 10% p.a. for 3 years compounded annually is:",
            options: ["₹1200", "₹1250", "₹1300", "₹1324"],
            correct: 3
        },
        {
            question: "If the population of a town is 20000 and it increases 5% per year, the population after 2 years is:",
            options: ["21000", "21500", "22050", "22500"],
            correct: 2
        }
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
