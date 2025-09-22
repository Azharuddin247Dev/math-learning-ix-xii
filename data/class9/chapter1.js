// Class 9 - Chapter 1: Real Numbers
const class9Chapter1 = {
    reading: [
        { question: "What are rational numbers?", answer: "Rational numbers are numbers that can be expressed as a fraction p/q where p and q are integers and q ≠ 0." },
        { question: "What are irrational numbers?", answer: "Irrational numbers are numbers that cannot be expressed as a fraction of two integers. Their decimal expansion is non-terminating and non-repeating." },
        { question: "What is Euclid's Division Lemma?", answer: "It states that for any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b." },
        { question: "What is the Fundamental Theorem of Arithmetic?", answer: "Every composite number can be expressed as a product of primes in a unique way, except for the order of factors." },
        { question: "What is a terminating decimal?", answer: "A decimal that has a finite number of digits after the decimal point is called a terminating decimal." },
        { question: "What is a non-terminating repeating decimal?", answer: "A decimal in which a sequence of digits repeats infinitely is called a non-terminating repeating decimal." },
        { question: "What are perfect squares?", answer: "Numbers that are squares of integers, like 1, 4, 9, 16, etc., are perfect squares." },
        { question: "What is a prime number?", answer: "A prime number is a natural number greater than 1 that has no divisors other than 1 and itself." },
        { question: "What is a composite number?", answer: "A composite number has more than two positive divisors. Example: 4, 6, 8, 9." },
        { question: "What is the difference between rational and irrational numbers?", answer: "Rational numbers can be written as fractions; irrational numbers cannot be expressed as fractions." },
        { question: "Give an example of a terminating decimal.", answer: "0.25 is a terminating decimal because it ends after two digits." },
        { question: "Give an example of a non-terminating repeating decimal.", answer: "0.666… is a non-terminating repeating decimal." },
        { question: "What is the remainder when 47 is divided by 5?", answer: "Using Euclid's Division Lemma: 47 = 5×9 + 2, remainder = 2." },
        { question: "What is the quotient when 47 is divided by 5?", answer: "Using Euclid's Division Lemma: 47 = 5×9 + 2, quotient = 9." },
        { question: "How do you add two real numbers?", answer: "Add the numbers normally following arithmetic rules; if negative, subtract accordingly." },
        { question: "How do you multiply two real numbers?", answer: "Multiply absolute values and assign sign based on rules (+ × + = +, + × - = -, etc.)." },
        { question: "Give an example of a word problem with real numbers.", answer: "If a rod is 5.7 m and another is 3.2 m, total length = 5.7 + 3.2 = 8.9 m." },
        { question: "What are the properties of rational numbers?", answer: "Closure, commutativity, associativity under addition and multiplication, distributive property." },
        { question: "What are the properties of irrational numbers?", answer: "Sum or difference of a rational and irrational number is irrational; product with non-zero rational is irrational." },
        { question: "What is the decimal expansion of 1/4?", answer: "1/4 = 0.25, which is a terminating decimal." }
    ],
    test: [
        { question: "Which of the following is a rational number?", options: ["√2", "3/4", "π", "0.1010010001…"], correct: 1 },
        { question: "Which of the following is an irrational number?", options: ["7/3", "0.333…", "√3", "5"], correct: 2 },
        { question: "What is the remainder when 47 is divided by 5?", options: ["2", "3", "4", "1"], correct: 0 },
        { question: "What is the quotient when 47 is divided by 5?", options: ["9", "8", "10", "7"], correct: 0 },
        { question: "Which decimal is terminating?", options: ["0.75", "0.666…", "√2", "π"], correct: 0 },
        { question: "Which decimal is non-terminating repeating?", options: ["0.75", "0.666…", "π", "√5"], correct: 1 },
        { question: "The sum of 3.5 and 4.25 is:", options: ["7.55", "7.75", "7.85", "7.65"], correct: 1 },
        { question: "Which number cannot be expressed as a fraction?", options: ["1/3", "√2", "5", "7/2"], correct: 1 },
        { question: "The decimal expansion of 1/8 is:", options: ["0.125", "0.333…", "0.142857…", "0.111…"], correct: 0 },
        { question: "Which of these is a perfect square?", options: ["6", "9", "10", "12"], correct: 1 }
    ]
};

// Export for dynamic loading
window.class9Chapter1 = class9Chapter1;
