"use client";
import Image from "next/image";
import { Box } from "@mui/material";

export interface CardProps {
    title: string;
    poster: string;
    character: string;
}

export default function Card(props: CardProps) {
    const { title, poster, character } = props;

    return (
        <Box className="">
            <Image src={poster} alt="Poster of the movie"></Image>
            <h3>
                {title} as {character}
            </h3>
        </Box>
    );
}
