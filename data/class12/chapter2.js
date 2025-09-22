// Class 12 - Chapter 2: Inverse Trigonometric Functions
const class12Chapter2 = {
    reading: [
        { question: "What is an inverse trigonometric function?", answer: "Function that reverses a trigonometric function, giving angle for a given value." },
        { question: "Notation?", answer: "sin⁻¹x, cos⁻¹x, tan⁻¹x, etc." },
        { question: "Domain and range of sin⁻¹x?", answer: "Domain: [-1,1], Range: [-π/2, π/2]." },
        { question: "Domain and range of cos⁻¹x?", answer: "Domain: [-1,1], Range: [0, π]." },
        { question: "Domain and range of tan⁻¹x?", answer: "Domain: all real x, Range: (-π/2, π/2)." },
        { question: "Principal value?", answer: "Unique value of inverse function in its range." },
        { question: "Properties?", answer: "sin(sin⁻¹x)=x, cos(cos⁻¹x)=x, tan(tan⁻¹x)=x, and compositions accordingly." },
        { question: "Odd/even properties?", answer: "sin⁻¹(−x)=−sin⁻¹x, cos⁻¹(−x)=π−cos⁻¹x, tan⁻¹(−x)=−tan⁻¹x." },
        { question: "Sum and difference formulas?", answer: "Used for addition/subtraction of inverse trig functions." },
        { question: "Derivatives?", answer: "d/dx[sin⁻¹x]=1/√(1−x²), d/dx[cos⁻¹x]=−1/√(1−x²), d/dx[tan⁻¹x]=1/(1+x²)."},
        { question: "Integrals?", answer: "∫ dx/√(1−x²) = sin⁻¹x + C, ∫ dx/(1+x²) = tan⁻¹x + C."},
        { question: "Tips?", answer: "Check domain before applying formulas; simplify expressions."},
        { question: "Common mistakes?", answer: "Ignoring principal value range, incorrect sign."},
        { question: "Applications?", answer: "Solving equations, integration, differentiation, geometry, physics."},
        { question: "Relationship between functions?", answer: "sin⁻¹x + cos⁻¹x = π/2, tan⁻¹x + cot⁻¹x = π/2."},
        { question: "Check solution?", answer: "Verify value lies within principal range."},
        { question: "Inverse of sec, cosec, cot?", answer: "sec⁻¹x, cosec⁻¹x, cot⁻¹x with specific domains."},
        { question: "Graph of inverse trig?", answer: "Reflection of original function across y=x within principal range."},
        { question: "Conversion?", answer: "tan⁻¹x = sin⁻¹(x/√(1+x²)), cos⁻¹x = π/2 − sin⁻¹x."},
        { question: "Physical meaning?", answer: "Angle corresponding to a given ratio in right triangle."}
    ],
    test: [
        { question: "Domain of sin⁻¹x:", options: ["[-1,1]", "[0, π]", "All real x", "[-π/2, π/2]"], correct: 0 },
        { question: "Range of cos⁻¹x:", options: ["[0, π]", "[-π/2, π/2]", "[-1,1]", "All real x"], correct: 0 },
        { question: "d/dx[sin⁻¹x]:", options: ["1/√(1−x²)", "-1/√(1−x²)", "1/(1+x²)", "√(1−x²)"], correct: 0 },
        { question: "sin⁻¹(1/2)=", options: ["π/6", "π/4", "π/3", "π/2"], correct: 0 },
        { question: "tan⁻¹1=", options: ["π/4", "π/2", "π/3", "π/6"], correct: 0 },
        { question: "cos⁻¹(0)=", options: ["π/2", "π/3", "π/4", "π"], correct: 0 },
        { question: "tan⁻¹x + cot⁻¹x=", options: ["π/2", "π/4", "π", "0"], correct: 0 },
        { question: "sin⁻¹(−x)=", options: ["−sin⁻¹x", "sin⁻¹x", "cos⁻¹x", "tan⁻¹x"], correct: 0 },
        { question: "cos⁻¹(−x)=", options: ["π − cos⁻¹x", "cos⁻¹x", "−cos⁻¹x", "sin⁻¹x"], correct: 0 },
        { question: "Derivative of tan⁻¹x:", options: ["1/(1+x²)", "1/√(1−x²)", "−1/(1+x²)", "√(1+x²)"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter2 = class12Chapter2;
