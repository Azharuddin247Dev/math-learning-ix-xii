// Class 9 - Chapter 15: Probability
const class9Chapter15 = {
    reading: [
        { question: "What is probability?", answer: "Probability is the measure of the likelihood of an event occurring, ranging from 0 (impossible) to 1 (certain)." },
        { question: "Experiment?", answer: "A process or action that leads to well-defined outcomes." },
        { question: "Random experiment?", answer: "An experiment whose outcome cannot be predicted with certainty." },
        { question: "Outcome?", answer: "A possible result of an experiment." },
        { question: "Sample space?", answer: "The set of all possible outcomes of an experiment." },
        { question: "Event?", answer: "A subset of the sample space; a particular outcome or group of outcomes." },
        { question: "Favourable outcome?", answer: "An outcome in which the event of interest occurs." },
        { question: "Classical definition of probability?", answer: "Probability of an event E = (Number of favourable outcomes) / (Total number of outcomes) if all outcomes are equally likely." },
        { question: "Probability of impossible event?", answer: "0." },
        { question: "Probability of certain event?", answer: "1." },
        { question: "Complementary events?", answer: "Two events where one occurs if the other does not; P(E) + P(E') = 1." },
        { question: "Probability of tossing a coin:", answer: "P(Head) = 1/2, P(Tail) = 1/2." },
        { question: "Probability of rolling a die:", answer: "P(Each face) = 1/6." },
        { question: "Sum of probabilities of all outcomes in sample space?", answer: "Always 1." },
        { question: "Applications of probability?", answer: "Used in gambling, weather forecasting, insurance, statistics, and decision making." },
        { question: "Law of large numbers?", answer: "As the number of trials increases, the experimental probability approaches the theoretical probability." },
        { question: "Simple event?", answer: "An event consisting of a single outcome." },
        { question: "Compound event?", answer: "An event consisting of two or more simple events." },
        { question: "Mutually exclusive events?", answer: "Events that cannot occur at the same time." },
        { question: "Addition rule of probability?", answer: "For mutually exclusive events A and B: P(A ∪ B) = P(A) + P(B)." }
    ],
    test: [
        { question: "Probability of getting head in coin toss:", options: ["0", "1", "1/2", "1/6"], correct: 2 },
        { question: "Probability of rolling a 5 on die:", options: ["1/6", "1/5", "1/2", "1/3"], correct: 0 },
        { question: "Probability of impossible event:", options: ["0", "1", "1/2", "Cannot say"], correct: 0 },
        { question: "Probability of certain event:", options: ["0", "1", "1/2", "Depends"], correct: 1 },
        { question: "Complement of event A:", options: ["A occurs", "A does not occur", "A and B occur", "None"], correct: 1 },
        { question: "Sum of probabilities of all outcomes:", options: ["0", "1", "Depends on experiment", "Cannot be determined"], correct: 1 },
        { question: "Mutually exclusive events cannot:", options: ["Occur together", "Occur separately", "Be simple", "Be compound"], correct: 0 },
        { question: "Simple event example:", options: ["Getting head", "Getting head or tail", "Rolling die twice", "None"], correct: 0 },
        { question: "Compound event example:", options: ["Getting head or tail", "Getting head", "Single die roll outcome", "Impossible event"], correct: 0 },
        { question: "Probability of event A or its complement:", options: ["0", "1", "Depends", "Cannot say"], correct: 1 }
    ],
     broad: [
        { topic: "Probability Overview", content: "Probability measures the likelihood of an event occurring, ranging from 0 (impossible) to 1 (certain). Random experiments, sample spaces, events, complementary events, and laws of probability are discussed in detail." },
        { topic: "Applications", content: "Used in gambling, insurance, weather forecasting, statistics, risk assessment, and decision-making. Examples include tossing coins, rolling dice, and drawing cards." },
        { topic: "Laws and Rules", content: "Classical definition, addition rule, law of large numbers, mutually exclusive events, simple and compound events." }
    ],
    broadTest: [
        { question: "Probability of impossible event?", options: ["0","1","1/2","Cannot say"], correct: 0 },
        { question: "Probability of certain event?", options: ["0","1","1/2","Depends"], correct: 1 },
        { question: "Sum of probabilities of all outcomes in sample space?", options: ["0","1","Depends","Cannot say"], correct: 1 },
        { question: "Complement of event A?", options: ["A occurs","A does not occur","Both","None"], correct: 1 },
        { question: "Example of compound event?", options: ["Getting head or tail","Single die roll","Getting head","Impossible"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class9Chapter15 = class9Chapter15;
