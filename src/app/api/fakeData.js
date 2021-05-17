export const listTheaterSystem = JSON.parse(`
[{
    "id": 1,
    "name": "Rhyzio",
    "alias": "JOD",
    "logo": "https://picsum.photos/200/300"
  }, {
    "id": 2,
    "name": "Centimia",
    "alias": "CNY",
    "logo": "https://picsum.photos/200/400"
  }, {
    "id": 3,
    "name": "Rhynoodle",
    "alias": "PEN",
    "logo": "https://picsum.photos/200/200"
  }, {
    "id": 4,
    "name": "Abatz",
    "alias": "RUB",
    "logo": "https://picsum.photos/300/300"
  }, {
    "id": 5,
    "name": "Quatz",
    "alias": "KHR",
    "logo": "https://picsum.photos/300/200"
  }]  
`);

export const listCumRap = (theaterSystemId) => {
  let data = JSON.parse(`
  [{
    "id": 1,
    "name": "Berge Group",
    "information": "Fusce consequat. Nulla nisl. Nunc nisl.",
    "theaterSystemName": "Centimia",
    "theaterSystemId": 1
  }, {
    "id": 2,
    "name": "Zulauf, Feil and Ullrich",
    "information": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "theaterSystemName": "Jaloo",
    "theaterSystemId": 3
  }, {
    "id": 3,
    "name": "Boyer and Sons",
    "information": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "theaterSystemName": "Vitz",
    "theaterSystemId": 2
  }, {
    "id": 4,
    "name": "Pagac LLC",
    "information": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "theaterSystemName": "Brainverse",
    "theaterSystemId": 2
  }, {
    "id": 5,
    "name": "Sipes, Bahringer and Waters",
    "information": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    "theaterSystemName": "Bluejam",
    "theaterSystemId": 3
  }, {
    "id": 6,
    "name": "Conroy-Glover",
    "information": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "theaterSystemName": "Twinder",
    "theaterSystemId": 3
  }, {
    "id": 7,
    "name": "Kertzmann Inc",
    "information": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "theaterSystemName": "Dazzlesphere",
    "theaterSystemId": 4
  }, {
    "id": 8,
    "name": "Jacobi and Sons",
    "information": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    "theaterSystemName": "Twimbo",
    "theaterSystemId": 2
  }, {
    "id": 9,
    "name": "Pfeffer-Dicki",
    "information": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "theaterSystemName": "Twimbo",
    "theaterSystemId": 4
  }, {
    "id": 10,
    "name": "McGlynn Inc",
    "information": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "theaterSystemName": "Skimia",
    "theaterSystemId": 2
  }]
  `);

  for (let i = 0; i < data.length; i++) {
    let theaterSystem = listTheaterSystem.find(
      (e) => e.id === data[i].theaterSystemId
    );

    data[i] = {
      ...data[i],
      theaterSystemName: theaterSystem.name,
      theaterSystemId: theaterSystem.id,
    };
  }

  if (theaterSystemId) {
    data = data.filter((e) => e.theaterSystemId === theaterSystemId);
  }

  return data;
};

export const listPhongChieu = (cumRapId) => {
  let data = JSON.parse(`
  [{
    "id": 1,
    "name": "BRL",
    "amountSeats": "Chilver",
    "theaterSystemName": "Pamidronate Disodium",
    "cumRapName": "Lotlux",
    "cumRapId": 1
  }, {
    "id": 2,
    "name": "EUR",
    "amountSeats": "Rosenzwig",
    "theaterSystemName": "LidoCream 5",
    "cumRapName": "Flexidy",
    "cumRapId": 4
  }, {
    "id": 3,
    "name": "CNY",
    "amountSeats": "Tolland",
    "theaterSystemName": "Sweet Grape Antibacterial Hand",
    "cumRapName": "Vagram",
    "cumRapId": 2
  }, {
    "id": 4,
    "name": "CNY",
    "amountSeats": "Dulake",
    "theaterSystemName": "Metronidazole",
    "cumRapName": "Bitchip",
    "cumRapId": 2
  }, {
    "id": 5,
    "name": "USD",
    "amountSeats": "Cribbott",
    "theaterSystemName": "Terbinafine Hydrochloride",
    "cumRapName": "Latlux",
    "cumRapId": 3
  }, {
    "id": 6,
    "name": "BRL",
    "amountSeats": "Durnill",
    "theaterSystemName": "Mesquite",
    "cumRapName": "Stim",
    "cumRapId": 9
  }, {
    "id": 7,
    "name": "EUR",
    "amountSeats": "Kainz",
    "theaterSystemName": "CD DIORSNOW UV SHIELD BB CREME LIGHT SHADE WHITE REVEAL UV PROTECTION SPF 50",
    "cumRapName": "Konklux",
    "cumRapId": 9
  }, {
    "id": 8,
    "name": "EUR",
    "amountSeats": "Titford",
    "theaterSystemName": "ESIKA HD COLOR HIGH DEFINITION COLOR SPF 20",
    "cumRapName": "Ventosanzap",
    "cumRapId": 10
  }, {
    "id": 9,
    "name": "IDR",
    "amountSeats": "Lomasna",
    "theaterSystemName": "ziprasidone hydrochloride",
    "cumRapName": "Bitchip",
    "cumRapId": 10
  }, {
    "id": 10,
    "name": "COP",
    "amountSeats": "Wrigglesworth",
    "theaterSystemName": "Omeprazole",
    "cumRapName": "Tin",
    "cumRapId": 5
  }, {
    "id": 11,
    "name": "UAH",
    "amountSeats": "Markovich",
    "theaterSystemName": "Magnesium Sulfate",
    "cumRapName": "Tresom",
    "cumRapId": 8
  }, {
    "id": 12,
    "name": "RUB",
    "amountSeats": "Ruggles",
    "theaterSystemName": "Vancomycin Hydrochloride",
    "cumRapName": "Bamity",
    "cumRapId": 10
  }, {
    "id": 13,
    "name": "SEK",
    "amountSeats": "Gambrell",
    "theaterSystemName": "Glyburide and Metformin Hydrochloride",
    "cumRapName": "Trippledex",
    "cumRapId": 6
  }, {
    "id": 14,
    "name": "GMD",
    "amountSeats": "Laying",
    "theaterSystemName": "Anticavity Fluoride Rinse",
    "cumRapName": "Zoolab",
    "cumRapId": 2
  }, {
    "id": 15,
    "name": "PLN",
    "amountSeats": "Tilte",
    "theaterSystemName": "nifedipine",
    "cumRapName": "Hatity",
    "cumRapId": 6
  }, {
    "id": 16,
    "name": "CNY",
    "amountSeats": "Hooks",
    "theaterSystemName": "Methocarbamol",
    "cumRapName": "Job",
    "cumRapId": 7
  }, {
    "id": 17,
    "name": "CUP",
    "amountSeats": "Dawtry",
    "theaterSystemName": "Amlodipine Besylate and Benazepril Hydrochloride",
    "cumRapName": "Stim",
    "cumRapId": 10
  }, {
    "id": 18,
    "name": "EUR",
    "amountSeats": "Weems",
    "theaterSystemName": "Ropinirole Hydrochloride",
    "cumRapName": "Stringtough",
    "cumRapId": 9
  }, {
    "id": 19,
    "name": "CNY",
    "amountSeats": "Boother",
    "theaterSystemName": "Sinus Relief",
    "cumRapName": "Stim",
    "cumRapId": 10
  }, {
    "id": 20,
    "name": "PLN",
    "amountSeats": "Alyokhin",
    "theaterSystemName": "Atenolol",
    "cumRapName": "Zathin",
    "cumRapId": 6
  }, {
    "id": 21,
    "name": "PLN",
    "amountSeats": "Shay",
    "theaterSystemName": "TOPIRAMATE",
    "cumRapName": "Toughjoyfax",
    "cumRapId": 1
  }, {
    "id": 22,
    "name": "PLN",
    "amountSeats": "Lamport",
    "theaterSystemName": "Pramipexole",
    "cumRapName": "Vagram",
    "cumRapId": 3
  }, {
    "id": 23,
    "name": "RUB",
    "amountSeats": "Spratling",
    "theaterSystemName": "Leader Naproxen Sodium",
    "cumRapName": "Lotlux",
    "cumRapId": 10
  }, {
    "id": 24,
    "name": "ISK",
    "amountSeats": "Heller",
    "theaterSystemName": "CPDA-1",
    "cumRapName": "Aerified",
    "cumRapId": 1
  }, {
    "id": 25,
    "name": "NGN",
    "amountSeats": "Pellman",
    "theaterSystemName": "White Birch",
    "cumRapName": "Bytecard",
    "cumRapId": 4
  }, {
    "id": 26,
    "name": "AFN",
    "amountSeats": "Lundbeck",
    "theaterSystemName": "Gabapentin",
    "cumRapName": "Treeflex",
    "cumRapId": 2
  }, {
    "id": 27,
    "name": "PHP",
    "amountSeats": "Warret",
    "theaterSystemName": "CD CAPTURE TOTALE Multi-Perfection UVB Base Sunscreen SPF 50",
    "cumRapName": "Latlux",
    "cumRapId": 4
  }, {
    "id": 28,
    "name": "YER",
    "amountSeats": "Chittock",
    "theaterSystemName": "Notaflu Lemon Oil",
    "cumRapName": "Zamit",
    "cumRapId": 10
  }, {
    "id": 29,
    "name": "JPY",
    "amountSeats": "Trump",
    "theaterSystemName": "POPULUS DELTOIDES SSP MONILIFERA POLLEN",
    "cumRapName": "Solarbreeze",
    "cumRapId": 1
  }, {
    "id": 30,
    "name": "CNY",
    "amountSeats": "Pettican",
    "theaterSystemName": "ShopRite Ibuprofen IB",
    "cumRapName": "Viva",
    "cumRapId": 1
  }]
  
  `);
  for (let index = 0; index < data.length; index++) {
    let cumRap = listCumRap().find((e) => e.id === data[index].cumRapId);
    data[index] = { ...data[index], cumRapName: cumRap?.name };
  }
  if (cumRapId) {
    data = data.filter((e) => e.cumRapId === cumRapId);
  }
  return data;
};

export const listMovies = JSON.parse(`
[{
  "id": 1,
  "name": "Learning to Ride",
  "image": "https://picsum.photos/200/300",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "premiereDay": "1/25/2021",
  "rate": 4.8
}, {
  "id": 2,
  "name": "Clearing, The",
  "image": "https://picsum.photos/200/100",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "premiereDay": "4/3/2021",
  "rate": 8.4
}, {
  "id": 3,
  "name": "Machine Gun Preacher",
  "image": "https://picsum.photos/400/200",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  "premiereDay": "7/29/2020",
  "rate": 6.1
}, {
  "id": 4,
  "name": "Kiss the Bride",
  "image": "https://picsum.photos/400/300",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "premiereDay": "5/28/2020",
  "rate": 4.6
}, {
  "id": 5,
  "name": "Nightmare Before Christmas, The",
  "image": "https://picsum.photos/200/400",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "premiereDay": "1/5/2021",
  "rate": 3.7
}, {
  "id": 6,
  "name": "One Nite In Mongkok (Wong gok hak yau)",
  "image": "https://picsum.photos/400/400",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "premiereDay": "5/27/2020",
  "rate": 7.2
}, {
  "id": 7,
  "name": "Perifery (Härmä)",
  "image": "https://picsum.photos/400/300",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "premiereDay": "8/8/2020",
  "rate": 3.4
}, {
  "id": 8,
  "name": "Rosa Luxemburg",
  "image": "https://picsum.photos/300/400",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "premiereDay": "8/24/2020",
  "rate": 9.5
}, {
  "id": 9,
  "name": "Public Enemy, The",
  "image": "https://picsum.photos/300/300",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "premiereDay": "10/1/2021",
  "rate": 1.0
}, {
  "id": 10,
  "name": "Crimes and Misdemeanors",
  "image": "https://picsum.photos/200/200",
  "trailer": "https://youtu.be/TcMBFSGVi1c",
  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "premiereDay": "9/29/2020",
  "rate": 4.5
}]
`);

export const listMovieTypes = JSON.parse(
  `[{
    "id": 1,
    "name": "Drama"
  }, {
    "id": 2,
    "name": "Drama"
  }, {
    "id": 3,
    "name": "Animation"
  }, {
    "id": 4,
    "name": "Horror"
  }, {
    "id": 5,
    "name": "Comedy"
  }, {
    "id": 6,
    "name": "Drama|Romance|War"
  }, {
    "id": 7,
    "name": "Fantasy|Horror|Thriller"
  }, {
    "id": 8,
    "name": "Drama|Western"
  }, {
    "id": 9,
    "name": "Mystery|Thriller"
  }, {
    "id": 10,
    "name": "Drama|Western"
  }]`
);
