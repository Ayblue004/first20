let person = document.getElementsByClassName('person-image')[0];
let pname = document.getElementsByClassName('pname')[0];
let pAt = document.getElementsByClassName('p-at')[0];
let currentPerson = 0;

//Switch to twitter API after being able to verify phone number
const people = [
    {
        name:"En_Reborn",
        avatar:"people/En_Reborn.jpg",
        at:"@Chidi_Mathaias"
    },
    {
        name:"Od!on",
        avatar:"people/od!on.jpg",
        at:"@iam__odinho"
    },
    {
        name:"Minister of Happiness",
        avatar:"people/moh.jpg",
        at:"@PreciousAnyi"
    },
    {
        name:"Chukwudi Solomon Ozioma",
        avatar:"people/cso.jpg",
        at:"@Dev_chuddy"
    },
    {
        name:"Name may be blank",
        avatar:"people/abdul.jpg",
        at:"@Abdulgafar___"
    },
    {
        name:"Áqinnâqin ❤️#LFC",
        avatar:"people/aqi.jpg",
        at:"Dardavy08"
    },
    {
        name:"Blaçk_Fire✞",
        avatar:"people/black.jpg",
        at:"@_KingJeyy_",
    },
    {
        name:"Sekani💻💯",
        avatar:"people/sek.jpg",
        at:"@dev_sekani"
    },
    {
        name:"Vilma👸🫧",
        avatar:"people/vee.jpg",
        at:"@Vee_Baebi"
    },
    {
        name:"HBO",
        avatar:"people/hbo.jpg",
        at:"@badbatunde"
    },
    {
        name:"Paul Sunday",
        avatar:"people/paul.jpg",
        at:"@chumchumkeys1"
    },
    {
        name:"Andy Wood",
        avatar:"people/andy.jpg",
        at:"@Andynwood79"
    },
    {
        name:"lifeofher",
        avatar:"people/lifeofher.jpg",
        at:"@aishaoamar"
    },
    {
        name:"Adéolúwa Tádérí 👨‍💻",
        avatar:"people/ade.jpg",
        at:"@pencil_thefirst"
    },
    {
        name:"Yusuf Mubaraq",
        avatar:"people/yusuf.jpg",
        at:"@barakkenny2"
    },
    {
        name:"Atlas",
        avatar:"people/atlas.jpg",
        at:"@atlasdagreat"
    },
    {
        name:"Gerald",
        avatar:"people/gerald.jpg",
        at:"@Geerraalldddd"
    },
    {
        name:"Aarinola🥀🦋",
        avatar:"people/arin.jpg",
        at:"@aarin_wealth"
    },
    {
        name:"©️. WONDA.",
        avatar:"people/wonda.jpg",
        at:"@WondaWhines"
    },
    {
        name:"Biggy",
        avatar:"people/biggy.jpg",
        at:"@Ifzyman"
    }
]
display()

function display(){
    person.src = people[currentPerson].avatar;
    pAt.innerText = people[currentPerson].at;
    pname.innerText = people[currentPerson].name;
}
function next(){
    if(currentPerson < 19){
        currentPerson++
        display()
    }
    else if(currentPerson == 19){
        currentPerson = 0
        display()
    }
}

function prev(){
    if (currentPerson >= 1){
        currentPerson--
        display()
    }
    else if(currentPerson == 0){
        currentPerson = 19
        display()
    }
}

setInterval(()=>{
    next()
},2000)