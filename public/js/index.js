var range = document.getElementById('jokesRange');
var lable= document.getElementById("jokesRangeLabel");
lable.innerHTML = "Limit: " + range.value;
range.oninput = ()=>{
    console.log(lable);
    var str = lable.innerHTML = "Limit: " + range.value;
};
