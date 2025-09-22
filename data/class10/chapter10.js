// Class 10 - Chapter 10: Coordinate Geometry
const class10Chapter10 = {
    reading: [
        { question: "What is coordinate geometry?", answer: "Coordinate geometry studies geometrical figures using a coordinate system, typically the Cartesian plane." },
        { question: "Coordinates of a point?", answer: "An ordered pair (x, y) representing the position of a point on the Cartesian plane." },
        { question: "Distance formula?", answer: "Distance between points (x₁, y₁) and (x₂, y₂) is √[(x₂−x₁)² + (y₂−y₁)²]." },
        { question: "Midpoint formula?", answer: "Midpoint of segment joining (x₁, y₁) and (x₂, y₂) is ((x₁+x₂)/2 , (y₁+y₂)/2)."},
        { question: "Section formula?", answer: "Point dividing line segment joining (x₁, y₁) and (x₂, y₂) in ratio m:n internally: ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n))."},
        { question: "Area of triangle using coordinates?", answer: "Area = ½ |x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|." },
        { question: "Equation of line passing through two points?", answer: "Slope m = (y₂−y₁)/(x₂−x₁), equation: y−y₁ = m(x−x₁)."},
        { question: "Slope of line?", answer: "Slope m = (y₂−y₁)/(x₂−x₁); indicates steepness and direction of line." },
        { question: "Collinear points?", answer: "Points are collinear if area of triangle formed by them is zero or slopes of line segments are equal." },
        { question: "Distance from point to line?", answer: "Distance = |ax₁ + by₁ + c| / √(a² + b²) for line ax + by + c = 0 and point (x₁, y₁)."},
        { question: "Equation of circle?", answer: "Standard equation with center (h,k) and radius r: (x−h)² + (y−k)² = r²." },
        { question: "Application of distance formula?", answer: "Finding lengths of sides, verifying shapes like triangles, rectangles." },
        { question: "Application of midpoint formula?", answer: "Finding midpoint of line segment, center of line, or bisector points." },
        { question: "Application of section formula?", answer: "Finding point dividing a segment in given ratio, internal or external division." },
        { question: "Tips for solving coordinate geometry problems?", answer: "Label points, substitute correctly, follow formulas, and check results." },
        { question: "Check collinearity?", answer: "Compute slopes or use area formula to see if points lie on a straight line." },
        { question: "Graphing points?", answer: "Plot x and y coordinates accurately on Cartesian plane." },
        { question: "Slope formula helps in?", answer: "Checking parallelism (equal slopes) or perpendicularity (product of slopes = −1)."},
        { question: "Triangle area example:", answer: "For points A(0,0), B(4,0), C(0,3), area = ½ |0(0−3)+4(3−0)+0(0−0)| = 6." },
        { question: "Importance of coordinate geometry?", answer: "Bridges algebra and geometry, allows numerical computation of lengths, slopes, areas, and verification of geometric properties." }
    ],
    test: [
        { question: "Distance between (0,0) and (3,4):", options: ["5", "7", "6", "4"], correct: 0 },
        { question: "Midpoint of (2,3) and (4,7):", options: ["(3,5)", "(2,5)", "(3,7)", "(1,5)"], correct: 0 },
        { question: "Point dividing (2,3) and (4,7) in 1:1 internally:", options: ["(3,5)", "(2,5)", "(3,7)", "(1,5)"], correct: 0 },
        { question: "Slope of line joining (1,2) and (3,6):", options: ["2", "3", "4", "1"], correct: 0 },
        { question: "Area of triangle with points (0,0),(4,0),(0,3):", options: ["6", "12", "8", "9"], correct: 0 },
        { question: "Equation of line through (1,2) and (3,6):", options: ["y=2x", "y=3x", "y=x+1", "y=2x+0"], correct: 3 },
        { question: "Collinear points?", options: ["All on same line", "Form triangle", "Form square", "Form rectangle"], correct: 0 },
        { question: "Distance from point (1,2) to line x+y-3=0:", options: ["0", "1", "2", "√2"], correct: 1 },
        { question: "Slope of line parallel to y=2x+1:", options: ["2", "1", "-2", "0"], correct: 0 },
        { question: "Slope of line perpendicular to y=2x+1:", options: ["-1/2", "2", "1/2", "-2"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class10Chapter10 = class10Chapter10;
