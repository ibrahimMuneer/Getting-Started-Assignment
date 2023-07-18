"use strict";
const make_album = (artistName, title, numTracks = 0) => {
    if (numTracks > 0) {
        return {
            artistName,
            title,
            numTracks
        };
    }
    else {
        return {
            artistName,
            title
        };
    }
};
console.log(make_album("Ibrahim", "Better Together"));
console.log(make_album("Farooq", "Generations", 2));
