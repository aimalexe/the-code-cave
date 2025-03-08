# Machine Learning Foundations: Calculus

If you're diving into machine learning but feel stuck on calculus, the LinkedIn Learning course [**Machine Learning Foundations: Calculus**](https://www.linkedin.com/learning/machine-learning-foundations-calculus/) by [**Terezija Semenski**](https://www.linkedin.com/learning/instructors/terezija-semenski) is a perfect place to start. Terezija simplifies functions, derivatives, integrals, and multivariate calculus—key skills you’ll need to confidently tackle ML algorithms. This beginner-friendly course helps you build the math foundations you need, without overwhelming you.

### Contents
- [Machine Learning Foundations: Calculus](#machine-learning-foundations-calculus)
    - [Contents](#contents)
  - [1. Introduction to Calculus](#1-introduction-to-calculus)
    - [1.1 Defining calculus](#11-defining-calculus)
    - [1.2 Applications of calculus in ML](#12-applications-of-calculus-in-ml)
    - [1.3 Functions](#13-functions)
      - [Single-variable functions:](#single-variable-functions)
      - [Plotting linear functions:](#plotting-linear-functions)
      - [Calculating slope (**m**) from two points:](#calculating-slope-m-from-two-points)
      - [Non-linear functions:](#non-linear-functions)
    - [1.4 Limits](#14-limits)
      - [Limit notation:](#limit-notation)
      - [Calculating a limit (simple example):](#calculating-a-limit-simple-example)
      - [Tricky Example:](#tricky-example)
      - [One-sided limits:](#one-sided-limits)
      - [Two-sided limit:](#two-sided-limit)
      - [Calculating limits in Python:](#calculating-limits-in-python)
  - [2. Derivatives and Differentiation](#2-derivatives-and-differentiation)
    - [2.1 Introduction to Derivatives](#21-introduction-to-derivatives)
      - [Formula for Derivative (at a point $x = a$):](#formula-for-derivative-at-a-point-x--a)
      - [Applications of Derivatives in Machine Learning:](#applications-of-derivatives-in-machine-learning)
      - [Higher-order derivatives:](#higher-order-derivatives)
    - [2.2 The derivative of a constant and the power rule](#22-the-derivative-of-a-constant-and-the-power-rule)
      - [1. Derivative of a Constant:](#1-derivative-of-a-constant)
      - [2. Power Rule:](#2-power-rule)
    - [2.3 The Constant Multiple Rule](#23-the-constant-multiple-rule)
      - [Constant Multiple Rule (formula):](#constant-multiple-rule-formula)
      - [Steps to use Constant Multiple Rule:](#steps-to-use-constant-multiple-rule)
      - [Examples:](#examples)
    - [2.4 The Sum Rule](#24-the-sum-rule)
      - [Sum Rule (Formula):](#sum-rule-formula)
      - [Example 1:](#example-1)
      - [Example 2 (Polynomial):](#example-2-polynomial)
      - [Calculating derivatives in Python:](#calculating-derivatives-in-python)
    - [2.5 The Product Rule](#25-the-product-rule)
      - [Product Rule (formula):](#product-rule-formula)
      - [Example 1:](#example-1-1)
      - [Example 2:](#example-2)
    - [2.6 The Quotient Rule](#26-the-quotient-rule)
      - [Quotient Rule (formula):](#quotient-rule-formula)
      - [Steps to use Quotient Rule:](#steps-to-use-quotient-rule)
      - [Example 1:](#example-1-2)
      - [Example 2:](#example-2-1)
    - [2.7 The Quotient Rule](#27-the-quotient-rule)
      - [Quotient Rule (formula):](#quotient-rule-formula-1)
      - [Steps to apply Quotient Rule:](#steps-to-apply-quotient-rule)
      - [Example 1:](#example-1-3)
      - [Example 2:](#example-2-2)
    - [2.8 The Power Rule on a Function Chain (Chain Rule)](#28-the-power-rule-on-a-function-chain-chain-rule)
      - [Formula (Chain Rule with Power Rule):](#formula-chain-rule-with-power-rule)
      - [Steps to use Chain Rule (with Power Rule):](#steps-to-use-chain-rule-with-power-rule)
      - [Example:](#example)
  - [3. Multivariate Calculus](#3-multivariate-calculus)
    - [3.1 Partial Derivatives](#31-partial-derivatives)
      - [Example:](#example-1)
      - [Key points:](#key-points)
    - [3.2 Calculating Partial Derivatives](#32-calculating-partial-derivatives)
      - [Example 1: Two-variable function](#example-1-two-variable-function)
      - [Example 2: Three-variable function](#example-2-three-variable-function)
      - [Calculating Partial Derivatives in Python (SymPy)](#calculating-partial-derivatives-in-python-sympy)
    - [3.3 The Chain Rule](#33-the-chain-rule)
      - [Chain Rule (with power functions):](#chain-rule-with-power-functions)
      - [Steps to apply the Chain Rule:](#steps-to-apply-the-chain-rule)
      - [Example:](#example-2)
    - [3.4 The Chain Rule for Partial Derivatives](#34-the-chain-rule-for-partial-derivatives)
      - [When to use it:](#when-to-use-it)
      - [Steps for Partial Chain Rule:](#steps-for-partial-chain-rule)
      - [Example:](#example-3)
      - [Chain rule formulas:](#chain-rule-formulas)
      - [Calculate separately and simplify:](#calculate-separately-and-simplify)
      - [Importance in Machine Learning:](#importance-in-machine-learning)
  - [4. Machine Learning Gradients](#4-machine-learning-gradients)
    - [4.1 Single-point regression gradient](#41-single-point-regression-gradient)
      - [Scalar field:](#scalar-field)
      - [Gradient (grad):](#gradient-grad)
      - [Gradient formula for a two-variable function:](#gradient-formula-for-a-two-variable-function)
      - [Directional Gradient (Derivative):](#directional-gradient-derivative)
      - [Maximal Directional Derivative:](#maximal-directional-derivative)
      - [Example:](#example-4)
    - [4.2 Partial derivatives of quadratic cost](#42-partial-derivatives-of-quadratic-cost)
      - [Quadratic Cost Function (MSE) formula:](#quadratic-cost-function-mse-formula)
      - [Goal:](#goal)
      - [Optimization Method:](#optimization-method)
      - [Calculating Partial Derivatives:](#calculating-partial-derivatives)
    - [4.3 Connecting Partial Derivatives with Backpropagation](#43-connecting-partial-derivatives-with-backpropagation)
      - [How Backpropagation Works:](#how-backpropagation-works)
      - [Major Steps in Backpropagation:](#major-steps-in-backpropagation)
      - [Key points:](#key-points-1)
    - [4.4 Finding Minima and Maxima](#44-finding-minima-and-maxima)
      - [Steps for Finding Extrema:](#steps-for-finding-extrema)
      - [Example:](#example-5)
  - [5. Introduction to Integral Calculus](#5-introduction-to-integral-calculus)
    - [5.1 Defining Integral Calculus](#51-defining-integral-calculus)
      - [Integral (Informal Definition):](#integral-informal-definition)
      - [Integral notation:](#integral-notation)
      - [Visualizing Integrals:](#visualizing-integrals)
      - [Relationship with Derivatives:](#relationship-with-derivatives)
      - [Two approaches for calculating area under a curve:](#two-approaches-for-calculating-area-under-a-curve)
    - [5.2 Integration Rules](#52-integration-rules)
      - [Integral Notation:](#integral-notation-1)
      - [Key Integration Rules:](#key-integration-rules)
        - [1. Power Rule:](#1-power-rule)
        - [2. Constant Multiple Rule:](#2-constant-multiple-rule)
        - [3. Sum Rule:](#3-sum-rule)
    - [5.3 Indefinite integrals](#53-indefinite-integrals)
      - [Example:](#example-6)
      - [Why the constant $C$?](#why-the-constant-c)
      - [Checking your answer:](#checking-your-answer)
      - [Key takeaway:](#key-takeaway)
    - [5.4 Definite Integrals](#54-definite-integrals)
      - [Fundamental Theorem of Calculus:](#fundamental-theorem-of-calculus)
      - [Definite vs. Indefinite Integrals:](#definite-vs-indefinite-integrals)
      - [Example:](#example-7)
        - [Step 1: Integrate (without constant $C$):](#step-1-integrate-without-constant-c)
        - [Step 2: Evaluate from lower limit $1$ to upper limit $4$:](#step-2-evaluate-from-lower-limit-1-to-upper-limit-4)
  - [6. Conclusion](#6-conclusion)
    - [Next Steps](#next-steps)


## 1. Introduction to Calculus
### 1.1 Defining calculus

Calculus studies how quantities change, making it essential for machine learning. It has two main branches:

**Differential calculus** deals with the **rate of change** (derivative) of functions. It helps identify whether a function increases or decreases and is key in solving optimization problems by finding minimum or maximum values.

- **Differentiation:** Breaking down functions into smaller parts to track changes.
- **Derivative:** Measures the instantaneous rate of change of a function.

**Integral calculus** finds the **area under curves** (integrals), summing up tiny segments to calculate totals. It's useful for determining areas, volumes, and central points.

- **Integration:** Reverse of differentiation, summing infinitesimally small pieces.
- **Integral (anti-derivative):** Represents accumulated areas or quantities.

In machine learning, calculus simplifies optimization and modeling tasks, especially when combined with Python tools, allowing practical application without extensive manual calculations.

### 1.2 Applications of calculus in ML

Calculus is crucial for machine learning, particularly for optimization and modeling:

- **Optimization and Gradient Descent:**  
  Derivatives help decide whether to increase or decrease model parameters (**weights**) to minimize error or maximize accuracy. This method is known as **gradient descent**.

- **Linear Approximation:**  
  Derivatives can approximate complex, non-linear functions as linear, simplifying adjustments to model parameters.

- **Neural Networks:**  
  In neural networks, each node multiplies input by weights. Calculus (through derivatives) optimizes these weights to improve performance.

- **Bayesian Methods:**  
  Integrals calculate probabilities in Bayesian methods, specifically using **probability density functions**.

Other calculus-driven ML applications include:
- Eigenvalues and eigenvectors computation.
- Backpropagation algorithms.

### 1.3 Functions

Calculus studies relationships and change, and at its heart are **functions**.

- A **function** is a rule connecting inputs (**domain**) to exactly one output (**range**).

#### Single-variable functions:
- Functions with **one input** and **one output**.
- Example: **Linear function**  
  $$
  f(x) = mx + b
  $$

- **m (slope or gradient)**: Determines steepness and direction (positive slope: upward, negative slope: downward).
- **b (y-intercept)**: The point where the line crosses the y-axis.

#### Plotting linear functions:
1. Choose input values (**x**), calculate outputs (**y**), and form coordinate pairs.
2. Plot these pairs on a grid.
3. Draw a straight line through points.

#### Calculating slope (**m**) from two points:
$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

#### Non-linear functions:
- Represented graphically as curves.
- Gradient (**slope**) changes at different points.
- Leads into **limits** and **derivatives** for further analysis.

### 1.4 Limits

Limits are fundamental to calculus, forming the foundation of both derivatives and integrals. They help determine the value a function approaches, even if the function itself is undefined at a certain point.

- **Limit (informal definition):**  
  The value a function $f(x)$ approaches as $x$ gets infinitely close to a point $a$.

#### Limit notation:
$$
\lim_{x \to a} f(x) = L
$$

This means that as $x$ approaches $a$, $f(x)$ approaches $L$.

#### Calculating a limit (simple example):
For $f(x) = x + 2$, as $x \to 3$:
$$
\lim_{x \to 3}(x + 2) = 5
$$

#### Tricky Example:
For $f(x) = \frac{x^2}{x - 1}$, as $x \to 1$:

- Plugging in $x = 1$ directly gives $\frac{0}{0}$, which is undefined.
- Limits differ depending on direction (from left or right):

  - **Right-hand limit ($x \to 1^+$)**: approaches $+\infty$
  - **Left-hand limit ($x \to 1^-$)**: approaches $-\infty$

#### One-sided limits:
- **Right-hand limit** (approaching from the right):
  $$
  \lim_{x \to a^+} f(x) = L
  $$

- **Left-hand limit** (approaching from the left):
  $$
  \lim_{x \to a^-} f(x) = L
  $$

#### Two-sided limit:
Exists only if **both one-sided limits are equal**.

#### Calculating limits in Python:
Use the **SymPy** module:
```python
from sympy import limit, Symbol

x = Symbol('x')
limit(x**2/(x-1), x, 1)
```

Limits are the essential bridge to understanding derivatives and integrals in calculus.

## 2. Derivatives and Differentiation
### 2.1 Introduction to Derivatives

Derivatives measure the slope (rate of change) of a function at a specific point.

- **Tangent Line:**  
  A line touching a curve exactly at one point, indicating the slope at that point.

- **Derivative (informal definition):**  
  The slope of the tangent line at a particular point on a function.

#### Formula for Derivative (at a point $x = a$):
$$
f'(a) = \lim_{h \to 0}\frac{f(a+h)-f(a)}{h}
$$

**Example:** For $f(x) = x^2 + 1$ at $x = 2$:
- Compute using limit definition, you get $f'(2) = 4$.

#### Applications of Derivatives in Machine Learning:
- **Gradient Descent:** Optimization method adjusting parameters to minimize or maximize an objective.
- **Linear and Logistic Regression**
- **Neural Networks:** Essential for training algorithms to recognize patterns (e.g., images, audio).

#### Higher-order derivatives:
- First derivative ($f'$): Slope of the original function.
- Second derivative ($f''$): Indicates how the slope itself changes.
- Third derivative and beyond: Further changes in the rate.

Derivatives form the basis of optimization and modeling in machine learning.

### 2.2 The derivative of a constant and the power rule

Derivatives become easier to calculate using some basic rules:

#### 1. Derivative of a Constant:
- The derivative of any constant is **zero**.
$$
f(x) = c \quad \Rightarrow \quad f'(x) = 0
$$

**Example:**  
If $f(x) = 5$, then:
$$
f'(x) = 0
$$

#### 2. Power Rule:
- For functions of the form $f(x) = x^n$, the derivative is:
$$
f'(x) = n \cdot x^{(n-1)}
$$

**Steps to use Power Rule:**
1. Move the exponent (**n**) in front of the coefficient.
2. Reduce the exponent by one.
3. Multiply the result.

**Examples:**

- $f(x) = x^4$:
$$
f'(x) = 4 \cdot x^{3} = 4x^3
$$

- $f(x) = x^7$:
$$
f'(x) = 7 \cdot x^{6} = 7x^6
$$

- $f(x) = x$ (where exponent is 1):
$$
f'(x) = 1 \cdot x^{0} = 1
$$

These rules simplify derivative calculations significantly in practice.

### 2.3 The Constant Multiple Rule

Use this rule when differentiating a function multiplied by a constant.

#### Constant Multiple Rule (formula):

If $c$ is a constant:
$$
\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)
$$

#### Steps to use Constant Multiple Rule:

- Take the constant outside the differentiation.
- Differentiate the remaining function normally (often using the power rule).

#### Examples:

- **Example 1:** $f(x) = 5x^2$
$$
f'(x) = 5 \cdot \frac{d}{dx}[x^2] = 5 \cdot 2x = 10x
$$

- **Example 2:** $f(x) = 12x$
$$
f'(x) = 12 \cdot \frac{d}{dx}[x] = 12 \cdot 1 = 12
$$

This rule simplifies differentiating functions that include constants.

### 2.4 The Sum Rule

The derivative of a sum (or difference) of functions is simply the sum (or difference) of their derivatives.

#### Sum Rule (Formula):

$$
\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)
$$

This applies equally to subtraction.

#### Example 1:
- $f(x) = 5x^2$, $g(x) = 4x$
- $f(x) + g(x) = 5x^2 + 4x$

Calculate derivatives separately:
- $f'(x) = 10x$
- $g'(x) = 4$

Combine results:
- $(f+g)'(x) = 10x + 4$

#### Example 2 (Polynomial):
- $f(x) = 2x^5 - 4x^4 + 2x^3 - 5x^2 + 3x$

Differentiate term-by-term:
- $f'(x) = 10x^4 - 16x^3 + 6x^2 - 10x + 3$

> **Note:** The derivative of a polynomial of degree $n$ is a polynomial of degree $n-1$.


#### Calculating derivatives in Python:

**Using SymPy:**
```python
from sympy import symbols, diff

x = symbols('x')
f = 2*x**5 - 4*x**4 + 2*x**3 - 5*x**2 + 3*x
f_prime = diff(f, x)
print(f_prime)
```

**Using SciPy (at a specific point):**
```python
from scipy.misc import derivative

def f(x):
    return 2*x**5 - 4*x**4 + 2*x**3 - 5*x**2 + 3*x

derivative_at_1 = derivative(f, 1.0)
print(derivative_at_1)
```

Both methods simplify complex derivative calculations effectively.

### 2.5 The Product Rule

Use the product rule when calculating the derivative of two functions multiplied together.

#### Product Rule (formula):

$$
\frac{d}{dx}[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x)
$$

> **Important:** Derivative of a product is **not** simply the product of the derivatives.

#### Example 1:

- $f(x) = x^2 - 9$, $g(x) = x + 1$

Compute derivatives separately:
- $f'(x) = 2x$
- $g'(x) = 1$

Apply product rule:
$$
(2x) \cdot (x + 1) + (x^2 - 9) \cdot (1)
$$

Simplify:
- Final derivative: $3x^2 + 2x - 9$

#### Example 2:

- $f(x) = x^4 - 2x^2 + 1$, $g(x) = 5x + 5$

Compute derivatives separately:
- $f'(x) = 4x^3 - 4x$
- $g'(x) = 5$

Apply product rule:
$$
(4x^3 - 4x)(5x + 5) + (x^4 - 2x^2 + 1)(5)
$$

Simplify:
- Final derivative: $25x^4 + 20x^3 - 35x^2 - 30x + 5$

This rule is crucial for differentiating complex functions involving products.

### 2.6 The Quotient Rule

Use this rule to find the derivative when dividing one function by another.

#### Quotient Rule (formula):

If $y = \frac{f(x)}{g(x)}$, then:
$$
y' = \frac{f'(x)\cdot g(x) - f(x)\cdot g'(x)}{[g(x)]^2}
$$

#### Steps to use Quotient Rule:
1. Differentiate the **numerator** $f(x)$ and the **denominator** $g(x)$ separately.
2. Plug these derivatives into the formula above.
3. Simplify the result.

#### Example 1:

Given:
$$
y = \frac{3x + 1}{5x + 2}
$$

Derivatives:
- Numerator ($3x+1$): derivative = $3$
- Denominator ($5x+2$): derivative = $5$

Apply the rule:
$$
y' = \frac{(3)(5x + 2) - (3x + 1)(5)}{(5x + 2)^2}
$$

Simplify:
- Final result:  
$$
y' = \frac{1}{(5x + 2)^2}
$$

#### Example 2:

Given:
$$
y = \frac{5x^3}{x^2 + 4}
$$

Derivatives:
- Numerator ($5x^3$): derivative = $15x^2$
- Denominator ($x^2+4$): derivative = $2x$

Apply the rule:
$$
y' = \frac{(15x^2)(x^2+4) - (5x^3)(2x)}{(x^2+4)^2}
$$

Simplify further to get the final derivative.

This rule simplifies differentiating functions involving quotients.

### 2.7 The Quotient Rule

Use the **quotient rule** when differentiating a function expressed as the division (quotient) of two functions.

#### Quotient Rule (formula):

If you have two functions, $f(x)$ (numerator) and $g(x)$ (denominator), the derivative is:

$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}
$$

#### Steps to apply Quotient Rule:
1. Compute derivatives of numerator and denominator separately.
2. Substitute these derivatives into the quotient rule formula.
3. Simplify the expression.

#### Example 1:
Given:
$$
f(x) = 3x + 1,\quad g(x) = 5x + 2
$$

Derivative:
$$
\frac{(3)(5x + 2) - (3x + 1)(5)}{(5x + 2)^2} = \frac{1}{(5x + 2)^2}
$$

#### Example 2:
Given:
$$
f(x) = 5x^3,\quad g(x) = x^2 + 4
$$

Derivative:
$$
\frac{(15x^2)(x^2+4)-(5x^3)(2x)}{(x^2+4)^2}
$$

This rule makes differentiation of rational functions manageable.

### 2.8 The Power Rule on a Function Chain (Chain Rule)

The **chain rule** helps differentiate functions composed of an inner and outer function (nested functions).

#### Formula (Chain Rule with Power Rule):
$$
\frac{d}{dx}[f(x)]^n = n \cdot [f(x)]^{n-1} \cdot f'(x)
$$

#### Steps to use Chain Rule (with Power Rule):
1. Identify the **inner function** $f(x)$.
2. Apply the power rule on the outer function.
3. Multiply by the derivative of the inner function.

#### Example:

Given:
- $y = (4x - 1)^3$

Identify inner function: $4x - 1$.

Derivative:
- Outer function: bring down exponent $3$, reduce exponent by $1$.
- Inner function derivative: derivative of $4x - 1$ is $4$.

Apply chain rule:
$$
y' = 3 \cdot (4x - 1)^2 \cdot 4 = 12(4x - 1)^2
$$

The chain rule helps easily handle derivatives for nested or composite functions, which frequently appear in machine learning problems.

## 3. Multivariate Calculus
### 3.1 Partial Derivatives

When dealing with functions having multiple variables (multivariable functions), we use **partial derivatives**.

- **Partial Derivative:** The derivative of a function with respect to one variable, treating all other variables as constants.

#### Example:

Given the function with two variables:
$$
f(x,y) = 5x^2y + 4xy
$$

**Partial derivative with respect to $x$** ($y$ is treated as constant):

$$
\frac{\partial f}{\partial x} = 10xy + 4y
$$

**Partial derivative with respect to $y$** ($x$ is treated as constant):
$$
\frac{\partial f}{\partial y} = 5x^2 + 4x
$$

#### Key points:

- **Partial derivatives** are essential when handling functions with multiple inputs (common in ML).
- Treat all other variables as constants except the one you're differentiating with respect to.
- Commonly used in gradient-based optimization methods in ML (e.g., gradient descent).

### 3.2 Calculating Partial Derivatives

Partial derivatives are calculated by differentiating a multivariable function with respect to one variable at a time, treating all other variables as constants.

#### Example 1: Two-variable function
Given:
$$
f(x, y) = 2x^2y^3 + 3y^2 + 4xy
$$
Find the **partial derivatives** and evaluate at $(x, y) = (1,2)$.

- **Partial derivative with respect to $x$**:
$$
\frac{\partial f}{\partial x} = 4xy^3 + 4y
$$
Evaluating at $(1,2)$:
$$
\frac{\partial f}{\partial x} (1,2) = 4(1)(2^3) + 4(2) = 40
$$

- **Partial derivative with respect to $y$**:
$$
\frac{\partial f}{\partial y} = 6x^2y^2 + 6y + 4x
$$
Evaluating at $(1,2)$:
$$
\frac{\partial f}{\partial y} (1,2) = 6(1^2)(2^2) + 6(2) + 4(1) = 40
$$

#### Example 2: Three-variable function
Given:
$$
f(x, y, z) = x^2 + y^3 + z^4 + 5xyz
$$
Find **partial derivatives**:

- **With respect to $x$** (treating $y$ and $z$ as constants):
$$
\frac{\partial f}{\partial x} = 2x + 5yz
$$

- **With respect to $y$** (treating $x$ and $z$ as constants):
$$
\frac{\partial f}{\partial y} = 3y^2 + 5xz
$$

- **With respect to $z$** (treating $x$ and $y$ as constants):
$$
\frac{\partial f}{\partial z} = 4z^3 + 5xy
$$

#### Calculating Partial Derivatives in Python (SymPy)

```python
from sympy import symbols, diff

# Define variables
x, y, z = symbols('x y z')

# Define function
f = x**2 + y**3 + z**4 + 5*x*y*z

# Compute partial derivatives
partials = {var: diff(f, var) for var in [x, y, z]}

# Display results
for var, derivative in partials.items():
    print(f"∂f/∂{var} =", derivative)
```

This method allows efficient computation of partial derivatives, which are essential for optimization techniques in machine learning.

### 3.3 The Chain Rule

The **chain rule** helps differentiate nested (composed) functions—functions within functions.

#### Chain Rule (with power functions):

If you have a composite function $f(g(x))$, the derivative is:
$$
\frac{d}{dx}[f(g(x))^n] = n \cdot [f(x)]^{n-1} \cdot f'(x)
$$

#### Steps to apply the Chain Rule:

1. **Identify** the inner and outer functions.
2. **Differentiate** the outer function, keeping the inner function untouched.
3. **Multiply** by the derivative of the inner function.

#### Example:

Given:
$$
y = (4x - 1)^3
$$

- **Inner function:** $4x - 1$ (derivative = $4$)
- **Outer function:** raised to power 3

Apply chain rule:
$$
y' = 3 \cdot (4x - 1)^2 \cdot 4
= 12(4x - 1)^2
$$

This rule efficiently simplifies differentiation of complex or nested functions.

### 3.4 The Chain Rule for Partial Derivatives

The **chain rule for partial derivatives** helps differentiate functions with multiple nested variables.

#### When to use it:
- If a function $f$ depends on variables ($x, y$), and those variables depend on other variables ($r, s$), use this rule.

#### Steps for Partial Chain Rule:

1. **Identify** dependent, intermediate, and independent variables.
2. Create a **tree diagram** to visualize relationships.
3. Write the chain rule formula for each independent variable.
4. Differentiate separately, then simplify.

#### Example:

Given functions:
- $f(x, y) = 4x^2 + y^3$
- Intermediate functions:
  - $x(r, s) = r^2 + 3s$
  - $y(r, s) = r + 2s$

**Tree Diagram:**
```
        f
      /   \
     x     y
    / \     / \
   r   s   r   s
```

#### Chain rule formulas:

- Partial derivative with respect to **$r$**:
$$
\frac{\partial f}{\partial r} = \frac{\partial f}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial f}{\partial y}\frac{\partial y}{\partial r}
$$

- Partial derivative with respect to **$s$**:
$$
\frac{\partial f}{\partial s} = \frac{\partial f}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial f}{\partial y}\frac{\partial y}{\partial s}
$$

#### Calculate separately and simplify:

- Derivatives with respect to $x$ and $y$:
$$
\frac{\partial f}{\partial x} = 8x,\quad \frac{\partial f}{\partial y} = 2y
$$

- Derivatives of intermediate functions:
$$
\frac{\partial x}{\partial r} = 2r,\quad \frac{\partial x}{\partial s} = 3,\quad \frac{\partial y}{\partial r} = 1,\quad \frac{\partial y}{\partial s} = 2
$$

Substitute into the formulas:

- With respect to $r$:
$$
\frac{\partial f}{\partial r} = (8x)(2r) + (1)(y) = 16xr + y
$$

- With respect to $s$:
$$
\frac{\partial f}{\partial s} = (8x)(3) + (2)(y) = 16xr + 2y
$$

Finally, replace original expressions for $x(r,s)$ and $y(r,s)$ to simplify further.

#### Importance in Machine Learning:
- Crucial for training **neural networks**, particularly in **backpropagation**, simplifying the process of computing derivatives across multiple layers.

## 4. Machine Learning Gradients
### 4.1 Single-point regression gradient

Machine learning training involves optimizing parameters to maximize performance. To achieve this, we use **gradients**, which show the direction and rate of change of multi-variable functions.

#### Scalar field:
- A function accepting a vector as input and returning a single scalar output (e.g., temperature at a 3D point).

#### Gradient (grad):
- A vector containing all partial derivatives of a scalar field.
- Shows the direction of steepest ascent (maximum increase).

#### Gradient formula for a two-variable function:
Given $f(x,y)$, the gradient is:
$$
\nabla f(x,y) = \left[ \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \right]
$$

#### Directional Gradient (Derivative):
- The rate of change when moving in a specific direction $\hat{u}$.
- Calculated using the dot product of the gradient and direction vector:
$$
\nabla f(x,y) \cdot \hat{u}
$$

#### Maximal Directional Derivative:
- The maximum value of the directional gradient occurs in the direction of the gradient itself.
- Its magnitude is:
$$
\|\nabla f(x,y)\| = \sqrt{\left(\frac{\partial f}{\partial x}\right)^2 + \left(\frac{\partial f}{\partial y}\right)^2}
$$

#### Example:
Given:
- $f(x,y) = x^2 + 4xy + 2y^2$ at point $(2,1)$.

Calculate gradient:
- $\frac{\partial f}{\partial x} = 2x + 4y$, plug in (2,1): $8$
- $\frac{\partial f}{\partial y} = 4x + 4y$, plug in (2,1): $12$

Gradient vector at (2,1):
- $\nabla f(2,1) = [8,12]$

Maximum directional derivative (magnitude):
- $\sqrt{8^2 + 12^2} = \sqrt{208} \approx 14.42$

Thus, the greatest rate of change of the function at the point (2,1) is about **14.42**, occurring in the direction of the gradient vector.

### 4.2 Partial derivatives of quadratic cost

In machine learning, the **Cost (Error) Function** measures how well a model predicts outcomes. A common choice is the **Quadratic Cost Function (Mean Squared Error - MSE)**, which calculates the average squared difference between predicted and actual values.

#### Quadratic Cost Function (MSE) formula:
$$
C(w,b) = \frac{1}{n}\sum_{i=1}^{n}(y_i - y'_i)^2
$$

- $w$: Weights of the neural network
- $b$: Biases
- $n$: Number of data points
- $y_i$: Actual values
- $y'_i$: Predicted values by the model

#### Goal:
- Minimize the cost function by adjusting weights and biases, making predictions as accurate as possible.

#### Optimization Method:
- **Gradient Descent:** Adjust parameters iteratively using partial derivatives, guiding toward minimum error.

#### Calculating Partial Derivatives:
- Partial derivatives determine how each weight impacts the overall error.
- The **chain rule** helps calculate these partial derivatives:
$$
\frac{\partial C}{\partial w}, \quad \frac{\partial C}{\partial b}
$$

Once these partial derivatives are calculated, weights and biases can be adjusted step by step, gradually reducing the cost and improving the model’s accuracy.

### 4.3 Connecting Partial Derivatives with Backpropagation

**Backpropagation** is a method used to train neural networks by reducing prediction errors. It does this by adjusting the network’s weights and biases based on partial derivatives.

#### How Backpropagation Works:

- **Initialization:**  
  Set initial random weights, define inputs, and determine desired outputs.

- **Forward Propagation:**  
  Inputs pass forward through layers (neurons), producing an initial output.

- **Error Calculation:**  
  Compute the difference between predicted output and actual output (error).

- **Backward Propagation (Backpropagation):**  
  Errors from the output layer propagate backward through the network. This step uses **partial derivatives** and **chain rule**, efficiently calculating gradients through each neuron.

- **Updating Weights and Biases:**  
  Gradient descent is used to update parameters, reducing error step by step.

#### Major Steps in Backpropagation:

1. **Initialization** (set inputs, outputs, and random weights).
2. **Forward Propagation:** Compute outputs based on initial weights.
3. **Error calculation:** Compare predicted outputs with actual outputs.
4. **Backpropagation:** Calculate gradients using partial derivatives to see how to reduce error.
5. **Update parameters:** Adjust weights and biases using gradients and gradient descent.

#### Key points:
- Backpropagation efficiently computes gradients using partial derivatives.
- It relies on automatic differentiation to handle complex computations.
- Nearly all machine learning libraries implement backpropagation internally (e.g., TensorFlow, PyTorch).

### 4.4 Finding Minima and Maxima

In calculus and machine learning, we often need to find the highest (**maximum**) and lowest (**minimum**) points of a function. These points are known as **extrema**.

#### Steps for Finding Extrema:

**Step 1: Calculate First-order Derivatives**
- Find the partial derivatives with respect to each variable.
- Set each partial derivative equal to zero to find critical points.

**Step 2: Apply Second Derivative Test**
- Calculate second-order partial derivatives (including mixed derivatives).
- Evaluate these derivatives at each critical point using the following formula:
$$
D = f_{xx}(x,y) \cdot f_{yy}(x,y) - [f_{xy}]^2
$$

Interpretation:
- If $D > 0$ and $\frac{\partial^2 f}{\partial x^2} > 0$, it's a **local minimum**.
- If $D > 0$ but $\frac{\partial^2 f}{\partial x^2} < 0$, it's a **local maximum**.
- If $D < 0$, it's a **saddle point** (no max or min).
- If $D = 0$, the test is inconclusive.

#### Example:

Given function:
$$
f(x,y) = x^2 + xy + y^2 - 2x - y
$$

**Step 1: First-order derivatives**
- $\frac{\partial f}{\partial x} = 2x + y - 2$
- $\frac{\partial f}{\partial y} = x + 2y - 1$

Solve simultaneously:
- Find critical point: $(1,0)$

**Step 2: Second-order derivatives**
- $\frac{\partial^2 f}{\partial x^2} = 2$
- $\frac{\partial^2 f}{\partial y^2} = 2$
- Mixed derivative: $\frac{\partial^2 f}{\partial x\partial y} = 1$

Evaluate discriminant $D$:
$$
D = \frac{\partial^2 f}{\partial x^2}\frac{\partial^2 f}{\partial y^2} - \left(\frac{\partial^2 f}{\partial x\partial y}\right)^2 = (2)(2) - (1)^2 = 3 > 0
$$

Since $D > 0$ and $\frac{\partial^2 f}{\partial x^2} > 0$, point $(1,0)$ is a **local minimum**.

**Importance in Machine Learning:**
- Crucial in optimizing models.
- Used extensively in gradient-based methods, particularly gradient descent and backpropagation.

## 5. Introduction to Integral Calculus
### 5.1 Defining Integral Calculus

**Integral calculus** is concerned with finding areas under curves and is essentially the **opposite operation of differentiation**.

- **Integration** reverses differentiation.
- Differentiation finds the **rate of change** (derivative), while integration calculates accumulated values, such as area or volume.

#### Integral (Informal Definition):

The integral of a function $f(x)$ gives the area under its curve between two points $a$ and $b$.

#### Integral notation:
$$
\int_a^b f(x)\,dx
$$

#### Visualizing Integrals:
- To find the area under a curve, we sum up an infinite number of infinitely small rectangles beneath the curve.
- Increasing the number of rectangles improves accuracy, eventually leading to a perfect calculation when rectangles become infinitely thin.

#### Relationship with Derivatives:
- Integration (anti-differentiation) is the inverse of differentiation:
$$
\frac{d}{dx}\left(\int f(x)\,dx\right) = f(x)
$$

#### Two approaches for calculating area under a curve:
1. **Estimation** using geometric shapes (approximation).
2. **Exact Calculation** using integrals.

In machine learning, integral calculus is foundational, particularly in probability and Bayesian methods.

### 5.2 Integration Rules

Integration (or antidifferentiation) is essentially differentiation in reverse.

- If differentiation transforms $x^4$ into $4x^3$, then integration transforms $4x^3$ back into $x^4$.

#### Integral Notation:
$$
\int f(x)\,dx
$$

#### Key Integration Rules:

##### 1. Power Rule:
- For integrating powers of $x$ (except when exponent is $-1$):
$$
\int x^n\,dx = \frac{x^{n+1}}{n+1} + C,\quad (n \neq -1)
$$

**Example:**
$$
\int x^3\,dx = \frac{x^4}{4} + C
$$

##### 2. Constant Multiple Rule:
- Constants can be moved outside integrals.
$$
\int c \cdot f(x)\,dx = c \int f(x)\,dx
$$

**Example:**
$$
\int 5\cos(x)\,dx = 5 \int \cos(x)\,dx = 5\sin(x) + C
$$

##### 3. Sum Rule:
- The integral of a sum or difference equals the sum or difference of integrals.
$$
\int [f(x) + g(x)]\,dx = \int f(x)\,dx + \int g(x)\,dx
$$

**Example:**
$$
\int (x^3 + x^2 - 5)\,dx = \frac{x^4}{4} + \frac{x^3}{3} - 5x + C
$$

> **Important:**  
Always add only **one constant $C$** at the end, no matter how many terms you integrate separately.

Integration simplifies solving complex problems in areas like probability and neural network optimization.

### 5.3 Indefinite integrals

An **indefinite integral** represents a family of functions (antiderivatives), each differing by a constant. It’s written as:

$$
\int f(x)\,dx = F(x) + C
$$

- $C$ is an arbitrary constant.

#### Example:

Given:
- $\int 4x^3\,dx$

Solve using rules:

- Factor out constant:
$$
4 \int x^3\,dx
$$

- Apply power rule:
$$
= 4 \cdot \frac{x^4}{4} + C = x^4 + C
$$

#### Why the constant $C$?

Different functions can have the same derivative. For example:

- $x^4 + 10$, $x^4 - 5$, and $x^4 - 100$ all have the same derivative $4x^3$.

Thus, the constant $C$ includes **all possible solutions**.

#### Checking your answer:

You can verify your integral by differentiating it:

**Example:**  
Integral:
$$
\int (2x^3 - 3x)\,dx = \frac{1}{2}x^4 - \frac{3}{2}x^2 + C
$$

Check by differentiation:
- Differentiating back should return the original function:
$$
\frac{d}{dx}\left(\frac{1}{2}x^4 - \frac{3}{2}x^2 + C\right) = 2x^3 - 3x
$$

#### Key takeaway:

An indefinite integral provides general antiderivatives, always including the constant $C$.

### 5.4 Definite Integrals

A **definite integral** calculates the exact area under a curve between two specific points (limits of integration).

- **Notation:**  
$$
\int_{a}^{b} f(x)\,dx
$$

- **$f(x)$**: integrand  
- **$a$** and **$b$**: limits of integration

#### Fundamental Theorem of Calculus:
To calculate definite integrals, use the fundamental theorem:

$$
\int_{a}^{b} f(x)\,dx = F(b) - F(a)
$$

- $F(x)$ is the antiderivative of $f(x)$.

#### Definite vs. Indefinite Integrals:
- **Indefinite integral:** No limits; result is a function plus $C$.
- **Definite integral:** Has specific limits; result is a number (area).

#### Example:

Calculate:
$$
\int_{1}^{4}(x^3 - 1)\,dx
$$

##### Step 1: Integrate (without constant $C$):
- Use power rule:
$$
= \frac{x^4}{4} - x
$$

##### Step 2: Evaluate from lower limit $1$ to upper limit $4$:
$$
\left[\frac{x^4}{4} - x\right]_1^4
$$

Plug in upper limit first ($x=4$), then subtract lower limit ($x=1$):
$$
= \left(\frac{4^4}{4} - 4\right) - \left(\frac{1^4}{4} - 1\right)
$$

Simplify:
- $= (64 - 4) - (0.25 - 1)$
- $= 60 - (-0.75)$
- $= 60.75$

Thus, the definite integral evaluates exactly to **60.75**, representing the area under the curve from $1$ to $4$.

## 6. Conclusion
### Next Steps

Congratulations! You've completed the calculus foundations course for machine learning. Now that you've built a strong calculus base, a great next step is to explore:

- **Machine Learning Foundations: Linear Algebra** by Terezija Semenski.
- Other machine learning courses available in the [LinkedIn Learning library](https://www.linkedin.com/learning/).

For any questions or feedback, feel free to reach out to [Terezija Semenski on LinkedIn](https://www.linkedin.com/learning/instructors/terezija-semenski) or Twitter.

Good luck on your machine learning journey!