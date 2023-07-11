const calTemp = () => {
    const numTemp = document.getElementById("temp").value;
    const tempSelected = document.getElementById("temp_diff");
    const valtS = temp_diff.options[tempSelected.selectedIndex].value;

    const fahtoc = (fah)=> {
        let c = (fah- 32)*5/9;
        return c;
    }

    const ctofah = (cel)=> {
        let f = (cel*9/5)+32;
        return f;
    }

    const ctokel = (cel)=>{
        let k1 = (cel+(273.15));
        return k1; 
    }

    const ftokel = (fah)=>{
        let k2 = ((fah-32)*5/9)+273.15;
        return k2;
    }

    const keltoc = (kel)=>{
        let k3 = (kel-273.15);
        return k3;
    }

    const keltofah = (kel)=>{
        let k4 = ((kel-273.15)*9/5)+32;
        return k4;
    }

    let result1,result2;
    if (valtS =="cel"){
        result1 = ctofah(numTemp);
        document.getElementById('resultC').innerHTML= `&nbsp= ${result1} Fahrenheit`

        result2 = ctokel(numTemp);
        document.getElementById('resultC2').innerHTML= `&nbsp= ${result2} Kelvin`
    }
    if (valtS =="kel"){
        result1 = keltofah(numTemp);
        document.getElementById('resultC').innerHTML= `&nbsp= ${result1} Fahrenheit`

        result2 = keltoc(numTemp);
        document.getElementById('resultC2').innerHTML= `&nbsp= ${result2} Celsius`
    }
    if (valtS =="fah"){
        result1 = fahtoc(numTemp);
        document.getElementById('resultC').innerHTML= `&nbsp= ${result1} Celsius`
        
        result2 = ftokel(numTemp);
        document.getElementById('resultC2').innerHTML= `&nbsp= ${result2} Kelvin`
    }
}