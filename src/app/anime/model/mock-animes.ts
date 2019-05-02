import { Anime } from './anime';

export const animes: Array<Anime> = [
    { id: 1, name: 'Angel Beats',         episodes: 13,  genre: 'Drama',       rating: 7.8, popularity: 'Low',      isLiked: false,
      imageUrl: 'https://i.ebayimg.com/images/g/YrUAAOSwvg9XfB5h/s-l300.jpg',
      description: 'Angel Beats! is a multimedia project consisting of an anime series, a manga series, 4-panel comic strips (4-koma) and a novel. The anime series acts as the central plot source for the remaining material, while the mini-novel and manga act as an expansion to the series as prequel and adaptation-expansion respectively.' },
    { id: 2, name: 'Attack On Titan',     episodes: 40,  genre: 'Apocalyptic', rating: 8.7, popularity: 'High',     isLiked: false,
      imageUrl: 'https://cdn.europosters.eu/image/750/posters/attack-on-titan-shingeki-no-kyojin-attack-i22797.jpg' },
    { id: 3, name: 'Clannad',             episodes: 24,  genre: 'Fantasy',     rating: 7.5, popularity: 'Low',      isLiked: false,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDc4HEH2qW0vG-PD0xQ18pl-uPgmSdfPxN4pGorUSWTjLMU0' },
    { id: 4, name: 'Code Geass',          episodes: 50,  genre: 'Mecha',       rating: 9.8, popularity: 'High',     isLiked: false,
      imageUrl: `https://pre00.deviantart.net/2517/th/pre/i/2015/312/f/e/code_geass_poster__farcry_3__blood_dragon_themed_by_yolokas-d91a845.jpg` },
    { id: 5, name: 'Cowboy Bebop',        episodes: 26,  genre: 'Space',       rating: 7.9, popularity: 'Moderate', isLiked: false,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNs2LPBnbn-2cG6LffdYxH3NtGd1bJJkEDhz01uYkF-4OqDeWt' },
    { id: 6, name: 'Death Note',          episodes: 37,  genre: 'Crime',       rating: 9.4, popularity: 'High',     isLiked: false,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51SWDXRc2sL.jpg' },
    { id: 7, name: 'Detective Conan',     episodes: 950, genre: 'Mystery',     rating: 8.4, popularity: 'High',     isLiked: false,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51aeinDgJyL.jpg' },
    { id: 8, name: 'Dragon Ball Super',   episodes: 125, genre: 'Adventure',   rating: 9.1, popularity: 'High',     isLiked: false,
      imageUrl: 'https://pre00.deviantart.net/8506/th/pre/f/2017/188/1/9/dragon_ball_super_universe_survival___poster_by_robertdb-dbfijxj.jpg' },
    { id: 9, name: 'Ergo Proxy',          episodes: 23,  genre: 'Science',     rating: 8.1, popularity: 'Low',      isLiked: false,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DkZ0nQRY6IZMASScYmVCtTLpm7VnrnEoQaMjldGAD1WDE0t7' },
    { id: 10, name: 'Fate Stay Night',     episodes: 23,  genre: 'Action',      rating: 7.6, popularity: 'Moderate', isLiked: false,
      imageUrl: 'https://store.hmv.com/HMVStore/media/product/189142/01-189142.jpg' }, 
    { id: 11, name: 'Flame Of Recca',      episodes: 42,  genre: 'Adventure',   rating: 7.9, popularity: 'Moderate', isLiked: false,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BOGYzMzc3Y2EtZDY5ZS00MDU1LTgzYTEtZjY2ODJhNzdhOThkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg' },    
    { id: 12, name: 'Fruits Basket',       episodes: 26,  genre: 'Romance',     rating: 7.7, popularity: 'Moderate', isLiked: false,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDVkMzZmMjgtMzM0Yi00ZjBmLWE2MzgtYzBiYjEyNmYzODIzXkEyXkFqcGdeQXVyNzI1MDI1NDU@._V1_UY268_CR12,0,182,268_AL_.jpg' },
    { id: 13, name: 'Fullmetal Alchemist', episodes: 64,  genre: 'Action',      rating: 9.2, popularity: 'High',     isLiked: false,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwB6Wzv0U4Opm0IqPvOpJM23s0fJ_0LoLAqB0BjE73Gi51uA2_w' },
    { id: 14, name: 'HunterxHunter',       episodes: 148, genre: 'Adventure',   rating: 8.9, popularity: 'High',     isLiked: false,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqMXJ7WqqXfIGK6o_sEQksQ26GOmu83-wpVtOyj7Wfo-URefw' },
    { id: 15, name: 'Naruto Shippuden',    episodes: 500, genre: 'Action',      rating: 9.5, popularity: 'High',     isLiked: false,
      imageUrl: 'https://i.pinimg.com/236x/be/4f/c1/be4fc10b076d3341e5d47ea3c83bb6ef--anime-bonito-manga-japan.jpg' },
    { id: 16, name: 'One Piece',           episodes: 850, genre: 'Adventure',   rating: 9.7, popularity: 'High',     isLiked: false,
      imageUrl: 'https://i0.wp.com/ae01.alicdn.com/kf/HTB1Jvm_OVXXXXXGaXXXq6xXFXXXN/Custom-Canvas-Art-Kids-Wall-Stickers-Luffy-Crew-Wallpaper-One-Piece-Figure-Poster-One-Piece-Anime.jpg?w=3000&quality=2880' },
    { id: 17, name: 'PokeMon',             episodes: 659, genre: 'Adventure',   rating: 7.7, popularity: 'Moderate', isLiked: false,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpy-9wE5df1rd7pqyYgs4iG8nZKvBg3lAeSHw8-Hc4hgSUUfPD' },
    { id: 18, name: 'Samurai Champloo',    episodes: 26,  genre: 'Action',      rating: 7.4, popularity: 'Moderate', isLiked: false,
      imageUrl: 'https://i.pinimg.com/originals/11/4a/fe/114afe2c881d2d186926f5ac1a15821d.jpg' },
    { id: 19, name: 'Seven Deadly Sins',   episodes: 48,  genre: 'Adventure',   rating: 8.3, popularity: 'High',     isLiked: false,
      imageUrl: 'https://orig00.deviantart.net/f2c1/f/2014/350/d/3/the_seven_deadly_sins___rus_poster_by_dragonmaxmd-d8a1c0y.png' },
    { id: 20, name: 'Wolfs Rain',         episodes: 30,  genre: 'Action',      rating: 8.2, popularity: 'High',     isLiked: false,
      imageUrl: 'https://i.pinimg.com/originals/8f/f6/41/8ff641365179be0baf3cd8218c829832.jpg' }
  ];
