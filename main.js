var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementsById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
}