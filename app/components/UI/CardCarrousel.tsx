"use client";

import Card from "./Card";

export interface CardCarrouselProps {
    movies: {
        title: string;
        poster: string;
        character: string;
        id_movie: number;
    }[];
}

export default function CardCarrousel(props: CardCarrouselProps) {
    const { movies } = props;
    return (
        <div>
            {movies.map((movie) => {
                return <Card key={movie.id_movie} {...movie} />;
            })}
        </div>
    );
}
