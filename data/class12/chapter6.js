// Class 12 - Chapter 6: Applications of Derivatives
const class12Chapter6 = {
    reading: [
        { question: "Rate of change?", answer: "Derivative represents rate at which a quantity changes with respect to another." },
        { question: "Slope of tangent?", answer: "Derivative f'(x) at x=a gives slope of tangent to curve y=f(x) at point (a, f(a))." },
        { question: "Slope of normal?", answer: "Slope of normal = −1 / slope of tangent = −1 / f'(x) at that point." },
        { question: "Monotonicity?", answer: "f'(x)>0 ⇒ f increasing, f'(x)<0 ⇒ f decreasing." },
        { question: "Maxima and minima?", answer: "Points where function attains local or global maximum or minimum value." },
        { question: "Critical points?", answer: "Points where f'(x)=0 or f'(x) does not exist." },
        { question: "Second derivative test?", answer: "f''(x)>0 ⇒ minimum, f''(x)<0 ⇒ maximum at critical point." },
        { question: "Concavity?", answer: "f''(x)>0 ⇒ concave upward, f''(x)<0 ⇒ concave downward." },
        { question: "Points of inflection?", answer: "Point where concavity changes; f''(x)=0 or undefined." },
        { question: "Applications in physics?", answer: "Velocity = derivative of position, acceleration = derivative of velocity." },
        { question: "Applications in economics?", answer: "Maximize profit, minimize cost using derivative." },
        { question: "Tangents and normals to curves?", answer: "Use derivative to find slope, then equation using y−y₁=m(x−x₁)."},
        { question: "Tips?", answer: "Find derivative first, then apply tests for extrema or slope."},
        { question: "Common mistakes?", answer: "Ignoring sign of derivative, not checking second derivative, missing domain restrictions."},
        { question: "Derivative of polynomial?", answer: "Power rule: d/dx[x^n] = nx^(n−1)."},
        { question: "Derivative of trigonometric functions?", answer: "d/dx[sin x]=cos x, d/dx[cos x]=−sin x, d/dx[tan x]=sec² x."},
        { question: "Derivative of exponential/log functions?", answer: "d/dx[e^x]=e^x, d/dx[ln x]=1/x."},
        { question: "Higher order derivatives?", answer: "Use successive differentiation for f'', f''', etc."},
        { question: "Equation of tangent example?", answer: "y−y₁=f'(x₁)(x−x₁)."},
        { question: "Equation of normal example?", answer: "y−y₁=−1/f'(x₁)(x−x₁)."}
    ],
    test: [
        { question: "Slope of tangent to y=x² at x=2?", options: ["4", "2", "1", "8"], correct: 0 },
        { question: "Slope of normal to y=x² at x=1?", options: ["−1/2", "2", "1", "−1"], correct: 0 },
        { question: "f(x)=x³, derivative f'(x)?", options: ["3x²", "3x", "x²", "x³"], correct: 0 },
        { question: "f'(x)>0 indicates?", options: ["Function increasing", "Function decreasing", "Maximum", "Minimum"], correct: 0 },
        { question: "f''(x)<0 at critical point indicates?", options: ["Maximum", "Minimum", "Point of inflection", "Increasing"], correct: 0 },
        { question: "Point of inflection occurs when?", options: ["f''(x)=0 or undefined", "f'(x)=0", "f(x)=0", "None"], correct: 0 },
        { question: "Derivative of sin x?", options: ["cos x", "−cos x", "tan x", "−sin x"], correct: 0 },
        { question: "Derivative of e^x?", options: ["e^x", "x e^x", "ln x", "1/x"], correct: 0 },
        { question: "Velocity is derivative of?", options: ["Position", "Acceleration", "Displacement", "Force"], correct: 0 },
        { question: "Acceleration is derivative of?", options: ["Velocity", "Position", "Force", "Momentum"], correct: 0 }
    ],
    broad: [
        { question: "Rate of change?", answer: "Derivative represents rate at which a quantity changes with respect to another." },
        { question: "Slope of tangent?", answer: "Derivative f'(x) at x=a gives slope of tangent to curve y=f(x) at point (a, f(a))." },
        { question: "Slope of normal?", answer: "Slope of normal = −1 / slope of tangent = −1 / f'(x) at that point." },
        { question: "Monotonicity?", answer: "f'(x)>0 ⇒ f increasing, f'(x)<0 ⇒ f decreasing." },
        { question: "Maxima and minima?", answer: "Points where function attains local or global maximum or minimum value." },
        { question: "Critical points?", answer: "Points where f'(x)=0 or f'(x) does not exist." },
        { question: "Second derivative test?", answer: "f''(x)>0 ⇒ minimum, f''(x)<0 ⇒ maximum at critical point." },
        { question: "Concavity?", answer: "f''(x)>0 ⇒ concave upward, f''(x)<0 ⇒ concave downward." },
        { question: "Points of inflection?", answer: "Point where concavity changes; f''(x)=0 or undefined." },
        { question: "Applications in physics?", answer: "Velocity = derivative of position, acceleration = derivative of velocity." },
        { question: "Applications in economics?", answer: "Maximize profit, minimize cost using derivative." },
        { question: "Tangents and normals to curves?", answer: "Use derivative to find slope, then equation using y−y₁=m(x−x₁)." },
        { question: "Tips?", answer: "Find derivative first, then apply tests for extrema or slope." },
        { question: "Common mistakes?", answer: "Ignoring sign of derivative, not checking second derivative, missing domain restrictions." },
        { question: "Derivative of polynomial?", answer: "Power rule: d/dx[x^n] = nx^(n−1)." },
        { question: "Derivative of trigonometric functions?", answer: "d/dx[sin x]=cos x, d/dx[cos x]=−sin x, d/dx[tan x]=sec² x." },
        { question: "Derivative of exponential/log functions?", answer: "d/dx[e^x]=e^x, d/dx[ln x]=1/x." },
        { question: "Higher order derivatives?", answer: "Use successive differentiation for f'', f''', etc." },
        { question: "Equation of tangent example?", answer: "y−y₁=f'(x₁)(x−x₁)." },
        { question: "Equation of normal example?", answer: "y−y₁=−1/f'(x₁)(x−x₁)." }
    ],
    broadTest: [
        { question: "Slope of tangent to y=x² at x=2?", options: ["4", "2", "1", "8"], correct: 0 },
        { question: "Slope of normal to y=x² at x=1?", options: ["−1/2", "2", "1", "−1"], correct: 0 },
        { question: "f(x)=x³, derivative f'(x)?", options: ["3x²", "3x", "x²", "x³"], correct: 0 },
        { question: "f'(x)>0 indicates?", options: ["Function increasing", "Function decreasing", "Maximum", "Minimum"], correct: 0 },
        { question: "f''(x)<0 at critical point indicates?", options: ["Maximum", "Minimum", "Point of inflection", "Increasing"], correct: 0 },
        { question: "Point of inflection occurs when?", options: ["f''(x)=0 or undefined", "f'(x)=0", "f(x)=0", "None"], correct: 0 },
        { question: "Derivative of sin x?", options: ["cos x", "−cos x", "tan x", "−sin x"], correct: 0 },
        { question: "Derivative of e^x?", options: ["e^x", "x e^x", "ln x", "1/x"], correct: 0 },
        { question: "Velocity is derivative of?", options: ["Position", "Acceleration", "Displacement", "Force"], correct: 0 },
        { question: "Acceleration is derivative of?", options: ["Velocity", "Position", "Force", "Momentum"], correct: 0 }
    ]
};

// Export for dynamic loading
window.class12Chapter6 = class12Chapter6;
