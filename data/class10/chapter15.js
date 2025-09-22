// Class 10 - Chapter 15: Commercial Mathematics
const class10Chapter15 = {
    reading: [
        { question: "What is Commercial Mathematics?", answer: "Commercial Mathematics deals with calculations related to commerce such as profit, loss, discount, interest, GST, etc." },
        { question: "Profit definition?", answer: "Profit is the gain when selling price (SP) is more than cost price (CP). Profit = SP − CP." },
        { question: "Loss definition?", answer: "Loss is the deficit when selling price (SP) is less than cost price (CP). Loss = CP − SP." },
        { question: "Profit percentage?", answer: "Profit% = (Profit / CP) × 100." },
        { question: "Loss percentage?", answer: "Loss% = (Loss / CP) × 100." },
        { question: "Discount definition?", answer: "Reduction in marked price (MP) to arrive at selling price (SP). SP = MP − Discount." },
        { question: "Discount percentage?", answer: "Discount% = (Discount / MP) × 100." },
        { question: "Simple Interest (SI)?", answer: "SI = (P × R × T)/100, where P = principal, R = rate% per annum, T = time in years." },
        { question: "Compound Interest (CI)?", answer: "CI = P(1 + R/100)^T − P." },
        { question: "Profit example?", answer: "CP = 500, SP = 600 → Profit = 100, Profit% = 100/500×100 = 20%." },
        { question: "Loss example?", answer: "CP = 800, SP = 700 → Loss = 100, Loss% = 100/800×100 = 12.5%." },
        { question: "Discount example?", answer: "MP = 1000, Discount = 10% → SP = 1000 − 100 = 900." },
        { question: "GST application?", answer: "SP including GST = SP + (GST% of SP)." },
        { question: "Mark-up?", answer: "Difference between cost price and marked price. Mark-up = MP − CP." },
        { question: "Trade discount?", answer: "Discount offered by wholesaler or supplier to retailer; differs from cash discount." },
        { question: "Profit and loss tips?", answer: "Always compare SP and CP correctly, identify gain/loss, convert to percentage if needed." },
        { question: "SI vs CI?", answer: "SI is calculated on initial principal; CI is calculated on principal + accumulated interest." },
        { question: "Applications in daily life?", answer: "Shopping, banking, financial calculations, taxation, business planning." },
        { question: "Check calculations?", answer: "Verify using formula, re-calculate percentages, confirm SP, CP, profit, loss, and discount." },
        { question: "Conversions?", answer: "Convert fractions, percentages, decimals properly for interest or discount problems." }
    ],
    test: [
        { question: "CP = 500, SP = 600. Profit% =", options: ["20%", "10%", "15%", "25%"], correct: 0 },
        { question: "CP = 800, SP = 700. Loss% =", options: ["12.5%", "10%", "15%", "20%"], correct: 0 },
        { question: "MP = 1000, Discount 10%. SP =", options: ["900", "950", "1000", "850"], correct: 0 },
        { question: "SI on 5000 at 5% p.a. for 2 years:", options: ["500", "525", "550", "600"], correct: 1 },
        { question: "CI on 2000 at 10% p.a. for 2 years:", options: ["420", "440", "460", "400"], correct: 0 },
        { question: "SP including 12% GST on 500:", options: ["560", "550", "540", "600"], correct: 0 },
        { question: "Mark-up on CP 400, MP 500:", options: ["100", "90", "120", "80"], correct: 0 },
        { question: "Profit if CP 750, SP 825:", options: ["75", "80", "70", "85"], correct: 0 },
        { question: "Loss if CP 600, SP 550:", options: ["50", "40", "60", "45"], correct: 0 },
        { question: "Discount% if MP 1200, SP 1080:", options: ["10%", "15%", "12%", "8%"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class10Chapter15 = class10Chapter15;
