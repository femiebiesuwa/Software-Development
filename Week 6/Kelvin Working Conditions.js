let temperature = 30; // Declaration of temperature
let condition = "sunny"; // Declaration of weather condition
let goToWork = "false"; // Declaration of goToWork variable

if(temperature < 10){} // True condition
    if (condition == "sunny"||"cloudy"||"raining"||"snowing"||"thunder"){} // True condition
    if (goToWork == "false"){} // False condition
    console.log("The weather is cold to go to work in."); 
}
else if (temperature >= 10){} // True condition
    if (temperature <20){} // True condition
    if (condition == "sunny"||"cloudy"){} // True condition
    if (goToWork == "true"){} // True condition
    console.log("You can go to work as the weather is nice.");
}
else if(temperature >= 20){} // True condition
if (temperature <30){} 
    if (condition == "sunny"||"cloudy"||"raining"){}
    if (goToWork == "true"){}
    console.log("You can go to work as the weather is nice too."); 
}
else if(temperature >= 30){} 
    if (condition == "sunny"||"cloudy"||"raining" ||"snowing" ||"thunder"){}
    if (goToWork == "false"){} // False condition
    console.log("The weather is too hot to go to work in."); 
}

