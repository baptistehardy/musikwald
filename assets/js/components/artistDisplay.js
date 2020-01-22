import React from "react";

export default function ArtistDisplay(artists) {
    let artistsArray = [];
    artists.artists.map((artist, key) => {
        artistsArray.push(artist.name);
    });

    return artistsArray.join(', ').toString();
}