// Class 11 - Chapter 15: Probability
const class11Chapter15 = {
    reading: [
        { question: "What is probability?", answer: "Measure of likelihood of occurrence of an event, ranging from 0 to 1." },
        { question: "Random experiment?", answer: "An experiment whose outcome cannot be predicted with certainty." },
        { question: "Sample space?", answer: "Set of all possible outcomes of a random experiment, denoted by S." },
        { question: "Event?", answer: "A subset of sample space; collection of outcomes." },
        { question: "Favorable outcomes?", answer: "Outcomes in an event that satisfy the condition." },
        { question: "Classical probability?", answer: "P(E) = Number of favorable outcomes / Total number of outcomes." },
        { question: "Complement of an event?", answer: "Event E' consisting of outcomes not in E; P(E') = 1 − P(E)."},
        { question: "Union of two events?", answer: "E ∪ F = Event containing outcomes in E or F or both."},
        { question: "Intersection of two events?", answer: "E ∩ F = Event containing outcomes in both E and F."},
        { question: "Mutually exclusive events?", answer: "Events that cannot occur simultaneously; E ∩ F = ∅."},
        { question: "Independent events?", answer: "Occurrence of one event does not affect the probability of the other."},
        { question: "Conditional probability?", answer: "Probability of E given F occurred: P(E|F) = P(E ∩ F)/P(F)."},
        { question: "Addition rule?", answer: "P(E ∪ F) = P(E) + P(F) − P(E ∩ F)."},
        { question: "Multiplication rule?", answer: "P(E ∩ F) = P(E) * P(F) if independent."},
        { question: "Tips?", answer: "Identify sample space, count favorable outcomes, check for independence/exclusivity."},
        { question: "Common mistakes?", answer: "Forgetting mutually exclusive or independent conditions, incorrect counting."},
        { question: "Applications?", answer: "Games, insurance, risk analysis, quality control, statistics."},
        { question: "Complementary events formula?", answer: "P(E') = 1 − P(E)."},
        { question: "Check solution?", answer: "Sum of probabilities of all mutually exclusive events =1."},
        { question: "Probability range?", answer: "0 ≤ P(E) ≤ 1 for any event E."}
    ],
    test: [
        { question: "Probability of getting head in a coin toss:", options: ["1/2", "1/4", "1", "0"], correct: 0 },
        { question: "Sum of probabilities of all outcomes:", options: ["1", "0", "2", "Depends"], correct: 0 },
        { question: "Probability of rolling 3 on a die:", options: ["1/6", "1/5", "1/3", "1/2"], correct: 0 },
        { question: "P(E') if P(E)=0.7:", options: ["0.3", "0.7", "1", "0"], correct: 0 },
        { question: "Two events are mutually exclusive if:", options: ["Cannot occur together", "Always occur together", "Independent", "Complementary"], correct: 0 },
        { question: "Two events are independent if:", options: ["P(E ∩ F) = P(E)P(F)", "P(E) = P(F)", "P(E ∪ F) = P(E)+P(F)", "Cannot occur together"], correct: 0 },
        { question: "P(E ∪ F) for P(E)=0.4, P(F)=0.5, P(E ∩ F)=0.2:", options: ["0.7", "0.6", "0.5", "0.8"], correct: 0 },
        { question: "P(E ∩ F) for independent P(E)=0.5, P(F)=0.6:", options: ["0.3", "0.11", "0.2", "0.6"], correct: 0 },
        { question: "Number of favorable outcomes of even number on die:", options: ["3", "2", "4", "6"], correct: 0 },
        { question: "Classical probability formula:", options: ["Favorable/Total outcomes", "Total/Favorable", "Sum of outcomes", "None"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter15 = class11Chapter15;
