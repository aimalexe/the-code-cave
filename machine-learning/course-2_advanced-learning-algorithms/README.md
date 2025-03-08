# Advanced Learning Algorithms
## [Course](https://www.coursera.org/learn/advanced-learning-algorithms/) from Coursera [Taught by Andrew Ng](https://www.coursera.org/instructor/andrewng)

## Content
- [Advanced Learning Algorithms](#advanced-learning-algorithms)
  - [Course from Coursera Taught by Andrew Ng](#course-from-coursera-taught-by-andrew-ng)
  - [Content](#content)
- [Week 1:](#week-1)
  - [Neural Networks Intuition](#neural-networks-intuition)
    - [**Welcome!**](#welcome)
      - [Course Overview:](#course-overview)
      - [Key Highlights:](#key-highlights)
      - [Course Structure:](#course-structure)
    - [**Neurons and the Brain**](#neurons-and-the-brain)
      - [Neural Networks’ Origins:](#neural-networks-origins)
      - [Brief History of Neural Networks:](#brief-history-of-neural-networks)
      - [Key Milestones in Deep Learning:](#key-milestones-in-deep-learning)
      - [Biological Neurons vs. Artificial Neurons:](#biological-neurons-vs-artificial-neurons)
      - [Engineering Focus:](#engineering-focus)
      - [Why Neural Networks Took Off Recently:](#why-neural-networks-took-off-recently)
      - [Role of GPUs:](#role-of-gpus)
    - [**Demand Prediction**](#demand-prediction)
      - [Example of Demand Prediction:](#example-of-demand-prediction)
      - [Neurons and Predictions:](#neurons-and-predictions)
      - [Complex Example:](#complex-example)
      - [Layers in a Neural Network:](#layers-in-a-neural-network)
      - [Fully Connected Neural Network:](#fully-connected-neural-network)
      - [Terminology:](#terminology)
      - [Intuition Behind Neural Networks:](#intuition-behind-neural-networks)
      - [Summary of Neural Network:](#summary-of-neural-network)
      - [Deep Networks:](#deep-networks)
    - [**Example: Recognizing Images**](#example-recognizing-images)
      - [Face Recognition Application:](#face-recognition-application)
      - [Neural Network Structure for Face Recognition:](#neural-network-structure-for-face-recognition)
      - [Feature Detection in Hidden Layers:](#feature-detection-in-hidden-layers)
      - [Automatic Learning of Features:](#automatic-learning-of-features)
      - [Generalization to Other Tasks:](#generalization-to-other-tasks)
  - [Neural Network Model](#neural-network-model)
    - [**Neural Network Layer**](#neural-network-layer)
      - [Building a Layer of Neurons:](#building-a-layer-of-neurons)
      - [Computation in the Hidden Layer:](#computation-in-the-hidden-layer)
      - [Layer Notation:](#layer-notation)
      - [Output Layer Computation:](#output-layer-computation)
      - [Final Prediction:](#final-prediction)
      - [Summary:](#summary)
    - [**More Complex Neural Networks**](#more-complex-neural-networks)
      - [Introduction to Complex Neural Networks:](#introduction-to-complex-neural-networks)
      - [Computation in Layer 3:](#computation-in-layer-3)
      - [Notation for Layers and Neurons:](#notation-for-layers-and-neurons)
      - [General Form of Activation:](#general-form-of-activation)
      - [Activation Function:](#activation-function)
      - [Input Notation:](#input-notation)
      - [Inference in Neural Networks:](#inference-in-neural-networks)
    - [**Inference: Making Predictions (Forward Propagation)**](#inference-making-predictions-forward-propagation)
      - [Task: Handwritten Digit Recognition:](#task-handwritten-digit-recognition)
      - [Neural Network Structure:](#neural-network-structure)
      - [Forward Propagation Steps:](#forward-propagation-steps)
      - [Binary Classification:](#binary-classification)
      - [Forward Propagation Concept:](#forward-propagation-concept)
      - [Key Points:](#key-points)
      - [Application:](#application)
  - [Tensorflow Implementation](#tensorflow-implementation)
    - [**Inference in Code**](#inference-in-code)
      - [Neural Network Inference Using TensorFlow:](#neural-network-inference-using-tensorflow)
      - [Example: Coffee Roasting Optimization:](#example-coffee-roasting-optimization)
      - [TensorFlow Code for Inference:](#tensorflow-code-for-inference)
      - [Example: Handwritten Digit Classification:](#example-handwritten-digit-classification)
      - [Key Steps:](#key-steps)
      - [TensorFlow Data Handling:](#tensorflow-data-handling)
    - [**Data in TensorFlow**](#data-in-tensorflow)
      - [Representing Data in NumPy and TensorFlow:](#representing-data-in-numpy-and-tensorflow)
      - [Example: Matrix Representation:](#example-matrix-representation)
      - [Row and Column Vectors:](#row-and-column-vectors)
      - [TensorFlow vs NumPy:](#tensorflow-vs-numpy)
      - [Tensors in TensorFlow:](#tensors-in-tensorflow)
      - [Conversion Between NumPy and TensorFlow:](#conversion-between-numpy-and-tensorflow)
      - [Key Differences:](#key-differences)
    - [**Building a Neural Network**](#building-a-neural-network)
      - [Previous Approach:](#previous-approach)
      - [TensorFlow's Sequential Model:](#tensorflows-sequential-model)
      - [Example: Coffee Roasting Classification:](#example-coffee-roasting-classification)
      - [Simplifying Code:](#simplifying-code)
      - [Example: Digit Classification:](#example-digit-classification)
      - [Key Concept:](#key-concept)
      - [Understanding the Underlying Process:](#understanding-the-underlying-process)
  - [Neural Network Implementation in Python](#neural-network-implementation-in-python)
    - [Forward Propagation in a Single Layer](#forward-propagation-in-a-single-layer)
      - [**Overview**](#overview)
      - [**Notations**](#notations)
      - [**Steps for Forward Propagation**](#steps-for-forward-propagation)
      - [**Code Implementation**](#code-implementation)
    - [General Implementation of Forward Propagation](#general-implementation-of-forward-propagation)
      - [Dense Layer Function](#dense-layer-function)
      - [Example](#example)
      - [Sequential Layer Function](#sequential-layer-function)
      - [Key Points](#key-points-1)
      - [Debugging Tip](#debugging-tip)
  - [Speculation on Artificial General Intelligence (AGI)](#speculation-on-artificial-general-intelligence-agi)
    - [Is there a path to AGI?](#is-there-a-path-to-agi)
      - [**Key Concepts of AGI (Artificial General Intelligence)**](#key-concepts-of-agi-artificial-general-intelligence)
      - [**Challenges in Achieving AGI**](#challenges-in-achieving-agi)
      - [**One Learning Algorithm Hypothesis**](#one-learning-algorithm-hypothesis)
      - [**Neuroscience Experiments and Adaptability**](#neuroscience-experiments-and-adaptability)
      - [**Hype and Realism in AGI**](#hype-and-realism-in-agi)
      - [**Future Prospects**](#future-prospects)
      - [**Mathematical and Technical Details**](#mathematical-and-technical-details)
  - [Vectorization](#vectorization)
    - [How Neural Networks Are Implemented Efficiently](#how-neural-networks-are-implemented-efficiently)
      - [**Key Concepts**](#key-concepts)
      - [**Forward Propagation in Neural Networks**](#forward-propagation-in-neural-networks)
      - [**Code Example (Python/NumPy)**](#code-example-pythonnumpy)
        - [Non-vectorized Code:](#non-vectorized-code)
        - [Vectorized Code:](#vectorized-code)
      - [**Explanation of Terms**:](#explanation-of-terms)
      - [**Efficiency of Vectorization**](#efficiency-of-vectorization)
      - [**Activation Functions in Neural Networks**](#activation-functions-in-neural-networks)
      - [**Recap**](#recap)
    - [Matrix Multiplication](#matrix-multiplication)
      - [**Dot Product Between Vectors**](#dot-product-between-vectors)
      - [**Vector-Matrix Multiplication**](#vector-matrix-multiplication)
      - [**Matrix-Matrix Multiplication**](#matrix-matrix-multiplication)
      - [**General Form of Matrix Multiplication**](#general-form-of-matrix-multiplication)
      - [**Summary**](#summary-1)
- [Week 2:](#week-2)
  - [](#)
  - [](#-1)
- [Week 3:](#week-3)
  - [](#-2)
  - [](#-3)
- [Week 4:](#week-4)
  - [](#-4)
  - [](#-5)

# Week 1:
## Neural Networks Intuition
### **Welcome!**

#### Course Overview:
- **Focus**: Neural networks (deep learning algorithms) & decision trees.
- **Goal**: Implement and build machine learning systems.

#### Key Highlights:
- **Unique Content**: Practical advice for building ML systems.
- **Real-World Application**: Avoid wasting time on ineffective methods with strategic decision-making tips.

#### Course Structure:
- **Week 1**: Neural Networks & Inference
  - Learn how neural networks work.
  - Inference: Use pre-trained neural networks for predictions.

- **Week 2**: Training Neural Networks
  - Train neural networks using labeled datasets (X, Y).

- **Week 3**: Practical ML System Tips
  - Advanced tips for building efficient ML systems.
  
- **Week 4**: Decision Trees
  - Explore decision trees: powerful yet less publicized algorithms used in various applications.

### **Neurons and the Brain**

#### Neural Networks’ Origins:
- **Initial Motivation**: Mimic the human brain’s learning and thinking.
- **Evolution**: Today’s neural networks differ greatly from biological neurons.
  
#### Brief History of Neural Networks:
- **1950s**: Neural networks were introduced.
- **1980s-1990s**: Gained traction (e.g., used for handwritten digit recognition).
- **Late 1990s**: Lost popularity.
- **2005**: Resurgence, branded as **deep learning**.
  
#### Key Milestones in Deep Learning:
- **First Major Impact**: Speech recognition.
- **ImageNet Moment (2012)**: Neural networks made breakthroughs in computer vision.
- **Further Applications**: Natural language processing, climate change, medical imaging, advertising, and product recommendations.

#### Biological Neurons vs. Artificial Neurons:
- **Biological Neurons**: 
  - Input via **dendrites**.
  - Computation in **cell body** (nucleus).
  - Output via **axon**.
  
- **Artificial Neurons**: 
  - Input: numbers.
  - Performs computation, then outputs numbers to other neurons.
  
#### Engineering Focus:
- **Current Approach**: Shifted away from mimicking biological neurons.
- **Focus**: Engineering principles to improve the effectiveness of algorithms.
  
#### Why Neural Networks Took Off Recently:
- **Data Availability**: Increased digitalization (more data to train models).
- **Traditional Algorithms** (e.g., logistic regression) **struggled** with large datasets.
- **Neural Networks**: 
  - **Small Neural Networks**: Improved performance over traditional algorithms.
  - **Large Neural Networks**: Achieved high performance with **big data**.
  
#### Role of GPUs:
- **GPUs**: Originally for graphics but instrumental in accelerating deep learning.

### **Demand Prediction**

#### Example of Demand Prediction:
- **Task**: Predict whether a T-shirt will be a top seller.
- **Input Feature (x)**: Price of the T-shirt.
- **Logistic Regression**: Used to predict the probability of a T-shirt being a top seller.
- **Output (a)**: Denoted as "activation" (from neuroscience).

#### Neurons and Predictions:
- **Single Neuron**: Takes an input (e.g., price) and outputs a prediction (probability of being a top seller).
- **Analogy**: Neuron = Tiny computer, processing inputs to give outputs.

#### Complex Example:
- **Four Features**: Price, shipping costs, marketing, material quality.
- **Three Neurons**: Estimate:
  1. **Affordability** (price + shipping).
  2. **Awareness** (marketing).
  3. **Perceived Quality** (price + material quality).
  
- **Output Neuron**: Takes affordability, awareness, and perceived quality as inputs to predict the probability of being a top seller.

#### Layers in a Neural Network:
- **Input Layer**: Initial features (price, shipping, etc.).
- **Hidden Layer**: Three neurons processing input features.
- **Output Layer**: Single neuron giving the final prediction.

#### Fully Connected Neural Network:
- **All Neurons Access All Inputs**: Each neuron in the hidden layer can access every input from the input layer.
- **Simplified Representation**: Inputs are combined into a vector (x), processed by the hidden layer, which outputs a vector of activations.

#### Terminology:
- **Activation**: Output of neurons.
- **Input Layer**: Raw input features.
- **Hidden Layer**: Neurons whose values are hidden (not directly observable in the training data).
- **Output Layer**: Final neuron giving the prediction.

#### Intuition Behind Neural Networks:
- **Feature Learning**: Neural networks can learn their own features (e.g., affordability, awareness) instead of manually engineered ones.

#### Summary of Neural Network:
- **Input Layer**: Vector of features (e.g., price, shipping).
- **Hidden Layer**: Outputs activations.
- **Output Layer**: Gives the final prediction.

#### Deep Networks:
- **Multiple Hidden Layers**: Input flows through successive hidden layers before reaching the output layer.
- **Architecture**: Number of hidden layers and neurons per layer define the neural network’s architecture (key design choice).

### **Example: Recognizing Images**

#### Face Recognition Application:
- **Task**: Train a neural network to recognize the identity of a person in an image.
- **Image Representation**: 
  - Image = 1,000 by 1,000 pixels.
  - Represented as a matrix of pixel intensity values (0-255).
  - Unrolled into a vector of 1 million pixel values (1,000 x 1,000 = 1 million).
  
#### Neural Network Structure for Face Recognition:
- **Input Layer**: The vector of pixel values (input image X).
- **Hidden Layers**: Multiple layers extracting features.
- **Output Layer**: Estimates the probability of the person’s identity.

#### Feature Detection in Hidden Layers:
- **First Hidden Layer**: 
  - Neurons detect simple features like vertical or oriented lines/edges.
  
- **Second Hidden Layer**: 
  - Neurons detect parts of the face (e.g., eyes, nose, ears).
  
- **Third Hidden Layer**: 
  - Detects larger face shapes by aggregating parts of the face.

#### Automatic Learning of Features:
- **Key Point**: The network automatically learns to detect features like edges, facial parts, and full faces without being explicitly told to do so.

#### Generalization to Other Tasks:
- **Car Detection Example**: 
  - Trained on cars, the network learns to detect edges of cars, parts of cars, and finally full car shapes.
  
- **Versatile Learning**: The same neural network architecture can learn to detect different features based on the training data (e.g., faces vs. cars).


## Neural Network Model
### **Neural Network Layer**

#### Building a Layer of Neurons:
- **Key Concept**: A layer of neurons is the fundamental building block of a neural network.
- **Example**: From the demand prediction model, we have four input features sent to a hidden layer of three neurons.

#### Computation in the Hidden Layer:
- **Each Neuron**: Implements a logistic regression function.
- **First Neuron**: Computes the activation value as $a_1 = g(w_1 \cdot x + b_1)$, where:
  - $g(z)$ is the sigmoid function $\frac{1}{1 + e^{-z}}$.
  - Example activation value: 0.3 (probability of affordability).
  
- **Second Neuron**: Computes $a_2 = g(w_2 \cdot x + b_2)$, with an activation value of 0.7 (probability of awareness).
- **Third Neuron**: Computes $a_3 = g(w_3 \cdot x + b_3)$, with an activation value of 0.2 (probability of perceived quality).

#### Layer Notation:
- **Layers**: 
  - Input Layer: Layer 0.
  - Hidden Layer: Layer 1.
  - Output Layer: Layer 2.
  
- **Superscript Notation**: $a^{[1]}, w^{[1]}, b^{[1]}$ for Layer 1, and $a^{[2]}, w^{[2]}, b^{[2]}$ for Layer 2.

#### Output Layer Computation:
- **Input to Layer 2**: The output vector from Layer 1: $a^{[1]} = [0.3, 0.7, 0.2]$.
- **Single Neuron in Output Layer**: Computes the final output as:
  $a^{[2]} = g(w^{[2]} \cdot a^{[1]} + b^{[2]})$.
  - Example: Final output = 0.84 (probability of being a top seller).

#### Final Prediction:
- **Thresholding**: Apply threshold of 0.5:
  - $\hat{y} = 1$ if $a^{[2]} > 0.5$ (predicts the T-shirt is a top seller).
  - $\hat{y} = 0$ if $a^{[2]} \leq 0.5$.

#### Summary:
- **Layers Process**: Each layer computes activations from the previous layer’s outputs.
- **Final Output**: Passed through the last layer, and the result is either a probability or a binary prediction.

### **More Complex Neural Networks**

#### Introduction to Complex Neural Networks:
- **Network Structure**: 
  - 4 layers (excluding input layer).
  - **Layers**: 3 hidden layers (Layers 1, 2, 3) and 1 output layer (Layer 4).
  - Input layer is denoted as **Layer 0**.

#### Computation in Layer 3:
- **Layer 3 Input**: Vector $a^{[2]}$ (output of Layer 2).
- **Layer 3 Output**: Vector $a^{[3]}$.
- **Each Neuron in Layer 3**: 
  - Implements a logistic function $a_j^{[3]} = g(w_j^{[3]} \cdot a^{[2]} + b_j^{[3]})$ for each neuron $j$.
  - Outputs the activation vector $a^{[3]} = [a_1^{[3]}, a_2^{[3]}, a_3^{[3]}]$.

#### Notation for Layers and Neurons:
- **Superscripts**: Denote the layer index (e.g., $w_1^{[3]}, b_1^{[3]}$).
- **Subscripts**: Denote the neuron index in that layer (e.g., $w_2^{[3]}$, $a_2^{[3]}$).
- **Input from Previous Layer**: $a^{[2]}$ is the output from Layer 2, and it's the input to Layer 3.

#### General Form of Activation:
- **For Any Layer $l$ and Neuron $j$**:
  - $a_j^{[l]} = g(w_j^{[l]} \cdot a^{[l-1]} + b_j^{[l]})$.
  - The activation function $g$ applies to the weighted sum of the previous layer's output and bias.

#### Activation Function:
- **Sigmoid Function** $g(z)$:
  - Common activation function.
  - In the context of neural networks, also referred to as the **activation function**.
- **Other Activation Functions**: Will be discussed later.

#### Input Notation:
- **Input Vector $X$**: Denoted as $a^{[0]}$.
  - The same equation structure applies for computing activations across layers.

#### Inference in Neural Networks:
- **Goal**: Compute activations at each layer to make predictions.
- **Prediction Process**: Sequentially compute activations layer by layer.

### **Inference: Making Predictions (Forward Propagation)**

#### Task: Handwritten Digit Recognition:
- **Goal**: Binary classification (distinguish between digits 0 and 1).
- **Input**: 8x8 image (64 pixel intensity values, ranging from 0 to 255).

#### Neural Network Structure:
- **Input Layer**: 64 features (pixel values).
- **First Hidden Layer**: 25 neurons (units).
- **Second Hidden Layer**: 15 neurons (units).
- **Output Layer**: 1 output neuron (probability of the digit being 1).

#### Forward Propagation Steps:
1. **From Input to First Hidden Layer**:
   - Compute $a^{[1]} = g(W^{[1]} \cdot x + b^{[1]})$.
   - $a^{[1]}$ is a vector with 25 values (one for each neuron in Layer 1).
   
2. **From First Hidden Layer to Second Hidden Layer**:
   - Compute $a^{[2]} = g(W^{[2]} \cdot a^{[1]} + b^{[2]})$.
   - $a^{[2]}$ is a vector with 15 values (one for each neuron in Layer 2).

3. **From Second Hidden Layer to Output Layer**:
   - Compute $a^{[3]} = g(W^{[3]} \cdot a^{[2]} + b^{[3]})$.
   - $a^{[3]}$ is a scalar (single value representing the probability of the digit being 1).

#### Binary Classification:
- **Threshold**: If $a^{[3]} > 0.5$, predict the digit is 1, otherwise 0.

#### Forward Propagation Concept:
- **Definition**: The process of computing activations from one layer to the next, starting from the input layer and moving forward to the output layer.
- **Notational Convention**: The output of the network is denoted as $f(x)$, similar to the output of logistic regression or linear regression.

#### Key Points:
- **Forward Propagation**: Activations are computed layer by layer from left to right (input to output).
- **Contrast to Backpropagation**: Forward propagation is used for making predictions, while backpropagation (learned later) is used for training the network.
- **Architecture**: The number of neurons typically decreases as you move toward the output layer.

#### Application:
- You can use forward propagation to carry out inference using pre-trained neural networks by downloading the parameters and applying them to new data.

[See Lab 1](./labs/week_1/work/C2_W1_Lab01_Neurons_and_Layers.ipynb)

## Tensorflow Implementation
### **Inference in Code**

#### Neural Network Inference Using TensorFlow:
- **Framework**: TensorFlow (common framework for deep learning).
- **Alternative**: PyTorch (also widely used but focus here is on TensorFlow).

#### Example: Coffee Roasting Optimization:
- **Task**: Predict if coffee will taste good based on temperature and duration.
- **Input Features**: 
  - **x** = [temperature, duration], e.g., 200°C for 17 minutes.
- **Labels**: 
  - **y = 1**: Good coffee.
  - **y = 0**: Bad coffee (overcooked, undercooked, etc.).

#### TensorFlow Code for Inference:

1. **Layer 1 (First Hidden Layer)**:
   - Define Layer 1 using `Dense(units=3, activation='sigmoid')`.
   - **a1**: Compute the activations using Layer 1 function: `a1 = Layer1(x)`.

2. **Layer 2 (Second Hidden Layer)**:
   - Define Layer 2 using `Dense(units=1, activation='sigmoid')`.
   - **a2**: Compute the activations using Layer 2 function: `a2 = Layer2(a1)`.

3. **Thresholding for Binary Classification**:
   - Apply a threshold: `y_hat = 1 if a2 >= 0.5 else 0`.

#### Example: Handwritten Digit Classification:
- **Input Features (x)**: Numpy array of pixel intensity values.
- **Layer 1**: 
  - Define as `Dense(units=25, activation='sigmoid')`.
  - Compute activations: `a1 = Layer1(x)`.

- **Layer 2**: 
  - Define as `Dense(units=15, activation='sigmoid')`.
  - Compute activations: `a2 = Layer2(a1)`.

- **Layer 3** (Final Output Layer): 
  - Define as `Dense(units=1, activation='sigmoid')`.
  - Compute final output: `a3 = Layer3(a2)`.

- **Binary Prediction**: Optionally threshold $a3$ to get $\hat{y}$.

#### Key Steps:
- **Dense Layers**: Represent the neural network layers.
- **Forward Propagation**: Compute activations at each layer from input to output.
- **Thresholding**: Convert the final output into a binary prediction.

#### TensorFlow Data Handling:
- **Numpy Arrays**: Data is handled in a structured way using Numpy arrays.
- **Next Steps**: Understanding how TensorFlow handles data in more detail.

### **Data in TensorFlow**

#### Representing Data in NumPy and TensorFlow:
- **NumPy**: Standard Python library for linear algebra, used to represent vectors and matrices.
- **TensorFlow**: Built later by Google Brain, uses slightly different conventions for data representation (tensors).

#### Example: Matrix Representation:
- **Matrix Dimensions**: A matrix is represented by its number of rows and columns.
   - Example: A matrix with 2 rows and 3 columns is a **2 x 3** matrix.
   - Example Code: `x = np.array([[1, 2, 3], [4, 5, 6]])` creates a **2 x 3 matrix**.

#### Row and Column Vectors:
- **Row Vector (1 x 2 matrix)**: Example - `np.array([[200, 17]])` is a 1 x 2 matrix.
- **Column Vector (2 x 1 matrix)**: Example - `np.array([[200], [17]])` is a 2 x 1 matrix.
- **1D Array (Vector)**: A 1D vector is a list of numbers without rows or columns (e.g., `np.array([200, 17])`).

#### TensorFlow vs NumPy:
- **1D Arrays (NumPy)**: In earlier courses, 1D arrays (e.g., `x = np.array([200, 17])`) were used to represent feature vectors.
- **2D Arrays (TensorFlow)**: TensorFlow prefers matrices (e.g., `x = np.array([[200, 17]])`) for efficiency in handling large datasets.

#### Tensors in TensorFlow:
- **Tensor**: TensorFlow's way of representing matrices and higher-dimensional arrays.
   - **TensorFlow Example**: 
     - **a1 = Layer1(x)**: If `Layer1` has 3 units, `a1` is a **1 x 3** matrix (e.g., `[0.2, 0.7, 0.3]`).
     - **a2 = Layer2(a1)**: If `Layer2` has 1 unit, `a2` is a **1 x 1** matrix (e.g., `[0.8]`).

#### Conversion Between NumPy and TensorFlow:
- **Converting Tensor to NumPy**: Use `.numpy()` method to convert TensorFlow tensors to NumPy arrays (e.g., `a1.numpy()`).
- **Converting Back and Forth**: 
   - TensorFlow can automatically convert NumPy arrays to tensors internally.
   - You can manually convert tensors back to NumPy arrays when needed.

#### Key Differences:
- **NumPy**: Typically uses 1D arrays for vectors.
- **TensorFlow**: Uses 2D arrays (matrices) for efficiency in handling large datasets and complex computations.

### **Building a Neural Network**

#### Previous Approach:
- **Manual Forward Propagation**: 
  - Initialize input `x`, create layers manually, and pass activations layer by layer (e.g., compute `a1`, then `a2`).
  
#### TensorFlow's Sequential Model:
- **Simplified Process**:
  - TensorFlow allows sequentially stringing layers together using the `Sequential()` function.
  - You don't have to manually pass activations through each layer.

#### Example: Coffee Roasting Classification:
1. **Training Data**:
   - **Input**: `X` (4 x 2 matrix).
   - **Labels**: `Y` (1D array, e.g., `[1, 0, 0, 1]`).

2. **Training the Model**:
   - Use `model.compile()` and `model.fit(X, Y)` to train the neural network.
   - These functions handle the training process automatically.

3. **Inference (Making Predictions)**:
   - Use `model.predict(X_new)` for forward propagation to predict output for new data.

#### Simplifying Code:
- Instead of assigning layers to separate variables (e.g., `layer1`, `layer2`), directly pass them to `Sequential()`.
   ```python
   model = Sequential([
       Dense(3, activation='sigmoid'),
       Dense(1, activation='sigmoid')
   ])
   ```

#### Example: Digit Classification:
1. **Define Layers**:
   - Specify each layer using `Sequential()` (e.g., Layer 1, Layer 2, Layer 3).
   
2. **Compile and Fit the Model**:
   - Train the model using `model.compile()` and `model.fit(X, Y)`.

3. **Make Predictions**:
   - Use `model.predict(X_new)` for inference on new data.

#### Key Concept:
- **Compact Code**: The simplified TensorFlow approach allows you to define, train, and predict with a neural network in a few lines of code, making it more efficient and easy to implement.

#### Understanding the Underlying Process:
- While TensorFlow simplifies building neural networks, it's important to understand the mechanics behind the scenes (e.g., forward propagation).
- **Next Step**: Learn how to implement forward propagation manually to gain deeper insights into how these algorithms work, so you can troubleshoot or adjust them when needed.

[See Lab 2](./labs/week_1/work/C2_W1_Lab02_CoffeeRoasting_TF.ipynb)

## Neural Network Implementation in Python
### Forward Propagation in a Single Layer

Forward propagation is a crucial step in neural network computations. Understanding its implementation helps in gaining insights into libraries like TensorFlow and PyTorch. Here’s a breakdown of how you can implement forward propagation for a single layer from scratch using Python.

#### **Overview**

- **Objective:** Compute forward propagation for a single layer neural network.
- **Model Used:** Coffee roasting model.
- **Approach:** Use 1D arrays to represent vectors and parameters.

#### **Notations**

- **$a_{1,1}$:** Activation value for the first neuron in the first layer.
- **$w_{1,1}$:** Weight for the first neuron.
- **$b_{1,1}$:** Bias for the first neuron.
- **$g$:** Activation function, typically the sigmoid function.

#### **Steps for Forward Propagation**

1. **Compute Activation for First Neuron ($a_{1,1}$):**
   - **Parameters:**
     - Weight: $w_{1,1} = 1.2$
     - Bias: $b_{1,1} = -1$
   - **Compute $z_{1,1}$:**
     $
     z_{1,1} = \text{dot}(w_{1,1}, x) + b_{1,1}
     $
   - **Apply Activation Function:**
     $
     a_{1,1} = g(z_{1,1})
     $
   - **Activation Function (Sigmoid):**
     $
     g(z) = \frac{1}{1 + e^{-z}}
     $

2. **Compute Activation for Second Neuron ($a_{1,2}$):**
   - **Parameters:**
     - Weight: $w_{1,2} = [-3, 4]$
     - Bias: $b_{1,2} = \text{value}$
   - **Compute $z_{1,2}$:**
     $
     z_{1,2} = \text{dot}(w_{1,2}, x) + b_{1,2}
     $
   - **Apply Activation Function:**
     $
     a_{1,2} = g(z_{1,2})
     $

3. **Compute Activation for Third Neuron ($a_{1,3}$):**
   - Repeat similar steps as above.

4. **Group Activations:**
   - **Form the Activation Vector $a_{1}$:**
     $
     a_{1} = \text{np.array}([a_{1,1}, a_{1,2}, a_{1,3}])
     $

5. **Compute Output for Second Layer ($a_{2}$):**
   - **Parameters:**
     - Weight: $w_{2,1}$
     - Bias: $b_{2,1}$
   - **Compute $z_{2,1}$:**
     $
     z_{2,1} = \text{dot}(w_{2,1}, a_{1}) + b_{2,1}
     $
   - **Apply Activation Function:**
     $
     a_{2,1} = g(z_{2,1})
     $

#### **Code Implementation**

Here's a simplified code snippet for forward propagation in Python using NumPy:

```python
import numpy as np

# Define activation function
def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Input feature vector
x = np.array([1.0, 2.0])  # Example input

# Parameters for layer 1
w1 = np.array([[1.2, -3.0], [2.0, 4.0]])  # Weights for 2 neurons
b1 = np.array([-1, 1])  # Biases for 2 neurons

# Forward propagation for layer 1
z1 = np.dot(w1, x) + b1
a1 = sigmoid(z1)

# Parameters for layer 2
w2 = np.array([0.5, -0.5])  # Weights
b2 = 0.1  # Bias

# Forward propagation for layer 2
z2 = np.dot(w2, a1) + b2
a2 = sigmoid(z2)

print("Activations of Layer 1:", a1)
print("Activation of Layer 2:", a2)
```

### General Implementation of Forward Propagation

- **Goal**: Implement forward propagation for a dense layer (single layer of a neural network) using NumPy.
- We will use the **weights** matrix $W$ and the **biases** vector $b$ for the neurons in a given layer.

#### Dense Layer Function

```python
def dense(a_in, W, b):
    units = W.shape[1] # number of units (columns in W)
    a_out = np.zeros(units) # initialize activations
    for j in range(units):
        w = W[:, j] # extract j-th column from W
        z = np.dot(w, a_in) + b[j] # compute z for the j-th neuron
        a_out[j] = g(z) # activation using sigmoid (or other activation)
    return a_out
```

- **Parameters**:
  - `a_in`: Activation from the previous layer.
  - `W`: Weight matrix (shape: $2 \times 3$).
  - `b`: Bias vector (shape: $1 \times 3$).
  
- **Logic**:
  - For each unit (neuron), we:
    - Extract the weight vector from the $j$-th column of $W$.
    - Compute the weighted sum $z = W \cdot a_{in} + b$.
    - Apply the activation function $a = g(z)$.
  
#### Example

- **Weight matrix** $W$:
  
  $$
  W = \begin{pmatrix}
    1 & -3 & 5 \\
    2 & 4 & -6
  \end{pmatrix}
  $$

- **Bias vector** $b$:
  
  $$
  b = [-1, 1, 2]
  $$

- **Input Activation** $a^{[0]} = \vec{x} = [-2, 4]$.

#### Sequential Layer Function

```python
def sequential(x):
    a1 = dense(x, W1, b1) # First layer
    a2 = dense(a1, W2, b2) # Second layer
    a3 = dense(a2, W3, b3) # Third layer
    a4 = dense(a3, W4, b4) # Fourth layer
    f_x = a4
    return f_x
```

- **Layer-by-layer computation**:
  - $a_1 = \text{dense}(x, W1, b1)$
  - $a_2 = \text{dense}(a_1, W2, b2)$
  - Continue until the final layer.
  
- **Activation Function** $g(z)$ (sigmoid is used in this example).
  
#### Key Points

- **Matrix $W$**:
  - A **capital W** represents a **matrix** (weights).
  
- **Vector $a^{[0]}$**:
  - Refers to **input features** (activations from the previous layer).
  
- **General Process**:
  - For each layer, the input activations are fed forward through the dense layers until the final output is produced.

#### Debugging Tip

- Understanding **low-level** implementations like this helps debug higher-level libraries such as **TensorFlow** when something goes wrong or runs slowly.

[See Lab 3 Here](./labs/week_1/work/C2_W1_Lab03_CoffeeRoasting_Numpy.ipynb)

## Speculation on Artificial General Intelligence (AGI)
### Is there a path to AGI?

#### **Key Concepts of AGI (Artificial General Intelligence)**
- **AGI** refers to the development of an AI system that could do anything a typical human can do.
- Progress in **ANI (Artificial Narrow Intelligence)**, such as self-driving cars, smart speakers, or AI in farming, has been significant, but this doesn’t necessarily indicate progress toward AGI.
- ANI focuses on specific tasks, while AGI aims for general tasks, creating systems with human-like flexibility in problem-solving.

#### **Challenges in Achieving AGI**
- **Neural Networks**: Early hopes suggested simulating a large number of neurons could lead to AGI. However, current **artificial neural networks (ANNs)** are much simpler than biological neurons.
    - A single **logistic regression unit** in an ANN is vastly simpler than a biological neuron.
    - We still lack a deep understanding of how neurons map inputs to outputs.
  
- **Brain Simulation**:
    - Current approaches to simulating the brain are far from mimicking human intelligence due to limited knowledge about how the human brain functions.

#### **One Learning Algorithm Hypothesis**
- Research suggests that different regions of the brain can adapt to new tasks, regardless of their initial design:
    - **Auditory cortex experiments** show the brain can learn to process visual information when rewired, suggesting a general adaptability.
    - Similar experiments with the **somatosensory cortex** show the same adaptability for learning new inputs (e.g., touch to sight).

- **Plasticity of the brain**:
    - The brain's ability to adapt to a wide variety of sensory inputs (sight, sound, touch) supports the idea that intelligence could be built on a **single or a few learning algorithms**.
  
#### **Neuroscience Experiments and Adaptability**
- **Human echolocation**: Humans trained to use sound reflections to “see” through sound like bats.
- **Haptic belt**: By wearing a compass-linked belt, humans can develop a sense of direction, demonstrating the brain’s adaptability to new inputs.
  
- These experiments suggest that if we discover the underlying learning algorithm, we might implement it into AI systems, potentially advancing towards AGI.

#### **Hype and Realism in AGI**
- Over-hyping AGI progress is a problem:
    - ANI progress does not equate to AGI progress.
    - Even if the brain works on a small set of learning algorithms, we have yet to identify or replicate them.

#### **Future Prospects**
- **AGI remains a challenging and long-term goal**, and it’s unclear if breakthroughs will occur within our lifetimes.
- Current **machine learning** and **neural networks** are still highly valuable tools for solving specific tasks, even without reaching AGI.

#### **Mathematical and Technical Details**
- Further learning will cover **neural network optimization**:
    - In the upcoming optional videos, there will be a focus on how to efficiently implement neural networks, particularly through **vectorization techniques**.

## Vectorization
### How Neural Networks Are Implemented Efficiently

#### **Key Concepts**
- **Vectorization**: 
  - A method used to make neural networks computationally efficient, allowing for large-scale implementations. 
  - Neural networks are **vectorized** using matrix multiplications, which makes it easier to scale up for large datasets and models.

- **Hardware Optimization**:
  - **GPUs** and some **CPU functions** are optimized for parallel computing and can handle large matrix multiplications efficiently.
  - Without vectorized implementations and hardware acceleration, **deep learning** would not have reached its current scale and success.

#### **Forward Propagation in Neural Networks**
- **Forward Propagation**: The process of passing inputs through a neural network layer to compute the output.
  
- **Non-vectorized Implementation**:
  - Inputs $X$ are passed through neurons, where each neuron's output is computed with the formula:
    $$
    z = W^T X + B
    $$
    - Where $W$ are the **weights** and $B$ are the **biases**.
    - Each calculation is performed iteratively over neurons.

- **Vectorized Implementation**:
  - Instead of computing neuron outputs iteratively, a **matrix multiplication** is used to compute outputs in one step.
  - The new implementation is much faster due to leveraging matrix multiplication operations.
  
#### **Code Example (Python/NumPy)**

##### Non-vectorized Code:
```python
# Non-vectorized forward propagation
A_in = np.zeros((1, 3))
for i in range(3):
    Z[i] = np.dot(X, W[i]) + B[i]
A_out = sigmoid(Z)
```

##### Vectorized Code:
```python
# Vectorized forward propagation
Z = np.matmul(X, W) + B  # Matrix multiplication using NumPy's matmul
A_out = sigmoid(Z)        # Apply the activation function element-wise
```

- **Matrix Multiplication**:
  - The **np.matmul** function is used in NumPy to multiply two matrices.
  - By using **matrix multiplication**, the for-loop can be eliminated, speeding up the computation.

#### **Explanation of Terms**:
- **X**: Input to the neural network. In vectorized form, it's a 2D array (e.g., $m \times n$, where $m$ is the number of examples and $n$ is the number of features).
- **W**: Weight matrix, a 2D array (e.g., $n \times l$, where $l$ is the number of neurons).
- **B**: Bias vector, which can be broadcasted to match the dimensions of $Z$.
- **Z**: Linear output before applying the activation function.
- **A_out**: Output after applying the activation function, typically a sigmoid or ReLU.

#### **Efficiency of Vectorization**
- **Why it's efficient**: 
  - By using matrix multiplications, the entire process of forward propagation through a neural network can be expressed in just a few lines of code.
  - This avoids the need for slow for-loops and enables efficient computation on large datasets and complex models.

- **Matrix Computation**: 
  - Operations like $Z = \text{matmul}(X, W) + B$ are highly optimized for hardware like GPUs.
  - This drastically reduces the time required for neural network training and inference, especially when using large models.

#### **Activation Functions in Neural Networks**
- **Sigmoid Function**:
  $$
  g(z) = \frac{1}{1 + e^{-z}}
  $$
  - Applied element-wise to the output matrix $Z$.
  
  In Python:
  ```python
  def sigmoid(Z):
      return 1 / (1 + np.exp(-Z))
  ```

#### **Recap**
- **Matrix multiplication** is at the core of efficient neural network implementation.
- Using **NumPy** or other libraries like **TensorFlow** and **PyTorch**, deep learning computations can be optimized to utilize hardware acceleration.
- Understanding vectorization and efficient computation methods is crucial for scaling neural networks in modern applications.

### Matrix Multiplication

#### **Dot Product Between Vectors**
- **Dot Product**: The sum of the element-wise products of two vectors.
  
  Example:
  $$
  z = (1, 2) \cdot (3, 4) = (1 \times 3) + (2 \times 4) = 3 + 8 = 11
  $$

- **General Case**:
  $$
  z = \sum_{i=1}^{n} a_i w_i
  $$
  Where:
  - $a_i$ is the \(i\)-th element of vector $a$,
  - $w_i$ is the \(i\)-th element of vector $w$,
  - The result $z$ is a scalar.

- **Transposing a Vector**:
  - To **transpose** a vector means converting a **column vector** into a **row vector** or vice versa.
  - Example of vector $a = (1, 2)^T$:
    $$
    a^T = \begin{bmatrix} 1 & 2 \end{bmatrix}
    $$

- The dot product between two vectors can also be written as:
  $$
  z = a^T \cdot w
  $$
  Where $a^T$ is the **transpose** of vector $a$, and $w$ is the other vector.

#### **Vector-Matrix Multiplication**
- **Matrix**: A 2D array (e.g., $2 \times 2$) containing rows and columns of numbers.
  
- **Vector-Matrix Multiplication**: The product of a **row vector** and a **matrix**. 

  Example: Let $a^T = (1, 2)$ and $W = \begin{bmatrix} 3 & 5 \\ 4 & 6 \end{bmatrix}$.
  - To compute the first element of $Z$, take the dot product of $a^T$ with the first column of $W$:
    $$
    Z_1 = 1 \times 3 + 2 \times 4 = 11
    $$
  - To compute the second element of $Z$, take the dot product of $a^T$ with the second column of $W$:
    $$
    Z_2 = 1 \times 5 + 2 \times 6 = 17
    $$
  - Thus, $Z = \begin{bmatrix} 11 & 17 \end{bmatrix}$.

#### **Matrix-Matrix Multiplication**
- **Matrix-Matrix Multiplication** involves multiplying two matrices by computing dot products between rows of the first matrix and columns of the second matrix.
  
- **Example**: Let $A = \begin{bmatrix} 1 & -1 \\ 2 & -2 \end{bmatrix}$ and $W = \begin{bmatrix} 3 & 5 \\ 4 & 6 \end{bmatrix}$.
  - To compute $A^T \times W$, first transpose matrix $A$:
    $$
    A^T = \begin{bmatrix} 1 & 2 \\ -1 & -2 \end{bmatrix}
    $$

  - Now, compute the elements of $Z = A^T \times W$ by taking dot products between rows of $A^T$ and columns of $W$.

  - **First row of $Z$**:
    $$
    Z_{11} = 1 \times 3 + 2 \times 4 = 11
    $$
    $$
    Z_{12} = 1 \times 5 + 2 \times 6 = 17
    $$
  
  - **Second row of $Z$**:
    $$
    Z_{21} = (-1) \times 3 + (-2) \times 4 = -3 - 8 = -11
    $$
    $$
    Z_{22} = (-1) \times 5 + (-2) \times 6 = -5 - 12 = -17
    $$

  - Thus, the resulting matrix is:
    $$
    Z = \begin{bmatrix} 11 & 17 \\ -11 & -17 \end{bmatrix}
    $$

#### **General Form of Matrix Multiplication**
- **Matrix Multiplication** involves taking the dot product of each row of the first matrix with each column of the second matrix.
  
- For matrices $A$ of size $m \times n$ and $W$ of size $n \times p$, the resulting matrix $Z$ will be of size $m \times p$.
  
- Each element $Z_{ij}$ of the resulting matrix is computed as:
  $$
  Z_{ij} = \sum_{k=1}^{n} A_{ik} \times W_{kj}
  $$
  Where:
  - $A_{ik}$ is the \(k\)-th element of the \(i\)-th row of matrix $A$,
  - $W_{kj}$ is the \(k\)-th element of the \(j\)-th column of matrix $W$.

#### **Summary**
- **Dot Product**: Sum of element-wise products of two vectors.
- **Vector-Matrix Multiplication**: Multiply a row vector by each column of a matrix.
- **Matrix-Matrix Multiplication**: Multiply each row of the first matrix by each column of the second matrix to fill the result matrix.
- Efficient matrix operations are crucial for implementing neural networks at scale.
---


# Week 2:
##
##


---
# Week 3:
##
##


---
# Week 4:
##
##

I am learning a course from Coursera. Below is the transcript from a video. Extract the key points and concepts into well-structured notes using GitHub-flavored Markdown. Use:

h3 and below for headings (topics) not bolded.
Bullet points for definitions, facts, or examples.
Use $ $ for mathematical expressions instead of `$\)` or `$$ $$`.
Use bold for keywords and key ideas.
Include code snippets or formulas where necessary.
Organize the content so I can quickly recall it by looking at the notes.
Keep the heading same as that of the video do not change the title of video



