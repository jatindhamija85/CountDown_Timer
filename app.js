const endDate = "7 August 2023 8:55 PM";

document.getElementById("endDate").innerText = endDate;
const input = document.querySelectorAll('input');




function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if(diff > 0){
        //Days
    input[0].value = Math.floor(diff / 3600 / 24)
    //Hours
    input[1].value = Math.floor((diff / 3600) % 24)
    //Minutes
    input[2].value = Math.floor((diff / 60) % 60)
    //Seconds
    input[3].value = Math.floor(diff % 60)
    }
}

setInterval(
    () => {
        clock()
    }, 1000
)