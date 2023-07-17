const make_album = (artistName:string, title:string, numTracks:number = 0) => {
    if(numTracks > 0) {
        return {
            artistName,
            title,
            numTracks
        };
    } else {
        return {
            artistName,
            title
        }
    }
};

console.log(make_album("Ibrahim", "Better Together"));
console.log(make_album("Farooq", "Generations", 2));