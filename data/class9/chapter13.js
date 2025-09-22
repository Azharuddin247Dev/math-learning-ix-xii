// Class 9 - Chapter 13: Mensuration II
const class9Chapter13 = {
    reading: [
        { question: "What is mensuration?", answer: "Mensuration is the branch of mathematics that deals with the measurement of geometric figures like area, surface area, and volume." },
        { question: "Surface area of a prism?", answer: "Surface area = Lateral surface area + 2 × Base area." },
        { question: "Volume of a prism?", answer: "Volume = Base area × Height." },
        { question: "Surface area of a pyramid?", answer: "Surface area = Lateral surface area + Base area." },
        { question: "Volume of a pyramid?", answer: "Volume = (1/3) × Base area × Height." },
        { question: "Surface area of a sphere?", answer: "Surface area = 4πr²." },
        { question: "Volume of a sphere?", answer: "Volume = (4/3)πr³." },
        { question: "Surface area of hemisphere?", answer: "Curved surface area = 2πr²; Total surface area = 3πr²." },
        { question: "Volume of hemisphere?", answer: "Volume = (2/3)πr³." },
        { question: "Surface area of cone?", answer: "Curved surface area = πrl; Total surface area = πr(l+r), where l = slant height." },
        { question: "Volume of cone?", answer: "Volume = (1/3)πr²h." },
        { question: "Surface area of frustum of cone?", answer: "CSA = π(R+r)l; Total SA = π(R+r)l + π(R² + r²), l = slant height." },
        { question: "Volume of frustum of cone?", answer: "Volume = (1/3)πh(R² + r² + Rr)."},
        { question: "Slant height of cone/frustum?", answer: "Use Pythagoras theorem if height and radius are given: l = √(r²+h²) or l = √((R-r)² + h²)."},
        { question: "Units of surface area?", answer: "Square units like cm², m²." },
        { question: "Units of volume?", answer: "Cubic units like cm³, m³." },
        { question: "Conversion between units?", answer: "1 m² = 10,000 cm²; 1 m³ = 1,000,000 cm³." },
        { question: "Application of mensuration?", answer: "Used in construction, packaging, architecture, and engineering problems." },
        { question: "Surface area of combination of solids?", answer: "Sum the individual surfaces exposed; subtract areas of joining faces." },
        { question: "Volume of combination of solids?", answer: "Add the volumes of individual solids." }
    ],
    test: [
        { question: "Volume of sphere with radius r:", options: ["4πr²", "(4/3)πr³", "2πr²", "πr³"], correct: 1 },
        { question: "Surface area of cone with radius r and slant height l:", options: ["πr²", "πrl", "πr(l+r)", "2πr²"], correct: 2 },
        { question: "Volume of cone with height h and radius r:", options: ["πr²h", "(1/2)πr²h", "(1/3)πr²h", "2πr²h"], correct: 2 },
        { question: "Surface area of hemisphere (total):", options: ["2πr²", "3πr²", "4πr²", "πr²"], correct: 1 },
        { question: "Volume of hemisphere:", options: ["(1/3)πr³", "(2/3)πr³", "(4/3)πr³", "πr³"], correct: 1 },
        { question: "Volume of frustum of cone:", options: ["(1/3)πh(R²+r²+Rr)", "πh(R²+r²)", "πR²h", "πr²h"], correct: 0 },
        { question: "Total surface area of prism:", options: ["2 × Base area", "Lateral surface area", "Lateral + 2 × Base area", "Only lateral surface area"], correct: 2 },
        { question: "Volume of pyramid:", options: ["Base × height", "(1/3) Base × height", "2 × Base × height", "Base² × height"], correct: 1 },
        { question: "Units of volume:", options: ["m²", "cm²", "m³", "cm²"], correct: 2 },
        { question: "Slant height of cone:", options: ["l = √(r²+h²)", "l = r+h", "l = r-h", "l = h/r"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class9Chapter13 = class9Chapter13;
