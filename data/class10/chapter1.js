// Class 10 - Chapter 1: Compound Interest
const class10Chapter1 = {
    reading: [
        { question: "What is compound interest?", answer: "Compound interest is the interest calculated on the principal as well as the interest accumulated over previous periods." },
        { question: "Principal (P)?", answer: "The initial amount of money invested or borrowed." },
        { question: "Rate of interest (R)?", answer: "The percentage at which interest is charged or earned per annum." },
        { question: "Time (T)?", answer: "The duration for which the money is invested or borrowed." },
        { question: "Compound interest formula?", answer: "A = P(1 + R/100)^T; CI = A - P, where A = Amount after T years." },
        { question: "Annual compounding?", answer: "Interest is calculated and added once at the end of each year." },
        { question: "Half-yearly compounding?", answer: "Interest is calculated and added twice a year; R and T are adjusted accordingly." },
        { question: "Quarterly compounding?", answer: "Interest is calculated and added four times a year; R and T are adjusted accordingly." },
        { question: "Difference between SI and CI?", answer: "SI is calculated only on principal; CI is calculated on principal plus interest accumulated." },
        { question: "Formula for CI when compounded n times a year?", answer: "A = P(1 + R/(100·n))^(n·T)." },
        { question: "Effective rate of interest?", answer: "The actual annual interest rate considering compounding; higher than nominal rate if compounding > 1." },
        { question: "Applications of CI?", answer: "Bank deposits, loans, mortgages, investment growth, finance calculations." },
        { question: "Rule of 72?", answer: "Approximate number of years to double an investment = 72 / R (interest rate in %)."},
        { question: "Annual amount after 1 year?", answer: "A = P + CI = P(1 + R/100)."},
        { question: "Compound interest for 2 years?", answer: "CI = P[(1 + R/100)^2 - 1]."},
        { question: "Compound interest for 3 years?", answer: "CI = P[(1 + R/100)^3 - 1]."},
        { question: "CI with monthly compounding?", answer: "Adjust R to monthly rate and T to number of months: A = P(1 + R/1200)^(12·T)."},
        { question: "Difference between annual and half-yearly compounding?", answer: "Half-yearly CI is slightly higher due to more frequent compounding." },
        { question: "Tips for solving CI problems?", answer: "Use proper formula, adjust rate and time according to compounding frequency, calculate step by step." },
        { question: "Shortcut for CI on yearly basis?", answer: "Use multiplication of (1 + R/100) for each year sequentially." }
    ],
    test: [
        { question: "CI on ₹1000 at 5% per annum for 2 years:", options: ["₹102.50", "₹105.00", "₹102.5 + 1000", "₹102.5"], correct: 2 },
        { question: "Amount after 3 years on ₹2000 at 10% per annum CI:", options: ["₹2662", "₹2662.00", "₹2600", "₹2000"], correct: 1 },
        { question: "CI differs from SI because:", options: ["Calculated on principal only", "Calculated on principal + interest", "Rate is higher", "Time is different"], correct: 1 },
        { question: "Formula for CI annually:", options: ["A = P + PRT/100", "A = P(1 + R/100)^T", "A = P(1 + T/100)^R", "CI = PRT/100"], correct: 1 },
        { question: "Compound interest for 1 year on ₹5000 at 8%:", options: ["₹400", "₹500", "₹450", "₹480"], correct: 0 },
        { question: "Half-yearly compounding means interest added:", options: ["Once a year", "Twice a year", "Four times a year", "Monthly"], correct: 1 },
        { question: "Effective rate > nominal rate if compounding is:", options: ["Annual", "Half-yearly or more frequent", "Never", "Monthly only"], correct: 1 },
        { question: "Amount after 2 years, P=1000, R=5%:", options: ["₹1100", "₹1102.50", "₹1050", "₹1150"], correct: 1 },
        { question: "Rule of 72 estimates:", options: ["CI", "Years to double investment", "Rate of SI", "Time for interest = principal"], correct: 1 },
        { question: "CI for monthly compounding formula uses:", options: ["R/12 & T×12", "R×12 & T/12", "R/100 & T", "R/1200 & T"], correct: 3 }
    ], broad: [
        { topic: "Overview of Compound Interest", content: "Compound interest (CI) is interest calculated on both principal and accumulated interest. It differs from simple interest, which is calculated on principal only." },
        { topic: "Formulas and Compounding Frequency", content: "A = P(1 + R/100)^T for annual; for n times a year, A = P(1 + R/(100·n))^(n·T). Half-yearly, quarterly, and monthly compounding adjusts rate and time accordingly." },
        { topic: "Applications and Tips", content: "Used in banking, loans, investment planning. Apply formulas carefully, convert rate and time to match compounding frequency, and calculate step by step. Rule of 72 helps estimate doubling time." }
    ],
    broadTest: [
        { question: "CI differs from SI because:", options: ["Calculated on principal only", "Calculated on principal + interest", "Rate is higher", "Time is different"], correct: 1 },
        { question: "Formula for CI annually:", options: ["A = P + PRT/100", "A = P(1 + R/100)^T", "A = P(1 + T/100)^R", "CI = PRT/100"], correct: 1 },
        { question: "Effective rate > nominal rate if compounding is:", options: ["Annual", "Half-yearly or more frequent", "Never", "Monthly only"], correct: 1 },
        { question: "Rule of 72 estimates:", options: ["CI", "Years to double investment", "Rate of SI", "Time for interest = principal"], correct: 1 },
        { question: "Monthly compounding formula uses:", options: ["R/12 & T×12", "R×12 & T/12", "R/100 & T", "R/1200 & T"], correct: 3 }
    ]
};

// Export for dynamic loading
window.class10Chapter1 = class10Chapter1;
