{
    const inputCelsius=document.getElementById('inputCelsius')
    const outputFahrenheit=document.getElementById('outputFahrenheit')
    const outputAll=document.getElementById('outputAll')
   

    function konversiBtn(){
        let C = inputCelsius.value
        let fahrenheit = (C * 9/5) + 32
        if (C == '') {
            outputFahrenheit.value = "Error";
            outputAll.value = "Error";
            setTimeout(function(){
                outputFahrenheit.value = '';
                outputAll.value = '';
            }, 5000);
            return;
        }
        else {
            outputFahrenheit.value = fahrenheit.toFixed(2);
            outputAll.value = `${C}°C x 9/5 +32 = ${fahrenheit.toFixed(2)}°F`
        }
    }

    function reverse(){
        let C = inputCelsius.value
        let fahrenheit = (C * 9/5) + 32
        let celcius = (fahrenheit - 32) * 5/9
        if (C == '') {
            outputFahrenheit.value = "Error";
            outputAll.value = "Error";
            setTimeout(function(){
                outputFahrenheit.value = '';
                outputAll.value = '';
            }, 5000);
            return;
        }
        else {
             outputAll.value = `(${fahrenheit}°F - 32) x 5/9  = ${celcius}°C`
        }
    }

    function copyBtn(){
        // Get the text field
        let copyText = document.getElementById("outputAll");
        // Select the text field
        copyText.setSelectionRange(0, 99999); // For mobile devices
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
    }

    function resetBtn(){
        document.getElementById('inputCelsius').value = '';
        document.getElementById('outputFahrenheit').value = '';
        document.getElementById('outputAll').value = '';
        return;
    }

    //window.onscroll = function() {
    //    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
    //        document.getElementById('textareaContainerID').style.display = 'none';
    //        document.getElementById('textareaContainerID').style.position = 'absolute';
    //    }
    //    else if (window.scrollY > 0) {
    //        document.getElementById('textareaContainerID').style.display = 'flex';
    //        document.getElementById('textareaContainerID').style.display = 'flex';
    //        document.getElementById('textareaContainerID').style.position = 'fixed';
    //    }
    //} 
}
//window.addEventListener("scroll", function(){
       // var header = document.querySelector("header")
        //header.classList.toggle("sticky", window.scrollY > 0)
    //})
    
