// Class 11 - Chapter 5: Complex Numbers and Quadratic Equations
const class11Chapter5 = {
    reading: [
        { question: "What is a complex number?", answer: "A complex number is of the form z = a + ib, where a and b are real numbers and i = √−1." },
        { question: "Real and imaginary parts?", answer: "For z = a + ib, Re(z) = a, Im(z) = b." },
        { question: "Pure imaginary number?", answer: "Complex number with real part 0, e.g., 5i." },
        { question: "Equality of complex numbers?", answer: "z₁ = z₂ if and only if their real and imaginary parts are equal." },
        { question: "Addition of complex numbers?", answer: "(a+ib) + (c+id) = (a+c) + i(b+d)." },
        { question: "Subtraction of complex numbers?", answer: "(a+ib) − (c+id) = (a−c) + i(b−d)." },
        { question: "Multiplication of complex numbers?", answer: "(a+ib)(c+id) = (ac−bd) + i(ad+bc)." },
        { question: "Division of complex numbers?", answer: "(a+ib)/(c+id) = [(ac+bd) + i(bc−ad)] / (c²+d²), c≠0." },
        { question: "Conjugate of complex number?", answer: "For z = a+ib, conjugate z̄ = a−ib." },
        { question: "Modulus of complex number?", answer: "|z| = √(a²+b²) for z = a+ib." },
        { question: "Argument of complex number?", answer: "θ = tan⁻¹(b/a), where z = a+ib." },
        { question: "Polar form of complex number?", answer: "z = r(cos θ + i sin θ), r = |z|, θ = arg(z)." },
        { question: "Euler's form?", answer: "z = r e^{iθ}, using Euler’s formula e^{iθ} = cos θ + i sin θ." },
        { question: "Quadratic equation?", answer: "Equation of form ax² + bx + c = 0, a≠0." },
        { question: "Discriminant?", answer: "Δ = b² − 4ac; determines nature of roots." },
        { question: "Nature of roots?", answer: "Δ>0: two real distinct, Δ=0: two real equal, Δ<0: two complex conjugates." },
        { question: "Solving quadratic by formula?", answer: "x = [−b ± √(b²−4ac)] / 2a." },
        { question: "Sum and product of roots?", answer: "For ax²+bx+c=0, sum α+β=−b/a, product αβ=c/a." },
        { question: "Graph of quadratic?", answer: "Parabola; opens upwards if a>0, downwards if a<0." },
        { question: "Applications?", answer: "Solving equations, signal processing, physics, engineering problems." }
    ],
    test: [
        { question: "Complex number z = 3 + 4i, Re(z) =", options: ["3", "4", "7", "1"], correct: 0 },
        { question: "Im(z) for z = 5 − 2i:", options: ["−2", "5", "2", "0"], correct: 0 },
        { question: "Conjugate of 2 + 3i:", options: ["2 − 3i", "−2 + 3i", "3 + 2i", "−2 − 3i"], correct: 0 },
        { question: "|3 + 4i| =", options: ["5", "7", "1", "25"], correct: 0 },
        { question: "(1 + i) + (2 − i) =", options: ["3 + 0i", "3 + i", "1 + 2i", "2 + i"], correct: 0 },
        { question: "(1 + i)(1 − i) =", options: ["2", "0", "1", "−1"], correct: 0 },
        { question: "Quadratic equation with roots 2,3:", options: ["x²−5x+6=0", "x²+5x+6=0", "x²−6x+5=0", "x²+6x+5=0"], correct: 0 },
        { question: "Discriminant Δ < 0 implies:", options: ["Complex roots", "Two real equal roots", "Two real distinct roots", "No roots"], correct: 0 },
        { question: "Sum of roots of ax²+bx+c=0:", options: ["−b/a", "c/a", b/a", "−c/b"], correct: 0 },
        { question: "Product of roots of ax²+bx+c=0:", options: ["c/a", "−b/a", "b/a", "−c/b"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter5 = class11Chapter5;
