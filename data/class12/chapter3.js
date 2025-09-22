// Class 12 - Chapter 3: Matrices
const class12Chapter3 = {
    reading: [
        { question: "What is a matrix?", answer: "A rectangular array of numbers, symbols, or expressions arranged in rows and columns." },
        { question: "Order of a matrix?", answer: "Number of rows × number of columns, e.g., 3×2 matrix has 3 rows and 2 columns." },
        { question: "Types of matrices?", answer: "Row, column, square, rectangular, diagonal, scalar, identity, zero, symmetric, skew-symmetric, upper/lower triangular." },
        { question: "Equality of matrices?", answer: "Two matrices are equal if they have the same order and corresponding elements are equal." },
        { question: "Addition of matrices?", answer: "Possible only if matrices have same order; add corresponding elements." },
        { question: "Scalar multiplication?", answer: "Multiply each element of a matrix by a scalar." },
        { question: "Matrix multiplication?", answer: "AB is defined if number of columns of A = number of rows of B; (AB)₍ᵢⱼ₎ = sum of products of ith row of A and jth column of B." },
        { question: "Transpose of a matrix?", answer: "Matrix obtained by interchanging rows and columns; denoted Aᵀ." },
        { question: "Symmetric matrix?", answer: "A matrix equal to its transpose: A = Aᵀ." },
        { question: "Skew-symmetric matrix?", answer: "A matrix whose transpose is its negative: Aᵀ = −A." },
        { question: "Determinant of 2×2 matrix?", answer: "|A| = ad−bc for matrix [[a, b], [c, d]]." },
        { question: "Inverse of a matrix?", answer: "A⁻¹ exists if A is square and |A| ≠ 0; A⁻¹A = AA⁻¹ = I." },
        { question: "Properties?", answer: "Addition and scalar multiplication rules, (Aᵀ)ᵀ = A, (AB)ᵀ = BᵀAᵀ." },
        { question: "Identity matrix?", answer: "Square matrix with 1s on diagonal and 0s elsewhere; denoted I." },
        { question: "Zero matrix?", answer: "All elements are zero." },
        { question: "Applications?", answer: "Solving system of linear equations, transformations, computer graphics, statistics." },
        { question: "Tips?", answer: "Check order before operations, use formula carefully for multiplication." },
        { question: "Common mistakes?", answer: "Multiplying matrices with incompatible orders, wrong transpose, forgetting determinant for inverse." },
        { question: "Checking solution?", answer: "Multiply A and A⁻¹ to verify identity matrix." },
        { question: "Use of determinants?", answer: "To find inverse, solve linear equations using Cramer's rule." }
    ],
    test: [
        { question: "Order of matrix [[1,2,3],[4,5,6]]:", options: ["2×3", "3×2", "2×2", "3×3"], correct: 0 },
        { question: "Transpose of [[1,2],[3,4]]:", options: ["[[1,3],[2,4]]", "[[2,1],[4,3]]", "[[1,2],[3,4]]", "[[4,3],[2,1]]"], correct: 0 },
        { question: "Sum of [[1,2],[3,4]] + [[4,3],[2,1]]:", options: ["[[5,5],[5,5]]", "[[4,5],[5,4]]", "[[1,2],[3,4]]", "[[0,0],[0,0]]"], correct: 0 },
        { question: "Determinant of [[1,2],[3,4]]:", options: ["−2", "2", "1", "0"], correct: 0 },
        { question: "Inverse of [[1,2],[3,4]] exists?", options: ["Yes", "No", "Sometimes", "Cannot say"], correct: 0 },
        { question: "A matrix is symmetric if:", options: ["A = Aᵀ", "A = −Aᵀ", "All elements equal", "A is square"], correct: 0 },
        { question: "Scalar multiplication of [[1,2],[3,4]] by 3:", options: ["[[3,6],[9,12]]", "[[1,2],[3,4]]", "[[2,4],[6,8]]", "[[0,0],[0,0]]"], correct: 0 },
        { question: "Product AB defined if A is 2×3 and B is:", options: ["3×n", "2×n", "2×2", "3×3"], correct: 0 },
        { question: "Zero matrix of order 2×2:", options: ["[[0,0],[0,0]]", "[[1,0],[0,1]]", "[[0,1],[1,0]]", "[[1,1],[1,1]]"], correct: 0 },
        { question: "Identity matrix 3×3 has 1s at:", options: ["Diagonal", "First row", "First column", "All elements"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter3 = class12Chapter3;
