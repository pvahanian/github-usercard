import axios from 'axios'

const cards = document.querySelector('.cards')
const followersArray = ["pvahanian  ","tetondan","dustinmyers","chasingeuphoria","justsml","luishrd","bigknell"];

followersArray.forEach(element => {
  axios.get(`https://api.github.com/users/${element}`)
  .then(stuff=>{
    cards.appendChild(gitCardMaker(stuff.data));
    })
.catch(err=> {
  })
})



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
*/
function gitCardMaker(data) {
  // Setting up elements, giving classes and adding values if needed
  let {login,name,location,html_url,following,followers,bio,avatar_url} = data
 
  const card = document.createElement('div')
  card.classList.add('card')
  
  const image = document.createElement('img')
  image.src = avatar_url

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')

  const names = document.createElement('h3')
  names.classList.add('name')
  names.textContent = `Name: ${name}`
  
  const logins = document.createElement('p')
  logins.classList.add('username')
  logins.textContent = `Username: ${login}`

  const locationv = document.createElement('p')
  locationv.textContent = `Location: ${location}`

  const profile = document.createElement('p')
  profile.textContent = `Profile:`
  const gitAddress = document.createElement('a');
  let linkText = document.createTextNode(" Follow Me");
  gitAddress.appendChild(linkText);
  gitAddress.href= `${html_url}`
  profile.appendChild(gitAddress)

  const followerS = document.createElement('p')
  followerS.textContent = `Users Followers Count ${followers}`

  const followeRing = document.createElement('p')
  followeRing.textContent = `Users Following Count ${following}`

  const bios = document.createElement('p')
  bios.textContent = `Bio ${bio}`

  // Orders the Cards
  card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(names)
  cardInfo.appendChild(logins)
  cardInfo.appendChild(locationv)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followerS)
  cardInfo.appendChild(followeRing)
  cardInfo.appendChild(bios)

  return card;
}
