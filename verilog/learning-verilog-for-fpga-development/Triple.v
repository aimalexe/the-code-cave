module Triple(
    output [5:0] result,
    input [3:0] a
);
    assign result = 3 * a;
endmodule

module sim_Triple();
    reg [3:0]in;
    wire [5:0]result;

    Triple DUT_triple(result, in);

    initial begin
        in = 4'd0; #10;
        in = 4'd1; #10;
        in = 4'd3; #10;
        in = 4'd5; #10;
        in = 4'd10; #10;
        in = 4'd15; #10;
        $stop;
    end

    initial 
        $monitor("input=%b, %d, result=%b,%d", in, in, result, result);

endmodule
