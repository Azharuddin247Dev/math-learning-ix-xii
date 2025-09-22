// Class 12 - Chapter 8: Applications of Integrals
const class12Chapter8 = {
    reading: [
        { question: "Application of integrals?", answer: "Integrals can be used to find area under curves, area between curves, volume of solids of revolution, displacement, work, etc." },
        { question: "Area under a curve?", answer: "For y=f(x) from x=a to x=b, area = ∫ₐᵇ f(x) dx." },
        { question: "Area between two curves?", answer: "If y=f(x) and y=g(x), area between = ∫ₐᵇ [f(x) − g(x)] dx, f(x) ≥ g(x)."},
        { question: "Volume of solids of revolution?", answer: "Rotate curve about x-axis or y-axis, use formula V = π∫ₐᵇ [f(x)]² dx." },
        { question: "Volume about y-axis?", answer: "V = π∫ₐᵇ [g(y)]² dy, if function given in terms of y." },
        { question: "Displacement?", answer: "Integral of velocity function over time: s = ∫ v(t) dt." },
        { question: "Work done?", answer: "W = ∫ F(x) dx, force applied along path." },
        { question: "Tips for area?", answer: "Ensure correct limits, upper function minus lower function." },
        { question: "Tips for volume?", answer: "Square the function, multiply by π, apply limits." },
        { question: "Physical applications?", answer: "Physics: work, center of mass, probability density; Engineering: fluid flow, material volume." },
        { question: "Splitting integrals?", answer: "∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫ᶜᵇ f(x) dx." },
        { question: "Geometrical interpretation?", answer: "Area between curves = integral of vertical slices or horizontal slices depending on axis." },
        { question: "Common mistakes?", answer: "Wrong limits, subtract lower from upper incorrectly, forget π in volume formula." },
        { question: "Check solution?", answer: "Differentiate to verify; check units for physics problems." },
        { question: "Curves intersecting?", answer: "Find points of intersection first to determine limits of integration." },
        { question: "Volume using shells?", answer: "V = 2π∫ₐᵇ (radius)(height) dx for shell method." },
        { question: "Area under parametric curve?", answer: "Use x = f(t), y = g(t), area = ∫ y dx = ∫ y (dx/dt) dt." },
        { question: "Tips for parametric/complex curves?", answer: "Express dx/dt or dy/dt, choose correct limits." },
        { question: "Area in polar coordinates?", answer: "Area = 1/2 ∫ₐᵇ r² dθ." },
        { question: "Applications in probability?", answer: "Definite integrals used to find probabilities from continuous distributions." }
    ],
    test: [
        { question: "Area under y=x² from x=0 to x=2?", options: ["8/3", "4", "2", "1"], correct: 0 },
        { question: "Area between y=x² and y=x from x=0 to x=1?", options: ["1/2", "1/3", "1/6", "1"], correct: 2 },
        { question: "Volume of y=x from x=0 to x=1 rotated about x-axis?", options: ["π/2", "π", "1", "π/3"], correct: 3 },
        { question: "Displacement from v(t)=2t, t=0 to t=3?", options: ["9", "6", "3", "12"], correct: 0 },
        { question: "Work done by F(x)=5 over x=0 to x=4?", options: ["20", "10", "5", "25"], correct: 0 },
        { question: "Volume using shell method?", options: ["2π∫ radius*height dx", "π∫ height dx", "π∫ radius² dx", "None"], correct: 0 },
        { question: "Area of circle in polar coordinates r=2?", options: ["2π", "4π", "8π", "π"], correct: 1 },
        { question: "∫₀¹ (x²−x³) dx =", options: ["1/12", "1/6", "1/4", "1/3"], correct: 0 },
        { question: "Intersection points for area calculation?", options: ["Solve f(x)=g(x)", "Integrate directly", "Differentiate", "None"], correct: 0 },
        { question: "Area under y=sin x from 0 to π?", options: ["2", "1", "0", "π"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter8 = class12Chapter8;
