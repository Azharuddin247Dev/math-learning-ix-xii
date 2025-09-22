// Class 10 - Chapter 9: Construction
const class10Chapter9 = {
    reading: [
        { question: "What is construction in geometry?", answer: "Construction involves drawing geometrical figures accurately using only a compass, ruler, and sometimes protractor." },
        { question: "Division of a line segment?", answer: "To divide a line segment in a given ratio using a compass and ruler." },
        { question: "Construction of tangents to a circle from a point outside?", answer: "Draw a line joining point to center, find midpoint, draw circle with midpoint as center, and draw tangents." },
        { question: "Construction of similar triangles?", answer: "Construct a triangle similar to a given triangle with a given scale factor using parallel lines or proportional sides." },
        { question: "Construction of external division of a line?", answer: "Extend one end of line, mark points proportional to ratio, join to other end, and draw parallel line to intersect." },
        { question: "Bisecting an angle?", answer: "Draw arcs from vertex, draw intersecting arcs from these points, and draw line through intersection." },
        { question: "Perpendicular from a point to a line?", answer: "Draw arcs from point cutting line, draw arcs from intersection points, and join to original point." },
        { question: "Perpendicular bisector of a line segment?", answer: "Draw arcs from both ends with radius > half the segment, join intersection points of arcs." },
        { question: "Constructing a circle with given radius through a point?", answer: "Place compass at point, draw circle with given radius." },
        { question: "Constructing a triangle given sides?", answer: "Draw base, draw arcs from ends with given sides, intersection gives third vertex." },
        { question: "Constructing a triangle given base and angles?", answer: "Draw base, construct given angles at endpoints, intersection gives third vertex." },
        { question: "Constructing a triangle given perimeter and base?", answer: "Draw base, mark points on extended lines equal to other sides using compass, join intersections." },
        { question: "Tips for constructions?", answer: "Draw lightly first, label all points, use compass carefully, follow steps in order." },
        { question: "Common mistakes in constructions?", answer: "Incorrect arcs, wrong radii, unlabeled points, skipping steps, inaccurate drawing." },
        { question: "Importance of construction?", answer: "Develops precision, understanding of geometry, and practical skills in drafting and engineering." },
        { question: "Check results?", answer: "Verify lengths, angles, parallelism, perpendicularity, and other properties as per problem." },
        { question: "Use of compass in constructions?", answer: "For arcs, circles, marking equal lengths, bisecting lines and angles." },
        { question: "Use of ruler in constructions?", answer: "For drawing straight lines and measuring distances." },
        { question: "Example of line division in 3:2:", answer: "Draw line, extend, mark 5 equal parts, divide after 3 parts." },
        { question: "Example of tangent construction:", answer: "Given point P outside circle with center O, draw OP, find midpoint M, draw circle with center M, tangent points intersection gives tangents." }
    ],
    test: [
        { question: "What tools are mainly used in constructions?", options: ["Ruler and Compass", "Ruler and Protractor", "Compass only", "None"], correct: 0 },
        { question: "Perpendicular bisector divides a line into:", options: ["Equal halves", "Unequal parts", "Depends", "Cannot say"], correct: 0 },
        { question: "Angle bisector divides angle into:", options: ["Two equal angles", "Two unequal angles", "Depends", "Cannot say"], correct: 0 },
        { question: "Tangent from point outside circle touches circle at:", options: ["One point", "Two points", "Three points", "None"], correct: 0 },
        { question: "Triangles are similar if sides are proportional and included angle equal:", options: ["AA criterion", "SAS criterion", "SSS criterion", "ASA criterion"], correct: 1 },
        { question: "To divide a line segment externally in a given ratio:", options: ["Extend line and mark points", "Bisect line", "Draw perpendicular", "Draw tangent"], correct: 0 },
        { question: "Construction of triangle with given sides uses:", options: ["Arcs from base ends", "Bisector", "Tangent", "Parallel line"], correct: 0 },
        { question: "Importance of accurate construction:", options: ["Precision", "Geometry understanding", "Practical skills", "All of these"], correct: 3 },
        { question: "Arc intersection in constructions is used for:", options: ["Finding points", "Measuring lengths", "Drawing circles", "None"], correct: 0 },
        { question: "Common mistake in construction:", options: ["Incorrect arcs", "Wrong radii", "Unlabeled points", "All of the above"], correct: 3 }
    ]
};

// Export for dynamic loading
window.class10Chapter9 = class10Chapter9;
