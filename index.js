// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Power is power", artist: "SZA, The Weeknd & Travis Scott", genre: "Pop" },
    { title: "Diamonds", artist: "Rihanna", genre: "R&B"},
    { title: "Dandelions", artist: "Ruth B.", genre: "Pop"},
    { title: "Turning Page", artist: "Sleeping At Last", genre: "Pop"},
    { title: "Show yourself", artist: "Idina Menzel & Evan Rachel Wood", genre: "Rock"},
    { title: "Joy", artist: "The Soil", genre: "Pop"},
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
   "name": "Star-Lord", "preferred_genre": "Rock",
    "name": "Gamora", "preferred_genre" "Pop",
    "Drax" : "R&B",
    "Rocket" : "Rock",
    "Groot" : "Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = {}

    for (const guardian in guardians) {
      const genre = guardians[guardian];
      playlists[guardian] = songs.filter((song) => song.genre === genre);
    }
  
    return playlists;
  }


// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


