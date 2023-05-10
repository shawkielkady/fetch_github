// Variables
let thinput=document.querySelector('.get-repos input');
reposbutton=document.querySelector('.get-button');
showdata=document.querySelector('.show-data');

//2:41
reposbutton.onclick=function(){
    getRepos();
}


//functions
function getRepos(){
    thinput.value==''? 
    showdata.innerHTML='<span>Please wtite github userName</span>'
    :fetch(`https://api.github.com/users/${thinput.value}/repos`)
    .then((res) => res.json())
    .then((repos) => {
    showdata.innerHTML='';
    //loop on data
    repos.forEach(repo => {
        let mainDiv=document.createElement("div");
        let text=document.createTextNode(repo.name);
        mainDiv.appendChild(text)
        //*************** */
        let link=document.createElement('a');
        let textvisit=document.createTextNode("visit");
        link.appendChild(textvisit);
        link.href=`https://github.com/${thinput.value}/${repo.name}`;
        link.setAttribute('target','_blank');
        /******************* */
        let repobox=document.createElement("div");
        repobox.classList.add('repo-box')
        repobox.appendChild(link);
        repobox.appendChild(mainDiv)
        showdata.appendChild(repobox)
    });
}); 
}