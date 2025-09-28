// Class 9 - Chapter 9: Quadrilaterals
const class9Chapter9 = {
    reading: [
        { question: "What is a quadrilateral?", answer: "A quadrilateral is a polygon with four sides and four angles." },
        { question: "Types of quadrilaterals based on sides and angles?", answer: "Square, Rectangle, Rhombus, Parallelogram, Trapezium, Kite." },
        { question: "Sum of interior angles of quadrilateral?", answer: "Sum of interior angles = 360°." },
        { question: "Properties of parallelogram?", answer: "Opposite sides are equal and parallel; opposite angles equal; diagonals bisect each other." },
        { question: "Properties of rectangle?", answer: "Opposite sides equal; all angles 90°; diagonals equal and bisect each other." },
        { question: "Properties of square?", answer: "All sides equal; all angles 90°; diagonals equal, bisect each other at right angles." },
        { question: "Properties of rhombus?", answer: "All sides equal; opposite angles equal; diagonals bisect at right angles." },
        { question: "Properties of kite?", answer: "Two pairs of adjacent sides equal; one pair of opposite angles equal; diagonals intersect at right angles." },
        { question: "Properties of trapezium?", answer: "One pair of opposite sides parallel; median = average of parallel sides." },
        { question: "Diagonals of parallelogram?", answer: "Diagonals bisect each other." },
        { question: "Diagonals of rectangle?", answer: "Diagonals are equal and bisect each other." },
        { question: "Diagonals of square?", answer: "Diagonals are equal, bisect each other at 90° and angles." },
        { question: "Diagonals of rhombus?", answer: "Diagonals bisect each other at right angles but not necessarily equal." },
        { question: "Diagonals of kite?", answer: "Diagonals intersect at right angles; one diagonal bisects the other." },
        { question: "Diagonals of trapezium?", answer: "Diagonals generally not equal; special cases for isosceles trapezium." },
        { question: "Mid-point theorem for quadrilaterals?", answer: "Joining midpoints of opposite sides forms a parallelogram." },
        { question: "Applications of quadrilaterals?", answer: "Used in construction, design, architecture, tiling, and engineering." },
        { question: "Interior angle formula?", answer: "Sum of interior angles = (n−2) × 180°, n=number of sides." },
        { question: "Exterior angles of quadrilateral?", answer: "Sum of exterior angles = 360°." },
        { question: "Relationship between sides and angles?", answer: "Specific quadrilaterals have constraints, e.g., square: all sides equal, angles 90°." }
    ],
    test: [
        { question: "Sum of interior angles of quadrilateral:", options: ["180°", "360°", "540°", "90°"], correct: 1 },
        { question: "Diagonals of rectangle are:", options: ["Equal and bisect each other", "Equal but do not bisect", "Unequal", "Perpendicular"], correct: 0 },
        { question: "All sides equal and all angles 90°:", options: ["Square", "Rhombus", "Rectangle", "Parallelogram"], correct: 0 },
        { question: "Diagonals bisect at right angles but not necessarily equal:", options: ["Square", "Rectangle", "Rhombus", "Kite"], correct: 2 },
        { question: "One pair of opposite sides parallel:", options: ["Rectangle", "Trapezium", "Square", "Parallelogram"], correct: 1 },
        { question: "Diagonals intersect at right angles, one diagonal bisects the other:", options: ["Kite", "Rhombus", "Square", "Rectangle"], correct: 0 },
        { question: "Sum of exterior angles of quadrilateral:", options: ["180°", "360°", "540°", "90°"], correct: 1 },
        { question: "Opposite sides and angles equal:", options: ["Parallelogram", "Square", "Kite", "Trapezium"], correct: 0 },
        { question: "Mid-point theorem joins midpoints to form:", options: ["Square", "Rhombus", "Parallelogram", "Rectangle"], correct: 2 },
        { question: "Quadrilateral with two pairs of adjacent equal sides:", options: ["Kite", "Rectangle", "Square", "Trapezium"], correct: 0 }
    ],
    broad: [
        { question: "Define a quadrilateral.", answer: "A polygon with four sides and four angles." },
        { question: "List types of quadrilaterals.", answer: "Square, Rectangle, Rhombus, Parallelogram, Trapezium, Kite." },
        { question: "State the properties of parallelogram, rectangle, square, rhombus, kite, and trapezium.", answer: "Parallelogram: opposite sides equal & parallel, opposite angles equal, diagonals bisect. Rectangle: opposite sides equal, all angles 90°, diagonals equal & bisect. Square: all sides equal, angles 90°, diagonals equal & bisect at 90°. Rhombus: all sides equal, diagonals bisect at right angles. Kite: two pairs adjacent sides equal, one pair opposite angles equal, diagonals intersect at right angles. Trapezium: one pair opposite sides parallel, median = average of parallel sides." },
        { question: "State interior and exterior angle sums.", answer: "Sum of interior angles = 360°; sum of exterior angles = 360°." },
        { question: "State the midpoint theorem for quadrilaterals.", answer: "Joining midpoints of opposite sides forms a parallelogram." },
        { question: "Applications of quadrilaterals.", answer: "Used in construction, design, architecture, tiling, and engineering." }
    ],
    broadTest: [
        { question: "Sum of interior angles of quadrilateral:", options: ["180°", "360°", "540°", "90°"], correct: 1 },
        { question: "All sides equal and all angles 90°:", options: ["Square", "Rhombus", "Rectangle", "Parallelogram"], correct: 0 },
        { question: "Diagonals intersect at right angles, one diagonal bisects the other:", options: ["Kite", "Rhombus", "Square", "Rectangle"], correct: 0 },
        { question: "Mid-point theorem joins midpoints to form:", options: ["Square", "Rhombus", "Parallelogram", "Rectangle"], correct: 2 },
        { question: "One pair of opposite sides parallel:", options: ["Rectangle", "Trapezium", "Square", "Parallelogram"], correct: 1 }
    ]
};

// Export for dynamic loading
window.class9Chapter9 = class9Chapter9;
