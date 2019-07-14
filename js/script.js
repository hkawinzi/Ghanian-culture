var CC,YY,MM,DD,dayofweek,day;

function getInput() {
    CC = parseInt(document.getElementById("century").value);
    YY = parseInt(document.getElementById("year").value);
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("monthday").value);
}
//calculate func
function calculateDay() {
    getInput();
    DayOfWeek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    DayOfWeek -=1;
    console.log(DayOfWeek); //test the output
    return (Math.floor(DayOfWeek));
}

function checkDayOfWeek(){
    day = calculateDay();
    checkGender();
    console.log("The function runs");
}

//arrays
let DayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwando", "Kwabena", "Kwaku", "Yaw", "Koffi", "Kwame"];

//get selected radio button
function checkGender(){
    var gen = document.getElementsByName("value");
    if(gen[0].checked == true) {
        var gender = "male";
    }else if(gen[1].checked = true){
        var gender = "female";
    }else {
        console.log("pass");
    }
      switch(gender) {
          case gender = "male":
              switch (day){
                case 0:
                    document.getElementById("result").innerHTML = "The day is on a sunday." + " " + "Your akan name is" + maleName[0];
                    break;
                case 1:
                    document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is" + maleName[1];
                    break;
                case 2:
                    document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is" + maleName[2];
                    break;
                case 3:
                    document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is" + maleName[3];
                    break;
                case 4:
                    document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is" + maleName[4];
                    break; 
                case 5:
                    document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is" + maleName[5];
                    break;
                case 6:
                    document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is" + maleName[6];
                    break;
                    default:
                    // console.console.log("pass");
                }     
            break;
            case gender = "female":
                switch(day) {
                    case 0:
                        document.getElementById("result").innerHTML = "The day is on a sunday." + " " + "Your akan name is" + Akosua[0];
                        break;
                    case 1:
                        document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is" + Adwoa[1];
                        break;
                    case 2:
                        document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is" + Abenaa[2];
                        break;
                    case 3:
                        document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is" + Akua[3];
                        break;
                    case 4:
                        document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is" + Yaa[4];
                        break;
                    case 5:
                        document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is" + Afua[5];
                        break;
                    case 6:
                        document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is" + Ama[6];
                                                                                            break;
                }
                    break
                    default:
                    console.log("pass");
                }
            }