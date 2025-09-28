// Class 11 - Chapter 1: Sets
const class11Chapter1 = {
    reading: [
        { question: "What is a set?", answer: "A set is a well-defined collection of distinct objects, called elements." },
        { question: "Notation of set?", answer: "Sets are usually denoted by capital letters, e.g., A = {1, 2, 3}." },
        { question: "Types of sets?", answer: "Empty set, finite set, infinite set, equal set, subset, power set, universal set." },
        { question: "Empty set?", answer: "Set with no elements, denoted by ∅ or {}." },
        { question: "Finite set?", answer: "Set containing a countable number of elements." },
        { question: "Infinite set?", answer: "Set with uncountable elements." },
        { question: "Subset?", answer: "A set A is a subset of B if every element of A is also in B, denoted A ⊆ B." },
        { question: "Power set?", answer: "Set of all subsets of a set A, denoted P(A)." },
        { question: "Universal set?", answer: "The set that contains all elements under consideration, usually denoted by U." },
        { question: "Union of sets?", answer: "A ∪ B = {x | x ∈ A or x ∈ B}." },
        { question: "Intersection of sets?", answer: "A ∩ B = {x | x ∈ A and x ∈ B}." },
        { question: "Difference of sets?", answer: "A − B = {x | x ∈ A but x ∉ B}." },
        { question: "Complement of a set?", answer: "A' = {x | x ∈ U and x ∉ A}." },
        { question: "Cardinality?", answer: "Number of elements in a set, denoted n(A)." },
        { question: "Venn diagram?", answer: "Diagrammatic representation of sets using circles to show relationships." },
        { question: "Disjoint sets?", answer: "Sets with no common elements, A ∩ B = ∅." },
        { question: "Subset examples?", answer: "If A = {1,2}, B = {1,2,3}, then A ⊆ B." },
        { question: "Union example?", answer: "A = {1,2}, B = {2,3} → A ∪ B = {1,2,3}." },
        { question: "Intersection example?", answer: "A = {1,2}, B = {2,3} → A ∩ B = {2}." },
        { question: "Difference example?", answer: "A = {1,2,3}, B = {2,3} → A − B = {1}." }
    ],
    test: [
        { question: "Which of these is a set?", options: ["{1,2,3}", "(1,2,3)", "1,2,3", "All are sets"], correct: 0 },
        { question: "Empty set is denoted by:", options: ["∅", "{}", "Both ∅ and {}", "0"], correct: 2 },
        { question: "If A = {1,2}, B = {1,2,3}, then A ⊆ B?", options: ["Yes", "No", "Cannot say", "Only sometimes"], correct: 0 },
        { question: "Union of A = {1,2}, B = {2,3}:", options: ["{1,2,3}", "{2}", "{1,3}", "{1,2}"], correct: 0 },
        { question: "Intersection of A = {1,2}, B = {2,3}:", options: ["{2}", "{1,2,3}", "{1,3}", "∅"], correct: 0 },
        { question: "Difference A−B if A = {1,2,3}, B = {2,3}:", options: ["{1}", "{2}", "{3}", "{1,2}"], correct: 0 },
        { question: "Complement of A in U = {1,2,3,4} if A = {1,2}:", options: ["{3,4}", "{1,2}", "{1,3}", "{2,4}"], correct: 0 },
        { question: "Cardinality of A = {1,2,3,4}:", options: ["4", "3", "2", "5"], correct: 0 },
        { question: "Disjoint sets example:", options: ["{1,2} and {3,4}", "{1,2} and {2,3}", "{1,2} and {1,2}", "None"], correct: 0 },
        { question: "Power set of {1,2} has how many elements?", options: ["4", "2", "3", "5"], correct: 0 }
    ],
    broad: [
        { question: "What is a set?", answer: "A set is a well-defined collection of distinct objects, called elements." },
        { question: "Notation of set?", answer: "Sets are usually denoted by capital letters, e.g., A = {1, 2, 3}." },
        { question: "Types of sets?", answer: "Empty set, finite set, infinite set, equal set, subset, power set, universal set." },
        { question: "Empty set?", answer: "Set with no elements, denoted by ∅ or {}." },
        { question: "Finite set?", answer: "Set containing a countable number of elements." },
        { question: "Infinite set?", answer: "Set with uncountable elements." },
        { question: "Subset?", answer: "A set A is a subset of B if every element of A is also in B, denoted A ⊆ B." },
        { question: "Power set?", answer: "Set of all subsets of a set A, denoted P(A)." },
        { question: "Universal set?", answer: "The set that contains all elements under consideration, usually denoted by U." },
        { question: "Union of sets?", answer: "A ∪ B = {x | x ∈ A or x ∈ B}." },
        { question: "Intersection of sets?", answer: "A ∩ B = {x | x ∈ A and x ∈ B}." },
        { question: "Difference of sets?", answer: "A − B = {x | x ∈ A but x ∉ B}." },
        { question: "Complement of a set?", answer: "A' = {x | x ∈ U and x ∉ A}." },
        { question: "Cardinality?", answer: "Number of elements in a set, denoted n(A)." },
        { question: "Venn diagram?", answer: "Diagrammatic representation of sets using circles to show relationships." },
        { question: "Disjoint sets?", answer: "Sets with no common elements, A ∩ B = ∅." },
        { question: "Subset examples?", answer: "If A = {1,2}, B = {1,2,3}, then A ⊆ B." },
        { question: "Union example?", answer: "A = {1,2}, B = {2,3} → A ∪ B = {1,2,3}." },
        { question: "Intersection example?", answer: "A = {1,2}, B = {2,3} → A ∩ B = {2}." },
        { question: "Difference example?", answer: "A = {1,2,3}, B = {2,3} → A − B = {1}." }
    ],
    broadTest: [
        { question: "Which of these is a set?", options: ["{1,2,3}", "(1,2,3)", "1,2,3", "All are sets"], correct: 0 },
        { question: "Empty set is denoted by:", options: ["∅", "{}", "Both ∅ and {}", "0"], correct: 2 },
        { question: "If A = {1,2}, B = {1,2,3}, then A ⊆ B?", options: ["Yes", "No", "Cannot say", "Only sometimes"], correct: 0 },
        { question: "Union of A = {1,2}, B = {2,3}:", options: ["{1,2,3}", "{2}", "{1,3}", "{1,2}"], correct: 0 },
        { question: "Intersection of A = {1,2}, B = {2,3}:", options: ["{2}", "{1,2,3}", "{1,3}", "∅"], correct: 0 },
        { question: "Difference A−B if A = {1,2,3}, B = {2,3}:", options: ["{1}", "{2}", "{3}", "{1,2}"], correct: 0 },
        { question: "Complement of A in U = {1,2,3,4} if A = {1,2}:", options: ["{3,4}", "{1,2}", "{1,3}", "{2,4}"], correct: 0 },
        { question: "Cardinality of A = {1,2,3,4}:", options: ["4", "3", "2", "5"], correct: 0 },
        { question: "Disjoint sets example:", options: ["{1,2} and {3,4}", "{1,2} and {2,3}", "{1,2} and {1,2}", "None"], correct: 0 },
        { question: "Power set of {1,2} has how many elements?", options: ["4", "2", "3", "5"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter1 = class11Chapter1;
