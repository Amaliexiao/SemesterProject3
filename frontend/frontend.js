
function setIngredientAmount() {
    let barleyValue = "50";
    let hopsValue = "90";
    let maltValue = "100";
    let wheatValue = "50";
    let yeastValue = "80";
    document.getElementById("barley")
        .setAttribute("style", "height:"+barleyValue+"%");
    document.getElementById("hops")
        .setAttribute("style", "height:"+hopsValue+"%");
    document.getElementById("malt")
        .setAttribute("style", "height:"+maltValue+"%");
    document.getElementById("wheat")
        .setAttribute("style", "height:"+wheatValue+"%");
    document.getElementById("yeast")
        .setAttribute("style", "height:"+yeastValue+"%");
}
setIngredientAmount();