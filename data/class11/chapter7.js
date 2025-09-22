// Class 11 - Chapter 7: Permutations and Combinations
const class11Chapter7 = {
    reading: [
        { question: "What is a permutation?", answer: "An arrangement of objects in a specific order." },
        { question: "Factorial definition?", answer: "n! = n × (n−1) × ... × 2 × 1, with 0! = 1." },
        { question: "Number of permutations of n objects?", answer: "n!." },
        { question: "Permutations of n objects taken r at a time?", answer: "nPr = n! / (n−r)!." },
        { question: "Permutation with repetition?", answer: "n^r arrangements if each object can be repeated." },
        { question: "Circular permutation?", answer: "n objects in a circle: (n−1)! arrangements." },
        { question: "Combination definition?", answer: "Selection of objects without considering order." },
        { question: "Number of combinations of n objects taken r at a time?", answer: "nCr = n! / [r!(n−r)!]." },
        { question: "Relation between permutation and combination?", answer: "nPr = nCr × r!." },
        { question: "Properties of nCr?", answer: "nC0 = 1, nCn = 1, nCr = nC(n−r)."}, 
        { question: "Example permutation?", answer: "Arranging A, B, C → ABC, ACB, BAC, BCA, CAB, CBA → 6 permutations." },
        { question: "Example combination?", answer: "Selecting 2 letters from A, B, C → AB, AC, BC → 3 combinations." },
        { question: "Applications?", answer: "Counting problems, probability, arrangements in real life." },
        { question: "Repeated objects in permutation?", answer: "n! / (p! q! r! ...) if there are repeated objects." },
        { question: "Permutation of letters with repetition?", answer: "If repetition allowed: n^r." },
        { question: "Permutation in word problems?", answer: "Consider order and distinguishable objects." },
        { question: "Combination in word problems?", answer: "Order does not matter; only selection counts." },
        { question: "Circular vs linear permutation?", answer: "Circular: first position fixed, (n−1)!, Linear: n!." },
        { question: "Tips?", answer: "Identify whether order matters (permutation) or not (combination)."},
        { question: "Common mistakes?", answer: "Confusing permutation with combination, forgetting factorial formulas." }
    ],
    test: [
        { question: "3 objects A, B, C arranged in order, number of permutations:", options: ["6", "3", "9", "1"], correct: 0 },
        { question: "4 objects taken 2 at a time (permutation):", options: ["12", "6", "4", "8"], correct: 0 },
        { question: "4 objects taken 2 at a time (combination):", options: ["6", "12", "4", "2"], correct: 0 },
        { question: "nPr =", options: ["nCr × r!", "nCr / r!", "nCr", "n!"], correct: 0 },
        { question: "nCr = ?", options: ["n! / (r!(n−r)!)", "n! / (n−r)!", "n! / r!", "n!"], correct: 0 },
        { question: "0! =", options: ["1", "0", "Undefined", "−1"], correct: 0 },
        { question: "Circular permutation of 5 objects:", options: ["24", "120", "5", "20"], correct: 0 },
        { question: "Number of combinations selecting 3 from 5:", options: ["10", "15", "5", "20"], correct: 0 },
        { question: "Permutation with repetition for 3 objects, 2 positions:", options: ["9", "6", "3", "1"], correct: 0 },
        { question: "Example of combination problem:", options: ["Choosing 2 letters from ABC", "Arranging ABC", "Arranging letters in a circle", "All"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter7 = class11Chapter7;
