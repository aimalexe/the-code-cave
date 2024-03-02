module Demux_1x4_test();
    reg a;
    reg [1:0] sel;
    wire [3:0] Y;

    Demux_1x4 m(a, sel, Y);

    initial begin 
        a=0; sel=0; #10;
        a=1; sel=0; #10;
        a=0; sel=1; #10;
        a=1; sel=1; #10;
        a=0; sel=2; #10;
        a=1; sel=2; #10;
        a=0; sel=3; #10;
        a=1; sel=3; #10;
    end
endmodule
