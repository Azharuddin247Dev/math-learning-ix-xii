// Class 12 - Chapter 4: Determinants
const class12Chapter4 = {
    reading: [
        { question: "What is a determinant?", answer: "A scalar value computed from a square matrix that can be used to solve linear equations and find inverse of matrix." },
        { question: "Determinant of 2×2 matrix [[a,b],[c,d]]?", answer: "|A| = ad − bc." },
        { question: "Determinant of 3×3 matrix?", answer: "Using rule of Sarrus or cofactor expansion along a row/column." },
        { question: "Minor of an element?", answer: "Determinant obtained by deleting the row and column of that element." },
        { question: "Cofactor?", answer: "Cofactor A_ij = (−1)^(i+j) × minor of element a_ij." },
        { question: "Properties of determinants?", answer: "1. Swapping two rows/columns changes sign, 2. Multiplying row by scalar multiplies determinant by scalar, 3. Determinant of triangular matrix = product of diagonal entries, 4. If two rows/columns are identical, determinant = 0." },
        { question: "Expansion of determinant?", answer: "Expanding along a row or column using cofactors." },
        { question: "Inverse of a matrix using determinant?", answer: "A⁻¹ = (1/|A|) × adj(A), if |A| ≠ 0." },
        { question: "Cramer's rule?", answer: "Solving system of linear equations using determinants." },
        { question: "Applications?", answer: "Linear equations, area of triangle, inverse of matrices, transformations." },
        { question: "Tips?", answer: "Check row/column operations, triangular forms for easy calculation." },
        { question: "Common mistakes?", answer: "Sign errors in cofactors, forgetting to divide by determinant for inverse." },
        { question: "Triangular matrix determinant?", answer: "Product of diagonal elements." },
        { question: "Determinant of identity matrix?", answer: "1." },
        { question: "Effect of row operations?", answer: "Adding multiple of one row to another doesn't change determinant." },
        { question: "Check solution?", answer: "Verify determinant by simple expansion or property." },
        { question: "Geometrical meaning?", answer: "Determinant gives area (2×2) or volume (3×3) for vectors as rows/columns." },
        { question: "Zero determinant?", answer: "Matrix is singular and non-invertible." },
        { question: "Sign rule?", answer: "Cofactor sign = (−1)^(i+j)."},
        { question: "Determinant using row reduction?", answer: "Convert to upper triangular form, multiply diagonal elements." }
    ],
    test: [
        { question: "Determinant of [[1,2],[3,4]]:", options: ["−2", "2", "1", "0"], correct: 0 },
        { question: "Determinant of triangular matrix [[2,0],[3,5]]:", options: ["10", "7", "1", "0"], correct: 0 },
        { question: "Minor of element 1 in [[1,2],[3,4]]:", options: ["4", "3", "2", "1"], correct: 0 },
        { question: "Cofactor of element 2 in [[1,2],[3,4]]:", options: ["−3", "3", "2", "−2"], correct: 0 },
        { question: "If two rows are identical, determinant is:", options: ["0", "1", "Cannot say", "−1"], correct: 0 },
        { question: "Inverse exists if determinant is:", options: ["Non-zero", "Zero", "1", "2"], correct: 0 },
        { question: "Cramer's rule used for:", options: ["Solving linear equations", "Matrix multiplication", "Transpose", "Determinant only"], correct: 0 },
        { question: "Effect of swapping two rows?", options: ["Change sign", "No effect", "Double determinant", "Divide determinant by 2"], correct: 0 },
        { question: "Determinant of identity matrix 3×3:", options: ["1", "0", "3", "−1"], correct: 0 },
        { question: "Area of triangle using determinant?", options: ["1/2 |determinant|", "|determinant|", "determinant squared", "None"], correct: 0 }
    ],
    broad: [
        { question: "What is a determinant?", answer: "A scalar value computed from a square matrix that can be used to solve linear equations and find inverse of matrix." },
        { question: "Determinant of 2×2 matrix [[a,b],[c,d]]?", answer: "|A| = ad − bc." },
        { question: "Determinant of 3×3 matrix?", answer: "Using rule of Sarrus or cofactor expansion along a row/column." },
        { question: "Minor of an element?", answer: "Determinant obtained by deleting the row and column of that element." },
        { question: "Cofactor?", answer: "Cofactor A_ij = (−1)^(i+j) × minor of element a_ij." },
        { question: "Properties of determinants?", answer: "1. Swapping two rows/columns changes sign, 2. Multiplying row by scalar multiplies determinant by scalar, 3. Determinant of triangular matrix = product of diagonal entries, 4. If two rows/columns are identical, determinant = 0." },
        { question: "Expansion of determinant?", answer: "Expanding along a row or column using cofactors." },
        { question: "Inverse of a matrix using determinant?", answer: "A⁻¹ = (1/|A|) × adj(A), if |A| ≠ 0." },
        { question: "Cramer's rule?", answer: "Solving system of linear equations using determinants." },
        { question: "Applications?", answer: "Linear equations, area of triangle, inverse of matrices, transformations." },
        { question: "Tips?", answer: "Check row/column operations, triangular forms for easy calculation." },
        { question: "Common mistakes?", answer: "Sign errors in cofactors, forgetting to divide by determinant for inverse." },
        { question: "Triangular matrix determinant?", answer: "Product of diagonal elements." },
        { question: "Determinant of identity matrix?", answer: "1." },
        { question: "Effect of row operations?", answer: "Adding multiple of one row to another doesn't change determinant." },
        { question: "Check solution?", answer: "Verify determinant by simple expansion or property." },
        { question: "Geometrical meaning?", answer: "Determinant gives area (2×2) or volume (3×3) for vectors as rows/columns." },
        { question: "Zero determinant?", answer: "Matrix is singular and non-invertible." },
        { question: "Sign rule?", answer: "Cofactor sign = (−1)^(i+j)."},
        { question: "Determinant using row reduction?", answer: "Convert to upper triangular form, multiply diagonal elements." }
    ],
    broadTest: [
        { question: "Determinant of [[1,2],[3,4]]:", options: ["−2", "2", "1", "0"], correct: 0 },
        { question: "Determinant of triangular matrix [[2,0],[3,5]]:", options: ["10", "7", "1", "0"], correct: 0 },
        { question: "Minor of element 1 in [[1,2],[3,4]]:", options: ["4", "3", "2", "1"], correct: 0 },
        { question: "Cofactor of element 2 in [[1,2],[3,4]]:", options: ["−3", "3", "2", "−2"], correct: 0 },
        { question: "If two rows are identical, determinant is:", options: ["0", "1", "Cannot say", "−1"], correct: 0 },
        { question: "Inverse exists if determinant is:", options: ["Non-zero", "Zero", "1", "2"], correct: 0 },
        { question: "Cramer's rule used for:", options: ["Solving linear equations", "Matrix multiplication", "Transpose", "Determinant only"], correct: 0 },
        { question: "Effect of swapping two rows?", options: ["Change sign", "No effect", "Double determinant", "Divide determinant by 2"], correct: 0 },
        { question: "Determinant of identity matrix 3×3:", options: ["1", "0", "3", "−1"], correct: 0 },
        { question: "Area of triangle using determinant?", options: ["1/2 |determinant|", "|determinant|", "determinant squared", "None"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter4 = class12Chapter4;
