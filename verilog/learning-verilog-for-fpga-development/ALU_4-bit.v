module ALU_4_bit(
    output [7:0] result,
    input [3:0] a,
    input [3:0] b,
    input [1:0] operator
);
    assign result = (operator== 2'b00)? 
        a + b :  (operator== 2'b01) ? 
            a * b : (operator== 2'b10) ?
                a % b : a & b;
endmodule

module ALU_4_bit_test();
    reg [3:0]a; reg [3:0]b; reg [1:0]op;
    wire [7:0]res;

    ALU_4_bit DUT_alu_4_bit(res, a, b, op);
    initial begin
        $monitor("a=%b=%d, op=%b=%d, b=%b=%d, result=%b=%d", a,a, op,op, b,b, res,res);
        a=2; b=3; op=0; #10;
        a=9; b=8; op=1; #10;
        a=10; b=3; op=2; #10;
        a=7; b=13; op=3; #10;
        $stop;
    end
endmodule
