export const getShowsByKey = key => {
    return fetch(`https://api.tvmaze.com/search/shows?q=${key}`)
        .then(res => res.json())
        .then()
}

export const getShowById = id => {
    return fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then(res => res.json())
        .then()
}