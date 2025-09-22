// Class 11 - Chapter 10: Straight Lines
const class11Chapter10 = {
    reading: [
        { question: "What is a straight line?", answer: "A straight line is a set of points extending in both directions with constant slope." },
        { question: "Slope of a line?", answer: "m = (y₂ − y₁) / (x₂ − x₁), where (x₁, y₁) and (x₂, y₂) are two points on the line." },
        { question: "Equation of a line in slope-intercept form?", answer: "y = mx + c, where m is slope and c is y-intercept." },
        { question: "Equation of a line in point-slope form?", answer: "y − y₁ = m(x − x₁), passing through (x₁, y₁) with slope m." },
        { question: "Equation in two-point form?", answer: "(y − y₁)/(y₂ − y₁) = (x − x₁)/(x₂ − x₁), line through points (x₁, y₁) and (x₂, y₂)."},
        { question: "Equation in intercept form?", answer: "x/a + y/b = 1, where a and b are x-intercept and y-intercept respectively." },
        { question: "Slope of parallel lines?", answer: "Lines are parallel if their slopes are equal." },
        { question: "Slope of perpendicular lines?", answer: "Lines are perpendicular if m₁ × m₂ = −1." },
        { question: "Distance of point from line?", answer: "Distance d = |Ax₁ + By₁ + C| / √(A² + B²) for line Ax + By + C = 0." },
        { question: "Angle between two lines?", answer: "tan θ = |(m₁ − m₂)/(1 + m₁ m₂)|." },
        { question: "Intersection of two lines?", answer: "Solve equations simultaneously to find common point (x, y)."},
        { question: "Parallel line equation?", answer: "y − y₁ = m(x − x₁), slope same as given line." },
        { question: "Perpendicular line equation?", answer: "y − y₁ = −1/m (x − x₁), slope negative reciprocal." },
        { question: "General form of line?", answer: "Ax + By + C = 0." },
        { question: "Standard form of line?", answer: "Ax + By + C = 0 with A ≥ 0 and GCD(A,B,C)=1." },
        { question: "Applications?", answer: "Geometry, physics, engineering, coordinate problems." },
        { question: "Tips?", answer: "Identify form needed, calculate slope correctly, check intercepts." },
        { question: "Common mistakes?", answer: "Wrong slope calculation, forgetting negative reciprocal, misplacing points." },
        { question: "Parallel vs coincident?", answer: "Parallel: no intersection, same slope; Coincident: same line equation." },
        { question: "Check solution?", answer: "Substitute points to verify line equation." }
    ],
    test: [
        { question: "Slope of line through (1,2) and (3,6):", options: ["2", "1", "3", "4"], correct: 0 },
        { question: "Equation in slope-intercept form with slope 2, y-intercept 3:", options: ["y = 2x + 3", "y = x + 3", "y = 3x + 2", "y = 2x − 3"], correct: 0 },
        { question: "Parallel lines condition:", options: ["Equal slopes", "Negative reciprocal slopes", "Intercepts equal", "None"], correct: 0 },
        { question: "Perpendicular lines condition:", options: ["Product of slopes = −1", "Slopes equal", "Slopes zero", "Sum of slopes = 1"], correct: 0 },
        { question: "Distance of point (2,3) from line x+2y−5=0:", options: ["1", "2", "3", "4"], correct: 0 },
        { question: "Angle between lines with slopes 1 and −1:", options: ["90°", "45°", "60°", "30°"], correct: 0 },
        { question: "Two-point form line through (0,0) and (2,4):", options: ["(y−0)/(4−0) = (x−0)/(2−0)", "y = 2x", "y − 0 = 2(x − 0)", "All"], correct: 3 },
        { question: "x-intercept of line 2x + 3y − 6 = 0:", options: ["3", "2", "6", "0"], correct: 1 },
        { question: "y-intercept of line 2x + 3y − 6 = 0:", options: ["2", "1", "3", "0"], correct: 2 },
        { question: "General form of line:", options: ["Ax + By + C = 0", "y = mx + c", "y − y₁ = m(x−x₁)", "x/a + y/b =1"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter10 = class11Chapter10;
