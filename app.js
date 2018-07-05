// Hard coded profiles just for test iteration
const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "male",
    lookingfor: "female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/83.jpg"
  }
];

const profiles = profileIterator(data);

nextProfile();

document.getElementById("next").addEventListener("click", nextProfile);

// shoe profile
function nextProfile(){
    const profile = profiles.next().value;

    if (profile !== undefined){
        document.getElementById("profileInfo").innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">${profile.name}</li>
            <li class="list-group-item">${profile.age}</li>
            <li class="list-group-item">${profile.gender}</li>
            <li class="list-group-item">${profile.lookingfor}</li>
            <li class="list-group-item">${profile.location}</li>
        </ul>
        `;

        document.getElementById('profileImage').innerHTML=`<img src="${profile.image}">`;
    }
    else{
        window.location.reload();
    }
}

function profileIterator(profile) {
    let index = 0;

    return{
        next: function(){
            return index < profile.length ? 
            {value : profile[index++], done: false}:
            {done: true}
        }
    }
}
