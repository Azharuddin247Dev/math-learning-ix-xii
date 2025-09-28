// Class 11 - Chapter 2: Relations and Functions
const class11Chapter2 = {
    reading: [
        { question: "What is a relation?", answer: "A relation from set A to set B is a subset of the Cartesian product A × B." },
        { question: "Cartesian product?", answer: "A × B = {(a, b) | a ∈ A, b ∈ B}." },
        { question: "Domain of a relation?", answer: "Set of all first elements of the ordered pairs in the relation." },
        { question: "Range of a relation?", answer: "Set of all second elements of the ordered pairs in the relation." },
        { question: "Function definition?", answer: "A function is a relation in which each element of the domain is related to exactly one element of the range." },
        { question: "Types of functions?", answer: "One-one (injective), onto (surjective), one-one onto (bijective), constant, identity, polynomial." },
        { question: "Injective function?", answer: "Different elements of the domain map to different elements of the range." },
        { question: "Surjective function?", answer: "Every element of the range has a pre-image in the domain." },
        { question: "Bijective function?", answer: "Function which is both injective and surjective." },
        { question: "Domain and range example?", answer: "f: {1,2,3} → {4,5,6}, f(1)=4, f(2)=5, f(3)=6 → domain = {1,2,3}, range = {4,5,6}." },
        { question: "Composition of functions?", answer: "If f: A → B and g: B → C, then g∘f: A → C defined as (g∘f)(x) = g(f(x))." },
        { question: "Invertible function?", answer: "A function f: A → B is invertible if there exists a function g: B → A such that g∘f = I_A and f∘g = I_B." },
        { question: "Identity function?", answer: "Function which maps each element to itself: I(x) = x." },
        { question: "Constant function?", answer: "Function where all elements of domain map to the same single element of the range." },
        { question: "Polynomial function?", answer: "Function of the form f(x) = a_nx^n + … + a_1x + a_0." },
        { question: "Graph of function?", answer: "Representation of ordered pairs (x, f(x)) on the coordinate plane." },
        { question: "Check if a relation is a function?", answer: "Each input must have exactly one output." },
        { question: "Real-life examples?", answer: "Salary based on hours worked, temperature vs time, population growth." },
        { question: "Composition example?", answer: "f(x)=x+1, g(x)=2x → g∘f(x)=2(x+1)=2x+2." },
        { question: "Inverse function example?", answer: "f(x)=2x+3 → f⁻¹(x)=(x−3)/2." }
    ],
    test: [
        { question: "If f: {1,2,3} → {4,5,6}, f(1)=4, f(2)=5, f(3)=6, domain is:", options: ["{1,2,3}", "{4,5,6}", "{1,2,3,4,5,6}", "{4,5}"], correct: 0 },
        { question: "Range of f: {1,2,3} → {4,5,6}, f(1)=4, f(2)=5, f(3)=6:", options: ["{4,5,6}", "{1,2,3}", "{1,2,3,4,5,6}", "{4,5}"], correct: 0 },
        { question: "Which is a function?", options: ["f: {1,2} → {3,4}, f(1)=3,f(2)=3", "f: {1,2} → {3,4}, f(1)=3,f(1)=4", "f: {1,2} → {3,4}, f(1)=3,f(1)=3,f(2)=4", "None"], correct: 0 },
        { question: "Injective function means:", options: ["Different domain elements map to different range elements", "Every range element has pre-image", "Both", "None"], correct: 0 },
        { question: "Surjective function means:", options: ["Every range element has pre-image", "Different domain elements map to different range elements", "Both", "None"], correct: 0 },
        { question: "Bijective function is:", options: ["Injective + Surjective", "Only Injective", "Only Surjective", "Neither"], correct: 0 },
        { question: "Composition g∘f of f(x)=x+1, g(x)=2x:", options: ["2x+2", "2x+1", "x+2", "x+1"], correct: 0 },
        { question: "Inverse of f(x)=2x+3:", options: ["(x−3)/2", "2x−3", "1/(2x+3)", "None"], correct: 0 },
        { question: "Identity function I(x) =", options: ["x", "1", "0", "f(x)"], correct: 0 },
        { question: "Constant function example:", options: ["f(x)=5", "f(x)=x", "f(x)=x²", "f(x)=x+1"], correct: 0 }
    ],
    broad: [
        { question: "What is a relation?", answer: "A relation from set A to set B is a subset of the Cartesian product A × B." },
        { question: "Cartesian product?", answer: "A × B = {(a, b) | a ∈ A, b ∈ B}." },
        { question: "Domain of a relation?", answer: "Set of all first elements of the ordered pairs in the relation." },
        { question: "Range of a relation?", answer: "Set of all second elements of the ordered pairs in the relation." },
        { question: "Function definition?", answer: "A function is a relation in which each element of the domain is related to exactly one element of the range." },
        { question: "Types of functions?", answer: "One-one (injective), onto (surjective), one-one onto (bijective), constant, identity, polynomial." },
        { question: "Injective function?", answer: "Different elements of the domain map to different elements of the range." },
        { question: "Surjective function?", answer: "Every element of the range has a pre-image in the domain." },
        { question: "Bijective function?", answer: "Function which is both injective and surjective." },
        { question: "Domain and range example?", answer: "f: {1,2,3} → {4,5,6}, f(1)=4, f(2)=5, f(3)=6 → domain = {1,2,3}, range = {4,5,6}." },
        { question: "Composition of functions?", answer: "If f: A → B and g: B → C, then g∘f: A → C defined as (g∘f)(x) = g(f(x))." },
        { question: "Invertible function?", answer: "A function f: A → B is invertible if there exists a function g: B → A such that g∘f = I_A and f∘g = I_B." },
        { question: "Identity function?", answer: "Function which maps each element to itself: I(x) = x." },
        { question: "Constant function?", answer: "Function where all elements of domain map to the same single element of the range." },
        { question: "Polynomial function?", answer: "Function of the form f(x) = a_nx^n + … + a_1x + a_0." },
        { question: "Graph of function?", answer: "Representation of ordered pairs (x, f(x)) on the coordinate plane." },
        { question: "Check if a relation is a function?", answer: "Each input must have exactly one output." },
        { question: "Real-life examples?", answer: "Salary based on hours worked, temperature vs time, population growth." },
        { question: "Composition example?", answer: "f(x)=x+1, g(x)=2x → g∘f(x)=2(x+1)=2x+2." },
        { question: "Inverse function example?", answer: "f(x)=2x+3 → f⁻¹(x)=(x−3)/2." }
    ],
    broadTest: [
        { question: "If f: {1,2,3} → {4,5,6}, f(1)=4, f(2)=5, f(3)=6, domain is:", options: ["{1,2,3}", "{4,5,6}", "{1,2,3,4,5,6}", "{4,5}"], correct: 0 },
        { question: "Range of f: {1,2,3} → {4,5,6}, f(1)=4, f(2)=5, f(3)=6:", options: ["{4,5,6}", "{1,2,3}", "{1,2,3,4,5,6}", "{4,5}"], correct: 0 },
        { question: "Which is a function?", options: ["f: {1,2} → {3,4}, f(1)=3,f(2)=3", "f: {1,2} → {3,4}, f(1)=3,f(1)=4", "f: {1,2} → {3,4}, f(1)=3,f(1)=3,f(2)=4", "None"], correct: 0 },
        { question: "Injective function means:", options: ["Different domain elements map to different range elements", "Every range element has pre-image", "Both", "None"], correct: 0 },
        { question: "Surjective function means:", options: ["Every range element has pre-image", "Different domain elements map to different range elements", "Both", "None"], correct: 0 },
        { question: "Bijective function is:", options: ["Injective + Surjective", "Only Injective", "Only Surjective", "Neither"], correct: 0 },
        { question: "Composition g∘f of f(x)=x+1, g(x)=2x:", options: ["2x+2", "2x+1", "x+2", "x+1"], correct: 0 },
        { question: "Inverse of f(x)=2x+3:", options: ["(x−3)/2", "2x−3", "1/(2x+3)", "None"], correct: 0 },
        { question: "Identity function I(x) =", options: ["x", "1", "0", "f(x)"], correct: 0 },
        { question: "Constant function example:", options: ["f(x)=5", "f(x)=x", "f(x)=x²", "f(x)=x+1"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter2 = class11Chapter2;
