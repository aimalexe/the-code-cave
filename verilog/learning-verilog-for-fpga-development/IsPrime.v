// Implemented with one line..
module IsPrimeBoolean(
    output P,
    input c,
    input b,
    input a
);
    
	assign P = (c & a) | (~c & b);
endmodule

// Implemented with gates
module IsPrimeGates(
    output P,
    input c,
    input b,
    input a
);
    
	wire w1, w2, w3;
    not(w1, c);
    and(w2, w1, b);
    and(w3, a, c);
    or(P, w2, w3);
endmodule


// Implemented with behavior
module IsPrimeProcedural(
    output reg P,
    input c,
    input b,
    input a
);
    
	wire [2:0] cba;
    assign cba = {c, b, a};

    always @ (cba) begin
        if(cba == 3'd2 || cba == 3'd3 || cba == 3'd5 || cba == 3'd7)
            P = 1'b1;
        else
            P = 1'b0;
    end
endmodule

// test the design
module IsPrime_test();
    reg [2:0]i;
    wire o1, o2, o3;

    IsPrimeBoolean b1(o1, i[2], i[1], i[0]);
    IsPrimeProcedural b2(o2, i[2], i[1], i[0]);
    IsPrimeGates b3(o3, i[2], i[1], i[0]);

    initial begin
        #10 i = 3'b0; 
        #10 i = 3'd1;
        #10 i = 3'd2;
        #10 i = 3'd3;
        #10 i = 3'd4;
        #10 i = 3'd5;
        #10 i = 3'd6;
        #10 i = 3'd7;
    end
    
    initial begin
        $monitor("b1: c=%b, b=%b, a=%b, P=%b", i[2], i[1], i[0], o1);
        $monitor("b2: c=%b, b=%b, a=%b, P=%b", i[2], i[1], i[0], o2);
        $monitor("b3: c=%b, b=%b, a=%b, P=%b", i[2], i[1], i[0], o3);
    end

endmodule
