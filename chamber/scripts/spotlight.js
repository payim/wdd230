const requestURL = './js/data.json';
const cards = document.querySelector('.spotlight')


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const companies = jsonObject['companies'];

    const filterCompanies = companies.filter((company) => {
        return company.membership == "Silver" || company.membership == "Gold";

    })

    console.log(filterCompanies);

    let count = 0;


    let rand = Math.floor(Math.random() * filterCompanies.length)
    console.log(rand)
    for (let i = rand; i  < companies.length; i++) {
    
        if(companies[i].membership === 'Gold' || companies[i].membership === 'Silver'){
            displayCompanies(companies[i])
            count ++
            if(count == 3){
                break;
            }
        }
      }
    
  });

  function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1   = document.createElement('p');
    let anchor = document.createElement('a');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let portrait = document.createElement('img');

          
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = ` ${company.name }`;
    p1.textContent = `${company.address} `;
    p2.textContent = `${company.phonenumber}`;
    p3.textContent  = `Membership: ${company.membership}`;


    let textNode = document.createTextNode(company.name);
    anchor.appendChild(textNode);
    anchor.href = company.website;
    anchor.classList = 'comp_link';

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill ble).
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('class', 'comp_img');
    portrait.setAttribute('alt', `Portait of  ${company.name}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(anchor);
    card.appendChild(p2);
    card.appendChild(p3);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);

  
  }


 