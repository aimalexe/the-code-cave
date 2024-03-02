module Mux_2x1(
    input [1:0] Inputs,
    input Select,
    output reg Y
);
    always @ (Select, Inputs) 
    begin
        if(Select == 0)
            Y = Inputs[0];
        else
            Y = Inputs[1];
    end
endmodule
