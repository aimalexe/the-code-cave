# Learning Verilog for FPGA Development.
### Course from linkedin learning with Eduardo Corpeño.

FPGA development requires a big switch from more typical programming processes. In order to get an FPGA-based embedded system up and running, developers must add a hardware description language to their repertoire. In this course, Eduardo Corpeño helps you learn the fundamentals of one such language: the popular and concise Verilog. Eduardo begins with the basics; he explains what a hardware description language is and some similarities to traditional programming languages. He then covers the basic syntax of Verilog, as well as how to create test bench modules to run simulations, use variables with operators as an advantage of the behavioral level of abstraction, and more. Along the way, he provides demos and programming challenges that allow you to put your new skills to the test.

### Learning objectives
1. The purpose of hardware description languages
2. The different abstraction levels of a digital system
3. The structure and syntax of a module in Verilog
4. The uses of range specification
5. If-else statements 
6. Boolean expressions
7. The nature and limitations of simulations
8. Combinational and sequential systems

## Content
- [Learning Verilog for FPGA Development.](#learning-verilog-for-fpga-development)
    - [Course from linkedin learning with Eduardo Corpeño.](#course-from-linkedin-learning-with-eduardo-corpeño)
    - [Learning objectives](#learning-objectives)
  - [Content](#content)
  - [1. Hardware Description](#1-hardware-description)
    - [1.1 Hardware description languages](#11-hardware-description-languages)
    - [1.2 Digital systems](#12-digital-systems)
    - [1.3 Levels of abstraction](#13-levels-of-abstraction)
  - [2. Basic Verilog Syntax](#2-basic-verilog-syntax)
    - [2.1 Verilog modules](#21-verilog-modules)
    - [2.2 Instantiating modules](#22-instantiating-modules)
    - [2.3 Gates and Primitives:](#23-gates-and-primitives)
    - [2.4 Registers and Wires:](#24-registers-and-wires)
    - [2.5 Range Specifications:](#25-range-specifications)
    - [2.6 Numbers and Constants:](#26-numbers-and-constants)
    - [2.7 Always Block:](#27-always-block)
    - [2.8 The if else Statements:](#28-the-if-else-statements)
    - [2.9 Case Statements](#29-case-statements)
    - [2.10 Boolean Algebra Expressions](#210-boolean-algebra-expressions)
    - [2.11 Continuous Assignments](#211-continuous-assignments)
    - [2.12 Blocking Assignments](#212-blocking-assignments)
    - [2.13 Non-blocking Assignments](#213-non-blocking-assignments)
    - [2.10 Challenge: From schematic to code](#210-challenge-from-schematic-to-code)
  - [3. Simulations](#3-simulations)
    - [3.1 Simulation Basics](#31-simulation-basics)
    - [3.2 Test Bench Modules](#32-test-bench-modules)
    - [3.3 Stimulus Variables](#33-stimulus-variables)
    - [3.4 Clock Generation](#34-clock-generation)
    - [3.5 Initial and Always Blocks](#35-initial-and-always-blocks)
    - [3.7 Timing Directives](#37-timing-directives)
    - [3.8 Display Tasks](#38-display-tasks)
    - [3.9 Challenge: Run the show](#39-challenge-run-the-show)
  - [4. Combinational Systems](#4-combinational-systems)
    - [4.1 Arithmetic and Logic operations](#41-arithmetic-and-logic-operations)
    - [4.2 Challenge: Make a 4-bit ALU](#42-challenge-make-a-4-bit-alu)
  - [5. Sequential Systems](#5-sequential-systems)
    - [5.1 Flip Flop](#51-flip-flop)
    - [5.2 Edge Sensitivity](#52-edge-sensitivity)
    - [5.3 Challenge: Make a clock divider](#53-challenge-make-a-clock-divider)
  - [6. Next Steps:](#6-next-steps)




## 1. Hardware Description
### 1.1 Hardware description languages
The first thing you need to remember is that hardware description languages are computer languages useful for describing digital circuits, not programs to be executed by a CPU. The two most widely used hardware description languages are **Verilog** and **VHDL**. The purpose of an HDL is hardware entry, just like a schematic capture tool where you enter a circuit graphically by connecting gates with wires. Later, a simulator may interpret the hardware to predict its behavior. Or, a synthesis tool may implement the design in a field programmable gate array or FPGA, or even on an application specific integrated circuit or ASIC. Now, the biggest difference between a hardware description language and a programming language is that HDL code is concurrent. This mean that there is no implicit order in an HDL piece of code because all of these gates work concurrently as hardware. Verilog is formally standardized as IEEE 1364 and it has had three versions: Verilog 95, Verilog 2001, and Verilog 2005.

### 1.2 Digital systems
In combinational systems, all signals progress forward through gates and devices with no feedback loops, that is, there is no device with an output connected back, so that it influences one of it's inputs. The most notable characteristic of combinational systems is that they have no memory and thus, no notion of time.

Sequential systems do have a notion of time, because they are triggered by a so called clock signal. This clock signal typically has a constant stable and known frequency. So, it's useful to keep track of time and to synchronize the behavior of the system. The basic building blocks of sequential systems are called flip-flops and latches which implement the memory in the system.

Useful digital systems aren't exclusively combinational or sequential as you may imagine, they combine both types of modules.

### 1.3 Levels of abstraction
In Verilog, there's a traditional distinction between the following levels. These levels are not mutually exclusive. In fact, it's very uncommon to come across code that uses one level exclusively.
- The gate level, often called structural level, is the assembly language of FPGAs. In gate level the code only contains wires and gates.
- The register-transfer level is the most widely-used level of abstraction, so much so that Verilog and VHDL code is often referred to as RTL code. The register-transfer level employs higher-level semantics than the gate level.
- The behavioral level, concentrates on the behavior of your system. The code is not always synthesizable. This level contains elements to provide quick information to the development tools, often useful in simulations for validation and verification. For example, if you want to generate a clock signal for a simulation, you don't need to specify how that signal is generated. You can simply describe the behavior of the signal.


## 2. Basic Verilog Syntax
### 2.1 Verilog modules
Modules are the building blocks of Verilog. They are similar to object constructors in traditional programming languages because you use them to create new instances of the object or module. 

Typically Verilog modules contain the following elements: 
- The hardware, that implements the internal circuitry of the `module`. 
- A list of ports, which act as inputs output or bidirectional pins. 
- The internal connections required to implement the `module`. These may be simple wires, busses or even registers. 
- Some parts of the code may include sequential lines of code and even delays. 
- And finally, since this is a modular structure, Verilog modules typically instantiate other modules that may come from some other source files in your project or from a library provided by an IP vendor. 
 
In Verilog,  the module starts with the `module` keyword, followed by the module name. Next we have the ports list, which is a list of all the terminals that connect our module to the outside. These ports can have one of three types, input output or in-out for bidirectional ports. Wires will be useful to interconnect the elements inside the module. Finally, let me tell you about a convention for writing the declaration and instantiation of modules in Verilog. The convention goes like this, in the port list, each port should occupy its own line of text. Yes, it makes the code lengthier in lines of code but it's considered more readable.

```v
module ModuleName( // list of inputs and output ports
    output O,
    input I
);
    // some instantiation and connections and logic

endmodule
```
### 2.2 Instantiating modules
Instantiating a Verilog `module` is very similar to calling a constructor method, in an object oriented programming language. 

You simply declare a new element, with the `module`'s name as it's type, and you need to specify the wires you want to connect to its ports. Now, for the port connections, you may simply specify the connections by ordered list, meaning in the order you specified when you wrote your module's code. 
```v
ModuleName instanceName(out, in, .....);
```
However, Verilog also supports port connections by name. It consists in using the names of the ports when you instantiate, without having to rely on the order in their declaration. You specify each port with a dot, followed by the port name, the name in the module source code, and then between parenthesis, you specify the wire in the containing module you want to connect to that port.
```v
ModuleName instanceName(.O(out), .I(in), .....);
```

### 2.3 Gates and Primitives:
All of the the basic n-input gates are available in Verilog as primitives. So you don't have to write modules for them. These are the OR, AND, XOR, NOR, NAND and XNOR gates. To instantiate multi-input gates, the syntax goes like this. First you must specify the gate you want, all in lowercase. Next, you may optionally name the instance. And finally, you specify the connections in a port list, enclosed by parenthesis. Where the first port is the output, and the remaining are the inputs. 
```v
gate_type [instance_name](output, input1, input2, ..., inputN);
```

Buffers and inverters are also available as primitives. And they may have any number of outputs. First, you specify the buffer type, either buf or not, with an optional instance name. And then, the veriadic order of ports is slightly different to n-input gates. The last one is the input.
```v
buffer_type [instance_name](output1, output2, ... ,input);
```

Tristate buffers are useful for implementing a bi-directional data bus because several element outputs need to be able to drive a line. But only one of them is suppose to drive that line at any given point in time. That's why a high impedance state is needed. Which is equivalent to disconnecting an output from the bus. Here we have:
```v
bufif1 [instance_name](output, input, enable);
```

There are many more built-in primitives in Verilog. Such as, more variants of the tristate buffer, Transmission gates, Transistors, Switches and pull resistors.

### 2.4 Registers and Wires:
Let me tell you the difference between theses types:
**Wires** make connections between elements. They implement nets. Otherwise known as nodes in the circuit. Since wires are simply nets. They are driven by signals. They may not always have a value. So, they may have a high impedance or High-Z state. Which is neither a zero or one. But, equivalent to a floating node. 

**Registers** on the other hand. Can also make connections between elements in the code. But, registers can be a assign values. And they hold those values until the next assignment. And finally registers can drive wires. Just a quick warning! The name register is misleading. Because Verilog registers do not necessary produce Flip flops in a FBA or ASIC implementation.

### 2.5 Range Specifications:
Range specification is a very nice feature that allows you to create collections of elements, such as wire busses, register busses, and even arrays of gates. With range specification, you may also concatenate data and refer to data partially.

The syntax is simple. First, specify the type, then the index range between square brackets with its bounds separated by a colon, and finally the name for type(wire). The wires in this bus are numbered from seven to zero, including both, so it's a nate wire bus. Seven and zero here, means that the bus has a wire you can refer to as my_wire 
[index].

```v 
type [to:from] instance_name;
```
some examples are:
```v
wire [7:0] my_wire; // 8 bit wire
reg [31:0] my_reg; //32 bit register
```
Registers may be assigned values to their individual bits, but the usual case is to assign to all bits at once.We are assigning the binary representation of the decimal number 21 to this a bit register. We are assigning all bits of myWire to myByte. 
```v
reg [3:0] a;
reg [3:0] b;
reg [7:0] myByte;
req [31, 0] bigOne;
wire[7:0] myWire;

myByte = 24;
myByte = myWire;
```
Verilog allows the concatenation of data for both the right-hand side and the left-hand side of an assignment. We can concatenate data by using the curly brackets operator. We can assign concatenated values to registers. For example, in bellow snippet, we have the value of register a with four padding ones at the higher half assigned to myByte. We may also assign the value of myByte to the concatenation of a and b with a as the most significant nibble and b as the least significant one. We can even make a compound concatenation. In below example, we are assigning something complex which we will learn later to the 32 bit register, bigOne. Some examples are in below snippets.
```v
myByte = {4'b1111, a}
{a, b} = myByte;
bigOne = {myByte, {2{b, a}}, 8'd35};

a = myByte[7:4];
myByte = bigOne[30:23];
b[3:1] = myByte[6:4];
```

### 2.6 Numbers and Constants:
Since we are designing hardware, we're interested in each bit of data. So it makes sense to get to know the logic states a singe wire may exhibit. These states are zero which usually means a logical false state, One meaning true, Z meaning a high impedance state. This happens when we have an undriven or floating wire. Now, this is not an unwanted state. Remember that tri-state buffers may output this state to allow other buffers to drive a shared wire. And lastly, we have x which may mean either an unknown state, for example, a registered value on startup or it may mean a don't care condition where the wire's value has no consequence on my logic.

With these individual states, we may build multi-bit values. These are treated as either arrays of bits or as integer values. The syntax for integer constants in Verilog is the following. 
```v
integer: [size'][s][base]number;
```
Despite being optional, it's important to specify the size and bits of your data because you don't want to rely on the compiler's assumptions. This field is terminated with the single quote or apostrophe character. The default size in bits is usually 32 but again, you don't want to rely on this. Next, you may optionally specify if you want a twos complement sign number representation. The default is unsigned. Next comes the base which is represented by the letters b for binary, o for octal, h for hexadecimal or d for decimal which is the default. Finally, you get to enter the number. This is the only mandatory detail. Let's see some examples:
```v
4'b1101; //12
8'b1000; //0000 1000 = 8.
32'd53_231; // decimal number, digits can be separated with . , or _
4'shf; // 4 bit sign hexadecimal with value f = -1 in decimal.
16'h1d_f8; // A hexal number
4'd1_500; // It's a four-bit representation of the unsigned decimal number 1,500 but 1,500 requires at least 11 bits. This does not result in an error, just a warning that the number gets truncated to its lower four bits which is 12.
12'o337; // An Octal number
27; // A decimal number.
```

### 2.7 Always Block:
Always blocks are special constructs that enable procedural blocks of code. Always blocks are evaluated every time some specified condition is met. The syntax for always blocks is simple. Just type always at, followed by a sensitivity list. Registers or signals present in this comma-separated list will be monitored for changes. If any of the variables change, the procedural block is evaluated. As with most statements, if the always block applies to more than one line of code, the block must be enclosed between the begin and end keywords.
```v
always @ ([Sensitivity List]) begin 
    // Some multi line code for always to check.
end
```

For Example of `always` [View Code Here](./Mux_2x1.v)

### 2.8 The if else Statements:
If the expression evaluates to true (i.e. any non-zero value), all statements within that particular if block will be executed. If it evaluates to false (zero or 'x' or 'z'), the statements inside if block will not be executed. If there is an else statement and expression is false then statements within the else block will be executed. Enclose multi line in begin and end block while single line statements fo not need any begin-end block.
```v
if(expression) 
    begin
        // Multi-line statements.
    end 
else if(expression)
    begin
        // Multi-line statements.
    end 
.
.
.
else
    // Single-line statement.
```
For Example of `if else` [View Code Here](./Mux_2x1.v)

### 2.9 Case Statements
The syntax is very simple, use the keyword case with the expression to evaluate for cases between parentheses. This expression, by the way, may be a concatenation of several registers or wires. In this case, I'm observing sel, and notice how I'm defining all possible values of this two-bit input. For the cases, just type the value for each case, colon, and then the code you want for that case. What's more, if you want to enter more than one line of code, make a procedural block with the begin and end keywords. By the way, Verilog supports a default case, meaning any other value.
```v
case(expression)
    condition1: // Single-line statement.
    condition2: 
    begin
        // Multi-line statements.
    end
    .
    .
    .
    conditionN:
    begin
        // Multi-line statements.
    end
    default: // Single-line statement.
endcase
```
For Example of `case` [View Code Here](./Demux_1x4.v)

### 2.10 Boolean Algebra Expressions
Verilog implements the usual bitwise operators implemented in the syntax of C and java. The AND operator is the ampersand character. For OR, we use the vertical bar character.XOR is represented with the caret character, and the NOT operator is the tilde character, and it's used as a prefix operator.
```v
a & b // AND
a | b // OR
a ^ b // XOR
~a // NOT
```
These expressions can be used either in a continuous assignment using the assigned keyword or, in blocking or non-blocking assignments, which can either go inside `initial` blocks, or Always blocks.

### 2.11 Continuous Assignments
Verilog supports three very different types of assignments. 
First we have the continuous assignment and this is useful to hard wire a signal to a Boolean expression at all times. It uses the assign keyword and the equal operator.
```v
assign a = b;
```

There's a nice rule of thumb you may want to follow. Use blocking assignments for combinational logic, and non-blocking assignments for sequential logic.

### 2.12 Blocking Assignments
We also have the blocking assignment, which operates sequentially in procedural blogs. It uses the equal operator.
```v
a = b;
```
for example see:
```v
module logic(
    input a,
    input b,
    input c,
    output reg z
);
    reg t1, t2;
    always @ (a, b, c) begin
        t1 = b & c;
        t2 = a & ~b;
        z = t1 | t2; // z = (b & c) | (a & ~b);
    end
endmodule 
```
Blocking means that any further line of code will be evaluated after this line is evaluated. It has no particular effect on timing. It simply means that the expressions are built in the sequence of the code. It's only showing the trajectory of the signals in the circuit. Time is not blocked - the compiler is. Conversely, non-blocking means that all assignments work concurrently, not sequentially. The module above a simple combinational circuit with two and gates and one or gate.

### 2.13 Non-blocking Assignments
And finally, there's the non-blocking assignment. This works concurrently within procedural blocks. It uses the left arrow operator.
```v
a <=b;
```
```v
module logic(
    input a,
    input clk,
    output reg z
);
    reg temp;
    always @ (posedge clk) begin
        temp <= clk;
        z <= temp;
    end
endmodule 
```
Let's look at the code. Non blocking assignments are concurrent. So their order is not relevant. They will all be evaluated at the same time. So a D flip flop for the temp register will be created and it will receive the value of I at the time of the positive edge in the Clock Line. Concurrently another D flip flop for the output O will also be created and it will receive the value of temp at the time of the positive edge.
It turns out that sequential systems such as state machines, counters or ship registers, use non blocking assignments virtually all the time. On the other hand, combinational systems almost always assume a sequence of data flow in assignments, so blocking assignments are used.

### 2.10 Challenge: From schematic to code
The challenge is to write a Verilog `module` that implements the circuit. The circuit's output is a logical 1, or true, when the binary number formed by its inputs, c, b, and a, is a prime number. Consider c as the most significant bit, and a as the least significant bit. You can [View Solution Here](./IsPrime.v)


## 3. Simulations
### 3.1 Simulation Basics
*The purpose of a simulation is to verify the behavior of your circuit or modules*, and it's one of the first automated means of debugging in the development process. A simulation requires a so-called *test bench module*, which is a regular Verilog `module` where you get to run the show. Inside a test bench module, the `module` or device under test, *DUT for short, must be instantiated at least once*. You must *provide a sequence of input signals*, and the simulator takes care of the rest, showing you the results in several ways, including a waveform viewer, step-by-step simulation, and a console interface.

### 3.2 Test Bench Modules
Test bench modules are in the same class of descriptive modules, but they contain a sequence of events which change the inputs you feed into the device under test. So,
- there's no need to define input or output words in a test bench `module`.
- inside the `module` the device under tests inputs are driven by registers and the outputs drive wires. 
- the sequence of value assignment are written in an `initial` block. `initial` means this code must evaluate once starting at time equals 0. Several `initial` blocks operate concurrently, just like anything else in Verilog. 
- the sequence is usually enclosed by the `begin` and `end` statements.
- timing is usually specified with the`#` character, for example, `#10` means wait for 10 time units.
The basic structure of test bench `module` will be:
```v
module sim_DUT();
    // reg and wires declaration
    // DUT instantiation

    initial begin 
        // sequence of assignments
        #10; //delay everywhere
        $stop; //or $finish;
    end
endmodule
```

### 3.3 Stimulus Variables
A test bench needs to have as many registers or variables as inputs in the DUT. And as many wires as outputs in it. Take a minute to verify that the connections are correct in the instantiation of DUT.

### 3.4 Clock Generation
This is usually a square wave that changes between zero and one periodically. First, you declare a register for this signal. It's almost always named lowercase C-L-K. Then, in another part of the code, you must initialize this register to some value. Then finally, you need to assign to this clock variable, the complement of its current value.
```v
reg clk;
initial clk = 0;
always #5 clk = ~clk;
```

### 3.5 Initial and Always Blocks
Every line of code and every block of code work concurrently. This includes gates and module instances, registers and wires, but more importantly, all `initial` blocks work concurrently, so you may include several of these in a single module. `always` blocks also operate concurrently with everything else. The order of these blocks doesn't change the behavior of the simulation or the module. 

One of the most important details about `initial` blocks is that they are not synthesizable. This means that the code inside `initial` blocks will not make it to an FPGA because there's no way for a circuit to know that it has just powered on.

An always block may not literally operate always, but just once. Always blocks operate whenever anything in their sensitivity list changes. This may be any signal, or a positive or negative edge in a signal. Always blocks implement repetitive behaviors, for example looping through several stages in a sequential system. So an always block may help you implement loops. this is not what `for` and `while` loops are for!

Procedural blocks, the ones enclosed by begin and end, may have sequential parts, but this sequence only refers to the auditor of the assignments and delays expressed with the pound operator.

### 3.7 Timing Directives
As most Compiled Programming languages, Verilog support Compiler Directives, many of which you may already be familiar with if you are a C or C++ programmer.  A unique detail in Verilog is that directives start with the grave accent character '`', which is not so common in other languages.
- we have the Define directive for defining symbols, so that the compiler replaces the symbols for their values later in the code. Here we are defining the symbol size to equal number four.
  ```v
  `define SIZE 4
  ```
- Define directives are also useful for conditional inclusion of code with ifdef directives. Here we have a block that would be included if the symbol x is defined. 
  ```v
    `ifdef X
        // something goes here...
    `endif
  ```
- We can also include entire files of code libraries with the Include directive.
  ```v
    `include "file.v"
  ```
- The **Timescale directive** indicates the units of time your simulation will use. So, whenever you enter a delay of, say five units, then a delay of five of these units of time will be simulated. There are two times specified in a timescale directive, 
  - the **time unit** is the one used for delays.
  - the **precision** is the length of each time step for the simulation. This is the length at which times and delays must be rounded. So it must be equal or shorter than the time unit.
  
   Once again, please keep in mind that all of these timescale directives apply only to simulation test bench modules, not to FPGA synthesis projects. Here's a timescale of one *time_unit* with *precision_units* of precision.
  ```v
  // `timescale time_units/precision_units

  `timescale 1ns/100ps
  `timescale 1us/10ns
  `timescale 1ns/1ns
  ```

### 3.8 Display Tasks
Verilog supports two very convenient Display Tasks. These are display and monitor. The difference is very subtle. Display sends formatted text to the console output once while monitor sends the same text whenever any of the variables you are displaying changes.Tthese tasks work pretty much like the `printf` family of functions(C / C++). They simply output values to the console with a format specified by their first argument. The remaining arguments are the variables you want to display. So if you want to know a value at one specific known point in the simulation, go ahead and use display. If you want to know when a variable changes in runtime, then use monitor.
```v
$monitor("formatted string: %d, %b, %h, %o, %c", decimal, binary, hexal, octal, char);
$display("formatted string: %d, %b, %h, %o, %c", decimal, binary, hexal, octal, char);
```

### 3.9 Challenge: Run the show
Your task is to write a very Verilog Testbench module, that tests a module named 'triple.' It calculates the triple of the number in its input a. The triple is found in its output named result. You must display the results for input values 0, 1, 3, 5, 10, and 15. Please show the results in both the Tcl Console, and the waveform viewer. For your implementation, keep in mind: You may use delays to keep the input values stable for some time. You must use at least one `initial` statement, with a begin end block. To display the value in the Tcl Console, you must use either the monitor task or the display task. Your simulation must end at some point. So, don't forget the stop task.

You can [View Solution Here](./Triple.v)

## 4. Combinational Systems
### 4.1 Arithmetic and Logic operations
Verilog resembles c and operators are not an exception to this.
  - In Verilog, you can perform arithmetic. Addition with the plus operator, subtraction with minus, multiplication with asterisk, integer division or quotient with a slash, and division remainder, or modulo, with the percentage character. 
    ```v
    a + b;
    a - b;
    a * b;
    a / b;
    a % b;
    ```
- Verilog implements the same logical operators of c. These are "and" with a double "ampersand", "or", with a double "vertical bar", and "not" with an "exclamation" sign.
    ```v
    if((a>b) && (b<c)) ...
    if((a>b) || (b<c)) ...
    if(!(a>b)) ...
    ```

- The same goes for bitwise logic operators. You can perform a bitwise "AND" operation, with the "ampersand" operator, "OR", with the "vertical bar", "XOR" with a "carat", and "NOR" with the "tilde" operator.
    ```v
    c = a & b;
    c = a | b;
    c = a ^ b;
    c = ~ a;
    ```
- Finally, we have the conditional operator, which is there in virtually every programming language. It's a shorthand for an "if" statement, that results in an assignment for one of two values to the same variable. For example, for our three registers, a, b and c, this means, if a equals b, then assign 10 to c. Otherwise, assign 9 to c.
  ```v
  c = (a==b) ? 4'd10 : 4'd9;
  ```

### 4.2 Challenge: Make a 4-bit ALU
You must write a Verilog module for a 4-bit arithmetic logic unit. So the operations you must implement are:
- When the operation input is Zero, Addition
- One, Multiplication.
- Two, Modulo.
- And three, bitwise AND.

You can [View Solution Here](./ALU_4-bit.v)

## 5. Sequential Systems
### 5.1 Flip Flop
- Flip-Flops are the building blocks of **sequential systems**, so if your system has a clock input to keep track of time, it must have Flip-Flops somewhere. 
- Flip-Flops are made of logic gates.
- They may or may not have a clock input, that is to say, they may be **synchronous**, or **asynchronous**.
- Synchronous Flip-Flops may be triggered by the logic level, or state in their clock input, in which case they are referred to as **latches**. Or they may be triggered by the edges or transitions in the clock line, in which case they are known as **registers**. 
- There are several types of Flip-Flops which vary in their logic. For example, there are **SR**, **D**, **JK**, and **T** Flip-Flops.

### 5.2 Edge Sensitivity
A very powerful construct in Verilog is the edge sensitivity in an always block. The negative edge (`negedge`) of a signal is the instant when it goes from one to zero. Conversely, the positive(`posedge`), or rising edge is the instant when the signal goes from zero to one.

- You may use negedge or posedge inside a sensitivity list in an always block, so it may appear as a single event in the sensitivity list.
    ```v
    always @(negedge clk)
    ```
- You may also combine several signal edges in a sensitivity list. In this example, the always block is sensitive to the positive edge of a clock line, and to the negative edge of a reset line.
  ```v
  always @(posedge clk, negedge reset)
  ```
- Although you may combine edges with regular variables in a sensitivity list, this is not synthesizable, meaning that you may simulate, but you can't get it on an FBGA. This example is sensitive to the positive edge of the clock line and to changes in the states of the presets and clear inputs. You should avoid mixing edge and level sensitivity.
  ```v
  always @(posedge clk, preset, clear)
  ```
- Moreover, you should have a very good reason to attempt creating a circuit that sensitive to both edges of the same signal. Although this makes sense and will simulate, FPGAs are usually equipped with flip flops that are sensitive to only one edge. This commonly results in a synthesis error. For those reasons you should avoid this, and if you really really need your circuit to respond to both edges of the same signal, you may always write two identical always blocks with opposite edge sensitivity. This will probably take twice the circuitry though.
  ```v
  always @(posedge clk, negedge clk)
  ```

See [Example Here](./ShiftLeft.v)

### 5.3 Challenge: Make a clock divider
You must write a Verilog `module` for a clock frequency divider. You can do this by receiving the fast clock signal. Count cycles. And output a slower signal based on this count. This is the declaration for the clock divider. The input and output signals are called clock in and clock_out respectively. There's a reset input which is usually active low. So you may initialize the internal registers when it's line goes low. And finally, there's a ratio input which is a 32 bit number. This input will be used to let the divider know the ratio at which you want to reduce the frequency. For your implementation keep in mind that you are expected to use a counter. Which is a multi-bit register that gets incremented or reset in the code. In your test bench make sure that you're using the right timescale.

## 6. Next Steps:
- Simulate Complex Systems
- FPGA embedded systems
- VHDL
- System Verilog
- [edaplayground.com](https://www.edaplayground.com)
- [labsland.com](https://labsland.com/en/)
- [Completion Certificate](https://www.linkedin.com/learning/certificates/27f78deb11248d345eb8629acdfb1fb1993db82636439fc939b93220ea7e4586)

<p align='center'>The End.<p>