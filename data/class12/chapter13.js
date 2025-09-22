// Class 12 - Chapter 13: Probability
const class12Chapter13 = {
    reading: [
        { question: "What is probability?", answer: "Probability measures the likelihood of an event, P(E) = Number of favorable outcomes / Total outcomes." },
        { question: "Random experiment?", answer: "An experiment whose outcome cannot be predicted with certainty." },
        { question: "Sample space?", answer: "The set of all possible outcomes of an experiment, denoted by S." },
        { question: "Event?", answer: "A subset of the sample space." },
        { question: "Complementary event?", answer: "If E is an event, its complement E' = outcomes not in E." },
        { question: "Conditional probability?", answer: "Probability of an event given that another event has occurred: P(A|B) = P(A∩B)/P(B), P(B)≠0." },
        { question: "Independent events?", answer: "Events A and B are independent if P(A∩B) = P(A)·P(B)."},
        { question: "Mutually exclusive events?", answer: "Events that cannot occur together: P(A∩B) = 0." },
        { question: "Addition rule?", answer: "P(A∪B) = P(A) + P(B) − P(A∩B)."},
        { question: "Multiplication rule?", answer: "P(A∩B) = P(A)·P(B|A) for dependent events."},
        { question: "Bayes’ theorem?", answer: "Relates conditional probabilities: P(A|B) = P(B|A)P(A)/P(B)."},
        { question: "Random variable?", answer: "A function that assigns a numerical value to each outcome of an experiment."},
        { question: "Discrete random variable?", answer: "Random variable that takes finite or countably infinite values."},
        { question: "Continuous random variable?", answer: "Takes any value in an interval."},
        { question: "Probability distribution?", answer: "Gives probabilities of all possible values of a random variable."},
        { question: "Binomial distribution?", answer: "Distribution of number of successes in n independent trials, each with probability p of success."},
        { question: "Mean of binomial distribution?", answer: "μ = np, variance σ² = npq, q = 1−p."},
        { question: "Tips?", answer: "Check independence, mutually exclusive events, total probability = 1."},
        { question: "Common mistakes?", answer: "Mixing independent and dependent formulas, ignoring total outcomes."},
        { question: "Check solution?", answer: "Sum of probabilities = 1, probabilities between 0 and 1."}
    ],
    test: [
        { question: "P(E) is always?", options: ["Between 0 and 1", "Greater than 1", "Negative", "Any real number"], correct: 0 },
        { question: "Two events cannot occur together?", options: ["Mutually exclusive", "Independent", "Dependent", "Certain"], correct: 0 },
        { question: "Independent events satisfy?", options: ["P(A∩B) = P(A)·P(B)", "P(A∪B) = P(A)+P(B)", "P(A|B)=1", "P(A∩B)=0"], correct: 0 },
        { question: "Conditional probability P(A|B)?", options: ["P(A∩B)/P(B)", "P(A)+P(B)", "P(A∪B)", "P(A)−P(B)"], correct: 0 },
        { question: "Complement of event E?", options: ["E’", "E", "Empty set", "Sample space"], correct: 0 },
        { question: "Total probability of sample space?", options: ["1", "0", "Cannot say", "Depends"], correct: 0 },
        { question: "Binomial distribution mean?", options: ["np", "n/p", "p/n", "n+p"], correct: 0 },
        { question: "Variance of binomial distribution?", options: ["npq", "np", "nq", "p(1−p)"], correct: 0 },
        { question: "Random variable assigns?", options: ["Numerical value to outcome", "Event name", "Sample space", "Probability"], correct: 0 },
        { question: "Multiplication rule for dependent events?", options: ["P(A∩B)=P(A)·P(B|A)", "P(A∪B)=P(A)+P(B)", "P(A∩B)=P(A)·P(B)", "P(A|B)=P(B|A)"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter13 = class12Chapter13;
