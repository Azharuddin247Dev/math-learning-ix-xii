// Class 12 - Chapter 11: Three-Dimensional Geometry
const class12Chapter11 = {
    reading: [
        { question: "What is 3D geometry?", answer: "Study of points, lines, planes, and figures in three-dimensional space." },
        { question: "Coordinates in 3D?", answer: "A point P has coordinates (x, y, z) in 3D space." },
        { question: "Distance between two points?", answer: "If P(x₁, y₁, z₁), Q(x₂, y₂, z₂), distance = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]." },
        { question: "Section formula in 3D?", answer: "Point dividing PQ in ratio m:n: ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n), (mz₂+nz₁)/(m+n))." },
        { question: "Direction ratios and direction cosines?", answer: "Direction ratios are proportional to components; direction cosines = cosα, cosβ, cosγ along axes." },
        { question: "Equation of line in 3D?", answer: "Vector form: r = a + λb; Cartesian form: (x−x₁)/l = (y−y₁)/m = (z−z₁)/n." },
        { question: "Angle between two lines?", answer: "cosθ = (b₁·b₂)/(|b₁||b₂|), where b₁, b₂ are direction vectors." },
        { question: "Shortest distance between two skew lines?", answer: "d = |(a₂−a₁)·(b₁×b₂)| / |b₁×b₂|." },
        { question: "Equation of plane?", answer: "Ax + By + Cz + D = 0, where (A, B, C) is normal vector." },
        { question: "Distance of point from plane?", answer: "d = |Ax₁ + By₁ + Cz₁ + D| / √(A²+B²+C²)."},
        { question: "Angle between planes?", answer: "cosθ = (n₁·n₂)/(|n₁||n₂|), n₁, n₂ = normal vectors."},
        { question: "Angle between line and plane?", answer: "sinθ = |b·n| / (|b||n|), b = direction vector of line, n = normal of plane."},
        { question: "Equation of line of intersection of two planes?", answer: "Solve plane equations simultaneously."},
        { question: "Tips?", answer: "Always identify vectors, normals, direction ratios before solving."},
        { question: "Common mistakes?", answer: "Sign errors, using wrong formula, mixing direction ratios and cosines."},
        { question: "Vector form advantages?", answer: "Simplifies calculation of distance, angles, intersections."},
        { question: "Parametric form of line?", answer: "x=x₁+lt, y=y₁+mt, z=z₁+nt."},
        { question: "Symmetric form of line?", answer: "(x−x₁)/l = (y−y₁)/m = (z−z₁)/n."},
        { question: "Intersection of line and plane?", answer: "Substitute line parametric equations into plane equation to find parameter."},
        { question: "Check solution?", answer: "Substitute coordinates into original equations to verify."}
    ],
    test: [
        { question: "Distance between P(1,2,3) and Q(4,5,6)?", options: ["√27", "√14", "√26", "√36"], correct: 0 },
        { question: "Point dividing PQ in 1:2, P(1,2,3), Q(4,5,6)?", options: ["(2,3,4)", "(3,4,5)", "(1,2,3)", "(4,5,6)"], correct: 1 },
        { question: "Direction cosines of line along x-axis?", options: ["1,0,0", "0,1,0", "0,0,1", "1,1,1"], correct: 0 },
        { question: "Equation of plane with normal (1,2,3) passing through (0,0,0)?", options: ["x+2y+3z=0", "x+y+z=0", "2x+3y+z=0", "x+2y+z=1"], correct: 0 },
        { question: "Distance of point (1,2,2) from plane x+y+z−6=0?", options: ["1", "2", "3", "4"], correct: 1 },
        { question: "Angle between planes x+y+z=0 and 2x+3y+4z=0?", options: ["cos⁻¹(9/√30)", "cos⁻¹(1/√2)", "cos⁻¹(0)", "cos⁻¹(1)"], correct: 0 },
        { question: "Shortest distance between skew lines?", options: ["|(a₂−a₁)·(b₁×b₂)| / |b₁×b₂|", "|a₂−a₁|", "|b₁×b₂|", "0"], correct: 0 },
        { question: "Equation of line in vector form?", options: ["r = a + λb", "r = b + λa", "r = a × b", "r = a − b"], correct: 0 },
        { question: "Angle between line and plane?", options: ["sinθ = |b·n| / (|b||n|)", "cosθ = |b·n| / (|b||n|)", "tanθ = |b·n| / (|b||n|)", "θ = |b·n|"], correct: 0 },
        { question: "Parametric form of line through (1,2,3) with direction ratios 2,3,4?", options: ["x=1+2t,y=2+3t,z=3+4t", "x=2+t,y=3+t,z=4+t", "x=1+t,y=2+t,z=3+t", "x=1−2t,y=2−3t,z=3−4t"], correct: 0 }
    ],
    broad: [
        { question: "What is 3D geometry?", answer: "Study of points, lines, planes, and figures in three-dimensional space." },
        { question: "Coordinates in 3D?", answer: "A point P has coordinates (x, y, z) in 3D space." },
        { question: "Distance between two points?", answer: "If P(x₁, y₁, z₁), Q(x₂, y₂, z₂), distance = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]." },
        { question: "Section formula in 3D?", answer: "Point dividing PQ in ratio m:n: ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n), (mz₂+nz₁)/(m+n))." },
        { question: "Direction ratios and direction cosines?", answer: "Direction ratios are proportional to components; direction cosines = cosα, cosβ, cosγ along axes." },
        { question: "Equation of line in 3D?", answer: "Vector form: r = a + λb; Cartesian form: (x−x₁)/l = (y−y₁)/m = (z−z₁)/n." },
        { question: "Angle between two lines?", answer: "cosθ = (b₁·b₂)/(|b₁||b₂|), where b₁, b₂ are direction vectors." },
        { question: "Shortest distance between two skew lines?", answer: "d = |(a₂−a₁)·(b₁×b₂)| / |b₁×b₂|." },
        { question: "Equation of plane?", answer: "Ax + By + Cz + D = 0, where (A, B, C) is normal vector." },
        { question: "Distance of point from plane?", answer: "d = |Ax₁ + By₁ + Cz₁ + D| / √(A²+B²+C²)."},
        { question: "Angle between planes?", answer: "cosθ = (n₁·n₂)/(|n₁||n₂|), n₁, n₂ = normal vectors."},
        { question: "Angle between line and plane?", answer: "sinθ = |b·n| / (|b||n|), b = direction vector of line, n = normal of plane."},
        { question: "Equation of line of intersection of two planes?", answer: "Solve plane equations simultaneously."},
        { question: "Tips?", answer: "Always identify vectors, normals, direction ratios before solving."},
        { question: "Common mistakes?", answer: "Sign errors, using wrong formula, mixing direction ratios and cosines."},
        { question: "Vector form advantages?", answer: "Simplifies calculation of distance, angles, intersections."},
        { question: "Parametric form of line?", answer: "x=x₁+lt, y=y₁+mt, z=z₁+nt."},
        { question: "Symmetric form of line?", answer: "(x−x₁)/l = (y−y₁)/m = (z−z₁)/n."},
        { question: "Intersection of line and plane?", answer: "Substitute line parametric equations into plane equation to find parameter."},
        { question: "Check solution?", answer: "Substitute coordinates into original equations to verify."}
    ],
    broadTest: [
        { question: "Distance between P(1,2,3) and Q(4,5,6)?", options: ["√27", "√14", "√26", "√36"], correct: 0 },
        { question: "Point dividing PQ in 1:2, P(1,2,3), Q(4,5,6)?", options: ["(2,3,4)", "(3,4,5)", "(1,2,3)", "(4,5,6)"], correct: 1 },
        { question: "Direction cosines of line along x-axis?", options: ["1,0,0", "0,1,0", "0,0,1", "1,1,1"], correct: 0 },
        { question: "Equation of plane with normal (1,2,3) passing through (0,0,0)?", options: ["x+2y+3z=0", "x+y+z=0", "2x+3y+z=0", "x+2y+z=1"], correct: 0 },
        { question: "Distance of point (1,2,2) from plane x+y+z−6=0?", options: ["1", "2", "3", "4"], correct: 1 },
        { question: "Angle between planes x+y+z=0 and 2x+3y+4z=0?", options: ["cos⁻¹(9/√30)", "cos⁻¹(1/√2)", "cos⁻¹(0)", "cos⁻¹(1)"], correct: 0 },
        { question: "Shortest distance between skew lines?", options: ["|(a₂−a₁)·(b₁×b₂)| / |b₁×b₂|", "|a₂−a₁|", "|b₁×b₂|", "0"], correct: 0 },
        { question: "Equation of line in vector form?", options: ["r = a + λb", "r = b + λa", "r = a × b", "r = a − b"], correct: 0 },
        { question: "Angle between line and plane?", options: ["sinθ = |b·n| / (|b||n|)", "cosθ = |b·n| / (|b||n|)", "tanθ = |b·n| / (|b||n|)", "θ = |b·n|"], correct: 0 },
        { question: "Parametric form of line through (1,2,3) with direction ratios 2,3,4?", options: ["x=1+2t,y=2+3t,z=3+4t", "x=2+t,y=3+t,z=4+t", "x=1+t,y=2+t,z=3+t", "x=1−2t,y=2−3t,z=3−4t"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter11 = class12Chapter11;
