const LeaderB = ({ memes }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-white">Leaderboard</h2>
            <ul className="mt-4 space-y-2">
                {memes.slice(0, 10).map((meme, index) => (
                    <li key={meme.id} className="bg-gray-700 p-2 rounded">
                        #{index + 1} {meme.title} - 👍 {meme.likes}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeaderB;
