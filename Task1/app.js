let celsius=document.querySelector('#celsius');
let fahrenheit=document.querySelector('#fahrenheit');
let kelvin=document.querySelector('#kelvin');
celsius.addEventListener("input",function(){
    console.log("input entered");
    let f=(parseFloat(celsius.value));
    let res=(f*(9/5)+32).toFixed(2);
    fahrenheit.value=res;
});
celsius.addEventListener("input",function(){
    console.log("print of event2");
    let k=(parseFloat(celsius.value));
    let res=(k+273.15);
    console.log("kelvin:",res);
    kelvin.value=res;
});
fahrenheit.addEventListener("input",function(){
    let f=(parseFloat(fahrenheit.value));
    let res=(f-32)*(5/9);
    celsius.value=res;
});
fahrenheit.addEventListener("input",function(){
    let f=(parseFloat(fahrenheit.value));
    let res=((f-32)*(5/9)+273.15);
    kelvin.value=res;
});
kelvin.addEventListener("input",function(){
    let k=(parseFloat(kelvin.value));
    let res=((k-273.15)*(9/5)+32);
    fahrenheit.value=res;
});
kelvin.addEventListener("input",function(){
    let k=(parseFloat(kelvin.value));
    let res=(k-273.15);
    celsius.value=res;
});