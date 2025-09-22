// Class 5 - Chapter 1: Numbers
const class5Chapter1 = {
    reading: [
        {
            question: "What is a natural number?",
            answer: "Natural numbers are counting numbers starting from 1, 2, 3, 4, and so on. They are used for counting objects."
        },
        {
            question: "What is the smallest natural number?",
            answer: "The smallest natural number is 1. Natural numbers do not include zero."
        },// Class 9 - Chapter 1: Real Numbers
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
        {
            question: "What are whole numbers?",
            answer: "Whole numbers include all natural numbers and zero: 0, 1, 2, 3, 4, and so on."
        },
        {
            question: "What is the difference between natural and whole numbers?",
            answer: "Whole numbers include zero (0), while natural numbers start from 1. Zero is the only difference."
        },
        {
            question: "What is place value?",
            answer: "Place value is the value of a digit based on its position in a number. Each position has a different value."
        },
        {
            question: "What is the place value of 5 in 2547?",
            answer: "The place value of 5 in 2547 is 500 because 5 is in the hundreds place."
        },
        {
            question: "What is expanded form of a number?",
            answer: "Expanded form shows a number as the sum of its place values. It breaks down the number into parts."
        },
        {
            question: "Write 2547 in expanded form.",
            answer: "2547 = 2000 + 500 + 40 + 7. Each digit is multiplied by its place value."
        },
        {
            question: "What is standard form of a number?",
            answer: "Standard form is the usual way of writing numbers using digits, like 2547."
        },
        {
            question: "What is word form of a number?",
            answer: "Word form is writing numbers using words instead of digits, like 'two thousand five hundred forty-seven'."
        },
        {
            question: "Write 2547 in word form.",
            answer: "Two thousand five hundred forty-seven."
        },
        {
            question: "What is rounding of numbers?",
            answer: "Rounding is approximating a number to the nearest ten, hundred, thousand, etc., to make calculations easier."
        },
        {
            question: "Round 2547 to the nearest hundred.",
            answer: "2547 rounded to the nearest hundred is 2500 because 47 is less than 50."
        },
        {
            question: "What is estimation?",
            answer: "Estimation is finding an approximate value close to the actual answer to check if our calculation is reasonable."
        },
        {
            question: "What are even numbers?",
            answer: "Even numbers are numbers divisible by 2: 2, 4, 6, 8, 10, 12, and so on."
        },
        {
            question: "What are odd numbers?",
            answer: "Odd numbers are numbers not divisible by 2: 1, 3, 5, 7, 9, 11, and so on."
        },
        {
            question: "What happens when you add two even numbers?",
            answer: "The sum of two even numbers is always even. For example: 4 + 6 = 10."
        },
        {
            question: "What happens when you add two odd numbers?",
            answer: "The sum of two odd numbers is always even. For example: 3 + 5 = 8."
        },
        {
            question: "What happens when you multiply two odd numbers?",
            answer: "The product of two odd numbers is always odd. For example: 3 × 5 = 15."
        },
        {
            question: "What is the largest 4-digit number?",
            answer: "The largest 4-digit number is 9999. It has 9 in all four places."
        }
    ],
    test: [
        {
            question: "What is the smallest natural number?",
            options: ["0", "1", "2", "-1"],
            correct: 1
        },
        {
            question: "Which of these is a whole number?",
            options: ["0", "-1", "1/2", "0.5"],
            correct: 0
        },
        {
            question: "What is the place value of 7 in 3756?",
            options: ["7", "70", "700", "50"],
            correct: 1
        },
        {
            question: "Round 4567 to the nearest hundred.",
            options: ["4500", "4600", "4560", "4570"],
            correct: 1
        },
        {
            question: "Which number is even?",
            options: ["13", "17", "24", "31"],
            correct: 2
        },
        {
            question: "What is 3000 + 400 + 50 + 6 in standard form?",
            options: ["3456", "3465", "3546", "3564"],
            correct: 0
        },
        {
            question: "The sum of two odd numbers is always:",
            options: ["Odd", "Even", "Zero", "Negative"],
            correct: 1
        },
        {
            question: "What is the largest 3-digit number?",
            options: ["999", "1000", "998", "100"],
            correct: 0
        },
        {
            question: "Which is the correct word form of 5432?",
            options: ["Five thousand four hundred thirty-two", "Five thousand four hundred twenty-three", "Fifty-four thirty-two", "Five four three two"],
            correct: 0
        },
        {
            question: "The product of two even numbers is always:",
            options: ["Odd", "Even", "Zero", "One"],
            correct: 1
        }
    ]
};

// Export for dynamic loading
window.class5Chapter1 = class5Chapter1;