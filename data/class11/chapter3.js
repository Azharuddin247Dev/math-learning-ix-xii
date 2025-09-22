// Class 11 - Chapter 3: Trigonometric Functions
const class11Chapter3 = {
    reading: [
        { question: "What are Trigonometric Functions?", answer: "Trigonometric functions relate angles of a triangle to ratios of its sides." },
        { question: "Six basic functions?", answer: "Sine (sin), Cosine (cos), Tangent (tan), Cosecant (csc), Secant (sec), Cotangent (cot)." },
        { question: "sin θ definition?", answer: "sin θ = Opposite side / Hypotenuse." },
        { question: "cos θ definition?", answer: "cos θ = Adjacent side / Hypotenuse." },
        { question: "tan θ definition?", answer: "tan θ = Opposite side / Adjacent side." },
        { question: "csc θ definition?", answer: "csc θ = 1 / sin θ = Hypotenuse / Opposite side." },
        { question: "sec θ definition?", answer: "sec θ = 1 / cos θ = Hypotenuse / Adjacent side." },
        { question: "cot θ definition?", answer: "cot θ = 1 / tan θ = Adjacent side / Opposite side." },
        { question: "Pythagorean identity?", answer: "sin²θ + cos²θ = 1." },
        { question: "Other identities?", answer: "1 + tan²θ = sec²θ, 1 + cot²θ = csc²θ." },
        { question: "Trigonometric ratios of complementary angles?", answer: "sin(90°−θ) = cos θ, cos(90°−θ) = sin θ, tan(90°−θ) = cot θ." },
        { question: "Trigonometric functions for specific angles?", answer: "0°, 30°, 45°, 60°, 90° have standard values." },
        { question: "Graph of sin θ?", answer: "Sine function has amplitude 1, period 2π, starts at 0." },
        { question: "Graph of cos θ?", answer: "Cosine function has amplitude 1, period 2π, starts at 1." },
        { question: "Graph of tan θ?", answer: "Tangent function has period π, vertical asymptotes at odd multiples of π/2." },
        { question: "Trigonometric equations?", answer: "Equations involving sin θ, cos θ, tan θ can be solved using identities and inverse functions." },
        { question: "Inverse trigonometric functions?", answer: "sin⁻¹ x, cos⁻¹ x, tan⁻¹ x give angles for given ratio values." },
        { question: "Applications?", answer: "Solving triangles, engineering, physics, waves, oscillations." },
        { question: "Sum and difference formulas?", answer: "sin(A±B)=sinA cosB±cosA sinB, cos(A±B)=cosA cosB∓sinA sinB." },
        { question: "Double angle formulas?", answer: "sin2A=2sinA cosA, cos2A=cos²A−sin²A." }
    ],
    test: [
        { question: "sin θ = opposite / ?", options: ["Hypotenuse", "Adjacent", "1", "tan θ"], correct: 0 },
        { question: "cos θ = ?", options: ["Adjacent/Hypotenuse", "Opposite/Hypotenuse", "1/tan θ", "Hypotenuse/Adjacent"], correct: 0 },
        { question: "tan θ =", options: ["Opposite/Adjacent", "Adjacent/Opposite", "sin θ/cos θ", "1/cot θ"], correct: 0 },
        { question: "csc θ =", options: ["1/sin θ", "1/cos θ", "cos θ/sin θ", "1/tan θ"], correct: 0 },
        { question: "sec θ =", options: ["1/cos θ", "1/sin θ", "sin θ/cos θ", "cot θ"], correct: 0 },
        { question: "cot θ =", options: ["1/tan θ", "tan θ", "cos θ/sin θ", "Both 1 and 3"], correct: 3 },
        { question: "Pythagorean identity?", options: ["sin²θ + cos²θ = 1", "1 + tan²θ = cot²θ", "sec²θ + csc²θ = 1", "None"], correct: 0 },
        { question: "tan²θ + 1 =", options: ["sec²θ", "csc²θ", "1", "sin²θ"], correct: 0 },
        { question: "sin(90°−θ) =", options: ["cos θ", "tan θ", "sin θ", "cot θ"], correct: 0 },
        { question: "cos(90°−θ) =", options: ["sin θ", "cos θ", "tan θ", "cot θ"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter3 = class11Chapter3;
