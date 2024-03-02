module Mux_2x1_test();
    reg a, b, sel;
    wire out;
    Mux_2x1 m(
        .Inputs({b, a}),
        .Select(sel),
        .Y(out)
    );

    initial begin 
        a=0; b=0; sel=0; #10;
        a=1; b=0; sel=0; #10;
        a=0; b=1; sel=0; #10;
        a=1; b=1; sel=0; #10;
        a=0; b=0; sel=1; #10;
        a=1; b=0; sel=1; #10;
        a=0; b=1; sel=1; #10;
        a=1; b=1; sel=1; #10;
    end
endmodule
