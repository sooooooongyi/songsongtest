const quiz_submit = document.getElementById("quiz_submit");
//const songsongtest = document.getElementsByTagName("h1");

sum = 0;
function calculate(event) {
    const submit_list = document.getElementsByName("ans");
    for(i = 0; i < submit_list.length; i++) 
    {
        if(submit_list[i].checked===true) 
        {
            sum += Number(submit_list[i].value);
        }
    }
    console.log(sum);
    location.href='result.html?'+sum;
}

/*
function goindex(event) {
    location.href='index.html';
}
*/

if(quiz_submit) {
    quiz_submit.addEventListener("onclick", calculate);
}

/*
if (songsongtest) {
    songsongtest.addEventListener("onclick", goindex);
}
*/