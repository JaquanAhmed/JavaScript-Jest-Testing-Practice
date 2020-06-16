const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpicture.com',
    'myfavouritecats.com',
    'myfavouritecats2.com'
];

//finds the website that includes what has been inputed into the search
//only return top three results
const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

//console.log(googleSearch('cat, googleDatabase'));

module.exports = googleSearch;