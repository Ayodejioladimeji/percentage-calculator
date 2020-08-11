// THE SECTION OF THE DATE
const dateElement = document.getElementById("date");
const options = {
    weekday:"long",
    month:"short",
    day:"numeric"
};

const today  = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


function update(){
    const amount = Number(document.getElementById("input").value);
    const percent = document.getElementById("range").value;

    let percentage = (amount/100)*percent;
    value = percentage.toFixed(2);


    document.getElementById("output").innerHTML = value;
    document.getElementById("percent").innerHTML = percent + "%";

}

const container = document.getElementById("container");
container.addEventListener("input", update);