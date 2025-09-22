// Class 10 - Chapter 8: Quadrilaterals
const class10Chapter8 = {
    reading: [
        { question: "What is a quadrilateral?", answer: "A quadrilateral is a polygon with four sides and four angles." },
        { question: "Types of quadrilaterals?", answer: "Square, rectangle, parallelogram, rhombus, trapezium, kite." },
        { question: "Sum of interior angles?", answer: "Sum = (n−2)×180° = (4−2)×180° = 360°." },
        { question: "Sum of exterior angles?", answer: "Sum of exterior angles of any polygon = 360°." },
        { question: "Properties of parallelogram?", answer: "Opposite sides equal, opposite angles equal, diagonals bisect each other." },
        { question: "Properties of rectangle?", answer: "All properties of parallelogram; all angles 90°; diagonals equal." },
        { question: "Properties of square?", answer: "All properties of rectangle and rhombus; all sides equal; diagonals perpendicular and bisect angles." },
        { question: "Properties of rhombus?", answer: "All sides equal; opposite angles equal; diagonals perpendicular and bisect opposite angles." },
        { question: "Properties of trapezium?", answer: "One pair of opposite sides parallel; non-parallel sides are called legs." },
        { question: "Diagonals of quadrilaterals?", answer: "Diagonals join opposite vertices; properties depend on type of quadrilateral." },
        { question: "Midpoint theorem?", answer: "Line joining midpoints of two sides of a triangle is parallel to third side and half its length." },
        { question: "Diagonals in rectangle?", answer: "Diagonals are equal and bisect each other." },
        { question: "Diagonals in rhombus?", answer: "Diagonals are perpendicular bisectors of each other." },
        { question: "Diagonals in square?", answer: "Diagonals are equal, perpendicular, and bisect angles." },
        { question: "Area formulas?", answer: "Rectangle = length×breadth; Square = side²; Parallelogram = base×height; Rhombus = ½×d1×d2; Trapezium = ½×(sum of parallel sides)×height." },
        { question: "Application of properties?", answer: "Designing fields, architecture, solving geometrical problems." },
        { question: "Tips for solving quadrilateral problems?", answer: "Identify type, use properties, apply midpoint theorem and area formulas correctly." },
        { question: "Checking results?", answer: "Verify sides, angles, and diagonals using properties of the quadrilateral." },
        { question: "Kite properties?", answer: "Two pairs of adjacent sides equal; diagonals perpendicular; one diagonal bisected." },
        { question: "Trapezium area example?", answer: "Area = ½ × (sum of parallel sides) × height; e.g., ½ × (8+12) × 5 = 50." }
    ],
    test: [
        { question: "Sum of interior angles of quadrilateral:", options: ["180°", "360°", "540°", "90°"], correct: 1 },
        { question: "Opposite sides of a parallelogram are:", options: ["Equal", "Perpendicular", "Parallel only", "None"], correct: 0 },
        { question: "Diagonals of rectangle are:", options: ["Equal and bisect each other", "Perpendicular", "Not equal", "None"], correct: 0 },
        { question: "All sides equal and diagonals perpendicular:", options: ["Square", "Rectangle", "Rhombus", "Parallelogram"], correct: 2 },
        { question: "Midpoint theorem applies to:", options: ["Quadrilaterals", "Triangles", "Circles", "Polygons with 5 sides"], correct: 1 },
        { question: "Sum of exterior angles of any quadrilateral:", options: ["180°", "360°", "540°", "90°"], correct: 1 },
        { question: "Area of rhombus with diagonals 6 cm and 8 cm:", options: ["24 cm²", "48 cm²", "14 cm²", "28 cm²"], correct: 0 },
        { question: "Trapezium has:", options: ["Two pairs of parallel sides", "One pair of parallel sides", "All sides equal", "Diagonals equal"], correct: 1 },
        { question: "Diagonals of kite are:", options: ["Equal", "Perpendicular", "Parallel", "None"], correct: 1 },
        { question: "Square is a:", options: ["Parallelogram", "Rectangle", "Rhombus", "All of these"], correct: 3 }
    ]
};

// Export for dynamic loading
window.class10Chapter8 = class10Chapter8;
