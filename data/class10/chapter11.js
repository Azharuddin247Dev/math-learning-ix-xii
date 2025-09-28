// Class 10 - Chapter 11: Mensuration II
const class10Chapter11 = {
    reading: [
        { question: "What is Mensuration?", answer: "Mensuration deals with measurement of areas, surface areas, and volumes of different geometrical figures." },
        { question: "Prism definition?", answer: "A prism is a solid figure with two parallel, congruent bases and rectangular lateral faces." },
        { question: "Volume of prism?", answer: "Volume = Base area × Height." },
        { question: "Surface area of prism?", answer: "Surface area = Lateral area + 2 × Base area." },
        { question: "Pyramid definition?", answer: "A pyramid is a solid with a polygonal base and triangular faces that meet at a common apex." },
        { question: "Volume of pyramid?", answer: "Volume = (1/3) × Base area × Height." },
        { question: "Surface area of pyramid?", answer: "Surface area = Base area + Sum of areas of triangular faces." },
        { question: "Cylinder definition?", answer: "A cylinder has two parallel circular bases connected by a curved surface." },
        { question: "Volume of cylinder?", answer: "Volume = π × r² × h." },
        { question: "Surface area of cylinder?", answer: "Surface area = 2πr(h + r)."},
        { question: "Cone definition?", answer: "A cone has a circular base and a vertex not in the plane of the base." },
        { question: "Volume of cone?", answer: "Volume = (1/3) × π × r² × h." },
        { question: "Surface area of cone?", answer: "Surface area = πr(l + r), where l = slant height." },
        { question: "Frustum of cone?", answer: "A frustum is obtained by cutting a cone by a plane parallel to its base." },
        { question: "Volume of frustum?", answer: "Volume = (1/3) × π × h × (R² + Rr + r²), where R and r are radii of the two bases." },
        { question: "Surface area of frustum?", answer: "Surface area = π(R + r)l + π(R² + r²), l = slant height." },
        { question: "Sphere definition?", answer: "A sphere is a solid where every point on the surface is equidistant from the center." },
        { question: "Volume of sphere?", answer: "Volume = (4/3)πr³." },
        { question: "Surface area of sphere?", answer: "Surface area = 4πr²." },
        { question: "Applications of Mensuration?", answer: "Engineering, architecture, construction, water tank volume, packaging, real-life problem solving." }
    ],
    test: [
        { question: "Volume of cylinder with r=7cm, h=10cm:", options: ["1540 cm³", "1538 cm³", "1500 cm³", "1600 cm³"], correct: 0 },
        { question: "Surface area of sphere with r=5cm:", options: ["314 cm²", "314.16 cm²", "300 cm²", "325 cm²"], correct: 1 },
        { question: "Volume of cone with r=3cm, h=4cm:", options: ["37.68 cm³", "36 cm³", "30 cm³", "40 cm³"], correct: 0 },
        { question: "Volume of pyramid with base area 20 cm² and height 15 cm:", options: ["100 cm³", "120 cm³", "90 cm³", "80 cm³"], correct: 0 },
        { question: "Surface area of cylinder with r=7cm, h=10cm:", options: ["748 cm²", "748.4 cm²", "700 cm²", "750 cm²"], correct: 1 },
        { question: "Volume of frustum with R=5cm, r=3cm, h=4cm:", options: ["150.8 cm³", "151 cm³", "140 cm³", "160 cm³"], correct: 0 },
        { question: "Surface area of cone with r=3cm, l=5cm:", options: ["75.36 cm²", "75 cm²", "70 cm²", "80 cm²"], correct: 0 },
        { question: "Volume of sphere with r=6cm:", options: ["904.32 cm³", "900 cm³", "950 cm³", "912 cm³"], correct: 0 },
        { question: "Total surface area of cube with side 4cm:", options: ["96 cm²", "64 cm²", "100 cm²", "80 cm²"], correct: 0 },
        { question: "Volume of prism with base area 30 cm² and height 10 cm:", options: ["300 cm³", "200 cm³", "310 cm³", "320 cm³"], correct: 0 }
    ],
    broad: [
        { topic: "Prism", content: "Volume = Base area × Height; Surface area = Lateral area + 2 × Base area." },
        { topic: "Pyramid", content: "Volume = 1/3 × Base area × Height; Surface area = Base area + Sum of triangular faces." },
        { topic: "Cylinder", content: "Volume = π r² h; Surface area = 2πr(h + r)." },
        { topic: "Cone", content: "Volume = 1/3 π r² h; Surface area = π r (l + r), l = slant height." },
        { topic: "Frustum", content: "Volume = 1/3 π h (R² + Rr + r²); Surface area = π(R + r)l + π(R² + r²)." },
        { topic: "Sphere", content: "Volume = 4/3 π r³; Surface area = 4π r²." },
        { topic: "Cube", content: "Volume = a³; Surface area = 6a²." },
        { topic: "Applications", content: "Useful in engineering, architecture, construction, packaging, water tanks, and real-life measurements." }
    ],
    broadTest: [
        { question: "Volume of prism formula:", options: ["Base area × Height", "Base area + Height", "2 × Base area", "Base area / Height"], correct: 0 },
        { question: "Surface area of pyramid:", options: ["Base area + Sum of triangular faces", "Base × Height", "Sum of sides", "4 × Base area"], correct: 0 },
        { question: "Volume of cylinder:", options: ["π r² h", "2πr(h+r)", "π r h", "π r²"], correct: 0 },
        { question: "Volume of cone:", options: ["1/3 π r² h", "π r² h", "π r² l", "1/2 π r² h"], correct: 0 },
        { question: "Surface area of frustum:", options: ["π(R + r)l + π(R² + r²)", "π r² h", "2πr(h+r)", "Base area × Height"], correct: 0 },
        { question: "Volume of sphere:", options: ["4/3 π r³", "π r² h", "π r³", "2π r³"], correct: 0 },
        { question: "Surface area of sphere:", options: ["4π r²", "2π r²", "π r²", "6π r²"], correct: 0 },
        { question: "Cube surface area:", options: ["6a²", "a³", "4a²", "8a²"], correct: 0 },
        { question: "Applications of Mensuration include:", options: ["Engineering", "Architecture", "Packaging", "All of the above"], correct: 3 },
        { question: "Slant height in cone is denoted by:", options: ["l", "h", "r", "R"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class10Chapter11 = class10Chapter11;
