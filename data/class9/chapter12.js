// Class 9 - Chapter 12: Coordinate Geometry
const class9Chapter12 = {
    reading: [
        { question: "What is coordinate geometry?", answer: "Coordinate geometry studies geometric figures using a coordinate system, usually Cartesian coordinates." },
        { question: "Cartesian plane?", answer: "A plane divided by two perpendicular axes: x-axis (horizontal) and y-axis (vertical), intersecting at origin." },
        { question: "Coordinates of a point?", answer: "An ordered pair (x, y) representing horizontal and vertical distances from origin." },
        { question: "Distance formula?", answer: "Distance between (x1, y1) and (x2, y2) is √((x2−x1)² + (y2−y1)²)." },
        { question: "Midpoint formula?", answer: "Midpoint of line joining (x1, y1) and (x2, y2) is ((x1+x2)/2 , (y1+y2)/2)."},
        { question: "Section formula?", answer: "Point dividing line joining (x1, y1) and (x2, y2) in ratio m:n internally is ((mx2+nx1)/(m+n), (my2+ny1)/(m+n))."},
        { question: "Slope of a line?", answer: "Slope (m) = (y2−y1)/(x2−x1); positive slope rises, negative falls." },
        { question: "Equation of line?", answer: "Various forms: slope-intercept y=mx+c, two-point form, point-slope form." },
        { question: "Collinear points?", answer: "Points lying on the same straight line; slope between any two pairs equal." },
        { question: "Area of triangle formula using coordinates?", answer: "Area = 1/2 | x1(y2−y3) + x2(y3−y1) + x3(y1−y2) |." },
        { question: "Distance from point to line?", answer: "For line Ax+By+C=0 and point (x0,y0), distance = |Ax0+By0+C| / √(A²+B²)."},
        { question: "Graphing linear equations?", answer: "Plot points satisfying equation and join them to form a line." },
        { question: "Quadrants in Cartesian plane?", answer: "Plane divided into four quadrants: I (+,+), II (−,+), III (−,−), IV (+,−)."},
        { question: "Origin coordinates?", answer: "Origin has coordinates (0, 0)."},
        { question: "Applications of coordinate geometry?", answer: "Used in navigation, engineering, design, physics, and mapping." },
        { question: "X-intercept and Y-intercept?", answer: "X-intercept: point where line crosses x-axis (y=0). Y-intercept: point where line crosses y-axis (x=0)."},
        { question: "Slope of horizontal line?", answer: "Slope = 0." },
        { question: "Slope of vertical line?", answer: "Slope is undefined." },
        { question: "Parallel lines?", answer: "Lines with equal slopes are parallel." },
        { question: "Perpendicular lines?", answer: "Product of slopes of perpendicular lines = −1." }
    ],
    test: [
        { question: "Distance between (2,3) and (5,7):", options: ["5", "√34", "6", "√13"], correct: 1 },
        { question: "Midpoint of (2,3) and (4,7):", options: ["(3,5)", "(3,10)", "(6,10)", "(2,5)"], correct: 0 },
        { question: "Point dividing (2,3) and (4,7) in ratio 1:1:", options: ["(3,5)", "(3,7)", "(2,5)", "(4,3)"], correct: 0 },
        { question: "Slope of line joining (2,3) and (5,9):", options: ["2", "3/2", "3", "1"], correct: 1 },
        { question: "Area of triangle with vertices (0,0),(2,0),(0,3):", options: ["3", "6", "1", "2"], correct: 0 },
        { question: "Coordinates of origin:", options: ["(0,0)", "(1,0)", "(0,1)", "(1,1)"], correct: 0 },
        { question: "X-intercept of y=2x+6:", options: ["−3", "3", "0", "6"], correct: 0 },
        { question: "Y-intercept of y=2x+6:", options: ["6", "−6", "0", "2"], correct: 0 },
        { question: "Slopes of parallel lines are:", options: ["Equal", "Negative reciprocal", "Zero", "Different"], correct: 0 },
        { question: "Slopes of perpendicular lines multiply to:", options: ["0", "1", "−1", "2"], correct: 2 }
    ],
    broad: [
        { question: "Define coordinate geometry.", answer: "Study of geometric figures using a coordinate system, usually Cartesian coordinates." },
        { question: "Distance between two points.", answer: "Use formula √((x2−x1)² + (y2−y1)²)." },
        { question: "Midpoint of a line segment.", answer: "Midpoint = ((x1+x2)/2 , (y1+y2)/2)." },
        { question: "Section formula.", answer: "Point dividing line in ratio m:n internally = ((mx2+nx1)/(m+n), (my2+ny1)/(m+n))." },
        { question: "Slope of line.", answer: "Slope = (y2−y1)/(x2−x1); positive rises, negative falls." },
        { question: "Equation of line forms.", answer: "Slope-intercept y=mx+c, two-point, point-slope forms." },
        { question: "Collinear points test.", answer: "Points are collinear if slope between any two pairs is equal." },
        { question: "Area of triangle using coordinates.", answer: "Area = 1/2 | x1(y2−y3) + x2(y3−y1) + x3(y1−y2) |." },
        { question: "Distance from point to line.", answer: "Distance = |Ax0+By0+C| / √(A²+B²)." },
        { question: "X-intercept & Y-intercept.", answer: "X-intercept: y=0, Y-intercept: x=0." }
    ],
    broadTest: [
        { question: "Distance between (0,0) and (3,4):", options: ["5", "6", "7", "4"], correct: 0 },
        { question: "Midpoint of (1,2) and (5,6):", options: ["(3,4)", "(2,3)", "(4,5)", "(1,4)"], correct: 0 },
        { question: "Slope of line joining (2,3) and (4,7):", options: ["2", "1", "1/2", "3"], correct: 0 },
        { question: "Collinear points test for (0,0),(1,1),(2,2):", options: ["Yes", "No", "Maybe", "Cannot determine"], correct: 0 },
        { question: "Slopes of perpendicular lines multiply to:", options: ["0", "1", "−1", "2"], correct: 2 },
        { question: "X-intercept of y=3x+6:", options: ["−2", "2", "0", "3"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class9Chapter12 = class9Chapter12;
