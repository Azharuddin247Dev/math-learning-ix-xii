// Class 9 - Chapter 4: Mensuration I
const class9Chapter4 = {
    reading: [
        { question: "What is mensuration?", answer: "Mensuration is the branch of mathematics that deals with the measurement of geometric figures, such as length, area, and volume." },
        { question: "What is the surface area of a sphere?", answer: "Surface area of a sphere = 4πr², where r is the radius." },
        { question: "What is the volume of a sphere?", answer: "Volume of a sphere = 4/3 πr³." },
        { question: "What is the curved surface area of a hemisphere?", answer: "Curved surface area of a hemisphere = 2πr²." },
        { question: "What is the total surface area of a hemisphere?", answer: "Total surface area = 3πr² (curved surface + base)." },
        { question: "What is the volume of a hemisphere?", answer: "Volume = 2/3 πr³." },
        { question: "What is the curved surface area of a cone?", answer: "Curved surface area = πrl, where l is the slant height." },
        { question: "What is the total surface area of a cone?", answer: "Total surface area = πr(l+r)."},
        { question: "What is the volume of a cone?", answer: "Volume = 1/3 πr²h, where h is the height." },
        { question: "What is the curved surface area of a frustum of a cone?", answer: "CSA = π(R+r)l, where R and r are radii of top and bottom circles, l = slant height." },
        { question: "What is the total surface area of a frustum?", answer: "TSA = π(R+r)l + π(R² + r²)."},
        { question: "What is the volume of a frustum of a cone?", answer: "Volume = 1/3 πh(R² + r² + Rr), where h is vertical height." },
        { question: "How to find slant height of cone or frustum?", answer: "l = √(r² + h²) for cone, l = √((R−r)² + h²) for frustum." },
        { question: "Relationship between curved surface area and total surface area:", answer: "Total surface area = curved surface area + area of bases." },
        { question: "Surface area of cylinder?", answer: "TSA = 2πr(h+r), CSA = 2πrh." },
        { question: "Volume of cylinder?", answer: "Volume = πr²h." },
        { question: "Practical examples of mensuration?", answer: "Painting walls, wrapping gifts, designing tanks, calculating volumes for liquids." },
        { question: "Effect of radius on surface area and volume?", answer: "Surface area ∝ r², Volume ∝ r³." },
        { question: "Effect of height on volume?", answer: "Volume is directly proportional to height." },
        { question: "Importance of mensuration?", answer: "It helps in practical measurements, construction, packaging, and engineering applications." }
    ],

    broad: [
        {
            question: "Find the surface area and volume of a sphere of radius 7 cm.",
            answer: "Surface area = 4πr² = 4 × (22/7) × 7² = 616 cm². Volume = (4/3)πr³ = (4/3) × (22/7) × 343 = 1437.33 cm³."
        },
        {
            question: "A cone has radius 3.5 cm and height 12 cm. Find its slant height, curved surface area, and volume.",
            answer: "Slant height = √(r²+h²) = √(3.5²+12²) = 12.5 cm. CSA = πrl = (22/7) × 3.5 × 12.5 = 137.5 cm². Volume = (1/3)πr²h = (1/3) × (22/7) × 12.25 × 12 = 154 cm³."
        },
        {
            question: "The radii of a frustum of a cone are 7 cm and 3.5 cm. Its height is 10 cm. Find its volume.",
            answer: "Volume = (1/3)πh(R²+r²+Rr) = (1/3) × (22/7) × 10 × (49+12.25+24.5) = (220/21) × 85.75 = 898.81 cm³."
        },
        {
            question: "Find the total surface area of a cylinder with radius 5 cm and height 10 cm.",
            answer: "TSA = 2πr(h+r) = 2 × (22/7) × 5 × (10+5) = (220/7) × 15 = 471.43 cm²."
        },
        {
            question: "Find the volume of a hemisphere of radius 6 cm.",
            answer: "Volume = (2/3)πr³ = (2/3) × (22/7) × 216 = 864 cm³."
        }
    ],

    broadTest: [
        {
            question: "The surface area of a sphere of radius 7 cm is:",
            options: ["616 cm²", "1437 cm³", "308 cm²", "154 cm²"],
            correct: 0
        },
        {
            question: "The slant height of a cone with r=3.5 cm and h=12 cm is:",
            options: ["12 cm", "12.5 cm", "13 cm", "11.5 cm"],
            correct: 1
        },
        {
            question: "The volume of a frustum with R=7 cm, r=3.5 cm, h=10 cm is approximately:",
            options: ["898.81 cm³", "850 cm³", "900 cm³", "870 cm³"],
            correct: 0
        },
        {
            question: "The total surface area of a cylinder with r=5 cm, h=10 cm is:",
            options: ["471.43 cm²", "471 cm²", "500 cm²", "314 cm²"],
            correct: 0
        },
        {
            question: "The volume of a hemisphere with r=6 cm is:",
            options: ["864 cm³", "900 cm³", "720 cm³", "850 cm³"],
            correct: 0
        }
    ],

    test: [
        { question: "Surface area of a sphere with r=7 cm:", options: ["154 cm²", "616 cm²", "308 cm²", "49 cm²"], correct: 1 },
        { question: "Volume of a sphere with r=3 cm:", options: ["36π cm³", "27π cm³", "12π cm³", "9π cm³"], correct: 1 },
        { question: "Curved surface area of a cone with r=5 cm, l=12 cm:", options: ["60π cm²", "85π cm²", "65π cm²", "100π cm²"], correct: 0 },
        { question: "Volume of a cone with r=3 cm, h=4 cm:", options: ["12π cm³", "36π cm³", "18π cm³", "9π cm³"], correct: 2 },
        { question: "Curved surface area of a frustum with R=7 cm, r=3 cm, l=5 cm:", options: ["50π cm²", "40π cm²", "45π cm²", "35π cm²"], correct: 0 },
        { question: "Volume of frustum with R=7 cm, r=3 cm, h=6 cm:", options: ["180π cm³", "200π cm³", "210π cm³", "190π cm³"], correct: 0 },
        { question: "Total surface area of hemisphere with r=7 cm:", options: ["154 cm²", "308 cm²", "196 cm²", "147 cm²"], correct: 1 },
        { question: "Volume of hemisphere with r=3 cm:", options: ["18π cm³", "12π cm³", "9π cm³", "6π cm³"], correct: 1 },
        { question: "Slant height of cone with r=6 cm, h=8 cm:", options: ["10 cm", "12 cm", "14 cm", "15 cm"], correct: 0 },
        { question: "Total surface area of cylinder with r=5 cm, h=10 cm:", options: ["150π cm²", "157π cm²", "200π cm²", "100π cm²"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class9Chapter4 = class9Chapter4;
