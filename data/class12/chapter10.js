// Class 12 - Chapter 10: Vectors
const class12Chapter10 = {
    reading: [
        { question: "What is a vector?", answer: "A quantity having both magnitude and direction." },
        { question: "Examples of vectors?", answer: "Displacement, velocity, acceleration, force." },
        { question: "Zero vector?", answer: "Vector with magnitude 0 and no specific direction." },
        { question: "Position vector?", answer: "Vector from origin to a point in space." },
        { question: "Addition of vectors?", answer: "Use triangle or parallelogram law; component-wise addition: a + b = (aₓ+bₓ)i + (aᵧ+bᵧ)j + (a_z+b_z)k." },
        { question: "Subtraction of vectors?", answer: "a − b = a + (−b), subtract components." },
        { question: "Scalar multiplication?", answer: "Multiply each component by scalar: k·a = (k aₓ)i + (k aᵧ)j + (k a_z)k." },
        { question: "Dot product (scalar product)?", answer: "a·b = |a||b|cosθ, produces scalar." },
        { question: "Properties of dot product?", answer: "Commutative: a·b = b·a, distributive over addition, a·a = |a|²." },
        { question: "Cross product (vector product)?", answer: "a×b = |a||b|sinθ n̂, produces vector perpendicular to both." },
        { question: "Right-hand rule?", answer: "Used to determine direction of cross product." },
        { question: "Properties of cross product?", answer: "a×b = −b×a, distributive, a×a = 0 vector." },
        { question: "Applications?", answer: "Torque, angular momentum, magnetic force, plane equation." },
        { question: "Unit vector?", answer: "Vector of magnitude 1 in direction of a: â = a/|a|." },
        { question: "Components of vector?", answer: "Vector a = aₓ i + aᵧ j + a_z k." },
        { question: "Angle between two vectors?", answer: "cosθ = (a·b)/(|a||b|)."},
        { question: "Area of parallelogram formed by vectors?", answer: "|a×b|."},
        { question: "Volume of parallelepiped formed by vectors?", answer: "|a·(b×c)|."},
        { question: "Position vector in 3D?", answer: "r = xi + yj + zk, points to (x, y, z)."},
        { question: "Tips?", answer: "Use components for calculations; always check cross product direction."}
    ],
    test: [
        { question: "Dot product of a=(1,2,3) and b=(4,5,6)?", options: ["32", "31", "30", "29"], correct: 0 },
        { question: "Cross product of i and j?", options: ["k", "−k", "i", "j"], correct: 0 },
        { question: "Magnitude of vector a=(3,4,0)?", options: ["5", "7", "25", "1"], correct: 0 },
        { question: "Unit vector of a=(2,0,0)?", options: ["i", "2i", "j", "k"], correct: 0 },
        { question: "Angle between a=(1,0,0) and b=(0,1,0)?", options: ["90°", "0°", "45°", "60°"], correct: 0 },
        { question: "Area of parallelogram a=(1,2,0), b=(2,1,0)?", options: ["3", "4", "2", "1"], correct: 0 },
        { question: "Volume of parallelepiped a=(1,0,0), b=(0,1,0), c=(0,0,1)?", options: ["1", "0", "2", "3"], correct: 0 },
        { question: "Dot product is?", options: ["Scalar", "Vector", "Matrix", "Function"], correct: 0 },
        { question: "Cross product is?", options: ["Vector", "Scalar", "Matrix", "Function"], correct: 0 },
        { question: "Right-hand rule used for?", options: ["Cross product direction", "Dot product", "Addition", "Subtraction"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter10 = class12Chapter10;
