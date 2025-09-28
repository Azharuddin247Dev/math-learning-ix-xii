// Class 11 - Chapter 9: Sequences and Series
const class11Chapter9 = {
    reading: [
        { question: "What is a sequence?", answer: "An ordered list of numbers following a certain rule." },
        { question: "What is a series?", answer: "Sum of the terms of a sequence." },
        { question: "Arithmetic Progression (A.P.)?", answer: "A sequence where the difference between consecutive terms is constant." },
        { question: "Common difference?", answer: "d = a₂ − a₁, difference between consecutive terms in A.P." },
        { question: "nth term of A.P.?", answer: "aₙ = a + (n−1)d, where a is first term." },
        { question: "Sum of first n terms of A.P.?", answer: "Sₙ = n/2 [2a + (n−1)d] or Sₙ = n/2 (a + aₙ)."}, 
        { question: "Geometric Progression (G.P.)?", answer: "A sequence where ratio of consecutive terms is constant." },
        { question: "Common ratio?", answer: "r = a₂ / a₁, ratio between consecutive terms in G.P." },
        { question: "nth term of G.P.?", answer: "aₙ = a r^(n−1), where a is first term." },
        { question: "Sum of first n terms of G.P.?", answer: "Sₙ = a(1−rⁿ)/(1−r), r ≠ 1." },
        { question: "Sum to infinity of G.P.?", answer: "S∞ = a / (1−r), |r|<1." },
        { question: "Harmonic Progression (H.P.)?", answer: "Sequence whose reciprocals are in A.P." },
        { question: "Relationship between A.M. and G.M.?", answer: "For positive numbers a and b, AM ≥ GM." },
        { question: "Special series formulas?", answer: "1 + 2 + ... + n = n(n+1)/2, 1² + 2² + ... + n² = n(n+1)(2n+1)/6, 1³ + 2³ + ... + n³ = [n(n+1)/2]²." },
        { question: "Applications?", answer: "Finance, population growth, physics problems, computer algorithms." },
        { question: "Tips?", answer: "Identify A.P., G.P., or H.P., then use correct formulas." },
        { question: "Common mistakes?", answer: "Mixing A.P. with G.P., wrong formula for sum, forgetting first term." },
        { question: "Check solution?", answer: "Verify by substituting small n or checking first few terms." },
        { question: "Real-life examples?", answer: "Salary increments, compound interest, bacterial growth." },
        { question: "Notation?", answer: "Sequence: {a₁, a₂, ...}, Series: Sₙ = a₁ + a₂ + ... + aₙ." }
    ],
    test: [
        { question: "nth term of A.P.: a=3, d=2, n=5:", options: ["11", "10", "13", "12"], correct: 0 },
        { question: "Sum of first 5 terms of A.P.: a=3, d=2:", options: ["35", "25", "30", "40"], correct: 2 },
        { question: "nth term of G.P.: a=2, r=3, n=4:", options: ["54", "18", "8", "24"], correct: 0 },
        { question: "Sum of first 4 terms of G.P.: a=2, r=3:", options: ["80", "26", "62", "20"], correct: 2 },
        { question: "Sum to infinity: a=1, r=1/2:", options: ["2", "1", "1/2", "3"], correct: 0 },
        { question: "H.P. example: 1, 1/2, 1/3, ... reciprocals form:", options: ["A.P.", "G.P.", "H.P.", "None"], correct: 0 },
        { question: "Common difference in A.P. 5, 8, 11,...:", options: ["3", "5", "8", "11"], correct: 0 },
        { question: "Common ratio in G.P. 3, 6, 12,...:", options: ["2", "3", "6", "1/2"], correct: 0 },
        { question: "Sum 1+2+...+10:", options: ["55", "45", "50", "60"], correct: 0 },
        { question: "Sum of squares 1²+2²+...+5²:", options: ["55", "35", "30", "50"], correct: 0 }
    ],
     broad: [
        { question: "What is a sequence?", answer: "An ordered list of numbers following a certain rule." },
        { question: "What is a series?", answer: "Sum of the terms of a sequence." },
        { question: "Arithmetic Progression (A.P.)?", answer: "A sequence where the difference between consecutive terms is constant." },
        { question: "Common difference?", answer: "d = a₂ − a₁, difference between consecutive terms in A.P." },
        { question: "nth term of A.P.?", answer: "aₙ = a + (n−1)d, where a is first term." },
        { question: "Sum of first n terms of A.P.?", answer: "Sₙ = n/2 [2a + (n−1)d] or Sₙ = n/2 (a + aₙ)."}, 
        { question: "Geometric Progression (G.P.)?", answer: "A sequence where ratio of consecutive terms is constant." },
        { question: "Common ratio?", answer: "r = a₂ / a₁, ratio between consecutive terms in G.P." },
        { question: "nth term of G.P.?", answer: "aₙ = a r^(n−1), where a is first term." },
        { question: "Sum of first n terms of G.P.?", answer: "Sₙ = a(1−rⁿ)/(1−r), r ≠ 1." },
        { question: "Sum to infinity of G.P.?", answer: "S∞ = a / (1−r), |r|<1." },
        { question: "Harmonic Progression (H.P.)?", answer: "Sequence whose reciprocals are in A.P." },
        { question: "Relationship between A.M. and G.M.?", answer: "For positive numbers a and b, AM ≥ GM." },
        { question: "Special series formulas?", answer: "1 + 2 + ... + n = n(n+1)/2, 1² + 2² + ... + n² = n(n+1)(2n+1)/6, 1³ + 2³ + ... + n³ = [n(n+1)/2]²." },
        { question: "Applications?", answer: "Finance, population growth, physics problems, computer algorithms." },
        { question: "Tips?", answer: "Identify A.P., G.P., or H.P., then use correct formulas." },
        { question: "Common mistakes?", answer: "Mixing A.P. with G.P., wrong formula for sum, forgetting first term." },
        { question: "Check solution?", answer: "Verify by substituting small n or checking first few terms." },
        { question: "Real-life examples?", answer: "Salary increments, compound interest, bacterial growth." },
        { question: "Notation?", answer: "Sequence: {a₁, a₂, ...}, Series: Sₙ = a₁ + a₂ + ... + aₙ." }
    ],
    broadTest: [
        { question: "nth term of A.P.: a=3, d=2, n=5:", options: ["11", "10", "13", "12"], correct: 0 },
        { question: "Sum of first 5 terms of A.P.: a=3, d=2:", options: ["35", "25", "30", "40"], correct: 2 },
        { question: "nth term of G.P.: a=2, r=3, n=4:", options: ["54", "18", "8", "24"], correct: 0 },
        { question: "Sum of first 4 terms of G.P.: a=2, r=3:", options: ["80", "26", "62", "20"], correct: 2 },
        { question: "Sum to infinity: a=1, r=1/2:", options: ["2", "1", "1/2", "3"], correct: 0 },
        { question: "H.P. example: 1, 1/2, 1/3, ... reciprocals form:", options: ["A.P.", "G.P.", "H.P.", "None"], correct: 0 },
        { question: "Common difference in A.P. 5, 8, 11,...:", options: ["3", "5", "8", "11"], correct: 0 },
        { question: "Common ratio in G.P. 3, 6, 12,...:", options: ["2", "3", "6", "1/2"], correct: 0 },
        { question: "Sum 1+2+...+10:", options: ["55", "45", "50", "60"], correct: 0 },
        { question: "Sum of squares 1²+2²+...+5²:", options: ["55", "35", "30", "50"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter9 = class11Chapter9;
