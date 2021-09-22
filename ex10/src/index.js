function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
        // Add a record here
            artist: "Twenty One Pilots",
            title: "Lane Boy",
            release_year: 2018,
            formats: {
                1: "Spotify",
                2: "Cassette",
                3: "MP3"
            },
            gold: false
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;