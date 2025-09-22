// Class 10 - Chapter 2: Mensuration I
const class10Chapter2 = {
    reading: [
        { question: "What is mensuration?", answer: "Mensuration is the branch of mathematics dealing with measurement of lengths, areas, and volumes of geometric figures." },
        { question: "Surface area of sphere?", answer: "Surface area = 4πr²." },
        { question: "Volume of sphere?", answer: "Volume = (4/3)πr³." },
        { question: "Surface area of hemisphere?", answer: "Curved surface area = 2πr²; Total surface area = 3πr²." },
        { question: "Volume of hemisphere?", answer: "Volume = (2/3)πr³." },
        { question: "Surface area of cone?", answer: "Curved surface area = πrl; Total surface area = πr(l+r), where l = slant height." },
        { question: "Volume of cone?", answer: "Volume = (1/3)πr²h." },
        { question: "Surface area of frustum of cone?", answer: "CSA = π(R+r)l; Total SA = π(R+r)l + π(R² + r²), l = slant height." },
        { question: "Volume of frustum of cone?", answer: "Volume = (1/3)πh(R² + r² + Rr)."},
        { question: "Surface area of cylinder?", answer: "CSA = 2πrh; Total SA = 2πr(h+r)."},
        { question: "Volume of cylinder?", answer: "Volume = πr²h." },
        { question: "Surface area of cuboid?", answer: "SA = 2(lb + bh + hl), where l=length, b=breadth, h=height." },
        { question: "Volume of cuboid?", answer: "Volume = l×b×h." },
        { question: "Surface area of cube?", answer: "SA = 6a², where a=side length." },
        { question: "Volume of cube?", answer: "Volume = a³." },
        { question: "Slant height?", answer: "Use Pythagoras theorem: l = √(h² + r²) for cones and frustums." },
        { question: "Units of surface area?", answer: "Square units: cm², m², etc." },
        { question: "Units of volume?", answer: "Cubic units: cm³, m³, etc." },
        { question: "Application of mensuration?", answer: "Used in construction, packaging, design, and engineering calculations." },
        { question: "Tips for solving mensuration problems?", answer: "Draw diagram, write formula, substitute values carefully, convert units if needed." }
    ],
    test: [
        { question: "Volume of sphere radius r:", options: ["4πr²", "(4/3)πr³", "2πr²", "πr³"], correct: 1 },
        { question: "Surface area of hemisphere:", options: ["2πr²", "3πr²", "4πr²", "πr²"], correct: 1 },
        { question: "Volume of cone radius r, height h:", options: ["πr²h", "(1/3)πr²h", "2πr²h", "(1/2)πr²h"], correct: 1 },
        { question: "Total surface area of cone:", options: ["πr²", "πrl", "πr(l+r)", "2πr²"], correct: 2 },
        { question: "CSA of cylinder radius r, height h:", options: ["πr²h", "2πrh", "2πr(h+r)", "πr² + 2πrh"], correct: 1 },
        { question: "Volume of cylinder:", options: ["πr²h", "2πrh", "πr(h+r)", "2πr²h"], correct: 0 },
        { question: "Volume of cuboid l×b×h:", options: ["l+b+h", "l×b×h", "2(lb+bh+hl)", "l²+b²+h²"], correct: 1 },
        { question: "Surface area of cube side a:", options: ["a³", "6a²", "3a²", "2a²"], correct: 1 },
        { question: "Slant height of cone l:", options: ["√(r²+h²)", "r+h", "√(r²−h²)", "r−h"], correct: 0 },
        { question: "Units of volume:", options: ["cm²", "m²", "m³", "cm"], correct: 2 }
    ]
};

// Export for dynamic loading
window.class10Chapter2 = class10Chapter2;
