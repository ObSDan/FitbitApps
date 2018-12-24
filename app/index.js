import document from "document";

let VTList = document.getElementById("list");

VTList.delegate =
{
  getTileInfo: function(index)
  {
    return { type: "pool", value: "Tile Content " + index, index: index };
  },
  
  configureTile: function(tile, info)
  {
    tile.getElementById("text").text = info.value;

    let touch = tile.getElementById("touch-me");
    touch.onclick = evt => { console.log("touched: info.index"); }
  }
};

// VTList.length must be set AFTER VTList.delegate
VTList.length = 100;