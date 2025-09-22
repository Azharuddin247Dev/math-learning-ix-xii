// Class 10 - Chapter 7: Circle
const class10Chapter7 = {
    reading: [
        { question: "What is a circle?", answer: "A circle is the set of all points in a plane at a fixed distance (radius) from a fixed point (center)." },
        { question: "Radius of a circle?", answer: "Distance from the center to any point on the circle." },
        { question: "Diameter of a circle?", answer: "Distance across the circle through the center; diameter = 2 × radius." },
        { question: "Chord of a circle?", answer: "A line segment joining two points on the circle." },
        { question: "Tangent to a circle?", answer: "A line that touches the circle at exactly one point." },
        { question: "Secant of a circle?", answer: "A line that intersects the circle at two points." },
        { question: "Angle subtended by chord at center?", answer: "Angle formed at the center by lines joining ends of the chord." },
        { question: "Angle in the semicircle?", answer: "Angle in a semicircle is a right angle (90°)."},
        { question: "Perpendicular from center to chord?", answer: "It bisects the chord." },
        { question: "Equal chords and distances?", answer: "Chords equidistant from the center are equal." },
        { question: "Cyclic quadrilateral?", answer: "A quadrilateral whose vertices lie on a circle; opposite angles sum to 180°." },
        { question: "Tangent properties?", answer: "Tangent is perpendicular to radius at point of contact." },
        { question: "Two tangents from external point?", answer: "They are equal in length." },
        { question: "Intersecting chords theorem?", answer: "Product of segments of one chord = product of segments of other chord." },
        { question: "Circle equations?", answer: "Standard equation with center (h,k) and radius r: (x−h)² + (y−k)² = r²." },
        { question: "Arc of circle?", answer: "Part of the circumference between two points on the circle." },
        { question: "Sector of circle?", answer: "Region enclosed by two radii and the intercepted arc." },
        { question: "Segment of circle?", answer: "Region enclosed by a chord and its corresponding arc." },
        { question: "Applications of circle?", answer: "Wheels, gears, clock faces, circular fields, engineering designs." },
        { question: "Tips for solving circle problems?", answer: "Draw diagram, label points, apply properties like tangent, chord, cyclic quadrilateral, and angle rules." }
    ],
    test: [
        { question: "Diameter of circle with radius 7 cm:", options: ["7 cm", "14 cm", "21 cm", "49 cm"], correct: 1 },
        { question: "Angle in a semicircle:", options: ["60°", "90°", "120°", "45°"], correct: 1 },
        { question: "Perpendicular from center to chord:", options: ["Bisects chord", "Equal to radius", "Equal to diameter", "None"], correct: 0 },
        { question: "Tangent is perpendicular to:", options: ["Chord", "Radius", "Diameter", "Secant"], correct: 1 },
        { question: "Two tangents from external point:", options: ["Equal", "Unequal", "Perpendicular", "Parallel"], correct: 0 },
        { question: "Cyclic quadrilateral property:", options: ["All sides equal", "Opposite angles sum 180°", "All angles equal", "Diagonals equal"], correct: 1 },
        { question: "Intersecting chords theorem:", options: ["Sum of segments equal", "Product of segments equal", "Difference of segments equal", "None"], correct: 1 },
        { question: "Equation of circle center (0,0) radius 5:", options: ["x²+y²=5", "x²+y²=25", "(x−5)²+(y−5)²=25", "x²+y²=10"], correct: 1 },
        { question: "Arc of circle is:", options: ["Line segment", "Part of circumference", "Radius", "Chord"], correct: 1 },
        { question: "Sector of circle is:", options: ["Part of circumference", "Region between two radii and arc", "Chord only", "Angle only"], correct: 1 }
    ]
};

// Export for dynamic loading
window.class10Chapter7 = class10Chapter7;
