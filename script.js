//$(".box").on("click", () => alert("Нажали на квадрат"));
let box = $(".box");
//box.click()
$(box).click(()=> {
  $(box).hide()
              .show(300)
              .fadeOut(1000)
              .delay(1000)
              .fadeIn(300)
              .delay(1000)
              .animate({
                "min-width" : "450px",
                "min-height": "450px",
                "opacity": "25%",
                
              }, 400, callback);
});

function callback() {
  $(box).css({
    "background" : "red",
    "box-shadow" : "15px 15px 25px rgba(0,0,0,0.8)",
    "opacity" : "100%"
    })
    .attr({
      "src": "somewhere.com",
      "href": "anotherlink.com",
      "cost": "150",
    })
    .addClass("one withborder")
    .html("<p>Текст в коробке</p>")
      
}
/*box[0].style.background = "red";
console.log(box);*/