// Class 9 - Chapter 10: Circle
const class9Chapter10 = {
    reading: [
        { question: "What is a circle?", answer: "A circle is the set of all points in a plane that are at a fixed distance (radius) from a fixed point (center)." },
        { question: "Radius of a circle?", answer: "The distance from the center to any point on the circle." },
        { question: "Diameter of a circle?", answer: "A line segment passing through the center and touching two points on the circle; diameter = 2 × radius." },
        { question: "Chord of a circle?", answer: "A line segment joining any two points on the circle." },
        { question: "Tangent to a circle?", answer: "A line that touches the circle at exactly one point." },
        { question: "Secant of a circle?", answer: "A line that intersects the circle at two points." },
        { question: "Angle subtended by an arc at the center?", answer: "Angle formed at the center by two radii joining the ends of the arc." },
        { question: "Angle subtended by an arc on the circle?", answer: "Angle formed on the circumference by lines joining the ends of the arc." },
        { question: "Perpendicular from center to chord?", answer: "It bisects the chord." },
        { question: "Equal chords?", answer: "Chords equidistant from the center are equal in length." },
        { question: "Circle theorems?", answer: "1) Angle subtended by diameter = 90°, 2) Angles in the same segment are equal, 3) Opposite angles of cyclic quadrilateral = 180°." },
        { question: "Tangent properties?", answer: "Tangent is perpendicular to the radius at the point of contact." },
        { question: "Number of tangents from a point outside circle?", answer: "Two tangents can be drawn from an external point." },
        { question: "Cyclic quadrilateral?", answer: "A quadrilateral whose vertices lie on a circle." },
        { question: "Arc length formula?", answer: "Length of arc = (θ/360) × 2πr, where θ in degrees." },
        { question: "Area of sector?", answer: "Area = (θ/360) × πr²." },
        { question: "Tangent-secant theorem?", answer: "The square of tangent = product of lengths of secant and external segment." },
        { question: "Practical applications?", answer: "Wheels, gears, clock faces, circular tracks, engineering design, and architecture." },
        { question: "Relationship of chord and radius?", answer: "The perpendicular from center bisects the chord." },
        { question: "Relationship between tangents from external point?", answer: "Two tangents drawn from an external point are equal in length." }
    ],
    test: [
        { question: "Radius is:", options: ["Line through center", "Distance from center to circle", "Chord length", "Tangent length"], correct: 1 },
        { question: "Diameter is:", options: ["Equal to radius", "Twice the radius", "Half the radius", "Four times the radius"], correct: 1 },
        { question: "Chord bisected by perpendicular from center?", options: ["Always", "Sometimes", "Never", "Only if circle is unit"], correct: 0 },
        { question: "Angle subtended by diameter on circle:", options: ["90°", "180°", "60°", "45°"], correct: 0 },
        { question: "Tangent is perpendicular to:", options: ["Chord", "Diameter", "Radius", "Secant"], correct: 2 },
        { question: "Number of tangents from external point:", options: ["One", "Two", "Three", "Infinite"], correct: 1 },
        { question: "Sum of opposite angles in cyclic quadrilateral:", options: ["90°", "180°", "270°", "360°"], correct: 1 },
        { question: "Arc length formula:", options: ["(θ/360) × πr²", "(θ/360) × 2πr", "πr²", "2πr"], correct: 1 },
        { question: "Area of sector formula:", options: ["(θ/360) × 2πr", "(θ/360) × πr²", "πr²", "2πr"], correct: 1 },
        { question: "Tangents from external point are:", options: ["Equal", "Unequal", "Perpendicular", "Parallel"], correct: 0 }
    ],
    broad: [
        { question: "Define a circle.", answer: "Set of all points equidistant from a fixed center point." },
        { question: "State radius, diameter, chord, tangent, and secant.", answer: "Radius: center to a point on circle. Diameter: line through center, twice radius. Chord: line joining two points on circle. Tangent: line touching circle at one point. Secant: line intersecting circle at two points." },
        { question: "Circle theorems to remember.", answer: "1) Angle subtended by diameter = 90°, 2) Angles in same segment equal, 3) Opposite angles of cyclic quadrilateral = 180°, 4) Tangent perpendicular to radius." },
        { question: "Formulas for arc length and area of sector.", answer: "Arc length = (θ/360) × 2πr; Area of sector = (θ/360) × πr²." },
        { question: "Tangent-secant relationship.", answer: "Square of tangent = product of secant and external segment." },
        { question: "Practical applications of circles.", answer: "Wheels, gears, clocks, tracks, engineering design, architecture." }
    ],
    broadTest: [
        { question: "Radius is:", options: ["Line through center", "Distance from center to circle", "Chord length", "Tangent length"], correct: 1 },
        { question: "Diameter is:", options: ["Equal to radius", "Twice the radius", "Half the radius", "Four times the radius"], correct: 1 },
        { question: "Sum of opposite angles in cyclic quadrilateral:", options: ["90°", "180°", "270°", "360°"], correct: 1 },
        { question: "Arc length formula:", options: ["(θ/360) × πr²", "(θ/360) × 2πr", "πr²", "2πr"], correct: 1 },
        { question: "Tangents from external point are:", options: ["Equal", "Unequal", "Perpendicular", "Parallel"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class9Chapter10 = class9Chapter10;
