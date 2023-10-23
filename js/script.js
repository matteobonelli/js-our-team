/*
            <div class="col-4 d-flex justify-content-center ">
                <div class="card">
                    <img src="img/angela-caroll-chief-editor.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Angela Carrol</h5>
                      <p class="card-text">Me faccio le pippe a coccia d'ovo</p>
                    </div>
                </div>
            </div>
*/

const rowEl = document.getElementById('teamMembers');
const theBoss = document.getElementById('theBoss');
const btn = document.querySelector('.btn');
let ourTeam = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        picture: 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg'
    },
    {
        name : 'Gino il Gattino',
        role : 'Mangiatore di Croccantini',
        picture: 'gino-il-gattino.jpg'
    }
];

btn.addEventListener('click', () => {
    const newMember = {
        name : document.getElementById('name').value,
        role : document.getElementById('role').value,
        picture : document.getElementById('picture').value
    };
    ourTeam.push(newMember);
    generateCard(newMember);
    reset();
});

for (let i = 0; i < ourTeam.length; i++){
    generateCard(ourTeam[i], i);
    // console.group();
    // console.log(ourTeam[i].name);
    // console.log(ourTeam[i].role);
    // console.log(ourTeam[i].picture);
    // console.groupEnd();
    
}


function reset(){
    document.getElementById('name').value = '';
    document.getElementById('role').value = '';
    document.getElementById('picture').value = '';
}

function generateCard(member, i){
    const colEl = document.createElement('div');
    colEl.className = 'col-4 d-flex justify-content-center';
    // console.log(colEl)
   colEl.innerHTML = `
    <div class="card my-3">
        <img src="img/${member.picture}" class="card-img-top">
        <div class="card-body fst-italic">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text">${member.role}</p>
        </div>
    </div>`

    if(i === ourTeam.length - 1){
        theBoss.append(colEl)
    } else{
        rowEl.append(colEl);
    }
    
    
}