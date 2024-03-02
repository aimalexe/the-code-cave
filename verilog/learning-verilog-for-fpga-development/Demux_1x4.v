module Demux_1x4(
    input Input,
    input [1:0] Select,
    output reg [3:0] Outputs
);

    always @(Select, Input)
        case(Select)
            2'b00 : Outputs = {3'b0, Input};
            2'b01 : Outputs = {2'b0, Input, 1'b0};
            2'b10 : Outputs = {1'b0, Input, 2'b0};
            2'b11 : Outputs = {Input, 3'b0};
        endcase
endmodule
