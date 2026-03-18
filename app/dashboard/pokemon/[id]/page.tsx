interface PokemonPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function PokemonPage({ params }: PokemonPageProps) {
    // Extract the id from the params object
    const { id } = await params;

    return (
        <div>
            <h1>Pokemon: {id}</h1>
        </div>
    );
}