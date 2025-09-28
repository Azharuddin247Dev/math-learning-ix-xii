// Class 9 - Chapter 1: Real Numbers
const class9Chapter1 = {
  reading: [
    {
      question: "What are rational numbers?",
      answer:
        "Rational numbers are numbers that can be expressed as a fraction p/q where p and q are integers and q ≠ 0.",
    },
    {
      question: "What are irrational numbers?",
      answer:
        "Irrational numbers are numbers that cannot be expressed as a fraction of two integers. Their decimal expansion is non-terminating and non-repeating.",
    },
    {
      question: "What is Euclid's Division Lemma?",
      answer:
        "It states that for any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b.",
    },
    {
      question: "What is the Fundamental Theorem of Arithmetic?",
      answer:
        "Every composite number can be expressed as a product of primes in a unique way, except for the order of factors.",
    },
    {
      question: "What is a terminating decimal?",
      answer:
        "A decimal that has a finite number of digits after the decimal point is called a terminating decimal.",
    },
    {
      question: "What is a non-terminating repeating decimal?",
      answer:
        "A decimal in which a sequence of digits repeats infinitely is called a non-terminating repeating decimal.",
    },
    {
      question: "What are perfect squares?",
      answer:
        "Numbers that are squares of integers, like 1, 4, 9, 16, etc., are perfect squares.",
    },
    {
      question: "What is a prime number?",
      answer:
        "A prime number is a natural number greater than 1 that has no divisors other than 1 and itself.",
    },
    {
      question: "What is a composite number?",
      answer:
        "A composite number has more than two positive divisors. Example: 4, 6, 8, 9.",
    },
    {
      question: "What is the difference between rational and irrational numbers?",
      answer:
        "Rational numbers can be written as fractions; irrational numbers cannot be expressed as fractions.",
    },
    {
      question: "Give an example of a terminating decimal.",
      answer: "0.25 is a terminating decimal because it ends after two digits.",
    },
    {
      question: "Give an example of a non-terminating repeating decimal.",
      answer: "0.666… is a non-terminating repeating decimal.",
    },
    {
      question: "What is the remainder when 47 is divided by 5?",
      answer: "Using Euclid's Division Lemma: 47 = 5×9 + 2, remainder = 2.",
    },
    {
      question: "What is the quotient when 47 is divided by 5?",
      answer: "Using Euclid's Division Lemma: 47 = 5×9 + 2, quotient = 9.",
    },
    {
      question: "How do you add two real numbers?",
      answer:
        "Add the numbers normally following arithmetic rules; if negative, subtract accordingly.",
    },
    {
      question: "How do you multiply two real numbers?",
      answer:
        "Multiply absolute values and assign sign based on rules (+ × + = +, + × - = -, etc.).",
    },
    {
      question: "Give an example of a word problem with real numbers.",
      answer:
        "If a rod is 5.7 m and another is 3.2 m, total length = 5.7 + 3.2 = 8.9 m.",
    },
    {
      question: "What are the properties of rational numbers?",
      answer:
        "Closure, commutativity, associativity under addition and multiplication, distributive property.",
    },
    {
      question: "What are the properties of irrational numbers?",
      answer:
        "Sum or difference of a rational and irrational number is irrational; product with non-zero rational is irrational.",
    },
    {
      question: "What is the decimal expansion of 1/4?",
      answer: "1/4 = 0.25, which is a terminating decimal.",
    },
  ],

  broad: [
    {
      question:
        "Using Euclid’s Division Lemma, find the HCF of 4052 and 12576.",
      answer:
        "Step 1: Divide 12576 by 4052 → 12576 = 4052 × 3 + 420.\nStep 2: Divide 4052 by 420 → 4052 = 420 × 9 + 272.\nStep 3: Divide 420 by 272 → 420 = 272 × 1 + 148.\nStep 4: Divide 272 by 148 → 272 = 148 × 1 + 124.\nStep 5: Divide 148 by 124 → 148 = 124 × 1 + 24.\nStep 6: Divide 124 by 24 → 124 = 24 × 5 + 4.\nStep 7: Divide 24 by 4 → remainder = 0.\nTherefore, HCF = 4.",
    },
    {
      question:
        "A bakery makes 120 cakes and 150 biscuits. They want to pack them in boxes such that each box has the same number of items and no item is left. Find the maximum number of items in each box.",
      answer:
        "We need the HCF of 120 and 150.\nStep 1: Prime factorization of 120 = 2³ × 3 × 5.\nStep 2: Prime factorization of 150 = 2 × 3 × 5².\nStep 3: Common factors = 2 × 3 × 5 = 30.\nTherefore, maximum number of items in each box = 30.",
    },
    {
      question:
        "The decimal expansion of 1/12 is 0.08333… Write whether it is terminating or non-terminating repeating, and explain why.",
      answer:
        "1/12 = 0.08333… which is a non-terminating repeating decimal because the digit 3 repeats infinitely.",
    },
    {
      question:
        "Show that √5 is an irrational number.",
      answer:
        "Proof by contradiction:\nStep 1: Assume √5 is rational = p/q in lowest form.\nStep 2: Square both sides: 5 = p²/q² → p² = 5q².\nStep 3: This means p² is divisible by 5, so p is divisible by 5.\nStep 4: Let p = 5k. Then p² = 25k² → 25k² = 5q² → q² = 5k².\nStep 5: Thus q is also divisible by 5.\nContradicts the assumption that p/q is in lowest form.\nTherefore, √5 is irrational.",
    },
    {
      question:
        "If HCF(336, 54) = 6, find LCM(336, 54) using the relation HCF × LCM = Product of the two numbers.",
      answer:
        "Step 1: Product of numbers = 336 × 54 = 18144.\nStep 2: HCF × LCM = 18144.\nStep 3: LCM = 18144 ÷ 6 = 3024.\nTherefore, LCM = 3024.",
    },
    {
      question:
        "Express 7/8, 3/5, and 13/6 as decimals. Identify which are terminating and which are non-terminating repeating.",
      answer:
        "7/8 = 0.875 → terminating.\n3/5 = 0.6 → terminating.\n13/6 = 2.1666… → non-terminating repeating.",
    },
  ],

  broadTest: [
    {
      question: "HCF of 4052 and 12576 using Euclid’s Division Lemma is:",
      options: ["2", "4", "6", "8"],
      correct: 1,
    },
    {
      question:
        "A bakery makes 120 cakes and 150 biscuits. Maximum number of items per box?",
      options: ["10", "20", "30", "40"],
      correct: 2,
    },
    {
      question: "1/12 = 0.08333… This decimal is:",
      options: [
        "Terminating decimal",
        "Non-terminating repeating decimal",
        "Non-terminating non-repeating decimal",
        "Irrational",
      ],
      correct: 1,
    },
    {
      question: "√5 is irrational because:",
      options: [
        "It cannot be expressed as p/q",
        "Its square is 5",
        "It is a whole number",
        "It is prime",
      ],
      correct: 0,
    },
    {
      question:
        "If HCF(336, 54) = 6, then LCM(336, 54) is:",
      options: ["3024", "336", "54", "18144"],
      correct: 0,
    },
  ],

  test: [
    {
      question: "Which of the following is a rational number?",
      options: ["√2", "3/4", "π", "0.1010010001…"],
      correct: 1,
    },
    {
      question: "Which of the following is an irrational number?",
      options: ["7/3", "0.333…", "√3", "5"],
      correct: 2,
    },
    {
      question: "What is the remainder when 47 is divided by 5?",
      options: ["2", "3", "4", "1"],
      correct: 0,
    },
    {
      question: "What is the quotient when 47 is divided by 5?",
      options: ["9", "8", "10", "7"],
      correct: 0,
    },
    {
      question: "Which decimal is terminating?",
      options: ["0.75", "0.666…", "√2", "π"],
      correct: 0,
    },
    {
      question: "Which decimal is non-terminating repeating?",
      options: ["0.75", "0.666…", "π", "√5"],
      correct: 1,
    },
    {
      question: "The sum of 3.5 and 4.25 is:",
      options: ["7.55", "7.75", "7.85", "7.65"],
      correct: 1,
    },
    {
      question: "Which number cannot be expressed as a fraction?",
      options: ["1/3", "√2", "5", "7/2"],
      correct: 1,
    },
    {
      question: "The decimal expansion of 1/8 is:",
      options: ["0.125", "0.333…", "0.142857…", "0.111…"],
      correct: 0,
    },
    {
      question: "Which of these is a perfect square?",
      options: ["6", "9", "10", "12"],
      correct: 1,
    },
  ],
};

// Export for dynamic loading
window.class9Chapter1 = class9Chapter1;
