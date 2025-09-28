// Class 12 - Chapter 7: Integrals
const class12Chapter7 = {
    reading: [
        { question: "What is an integral?", answer: "An integral is the reverse process of differentiation; it represents area under a curve." },
        { question: "Indefinite integral?", answer: "Integral without limits; general form ∫f(x)dx = F(x) + C, where C is constant." },
        { question: "Definite integral?", answer: "Integral with upper and lower limits; gives numerical value of area: ∫ₐᵇ f(x)dx." },
        { question: "Basic rules of integration?", answer: "∫xⁿdx = xⁿ⁺¹/(n+1) + C (n≠−1), ∫k dx = kx + C, ∫[f(x)+g(x)]dx = ∫f(x)dx + ∫g(x)dx." },
        { question: "Integration by substitution?", answer: "Use substitution x=g(t), dx=g'(t)dt to simplify integral." },
        { question: "Integration by parts?", answer: "∫u dv = uv − ∫v du, useful for product of functions." },
        { question: "Partial fractions?", answer: "Used to integrate rational functions by breaking into simpler fractions." },
        { question: "Properties of definite integrals?", answer: "1. ∫ₐᵇ f(x)dx = −∫ᵦₐ f(x)dx, 2. ∫ₐᵇ [f(x)+g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx, 3. ∫ₐᵃ f(x)dx = 0." },
        { question: "Fundamental theorem of calculus?", answer: "If F'(x)=f(x), then ∫ₐᵇ f(x)dx = F(b)−F(a)."},
        { question: "Definite integral as area?", answer: "Area under curve y=f(x) from x=a to x=b; negative if below x-axis." },
        { question: "Applications?", answer: "Area, volume, displacement, physics problems." },
        { question: "Tips?", answer: "Check for substitution, simplify powers, constants outside integral." },
        { question: "Common mistakes?", answer: "Forgetting +C in indefinite, wrong limits in definite, sign errors." },
        { question: "Integrals of trigonometric functions?", answer: "∫sin x dx = −cos x + C, ∫cos x dx = sin x + C, ∫sec²x dx = tan x + C." },
        { question: "Integrals of exponential/log functions?", answer: "∫e^x dx = e^x + C, ∫dx/x = ln|x| + C." },
        { question: "Check solution?", answer: "Differentiate your answer; it should give original function." },
        { question: "Higher order integrals?", answer: "Repeated integration gives multiple antiderivatives." },
        { question: "Definite integral of constant?", answer: "∫ₐᵇ k dx = k(b−a)."},
        { question: "Splitting integrals?", answer: "∫ₐᵇ f(x)dx = ∫ₐᶜ f(x)dx + ∫ᶜᵇ f(x)dx." },
        { question: "Physical meaning?", answer: "Displacement from velocity, work from force, area under curve." }
    ],
    test: [
        { question: "∫x² dx =", options: ["x³/3 + C", "x²/2 + C", "2x + C", "x³ + C"], correct: 0 },
        { question: "∫e^x dx =", options: ["e^x + C", "x e^x + C", "ln x + C", "1/x"], correct: 0 },
        { question: "Definite integral ∫₀¹ x dx =", options: ["1/2", "1", "0", "2"], correct: 0 },
        { question: "∫sin x dx =", options: ["−cos x + C", "cos x + C", "sin x + C", "−sin x + C"], correct: 0 },
        { question: "Integration by parts formula?", options: ["∫u dv = uv − ∫v du", "∫u dv = du v − ∫v du", "∫u dv = ∫v du − uv", "∫u dv = uv + ∫v du"], correct: 0 },
        { question: "∫dx/x =", options: ["ln|x| + C", "x ln x", "1/x + C", "ln x"], correct: 0 },
        { question: "∫₀² k dx =", options: ["2k", "k", "k²", "0"], correct: 0 },
        { question: "Check indefinite integral by?", options: ["Differentiation", "Substitution", "Division", "Multiplication"], correct: 0 },
        { question: "Area under curve y=x from x=0 to x=1?", options: ["1/2", "1", "0", "2"], correct: 0 },
        { question: "∫cos x dx =", options: ["sin x + C", "−sin x + C", "cos x + C", "−cos x + C"], correct: 0 }
    ],
    broad: [
        { question: "What is an integral?", answer: "An integral is the reverse process of differentiation; it represents area under a curve." },
        { question: "Indefinite integral?", answer: "Integral without limits; general form ∫f(x)dx = F(x) + C, where C is constant." },
        { question: "Definite integral?", answer: "Integral with upper and lower limits; gives numerical value of area: ∫ₐᵇ f(x)dx." },
        { question: "Basic rules of integration?", answer: "∫xⁿdx = xⁿ⁺¹/(n+1) + C (n≠−1), ∫k dx = kx + C, ∫[f(x)+g(x)]dx = ∫f(x)dx + ∫g(x)dx." },
        { question: "Integration by substitution?", answer: "Use substitution x=g(t), dx=g'(t)dt to simplify integral." },
        { question: "Integration by parts?", answer: "∫u dv = uv − ∫v du, useful for product of functions." },
        { question: "Partial fractions?", answer: "Used to integrate rational functions by breaking into simpler fractions." },
        { question: "Properties of definite integrals?", answer: "1. ∫ₐᵇ f(x)dx = −∫ᵦₐ f(x)dx, 2. ∫ₐᵇ [f(x)+g(x)]dx = ∫ₐᵇ f(x)dx + ∫ₐᵇ g(x)dx, 3. ∫ₐᵃ f(x)dx = 0." },
        { question: "Fundamental theorem of calculus?", answer: "If F'(x)=f(x), then ∫ₐᵇ f(x)dx = F(b)−F(a)."},
        { question: "Definite integral as area?", answer: "Area under curve y=f(x) from x=a to x=b; negative if below x-axis." },
        { question: "Applications?", answer: "Area, volume, displacement, physics problems." },
        { question: "Tips?", answer: "Check for substitution, simplify powers, constants outside integral." },
        { question: "Common mistakes?", answer: "Forgetting +C in indefinite, wrong limits in definite, sign errors." },
        { question: "Integrals of trigonometric functions?", answer: "∫sin x dx = −cos x + C, ∫cos x dx = sin x + C, ∫sec²x dx = tan x + C." },
        { question: "Integrals of exponential/log functions?", answer: "∫e^x dx = e^x + C, ∫dx/x = ln|x| + C." },
        { question: "Check solution?", answer: "Differentiate your answer; it should give original function." },
        { question: "Higher order integrals?", answer: "Repeated integration gives multiple antiderivatives." },
        { question: "Definite integral of constant?", answer: "∫ₐᵇ k dx = k(b−a)."},
        { question: "Splitting integrals?", answer: "∫ₐᵇ f(x)dx = ∫ₐᶜ f(x)dx + ∫ᶜᵇ f(x)dx." },
        { question: "Physical meaning?", answer: "Displacement from velocity, work from force, area under curve." }
    ],
    broadTest: [
        { question: "∫x² dx =", options: ["x³/3 + C", "x²/2 + C", "2x + C", "x³ + C"], correct: 0 },
        { question: "∫e^x dx =", options: ["e^x + C", "x e^x + C", "ln x + C", "1/x"], correct: 0 },
        { question: "Definite integral ∫₀¹ x dx =", options: ["1/2", "1", "0", "2"], correct: 0 },
        { question: "∫sin x dx =", options: ["−cos x + C", "cos x + C", "sin x + C", "−sin x + C"], correct: 0 },
        { question: "Integration by parts formula?", options: ["∫u dv = uv − ∫v du", "∫u dv = du v − ∫v du", "∫u dv = ∫v du − uv", "∫u dv = uv + ∫v du"], correct: 0 },
        { question: "∫dx/x =", options: ["ln|x| + C", "x ln x", "1/x + C", "ln x"], correct: 0 },
        { question: "∫₀² k dx =", options: ["2k", "k", "k²", "0"], correct: 0 },
        { question: "Check indefinite integral by?", options: ["Differentiation", "Substitution", "Division", "Multiplication"], correct: 0 },
        { question: "Area under curve y=x from x=0 to x=1?", options: ["1/2", "1", "0", "2"], correct: 0 },
        { question: "∫cos x dx =", options: ["sin x + C", "−sin x + C", "cos x + C", "−cos x + C"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter7 = class12Chapter7;
