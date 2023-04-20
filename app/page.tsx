import { GET_CARDS } from "./api/route";
import CardCarrousel from "./components/UI/CardCarrousel";
export interface MovieInformation {
    name: string;
    movies: {
        title: string;
        poster: string;
        character: string;
        id_movie: number;
    }[];
}

export default async function Home() {
    const data: MovieInformation = await GET_CARDS();
    return (
        <main className="">
            <section className="">
                <div>
                    <h2>Who is the star?</h2>
                    <CardCarrousel movies={data.movies} />
                </div>
            </section>
        </main>
    );
}
