// Class 11 - Chapter 11: Conic Sections
const class11Chapter11 = {
    reading: [
        { question: "What are conic sections?", answer: "Curves obtained by intersecting a plane with a double-napped cone: circle, ellipse, parabola, hyperbola." },
        { question: "Circle definition?", answer: "Set of points equidistant from a fixed point called center." },
        { question: "Standard equation of circle?", answer: "(x−h)² + (y−k)² = r², center (h,k), radius r." },
        { question: "Ellipse definition?", answer: "Set of points such that sum of distances from two fixed points (foci) is constant." },
        { question: "Standard equation of ellipse?", answer: "x²/a² + y²/b² = 1 (a > b, horizontal major axis)."},
        { question: "Parabola definition?", answer: "Set of points equidistant from a fixed point (focus) and a line (directrix)."},
        { question: "Standard equation of parabola?", answer: "y² = 4ax (opens right), x² = 4ay (opens upward)."},
        { question: "Hyperbola definition?", answer: "Set of points such that difference of distances from two fixed points (foci) is constant."},
        { question: "Standard equation of hyperbola?", answer: "x²/a² − y²/b² = 1 (horizontal), y²/b² − x²/a² =1 (vertical)."},
        { question: "Eccentricity?", answer: "e = distance of focus from center / distance of vertex from center, circle e=0, ellipse 0<e<1, parabola e=1, hyperbola e>1."},
        { question: "Foci?", answer: "Fixed points used in definitions of ellipse, parabola, hyperbola."},
        { question: "Vertices?", answer: "Points on conic closest/farthest along major axis (ellipse/hyperbola) or on axis (parabola)."},
        { question: "Latus rectum?", answer: "Line segment perpendicular to axis through focus, length 4a (parabola)."},
        { question: "Applications?", answer: "Engineering, physics, satellite orbits, optics."},
        { question: "Tips?", answer: "Identify conic type from equation, use standard formulas for center, foci, vertices, axes."},
        { question: "Common mistakes?", answer: "Mixing horizontal and vertical forms, wrong eccentricity calculation."},
        { question: "Graphing conics?", answer: "Plot vertices, foci, and use standard form to draw curve."},
        { question: "Circle vs ellipse?", answer: "Circle is special ellipse with a = b."},
        { question: "Parabola vs hyperbola?", answer: "Parabola has one focus, hyperbola has two foci and two branches."},
        { question: "Check solution?", answer: "Substitute points in equation to verify they lie on the conic."}
    ],
    test: [
        { question: "Standard equation of circle with center (0,0) and radius 3:", options: ["x² + y² = 9", "x² + y² = 3", "(x−3)² + (y−3)² =9", "x² + y² =6"], correct: 0 },
        { question: "Equation of ellipse horizontal major axis a=5, b=3:", options: ["x²/25 + y²/9 =1", "x²/9 + y²/25 =1", "x²/25 − y²/9 =1", "y²/25 + x²/9 =1"], correct: 0 },
        { question: "Equation of parabola opening right with focus at (a,0):", options: ["y²=4ax", "x²=4ay", "y²=4ay", "x²=4ax"], correct: 0 },
        { question: "Equation of hyperbola horizontal transverse axis:", options: ["x²/a² − y²/b² =1", "y²/b² − x²/a²=1", "x²/a² + y²/b²=1", "y²/b² + x²/a²=1"], correct: 0 },
        { question: "Eccentricity of circle:", options: ["0", "1", "<1", ">1"], correct: 0 },
        { question: "Eccentricity of parabola:", options: ["1", "0", < "1", ">1"], correct: 0 },
        { question: "Vertices of ellipse x²/16 + y²/9 =1:", options: ["(±4,0)", "(0,±3)", "(±3,0)", "(0,±4)"], correct: 0 },
        { question: "Latus rectum of parabola y² = 8x:", options: ["8", "4", "2", "16"], correct: 0 },
        { question: "Foci of hyperbola x²/9 − y²/16=1:", options: ["(√(9+16),0) → (5,0)", "±3,0", "0,±4", "0,±5"], correct: 0 },
        { question: "Circle vs ellipse special case:", options: ["Circle: a=b", "Circle: a>b", "Ellipse: a=b", "None"], correct: 0 }
    ],
    broad: [
        { question: "What are conic sections?", answer: "Curves obtained by intersecting a plane with a double-napped cone: circle, ellipse, parabola, hyperbola." },
        { question: "Circle definition?", answer: "Set of points equidistant from a fixed point called center." },
        { question: "Standard equation of circle?", answer: "(x−h)² + (y−k)² = r², center (h,k), radius r." },
        { question: "Ellipse definition?", answer: "Set of points such that sum of distances from two fixed points (foci) is constant." },
        { question: "Standard equation of ellipse?", answer: "x²/a² + y²/b² = 1 (a > b, horizontal major axis)."},
        { question: "Parabola definition?", answer: "Set of points equidistant from a fixed point (focus) and a line (directrix)."},
        { question: "Standard equation of parabola?", answer: "y² = 4ax (opens right), x² = 4ay (opens upward)."},
        { question: "Hyperbola definition?", answer: "Set of points such that difference of distances from two fixed points (foci) is constant."},
        { question: "Standard equation of hyperbola?", answer: "x²/a² − y²/b² = 1 (horizontal), y²/b² − x²/a² =1 (vertical)."},
        { question: "Eccentricity?", answer: "e = distance of focus from center / distance of vertex from center; circle e=0, ellipse 0<e<1, parabola e=1, hyperbola e>1."},
        { question: "Foci?", answer: "Fixed points used in definitions of ellipse, parabola, hyperbola."},
        { question: "Vertices?", answer: "Points on conic closest/farthest along major axis (ellipse/hyperbola) or on axis (parabola)."},
        { question: "Latus rectum?", answer: "Line segment perpendicular to axis through focus, length 4a (parabola)."},
        { question: "Applications?", answer: "Engineering, physics, satellite orbits, optics."},
        { question: "Tips?", answer: "Identify conic type from equation, use standard formulas for center, foci, vertices, axes."},
        { question: "Common mistakes?", answer: "Mixing horizontal and vertical forms, wrong eccentricity calculation."},
        { question: "Graphing conics?", answer: "Plot vertices, foci, and use standard form to draw curve."},
        { question: "Circle vs ellipse?", answer: "Circle is special ellipse with a = b."},
        { question: "Parabola vs hyperbola?", answer: "Parabola has one focus, hyperbola has two foci and two branches."},
        { question: "Check solution?", answer: "Substitute points in equation to verify they lie on the conic."}
    ],
    broadTest: [
        { question: "Standard equation of circle with center (0,0) and radius 3:", options: ["x² + y² = 9", "x² + y² = 3", "(x−3)² + (y−3)² =9", "x² + y² =6"], correct: 0 },
        { question: "Equation of ellipse horizontal major axis a=5, b=3:", options: ["x²/25 + y²/9 =1", "x²/9 + y²/25 =1", "x²/25 − y²/9 =1", "y²/25 + x²/9 =1"], correct: 0 },
        { question: "Equation of parabola opening right with focus at (a,0):", options: ["y²=4ax", "x²=4ay", "y²=4ay", "x²=4ax"], correct: 0 },
        { question: "Equation of hyperbola horizontal transverse axis:", options: ["x²/a² − y²/b² =1", "y²/b² − x²/a²=1", "x²/a² + y²/b²=1", "y²/b² + x²/a²=1"], correct: 0 },
        { question: "Eccentricity of circle:", options: ["0", "1", "<1", ">1"], correct: 0 },
        { question: "Eccentricity of parabola:", options: ["1", "0", "<1", ">1"], correct: 0 },
        { question: "Vertices of ellipse x²/16 + y²/9 =1:", options: ["(±4,0)", "(0,±3)", "(±3,0)", "(0,±4)"], correct: 0 },
        { question: "Latus rectum of parabola y² = 8x:", options: ["8", "4", "2", "16"], correct: 0 },
        { question: "Foci of hyperbola x²/9 − y²/16=1:", options: ["(±5,0)", "±3,0", "0,±4", "0,±5"], correct: 0 },
        { question: "Circle vs ellipse special case:", options: ["Circle: a=b", "Circle: a>b", "Ellipse: a=b", "None"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class11Chapter11 = class11Chapter11;
