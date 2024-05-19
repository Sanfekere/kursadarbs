const popularListings = [
    {
        id: 1,
        title: 'Sludinājums 1',
        description: 'Apraksts 1',
        category: 'mājokļi',
        location: 'Rīga',
        price: 1000,
        contact: 'vards1@uzvards.lv',
        images: ['house.png']
    },
    {
        id: 2,
        title: 'Sludinājums 2',
        description: 'Apraksts 2',
        category: 'transporti',
        location: 'Liepāja',
        price: 2000,
        contact: 'vards2@uzvards.lv',
        images: ['car.jpg']
    },
    {
        id: 3,
        title: 'Sludinājums 3',
        description: 'Apraksts 3',
        category: 'tehnika',
        location: 'Ventspils',
        price: 3000,
        contact: 'vards3@uzvards.lv',
        images: ['tehnk.png']
    }
];

function generateId() {
    return Math.floor(Math.random() * 1000000) + 1;
  }

  function generateListing() {
    const categories = ['Mājokļi', 'Transports', 'Tehnika', 'Mobilais Telefons'];
    const locations = ['Rīga', 'Liepāja', 'Ventspils', 'Preiļi'];
    const images = {
        'Mājokļi': ['house.png'],
        'Transports': ['car.jpg'],
        'Tehnika': ['tehnk.png' ],
        'Mobilais Telefons': ['phone.png']
      };

    const id = generateId();
    const title = `Sludinājums ${id}`;
    const description = `Apraksts ${id}`;
    const category = categories[Math.floor(Math.random() * categories.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const price = Math.floor(Math.random() * 10000) + 1000;
    const contact = `lietotajs${id}@lietotajs.lv`;
    const image1 = images[category][0];
    const image2 = images[category][1];

    return {
      id,
      title,
      description,
      category,
      location,
      price,
      contact,
      images: [image1, image2]
    };
  }

  for (let i = 0; i < 1000; i++) {
    popularListings.push(generateListing());
  }


  popularListings.forEach((listing) => {
      const li = document.createElement('li');
      li.innerHTML = `
          <img src="IMG/${listing.images[0]}" alt="${listing.title}">
          <h2>${listing.title}</h2>
          <p>${listing.description}</p>
          <p>Kategorija: ${listing.category}</p>
          <p>Atrašanās vieta: ${listing.location}</p>
          <p>Cena: ${listing.price} EUR</p>
          <p>Kontaktinformācija: ${listing.contact}</p>
      `;
      listings.appendChild(li);
  });


  function aprekini() {
    const skaitlis1 = parseFloat(document.getElementById('skaitlis1').value);
    const skaitlis2 = parseFloat(document.getElementById('skaitlis2').value);
    const darbība = document.getElementById('darbība').value;

    let rezultāts;

    switch (darbība) {
        case '+':
            rezultāts = skaitlis1 + skaitlis2;
            break;
        case '-':
            rezultāts = skaitlis1 - skaitlis2;
            break;
        case '*':
            rezultāts = skaitlis1 * skaitlis2;
            break;
        case '/':
            if (skaitlis2 === 0) {
                rezultāts = "Dalīšana ar nulli nav definēta";
            } else {
                rezultāts = skaitlis1 / skaitlis2;
            }
            break;
        default:
            rezultāts = "Nepareiza darbība";
    }

    document.getElementById('rezultāts').innerHTML = "Rezultāts: " + rezultāts;
}



function canva() {
    const kanvas = document.getElementById('Virsma');
    const ctx = kanvas.getContext('2d');
    const figūrasTips = document.getElementById('figūrasTips').value;
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const r = parseFloat(document.getElementById('r').value);
    const augstums = parseFloat(document.getElementById('augstums').value) || 0;

    ctx.clearRect(0, 0, kanvas.width, kanvas.height);

    switch (figūrasTips) {
        case 'aplis':
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.stroke();
            break;
        case 'kvadrāts':
            ctx.beginPath();
            ctx.rect(x - r / 2, y - r / 2, r, r);
            ctx.stroke();
            break;
        case 'taisnstūris':
            ctx.beginPath();
            ctx.rect(x - r / 2, y - r / 2, r, augstums);
            ctx.stroke();
            break;
        default:
            console.error("Nepareiza figūras tipa vērtība");
    }
}