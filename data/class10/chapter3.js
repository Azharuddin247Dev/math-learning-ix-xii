// Class 10 - Chapter 3: Quadratic Equations
const class10Chapter3 = {
    reading: [
        { question: "What is a quadratic equation?", answer: "A quadratic equation is a polynomial equation of degree 2 in the form ax² + bx + c = 0, where a ≠ 0." },
        { question: "Standard form of quadratic equation?", answer: "ax² + bx + c = 0, where a, b, c are constants." },
        { question: "Roots of quadratic equation?", answer: "Values of x that satisfy the equation ax² + bx + c = 0." },
        { question: "Factorization method?", answer: "Express quadratic as product of two linear factors: ax² + bx + c = (px + q)(rx + s) = 0." },
        { question: "Quadratic formula?", answer: "x = [-b ± √(b²−4ac)] / 2a." },
        { question: "Discriminant (D)?", answer: "D = b² − 4ac; determines nature of roots." },
        { question: "Nature of roots using D?", answer: "D>0: two distinct real roots; D=0: two equal roots; D<0: two complex roots." },
        { question: "Sum of roots?", answer: "Sum = α + β = −b/a." },
        { question: "Product of roots?", answer: "Product = αβ = c/a." },
        { question: "Relationship with coefficients?", answer: "For ax²+bx+c=0, sum of roots = −b/a, product of roots = c/a." },
        { question: "Completing the square?", answer: "Rewrite equation as (x + p)² = q to find roots." },
        { question: "Word problems?", answer: "Translate problem into quadratic equation and solve using factorization, formula, or completing the square." },
        { question: "Applications of quadratic equations?", answer: "Physics problems, area problems, economics, motion, trajectory, engineering design." },
        { question: "Quadratic with integer roots?", answer: "Can be factored into (x−p)(x−q)=0 where p,q are integers." },
        { question: "Quadratic with rational roots?", answer: "Roots expressed as fractions; can use factorization or formula." },
        { question: "Quadratic with irrational roots?", answer: "Roots involve square root of non-perfect square; formula required." },
        { question: "Sum and product shortcuts?", answer: "Given sum S and product P, quadratic = x² − Sx + P = 0." },
        { question: "Check roots?", answer: "Substitute roots into original equation to verify correctness." },
        { question: "Discriminant zero example?", answer: "x² − 4x + 4 = 0; roots are equal, x = 2." },
        { question: "Discriminant negative example?", answer: "x² + x + 1 = 0; D < 0, roots are complex." }
    ],
    test: [
        { question: "Quadratic equation degree?", options: ["1", "2", "3", "0"], correct: 1 },
        { question: "Quadratic formula:", options: ["x = [-b ± √(b²−4ac)]/2a", "x = [-b ± √(b²+4ac)]/2a", "x = [-b ± √(4ac−b²)]/2a", "x = [-b ± √(b²−2ac)]/a"], correct: 0 },
        { question: "Discriminant D = b² − 4ac < 0:", options: ["Two distinct real roots", "Two equal roots", "No real roots", "One real root"], correct: 2 },
        { question: "Sum of roots of ax²+bx+c=0:", options: ["−b/a", "c/a", "b/a", "−c/a"], correct: 0 },
        { question: "Product of roots:", options: ["c/a", "−b/a", "a/c", "b/a"], correct: 0 },
        { question: "Factorization of x²−5x+6=0:", options: ["(x−2)(x−3)", "(x+2)(x+3)", "(x−1)(x−6)", "(x+1)(x−6)"], correct: 0 },
        { question: "Quadratic with equal roots example:", options: ["x²−4x+4=0", "x²−5x+6=0", "x²+3x+2=0", "x²−x−6=0"], correct: 0 },
        { question: "Roots of x²−3x−10=0:", options: ["5, −2", "2, −5", "−5, −2", "5,2"], correct: 0 },
        { question: "Check roots 2 and 3 for x²−5x+6=0:", options: ["Yes correct", "No"], correct: 0 },
        { question: "Method not used to solve quadratic:", options: ["Factorization", "Quadratic formula", "Completing the square", "Differentiation"], correct: 3 }
    ],
    broad: [
        { topic: "Quadratic Equations Overview", content: "Quadratic equations are fundamental in algebra and appear in real-life scenarios like projectile motion, area optimization, and economics. Understanding discriminant, factorization, and formula methods is essential." },
        { topic: "Discriminant and Nature of Roots", content: "The discriminant D = b²-4ac determines whether roots are real, equal, or complex. Positive D gives two distinct real roots, zero gives repeated roots, negative D gives complex roots." },
        { topic: "Sum & Product of Roots", content: "Sum and product formulas (α+β=−b/a, αβ=c/a) help quickly form quadratic equations without solving. Useful in word problems and shortcut methods." },
        { topic: "Methods to Solve Quadratics", content: "Three main methods: Factorization (simple and integer roots), Quadratic formula (all types of roots), Completing the square (especially for perfect square trinomials)." },
        { topic: "Applications", content: "Quadratic equations model areas, trajectories, economics problems, optimization, physics motion equations, and engineering calculations." }
    ],
    broadTest: [
        { question: "Discriminant D formula:", options: ["b² − 4ac", "b² + 4ac", "2b − 4ac", "4ac − b²"], correct: 0 },
        { question: "Roots are equal if:", options: ["D>0", "D=0", "D<0", "D=1"], correct: 1 },
        { question: "Form quadratic with sum 5 and product 6:", options: ["x² − 5x + 6=0", "x² + 5x + 6=0", "x² − 6x + 5=0", "x² + 6x + 5=0"], correct: 0 },
        { question: "Quadratic with complex roots example:", options: ["x² + x + 1=0", "x² − 5x + 6=0", "x² − 4x + 4=0", "x² − 3x − 10=0"], correct: 0 },
        { question: "Method suitable for irrational roots:", options: ["Factorization", "Quadratic formula", "Trial & error", "None"], correct: 1 },
        { question: "Check roots method:", options: ["Substitute roots into equation", "Guess", "Factor", "Derivative"], correct: 0 },
        { question: "Sum of roots of x² − 7x + 10=0:", options: ["7", "-7", "10", "-10"], correct: 1 },
        { question: "Product of roots of x² − 7x + 10=0:", options: ["10", "-10", "7", "-7"], correct: 0 },
        { question: "Factorization of x² − x − 6=0:", options: ["(x−3)(x+2)", "(x+3)(x−2)", "(x−2)(x−3)", "(x+2)(x−3)"], correct: 0 },
        { question: "Nature of roots of x² + 4x + 5=0:", options: ["Real and distinct", "Real and equal", "Complex", "None"], correct: 2 }
    ]
};

// Export for dynamic loading
window.class10Chapter3 = class10Chapter3;
