var names = ["Machine Learning Engineer", "Data Scientist", "Math Nerd"]
var i = 0

function change(){
        var  text = document.getElementById("desig")

        text.className = "typer"
        setTimeout(function() {
            text.className = "typeBack" 
            console.log("inside it");
        }, 3400)

        document.getElementById("youAre").innerText = names[i]
        i = (i<2)?i+1:0;
}

function setup()
{
        change()
        setInterval(change, 5200)
}