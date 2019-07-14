var CC,YY,MM,DD,dayofweek,day;

function getInput() {
    CC = parseInt(document.getElementById("century").Value);
    YY = parseInt(document.getElementById("year").Value);
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("monthday").value);
}
//calculate func
function calculateDay() {
    getInput();
    dayofweek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    dayofweek -=1;
    console.log(dayofweek); //test the output
    return (Math.floor(dayofweek));
}

function checkDayOfWeek(){
    day = calculateDay();
    checkGender();
    console.log("The function runs");
}

//arrays
let dayofweek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwando", "Kwabena", "Kwaku", "Yaw", "Koffi", "Kwame"];

//get selected radio button
function checkGender(){
    var gen = document.getElementsByName("value");
    if(gen[0].checked == true) {
        var gender == "male;"
    }else if(gen[1].checked == true){
        var gender == "female;"
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
                                        document.getElementById("result").innerHTML = "The day is on a sunday." + " " + "Your akan name is" + maleName[6];
                                        break;
                                        default:
                                        // console.console.log("pass");
                                 }     
                                break;
                                case gender = "female":
                                    switch(day) {
                                        case 0:
                                                document.getElementById("result").innerHTML = "The day is on a sunday." + " " + "Your akan name is" + femaleName[0];
                                            break;
                                            case 1:
                                                    document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is" + femaleName[1];
                                                    break;
                                                    case 2:
                                                            document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is" + femaleName[2];
                                                            break;
                                                            case 3:
                                                                    document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is" + femaleName[3];
                                                                    break;
                                                                    case 4:
                                                                            document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is" + femaleName[4];
                                                                            break;
                                                                            case 5:
                                                                                    document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is" + femaleName[5];
                                                                                    break;
                                                                                    case 6:
                                                                                            document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is" + maleName[6];
                                                                                            break;
                                    }
                                    break
                                    default:
                                        console.log("pass");
                                }
                            }