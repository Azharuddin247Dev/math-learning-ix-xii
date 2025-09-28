// Class 9 - Chapter 8: Geometry of Triangles
const class9Chapter8 = {
    reading: [
        { question: "What is a triangle?", answer: "A triangle is a polygon with three sides and three angles." },
        { question: "Types of triangles based on sides?", answer: "Equilateral (all sides equal), Isosceles (two sides equal), Scalene (all sides unequal)."},
        { question: "Types of triangles based on angles?", answer: "Acute (all angles < 90°), Right (one angle = 90°), Obtuse (one angle > 90°)."},
        { question: "What is congruence of triangles?", answer: "Two triangles are congruent if all their corresponding sides and angles are equal." },
        { question: "Criteria for triangle congruence?", answer: "SSS, SAS, ASA, AAS, RHS (Right-angle Hypotenuse Side)."},
        { question: "Pythagoras theorem?", answer: "In a right triangle, (hypotenuse)² = (base)² + (perpendicular)²." },
        { question: "Inequalities in triangles?", answer: "Sum of any two sides > third side; difference of any two sides < third side." },
        { question: "Median of a triangle?", answer: "A line segment joining a vertex to the midpoint of the opposite side." },
        { question: "Altitude of a triangle?", answer: "A perpendicular drawn from a vertex to the opposite side or its extension." },
        { question: "Angle bisector?", answer: "A line that divides an angle into two equal parts." },
        { question: "Exterior angle theorem?", answer: "The measure of an exterior angle of a triangle equals the sum of the two opposite interior angles." },
        { question: "Sum of angles in a triangle?", answer: "The sum of interior angles in any triangle is 180°." },
        { question: "Properties of isosceles triangle?", answer: "Base angles are equal; altitude from vertex bisects the base." },
        { question: "Properties of equilateral triangle?", answer: "All sides equal; all angles = 60°; medians, altitudes, angle bisectors coincide." },
        { question: "Centroid of triangle?", answer: "Point of intersection of medians; divides each median in 2:1 ratio." },
        { question: "Orthocenter?", answer: "Point of intersection of altitudes of a triangle." },
        { question: "Incenter?", answer: "Point of intersection of angle bisectors; center of inscribed circle." },
        { question: "Circumcenter?", answer: "Point of intersection of perpendicular bisectors of sides; center of circumscribed circle." },
        { question: "Right triangle properties?", answer: "Hypotenuse opposite right angle; Pythagoras theorem applies." },
        { question: "Practical applications?", answer: "Engineering, construction, navigation, design, and problem-solving in real life." }
    ],
    test: [
        { question: "Sum of angles in a triangle:", options: ["90°", "180°", "270°", "360°"], correct: 1 },
        { question: "Triangle with all sides equal is:", options: ["Isosceles", "Equilateral", "Scalene", "Right-angled"], correct: 1 },
        { question: "Criteria for congruence RHS stands for:", options: ["Right-angle Hypotenuse Side", "Right-angle Height Side", "Rectangle Hypotenuse Side", "Right-angle Hypotenuse Sum"], correct: 0 },
        { question: "Median joins:", options: ["Vertex to opposite side midpoint", "Two vertices", "Midpoints of sides", "Vertex to opposite angle"], correct: 0 },
        { question: "Centroid divides median in ratio:", options: ["1:1", "2:1", "1:2", "3:1"], correct: 1 },
        { question: "Exterior angle of triangle =", options: ["Sum of opposite interior angles", "Difference of opposite angles", "Half sum of opposite angles", "Sum of all angles"], correct: 0 },
        { question: "Altitudes meet at:", options: ["Centroid", "Orthocenter", "Incenter", "Circumcenter"], correct: 1 },
        { question: "Angle bisectors meet at:", options: ["Centroid", "Orthocenter", "Incenter", "Circumcenter"], correct: 2 },
        { question: "Perpendicular bisectors meet at:", options: ["Centroid", "Orthocenter", "Incenter", "Circumcenter"], correct: 3 },
        { question: "Base angles of isosceles triangle are:", options: ["Equal", "Unequal", "Right angles", "Obtuse angles"], correct: 0 }
    ],
    broad: [
        { question: "Define a triangle.", answer: "A polygon with three sides and three angles." },
        { question: "Explain types of triangles by sides and angles.", answer: "By sides: Equilateral, Isosceles, Scalene. By angles: Acute, Right, Obtuse." },
        { question: "Define congruence of triangles.", answer: "Two triangles are congruent if all their corresponding sides and angles are equal." },
        { question: "List the criteria for triangle congruence.", answer: "SSS, SAS, ASA, AAS, RHS." },
        { question: "State Pythagoras theorem.", answer: "In a right triangle, (hypotenuse)² = (base)² + (perpendicular)²." },
        { question: "Define centroid, orthocenter, incenter, and circumcenter.", answer: "Centroid: intersection of medians; Orthocenter: intersection of altitudes; Incenter: intersection of angle bisectors; Circumcenter: intersection of perpendicular bisectors." },
        { question: "Practical applications of triangles.", answer: "Used in engineering, construction, navigation, design, and problem-solving in real life." }
    ],
    broadTest: [
        { question: "Sum of angles in a triangle:", options: ["90°", "180°", "270°", "360°"], correct: 1 },
        { question: "Triangle with all sides equal is:", options: ["Isosceles", "Equilateral", "Scalene", "Right-angled"], correct: 1 },
        { question: "Median joins:", options: ["Vertex to opposite side midpoint", "Two vertices", "Midpoints of sides", "Vertex to opposite angle"], correct: 0 },
        { question: "Altitudes meet at:", options: ["Centroid", "Orthocenter", "Incenter", "Circumcenter"], correct: 1 },
        { question: "Perpendicular bisectors meet at:", options: ["Centroid", "Orthocenter", "Incenter", "Circumcenter"], correct: 3 }
    ]
};

// Export for dynamic loading
window.class9Chapter8 = class9Chapter8;
