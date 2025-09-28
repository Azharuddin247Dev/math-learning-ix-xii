// Class 10 - Chapter 5: Variation
const class10Chapter5 = {
    reading: [
        { question: "What is variation in mathematics?", answer: "Variation is a relationship between two or more quantities in which one quantity changes in response to changes in another." },
        { question: "Direct variation?", answer: "When one quantity increases or decreases, the other increases or decreases in the same ratio. Mathematically, y ∝ x or y = kx, k ≠ 0." },
        { question: "Inverse variation?", answer: "When one quantity increases, the other decreases so that the product is constant. Mathematically, y ∝ 1/x or xy = k." },
        { question: "Joint variation?", answer: "When a quantity varies directly with the product of two or more quantities. Mathematically, z ∝ xy or z = kxy." },
        { question: "Combined variation?", answer: "A combination of direct and inverse variation. Example: z = kx/y." },
        { question: "Constant of proportionality (k)?", answer: "A non-zero constant that relates two varying quantities in a variation relationship." },
        { question: "Graph of direct variation?", answer: "Straight line passing through the origin." },
        { question: "Graph of inverse variation?", answer: "A rectangular hyperbola in the first and third quadrants." },
        { question: "Applications of direct variation?", answer: "Speed and distance (if time constant), cost and quantity, salary and hours worked." },
        { question: "Applications of inverse variation?", answer: "Time and speed (if distance constant), pressure and volume (Boyle's law)."},
        { question: "Applications of joint variation?", answer: "Force, mass, and acceleration (Newton’s law), area = length × breadth." },
        { question: "Solving variation problems?", answer: "Identify type of variation, find constant k using given values, then calculate required quantity." },
        { question: "Units of k?", answer: "Depends on quantities involved; k carries units to match both sides of equation." },
        { question: "Check results?", answer: "Substitute values back to see if relation holds." },
        { question: "Direct variation example:", answer: "If y = 3x and x = 4, then y = 12." },
        { question: "Inverse variation example:", answer: "If xy = 8 and x = 2, then y = 4." },
        { question: "Joint variation example:", answer: "If z = kxy, k=2, x=3, y=4, then z = 24." },
        { question: "Combined variation example:", answer: "z = kx/y, k=6, x=4, y=2, then z = 12." },
        { question: "Importance of variation?", answer: "Helps model real-life relationships and solve algebraic problems efficiently." },
        { question: "Tips for solving problems?", answer: "Always identify the type of variation first, calculate k using given data, and substitute carefully." }
    ],
    test: [
        { question: "If y = kx, type of variation:", options: ["Direct", "Inverse", "Joint", "Combined"], correct: 0 },
        { question: "If xy = k, type of variation:", options: ["Direct", "Inverse", "Joint", "Combined"], correct: 1 },
        { question: "If z = kxy, type of variation:", options: ["Direct", "Inverse", "Joint", "Combined"], correct: 2 },
        { question: "If z = kx/y, type of variation:", options: ["Direct", "Inverse", "Joint", "Combined"], correct: 3 },
        { question: "Constant of proportionality is:", options: ["Always 1", "Any non-zero constant", "Zero", "Depends on x"], correct: 1 },
        { question: "Graph of direct variation:", options: ["Parabola", "Hyperbola", "Line through origin", "Circle"], correct: 2 },
        { question: "Graph of inverse variation:", options: ["Line through origin", "Rectangular hyperbola", "Parabola", "Circle"], correct: 1 },
        { question: "If y = 3x and x = 5, y =", options: ["15", "8", "12", "10"], correct: 0 },
        { question: "If xy = 12 and x = 3, y =", options: ["9", "4", "6", "12"], correct: 1 },
        { question: "Importance of k in variation:", options: ["No importance", "Adjusts units and value", "Always 1", "None"], correct: 1 }
    ],
    broad: [
        { topic: "Direct Variation", content: "In direct variation, as one variable increases, the other increases proportionally. The constant k is found using known values. Graph is a straight line through origin." },
        { topic: "Inverse Variation", content: "In inverse variation, product of variables remains constant. As one increases, the other decreases. Graph is a rectangular hyperbola." },
        { topic: "Joint Variation", content: "A variable depends on the product of two or more variables directly. Solve by calculating constant k first." },
        { topic: "Combined Variation", content: "Combination of direct and inverse variation. Careful calculation of k using given values is necessary." },
        { topic: "Solving Problems", content: "Identify type, compute k using given values, substitute unknowns, and verify using the relation. Always include units where relevant." }
    ],
    broadTest: [
        { question: "If y ∝ x, and x=7, k=3, then y =", options: ["10", "21", "7", "3"], correct: 1 },
        { question: "If xy=24 and x=4, then y =", options: ["6", "24", "20", "12"], correct: 0 },
        { question: "If z ∝ xy, x=2, y=5, k=3, z =", options: ["15", "30", "20", "10"], correct: 1 },
        { question: "For z = kx/y, k=10, x=6, y=2, z =", options: ["30", "20", "60", "10"], correct: 0 },
        { question: "Graph of y ∝ x is:", options: ["Line through origin", "Parabola", "Hyperbola", "Circle"], correct: 0 },
        { question: "Graph of xy = k is:", options: ["Line", "Rectangular hyperbola", "Parabola", "Circle"], correct: 1 },
        { question: "Value of k in y = 5x, y=20, x=4:", options: ["4", "5", "1", "20"], correct: 1 },
        { question: "Direct variation example: y=2x, x=3, y=", options: ["5", "6", "2", "3"], correct: 1 },
        { question: "Inverse variation example: xy=10, x=2, y=", options: ["8", "5", "10", "2"], correct: 1 },
        { question: "Importance of k:", options: ["Adjusts magnitude and units", "Always 1", "No importance", "None"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class10Chapter5 = class10Chapter5;
