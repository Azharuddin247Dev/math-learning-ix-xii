// Class 12 - Chapter 5: Continuity and Differentiability
const class12Chapter5 = {
    reading: [
        { question: "What is continuity of a function?", answer: "A function f(x) is continuous at x = a if lim(x→a) f(x) = f(a)."},
        { question: "Discontinuity?", answer: "Point where function is not continuous. Types: removable, jump, infinite."},
        { question: "Removable discontinuity?", answer: "Discontinuity that can be 'removed' by redefining f(a)."},
        { question: "Jump discontinuity?", answer: "Left-hand limit ≠ right-hand limit at a point."},
        { question: "Infinite discontinuity?", answer: "Function tends to infinity near the point."},
        { question: "Differentiability?", answer: "Function f(x) is differentiable at x=a if derivative f'(a) exists."},
        { question: "Derivative definition?", answer: "f'(x) = lim(h→0) [f(x+h) − f(x)] / h."},
        { question: "Relation between continuity and differentiability?", answer: "Differentiable ⇒ Continuous, but Continuous ⇏ Differentiable."},
        { question: "Differentiability at a corner?", answer: "Not differentiable at a sharp corner."},
        { question: "Differentiability at a cusp?", answer: "Not differentiable at cusp."},
        { question: "Differentiability at vertical tangent?", answer: "Derivative does not exist (infinite slope)."},
        { question: "Higher order derivatives?", answer: "Second, third derivatives, etc., obtained by repeated differentiation."},
        { question: "Rules of differentiation?", answer: "Sum, difference, product, quotient, chain rule."},
        { question: "Derivatives of composite functions?", answer: "Use chain rule: (f∘g)'(x) = f'(g(x))·g'(x)."},
        { question: "Derivatives of inverse functions?", answer: "If y=f(x) invertible, then (f⁻¹)'(y) = 1 / f'(x)."},
        { question: "Physical meaning of derivative?", answer: "Rate of change, slope of tangent, velocity in motion problems."},
        { question: "Continuity in interval?", answer: "Function continuous at every point in interval."},
        { question: "Differentiability in interval?", answer: "Derivative exists at every point in interval."},
        { question: "Common mistakes?", answer: "Ignoring limits from both sides, derivative not defined at discontinuities."},
        { question: "Tips?", answer: "Check continuity first, then differentiate; apply correct differentiation rules."}
    ],
    test: [
        { question: "f(x)=x² is continuous at x=2?", options: ["Yes", "No", "Cannot say", "Only on left"], correct: 0 },
        { question: "Derivative of f(x)=x³ at x=1?", options: ["3", "1", "2", "0"], correct: 0 },
        { question: "Function with removable discontinuity?", options: ["sin(x)/x at x=0", "x²", "e^x", "ln(x)"], correct: 0 },
        { question: "f(x)=|x| differentiable at x=0?", options: ["No", "Yes", "Sometimes", "Cannot say"], correct: 0 },
        { question: "Derivative of f(x)=sin(x²)?", options: ["2x cos(x²)", "cos(x²)", "sin(x²)", "x cos(x²)"], correct: 0 },
        { question: "Continuity implies differentiability?", options: ["No", "Yes", "Always", "Sometimes"], correct: 0 },
        { question: "Derivative of f(x)=ln(x) is?", options: ["1/x", "ln(x)", "x", "-1/x"], correct: 0 },
        { question: "Discontinuity where left ≠ right limit?", options: ["Jump", "Removable", "Infinite", "Continuous"], correct: 0 },
        { question: "Derivative of f(x)=e^x?", options: ["e^x", "x e^x", "1", "0"], correct: 0 },
        { question: "Physical meaning of derivative?", options: ["Rate of change", "Area", "Volume", "Distance"], correct: 0 }
    ],
    broad: [
        { question: "What is continuity of a function?", answer: "A function f(x) is continuous at x = a if lim(x→a) f(x) = f(a)." },
        { question: "Discontinuity?", answer: "Point where function is not continuous. Types: removable, jump, infinite." },
        { question: "Removable discontinuity?", answer: "Discontinuity that can be 'removed' by redefining f(a)." },
        { question: "Jump discontinuity?", answer: "Left-hand limit ≠ right-hand limit at a point." },
        { question: "Infinite discontinuity?", answer: "Function tends to infinity near the point." },
        { question: "Differentiability?", answer: "Function f(x) is differentiable at x=a if derivative f'(a) exists." },
        { question: "Derivative definition?", answer: "f'(x) = lim(h→0) [f(x+h) − f(x)] / h." },
        { question: "Relation between continuity and differentiability?", answer: "Differentiable ⇒ Continuous, but Continuous ⇏ Differentiable." },
        { question: "Differentiability at a corner?", answer: "Not differentiable at a sharp corner." },
        { question: "Differentiability at a cusp?", answer: "Not differentiable at cusp." },
        { question: "Differentiability at vertical tangent?", answer: "Derivative does not exist (infinite slope)." },
        { question: "Higher order derivatives?", answer: "Second, third derivatives, etc., obtained by repeated differentiation." },
        { question: "Rules of differentiation?", answer: "Sum, difference, product, quotient, chain rule." },
        { question: "Derivatives of composite functions?", answer: "Use chain rule: (f∘g)'(x) = f'(g(x))·g'(x)." },
        { question: "Derivatives of inverse functions?", answer: "If y=f(x) invertible, then (f⁻¹)'(y) = 1 / f'(x)." },
        { question: "Physical meaning of derivative?", answer: "Rate of change, slope of tangent, velocity in motion problems." },
        { question: "Continuity in interval?", answer: "Function continuous at every point in interval." },
        { question: "Differentiability in interval?", answer: "Derivative exists at every point in interval." },
        { question: "Common mistakes?", answer: "Ignoring limits from both sides, derivative not defined at discontinuities." },
        { question: "Tips?", answer: "Check continuity first, then differentiate; apply correct differentiation rules." }
    ],
    broadTest: [
        { question: "f(x)=x² is continuous at x=2?", options: ["Yes", "No", "Cannot say", "Only on left"], correct: 0 },
        { question: "Derivative of f(x)=x³ at x=1?", options: ["3", "1", "2", "0"], correct: 0 },
        { question: "Function with removable discontinuity?", options: ["sin(x)/x at x=0", "x²", "e^x", "ln(x)"], correct: 0 },
        { question: "f(x)=|x| differentiable at x=0?", options: ["No", "Yes", "Sometimes", "Cannot say"], correct: 0 },
        { question: "Derivative of f(x)=sin(x²)?", options: ["2x cos(x²)", "cos(x²)", "sin(x²)", "x cos(x²)"], correct: 0 },
        { question: "Continuity implies differentiability?", options: ["No", "Yes", "Always", "Sometimes"], correct: 0 },
        { question: "Derivative of f(x)=ln(x) is?", options: ["1/x", "ln(x)", "x", "-1/x"], correct: 0 },
        { question: "Discontinuity where left ≠ right limit?", options: ["Jump", "Removable", "Infinite", "Continuous"], correct: 0 },
        { question: "Derivative of f(x)=e^x?", options: ["e^x", "x e^x", "1", "0"], correct: 0 },
        { question: "Physical meaning of derivative?", options: ["Rate of change", "Area", "Volume", "Distance"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter5 = class12Chapter5;
