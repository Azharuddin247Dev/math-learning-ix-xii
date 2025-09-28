// Class 10 - Chapter 6: Similarity
const class10Chapter6 = {
    reading: [
        { question: "What are similar figures?", answer: "Two figures are similar if they have the same shape but not necessarily the same size; corresponding angles are equal and corresponding sides are proportional." },
        { question: "Similarity of triangles?", answer: "Two triangles are similar if their corresponding angles are equal and corresponding sides are in proportion." },
        { question: "AA (Angle-Angle) criterion?", answer: "Two triangles are similar if two angles of one triangle are equal to two angles of another triangle." },
        { question: "SSS (Side-Side-Side) criterion?", answer: "Two triangles are similar if their corresponding sides are in proportion." },
        { question: "SAS (Side-Angle-Side) criterion?", answer: "Two triangles are similar if one angle of a triangle is equal to the corresponding angle of the other and sides including these angles are in proportion." },
        { question: "Basic proportionality theorem?", answer: "If a line is drawn parallel to one side of a triangle to intersect the other two sides, it divides the two sides in the same ratio." },
        { question: "Ratio of areas of similar triangles?", answer: "Ratio of areas = square of ratio of corresponding sides." },
        { question: "Pythagoras theorem in similar triangles?", answer: "Can be used to find unknown sides in right-angled similar triangles." },
        { question: "Applications of similarity?", answer: "Height of trees, buildings, shadows, map scaling, models, geometrical design." },
        { question: "Tips for solving similarity problems?", answer: "Identify similar triangles using AA, SSS, or SAS, write ratios of sides, use proportionality to find unknowns." },
        { question: "Corresponding sides?", answer: "Sides opposite to equal angles are corresponding sides." },
        { question: "Corresponding angles?", answer: "Angles with same measure in similar triangles." },
        { question: "Example 1 of AA:", answer: "ΔABC ~ ΔPQR if ∠A=∠P, ∠B=∠Q." },
        { question: "Example 2 of SSS:", answer: "ΔABC ~ ΔPQR if AB/PQ = BC/QR = AC/PR." },
        { question: "Example of SAS:", answer: "ΔABC ~ ΔPQR if ∠A=∠P and AB/PQ = AC/PR." },
        { question: "Using ratio of sides to find unknown?", answer: "If AB/DE = AC/DF = BC/EF = k, then unknown side can be calculated using proportion." },
        { question: "Scale factor?", answer: "Ratio of corresponding sides is called scale factor." },
        { question: "Area of similar figures?", answer: "Area ratio = (scale factor)²." },
        { question: "Perimeter of similar figures?", answer: "Perimeter ratio = scale factor (ratio of corresponding sides)."},
        { question: "Common mistakes?", answer: "Mixing up corresponding sides, forgetting to square ratio for areas, using wrong similarity criterion." }
    ],
    test: [
        { question: "Two triangles with all angles equal are:", options: ["Congruent", "Similar", "Different", "Right-angled"], correct: 1 },
        { question: "AA criterion means:", options: ["Two sides equal", "Two angles equal", "Three sides equal", "Three angles equal"], correct: 1 },
        { question: "SSS similarity involves:", options: ["Three sides in proportion", "Two angles equal", "One angle equal", "Three angles equal"], correct: 0 },
        { question: "SAS similarity involves:", options: ["One angle and sides including it", "Two sides only", "Three angles", "No sides"], correct: 0 },
        { question: "Ratio of areas of similar triangles:", options: ["Same as sides ratio", "Square of sides ratio", "Cube of sides ratio", "Half of sides ratio"], correct: 1 },
        { question: "Corresponding sides opposite equal angles?", options: ["Yes", "No", "Sometimes", "Cannot say"], correct: 0 },
        { question: "Scale factor for similar triangles:", options: ["Ratio of areas", "Ratio of sides", "Difference of sides", "Sum of sides"], correct: 1 },
        { question: "If AB/DE = 2/3, BC/EF = 2/3, AC/DF = 2/3, triangles are:", options: ["Congruent", "Similar", "Neither", "Right-angled"], correct: 1 },
        { question: "Area ratio of triangles with sides ratio 3:4:", options: ["3:4", "9:16", "4:3", "16:9"], correct: 1 },
        { question: "Applications of similarity?", options: ["Height of trees", "Shadow problems", "Map scaling", "All of the above"], correct: 3 }
    ],
    broad: [
        { topic: "AA Criterion", content: "If two angles of one triangle are equal to two angles of another triangle, the triangles are similar. It is the most commonly used criterion." },
        { topic: "SSS Criterion", content: "If the corresponding sides of two triangles are in proportion, the triangles are similar. Can be used without checking angles." },
        { topic: "SAS Criterion", content: "If one angle of a triangle equals a corresponding angle of another and the sides including these angles are proportional, triangles are similar." },
        { topic: "Basic Proportionality Theorem", content: "A line parallel to one side of a triangle divides the other two sides proportionally. Useful for calculating unknown lengths." },
        { topic: "Scale Factor", content: "Ratio of corresponding sides; used to find unknown sides, perimeter, and area ratios of similar figures." }
    ],
    broadTest: [
        { question: "ΔABC ~ ΔPQR, if AB/PQ = 2/3, BC/QR = 2/3, AC/PR = 2/3, triangles are:", options: ["Congruent", "Similar", "Different", "Cannot say"], correct: 1 },
        { question: "Area ratio of similar triangles with sides ratio 5:8:", options: ["5:8", "25:64", "8:5", "64:25"], correct: 1 },
        { question: "Scale factor of similar triangles with sides 6 and 9:", options: ["3/2", "2/3", "1", "6"], correct: 1 },
        { question: "AA criterion requires how many angles equal?", options: ["1", "2", "3", "None"], correct: 1 },
        { question: "SAS similarity requires:", options: ["One angle + sides including it proportional", "Two angles", "All sides proportional", "None"], correct: 0 },
        { question: "Basic proportionality theorem is used to find:", options: ["Angles", "Proportional sides", "Perimeter", "Area"], correct: 1 },
        { question: "Corresponding sides of similar triangles are:", options: ["Equal", "Proportional", "Different", "Cannot say"], correct: 1 },
        { question: "Perimeter ratio of similar figures with sides ratio 3:5:", options: ["9:25", "3:5", "5:3", "1"], correct: 1 },
        { question: "Applications of similarity include:", options: ["Measuring heights", "Shadow problems", "Map scaling", "All of the above"], correct: 3 },
        { question: "Using ratio of sides to find unknown side, if AB/DE = 4/5, BC/EF = 4/5, AC/DF = 4/5, unknown side = DE × ?", options: ["AB", "BC", "AC", "Depends"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class10Chapter6 = class10Chapter6;
