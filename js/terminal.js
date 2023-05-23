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
            result.innerHTML += "<br>Voici quelques <span class = 'highlight'>commandes</span> à taper pour en apprendre plus sur moi <br><br>";

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
       if(inputValue == 'get-projet'){
        result.innerHTML += '<br><table><thead><tr><th width = "10%">Projet</th><th>Outils</th><th width = "10%">Team</th><th>Description</th><th width = "10%">Voir le projet</th></tr></thead><tbody><tr><td>Gestion étudiant</td><td>Java, JavaFx, SQL, Figma</td><td>Oui</td><td>Ce projet est une application lourde de gestion d&apos;étudiant, on peut visualiser, en fonction de vos permissions lors de votre connexion vous pourrez créer modifier, supprimer des étudiants</td><td><a href="#">Projet</a></td></tr></thead><tbody><tr><td>BoisDuRoy</td><td>HTML, CSS, JS, PHP, SQL, C#, Figma, Git</td><td>Oui</td><td>Le but est de pouvoir visualiser ses informations et effectuer une demande de congé sur une appli web qui pourra être accepter ou non via ld&apos;appli c#</td><td><a href="https://github.com/LouisonFvrs/BoisDuRoy">Projet</a></td></tr><tr><td>Snake</td><td>C#</td><td>Non</td><td>L&apos;objectif était de reproduire le jeu snake afin de me familiariser avec le language C#</td><td><a href="https://github.com/LouisonFvrs/Snake">Projet</a></td></tr><tr><td>Portfolio Terminal</td><td>HTML, CSS, JS</td><td>Non</td><td>Souhaitant réaliser un portfolio un peu original j&apos;ai eu l&apos;idée de réaliser un site web reproduisant visuelement un portfolio mais en y implémentant les fonctionnalités que peux posséder un terminal</td><td><a href="https://github.com/LouisonFvrs/Portfolio">Projet</a></td></tr></tbody></table><br>';
       }

       //   Gestion de la barre de scrolling du terminal pour quelle reste tout en bas

        document.getElementById("t-input").value = '';
        container.scrollTop = container.scrollHeight - container.clientHeight;

    }
});
