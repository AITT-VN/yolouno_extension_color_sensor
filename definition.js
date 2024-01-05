const TCS34725ColorBlock = "#ae00ae";

Blockly.Blocks["uno_tcs34725_read"] = {
  init: function () {
    this.jsonInit({
      colour: TCS34725ColorBlock,
      tooltip: "",
      message0: "cảm biến màu sắc đọc giá trị %1",
      args0: [
        {
          type: "field_dropdown",
          name: "RGB",
          options: [
            ["RED", "r"],
            ["GREEN", "g"],
            ["BLUE", "b"],
          ],
        }
      ],
      output: "Number",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["uno_tcs34725_detect"] = {
  init: function () {
    this.jsonInit({
      colour: TCS34725ColorBlock,
      tooltip: "",
      message0: "cảm biến màu sắc phát hiện màu %1",
      args0: [
        {
          type: "field_dropdown",
          name: "color",
          options: [
            ["trắng", "w"],
            ["đen", "d"],
            ["đỏ", "r"],
            ["xanh lá (green)", "g"],
            ["xanh dương (blue)", "b"],
            ["vàng", "y"]
          ],
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

Blockly.Python["uno_tcs34725_read"] = function (block) {
  var RGB = block.getFieldValue("RGB");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_tcs34725'] = 'from tcs34725 import *';
  Blockly.Python.definitions_['init_tcs34725'] = 'tcs34725 = TCS34725()';
  var code = "tcs34725.read('" + RGB + "')";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["uno_tcs34725_detect"] = function (block) {
  var color = block.getFieldValue("color");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_tcs34725'] = 'from tcs34725 import *';
  Blockly.Python.definitions_['init_tcs34725'] = 'tcs34725 = TCS34725()';
  var code = "tcs34725.detect('" + color + "')";
  return [code, Blockly.Python.ORDER_NONE];
};