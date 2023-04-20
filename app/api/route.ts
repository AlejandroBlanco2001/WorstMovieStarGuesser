export async function GET_ACTOR_MOVIES(id: number) {
    const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.API_KEY}&language=en-US`
    );
    const res = await response.json();
    const movies = res.cast
        .sort((a: any, b: any) => a.popularity - b.popularity)
        .slice(0, 10)
        .map((movie: any) => {
            return {
                title: movie.title,
                poster: movie.poster_path,
                character: movie.character,
                id_movie: movie.id,
            };
        });
    return movies;
}

export async function GET_CARDS() {
    const random_page_id: number = Math.floor(Math.random() * 100) + 1;
    const response = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US&page=${random_page_id}`
    );
    const data = await response.json();
    const random_actor_id: number = Math.floor(
        Math.random() * data.results.length
    );
    const actor = data.results[random_actor_id];
    const { name, id } = actor;
    const movies = await GET_ACTOR_MOVIES(id);
    return { name, movies };
}
