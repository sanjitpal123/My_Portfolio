let modechang = document.querySelector(".ModeChange");
let sunicon = document.querySelector("#sun");
let body = document.querySelector("body");
let skillheading = document.querySelector(" h2");
let authorname = document.querySelectorAll(".nameofauthor");
let footercontainer = document.querySelector(".footercontainer");
let Copyrighttext = document.querySelector(".Copyright");
let allitag = document.querySelectorAll("i");
let allfn = document.querySelectorAll(".fn");
let motivation=document.querySelector(".moti");
console.log(skillheading);
console.log(body);
let skillsname = document.querySelectorAll(".nameofskill");
console.log(skillsname);
let c = 0;
modechang.addEventListener("click", () => {
  if (c % 2 == 0) {
    body.style.backgroundColor = 'white';
    skillheading.style.color = 'black';
    footercontainer.style.borderColor = 'black';
    Copyrighttext.style.color = 'black';
    motivation.style.color='black';

    allitag.forEach((tag) => {
      tag.style.color = "black";
    })

    skillsname.forEach(skill => {
      skill.style.color = "black";
    });
    authorname.forEach((name) => {
      name.style.color = "black";
    });
    sunicon.style.color = 'white';

    document.querySelector("#briefaboutme").style.color = 'black';

    allfn.forEach((fn)=>{
      fn.style.color='white';
    })


  } else {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    motivation.style.color='white';

    skillsname.forEach(skill => {
      skill.style.color = "white";
    });
    skillsname.forEach(skill => {
      skill.style.color = "white";
    });
    authorname.forEach((name) => {
      name.style.color = "white";
    });
    Copyrighttext.style.color = 'white';
    skillheading.style.color = 'white';
    footercontainer.style.borderColor = 'white';

    document.querySelector("#briefaboutme").style.color = 'white';
  }

  c++;
});

