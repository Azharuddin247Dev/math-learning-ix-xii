// Class 10 - Chapter 12: Trigonometry
const class10Chapter12 = {
    reading: [
        { question: "What is Trigonometry?", answer: "Trigonometry is the branch of mathematics dealing with relationships between sides and angles of triangles." },
        { question: "Trigonometric ratios?", answer: "For a right-angled triangle: sinθ = opposite/hypotenuse, cosθ = adjacent/hypotenuse, tanθ = opposite/adjacent." },
        { question: "Reciprocal ratios?", answer: "cosecθ = 1/sinθ, secθ = 1/cosθ, cotθ = 1/tanθ." },
        { question: "Trigonometric identities?", answer: "Basic identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = cosec²θ." },
        { question: "Values of trigonometric ratios for standard angles?", answer: "0°, 30°, 45°, 60°, 90° – learn using triangle or unit circle." },
        { question: "Complementary angles?", answer: "sin(90°−θ) = cosθ, cos(90°−θ) = sinθ, tan(90°−θ) = cotθ, cot(90°−θ) = tanθ, sec(90°−θ) = cosecθ, cosec(90°−θ) = secθ." },
        { question: "Heights and distances?", answer: "Application of trigonometry to find heights of objects or distances using angles of elevation or depression." },
        { question: "Angle of elevation?", answer: "Angle between horizontal and line of sight when looking up at an object." },
        { question: "Angle of depression?", answer: "Angle between horizontal and line of sight when looking down at an object." },
        { question: "Use of tan in heights & distances?", answer: "tanθ = opposite/adjacent; used to find height or distance." },
        { question: "Use of sin and cos?", answer: "sinθ = opposite/hypotenuse, cosθ = adjacent/hypotenuse; used in inclined planes, ladders, towers." },
        { question: "Trigonometric tables?", answer: "Provide values of ratios for standard angles to solve problems." },
        { question: "Solving problems tips?", answer: "Draw diagram, label triangle, identify angle, use correct ratio, apply formula, solve." },
        { question: "Law of sines?", answer: "In any triangle ABC: a/sinA = b/sinB = c/sinC." },
        { question: "Law of cosines?", answer: "For any triangle: c² = a² + b² − 2ab cosC." },
        { question: "Real-life applications?", answer: "Navigation, engineering, surveying, astronomy, architecture." },
        { question: "Trigonometry in construction?", answer: "Used to calculate slopes, heights of buildings, angles of elevation/depression." },
        { question: "Check solution?", answer: "Verify using Pythagoras theorem or trigonometric identities." },
        { question: "Use of reciprocal ratios?", answer: "Simplifies calculations in solving triangles." },
        { question: "Important triangles?", answer: "30°-60°-90° and 45°-45°-90° triangles; standard ratio values help in quick calculations." }
    ],
    test: [
        { question: "sin30° =", options: ["1/2", "√3/2", "1", "0"], correct: 0 },
        { question: "cos60° =", options: ["1/2", "√3/2", "1", "0"], correct: 0 },
        { question: "tan45° =", options: ["1", "0", "√3", "Undefined"], correct: 0 },
        { question: "cot60° =", options: ["1/√3", "√3", "0", "1"], correct: 0 },
        { question: "Height of tower using angle 30° and distance 50m:", options: ["25 m", "50 m", "86.6 m", "100 m"], correct: 0 },
        { question: "sin²θ + cos²θ =", options: ["0", "1", "2", "tan²θ"], correct: 1 },
        { question: "Angle of elevation is measured from:", options: ["Vertical", "Horizontal", "Inclined line", "None"], correct: 1 },
        { question: "tanθ =", options: ["Opposite/Adjacent", "Adjacent/Opposite", "Hypotenuse/Opposite", "Hypotenuse/Adjacent"], correct: 0 },
        { question: "cosecθ =", options: ["1/sinθ", "1/cosθ", "1/tanθ", "tanθ"], correct: 0 },
        { question: "sin(90°−θ) =", options: ["cosθ", "sinθ", "tanθ", "cotθ"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class10Chapter12 = class10Chapter12;
