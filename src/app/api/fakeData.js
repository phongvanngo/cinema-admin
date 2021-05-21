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

export const listShowTime = JSON.parse(`
[
  {
    "id": 200,
    "time": "Sunday, May 23, 2021 3:06 AM",
    "cumRapId": 1,
    "phongChieuId": 5,
    "movieId": 1
  },
  {
    "id": 201,
    "time": "Friday, May 21, 2021 9:04 AM",
    "cumRapId": 2,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 202,
    "time": "Tuesday, May 25, 2021 1:12 PM",
    "cumRapId": 10,
    "phongChieuId": 3,
    "movieId": 7
  },
  {
    "id": 203,
    "time": "Wednesday, May 26, 2021 12:26 PM",
    "cumRapId": 8,
    "phongChieuId": 9,
    "movieId": 7
  },
  {
    "id": 204,
    "time": "Monday, May 24, 2021 8:39 AM",
    "cumRapId": 7,
    "phongChieuId": 10,
    "movieId": 8
  },
  {
    "id": 205,
    "time": "Monday, May 24, 2021 10:23 PM",
    "cumRapId": 4,
    "phongChieuId": 3,
    "movieId": 3
  },
  {
    "id": 206,
    "time": "Friday, May 21, 2021 4:43 PM",
    "cumRapId": 9,
    "phongChieuId": 4,
    "movieId": 4
  },
  {
    "id": 207,
    "time": "Saturday, May 22, 2021 12:35 AM",
    "cumRapId": 5,
    "phongChieuId": 1,
    "movieId": 3
  },
  {
    "id": 208,
    "time": "Monday, May 24, 2021 3:04 PM",
    "cumRapId": 1,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 209,
    "time": "Sunday, May 23, 2021 6:21 PM",
    "cumRapId": 2,
    "phongChieuId": 7,
    "movieId": 5
  },
  {
    "id": 210,
    "time": "Friday, May 21, 2021 8:14 AM",
    "cumRapId": 4,
    "phongChieuId": 10,
    "movieId": 6
  },
  {
    "id": 211,
    "time": "Friday, May 21, 2021 1:25 PM",
    "cumRapId": 2,
    "phongChieuId": 6,
    "movieId": 9
  },
  {
    "id": 212,
    "time": "Friday, May 21, 2021 7:10 AM",
    "cumRapId": 7,
    "phongChieuId": 2,
    "movieId": 8
  },
  {
    "id": 213,
    "time": "Friday, May 21, 2021 4:15 AM",
    "cumRapId": 9,
    "phongChieuId": 9,
    "movieId": 1
  },
  {
    "id": 214,
    "time": "Monday, May 24, 2021 1:52 AM",
    "cumRapId": 9,
    "phongChieuId": 3,
    "movieId": 1
  },
  {
    "id": 215,
    "time": "Saturday, May 22, 2021 3:39 AM",
    "cumRapId": 5,
    "phongChieuId": 7,
    "movieId": 2
  },
  {
    "id": 216,
    "time": "Saturday, May 22, 2021 4:56 PM",
    "cumRapId": 7,
    "phongChieuId": 8,
    "movieId": 10
  },
  {
    "id": 217,
    "time": "Wednesday, May 26, 2021 5:11 PM",
    "cumRapId": 1,
    "phongChieuId": 10,
    "movieId": 3
  },
  {
    "id": 218,
    "time": "Sunday, May 23, 2021 7:21 PM",
    "cumRapId": 8,
    "phongChieuId": 3,
    "movieId": 6
  },
  {
    "id": 219,
    "time": "Tuesday, May 25, 2021 8:22 PM",
    "cumRapId": 4,
    "phongChieuId": 10,
    "movieId": 9
  },
  {
    "id": 220,
    "time": "Wednesday, May 26, 2021 10:25 AM",
    "cumRapId": 3,
    "phongChieuId": 3,
    "movieId": 4
  },
  {
    "id": 221,
    "time": "Saturday, May 22, 2021 11:39 AM",
    "cumRapId": 2,
    "phongChieuId": 5,
    "movieId": 3
  },
  {
    "id": 222,
    "time": "Tuesday, May 25, 2021 10:21 PM",
    "cumRapId": 1,
    "phongChieuId": 1,
    "movieId": 4
  },
  {
    "id": 223,
    "time": "Saturday, May 22, 2021 11:22 AM",
    "cumRapId": 8,
    "phongChieuId": 8,
    "movieId": 5
  },
  {
    "id": 224,
    "time": "Saturday, May 22, 2021 11:09 PM",
    "cumRapId": 5,
    "phongChieuId": 7,
    "movieId": 9
  },
  {
    "id": 225,
    "time": "Friday, May 21, 2021 6:20 PM",
    "cumRapId": 9,
    "phongChieuId": 3,
    "movieId": 8
  },
  {
    "id": 226,
    "time": "Monday, May 24, 2021 8:12 PM",
    "cumRapId": 9,
    "phongChieuId": 10,
    "movieId": 5
  },
  {
    "id": 227,
    "time": "Friday, May 21, 2021 2:49 AM",
    "cumRapId": 8,
    "phongChieuId": 10,
    "movieId": 2
  },
  {
    "id": 228,
    "time": "Wednesday, May 26, 2021 6:11 PM",
    "cumRapId": 2,
    "phongChieuId": 10,
    "movieId": 2
  },
  {
    "id": 229,
    "time": "Monday, May 24, 2021 4:58 AM",
    "cumRapId": 1,
    "phongChieuId": 3,
    "movieId": 10
  },
  {
    "id": 230,
    "time": "Wednesday, May 26, 2021 5:20 PM",
    "cumRapId": 4,
    "phongChieuId": 5,
    "movieId": 2
  },
  {
    "id": 231,
    "time": "Friday, May 21, 2021 2:56 PM",
    "cumRapId": 6,
    "phongChieuId": 3,
    "movieId": 10
  },
  {
    "id": 232,
    "time": "Wednesday, May 26, 2021 7:34 PM",
    "cumRapId": 5,
    "phongChieuId": 5,
    "movieId": 8
  },
  {
    "id": 233,
    "time": "Friday, May 21, 2021 11:22 AM",
    "cumRapId": 10,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 234,
    "time": "Wednesday, May 26, 2021 9:09 PM",
    "cumRapId": 5,
    "phongChieuId": 4,
    "movieId": 6
  },
  {
    "id": 235,
    "time": "Monday, May 24, 2021 11:59 PM",
    "cumRapId": 10,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 236,
    "time": "Sunday, May 23, 2021 2:09 PM",
    "cumRapId": 5,
    "phongChieuId": 4,
    "movieId": 6
  },
  {
    "id": 237,
    "time": "Friday, May 21, 2021 11:48 PM",
    "cumRapId": 5,
    "phongChieuId": 3,
    "movieId": 4
  },
  {
    "id": 238,
    "time": "Sunday, May 23, 2021 1:21 AM",
    "cumRapId": 3,
    "phongChieuId": 6,
    "movieId": 1
  },
  {
    "id": 239,
    "time": "Monday, May 24, 2021 3:24 PM",
    "cumRapId": 4,
    "phongChieuId": 6,
    "movieId": 2
  },
  {
    "id": 240,
    "time": "Friday, May 21, 2021 2:54 PM",
    "cumRapId": 5,
    "phongChieuId": 3,
    "movieId": 4
  },
  {
    "id": 241,
    "time": "Friday, May 21, 2021 5:28 AM",
    "cumRapId": 10,
    "phongChieuId": 1,
    "movieId": 9
  },
  {
    "id": 242,
    "time": "Saturday, May 22, 2021 11:59 AM",
    "cumRapId": 10,
    "phongChieuId": 2,
    "movieId": 2
  },
  {
    "id": 243,
    "time": "Wednesday, May 26, 2021 8:22 PM",
    "cumRapId": 5,
    "phongChieuId": 7,
    "movieId": 2
  },
  {
    "id": 244,
    "time": "Wednesday, May 26, 2021 1:39 AM",
    "cumRapId": 8,
    "phongChieuId": 1,
    "movieId": 5
  },
  {
    "id": 245,
    "time": "Saturday, May 22, 2021 2:09 PM",
    "cumRapId": 2,
    "phongChieuId": 5,
    "movieId": 7
  },
  {
    "id": 246,
    "time": "Friday, May 21, 2021 6:27 PM",
    "cumRapId": 8,
    "phongChieuId": 1,
    "movieId": 4
  },
  {
    "id": 247,
    "time": "Sunday, May 23, 2021 6:11 PM",
    "cumRapId": 3,
    "phongChieuId": 5,
    "movieId": 10
  },
  {
    "id": 248,
    "time": "Saturday, May 22, 2021 6:43 AM",
    "cumRapId": 8,
    "phongChieuId": 4,
    "movieId": 3
  },
  {
    "id": 249,
    "time": "Wednesday, May 26, 2021 7:41 PM",
    "cumRapId": 7,
    "phongChieuId": 3,
    "movieId": 6
  },
  {
    "id": 250,
    "time": "Friday, May 21, 2021 10:39 PM",
    "cumRapId": 8,
    "phongChieuId": 5,
    "movieId": 8
  },
  {
    "id": 251,
    "time": "Sunday, May 23, 2021 3:23 PM",
    "cumRapId": 7,
    "phongChieuId": 3,
    "movieId": 8
  },
  {
    "id": 252,
    "time": "Tuesday, May 25, 2021 12:35 AM",
    "cumRapId": 8,
    "phongChieuId": 6,
    "movieId": 2
  },
  {
    "id": 253,
    "time": "Monday, May 24, 2021 2:54 AM",
    "cumRapId": 8,
    "phongChieuId": 2,
    "movieId": 2
  },
  {
    "id": 254,
    "time": "Friday, May 21, 2021 6:31 PM",
    "cumRapId": 9,
    "phongChieuId": 6,
    "movieId": 5
  },
  {
    "id": 255,
    "time": "Friday, May 21, 2021 5:40 AM",
    "cumRapId": 3,
    "phongChieuId": 9,
    "movieId": 9
  },
  {
    "id": 256,
    "time": "Friday, May 21, 2021 7:31 AM",
    "cumRapId": 2,
    "phongChieuId": 9,
    "movieId": 9
  },
  {
    "id": 257,
    "time": "Friday, May 21, 2021 2:29 PM",
    "cumRapId": 4,
    "phongChieuId": 6,
    "movieId": 3
  },
  {
    "id": 258,
    "time": "Saturday, May 22, 2021 2:36 PM",
    "cumRapId": 3,
    "phongChieuId": 5,
    "movieId": 6
  },
  {
    "id": 259,
    "time": "Tuesday, May 25, 2021 9:37 AM",
    "cumRapId": 7,
    "phongChieuId": 5,
    "movieId": 1
  },
  {
    "id": 260,
    "time": "Monday, May 24, 2021 12:45 AM",
    "cumRapId": 2,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 261,
    "time": "Friday, May 21, 2021 3:28 PM",
    "cumRapId": 1,
    "phongChieuId": 4,
    "movieId": 9
  },
  {
    "id": 262,
    "time": "Sunday, May 23, 2021 1:37 PM",
    "cumRapId": 2,
    "phongChieuId": 3,
    "movieId": 7
  },
  {
    "id": 263,
    "time": "Monday, May 24, 2021 9:48 PM",
    "cumRapId": 4,
    "phongChieuId": 1,
    "movieId": 9
  },
  {
    "id": 264,
    "time": "Sunday, May 23, 2021 6:59 AM",
    "cumRapId": 4,
    "phongChieuId": 10,
    "movieId": 2
  },
  {
    "id": 265,
    "time": "Tuesday, May 25, 2021 7:22 AM",
    "cumRapId": 3,
    "phongChieuId": 6,
    "movieId": 4
  },
  {
    "id": 266,
    "time": "Tuesday, May 25, 2021 9:29 AM",
    "cumRapId": 7,
    "phongChieuId": 1,
    "movieId": 1
  },
  {
    "id": 267,
    "time": "Friday, May 21, 2021 4:04 PM",
    "cumRapId": 8,
    "phongChieuId": 5,
    "movieId": 2
  },
  {
    "id": 268,
    "time": "Wednesday, May 26, 2021 6:16 AM",
    "cumRapId": 2,
    "phongChieuId": 5,
    "movieId": 2
  },
  {
    "id": 269,
    "time": "Tuesday, May 25, 2021 7:40 PM",
    "cumRapId": 8,
    "phongChieuId": 2,
    "movieId": 7
  },
  {
    "id": 270,
    "time": "Friday, May 21, 2021 1:59 AM",
    "cumRapId": 9,
    "phongChieuId": 4,
    "movieId": 8
  },
  {
    "id": 271,
    "time": "Tuesday, May 25, 2021 7:36 PM",
    "cumRapId": 8,
    "phongChieuId": 7,
    "movieId": 5
  },
  {
    "id": 272,
    "time": "Tuesday, May 25, 2021 9:05 PM",
    "cumRapId": 2,
    "phongChieuId": 9,
    "movieId": 9
  },
  {
    "id": 273,
    "time": "Friday, May 21, 2021 6:32 PM",
    "cumRapId": 3,
    "phongChieuId": 3,
    "movieId": 6
  },
  {
    "id": 274,
    "time": "Saturday, May 22, 2021 12:51 PM",
    "cumRapId": 10,
    "phongChieuId": 9,
    "movieId": 5
  },
  {
    "id": 275,
    "time": "Friday, May 21, 2021 10:41 PM",
    "cumRapId": 6,
    "phongChieuId": 5,
    "movieId": 6
  },
  {
    "id": 276,
    "time": "Wednesday, May 26, 2021 6:48 AM",
    "cumRapId": 1,
    "phongChieuId": 4,
    "movieId": 4
  },
  {
    "id": 277,
    "time": "Friday, May 21, 2021 7:10 AM",
    "cumRapId": 6,
    "phongChieuId": 3,
    "movieId": 1
  },
  {
    "id": 278,
    "time": "Tuesday, May 25, 2021 6:43 AM",
    "cumRapId": 7,
    "phongChieuId": 7,
    "movieId": 5
  },
  {
    "id": 279,
    "time": "Tuesday, May 25, 2021 7:54 PM",
    "cumRapId": 4,
    "phongChieuId": 1,
    "movieId": 5
  },
  {
    "id": 280,
    "time": "Monday, May 24, 2021 10:45 PM",
    "cumRapId": 4,
    "phongChieuId": 4,
    "movieId": 7
  },
  {
    "id": 281,
    "time": "Sunday, May 23, 2021 1:55 PM",
    "cumRapId": 5,
    "phongChieuId": 4,
    "movieId": 5
  },
  {
    "id": 282,
    "time": "Wednesday, May 26, 2021 4:45 PM",
    "cumRapId": 10,
    "phongChieuId": 7,
    "movieId": 10
  },
  {
    "id": 283,
    "time": "Monday, May 24, 2021 3:47 PM",
    "cumRapId": 3,
    "phongChieuId": 2,
    "movieId": 3
  },
  {
    "id": 284,
    "time": "Saturday, May 22, 2021 7:37 AM",
    "cumRapId": 8,
    "phongChieuId": 7,
    "movieId": 1
  },
  {
    "id": 285,
    "time": "Wednesday, May 26, 2021 7:27 AM",
    "cumRapId": 10,
    "phongChieuId": 8,
    "movieId": 5
  },
  {
    "id": 286,
    "time": "Wednesday, May 26, 2021 2:14 PM",
    "cumRapId": 8,
    "phongChieuId": 2,
    "movieId": 4
  },
  {
    "id": 287,
    "time": "Friday, May 21, 2021 8:01 AM",
    "cumRapId": 10,
    "phongChieuId": 9,
    "movieId": 5
  },
  {
    "id": 288,
    "time": "Tuesday, May 25, 2021 10:54 AM",
    "cumRapId": 1,
    "phongChieuId": 6,
    "movieId": 2
  },
  {
    "id": 289,
    "time": "Wednesday, May 26, 2021 9:24 AM",
    "cumRapId": 5,
    "phongChieuId": 9,
    "movieId": 9
  },
  {
    "id": 290,
    "time": "Tuesday, May 25, 2021 8:40 PM",
    "cumRapId": 9,
    "phongChieuId": 8,
    "movieId": 6
  },
  {
    "id": 291,
    "time": "Tuesday, May 25, 2021 2:27 PM",
    "cumRapId": 4,
    "phongChieuId": 8,
    "movieId": 5
  },
  {
    "id": 292,
    "time": "Friday, May 21, 2021 2:56 AM",
    "cumRapId": 3,
    "phongChieuId": 2,
    "movieId": 3
  },
  {
    "id": 293,
    "time": "Sunday, May 23, 2021 8:11 AM",
    "cumRapId": 6,
    "phongChieuId": 5,
    "movieId": 5
  },
  {
    "id": 294,
    "time": "Wednesday, May 26, 2021 10:35 PM",
    "cumRapId": 7,
    "phongChieuId": 3,
    "movieId": 9
  },
  {
    "id": 295,
    "time": "Sunday, May 23, 2021 7:17 PM",
    "cumRapId": 1,
    "phongChieuId": 9,
    "movieId": 9
  },
  {
    "id": 296,
    "time": "Saturday, May 22, 2021 6:40 AM",
    "cumRapId": 8,
    "phongChieuId": 5,
    "movieId": 10
  },
  {
    "id": 297,
    "time": "Saturday, May 22, 2021 4:40 AM",
    "cumRapId": 6,
    "phongChieuId": 9,
    "movieId": 5
  },
  {
    "id": 298,
    "time": "Monday, May 24, 2021 10:12 AM",
    "cumRapId": 2,
    "phongChieuId": 5,
    "movieId": 10
  },
  {
    "id": 299,
    "time": "Sunday, May 23, 2021 4:26 AM",
    "cumRapId": 10,
    "phongChieuId": 3,
    "movieId": 9
  },
  {
    "id": 0,
    "time": "Monday, May 24, 2021 7:40 PM",
    "cumRapId": 7,
    "phongChieuId": 3,
    "movieId": 5
  },
  {
    "id": 1,
    "time": "Friday, May 21, 2021 12:31 AM",
    "cumRapId": 4,
    "phongChieuId": 1,
    "movieId": 2
  },
  {
    "id": 2,
    "time": "Sunday, May 23, 2021 6:14 PM",
    "cumRapId": 4,
    "phongChieuId": 6,
    "movieId": 10
  },
  {
    "id": 3,
    "time": "Wednesday, May 26, 2021 11:50 AM",
    "cumRapId": 10,
    "phongChieuId": 8,
    "movieId": 6
  },
  {
    "id": 4,
    "time": "Wednesday, May 26, 2021 4:56 AM",
    "cumRapId": 6,
    "phongChieuId": 9,
    "movieId": 8
  },
  {
    "id": 5,
    "time": "Sunday, May 23, 2021 4:29 AM",
    "cumRapId": 4,
    "phongChieuId": 9,
    "movieId": 4
  },
  {
    "id": 6,
    "time": "Friday, May 21, 2021 10:37 PM",
    "cumRapId": 1,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 7,
    "time": "Saturday, May 22, 2021 9:23 AM",
    "cumRapId": 9,
    "phongChieuId": 9,
    "movieId": 3
  },
  {
    "id": 8,
    "time": "Saturday, May 22, 2021 7:18 AM",
    "cumRapId": 2,
    "phongChieuId": 6,
    "movieId": 2
  },
  {
    "id": 9,
    "time": "Friday, May 21, 2021 8:30 AM",
    "cumRapId": 3,
    "phongChieuId": 7,
    "movieId": 9
  },
  {
    "id": 10,
    "time": "Saturday, May 22, 2021 3:39 PM",
    "cumRapId": 9,
    "phongChieuId": 3,
    "movieId": 9
  },
  {
    "id": 11,
    "time": "Saturday, May 22, 2021 2:12 PM",
    "cumRapId": 6,
    "phongChieuId": 3,
    "movieId": 9
  },
  {
    "id": 12,
    "time": "Friday, May 21, 2021 10:23 AM",
    "cumRapId": 5,
    "phongChieuId": 5,
    "movieId": 3
  },
  {
    "id": 13,
    "time": "Monday, May 24, 2021 1:00 AM",
    "cumRapId": 2,
    "phongChieuId": 5,
    "movieId": 9
  },
  {
    "id": 14,
    "time": "Tuesday, May 25, 2021 11:46 PM",
    "cumRapId": 6,
    "phongChieuId": 4,
    "movieId": 1
  },
  {
    "id": 15,
    "time": "Monday, May 24, 2021 3:36 PM",
    "cumRapId": 3,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 16,
    "time": "Monday, May 24, 2021 2:08 PM",
    "cumRapId": 6,
    "phongChieuId": 2,
    "movieId": 1
  },
  {
    "id": 17,
    "time": "Saturday, May 22, 2021 11:45 PM",
    "cumRapId": 9,
    "phongChieuId": 5,
    "movieId": 10
  },
  {
    "id": 18,
    "time": "Friday, May 21, 2021 8:49 PM",
    "cumRapId": 1,
    "phongChieuId": 2,
    "movieId": 5
  },
  {
    "id": 19,
    "time": "Friday, May 21, 2021 1:09 AM",
    "cumRapId": 3,
    "phongChieuId": 9,
    "movieId": 2
  },
  {
    "id": 20,
    "time": "Sunday, May 23, 2021 9:39 AM",
    "cumRapId": 3,
    "phongChieuId": 9,
    "movieId": 5
  },
  {
    "id": 21,
    "time": "Monday, May 24, 2021 1:15 AM",
    "cumRapId": 1,
    "phongChieuId": 8,
    "movieId": 3
  },
  {
    "id": 22,
    "time": "Saturday, May 22, 2021 7:43 AM",
    "cumRapId": 2,
    "phongChieuId": 8,
    "movieId": 9
  },
  {
    "id": 23,
    "time": "Tuesday, May 25, 2021 5:59 PM",
    "cumRapId": 7,
    "phongChieuId": 6,
    "movieId": 2
  },
  {
    "id": 24,
    "time": "Tuesday, May 25, 2021 3:31 AM",
    "cumRapId": 10,
    "phongChieuId": 5,
    "movieId": 5
  },
  {
    "id": 25,
    "time": "Tuesday, May 25, 2021 12:19 PM",
    "cumRapId": 10,
    "phongChieuId": 2,
    "movieId": 8
  },
  {
    "id": 26,
    "time": "Tuesday, May 25, 2021 3:36 AM",
    "cumRapId": 8,
    "phongChieuId": 6,
    "movieId": 10
  },
  {
    "id": 27,
    "time": "Tuesday, May 25, 2021 10:59 AM",
    "cumRapId": 8,
    "phongChieuId": 8,
    "movieId": 7
  },
  {
    "id": 28,
    "time": "Sunday, May 23, 2021 12:46 PM",
    "cumRapId": 3,
    "phongChieuId": 7,
    "movieId": 6
  },
  {
    "id": 29,
    "time": "Tuesday, May 25, 2021 2:23 PM",
    "cumRapId": 6,
    "phongChieuId": 9,
    "movieId": 7
  },
  {
    "id": 30,
    "time": "Sunday, May 23, 2021 5:52 AM",
    "cumRapId": 10,
    "phongChieuId": 3,
    "movieId": 3
  },
  {
    "id": 31,
    "time": "Monday, May 24, 2021 7:03 AM",
    "cumRapId": 5,
    "phongChieuId": 6,
    "movieId": 7
  },
  {
    "id": 32,
    "time": "Sunday, May 23, 2021 2:35 AM",
    "cumRapId": 8,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 33,
    "time": "Monday, May 24, 2021 11:24 PM",
    "cumRapId": 7,
    "phongChieuId": 5,
    "movieId": 1
  },
  {
    "id": 34,
    "time": "Tuesday, May 25, 2021 7:28 PM",
    "cumRapId": 6,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 35,
    "time": "Saturday, May 22, 2021 5:29 PM",
    "cumRapId": 7,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 36,
    "time": "Tuesday, May 25, 2021 9:05 AM",
    "cumRapId": 3,
    "phongChieuId": 8,
    "movieId": 1
  },
  {
    "id": 37,
    "time": "Sunday, May 23, 2021 11:47 PM",
    "cumRapId": 2,
    "phongChieuId": 3,
    "movieId": 10
  },
  {
    "id": 38,
    "time": "Sunday, May 23, 2021 12:58 AM",
    "cumRapId": 1,
    "phongChieuId": 4,
    "movieId": 5
  },
  {
    "id": 39,
    "time": "Sunday, May 23, 2021 11:36 PM",
    "cumRapId": 4,
    "phongChieuId": 4,
    "movieId": 3
  },
  {
    "id": 40,
    "time": "Wednesday, May 26, 2021 8:04 AM",
    "cumRapId": 1,
    "phongChieuId": 3,
    "movieId": 8
  },
  {
    "id": 41,
    "time": "Monday, May 24, 2021 11:43 AM",
    "cumRapId": 3,
    "phongChieuId": 4,
    "movieId": 8
  },
  {
    "id": 42,
    "time": "Sunday, May 23, 2021 6:28 AM",
    "cumRapId": 8,
    "phongChieuId": 10,
    "movieId": 9
  },
  {
    "id": 43,
    "time": "Saturday, May 22, 2021 8:11 PM",
    "cumRapId": 4,
    "phongChieuId": 4,
    "movieId": 7
  },
  {
    "id": 44,
    "time": "Monday, May 24, 2021 5:27 AM",
    "cumRapId": 10,
    "phongChieuId": 3,
    "movieId": 2
  },
  {
    "id": 45,
    "time": "Tuesday, May 25, 2021 4:57 AM",
    "cumRapId": 4,
    "phongChieuId": 10,
    "movieId": 1
  },
  {
    "id": 46,
    "time": "Sunday, May 23, 2021 5:40 AM",
    "cumRapId": 1,
    "phongChieuId": 3,
    "movieId": 10
  },
  {
    "id": 47,
    "time": "Sunday, May 23, 2021 8:42 AM",
    "cumRapId": 2,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 48,
    "time": "Saturday, May 22, 2021 11:18 AM",
    "cumRapId": 5,
    "phongChieuId": 3,
    "movieId": 2
  },
  {
    "id": 49,
    "time": "Tuesday, May 25, 2021 9:50 AM",
    "cumRapId": 1,
    "phongChieuId": 8,
    "movieId": 10
  },
  {
    "id": 50,
    "time": "Tuesday, May 25, 2021 9:28 PM",
    "cumRapId": 2,
    "phongChieuId": 9,
    "movieId": 4
  },
  {
    "id": 51,
    "time": "Friday, May 21, 2021 8:29 AM",
    "cumRapId": 9,
    "phongChieuId": 9,
    "movieId": 2
  },
  {
    "id": 52,
    "time": "Friday, May 21, 2021 5:46 PM",
    "cumRapId": 7,
    "phongChieuId": 3,
    "movieId": 7
  },
  {
    "id": 53,
    "time": "Tuesday, May 25, 2021 12:54 AM",
    "cumRapId": 6,
    "phongChieuId": 10,
    "movieId": 10
  },
  {
    "id": 54,
    "time": "Sunday, May 23, 2021 11:52 AM",
    "cumRapId": 8,
    "phongChieuId": 1,
    "movieId": 8
  },
  {
    "id": 55,
    "time": "Wednesday, May 26, 2021 7:42 AM",
    "cumRapId": 7,
    "phongChieuId": 1,
    "movieId": 1
  },
  {
    "id": 56,
    "time": "Sunday, May 23, 2021 2:52 AM",
    "cumRapId": 10,
    "phongChieuId": 7,
    "movieId": 1
  },
  {
    "id": 57,
    "time": "Friday, May 21, 2021 1:41 PM",
    "cumRapId": 7,
    "phongChieuId": 3,
    "movieId": 1
  },
  {
    "id": 58,
    "time": "Tuesday, May 25, 2021 2:36 PM",
    "cumRapId": 4,
    "phongChieuId": 9,
    "movieId": 10
  },
  {
    "id": 59,
    "time": "Friday, May 21, 2021 11:00 AM",
    "cumRapId": 8,
    "phongChieuId": 3,
    "movieId": 1
  },
  {
    "id": 60,
    "time": "Sunday, May 23, 2021 1:46 AM",
    "cumRapId": 6,
    "phongChieuId": 4,
    "movieId": 8
  },
  {
    "id": 61,
    "time": "Sunday, May 23, 2021 10:43 AM",
    "cumRapId": 8,
    "phongChieuId": 10,
    "movieId": 10
  },
  {
    "id": 62,
    "time": "Friday, May 21, 2021 1:32 AM",
    "cumRapId": 1,
    "phongChieuId": 8,
    "movieId": 2
  },
  {
    "id": 63,
    "time": "Monday, May 24, 2021 2:04 PM",
    "cumRapId": 5,
    "phongChieuId": 5,
    "movieId": 6
  },
  {
    "id": 64,
    "time": "Wednesday, May 26, 2021 5:29 AM",
    "cumRapId": 6,
    "phongChieuId": 9,
    "movieId": 8
  },
  {
    "id": 65,
    "time": "Sunday, May 23, 2021 10:10 AM",
    "cumRapId": 10,
    "phongChieuId": 5,
    "movieId": 4
  },
  {
    "id": 66,
    "time": "Tuesday, May 25, 2021 9:25 PM",
    "cumRapId": 6,
    "phongChieuId": 10,
    "movieId": 5
  },
  {
    "id": 67,
    "time": "Tuesday, May 25, 2021 4:44 AM",
    "cumRapId": 10,
    "phongChieuId": 1,
    "movieId": 1
  },
  {
    "id": 68,
    "time": "Friday, May 21, 2021 4:30 PM",
    "cumRapId": 4,
    "phongChieuId": 7,
    "movieId": 6
  },
  {
    "id": 69,
    "time": "Friday, May 21, 2021 1:12 AM",
    "cumRapId": 4,
    "phongChieuId": 6,
    "movieId": 4
  },
  {
    "id": 70,
    "time": "Wednesday, May 26, 2021 5:38 PM",
    "cumRapId": 7,
    "phongChieuId": 6,
    "movieId": 5
  },
  {
    "id": 71,
    "time": "Monday, May 24, 2021 9:20 PM",
    "cumRapId": 9,
    "phongChieuId": 1,
    "movieId": 9
  },
  {
    "id": 72,
    "time": "Monday, May 24, 2021 5:23 AM",
    "cumRapId": 6,
    "phongChieuId": 1,
    "movieId": 9
  },
  {
    "id": 73,
    "time": "Tuesday, May 25, 2021 4:47 AM",
    "cumRapId": 3,
    "phongChieuId": 7,
    "movieId": 2
  },
  {
    "id": 74,
    "time": "Monday, May 24, 2021 4:51 AM",
    "cumRapId": 9,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 75,
    "time": "Monday, May 24, 2021 12:06 AM",
    "cumRapId": 4,
    "phongChieuId": 2,
    "movieId": 7
  },
  {
    "id": 76,
    "time": "Tuesday, May 25, 2021 11:39 AM",
    "cumRapId": 7,
    "phongChieuId": 5,
    "movieId": 10
  },
  {
    "id": 77,
    "time": "Wednesday, May 26, 2021 1:26 PM",
    "cumRapId": 3,
    "phongChieuId": 8,
    "movieId": 3
  },
  {
    "id": 78,
    "time": "Sunday, May 23, 2021 4:59 PM",
    "cumRapId": 5,
    "phongChieuId": 10,
    "movieId": 9
  },
  {
    "id": 79,
    "time": "Tuesday, May 25, 2021 9:31 PM",
    "cumRapId": 7,
    "phongChieuId": 10,
    "movieId": 7
  },
  {
    "id": 80,
    "time": "Wednesday, May 26, 2021 8:37 AM",
    "cumRapId": 5,
    "phongChieuId": 9,
    "movieId": 1
  },
  {
    "id": 81,
    "time": "Tuesday, May 25, 2021 11:58 PM",
    "cumRapId": 9,
    "phongChieuId": 3,
    "movieId": 6
  },
  {
    "id": 82,
    "time": "Wednesday, May 26, 2021 6:22 PM",
    "cumRapId": 5,
    "phongChieuId": 10,
    "movieId": 9
  },
  {
    "id": 83,
    "time": "Friday, May 21, 2021 9:14 PM",
    "cumRapId": 10,
    "phongChieuId": 9,
    "movieId": 2
  },
  {
    "id": 84,
    "time": "Friday, May 21, 2021 4:10 AM",
    "cumRapId": 6,
    "phongChieuId": 10,
    "movieId": 3
  },
  {
    "id": 85,
    "time": "Sunday, May 23, 2021 11:35 AM",
    "cumRapId": 6,
    "phongChieuId": 6,
    "movieId": 6
  },
  {
    "id": 86,
    "time": "Sunday, May 23, 2021 10:58 PM",
    "cumRapId": 6,
    "phongChieuId": 4,
    "movieId": 6
  },
  {
    "id": 87,
    "time": "Friday, May 21, 2021 2:28 PM",
    "cumRapId": 1,
    "phongChieuId": 6,
    "movieId": 5
  },
  {
    "id": 88,
    "time": "Sunday, May 23, 2021 10:26 AM",
    "cumRapId": 6,
    "phongChieuId": 5,
    "movieId": 1
  },
  {
    "id": 89,
    "time": "Monday, May 24, 2021 11:16 AM",
    "cumRapId": 8,
    "phongChieuId": 4,
    "movieId": 3
  },
  {
    "id": 90,
    "time": "Wednesday, May 26, 2021 2:59 AM",
    "cumRapId": 5,
    "phongChieuId": 5,
    "movieId": 4
  },
  {
    "id": 91,
    "time": "Monday, May 24, 2021 12:00 PM",
    "cumRapId": 4,
    "phongChieuId": 1,
    "movieId": 5
  },
  {
    "id": 92,
    "time": "Sunday, May 23, 2021 9:25 PM",
    "cumRapId": 1,
    "phongChieuId": 2,
    "movieId": 2
  },
  {
    "id": 93,
    "time": "Tuesday, May 25, 2021 3:48 PM",
    "cumRapId": 1,
    "phongChieuId": 5,
    "movieId": 10
  },
  {
    "id": 94,
    "time": "Monday, May 24, 2021 10:23 PM",
    "cumRapId": 5,
    "phongChieuId": 10,
    "movieId": 10
  },
  {
    "id": 95,
    "time": "Monday, May 24, 2021 5:50 PM",
    "cumRapId": 10,
    "phongChieuId": 5,
    "movieId": 9
  },
  {
    "id": 96,
    "time": "Friday, May 21, 2021 10:18 PM",
    "cumRapId": 6,
    "phongChieuId": 5,
    "movieId": 1
  },
  {
    "id": 97,
    "time": "Sunday, May 23, 2021 2:48 PM",
    "cumRapId": 9,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 98,
    "time": "Friday, May 21, 2021 10:48 PM",
    "cumRapId": 5,
    "phongChieuId": 7,
    "movieId": 1
  },
  {
    "id": 99,
    "time": "Saturday, May 22, 2021 11:41 AM",
    "cumRapId": 8,
    "phongChieuId": 9,
    "movieId": 6
  },
  {
    "id": 100,
    "time": "Friday, May 21, 2021 2:54 AM",
    "cumRapId": 1,
    "phongChieuId": 3,
    "movieId": 7
  },
  {
    "id": 101,
    "time": "Tuesday, May 25, 2021 4:59 AM",
    "cumRapId": 2,
    "phongChieuId": 10,
    "movieId": 9
  },
  {
    "id": 102,
    "time": "Saturday, May 22, 2021 12:59 PM",
    "cumRapId": 7,
    "phongChieuId": 6,
    "movieId": 3
  },
  {
    "id": 103,
    "time": "Sunday, May 23, 2021 5:15 PM",
    "cumRapId": 7,
    "phongChieuId": 4,
    "movieId": 2
  },
  {
    "id": 104,
    "time": "Saturday, May 22, 2021 11:36 AM",
    "cumRapId": 6,
    "phongChieuId": 6,
    "movieId": 3
  },
  {
    "id": 105,
    "time": "Tuesday, May 25, 2021 6:00 AM",
    "cumRapId": 1,
    "phongChieuId": 9,
    "movieId": 8
  },
  {
    "id": 106,
    "time": "Sunday, May 23, 2021 10:18 AM",
    "cumRapId": 8,
    "phongChieuId": 1,
    "movieId": 5
  },
  {
    "id": 107,
    "time": "Sunday, May 23, 2021 6:35 PM",
    "cumRapId": 4,
    "phongChieuId": 10,
    "movieId": 9
  },
  {
    "id": 108,
    "time": "Saturday, May 22, 2021 12:26 PM",
    "cumRapId": 5,
    "phongChieuId": 1,
    "movieId": 1
  },
  {
    "id": 109,
    "time": "Wednesday, May 26, 2021 6:53 PM",
    "cumRapId": 3,
    "phongChieuId": 8,
    "movieId": 6
  },
  {
    "id": 110,
    "time": "Sunday, May 23, 2021 10:37 AM",
    "cumRapId": 8,
    "phongChieuId": 3,
    "movieId": 2
  },
  {
    "id": 111,
    "time": "Tuesday, May 25, 2021 2:42 PM",
    "cumRapId": 7,
    "phongChieuId": 2,
    "movieId": 10
  },
  {
    "id": 112,
    "time": "Monday, May 24, 2021 8:56 AM",
    "cumRapId": 3,
    "phongChieuId": 3,
    "movieId": 10
  },
  {
    "id": 113,
    "time": "Monday, May 24, 2021 11:09 PM",
    "cumRapId": 1,
    "phongChieuId": 4,
    "movieId": 4
  },
  {
    "id": 114,
    "time": "Monday, May 24, 2021 3:27 AM",
    "cumRapId": 2,
    "phongChieuId": 2,
    "movieId": 10
  },
  {
    "id": 115,
    "time": "Monday, May 24, 2021 6:39 PM",
    "cumRapId": 10,
    "phongChieuId": 3,
    "movieId": 1
  },
  {
    "id": 116,
    "time": "Saturday, May 22, 2021 10:26 PM",
    "cumRapId": 3,
    "phongChieuId": 7,
    "movieId": 1
  },
  {
    "id": 117,
    "time": "Wednesday, May 26, 2021 1:40 AM",
    "cumRapId": 3,
    "phongChieuId": 1,
    "movieId": 1
  },
  {
    "id": 118,
    "time": "Tuesday, May 25, 2021 12:47 AM",
    "cumRapId": 6,
    "phongChieuId": 9,
    "movieId": 2
  },
  {
    "id": 119,
    "time": "Saturday, May 22, 2021 8:02 AM",
    "cumRapId": 8,
    "phongChieuId": 4,
    "movieId": 1
  },
  {
    "id": 120,
    "time": "Saturday, May 22, 2021 1:56 AM",
    "cumRapId": 5,
    "phongChieuId": 8,
    "movieId": 8
  },
  {
    "id": 121,
    "time": "Tuesday, May 25, 2021 6:36 AM",
    "cumRapId": 3,
    "phongChieuId": 7,
    "movieId": 1
  },
  {
    "id": 122,
    "time": "Monday, May 24, 2021 5:47 PM",
    "cumRapId": 3,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 123,
    "time": "Monday, May 24, 2021 8:15 AM",
    "cumRapId": 5,
    "phongChieuId": 8,
    "movieId": 5
  },
  {
    "id": 124,
    "time": "Monday, May 24, 2021 8:45 AM",
    "cumRapId": 1,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 125,
    "time": "Wednesday, May 26, 2021 6:40 PM",
    "cumRapId": 5,
    "phongChieuId": 9,
    "movieId": 2
  },
  {
    "id": 126,
    "time": "Monday, May 24, 2021 4:19 PM",
    "cumRapId": 10,
    "phongChieuId": 7,
    "movieId": 2
  },
  {
    "id": 127,
    "time": "Sunday, May 23, 2021 2:37 AM",
    "cumRapId": 4,
    "phongChieuId": 7,
    "movieId": 1
  },
  {
    "id": 128,
    "time": "Sunday, May 23, 2021 11:51 PM",
    "cumRapId": 8,
    "phongChieuId": 3,
    "movieId": 6
  },
  {
    "id": 129,
    "time": "Wednesday, May 26, 2021 3:03 PM",
    "cumRapId": 6,
    "phongChieuId": 10,
    "movieId": 1
  },
  {
    "id": 130,
    "time": "Tuesday, May 25, 2021 7:24 PM",
    "cumRapId": 3,
    "phongChieuId": 8,
    "movieId": 1
  },
  {
    "id": 131,
    "time": "Tuesday, May 25, 2021 2:28 AM",
    "cumRapId": 5,
    "phongChieuId": 2,
    "movieId": 4
  },
  {
    "id": 132,
    "time": "Wednesday, May 26, 2021 5:18 AM",
    "cumRapId": 10,
    "phongChieuId": 1,
    "movieId": 8
  },
  {
    "id": 133,
    "time": "Friday, May 21, 2021 10:40 AM",
    "cumRapId": 7,
    "phongChieuId": 8,
    "movieId": 2
  },
  {
    "id": 134,
    "time": "Saturday, May 22, 2021 11:33 AM",
    "cumRapId": 7,
    "phongChieuId": 9,
    "movieId": 8
  },
  {
    "id": 135,
    "time": "Sunday, May 23, 2021 7:02 PM",
    "cumRapId": 1,
    "phongChieuId": 2,
    "movieId": 5
  },
  {
    "id": 136,
    "time": "Friday, May 21, 2021 9:59 PM",
    "cumRapId": 8,
    "phongChieuId": 3,
    "movieId": 9
  },
  {
    "id": 137,
    "time": "Sunday, May 23, 2021 2:08 PM",
    "cumRapId": 8,
    "phongChieuId": 7,
    "movieId": 8
  },
  {
    "id": 138,
    "time": "Sunday, May 23, 2021 8:08 AM",
    "cumRapId": 3,
    "phongChieuId": 4,
    "movieId": 6
  },
  {
    "id": 139,
    "time": "Monday, May 24, 2021 5:57 AM",
    "cumRapId": 1,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 140,
    "time": "Wednesday, May 26, 2021 3:43 AM",
    "cumRapId": 5,
    "phongChieuId": 5,
    "movieId": 9
  },
  {
    "id": 141,
    "time": "Saturday, May 22, 2021 8:44 PM",
    "cumRapId": 1,
    "phongChieuId": 6,
    "movieId": 10
  },
  {
    "id": 142,
    "time": "Wednesday, May 26, 2021 5:44 PM",
    "cumRapId": 7,
    "phongChieuId": 5,
    "movieId": 9
  },
  {
    "id": 143,
    "time": "Tuesday, May 25, 2021 10:48 AM",
    "cumRapId": 6,
    "phongChieuId": 2,
    "movieId": 10
  },
  {
    "id": 144,
    "time": "Wednesday, May 26, 2021 12:01 PM",
    "cumRapId": 6,
    "phongChieuId": 7,
    "movieId": 5
  },
  {
    "id": 145,
    "time": "Friday, May 21, 2021 4:12 AM",
    "cumRapId": 10,
    "phongChieuId": 6,
    "movieId": 10
  },
  {
    "id": 146,
    "time": "Wednesday, May 26, 2021 6:18 AM",
    "cumRapId": 5,
    "phongChieuId": 6,
    "movieId": 1
  },
  {
    "id": 147,
    "time": "Friday, May 21, 2021 7:47 PM",
    "cumRapId": 2,
    "phongChieuId": 4,
    "movieId": 4
  },
  {
    "id": 148,
    "time": "Tuesday, May 25, 2021 3:08 AM",
    "cumRapId": 3,
    "phongChieuId": 5,
    "movieId": 6
  },
  {
    "id": 149,
    "time": "Wednesday, May 26, 2021 7:23 PM",
    "cumRapId": 10,
    "phongChieuId": 8,
    "movieId": 3
  },
  {
    "id": 150,
    "time": "Sunday, May 23, 2021 10:31 PM",
    "cumRapId": 2,
    "phongChieuId": 2,
    "movieId": 5
  },
  {
    "id": 151,
    "time": "Friday, May 21, 2021 12:33 AM",
    "cumRapId": 4,
    "phongChieuId": 6,
    "movieId": 5
  },
  {
    "id": 152,
    "time": "Saturday, May 22, 2021 2:42 AM",
    "cumRapId": 5,
    "phongChieuId": 4,
    "movieId": 2
  },
  {
    "id": 153,
    "time": "Tuesday, May 25, 2021 5:48 AM",
    "cumRapId": 2,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 154,
    "time": "Tuesday, May 25, 2021 11:15 PM",
    "cumRapId": 2,
    "phongChieuId": 3,
    "movieId": 7
  },
  {
    "id": 155,
    "time": "Sunday, May 23, 2021 8:26 PM",
    "cumRapId": 5,
    "phongChieuId": 9,
    "movieId": 2
  },
  {
    "id": 156,
    "time": "Sunday, May 23, 2021 1:08 AM",
    "cumRapId": 3,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 157,
    "time": "Saturday, May 22, 2021 7:18 PM",
    "cumRapId": 10,
    "phongChieuId": 8,
    "movieId": 9
  },
  {
    "id": 158,
    "time": "Wednesday, May 26, 2021 6:17 AM",
    "cumRapId": 4,
    "phongChieuId": 3,
    "movieId": 6
  },
  {
    "id": 159,
    "time": "Friday, May 21, 2021 8:20 AM",
    "cumRapId": 7,
    "phongChieuId": 3,
    "movieId": 2
  },
  {
    "id": 160,
    "time": "Wednesday, May 26, 2021 5:33 AM",
    "cumRapId": 1,
    "phongChieuId": 8,
    "movieId": 9
  },
  {
    "id": 161,
    "time": "Tuesday, May 25, 2021 8:44 PM",
    "cumRapId": 7,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 162,
    "time": "Monday, May 24, 2021 10:32 PM",
    "cumRapId": 6,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 163,
    "time": "Friday, May 21, 2021 6:53 AM",
    "cumRapId": 10,
    "phongChieuId": 2,
    "movieId": 6
  },
  {
    "id": 164,
    "time": "Sunday, May 23, 2021 3:17 PM",
    "cumRapId": 3,
    "phongChieuId": 5,
    "movieId": 10
  },
  {
    "id": 165,
    "time": "Wednesday, May 26, 2021 5:56 PM",
    "cumRapId": 5,
    "phongChieuId": 2,
    "movieId": 3
  },
  {
    "id": 166,
    "time": "Sunday, May 23, 2021 12:55 PM",
    "cumRapId": 5,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 167,
    "time": "Monday, May 24, 2021 1:41 PM",
    "cumRapId": 3,
    "phongChieuId": 6,
    "movieId": 10
  },
  {
    "id": 168,
    "time": "Sunday, May 23, 2021 11:12 AM",
    "cumRapId": 9,
    "phongChieuId": 1,
    "movieId": 8
  },
  {
    "id": 169,
    "time": "Sunday, May 23, 2021 9:22 AM",
    "cumRapId": 1,
    "phongChieuId": 3,
    "movieId": 9
  },
  {
    "id": 170,
    "time": "Friday, May 21, 2021 8:19 PM",
    "cumRapId": 6,
    "phongChieuId": 8,
    "movieId": 2
  },
  {
    "id": 171,
    "time": "Friday, May 21, 2021 3:39 AM",
    "cumRapId": 5,
    "phongChieuId": 7,
    "movieId": 5
  },
  {
    "id": 172,
    "time": "Saturday, May 22, 2021 10:07 PM",
    "cumRapId": 10,
    "phongChieuId": 6,
    "movieId": 7
  },
  {
    "id": 173,
    "time": "Monday, May 24, 2021 7:41 AM",
    "cumRapId": 1,
    "phongChieuId": 1,
    "movieId": 8
  },
  {
    "id": 174,
    "time": "Wednesday, May 26, 2021 7:40 AM",
    "cumRapId": 8,
    "phongChieuId": 2,
    "movieId": 8
  },
  {
    "id": 175,
    "time": "Friday, May 21, 2021 12:29 AM",
    "cumRapId": 2,
    "phongChieuId": 3,
    "movieId": 3
  },
  {
    "id": 176,
    "time": "Tuesday, May 25, 2021 10:28 AM",
    "cumRapId": 1,
    "phongChieuId": 6,
    "movieId": 10
  },
  {
    "id": 177,
    "time": "Monday, May 24, 2021 1:26 AM",
    "cumRapId": 6,
    "phongChieuId": 4,
    "movieId": 6
  },
  {
    "id": 178,
    "time": "Sunday, May 23, 2021 9:55 AM",
    "cumRapId": 8,
    "phongChieuId": 1,
    "movieId": 7
  },
  {
    "id": 179,
    "time": "Saturday, May 22, 2021 5:25 PM",
    "cumRapId": 6,
    "phongChieuId": 2,
    "movieId": 1
  },
  {
    "id": 180,
    "time": "Saturday, May 22, 2021 7:02 AM",
    "cumRapId": 9,
    "phongChieuId": 2,
    "movieId": 3
  },
  {
    "id": 181,
    "time": "Saturday, May 22, 2021 2:49 PM",
    "cumRapId": 6,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 182,
    "time": "Monday, May 24, 2021 8:28 AM",
    "cumRapId": 3,
    "phongChieuId": 1,
    "movieId": 3
  },
  {
    "id": 183,
    "time": "Wednesday, May 26, 2021 4:38 AM",
    "cumRapId": 4,
    "phongChieuId": 10,
    "movieId": 4
  },
  {
    "id": 184,
    "time": "Sunday, May 23, 2021 1:32 AM",
    "cumRapId": 10,
    "phongChieuId": 3,
    "movieId": 10
  },
  {
    "id": 185,
    "time": "Saturday, May 22, 2021 9:04 PM",
    "cumRapId": 3,
    "phongChieuId": 6,
    "movieId": 9
  },
  {
    "id": 186,
    "time": "Saturday, May 22, 2021 10:07 AM",
    "cumRapId": 10,
    "phongChieuId": 4,
    "movieId": 4
  },
  {
    "id": 187,
    "time": "Wednesday, May 26, 2021 4:55 PM",
    "cumRapId": 1,
    "phongChieuId": 10,
    "movieId": 8
  },
  {
    "id": 188,
    "time": "Saturday, May 22, 2021 9:58 PM",
    "cumRapId": 1,
    "phongChieuId": 9,
    "movieId": 10
  },
  {
    "id": 189,
    "time": "Friday, May 21, 2021 4:19 PM",
    "cumRapId": 4,
    "phongChieuId": 1,
    "movieId": 3
  },
  {
    "id": 190,
    "time": "Monday, May 24, 2021 11:33 AM",
    "cumRapId": 9,
    "phongChieuId": 10,
    "movieId": 5
  },
  {
    "id": 191,
    "time": "Sunday, May 23, 2021 8:28 AM",
    "cumRapId": 8,
    "phongChieuId": 10,
    "movieId": 10
  },
  {
    "id": 192,
    "time": "Monday, May 24, 2021 5:48 PM",
    "cumRapId": 8,
    "phongChieuId": 4,
    "movieId": 10
  },
  {
    "id": 193,
    "time": "Monday, May 24, 2021 7:29 AM",
    "cumRapId": 4,
    "phongChieuId": 7,
    "movieId": 3
  },
  {
    "id": 194,
    "time": "Saturday, May 22, 2021 5:48 AM",
    "cumRapId": 1,
    "phongChieuId": 6,
    "movieId": 3
  },
  {
    "id": 195,
    "time": "Tuesday, May 25, 2021 3:41 PM",
    "cumRapId": 8,
    "phongChieuId": 5,
    "movieId": 3
  },
  {
    "id": 196,
    "time": "Tuesday, May 25, 2021 1:41 AM",
    "cumRapId": 8,
    "phongChieuId": 6,
    "movieId": 5
  },
  {
    "id": 197,
    "time": "Wednesday, May 26, 2021 6:32 AM",
    "cumRapId": 10,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 198,
    "time": "Friday, May 21, 2021 11:35 AM",
    "cumRapId": 5,
    "phongChieuId": 4,
    "movieId": 7
  },
  {
    "id": 199,
    "time": "Monday, May 24, 2021 5:15 PM",
    "cumRapId": 4,
    "phongChieuId": 5,
    "movieId": 4
  },
  {
    "id": 300,
    "time": "Tuesday, May 25, 2021 5:30 AM",
    "cumRapId": 7,
    "phongChieuId": 7,
    "movieId": 2
  },
  {
    "id": 301,
    "time": "Monday, May 24, 2021 11:22 AM",
    "cumRapId": 6,
    "phongChieuId": 2,
    "movieId": 1
  },
  {
    "id": 302,
    "time": "Monday, May 24, 2021 8:04 PM",
    "cumRapId": 7,
    "phongChieuId": 4,
    "movieId": 8
  },
  {
    "id": 303,
    "time": "Friday, May 21, 2021 12:13 PM",
    "cumRapId": 9,
    "phongChieuId": 3,
    "movieId": 7
  },
  {
    "id": 304,
    "time": "Wednesday, May 26, 2021 11:57 AM",
    "cumRapId": 9,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 305,
    "time": "Tuesday, May 25, 2021 10:57 PM",
    "cumRapId": 4,
    "phongChieuId": 6,
    "movieId": 5
  },
  {
    "id": 306,
    "time": "Wednesday, May 26, 2021 1:10 AM",
    "cumRapId": 6,
    "phongChieuId": 6,
    "movieId": 7
  },
  {
    "id": 307,
    "time": "Wednesday, May 26, 2021 6:58 AM",
    "cumRapId": 4,
    "phongChieuId": 5,
    "movieId": 2
  },
  {
    "id": 308,
    "time": "Wednesday, May 26, 2021 10:32 PM",
    "cumRapId": 1,
    "phongChieuId": 6,
    "movieId": 7
  },
  {
    "id": 309,
    "time": "Monday, May 24, 2021 12:10 AM",
    "cumRapId": 5,
    "phongChieuId": 4,
    "movieId": 5
  },
  {
    "id": 310,
    "time": "Saturday, May 22, 2021 1:40 AM",
    "cumRapId": 6,
    "phongChieuId": 9,
    "movieId": 1
  },
  {
    "id": 311,
    "time": "Tuesday, May 25, 2021 3:10 PM",
    "cumRapId": 5,
    "phongChieuId": 6,
    "movieId": 5
  },
  {
    "id": 312,
    "time": "Monday, May 24, 2021 8:45 PM",
    "cumRapId": 4,
    "phongChieuId": 1,
    "movieId": 10
  },
  {
    "id": 313,
    "time": "Tuesday, May 25, 2021 5:39 AM",
    "cumRapId": 6,
    "phongChieuId": 1,
    "movieId": 7
  },
  {
    "id": 314,
    "time": "Saturday, May 22, 2021 6:56 AM",
    "cumRapId": 6,
    "phongChieuId": 1,
    "movieId": 10
  },
  {
    "id": 315,
    "time": "Saturday, May 22, 2021 9:39 PM",
    "cumRapId": 9,
    "phongChieuId": 1,
    "movieId": 4
  },
  {
    "id": 316,
    "time": "Friday, May 21, 2021 12:09 AM",
    "cumRapId": 1,
    "phongChieuId": 3,
    "movieId": 2
  },
  {
    "id": 317,
    "time": "Friday, May 21, 2021 9:40 PM",
    "cumRapId": 7,
    "phongChieuId": 7,
    "movieId": 2
  },
  {
    "id": 318,
    "time": "Sunday, May 23, 2021 3:43 AM",
    "cumRapId": 8,
    "phongChieuId": 4,
    "movieId": 8
  },
  {
    "id": 319,
    "time": "Wednesday, May 26, 2021 2:22 PM",
    "cumRapId": 4,
    "phongChieuId": 3,
    "movieId": 7
  },
  {
    "id": 320,
    "time": "Monday, May 24, 2021 1:21 PM",
    "cumRapId": 3,
    "phongChieuId": 3,
    "movieId": 9
  },
  {
    "id": 321,
    "time": "Friday, May 21, 2021 10:26 PM",
    "cumRapId": 7,
    "phongChieuId": 5,
    "movieId": 10
  },
  {
    "id": 322,
    "time": "Tuesday, May 25, 2021 2:56 PM",
    "cumRapId": 4,
    "phongChieuId": 4,
    "movieId": 10
  },
  {
    "id": 323,
    "time": "Saturday, May 22, 2021 5:13 AM",
    "cumRapId": 5,
    "phongChieuId": 8,
    "movieId": 3
  },
  {
    "id": 324,
    "time": "Wednesday, May 26, 2021 1:54 PM",
    "cumRapId": 3,
    "phongChieuId": 2,
    "movieId": 1
  },
  {
    "id": 325,
    "time": "Tuesday, May 25, 2021 6:37 PM",
    "cumRapId": 8,
    "phongChieuId": 3,
    "movieId": 6
  },
  {
    "id": 326,
    "time": "Sunday, May 23, 2021 6:39 PM",
    "cumRapId": 3,
    "phongChieuId": 9,
    "movieId": 4
  },
  {
    "id": 327,
    "time": "Friday, May 21, 2021 11:35 PM",
    "cumRapId": 1,
    "phongChieuId": 3,
    "movieId": 6
  },
  {
    "id": 328,
    "time": "Friday, May 21, 2021 4:42 PM",
    "cumRapId": 7,
    "phongChieuId": 5,
    "movieId": 6
  },
  {
    "id": 329,
    "time": "Saturday, May 22, 2021 10:20 AM",
    "cumRapId": 5,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 330,
    "time": "Tuesday, May 25, 2021 9:08 PM",
    "cumRapId": 7,
    "phongChieuId": 4,
    "movieId": 3
  },
  {
    "id": 331,
    "time": "Tuesday, May 25, 2021 4:03 PM",
    "cumRapId": 1,
    "phongChieuId": 4,
    "movieId": 10
  },
  {
    "id": 332,
    "time": "Saturday, May 22, 2021 9:26 PM",
    "cumRapId": 10,
    "phongChieuId": 8,
    "movieId": 8
  },
  {
    "id": 333,
    "time": "Wednesday, May 26, 2021 7:46 PM",
    "cumRapId": 1,
    "phongChieuId": 1,
    "movieId": 10
  },
  {
    "id": 334,
    "time": "Saturday, May 22, 2021 3:50 AM",
    "cumRapId": 6,
    "phongChieuId": 4,
    "movieId": 4
  },
  {
    "id": 335,
    "time": "Sunday, May 23, 2021 5:53 AM",
    "cumRapId": 6,
    "phongChieuId": 7,
    "movieId": 5
  },
  {
    "id": 336,
    "time": "Sunday, May 23, 2021 8:02 AM",
    "cumRapId": 7,
    "phongChieuId": 1,
    "movieId": 10
  },
  {
    "id": 337,
    "time": "Monday, May 24, 2021 9:43 AM",
    "cumRapId": 5,
    "phongChieuId": 5,
    "movieId": 7
  },
  {
    "id": 338,
    "time": "Friday, May 21, 2021 2:31 AM",
    "cumRapId": 2,
    "phongChieuId": 8,
    "movieId": 5
  },
  {
    "id": 339,
    "time": "Friday, May 21, 2021 7:51 PM",
    "cumRapId": 6,
    "phongChieuId": 5,
    "movieId": 1
  },
  {
    "id": 340,
    "time": "Saturday, May 22, 2021 12:07 AM",
    "cumRapId": 7,
    "phongChieuId": 1,
    "movieId": 7
  },
  {
    "id": 341,
    "time": "Saturday, May 22, 2021 8:59 PM",
    "cumRapId": 4,
    "phongChieuId": 1,
    "movieId": 3
  },
  {
    "id": 342,
    "time": "Monday, May 24, 2021 5:16 PM",
    "cumRapId": 6,
    "phongChieuId": 1,
    "movieId": 7
  },
  {
    "id": 343,
    "time": "Friday, May 21, 2021 4:06 AM",
    "cumRapId": 1,
    "phongChieuId": 4,
    "movieId": 3
  },
  {
    "id": 344,
    "time": "Tuesday, May 25, 2021 9:04 AM",
    "cumRapId": 9,
    "phongChieuId": 6,
    "movieId": 7
  },
  {
    "id": 345,
    "time": "Sunday, May 23, 2021 11:20 PM",
    "cumRapId": 6,
    "phongChieuId": 6,
    "movieId": 10
  },
  {
    "id": 346,
    "time": "Sunday, May 23, 2021 11:10 PM",
    "cumRapId": 7,
    "phongChieuId": 10,
    "movieId": 5
  },
  {
    "id": 347,
    "time": "Saturday, May 22, 2021 1:46 AM",
    "cumRapId": 9,
    "phongChieuId": 4,
    "movieId": 3
  },
  {
    "id": 348,
    "time": "Monday, May 24, 2021 5:04 AM",
    "cumRapId": 10,
    "phongChieuId": 6,
    "movieId": 3
  },
  {
    "id": 349,
    "time": "Friday, May 21, 2021 1:58 AM",
    "cumRapId": 10,
    "phongChieuId": 7,
    "movieId": 7
  },
  {
    "id": 350,
    "time": "Friday, May 21, 2021 3:27 PM",
    "cumRapId": 9,
    "phongChieuId": 2,
    "movieId": 5
  },
  {
    "id": 351,
    "time": "Sunday, May 23, 2021 7:00 AM",
    "cumRapId": 2,
    "phongChieuId": 2,
    "movieId": 8
  },
  {
    "id": 352,
    "time": "Monday, May 24, 2021 4:56 AM",
    "cumRapId": 7,
    "phongChieuId": 8,
    "movieId": 1
  },
  {
    "id": 353,
    "time": "Friday, May 21, 2021 6:05 PM",
    "cumRapId": 1,
    "phongChieuId": 1,
    "movieId": 5
  },
  {
    "id": 354,
    "time": "Wednesday, May 26, 2021 8:21 PM",
    "cumRapId": 5,
    "phongChieuId": 1,
    "movieId": 9
  },
  {
    "id": 355,
    "time": "Friday, May 21, 2021 3:01 PM",
    "cumRapId": 8,
    "phongChieuId": 5,
    "movieId": 4
  },
  {
    "id": 356,
    "time": "Saturday, May 22, 2021 6:31 PM",
    "cumRapId": 4,
    "phongChieuId": 9,
    "movieId": 3
  },
  {
    "id": 357,
    "time": "Sunday, May 23, 2021 5:34 PM",
    "cumRapId": 1,
    "phongChieuId": 5,
    "movieId": 1
  },
  {
    "id": 358,
    "time": "Sunday, May 23, 2021 5:03 AM",
    "cumRapId": 8,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 359,
    "time": "Friday, May 21, 2021 6:36 AM",
    "cumRapId": 6,
    "phongChieuId": 1,
    "movieId": 4
  },
  {
    "id": 360,
    "time": "Wednesday, May 26, 2021 11:21 AM",
    "cumRapId": 1,
    "phongChieuId": 2,
    "movieId": 4
  },
  {
    "id": 361,
    "time": "Monday, May 24, 2021 8:54 PM",
    "cumRapId": 6,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 362,
    "time": "Saturday, May 22, 2021 3:56 AM",
    "cumRapId": 4,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 363,
    "time": "Saturday, May 22, 2021 2:56 AM",
    "cumRapId": 3,
    "phongChieuId": 7,
    "movieId": 7
  },
  {
    "id": 364,
    "time": "Friday, May 21, 2021 3:04 AM",
    "cumRapId": 9,
    "phongChieuId": 10,
    "movieId": 2
  },
  {
    "id": 365,
    "time": "Saturday, May 22, 2021 1:32 AM",
    "cumRapId": 4,
    "phongChieuId": 4,
    "movieId": 3
  },
  {
    "id": 366,
    "time": "Wednesday, May 26, 2021 7:27 AM",
    "cumRapId": 3,
    "phongChieuId": 9,
    "movieId": 8
  },
  {
    "id": 367,
    "time": "Friday, May 21, 2021 12:12 AM",
    "cumRapId": 5,
    "phongChieuId": 8,
    "movieId": 6
  },
  {
    "id": 368,
    "time": "Sunday, May 23, 2021 10:33 PM",
    "cumRapId": 6,
    "phongChieuId": 9,
    "movieId": 1
  },
  {
    "id": 369,
    "time": "Tuesday, May 25, 2021 10:01 PM",
    "cumRapId": 1,
    "phongChieuId": 9,
    "movieId": 6
  },
  {
    "id": 370,
    "time": "Wednesday, May 26, 2021 8:33 AM",
    "cumRapId": 4,
    "phongChieuId": 5,
    "movieId": 2
  },
  {
    "id": 371,
    "time": "Wednesday, May 26, 2021 3:37 PM",
    "cumRapId": 9,
    "phongChieuId": 8,
    "movieId": 1
  },
  {
    "id": 372,
    "time": "Wednesday, May 26, 2021 10:00 PM",
    "cumRapId": 1,
    "phongChieuId": 1,
    "movieId": 5
  },
  {
    "id": 373,
    "time": "Monday, May 24, 2021 5:12 AM",
    "cumRapId": 10,
    "phongChieuId": 8,
    "movieId": 10
  },
  {
    "id": 374,
    "time": "Saturday, May 22, 2021 12:42 AM",
    "cumRapId": 9,
    "phongChieuId": 4,
    "movieId": 1
  },
  {
    "id": 375,
    "time": "Monday, May 24, 2021 5:53 PM",
    "cumRapId": 10,
    "phongChieuId": 4,
    "movieId": 2
  },
  {
    "id": 376,
    "time": "Sunday, May 23, 2021 3:57 PM",
    "cumRapId": 9,
    "phongChieuId": 4,
    "movieId": 9
  },
  {
    "id": 377,
    "time": "Monday, May 24, 2021 8:33 AM",
    "cumRapId": 10,
    "phongChieuId": 7,
    "movieId": 5
  },
  {
    "id": 378,
    "time": "Wednesday, May 26, 2021 11:52 PM",
    "cumRapId": 6,
    "phongChieuId": 9,
    "movieId": 4
  },
  {
    "id": 379,
    "time": "Friday, May 21, 2021 11:01 PM",
    "cumRapId": 5,
    "phongChieuId": 1,
    "movieId": 1
  },
  {
    "id": 380,
    "time": "Saturday, May 22, 2021 4:00 PM",
    "cumRapId": 5,
    "phongChieuId": 3,
    "movieId": 7
  },
  {
    "id": 381,
    "time": "Sunday, May 23, 2021 7:57 AM",
    "cumRapId": 7,
    "phongChieuId": 6,
    "movieId": 5
  },
  {
    "id": 382,
    "time": "Wednesday, May 26, 2021 9:59 PM",
    "cumRapId": 9,
    "phongChieuId": 7,
    "movieId": 2
  },
  {
    "id": 383,
    "time": "Monday, May 24, 2021 7:27 AM",
    "cumRapId": 5,
    "phongChieuId": 10,
    "movieId": 7
  },
  {
    "id": 384,
    "time": "Saturday, May 22, 2021 12:44 PM",
    "cumRapId": 6,
    "phongChieuId": 1,
    "movieId": 1
  },
  {
    "id": 385,
    "time": "Monday, May 24, 2021 7:43 AM",
    "cumRapId": 2,
    "phongChieuId": 7,
    "movieId": 7
  },
  {
    "id": 386,
    "time": "Saturday, May 22, 2021 3:59 AM",
    "cumRapId": 5,
    "phongChieuId": 4,
    "movieId": 1
  },
  {
    "id": 387,
    "time": "Tuesday, May 25, 2021 11:32 AM",
    "cumRapId": 6,
    "phongChieuId": 1,
    "movieId": 1
  },
  {
    "id": 388,
    "time": "Friday, May 21, 2021 7:18 PM",
    "cumRapId": 1,
    "phongChieuId": 10,
    "movieId": 6
  },
  {
    "id": 389,
    "time": "Wednesday, May 26, 2021 10:30 AM",
    "cumRapId": 10,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 390,
    "time": "Wednesday, May 26, 2021 5:45 PM",
    "cumRapId": 8,
    "phongChieuId": 5,
    "movieId": 9
  },
  {
    "id": 391,
    "time": "Friday, May 21, 2021 6:02 AM",
    "cumRapId": 3,
    "phongChieuId": 7,
    "movieId": 2
  },
  {
    "id": 392,
    "time": "Friday, May 21, 2021 9:24 AM",
    "cumRapId": 7,
    "phongChieuId": 7,
    "movieId": 3
  },
  {
    "id": 393,
    "time": "Friday, May 21, 2021 11:07 PM",
    "cumRapId": 3,
    "phongChieuId": 5,
    "movieId": 10
  },
  {
    "id": 394,
    "time": "Tuesday, May 25, 2021 6:02 PM",
    "cumRapId": 3,
    "phongChieuId": 3,
    "movieId": 3
  },
  {
    "id": 395,
    "time": "Friday, May 21, 2021 10:16 PM",
    "cumRapId": 5,
    "phongChieuId": 5,
    "movieId": 8
  },
  {
    "id": 396,
    "time": "Tuesday, May 25, 2021 11:39 AM",
    "cumRapId": 9,
    "phongChieuId": 5,
    "movieId": 2
  },
  {
    "id": 397,
    "time": "Wednesday, May 26, 2021 5:27 PM",
    "cumRapId": 8,
    "phongChieuId": 10,
    "movieId": 1
  },
  {
    "id": 398,
    "time": "Wednesday, May 26, 2021 6:23 PM",
    "cumRapId": 1,
    "phongChieuId": 8,
    "movieId": 3
  },
  {
    "id": 399,
    "time": "Tuesday, May 25, 2021 2:31 AM",
    "cumRapId": 10,
    "phongChieuId": 5,
    "movieId": 6
  },
  {
    "id": 400,
    "time": "Monday, May 24, 2021 11:52 AM",
    "cumRapId": 9,
    "phongChieuId": 4,
    "movieId": 3
  },
  {
    "id": 401,
    "time": "Sunday, May 23, 2021 10:23 PM",
    "cumRapId": 2,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 402,
    "time": "Tuesday, May 25, 2021 7:08 PM",
    "cumRapId": 5,
    "phongChieuId": 10,
    "movieId": 1
  },
  {
    "id": 403,
    "time": "Sunday, May 23, 2021 11:29 PM",
    "cumRapId": 6,
    "phongChieuId": 7,
    "movieId": 7
  },
  {
    "id": 404,
    "time": "Friday, May 21, 2021 2:01 AM",
    "cumRapId": 6,
    "phongChieuId": 3,
    "movieId": 4
  },
  {
    "id": 405,
    "time": "Saturday, May 22, 2021 1:31 AM",
    "cumRapId": 4,
    "phongChieuId": 10,
    "movieId": 9
  },
  {
    "id": 406,
    "time": "Sunday, May 23, 2021 2:17 PM",
    "cumRapId": 1,
    "phongChieuId": 10,
    "movieId": 7
  },
  {
    "id": 407,
    "time": "Monday, May 24, 2021 8:15 PM",
    "cumRapId": 2,
    "phongChieuId": 4,
    "movieId": 2
  },
  {
    "id": 408,
    "time": "Friday, May 21, 2021 8:30 PM",
    "cumRapId": 10,
    "phongChieuId": 3,
    "movieId": 5
  },
  {
    "id": 409,
    "time": "Monday, May 24, 2021 12:56 PM",
    "cumRapId": 4,
    "phongChieuId": 5,
    "movieId": 7
  },
  {
    "id": 410,
    "time": "Friday, May 21, 2021 6:29 AM",
    "cumRapId": 1,
    "phongChieuId": 5,
    "movieId": 2
  },
  {
    "id": 411,
    "time": "Wednesday, May 26, 2021 6:47 PM",
    "cumRapId": 1,
    "phongChieuId": 8,
    "movieId": 10
  },
  {
    "id": 412,
    "time": "Saturday, May 22, 2021 1:39 AM",
    "cumRapId": 10,
    "phongChieuId": 3,
    "movieId": 7
  },
  {
    "id": 413,
    "time": "Monday, May 24, 2021 4:35 AM",
    "cumRapId": 1,
    "phongChieuId": 1,
    "movieId": 8
  },
  {
    "id": 414,
    "time": "Tuesday, May 25, 2021 12:55 AM",
    "cumRapId": 8,
    "phongChieuId": 1,
    "movieId": 9
  },
  {
    "id": 415,
    "time": "Friday, May 21, 2021 2:33 AM",
    "cumRapId": 7,
    "phongChieuId": 1,
    "movieId": 4
  },
  {
    "id": 416,
    "time": "Wednesday, May 26, 2021 12:24 AM",
    "cumRapId": 3,
    "phongChieuId": 8,
    "movieId": 8
  },
  {
    "id": 417,
    "time": "Saturday, May 22, 2021 12:45 PM",
    "cumRapId": 5,
    "phongChieuId": 2,
    "movieId": 1
  },
  {
    "id": 418,
    "time": "Monday, May 24, 2021 6:14 AM",
    "cumRapId": 6,
    "phongChieuId": 1,
    "movieId": 8
  },
  {
    "id": 419,
    "time": "Sunday, May 23, 2021 6:06 PM",
    "cumRapId": 4,
    "phongChieuId": 8,
    "movieId": 8
  },
  {
    "id": 420,
    "time": "Monday, May 24, 2021 2:42 AM",
    "cumRapId": 7,
    "phongChieuId": 4,
    "movieId": 9
  },
  {
    "id": 421,
    "time": "Friday, May 21, 2021 1:25 PM",
    "cumRapId": 6,
    "phongChieuId": 7,
    "movieId": 2
  },
  {
    "id": 422,
    "time": "Sunday, May 23, 2021 8:04 PM",
    "cumRapId": 1,
    "phongChieuId": 3,
    "movieId": 3
  },
  {
    "id": 423,
    "time": "Friday, May 21, 2021 9:26 AM",
    "cumRapId": 5,
    "phongChieuId": 6,
    "movieId": 2
  },
  {
    "id": 424,
    "time": "Saturday, May 22, 2021 5:00 PM",
    "cumRapId": 3,
    "phongChieuId": 7,
    "movieId": 10
  },
  {
    "id": 425,
    "time": "Friday, May 21, 2021 12:16 PM",
    "cumRapId": 6,
    "phongChieuId": 8,
    "movieId": 3
  },
  {
    "id": 426,
    "time": "Wednesday, May 26, 2021 3:17 PM",
    "cumRapId": 10,
    "phongChieuId": 6,
    "movieId": 3
  },
  {
    "id": 427,
    "time": "Wednesday, May 26, 2021 3:40 PM",
    "cumRapId": 7,
    "phongChieuId": 3,
    "movieId": 7
  },
  {
    "id": 428,
    "time": "Saturday, May 22, 2021 9:57 AM",
    "cumRapId": 5,
    "phongChieuId": 8,
    "movieId": 2
  },
  {
    "id": 429,
    "time": "Tuesday, May 25, 2021 9:36 PM",
    "cumRapId": 3,
    "phongChieuId": 8,
    "movieId": 1
  },
  {
    "id": 430,
    "time": "Sunday, May 23, 2021 2:20 AM",
    "cumRapId": 8,
    "phongChieuId": 5,
    "movieId": 7
  },
  {
    "id": 431,
    "time": "Monday, May 24, 2021 11:07 PM",
    "cumRapId": 2,
    "phongChieuId": 10,
    "movieId": 2
  },
  {
    "id": 432,
    "time": "Friday, May 21, 2021 5:44 PM",
    "cumRapId": 4,
    "phongChieuId": 9,
    "movieId": 10
  },
  {
    "id": 433,
    "time": "Sunday, May 23, 2021 8:59 AM",
    "cumRapId": 10,
    "phongChieuId": 3,
    "movieId": 8
  },
  {
    "id": 434,
    "time": "Wednesday, May 26, 2021 2:18 AM",
    "cumRapId": 3,
    "phongChieuId": 9,
    "movieId": 1
  },
  {
    "id": 435,
    "time": "Tuesday, May 25, 2021 2:12 AM",
    "cumRapId": 6,
    "phongChieuId": 9,
    "movieId": 3
  },
  {
    "id": 436,
    "time": "Monday, May 24, 2021 4:24 PM",
    "cumRapId": 8,
    "phongChieuId": 4,
    "movieId": 4
  },
  {
    "id": 437,
    "time": "Monday, May 24, 2021 1:40 PM",
    "cumRapId": 8,
    "phongChieuId": 4,
    "movieId": 3
  },
  {
    "id": 438,
    "time": "Saturday, May 22, 2021 11:40 PM",
    "cumRapId": 8,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 439,
    "time": "Tuesday, May 25, 2021 6:21 PM",
    "cumRapId": 7,
    "phongChieuId": 8,
    "movieId": 10
  },
  {
    "id": 440,
    "time": "Monday, May 24, 2021 6:53 AM",
    "cumRapId": 4,
    "phongChieuId": 10,
    "movieId": 5
  },
  {
    "id": 441,
    "time": "Monday, May 24, 2021 7:38 PM",
    "cumRapId": 9,
    "phongChieuId": 3,
    "movieId": 7
  },
  {
    "id": 442,
    "time": "Friday, May 21, 2021 12:21 AM",
    "cumRapId": 6,
    "phongChieuId": 9,
    "movieId": 6
  },
  {
    "id": 443,
    "time": "Wednesday, May 26, 2021 3:15 PM",
    "cumRapId": 2,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 444,
    "time": "Friday, May 21, 2021 9:54 PM",
    "cumRapId": 9,
    "phongChieuId": 4,
    "movieId": 2
  },
  {
    "id": 445,
    "time": "Wednesday, May 26, 2021 3:10 PM",
    "cumRapId": 4,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 446,
    "time": "Friday, May 21, 2021 4:18 PM",
    "cumRapId": 2,
    "phongChieuId": 9,
    "movieId": 5
  },
  {
    "id": 447,
    "time": "Friday, May 21, 2021 5:35 PM",
    "cumRapId": 3,
    "phongChieuId": 1,
    "movieId": 8
  },
  {
    "id": 448,
    "time": "Tuesday, May 25, 2021 4:48 AM",
    "cumRapId": 4,
    "phongChieuId": 1,
    "movieId": 4
  },
  {
    "id": 449,
    "time": "Tuesday, May 25, 2021 10:10 AM",
    "cumRapId": 4,
    "phongChieuId": 3,
    "movieId": 5
  },
  {
    "id": 450,
    "time": "Friday, May 21, 2021 4:47 AM",
    "cumRapId": 8,
    "phongChieuId": 4,
    "movieId": 1
  },
  {
    "id": 451,
    "time": "Friday, May 21, 2021 3:18 PM",
    "cumRapId": 3,
    "phongChieuId": 10,
    "movieId": 2
  },
  {
    "id": 452,
    "time": "Saturday, May 22, 2021 6:57 PM",
    "cumRapId": 5,
    "phongChieuId": 7,
    "movieId": 1
  },
  {
    "id": 453,
    "time": "Sunday, May 23, 2021 4:16 PM",
    "cumRapId": 7,
    "phongChieuId": 8,
    "movieId": 8
  },
  {
    "id": 454,
    "time": "Monday, May 24, 2021 7:59 AM",
    "cumRapId": 4,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 455,
    "time": "Sunday, May 23, 2021 5:27 AM",
    "cumRapId": 6,
    "phongChieuId": 8,
    "movieId": 6
  },
  {
    "id": 456,
    "time": "Sunday, May 23, 2021 6:33 PM",
    "cumRapId": 1,
    "phongChieuId": 4,
    "movieId": 8
  },
  {
    "id": 457,
    "time": "Tuesday, May 25, 2021 6:12 AM",
    "cumRapId": 5,
    "phongChieuId": 2,
    "movieId": 10
  },
  {
    "id": 458,
    "time": "Tuesday, May 25, 2021 7:30 AM",
    "cumRapId": 2,
    "phongChieuId": 1,
    "movieId": 1
  },
  {
    "id": 459,
    "time": "Monday, May 24, 2021 3:56 AM",
    "cumRapId": 3,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 460,
    "time": "Sunday, May 23, 2021 3:07 AM",
    "cumRapId": 7,
    "phongChieuId": 7,
    "movieId": 5
  },
  {
    "id": 461,
    "time": "Sunday, May 23, 2021 12:36 PM",
    "cumRapId": 10,
    "phongChieuId": 2,
    "movieId": 1
  },
  {
    "id": 462,
    "time": "Sunday, May 23, 2021 6:44 PM",
    "cumRapId": 5,
    "phongChieuId": 8,
    "movieId": 6
  },
  {
    "id": 463,
    "time": "Friday, May 21, 2021 9:16 AM",
    "cumRapId": 4,
    "phongChieuId": 2,
    "movieId": 5
  },
  {
    "id": 464,
    "time": "Tuesday, May 25, 2021 8:03 PM",
    "cumRapId": 1,
    "phongChieuId": 10,
    "movieId": 7
  },
  {
    "id": 465,
    "time": "Friday, May 21, 2021 1:56 PM",
    "cumRapId": 10,
    "phongChieuId": 7,
    "movieId": 4
  },
  {
    "id": 466,
    "time": "Sunday, May 23, 2021 11:33 PM",
    "cumRapId": 6,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 467,
    "time": "Wednesday, May 26, 2021 10:42 PM",
    "cumRapId": 8,
    "phongChieuId": 6,
    "movieId": 6
  },
  {
    "id": 468,
    "time": "Wednesday, May 26, 2021 4:37 PM",
    "cumRapId": 5,
    "phongChieuId": 8,
    "movieId": 8
  },
  {
    "id": 469,
    "time": "Monday, May 24, 2021 1:05 PM",
    "cumRapId": 3,
    "phongChieuId": 8,
    "movieId": 6
  },
  {
    "id": 470,
    "time": "Friday, May 21, 2021 12:12 PM",
    "cumRapId": 2,
    "phongChieuId": 5,
    "movieId": 10
  },
  {
    "id": 471,
    "time": "Tuesday, May 25, 2021 9:05 PM",
    "cumRapId": 1,
    "phongChieuId": 2,
    "movieId": 4
  },
  {
    "id": 472,
    "time": "Friday, May 21, 2021 11:51 PM",
    "cumRapId": 2,
    "phongChieuId": 5,
    "movieId": 6
  },
  {
    "id": 473,
    "time": "Wednesday, May 26, 2021 9:16 PM",
    "cumRapId": 4,
    "phongChieuId": 5,
    "movieId": 8
  },
  {
    "id": 474,
    "time": "Monday, May 24, 2021 12:09 AM",
    "cumRapId": 2,
    "phongChieuId": 10,
    "movieId": 10
  },
  {
    "id": 475,
    "time": "Friday, May 21, 2021 8:37 PM",
    "cumRapId": 9,
    "phongChieuId": 9,
    "movieId": 9
  },
  {
    "id": 476,
    "time": "Sunday, May 23, 2021 9:32 AM",
    "cumRapId": 1,
    "phongChieuId": 4,
    "movieId": 4
  },
  {
    "id": 477,
    "time": "Friday, May 21, 2021 11:36 PM",
    "cumRapId": 7,
    "phongChieuId": 1,
    "movieId": 2
  },
  {
    "id": 478,
    "time": "Tuesday, May 25, 2021 3:01 PM",
    "cumRapId": 8,
    "phongChieuId": 3,
    "movieId": 5
  },
  {
    "id": 479,
    "time": "Friday, May 21, 2021 4:12 PM",
    "cumRapId": 2,
    "phongChieuId": 1,
    "movieId": 9
  },
  {
    "id": 480,
    "time": "Friday, May 21, 2021 3:25 PM",
    "cumRapId": 5,
    "phongChieuId": 2,
    "movieId": 3
  },
  {
    "id": 481,
    "time": "Sunday, May 23, 2021 1:15 PM",
    "cumRapId": 9,
    "phongChieuId": 6,
    "movieId": 9
  },
  {
    "id": 482,
    "time": "Saturday, May 22, 2021 5:47 AM",
    "cumRapId": 1,
    "phongChieuId": 4,
    "movieId": 1
  },
  {
    "id": 483,
    "time": "Tuesday, May 25, 2021 5:41 AM",
    "cumRapId": 10,
    "phongChieuId": 4,
    "movieId": 4
  },
  {
    "id": 484,
    "time": "Sunday, May 23, 2021 12:28 AM",
    "cumRapId": 10,
    "phongChieuId": 9,
    "movieId": 10
  },
  {
    "id": 485,
    "time": "Tuesday, May 25, 2021 8:56 AM",
    "cumRapId": 6,
    "phongChieuId": 6,
    "movieId": 1
  },
  {
    "id": 486,
    "time": "Tuesday, May 25, 2021 9:50 AM",
    "cumRapId": 2,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 487,
    "time": "Sunday, May 23, 2021 8:56 AM",
    "cumRapId": 6,
    "phongChieuId": 8,
    "movieId": 9
  },
  {
    "id": 488,
    "time": "Sunday, May 23, 2021 5:52 AM",
    "cumRapId": 6,
    "phongChieuId": 1,
    "movieId": 4
  },
  {
    "id": 489,
    "time": "Sunday, May 23, 2021 8:28 AM",
    "cumRapId": 6,
    "phongChieuId": 1,
    "movieId": 10
  },
  {
    "id": 490,
    "time": "Saturday, May 22, 2021 6:05 PM",
    "cumRapId": 3,
    "phongChieuId": 1,
    "movieId": 4
  },
  {
    "id": 491,
    "time": "Friday, May 21, 2021 1:13 PM",
    "cumRapId": 4,
    "phongChieuId": 10,
    "movieId": 1
  },
  {
    "id": 492,
    "time": "Monday, May 24, 2021 9:21 AM",
    "cumRapId": 6,
    "phongChieuId": 1,
    "movieId": 1
  },
  {
    "id": 493,
    "time": "Wednesday, May 26, 2021 1:35 AM",
    "cumRapId": 8,
    "phongChieuId": 9,
    "movieId": 6
  },
  {
    "id": 494,
    "time": "Tuesday, May 25, 2021 7:06 AM",
    "cumRapId": 4,
    "phongChieuId": 7,
    "movieId": 10
  },
  {
    "id": 495,
    "time": "Saturday, May 22, 2021 12:28 AM",
    "cumRapId": 1,
    "phongChieuId": 10,
    "movieId": 1
  },
  {
    "id": 496,
    "time": "Monday, May 24, 2021 3:57 PM",
    "cumRapId": 4,
    "phongChieuId": 1,
    "movieId": 7
  },
  {
    "id": 497,
    "time": "Sunday, May 23, 2021 2:05 AM",
    "cumRapId": 4,
    "phongChieuId": 9,
    "movieId": 9
  },
  {
    "id": 498,
    "time": "Tuesday, May 25, 2021 11:33 AM",
    "cumRapId": 4,
    "phongChieuId": 9,
    "movieId": 6
  },
  {
    "id": 499,
    "time": "Wednesday, May 26, 2021 5:55 AM",
    "cumRapId": 4,
    "phongChieuId": 5,
    "movieId": 2
  },
  {
    "id": 500,
    "time": "Monday, May 24, 2021 3:57 AM",
    "cumRapId": 8,
    "phongChieuId": 10,
    "movieId": 7
  },
  {
    "id": 501,
    "time": "Tuesday, May 25, 2021 2:21 PM",
    "cumRapId": 3,
    "phongChieuId": 5,
    "movieId": 2
  },
  {
    "id": 502,
    "time": "Tuesday, May 25, 2021 3:32 AM",
    "cumRapId": 4,
    "phongChieuId": 6,
    "movieId": 6
  },
  {
    "id": 503,
    "time": "Tuesday, May 25, 2021 11:20 PM",
    "cumRapId": 9,
    "phongChieuId": 10,
    "movieId": 3
  },
  {
    "id": 504,
    "time": "Saturday, May 22, 2021 11:39 PM",
    "cumRapId": 4,
    "phongChieuId": 7,
    "movieId": 4
  },
  {
    "id": 505,
    "time": "Saturday, May 22, 2021 9:32 AM",
    "cumRapId": 10,
    "phongChieuId": 9,
    "movieId": 1
  },
  {
    "id": 506,
    "time": "Monday, May 24, 2021 2:53 PM",
    "cumRapId": 9,
    "phongChieuId": 10,
    "movieId": 10
  },
  {
    "id": 507,
    "time": "Monday, May 24, 2021 3:33 AM",
    "cumRapId": 8,
    "phongChieuId": 3,
    "movieId": 7
  },
  {
    "id": 508,
    "time": "Sunday, May 23, 2021 5:41 PM",
    "cumRapId": 7,
    "phongChieuId": 8,
    "movieId": 8
  },
  {
    "id": 509,
    "time": "Monday, May 24, 2021 11:14 PM",
    "cumRapId": 9,
    "phongChieuId": 10,
    "movieId": 8
  },
  {
    "id": 510,
    "time": "Friday, May 21, 2021 1:54 PM",
    "cumRapId": 4,
    "phongChieuId": 9,
    "movieId": 8
  },
  {
    "id": 511,
    "time": "Tuesday, May 25, 2021 1:11 AM",
    "cumRapId": 8,
    "phongChieuId": 8,
    "movieId": 10
  },
  {
    "id": 512,
    "time": "Tuesday, May 25, 2021 5:22 PM",
    "cumRapId": 6,
    "phongChieuId": 7,
    "movieId": 10
  },
  {
    "id": 513,
    "time": "Friday, May 21, 2021 3:54 AM",
    "cumRapId": 7,
    "phongChieuId": 5,
    "movieId": 2
  },
  {
    "id": 514,
    "time": "Monday, May 24, 2021 3:41 AM",
    "cumRapId": 3,
    "phongChieuId": 10,
    "movieId": 6
  },
  {
    "id": 515,
    "time": "Sunday, May 23, 2021 8:35 AM",
    "cumRapId": 6,
    "phongChieuId": 2,
    "movieId": 7
  },
  {
    "id": 516,
    "time": "Saturday, May 22, 2021 5:36 PM",
    "cumRapId": 2,
    "phongChieuId": 5,
    "movieId": 4
  },
  {
    "id": 517,
    "time": "Monday, May 24, 2021 11:18 AM",
    "cumRapId": 2,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 518,
    "time": "Saturday, May 22, 2021 1:42 PM",
    "cumRapId": 2,
    "phongChieuId": 2,
    "movieId": 8
  },
  {
    "id": 519,
    "time": "Saturday, May 22, 2021 8:51 PM",
    "cumRapId": 8,
    "phongChieuId": 10,
    "movieId": 1
  },
  {
    "id": 520,
    "time": "Monday, May 24, 2021 3:50 PM",
    "cumRapId": 1,
    "phongChieuId": 8,
    "movieId": 2
  },
  {
    "id": 521,
    "time": "Tuesday, May 25, 2021 12:17 AM",
    "cumRapId": 6,
    "phongChieuId": 9,
    "movieId": 4
  },
  {
    "id": 522,
    "time": "Saturday, May 22, 2021 1:26 AM",
    "cumRapId": 6,
    "phongChieuId": 10,
    "movieId": 6
  },
  {
    "id": 523,
    "time": "Monday, May 24, 2021 6:56 PM",
    "cumRapId": 2,
    "phongChieuId": 8,
    "movieId": 9
  },
  {
    "id": 524,
    "time": "Saturday, May 22, 2021 4:18 AM",
    "cumRapId": 6,
    "phongChieuId": 7,
    "movieId": 5
  },
  {
    "id": 525,
    "time": "Saturday, May 22, 2021 9:38 PM",
    "cumRapId": 4,
    "phongChieuId": 3,
    "movieId": 8
  },
  {
    "id": 526,
    "time": "Wednesday, May 26, 2021 4:21 AM",
    "cumRapId": 5,
    "phongChieuId": 3,
    "movieId": 6
  },
  {
    "id": 527,
    "time": "Wednesday, May 26, 2021 10:20 PM",
    "cumRapId": 7,
    "phongChieuId": 2,
    "movieId": 6
  },
  {
    "id": 528,
    "time": "Tuesday, May 25, 2021 7:51 PM",
    "cumRapId": 4,
    "phongChieuId": 2,
    "movieId": 10
  },
  {
    "id": 529,
    "time": "Sunday, May 23, 2021 6:11 PM",
    "cumRapId": 8,
    "phongChieuId": 10,
    "movieId": 7
  },
  {
    "id": 530,
    "time": "Monday, May 24, 2021 2:14 PM",
    "cumRapId": 4,
    "phongChieuId": 7,
    "movieId": 9
  },
  {
    "id": 531,
    "time": "Saturday, May 22, 2021 6:56 AM",
    "cumRapId": 1,
    "phongChieuId": 9,
    "movieId": 8
  },
  {
    "id": 532,
    "time": "Tuesday, May 25, 2021 10:48 AM",
    "cumRapId": 10,
    "phongChieuId": 9,
    "movieId": 1
  },
  {
    "id": 533,
    "time": "Saturday, May 22, 2021 3:40 PM",
    "cumRapId": 2,
    "phongChieuId": 2,
    "movieId": 1
  },
  {
    "id": 534,
    "time": "Tuesday, May 25, 2021 3:12 AM",
    "cumRapId": 7,
    "phongChieuId": 2,
    "movieId": 8
  },
  {
    "id": 535,
    "time": "Friday, May 21, 2021 3:54 AM",
    "cumRapId": 3,
    "phongChieuId": 9,
    "movieId": 10
  },
  {
    "id": 536,
    "time": "Tuesday, May 25, 2021 10:35 PM",
    "cumRapId": 7,
    "phongChieuId": 1,
    "movieId": 4
  },
  {
    "id": 537,
    "time": "Friday, May 21, 2021 2:14 AM",
    "cumRapId": 5,
    "phongChieuId": 5,
    "movieId": 1
  },
  {
    "id": 538,
    "time": "Tuesday, May 25, 2021 8:25 AM",
    "cumRapId": 6,
    "phongChieuId": 5,
    "movieId": 9
  },
  {
    "id": 539,
    "time": "Saturday, May 22, 2021 11:50 PM",
    "cumRapId": 6,
    "phongChieuId": 8,
    "movieId": 1
  },
  {
    "id": 540,
    "time": "Monday, May 24, 2021 10:24 PM",
    "cumRapId": 1,
    "phongChieuId": 6,
    "movieId": 10
  },
  {
    "id": 541,
    "time": "Monday, May 24, 2021 11:26 PM",
    "cumRapId": 7,
    "phongChieuId": 2,
    "movieId": 2
  },
  {
    "id": 542,
    "time": "Tuesday, May 25, 2021 8:47 AM",
    "cumRapId": 7,
    "phongChieuId": 1,
    "movieId": 8
  },
  {
    "id": 543,
    "time": "Monday, May 24, 2021 3:38 PM",
    "cumRapId": 9,
    "phongChieuId": 5,
    "movieId": 1
  },
  {
    "id": 544,
    "time": "Sunday, May 23, 2021 8:24 AM",
    "cumRapId": 1,
    "phongChieuId": 10,
    "movieId": 3
  },
  {
    "id": 545,
    "time": "Friday, May 21, 2021 8:21 AM",
    "cumRapId": 7,
    "phongChieuId": 2,
    "movieId": 5
  },
  {
    "id": 546,
    "time": "Sunday, May 23, 2021 2:50 PM",
    "cumRapId": 2,
    "phongChieuId": 1,
    "movieId": 6
  },
  {
    "id": 547,
    "time": "Saturday, May 22, 2021 8:18 PM",
    "cumRapId": 3,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 548,
    "time": "Tuesday, May 25, 2021 10:32 AM",
    "cumRapId": 4,
    "phongChieuId": 5,
    "movieId": 7
  },
  {
    "id": 549,
    "time": "Wednesday, May 26, 2021 3:36 AM",
    "cumRapId": 6,
    "phongChieuId": 8,
    "movieId": 8
  },
  {
    "id": 550,
    "time": "Saturday, May 22, 2021 10:28 PM",
    "cumRapId": 2,
    "phongChieuId": 1,
    "movieId": 10
  },
  {
    "id": 551,
    "time": "Wednesday, May 26, 2021 2:28 PM",
    "cumRapId": 9,
    "phongChieuId": 6,
    "movieId": 1
  },
  {
    "id": 552,
    "time": "Sunday, May 23, 2021 11:20 AM",
    "cumRapId": 8,
    "phongChieuId": 5,
    "movieId": 4
  },
  {
    "id": 553,
    "time": "Monday, May 24, 2021 5:40 PM",
    "cumRapId": 8,
    "phongChieuId": 8,
    "movieId": 6
  },
  {
    "id": 554,
    "time": "Monday, May 24, 2021 11:43 AM",
    "cumRapId": 9,
    "phongChieuId": 5,
    "movieId": 8
  },
  {
    "id": 555,
    "time": "Tuesday, May 25, 2021 12:49 AM",
    "cumRapId": 3,
    "phongChieuId": 8,
    "movieId": 7
  },
  {
    "id": 556,
    "time": "Wednesday, May 26, 2021 5:01 AM",
    "cumRapId": 10,
    "phongChieuId": 4,
    "movieId": 6
  },
  {
    "id": 557,
    "time": "Wednesday, May 26, 2021 7:42 PM",
    "cumRapId": 9,
    "phongChieuId": 7,
    "movieId": 10
  },
  {
    "id": 558,
    "time": "Tuesday, May 25, 2021 8:56 AM",
    "cumRapId": 10,
    "phongChieuId": 9,
    "movieId": 10
  },
  {
    "id": 559,
    "time": "Monday, May 24, 2021 12:22 PM",
    "cumRapId": 4,
    "phongChieuId": 3,
    "movieId": 10
  },
  {
    "id": 560,
    "time": "Saturday, May 22, 2021 8:42 AM",
    "cumRapId": 7,
    "phongChieuId": 5,
    "movieId": 2
  },
  {
    "id": 561,
    "time": "Monday, May 24, 2021 5:12 PM",
    "cumRapId": 1,
    "phongChieuId": 10,
    "movieId": 2
  },
  {
    "id": 562,
    "time": "Sunday, May 23, 2021 11:11 AM",
    "cumRapId": 9,
    "phongChieuId": 1,
    "movieId": 6
  },
  {
    "id": 563,
    "time": "Saturday, May 22, 2021 11:48 PM",
    "cumRapId": 4,
    "phongChieuId": 5,
    "movieId": 4
  },
  {
    "id": 564,
    "time": "Tuesday, May 25, 2021 4:30 PM",
    "cumRapId": 3,
    "phongChieuId": 4,
    "movieId": 6
  },
  {
    "id": 565,
    "time": "Tuesday, May 25, 2021 9:23 PM",
    "cumRapId": 7,
    "phongChieuId": 7,
    "movieId": 8
  },
  {
    "id": 566,
    "time": "Tuesday, May 25, 2021 9:27 PM",
    "cumRapId": 10,
    "phongChieuId": 10,
    "movieId": 6
  },
  {
    "id": 567,
    "time": "Monday, May 24, 2021 7:47 PM",
    "cumRapId": 7,
    "phongChieuId": 9,
    "movieId": 9
  },
  {
    "id": 568,
    "time": "Sunday, May 23, 2021 7:39 AM",
    "cumRapId": 7,
    "phongChieuId": 8,
    "movieId": 5
  },
  {
    "id": 569,
    "time": "Sunday, May 23, 2021 5:02 AM",
    "cumRapId": 4,
    "phongChieuId": 4,
    "movieId": 8
  },
  {
    "id": 570,
    "time": "Sunday, May 23, 2021 6:41 PM",
    "cumRapId": 7,
    "phongChieuId": 9,
    "movieId": 8
  },
  {
    "id": 571,
    "time": "Saturday, May 22, 2021 9:27 PM",
    "cumRapId": 4,
    "phongChieuId": 7,
    "movieId": 5
  },
  {
    "id": 572,
    "time": "Sunday, May 23, 2021 1:14 AM",
    "cumRapId": 1,
    "phongChieuId": 6,
    "movieId": 8
  },
  {
    "id": 573,
    "time": "Wednesday, May 26, 2021 11:15 PM",
    "cumRapId": 9,
    "phongChieuId": 9,
    "movieId": 4
  },
  {
    "id": 574,
    "time": "Monday, May 24, 2021 10:15 AM",
    "cumRapId": 7,
    "phongChieuId": 2,
    "movieId": 9
  },
  {
    "id": 575,
    "time": "Sunday, May 23, 2021 1:08 PM",
    "cumRapId": 5,
    "phongChieuId": 5,
    "movieId": 7
  },
  {
    "id": 576,
    "time": "Friday, May 21, 2021 8:05 PM",
    "cumRapId": 4,
    "phongChieuId": 5,
    "movieId": 4
  },
  {
    "id": 577,
    "time": "Sunday, May 23, 2021 3:31 PM",
    "cumRapId": 10,
    "phongChieuId": 2,
    "movieId": 6
  },
  {
    "id": 578,
    "time": "Monday, May 24, 2021 3:12 AM",
    "cumRapId": 9,
    "phongChieuId": 2,
    "movieId": 3
  },
  {
    "id": 579,
    "time": "Friday, May 21, 2021 5:52 PM",
    "cumRapId": 9,
    "phongChieuId": 2,
    "movieId": 10
  },
  {
    "id": 580,
    "time": "Tuesday, May 25, 2021 9:58 PM",
    "cumRapId": 7,
    "phongChieuId": 1,
    "movieId": 4
  },
  {
    "id": 581,
    "time": "Wednesday, May 26, 2021 1:20 PM",
    "cumRapId": 4,
    "phongChieuId": 2,
    "movieId": 1
  },
  {
    "id": 582,
    "time": "Saturday, May 22, 2021 3:39 AM",
    "cumRapId": 9,
    "phongChieuId": 7,
    "movieId": 6
  },
  {
    "id": 583,
    "time": "Saturday, May 22, 2021 11:01 AM",
    "cumRapId": 6,
    "phongChieuId": 2,
    "movieId": 8
  },
  {
    "id": 584,
    "time": "Wednesday, May 26, 2021 8:17 PM",
    "cumRapId": 3,
    "phongChieuId": 10,
    "movieId": 7
  },
  {
    "id": 585,
    "time": "Wednesday, May 26, 2021 4:24 PM",
    "cumRapId": 3,
    "phongChieuId": 4,
    "movieId": 10
  },
  {
    "id": 586,
    "time": "Friday, May 21, 2021 6:04 PM",
    "cumRapId": 6,
    "phongChieuId": 8,
    "movieId": 2
  },
  {
    "id": 587,
    "time": "Tuesday, May 25, 2021 3:16 AM",
    "cumRapId": 4,
    "phongChieuId": 8,
    "movieId": 4
  },
  {
    "id": 588,
    "time": "Sunday, May 23, 2021 10:22 PM",
    "cumRapId": 2,
    "phongChieuId": 3,
    "movieId": 10
  },
  {
    "id": 589,
    "time": "Sunday, May 23, 2021 2:42 AM",
    "cumRapId": 2,
    "phongChieuId": 10,
    "movieId": 9
  },
  {
    "id": 590,
    "time": "Saturday, May 22, 2021 11:27 PM",
    "cumRapId": 8,
    "phongChieuId": 8,
    "movieId": 10
  },
  {
    "id": 591,
    "time": "Saturday, May 22, 2021 3:11 AM",
    "cumRapId": 9,
    "phongChieuId": 3,
    "movieId": 8
  },
  {
    "id": 592,
    "time": "Saturday, May 22, 2021 2:01 AM",
    "cumRapId": 10,
    "phongChieuId": 4,
    "movieId": 4
  },
  {
    "id": 593,
    "time": "Friday, May 21, 2021 1:50 PM",
    "cumRapId": 3,
    "phongChieuId": 1,
    "movieId": 2
  },
  {
    "id": 594,
    "time": "Wednesday, May 26, 2021 4:58 PM",
    "cumRapId": 8,
    "phongChieuId": 4,
    "movieId": 1
  },
  {
    "id": 595,
    "time": "Sunday, May 23, 2021 6:27 PM",
    "cumRapId": 10,
    "phongChieuId": 9,
    "movieId": 4
  },
  {
    "id": 596,
    "time": "Wednesday, May 26, 2021 6:58 PM",
    "cumRapId": 1,
    "phongChieuId": 10,
    "movieId": 9
  },
  {
    "id": 597,
    "time": "Sunday, May 23, 2021 9:03 PM",
    "cumRapId": 10,
    "phongChieuId": 9,
    "movieId": 1
  },
  {
    "id": 598,
    "time": "Friday, May 21, 2021 1:07 PM",
    "cumRapId": 5,
    "phongChieuId": 3,
    "movieId": 2
  },
  {
    "id": 599,
    "time": "Tuesday, May 25, 2021 9:09 PM",
    "cumRapId": 2,
    "phongChieuId": 9,
    "movieId": 3
  }
]
`);
