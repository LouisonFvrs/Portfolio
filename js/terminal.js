let popup = document.getElementById('popup');
let terminal = document.getElementById('terminal');
let leave = document.getElementById('leave');
let input = document.getElementById("t-input");
let result = document.getElementById("result");
let container = document.getElementById("scroll");
let tabCommand = ["aide", "get-cv", "get-linkedin", "get-github", "information", "get-projet", "theme"];

leave.addEventListener("click", ()=> {
    if(getComputedStyle(popup).display != 'none'){
        popup.style.display = 'none';
        terminal.style.display='flex';
        document.getElementById("t-input").focus();
    }
    else{
        popup.style.display = 'flex';
        terminal.style.display = 'none';
    }
})

//Garder le focus toujours actif sur le même input
input.addEventListener("blur", function() {
  input.focus();
});

/*
    Gestion des commandes
*/

document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {

        let inputValue = document.getElementById('t-input').value;

        /*
            Commande aide
        */
        if (inputValue == 'aide' || inputValue == 'help'){
            result.innerHTML += "<br>Voici quelques commandes à taper pour en apprendre plus sur moi <br><br>";

            tabCommand.forEach(element => {
                result.innerHTML +=  element + " &nbsp;&nbsp;&nbsp;";
            });
            result.innerHTML += "<br>";
        }

        /*
            Commande get-cv
        */
        if (inputValue == 'get-cv')
        {
            result.innerHTML += '<br>Cliquer pour ouvrir mon <a href="ressources/cv.pdf" target="_blank">CV</a>.<br>';
        }

        /*
            Commande get-linked-in
        */
       if (inputValue == 'get-linkedin')
       {
            result.innerHTML += '<br>Voici un lien vers mon <a href="https://www.linkedin.com/in/louison-feuvrais-69241a232/" target="_blank">LinkedIn</a>.<br>';
       }

        /*
           Commande get-github
        */
       if (inputValue == 'get-github')
       {
        result.innerHTML += '<br>Si tu souhaites visualiser mes autres réalisations passe par ce lien <a href="https://github.com/LouisonFvrs" target="_blank">Github</a>.<br>';
       }

        /*
            Commande information
        */
        if (inputValue == 'information')
        {
        result.innerHTML += '<i><br>{<br>&nbsp;&nbsp;nom : Feuvrais;<br>&nbsp;&nbsp;prénom : louison;<br>&nbsp;&nbsp;age : 19;<br>&nbsp;&nbsp;ville : France, Angers;<br>&nbsp;&nbsp;hobbies : ["Football", "Musique", "Voyage", "Manger"];<br>&nbsp;&nbsp;Formation : ["BTS SIO option SLAM","secNumacadémie"];<br>&nbsp;&nbsp;languages : [C#, Java, Javascript, HTML, CSS, SQL, PHP, Python];<br>&nbsp;&nbsp;Frameworks : [Laravel, react];<br>&nbsp;&nbsp;outils : [Figma, Git];<br></i>}<br>';
        }

        /*
            Commande get-projet
        */
       if(inputValue == 'get-Projet'){
        alert("a");
       }


        document.getElementById("t-input").value = '';
        container.scrollTop = container.scrollHeight - container.clientHeight;

    }
});
