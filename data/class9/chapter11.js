// Class 9 - Chapter 11: Construction
const class9Chapter11 = {
    reading: [
        { question: "What is a geometric construction?", answer: "It is a method of drawing shapes, angles, lines, and figures accurately using only a compass, straightedge, and sometimes a protractor." },
        { question: "Constructing a bisector of a line segment?", answer: "Draw arcs from both endpoints with same radius, join intersection points to bisect the segment." },
        { question: "Constructing a bisector of an angle?", answer: "Draw an arc from vertex cutting both arms, draw arcs from intersection points, join vertex to intersecting arc." },
        { question: "Constructing perpendicular from a point on line?", answer: "Use compass to draw arcs on both sides, then intersect arcs above and below the line, join point to intersection." },
        { question: "Constructing perpendicular from external point?", answer: "Draw circle with center at external point intersecting line, bisect chord, join external point to midpoint." },
        { question: "Constructing a triangle given sides (SSS)?", answer: "Draw base, draw arcs from other vertices with given sides, intersection is third vertex." },
        { question: "Constructing a triangle given two sides and included angle (SAS)?", answer: "Draw base, construct given angle, draw arc from endpoint to match other side, intersection is third vertex." },
        { question: "Constructing a triangle given two angles and included side (ASA)?", answer: "Draw given side, construct angles at endpoints, intersection is third vertex." },
        { question: "Constructing a triangle given base, sum of other two sides (SSS variant)?", answer: "Draw base, draw arcs from endpoints with given lengths, intersection is third vertex." },
        { question: "Constructing tangents to a circle from external point?", answer: "Join point to center, bisect radius-line, draw perpendicular, join point to intersection points on circle." },
        { question: "Constructing tangents to a circle from a point on circle?", answer: "Draw radius to point, construct perpendicular at that point." },
        { question: "Constructing internal division of a line in given ratio?", answer: "Draw ray, mark equal segments according to ratio, join last point to other endpoint, draw parallel lines." },
        { question: "Constructing external division of a line in given ratio?", answer: "Extend ray, mark segments according to ratio, join last point to other endpoint, draw parallel lines." },
        { question: "Practical applications?", answer: "Used in architecture, engineering, drafting, and technical drawing." },
        { question: "Accuracy in construction?", answer: "Use sharp compass, firm straightedge, and careful measurement to ensure precision." },
        { question: "Tools required?", answer: "Compass, ruler/scale, pencil, eraser, protractor." },
        { question: "Constructing equilateral triangle?", answer: "Draw base, draw arcs from endpoints with radius equal to side, intersection is third vertex." },
        { question: "Constructing 60° angle?", answer: "Use compass to draw arcs, mark intersection on arm, join vertex to intersection." },
        { question: "Constructing 90° angle?", answer: "Draw perpendicular using compass and straightedge from vertex or point on line." },
        { question: "Constructing 45° angle?", answer: "Bisect 90° angle using compass and straightedge." }
    ],
    test: [
        { question: "Bisector of line segment passes through:", options: ["One endpoint", "Midpoint", "Any point", "Vertex"], correct: 1 },
        { question: "Angle bisector divides angle into:", options: ["Two equal parts", "Two unequal parts", "Three equal parts", "Four equal parts"], correct: 0 },
        { question: "Triangle construction SSS requires:", options: ["Three sides", "Two sides and included angle", "Base and two angles", "One side"], correct: 0 },
        { question: "Triangle construction SAS requires:", options: ["Three sides", "Two sides and included angle", "Base and two angles", "All angles"], correct: 1 },
        { question: "Triangle construction ASA requires:", options: ["Three sides", "Two sides and included angle", "Base and two angles", "All angles"], correct: 2 },
        { question: "Tangent from point on circle is:", options: ["Perpendicular to radius", "Parallel to radius", "Equal to radius", "Diagonal"], correct: 0 },
        { question: "Tools for geometric construction:", options: ["Compass and scale", "Protractor and pencil", "Eraser only", "All of above"], correct: 3 },
        { question: "Perpendicular from external point to line requires:", options: ["Compass", "Straightedge", "Both", "None"], correct: 2 },
        { question: "Equilateral triangle construction uses:", options: ["One arc", "Two arcs", "Three arcs", "No arc"], correct: 1 },
        { question: "Accuracy in construction depends on:", options: ["Sharp compass", "Firm straightedge", "Careful measurement", "All of the above"], correct: 3 }
    ]
};

// Export for dynamic loading
window.class9Chapter11 = class9Chapter11;
