// Class 11 - Chapter 12: Three-Dimensional Geometry
const class11Chapter12 = {
    reading: [
        { question: "What is 3D geometry?", answer: "Study of points, lines, and planes in three-dimensional space." },
        { question: "Coordinates of a point?", answer: "A point is represented as (x, y, z) in 3D space." },
        { question: "Distance between two points?", answer: "Distance d = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]." },
        { question: "Section formula in 3D?", answer: "Point dividing segment joining P(x₁,y₁,z₁) and Q(x₂,y₂,z₂) in ratio m:n: ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n), (mz₂+nz₁)/(m+n))." },
        { question: "Midpoint formula?", answer: "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)."},
        { question: "Direction ratios and cosines?", answer: "Direction ratios: a,b,c; direction cosines: l,m,n; l²+m²+n²=1."},
        { question: "Equation of a line in 3D?", answer: "(x−x₁)/l = (y−y₁)/m = (z−z₁)/n, passing through (x₁,y₁,z₁) with direction ratios l,m,n."},
        { question: "Vector form of line?", answer: "r = a + λb, where a is position vector of a point, b is direction vector."},
        { question: "Equation of a plane?", answer: "Ax + By + Cz + D = 0, where (A,B,C) is normal vector."},
        { question: "Plane through point P(x₀,y₀,z₀) with normal vector (A,B,C)?", answer: "A(x−x₀) + B(y−y₀) + C(z−z₀) = 0."},
        { question: "Angle between two planes?", answer: "cos θ = |n₁•n₂| / (|n₁||n₂|), n₁,n₂ normal vectors."},
        { question: "Distance from point to plane?", answer: "d = |Ax₁+By₁+Cz₁+D| / √(A²+B²+C²)."},
        { question: "Line of intersection of two planes?", answer: "Solve plane equations simultaneously."},
        { question: "Skew lines?", answer: "Lines not parallel and not intersecting; find shortest distance using vector method."},
        { question: "Applications?", answer: "Physics, engineering, 3D modeling, navigation."},
        { question: "Tips?", answer: "Use vector method for distances and angles; identify normal and direction vectors."},
        { question: "Common mistakes?", answer: "Confusing direction ratios with coordinates, wrong formula for distance."},
        { question: "Checking points in plane?", answer: "Substitute coordinates into plane equation."},
        { question: "Parallel planes?", answer: "Planes are parallel if their normal vectors are proportional."},
        { question: "Perpendicular planes?", answer: "Planes are perpendicular if dot product of normal vectors = 0."}
    ],
    test: [
        { question: "Distance between points (1,2,3) and (4,6,8):", options: ["7.071", "5", "6", "9"], correct: 0 },
        { question: "Midpoint of P(1,2,3) and Q(4,5,6):", options: ["(2.5,3.5,4.5)", "(3,4,5)", "(2,3,4)", "(1,2,3)"], correct: 0 },
        { question: "Line equation passing through (1,2,3) with direction ratios 2,3,4:", options: ["(x−1)/2=(y−2)/3=(z−3)/4", "(x−1)/3=(y−2)/2=(z−3)/4", "(x−1)/4=(y−2)/3=(z−3)/2", "None"], correct: 0 },
        { question: "Equation of plane through (1,2,3) with normal vector (2,3,4):", options: ["2(x−1)+3(y−2)+4(z−3)=0", "x+2y+3z=0", "2x+3y+4z=0", "None"], correct: 0 },
        { question: "Distance from point (1,1,1) to plane x+y+z−6=0:", options: ["3.464", "2", "1", "4"], correct: 0 },
        { question: "Angle between planes with normals (1,2,2) and (2,1,2):", options: ["0.79 rad", "1 rad", "0.5 rad", "1.5 rad"], correct: 0 },
        { question: "Line intersects two planes x+y+z=6 and 2x−y+z=3?", options: ["Solve simultaneously", "Use slope", "Use distance formula", "None"], correct: 0 },
        { question: "Planes are parallel if:", options: ["Normal vectors proportional", "Slopes equal", "Intercepts equal", "Distance=0"], correct: 0 },
        { question: "Planes are perpendicular if:", options: ["Dot product of normals =0", "Normals proportional", "Slopes equal", "Distance=0"], correct: 0 },
        { question: "Skew lines distance formula uses:", options: ["Vector method", "Slope method", "Coordinate subtraction", "Area method"], correct: 0 }
    ],
    broad: [
        { question: "What is 3D geometry?", answer: "Study of points, lines, and planes in three-dimensional space." },
        { question: "Coordinates of a point?", answer: "A point is represented as (x, y, z) in 3D space." },
        { question: "Distance between two points?", answer: "Distance d = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]." },
        { question: "Section formula in 3D?", answer: "Point dividing segment joining P(x₁,y₁,z₁) and Q(x₂,y₂,z₂) in ratio m:n: ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n), (mz₂+nz₁)/(m+n))." },
        { question: "Midpoint formula?", answer: "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)."},
        { question: "Direction ratios and cosines?", answer: "Direction ratios: a,b,c; direction cosines: l,m,n; l²+m²+n²=1."},
        { question: "Equation of a line in 3D?", answer: "(x−x₁)/l = (y−y₁)/m = (z−z₁)/n, passing through (x₁,y₁,z₁) with direction ratios l,m,n."},
        { question: "Vector form of line?", answer: "r = a + λb, where a is position vector of a point, b is direction vector."},
        { question: "Equation of a plane?", answer: "Ax + By + Cz + D = 0, where (A,B,C) is normal vector."},
        { question: "Plane through point P(x₀,y₀,z₀) with normal vector (A,B,C)?", answer: "A(x−x₀) + B(y−y₀) + C(z−z₀) = 0."},
        { question: "Angle between two planes?", answer: "cos θ = |n₁•n₂| / (|n₁||n₂|), n₁,n₂ normal vectors."},
        { question: "Distance from point to plane?", answer: "d = |Ax₁+By₁+Cz₁+D| / √(A²+B²+C²)."},
        { question: "Line of intersection of two planes?", answer: "Solve plane equations simultaneously."},
        { question: "Skew lines?", answer: "Lines not parallel and not intersecting; find shortest distance using vector method."},
        { question: "Applications?", answer: "Physics, engineering, 3D modeling, navigation."},
        { question: "Tips?", answer: "Use vector method for distances and angles; identify normal and direction vectors."},
        { question: "Common mistakes?", answer: "Confusing direction ratios with coordinates, wrong formula for distance."},
        { question: "Checking points in plane?", answer: "Substitute coordinates into plane equation."},
        { question: "Parallel planes?", answer: "Planes are parallel if their normal vectors are proportional."},
        { question: "Perpendicular planes?", answer: "Planes are perpendicular if dot product of normal vectors = 0."}
    ],
    broadTest: [
        { question: "Distance between points (1,2,3) and (4,6,8):", options: ["7.071", "5", "6", "9"], correct: 0 },
        { question: "Midpoint of P(1,2,3) and Q(4,5,6):", options: ["(2.5,3.5,4.5)", "(3,4,5)", "(2,3,4)", "(1,2,3)"], correct: 0 },
        { question: "Line equation passing through (1,2,3) with direction ratios 2,3,4:", options: ["(x−1)/2=(y−2)/3=(z−3)/4", "(x−1)/3=(y−2)/2=(z−3)/4", "(x−1)/4=(y−2)/3=(z−3)/2", "None"], correct: 0 },
        { question: "Equation of plane through (1,2,3) with normal vector (2,3,4):", options: ["2(x−1)+3(y−2)+4(z−3)=0", "x+2y+3z=0", "2x+3y+4z=0", "None"], correct: 0 },
        { question: "Distance from point (1,1,1) to plane x+y+z−6=0:", options: ["3.464", "2", "1", "4"], correct: 0 },
        { question: "Angle between planes with normals (1,2,2) and (2,1,2):", options: ["0.79 rad", "1 rad", "0.5 rad", "1.5 rad"], correct: 0 },
        { question: "Line intersects two planes x+y+z=6 and 2x−y+z=3?", options: ["Solve simultaneously", "Use slope", "Use distance formula", "None"], correct: 0 },
        { question: "Planes are parallel if:", options: ["Normal vectors proportional", "Slopes equal", "Intercepts equal", "Distance=0"], correct: 0 },
        { question: "Planes are perpendicular if:", options: ["Dot product of normals =0", "Normals proportional", "Slopes equal", "Distance=0"], correct: 0 },
        { question: "Skew lines distance formula uses:", options: ["Vector method", "Slope method", "Coordinate subtraction", "Area method"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter12 = class11Chapter12;
