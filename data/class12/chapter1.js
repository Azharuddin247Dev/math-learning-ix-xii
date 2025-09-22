// Class 12 - Chapter 1: Relations and Functions
const class12Chapter1 = {
    reading: [
        { question: "What is a relation?", answer: "A relation R from set A to set B is a subset of Cartesian product A × B." },
        { question: "Domain of a relation?", answer: "Set of all first elements of ordered pairs in the relation." },
        { question: "Range of a relation?", answer: "Set of all second elements of ordered pairs in the relation." },
        { question: "Function definition?", answer: "A function f from A to B assigns exactly one element of B to each element of A." },
        { question: "One-one (injective) function?", answer: "Each element of domain maps to a unique element of range." },
        { question: "Onto (surjective) function?", answer: "Every element of range has at least one pre-image in domain." },
        { question: "Bijective function?", answer: "Function which is both injective and surjective." },
        { question: "Composition of functions?", answer: "If f:A→B and g:B→C, then g∘f(x) = g(f(x))." },
        { question: "Inverse function?", answer: "Function f⁻¹ such that f⁻¹(f(x))=x and f(f⁻¹(y))=y." },
        { question: "Identity function?", answer: "Function I(x) = x." },
        { question: "Domain and range notation?", answer: "Domain: D(f), Range: R(f)."},
        { question: "Tips?", answer: "Check mapping for one-one and onto, use algebra to find inverse."},
        { question: "Common mistakes?", answer: "Confusing one-one and onto, inverse not satisfying f⁻¹(f(x))=x."},
        { question: "Applications?", answer: "Computer science, mathematics, modeling real-life relations."},
        { question: "Horizontal line test?", answer: "Graphical test for one-one functions."},
        { question: "Vertical line test?", answer: "Graphical test to check if a curve represents a function."},
        { question: "Composite function example?", answer: "f(x)=2x+3, g(x)=x², then g∘f(x)=(2x+3)²."},
        { question: "Inverse function example?", answer: "f(x)=3x+2, f⁻¹(x)=(x−2)/3."},
        { question: "Checking function?", answer: "Ensure each input has exactly one output."},
        { question: "Set notation for functions?", answer: "f: A → B, f(x) ∈ B for x ∈ A."}
    ],
    test: [
        { question: "If f(x)=2x+3, f(2) is:", options: ["7", "5", "4", "6"], correct: 0 },
        { question: "Function f(x)=x² is one-one for x in:", options: ["x≥0", "All real x", "x≤0", "None"], correct: 0 },
        { question: "Inverse of f(x)=3x+2:", options: ["(x−2)/3", "3x−2", "1/(3x+2)", "None"], correct: 0 },
        { question: "Composition g(f(x)) if f(x)=x+1, g(x)=x²:", options: ["(x+1)²", "x²+1", "x²+2", "None"], correct: 0 },
        { question: "Onto function?", options: ["Every y∈B has pre-image", "Each x∈A maps to unique y", "Both", "None"], correct: 0 },
        { question: "Identity function I(x)=", options: ["x", "1", "0", "x²"], correct: 0 },
        { question: "Domain of f(x)=1/(x−2):", options: ["x≠2", "All real x", "x>2", "x<2"], correct: 0 },
        { question: "Range of f(x)=x² for x≥0:", options: ["y≥0", "y≤0", "All real y", "y>0"], correct: 0 },
        { question: "Horizontal line test checks:", options: ["One-one", "Onto", "Both", "None"], correct: 0 },
        { question: "Vertical line test checks:", options: ["Function", "One-one", "Onto", "None"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter1 = class12Chapter1;
