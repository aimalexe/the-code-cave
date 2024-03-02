module ShiftLeft(
    output reg [7:0] D,
    input [7:0] Din,
    input parallelLoad,
    input clk
);
    always @(negedge clk, negedge parallelLoad) begin
        if(parallelLoad == 0)
            D <= Din;
        else begin
            D[0] <= 0;
            D[1] <= D[0];
            D[2] <= D[1];
            D[3] <= D[2];
            D[4] <= D[3];
            D[5] <= D[4];
            D[6] <= D[5];
            D[7] <= D[6];
        end
    end
endmodule

module ShiftLeft_test();
    reg clk, PL;
    reg [7:0] PData;
    wire [7:0] SLData;

    always #10 clk = ~clk;
    ShiftLeft DUT_SL(SLData, PData, PL, clk);
    
    initial begin
        PL = 1; #1; clk = 0; PData = 8'b0110_0101; #1;
        PL = 0; #10;
        PL = 1; #100;
    end
endmodule
