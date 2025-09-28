// Class 10 - Chapter 14: Probability
const class10Chapter14 = {
    reading: [
        { question: "What is Probability?", answer: "Probability is the measure of likelihood of an event occurring, expressed as a number between 0 and 1." },
        { question: "Experiment?", answer: "An activity with well-defined outcomes. Example: tossing a coin, rolling a die." },
        { question: "Sample space?", answer: "Set of all possible outcomes of an experiment. Example: S = {H, T} for a coin toss." },
        { question: "Event?", answer: "A subset of the sample space. Example: getting an even number when rolling a die." },
        { question: "Favorable outcomes?", answer: "Number of outcomes in an event that satisfy the condition." },
        { question: "Classical definition of probability?", answer: "P(E) = Number of favorable outcomes / Total number of outcomes." },
        { question: "Impossible event?", answer: "An event with probability 0. Example: rolling a 7 on a standard die." },
        { question: "Certain event?", answer: "An event with probability 1. Example: getting head or tail in a coin toss." },
        { question: "Complementary events?", answer: "Two events are complementary if one occurs when the other does not. P(E') = 1 − P(E)."},
        { question: "Simple examples?", answer: "Rolling a die: P(odd) = 3/6 = 1/2." },
        { question: "Sum of probabilities of all outcomes?", answer: "Always 1." },
        { question: "Real-life applications?", answer: "Games of chance, weather forecasting, insurance, risk analysis." },
        { question: "Tips for solving probability problems?", answer: "List all outcomes, count favorable outcomes, use formula P(E) = favorable/total." },
        { question: "Check probability value?", answer: "It should always lie between 0 and 1." },
        { question: "Mutually exclusive events?", answer: "Two events that cannot occur simultaneously. P(A ∩ B) = 0." },
        { question: "Example of mutually exclusive events?", answer: "Getting head or tail in one coin toss." },
        { question: "Independent events?", answer: "Occurrence of one event does not affect the probability of the other." },
        { question: "Example of independent events?", answer: "Tossing two coins, first coin result does not affect second coin." },
        { question: "Probability of complementary event?", answer: "P(E') = 1 − P(E)."},
        { question: "Important note?", answer: "Sum of probabilities of all mutually exclusive and exhaustive events = 1." }
    ],
    test: [
        { question: "Probability of getting head in coin toss:", options: ["1/2", "1/3", "1", "0"], correct: 0 },
        { question: "Probability of getting even number in rolling a die:", options: ["1/2", "1/3", "1/6", "1/4"], correct: 0 },
        { question: "Probability of impossible event:", options: ["0", "1", "1/2", "Cannot say"], correct: 0 },
        { question: "Probability of certain event:", options: ["1", "0", "1/2", "Depends"], correct: 0 },
        { question: "Complementary event P(E') =", options: ["1 − P(E)", "P(E)", "0", "1"], correct: 0 },
        { question: "Sum of probabilities of all outcomes:", options: ["1", "0", "Depends", "2"], correct: 0 },
        { question: "Two mutually exclusive events:", options: ["Cannot occur together", "Always occur together", "Independent", "None"], correct: 0 },
        { question: "Two independent events:", options: ["Occurrence of one does not affect other", "Always occur together", "Cannot occur together", "None"], correct: 0 },
        { question: "Favorable outcomes for rolling even on die:", options: ["2,4,6", "1,3,5", "1,2,3", "4,5,6"], correct: 0 },
        { question: "Probability value lies between:", options: ["0 and 1", "-1 and 1", "0 and 2", "Any number"], correct: 0 }
    ],
     broad: [
        { question: "What is Probability?", answer: "Probability is the measure of likelihood of an event occurring, expressed as a number between 0 and 1." },
        { question: "Experiment?", answer: "An activity with well-defined outcomes. Example: tossing a coin, rolling a die." },
        { question: "Sample space?", answer: "Set of all possible outcomes of an experiment. Example: S = {H, T} for a coin toss." },
        { question: "Event?", answer: "A subset of the sample space. Example: getting an even number when rolling a die." },
        { question: "Favorable outcomes?", answer: "Number of outcomes in an event that satisfy the condition." },
        { question: "Classical definition of probability?", answer: "P(E) = Number of favorable outcomes / Total number of outcomes." },
        { question: "Impossible event?", answer: "An event with probability 0. Example: rolling a 7 on a standard die." },
        { question: "Certain event?", answer: "An event with probability 1. Example: getting head or tail in a coin toss." },
        { question: "Complementary events?", answer: "Two events are complementary if one occurs when the other does not. P(E') = 1 − P(E)."},
        { question: "Simple examples?", answer: "Rolling a die: P(odd) = 3/6 = 1/2." },
        { question: "Sum of probabilities of all outcomes?", answer: "Always 1." },
        { question: "Real-life applications?", answer: "Games of chance, weather forecasting, insurance, risk analysis." },
        { question: "Tips for solving probability problems?", answer: "List all outcomes, count favorable outcomes, use formula P(E) = favorable/total." },
        { question: "Check probability value?", answer: "It should always lie between 0 and 1." },
        { question: "Mutually exclusive events?", answer: "Two events that cannot occur simultaneously. P(A ∩ B) = 0." },
        { question: "Example of mutually exclusive events?", answer: "Getting head or tail in one coin toss." },
        { question: "Independent events?", answer: "Occurrence of one event does not affect the probability of the other." },
        { question: "Example of independent events?", answer: "Tossing two coins, first coin result does not affect second coin." },
        { question: "Probability of complementary event?", answer: "P(E') = 1 − P(E)."},
        { question: "Important note?", answer: "Sum of probabilities of all mutually exclusive and exhaustive events = 1." }
    ],
    broadTest: [
        { question: "Probability of getting head in coin toss:", options: ["1/2", "1/3", "1", "0"], correct: 0 },
        { question: "Probability of getting even number in rolling a die:", options: ["1/2", "1/3", "1/6", "1/4"], correct: 0 },
        { question: "Probability of impossible event:", options: ["0", "1", "1/2", "Cannot say"], correct: 0 },
        { question: "Probability of certain event:", options: ["1", "0", "1/2", "Depends"], correct: 0 },
        { question: "Complementary event P(E') =", options: ["1 − P(E)", "P(E)", "0", "1"], correct: 0 },
        { question: "Sum of probabilities of all outcomes:", options: ["1", "0", "Depends", "2"], correct: 0 },
        { question: "Two mutually exclusive events:", options: ["Cannot occur together", "Always occur together", "Independent", "None"], correct: 0 },
        { question: "Two independent events:", options: ["Occurrence of one does not affect other", "Always occur together", "Cannot occur together", "None"], correct: 0 },
        { question: "Favorable outcomes for rolling even on die:", options: ["2,4,6", "1,3,5", "1,2,3", "4,5,6"], correct: 0 },
        { question: "Probability value lies between:", options: ["0 and 1", "-1 and 1", "0 and 2", "Any number"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class10Chapter14 = class10Chapter14;
