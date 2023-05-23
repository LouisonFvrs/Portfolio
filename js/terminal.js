let popup = document.getElementById('popup');
let terminal = document.getElementById('terminal');
let leave = document.getElementById('leave');
let input = document.getElementById("t-input");
let result = document.getElementById("result");
let container = document.getElementById("scroll");
let tabCommand = ["aide", "get-cv", "get-linkedin", "get-github", "information", "get-projet", "theme"];

/*
    fonction permettant de changer le thème du terminal
*/
function changeTheme(n)
{
    n-=1;
    tab = [['#3b3b3b','#ffffff','#e73c7e','#23a6d5'],['#FAFAFA','#A626A4','#526FFF','#50A14F'],['#282a36','#f8f8f2','#ff5555','#50fa7b'],['#0a0047','#f8f8f2','#ff4499','#00ffd2'],['#2C001E','#FFFFFF','#E95420','#772953']];

    document.documentElement.style.setProperty('--main-bg-color', tab[n][0]);
    document.documentElement.style.setProperty('--main-text-color', tab[n][1]);
    document.documentElement.style.setProperty('--important-span', tab[n][2]);
    document.documentElement.style.setProperty('--highlight-text', tab[n][3]);

}

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
       if(inputValue == 'get-projet')
       {
        result.innerHTML += '<br><table><thead><tr><th width = "10%">Projet</th><th>Outils</th><th width = "10%">Team</th><th>Description</th><th width = "10%">Voir le projet</th></tr></thead><tbody><tr><td>Gestion étudiant</td><td>Java, JavaFx, SQL, Figma</td><td>Oui</td><td>Ce projet est une application lourde de gestion d&apos;étudiant, on peut visualiser en fonction de ses permissions attribuer lors de votre connexion, vous pourrez créer, modifier, supprimer des étudiants.</td><td><a href="#" target="_blank">Projet</a></td></tr></thead><tbody><tr><td>BoisDuRoy</td><td>HTML, CSS, JS, PHP, SQL, C#, Figma, Git</td><td>Oui</td><td>Le but est de pouvoir visualiser ses informations et effectuer une demande de congé sur une appli web, ces demandes devront être accepter ou non via ld&apos;appli c#.</td><td><a href="https://github.com/LouisonFvrs/BoisDuRoy" target="_blank">Projet</a></td></tr><tr><td>Snake</td><td>C#</td><td>Non</td><td>L&apos;objectif était de reproduire le jeu snake afin de me familiariser avec le language C#.</td><td><a href="https://github.com/LouisonFvrs/Snake" target="_blank">Projet</a></td></tr><tr><td>Portfolio Terminal</td><td>HTML, CSS, JS</td><td>Non</td><td>Souhaitant réaliser un portfolio un peu original j&apos;ai eu l&apos;idée de réaliser un site web reproduisant visuelement un portfolio mais en y implémentant les fonctionnalités que peux posséder un terminal. De plus ce portfolio est quant à lui responsive, il peut donc être visiter via un smartphone ou une tablette.</td><td><a href="https://github.com/LouisonFvrs/Portfolio" target="_blank">Projet</a></td></tr></tbody></table><br>';
       }

       /*
            Commande thème
        */
       if(inputValue == 'theme' || inputValue == 'thème' || inputValue == 'themes' || inputValue == 'thèmes')
       {
        result.innerHTML += '<br>Voici la liste des thèmes disponibles :<br><br><i>{<br>&nbsp;&nbsp;- Defaut;<br>&nbsp;&nbsp;- Atom;<br>&nbsp;&nbsp;- Dracula;<br>&nbsp;&nbsp;- Tokyo;<br>&nbsp;&nbsp;- Ubuntu;<br>}</i><br><br>Entrer la commande suivante pour définir votre thème : theme.Nom<br>';
       }

        if(inputValue.toUpperCase() == 'THEME.DEFAUT'){
            changeTheme(1);
        }
        if(inputValue.toUpperCase() == 'THEME.ATOM'){
            changeTheme(2);
        }
        if(inputValue.toUpperCase() == 'THEME.DRACULA'){
            changeTheme(3);
        }
       if(inputValue.toUpperCase() == 'THEME.TOKYO'){
            changeTheme(4);
        }
        if(inputValue.toUpperCase() == 'THEME.UBUNTU'){
            changeTheme(5);
        }


       //   Gestion de la barre de scrolling du terminal pour quelle reste tout en bas

        document.getElementById("t-input").value = '';
        container.scrollTop = container.scrollHeight - container.clientHeight;

    }
});
