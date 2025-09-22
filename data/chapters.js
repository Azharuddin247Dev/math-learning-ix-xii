// Chapter lists for Classes IX to XII
const classChapters = {
    9: [
        { id: 1, name: "Real Numbers", description: "Rational and irrational numbers, Euclid’s lemma, operations" },
        { id: 2, name: "Polynomials", description: "Types, degree, addition, subtraction, multiplication, factorization" },
        { id: 3, name: "Linear Equations in Two Variables", description: "Graphical, substitution, elimination, cross-multiplication methods" },
        { id: 4, name: "Coordinate Geometry", description: "Cartesian plane, plotting points, distance, midpoint, section formula" },
        { id: 5, name: "Triangles", description: "Congruence, similarity, Pythagoras theorem and applications" },
        { id: 6, name: "Quadrilaterals", description: "Types, properties, parallelogram, rhombus, trapezium" },
        { id: 7, name: "Circles", description: "Chords, angle subtended by chord, cyclic quadrilateral, tangents" },
        { id: 8, name: "Trigonometry", description: "Trigonometric ratios, identities, heights and distances" },
        { id: 9, name: "Mensuration", description: "Surface area and volume of solids, frustum of cone" },
        { id: 10, name: "Statistics", description: "Data collection, frequency distribution, mean, median, mode, graphs" },
        { id: 11, name: "Probability", description: "Random experiments, simple events, classical probability" },
        { id: 12, name: "Commercial Mathematics", description: "Profit, loss, discount, simple and compound interest" }
    ],
    10: [
        { id: 1, name: "Real Numbers", description: "Euclid’s lemma, Fundamental Theorem of Arithmetic, irrational numbers" },
        { id: 2, name: "Polynomials", description: "Degree, factorization, remainder theorem, factor theorem" },
        { id: 3, name: "Pair of Linear Equations in Two Variables", description: "Graphical, substitution, elimination, cross-multiplication" },
        { id: 4, name: "Quadratic Equations", description: "Factorization, quadratic formula, nature of roots, applications" },
        { id: 5, name: "Arithmetic Progression (A.P.)", description: "nth term, sum of n terms, applications" },
        { id: 6, name: "Coordinate Geometry", description: "Cartesian plane, distance, midpoint, section formula, line equation" },
        { id: 7, name: "Triangles", description: "Similarity, Pythagoras theorem, properties" },
        { id: 8, name: "Circles", description: "Tangents, properties of tangents, two tangents from external point" },
        { id: 9, name: "Constructions", description: "Division of line segment, tangents to circle, similar triangles" },
        { id: 10, name: "Trigonometry", description: "Trigonometric ratios, identities, heights and distances" },
        { id: 11, name: "Mensuration", description: "Surface area and volume of solids, frustum of cone, combination of solids" },
        { id: 12, name: "Statistics", description: "Mean, median, mode (grouped/ungrouped), histogram, frequency polygon, ogive" },
        { id: 13, name: "Probability", description: "Random experiments, simple events, classical probability" },
        { id: 14, name: "Commercial Mathematics", description: "Simple and compound interest, profit, loss, discount, VAT/GST" }
    ],
    11: [
        { id: 1, name: "Sets", description: "Definition, types of sets, subsets, power set, Venn diagrams, union, intersection, difference, complement" },
        { id: 2, name: "Relations and Functions", description: "Ordered pairs, Cartesian product, types of relations, domain, co-domain, range, types of functions" },
        { id: 3, name: "Principle of Mathematical Induction", description: "Simple applications of induction" },
        { id: 4, name: "Complex Numbers and Quadratic Equations", description: "Algebra of complex numbers, polar form, quadratic equations, roots, relation with coefficients" },
        { id: 5, name: "Sequences and Series", description: "A.P., G.P., nth term, sum of n terms, infinite G.P., relation between A.M. and G.M." },
        { id: 6, name: "Binomial Theorem", description: "Expansion, general term, middle term, applications" },
        { id: 7, name: "Permutations and Combinations", description: "Counting principle, factorial, permutations and combinations" },
        { id: 8, name: "Straight Lines", description: "Slope, equation of line (various forms), angle between lines, distance from point to line" },
        { id: 9, name: "Conic Sections", description: "Circle, parabola, ellipse, hyperbola: standard forms, simple properties" },
        { id: 10, name: "Limits and Derivatives", description: "Concept of limits, derivative as rate of change, derivatives of simple functions" },
        { id: 11, name: "Mathematical Reasoning", description: "Statements, logical connectives, truth tables, converse, contrapositive, negation" },
        { id: 12, name: "Statistics", description: "Measures of dispersion: range, mean deviation, variance, standard deviation" },
        { id: 13, name: "Probability", description: "Classical probability, addition and multiplication theorems, simple problems" },
        { id: 14, name: "Trigonometry", description: "Trigonometric ratios for general angles, identities, transformations, graphs, inverse functions" }
    ],
    12: [
        { id: 1, name: "Relations", description: "Reflexive, symmetric, transitive, equivalence relations" },
        { id: 2, name: "Functions", description: "One-one, onto, bijective, composition, inverse functions" },
        { id: 3, name: "Matrices", description: "Types, operations, properties, determinants, applications to linear equations" },
        { id: 4, name: "Inverse of a Matrix", description: "Adjoint method, solving linear equations" },
        { id: 5, name: "Continuity and Differentiability", description: "Continuity, derivative of standard functions, composite, implicit, inverse functions" },
        { id: 6, name: "Applications of Derivatives", description: "Rate of change, tangent, normal, increasing/decreasing functions, maxima/minima" },
        { id: 7, name: "Integration", description: "Indefinite integrals, methods (substitution, parts, partial fractions), definite integrals, area under curve" },
        { id: 8, name: "Differential Equations", description: "Formation, first-order first-degree equations, separation of variables, homogeneous, linear type" },
        { id: 9, name: "Vectors", description: "Representation, addition, scalar multiplication, dot and cross product, applications" },
        { id: 10, name: "Three-Dimensional Geometry", description: "Direction cosines, direction ratios, line equations, plane equations, angles, distances" },
        { id: 11, name: "Probability", description: "Probability distribution, mean, variance, binomial distribution, conditional probability, Bayes’ theorem" },
        { id: 12, name: "Statistics", description: "Regression, correlation, applications" },
        { id: 13, name: "Linear Programming", description: "Linear inequalities, graphical solution, word problems in two variables" }
    ]
};

// Export for use in other files
window.classChapters = classChapters;