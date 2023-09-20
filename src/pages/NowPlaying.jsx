import CardMovieType from "../components/Cards/CardMovieType";

const NowPlaying = () => {
    return (
        <main>
            <CardMovieType movieType="/movie/now_playing" Title="Now Playing" />
        </main>
    );
}
export default NowPlaying;
