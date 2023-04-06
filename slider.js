var x = 0; 

imag.src = "./1.jpg";

setInterval(() =>{
    x++
    if (x == 1) {
        imag.src = "./1.jpg";
    }else
    if (x == 2) {
        imag.src = "./2.jpg";
    }else {
        x = 0;
        imag.src = "./3.jpg";
    }
}, 2000);
