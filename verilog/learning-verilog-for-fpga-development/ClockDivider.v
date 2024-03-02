module ClockDivider(
    output reg clkOut,
    input clkIn,
    input reset,
    input [31:0] ratio
);
    reg [31:0] counter;

    always @(posedge clkIn, negedge reset) begin
        if(reset == 0) begin
            counter <= 32'd0;
            clkOut = 0;
        end 
        else if(counter == ratio - 1) begin
            $display("reset-1 = counter: %d", counter);
            clkOut <= 0;
            counter <= 32'd0;
        end
        else if(counter == (ratio/2) - 1) begin
            $display("reset/2 - 1 = counter: %d", counter);
            clkOut <= 1;
            counter <= counter + 1;
        end
        else
            counter <= counter + 1;
	end

endmodule

module ClockDivider_test();
    reg fastClk, reset;
    wire slowClk;

    always #5 fastClk = ~fastClk;
    ClockDivider DUT_cd(slowClk, fastClk, reset, 32'd100_000);

    initial begin
        fastClk = 0; reset = 0; #999_996;
        reset = 1;
        #10_000_000
        $stop;
    end
endmodule 