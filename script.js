let paint="";

document.addEventListener("DOMContentLoaded", init);

async function init() {
    console.log("init");
    let response = await fetch("white_shoes-01.svg");
    let mySvgData = await response.text();
    document.querySelector(".SVGContainer").innerHTML = mySvgData;
    startManipulatingTheSvg();
}

function startManipulatingTheSvg() {
    console.log("startManipulatingTheSvg");
    document.querySelector("#pink").addEventListener("click", clickPink);
    document.querySelector("#blue").addEventListener("click", clickBlue);
    document.querySelector("#green").addEventListener("click", clickGreen);
    document.querySelector("#yellow").addEventListener("click", clickYellow);
    document.querySelector("#orange").addEventListener("click", clickOrange);
    document.querySelector("#purple").addEventListener("click", clickPurple);
    document.querySelector("#black").addEventListener("click", clickBlack);
    document.querySelector("#white").addEventListener("click", clickWhite);
    document.querySelector("#grey").addEventListener("click", clickGrey);
    document.querySelector("#Layer_1").classList.add("hover");
    document.querySelector("#Layer_2").classList.add("hover");
    document.querySelector("#Layer_3").classList.add("hover");
    document.querySelector("#Layer_4").classList.add("hover");
    document.querySelector("#Layer_5").classList.add("hover");
    document.querySelector("#Layer_6").classList.add("hover");
    document.querySelector("#Layer_7").classList.add("hover");
    document.querySelector("#Layer_8").classList.add("hover");
    document.querySelector("#Layer_9").classList.add("hover");
    document.querySelector("#Layer_10").classList.add("hover");
}

function clickPink() {
    console.log("clickPink");
    document.querySelector("#pink").removeEventListener("click", clickPink);
    document.querySelector("#pink").classList.add("outline");
    document.querySelector("#blue").classList.remove("outline");
    document.querySelector("#green").classList.remove("outline");
    document.querySelector("#yellow").classList.remove("outline");
    document.querySelector("#orange").classList.remove("outline");
    document.querySelector("#purple").classList.remove("outline");
    document.querySelector("#black").classList.remove("outline");
    document.querySelector("#white").classList.remove("outline");
    document.querySelector("#grey").classList.remove("outline");
    paint = "#E779FD";
    document.querySelector("#Layer_1").addEventListener("click", clickLayer1);
    document.querySelector("#Layer_2").addEventListener("click", clickLayer2);
    document.querySelector("#Layer_3").addEventListener("click", clickLayer3);
    document.querySelector("#Layer_4").addEventListener("click", clickLayer4);
    document.querySelector("#Layer_5").addEventListener("click", clickLayer5);
    document.querySelector("#Layer_6").addEventListener("click", clickLayer6);
    document.querySelector("#Layer_7").addEventListener("click", clickLayer7);
    document.querySelector("#Layer_8").addEventListener("click", clickLayer8);
    document.querySelector("#Layer_9").addEventListener("click", clickLayer9);
    document.querySelector("#Layer_10").addEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").addEventListener("click", clickLayer11);
    startManipulatingTheSvg();
}

function clickBlue() {
    console.log("clickBlue");
    document.querySelector("#blue").removeEventListener("click", clickBlue);
    document.querySelector("#blue").classList.add("outline");
    document.querySelector("#pink").classList.remove("outline");
    document.querySelector("#green").classList.remove("outline");
    document.querySelector("#yellow").classList.remove("outline");
    document.querySelector("#orange").classList.remove("outline");
    document.querySelector("#purple").classList.remove("outline");
    document.querySelector("#black").classList.remove("outline");
    document.querySelector("#white").classList.remove("outline");
    document.querySelector("#grey").classList.remove("outline");
    paint = "#0298DB";
    document.querySelector("#Layer_1").addEventListener("click", clickLayer1);
    document.querySelector("#Layer_2").addEventListener("click", clickLayer2);
    document.querySelector("#Layer_3").addEventListener("click", clickLayer3);
    document.querySelector("#Layer_4").addEventListener("click", clickLayer4);
    document.querySelector("#Layer_5").addEventListener("click", clickLayer5);
    document.querySelector("#Layer_6").addEventListener("click", clickLayer6);
    document.querySelector("#Layer_7").addEventListener("click", clickLayer7);
    document.querySelector("#Layer_8").addEventListener("click", clickLayer8);
    document.querySelector("#Layer_9").addEventListener("click", clickLayer9);
    document.querySelector("#Layer_10").addEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").addEventListener("click", clickLayer11);
    startManipulatingTheSvg();
}

function clickGreen() {
    console.log("clickGreen");
    document.querySelector("#green").removeEventListener("click", clickGreen);
    document.querySelector("#green").classList.add("outline");
    document.querySelector("#pink").classList.remove("outline");
    document.querySelector("#blue").classList.remove("outline");
    document.querySelector("#yellow").classList.remove("outline");
    document.querySelector("#orange").classList.remove("outline");
    document.querySelector("#purple").classList.remove("outline");
    document.querySelector("#black").classList.remove("outline");
    document.querySelector("#white").classList.remove("outline");
    document.querySelector("#grey").classList.remove("outline");
    paint = "#9EF58B";
    document.querySelector("#Layer_1").addEventListener("click", clickLayer1);
    document.querySelector("#Layer_2").addEventListener("click", clickLayer2);
    document.querySelector("#Layer_3").addEventListener("click", clickLayer3);
    document.querySelector("#Layer_4").addEventListener("click", clickLayer4);
    document.querySelector("#Layer_5").addEventListener("click", clickLayer5);
    document.querySelector("#Layer_6").addEventListener("click", clickLayer6);
    document.querySelector("#Layer_7").addEventListener("click", clickLayer7);
    document.querySelector("#Layer_8").addEventListener("click", clickLayer8);
    document.querySelector("#Layer_9").addEventListener("click", clickLayer9);
    document.querySelector("#Layer_10").addEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").addEventListener("click", clickLayer11);
    startManipulatingTheSvg();
}

function clickYellow() {
    console.log("clickYellow");
    document.querySelector("#yellow").removeEventListener("click", clickYellow);
    document.querySelector("#yellow").classList.add("outline");
    document.querySelector("#pink").classList.remove("outline");
    document.querySelector("#blue").classList.remove("outline");
    document.querySelector("#green").classList.remove("outline");
    document.querySelector("#orange").classList.remove("outline");
    document.querySelector("#purple").classList.remove("outline");
    document.querySelector("#black").classList.remove("outline");
    document.querySelector("#white").classList.remove("outline");
    document.querySelector("#grey").classList.remove("outline");
    paint = "#F5F47B";
    document.querySelector("#Layer_1").addEventListener("click", clickLayer1);
    document.querySelector("#Layer_2").addEventListener("click", clickLayer2);
    document.querySelector("#Layer_3").addEventListener("click", clickLayer3);
    document.querySelector("#Layer_4").addEventListener("click", clickLayer4);
    document.querySelector("#Layer_5").addEventListener("click", clickLayer5);
    document.querySelector("#Layer_6").addEventListener("click", clickLayer6);
    document.querySelector("#Layer_7").addEventListener("click", clickLayer7);
    document.querySelector("#Layer_8").addEventListener("click", clickLayer8);
    document.querySelector("#Layer_9").addEventListener("click", clickLayer9);
    document.querySelector("#Layer_10").addEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").addEventListener("click", clickLayer11);
    startManipulatingTheSvg();
}

function clickOrange() {
    console.log("clickOrange");
    document.querySelector("#orange").removeEventListener("click", clickOrange);
    document.querySelector("#orange").classList.add("outline");
    document.querySelector("#yellow").classList.remove("outline");
    document.querySelector("#pink").classList.remove("outline");
    document.querySelector("#blue").classList.remove("outline");
    document.querySelector("#green").classList.remove("outline");
    document.querySelector("#purple").classList.remove("outline");
    document.querySelector("#black").classList.remove("outline");
    document.querySelector("#white").classList.remove("outline");
    document.querySelector("#grey").classList.remove("outline");
    paint = "#F6A563";
    document.querySelector("#Layer_1").addEventListener("click", clickLayer1);
    document.querySelector("#Layer_2").addEventListener("click", clickLayer2);
    document.querySelector("#Layer_3").addEventListener("click", clickLayer3);
    document.querySelector("#Layer_4").addEventListener("click", clickLayer4);
    document.querySelector("#Layer_5").addEventListener("click", clickLayer5);
    document.querySelector("#Layer_6").addEventListener("click", clickLayer6);
    document.querySelector("#Layer_7").addEventListener("click", clickLayer7);
    document.querySelector("#Layer_8").addEventListener("click", clickLayer8);
    document.querySelector("#Layer_9").addEventListener("click", clickLayer9);
    document.querySelector("#Layer_10").addEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").addEventListener("click", clickLayer11);
    startManipulatingTheSvg();
}

function clickPurple() {
    console.log("clickPurple");
    document.querySelector("#purple").removeEventListener("click", clickPurple);
    document.querySelector("#purple").classList.add("outline");
    document.querySelector("#yellow").classList.remove("outline");
    document.querySelector("#pink").classList.remove("outline");
    document.querySelector("#blue").classList.remove("outline");
    document.querySelector("#green").classList.remove("outline");
    document.querySelector("#orange").classList.remove("outline");
    document.querySelector("#black").classList.remove("outline");
    document.querySelector("#white").classList.remove("outline");
    document.querySelector("#grey").classList.remove("outline");
    paint = "#B167DB";
    document.querySelector("#Layer_1").addEventListener("click", clickLayer1);
    document.querySelector("#Layer_2").addEventListener("click", clickLayer2);
    document.querySelector("#Layer_3").addEventListener("click", clickLayer3);
    document.querySelector("#Layer_4").addEventListener("click", clickLayer4);
    document.querySelector("#Layer_5").addEventListener("click", clickLayer5);
    document.querySelector("#Layer_6").addEventListener("click", clickLayer6);
    document.querySelector("#Layer_7").addEventListener("click", clickLayer7);
    document.querySelector("#Layer_8").addEventListener("click", clickLayer8);
    document.querySelector("#Layer_9").addEventListener("click", clickLayer9);
    document.querySelector("#Layer_10").addEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").addEventListener("click", clickLayer11);
    startManipulatingTheSvg();
}

function clickBlack() {
    console.log("clickBlack");
    document.querySelector("#black").removeEventListener("click", clickBlack);
    document.querySelector("#black").classList.add("outline");
    document.querySelector("#yellow").classList.remove("outline");
    document.querySelector("#pink").classList.remove("outline");
    document.querySelector("#blue").classList.remove("outline");
    document.querySelector("#green").classList.remove("outline");
    document.querySelector("#orange").classList.remove("outline");
    document.querySelector("#purple").classList.remove("outline");
    document.querySelector("#white").classList.remove("outline");
    document.querySelector("#grey").classList.remove("outline");
    paint = "#32352F";
    document.querySelector("#Layer_1").addEventListener("click", clickLayer1);
    document.querySelector("#Layer_2").addEventListener("click", clickLayer2);
    document.querySelector("#Layer_3").addEventListener("click", clickLayer3);
    document.querySelector("#Layer_4").addEventListener("click", clickLayer4);
    document.querySelector("#Layer_5").addEventListener("click", clickLayer5);
    document.querySelector("#Layer_6").addEventListener("click", clickLayer6);
    document.querySelector("#Layer_7").addEventListener("click", clickLayer7);
    document.querySelector("#Layer_8").addEventListener("click", clickLayer8);
    document.querySelector("#Layer_9").addEventListener("click", clickLayer9);
    document.querySelector("#Layer_10").addEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").addEventListener("click", clickLayer11);
    startManipulatingTheSvg();
}

function clickWhite() {
    console.log("clickWhite");
    document.querySelector("#white").removeEventListener("click", clickWhite);
    document.querySelector("#white").classList.add("outline");
    document.querySelector("#yellow").classList.remove("outline");
    document.querySelector("#pink").classList.remove("outline");
    document.querySelector("#blue").classList.remove("outline");
    document.querySelector("#green").classList.remove("outline");
    document.querySelector("#orange").classList.remove("outline");
    document.querySelector("#purple").classList.remove("outline");
    document.querySelector("#black").classList.remove("outline");
    document.querySelector("#grey").classList.remove("outline");
    paint = "white";
    document.querySelector("#Layer_1").addEventListener("click", clickLayer1);
    document.querySelector("#Layer_2").addEventListener("click", clickLayer2);
    document.querySelector("#Layer_3").addEventListener("click", clickLayer3);
    document.querySelector("#Layer_4").addEventListener("click", clickLayer4);
    document.querySelector("#Layer_5").addEventListener("click", clickLayer5);
    document.querySelector("#Layer_6").addEventListener("click", clickLayer6);
    document.querySelector("#Layer_7").addEventListener("click", clickLayer7);
    document.querySelector("#Layer_8").addEventListener("click", clickLayer8);
    document.querySelector("#Layer_9").addEventListener("click", clickLayer9);
    document.querySelector("#Layer_10").addEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").addEventListener("click", clickLayer11);
    startManipulatingTheSvg();
}

function clickGrey() {
    console.log("clickGrey");
    document.querySelector("#grey").removeEventListener("click", clickGrey);
    document.querySelector("#grey").classList.add("outline");
    document.querySelector("#yellow").classList.remove("outline");
    document.querySelector("#pink").classList.remove("outline");
    document.querySelector("#blue").classList.remove("outline");
    document.querySelector("#green").classList.remove("outline");
    document.querySelector("#orange").classList.remove("outline");
    document.querySelector("#purple").classList.remove("outline");
    document.querySelector("#black").classList.remove("outline");
    document.querySelector("#white").classList.remove("outline");
    paint = "grey";
    document.querySelector("#Layer_1").addEventListener("click", clickLayer1);
    document.querySelector("#Layer_2").addEventListener("click", clickLayer2);
    document.querySelector("#Layer_3").addEventListener("click", clickLayer3);
    document.querySelector("#Layer_4").addEventListener("click", clickLayer4);
    document.querySelector("#Layer_5").addEventListener("click", clickLayer5);
    document.querySelector("#Layer_6").addEventListener("click", clickLayer6);
    document.querySelector("#Layer_7").addEventListener("click", clickLayer7);
    document.querySelector("#Layer_8").addEventListener("click", clickLayer8);
    document.querySelector("#Layer_9").addEventListener("click", clickLayer9);
    document.querySelector("#Layer_10").addEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").addEventListener("click", clickLayer11);
    startManipulatingTheSvg();
}

function clickLayer1() {
    console.log("clickLayer1");
    // document.querySelector("#Layer_1").removeEventListener("click", clickLayer1);
    // document.querySelector("#Layer_2").removeEventListener("click", clickLayer2);
    // document.querySelector("#Layer_3").removeEventListener("click", clickLayer3);
    // document.querySelector("#Layer_4").removeEventListener("click", clickLayer4);
    // document.querySelector("#Layer_5").removeEventListener("click", clickLayer5);
    // document.querySelector("#Layer_6").removeEventListener("click", clickLayer6);
    // document.querySelector("#Layer_7").removeEventListener("click", clickLayer7);
    // document.querySelector("#Layer_8").removeEventListener("click", clickLayer8);
    // document.querySelector("#Layer_9").removeEventListener("click", clickLayer9);
    // document.querySelector("#Layer_10").removeEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").removeEventListener("click", clickLayer11);
    document.querySelector("#Layer_1").setAttribute("fill", paint);
    startManipulatingTheSvg();
}

function clickLayer2() {
    console.log("clickLayer2");
    // document.querySelector("#Layer_1").removeEventListener("click", clickLayer1);
    // document.querySelector("#Layer_2").removeEventListener("click", clickLayer2);
    // document.querySelector("#Layer_3").removeEventListener("click", clickLayer3);
    // document.querySelector("#Layer_4").removeEventListener("click", clickLayer4);
    // document.querySelector("#Layer_5").removeEventListener("click", clickLayer5);
    // document.querySelector("#Layer_6").removeEventListener("click", clickLayer6);
    // document.querySelector("#Layer_7").removeEventListener("click", clickLayer7);
    // document.querySelector("#Layer_8").removeEventListener("click", clickLayer8);
    // document.querySelector("#Layer_9").removeEventListener("click", clickLayer9);
    // document.querySelector("#Layer_10").removeEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").removeEventListener("click", clickLayer11);
    document.querySelector("#Layer_2").setAttribute("fill", paint);
    startManipulatingTheSvg();
}

function clickLayer3() {
    console.log("clickLayer3");
    // document.querySelector("#Layer_1").removeEventListener("click", clickLayer1);
    // document.querySelector("#Layer_2").removeEventListener("click", clickLayer2);
    // document.querySelector("#Layer_3").removeEventListener("click", clickLayer3);
    // document.querySelector("#Layer_4").removeEventListener("click", clickLayer4);
    // document.querySelector("#Layer_5").removeEventListener("click", clickLayer5);
    // document.querySelector("#Layer_6").removeEventListener("click", clickLayer6);
    // document.querySelector("#Layer_7").removeEventListener("click", clickLayer7);
    // document.querySelector("#Layer_8").removeEventListener("click", clickLayer8);
    // document.querySelector("#Layer_9").removeEventListener("click", clickLayer9);
    // document.querySelector("#Layer_10").removeEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").removeEventListener("click", clickLayer11);
    document.querySelector("#Layer_3").setAttribute("fill", paint);
    startManipulatingTheSvg();
}

function clickLayer4() {
    console.log("clickLayer4");
    // document.querySelector("#Layer_1").removeEventListener("click", clickLayer1);
    // document.querySelector("#Layer_2").removeEventListener("click", clickLayer2);
    // document.querySelector("#Layer_3").removeEventListener("click", clickLayer3);
    // document.querySelector("#Layer_4").removeEventListener("click", clickLayer4);
    // document.querySelector("#Layer_5").removeEventListener("click", clickLayer5);
    // document.querySelector("#Layer_6").removeEventListener("click", clickLayer6);
    // document.querySelector("#Layer_7").removeEventListener("click", clickLayer7);
    // document.querySelector("#Layer_8").removeEventListener("click", clickLayer8);
    // document.querySelector("#Layer_9").removeEventListener("click", clickLayer9);
    // document.querySelector("#Layer_10").removeEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").removeEventListener("click", clickLayer11);
    document.querySelector("#Layer_4").setAttribute("fill", paint);
    startManipulatingTheSvg();
}

function clickLayer5() {
    console.log("clickLayer5");
    // document.querySelector("#Layer_1").removeEventListener("click", clickLayer1);
    // document.querySelector("#Layer_2").removeEventListener("click", clickLayer2);
    // document.querySelector("#Layer_3").removeEventListener("click", clickLayer3);
    // document.querySelector("#Layer_4").removeEventListener("click", clickLayer4);
    // document.querySelector("#Layer_5").removeEventListener("click", clickLayer5);
    // document.querySelector("#Layer_6").removeEventListener("click", clickLayer6);
    // document.querySelector("#Layer_7").removeEventListener("click", clickLayer7);
    // document.querySelector("#Layer_8").removeEventListener("click", clickLayer8);
    // document.querySelector("#Layer_9").removeEventListener("click", clickLayer9);
    // document.querySelector("#Layer_10").removeEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").removeEventListener("click", clickLayer11);
    document.querySelector("#Layer_5").setAttribute("fill", paint);
    startManipulatingTheSvg();
}

function clickLayer6() {
    console.log("clickLayer6");
    // document.querySelector("#Layer_1").removeEventListener("click", clickLayer1);
    // document.querySelector("#Layer_2").removeEventListener("click", clickLayer2);
    // document.querySelector("#Layer_3").removeEventListener("click", clickLayer3);
    // document.querySelector("#Layer_4").removeEventListener("click", clickLayer4);
    // document.querySelector("#Layer_5").removeEventListener("click", clickLayer5);
    // document.querySelector("#Layer_6").removeEventListener("click", clickLayer6);
    // document.querySelector("#Layer_7").removeEventListener("click", clickLayer7);
    // document.querySelector("#Layer_8").removeEventListener("click", clickLayer8);
    // document.querySelector("#Layer_9").removeEventListener("click", clickLayer9);
    // document.querySelector("#Layer_10").removeEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").removeEventListener("click", clickLayer11);
    document.querySelector("#Layer_6").setAttribute("fill", paint);
    startManipulatingTheSvg();
}

function clickLayer7() {
    console.log("clickLayer7");
    // document.querySelector("#Layer_1").removeEventListener("click", clickLayer1);
    // document.querySelector("#Layer_2").removeEventListener("click", clickLayer2);
    // document.querySelector("#Layer_3").removeEventListener("click", clickLayer3);
    // document.querySelector("#Layer_4").removeEventListener("click", clickLayer4);
    // document.querySelector("#Layer_5").removeEventListener("click", clickLayer5);
    // document.querySelector("#Layer_6").removeEventListener("click", clickLayer6);
    // document.querySelector("#Layer_7").removeEventListener("click", clickLayer7);
    // document.querySelector("#Layer_8").removeEventListener("click", clickLayer8);
    // document.querySelector("#Layer_9").removeEventListener("click", clickLayer9);
    // document.querySelector("#Layer_10").removeEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").removeEventListener("click", clickLayer11);
    document.querySelector("#Layer_7").setAttribute("fill", paint);
    startManipulatingTheSvg();
}

function clickLayer8() {
    console.log("clickLayer8");
    // document.querySelector("#Layer_1").removeEventListener("click", clickLayer1);
    // document.querySelector("#Layer_2").removeEventListener("click", clickLayer2);
    // document.querySelector("#Layer_3").removeEventListener("click", clickLayer3);
    // document.querySelector("#Layer_4").removeEventListener("click", clickLayer4);
    // document.querySelector("#Layer_5").removeEventListener("click", clickLayer5);
    // document.querySelector("#Layer_6").removeEventListener("click", clickLayer6);
    // document.querySelector("#Layer_7").removeEventListener("click", clickLayer7);
    // document.querySelector("#Layer_8").removeEventListener("click", clickLayer8);
    // document.querySelector("#Layer_9").removeEventListener("click", clickLayer9);
    // document.querySelector("#Layer_10").removeEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").removeEventListener("click", clickLayer11);
    document.querySelector("#Layer_8").setAttribute("fill", paint);
    startManipulatingTheSvg();
}

function clickLayer9() {
    console.log("clickLayer9");
    // document.querySelector("#Layer_1").removeEventListener("click", clickLayer1);
    // document.querySelector("#Layer_2").removeEventListener("click", clickLayer2);
    // document.querySelector("#Layer_3").removeEventListener("click", clickLayer3);
    // document.querySelector("#Layer_4").removeEventListener("click", clickLayer4);
    // document.querySelector("#Layer_5").removeEventListener("click", clickLayer5);
    // document.querySelector("#Layer_6").removeEventListener("click", clickLayer6);
    // document.querySelector("#Layer_7").removeEventListener("click", clickLayer7);
    // document.querySelector("#Layer_8").removeEventListener("click", clickLayer8);
    // document.querySelector("#Layer_9").removeEventListener("click", clickLayer9);
    // document.querySelector("#Layer_10").removeEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").removeEventListener("click", clickLayer11);
    document.querySelector("#Layer_9").setAttribute("fill", paint);
    startManipulatingTheSvg();
}

function clickLayer10() {
    console.log("clickLayer10");
    // document.querySelector("#Layer_1").removeEventListener("click", clickLayer1);
    // document.querySelector("#Layer_2").removeEventListener("click", clickLayer2);
    // document.querySelector("#Layer_3").removeEventListener("click", clickLayer3);
    // document.querySelector("#Layer_4").removeEventListener("click", clickLayer4);
    // document.querySelector("#Layer_5").removeEventListener("click", clickLayer5);
    // document.querySelector("#Layer_6").removeEventListener("click", clickLayer6);
    // document.querySelector("#Layer_7").removeEventListener("click", clickLayer7);
    // document.querySelector("#Layer_8").removeEventListener("click", clickLayer8);
    // document.querySelector("#Layer_9").removeEventListener("click", clickLayer9);
    // document.querySelector("#Layer_10").removeEventListener("click", clickLayer10);
    // document.querySelector("#Layer_11").removeEventListener("click", clickLayer11);
    document.querySelector("#Layer_10").setAttribute("fill", paint);
    startManipulatingTheSvg();
}

// function clickLayer11() {
//     console.log("clickLayer11");
//     document.querySelector("#Layer_1").removeEventListener("click", clickLayer1);
//     document.querySelector("#Layer_2").removeEventListener("click", clickLayer2);
//     document.querySelector("#Layer_3").removeEventListener("click", clickLayer3);
//     document.querySelector("#Layer_4").removeEventListener("click", clickLayer4);
//     document.querySelector("#Layer_5").removeEventListener("click", clickLayer5);
//     document.querySelector("#Layer_6").removeEventListener("click", clickLayer6);
//     document.querySelector("#Layer_7").removeEventListener("click", clickLayer7);
//     document.querySelector("#Layer_8").removeEventListener("click", clickLayer8);
//     document.querySelector("#Layer_9").removeEventListener("click", clickLayer9);
//     document.querySelector("#Layer_10").removeEventListener("click", clickLayer10);
//     // document.querySelector("#Layer_11").removeEventListener("click", clickLayer11);
//     document.querySelector("#Layer_11").setAttribute("fill", paint);
//     startManipulatingTheSvg();
// }