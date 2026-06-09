interface ScoreCardProps {
  score: number;
}

function ScoreCard({
  score
}: ScoreCardProps) {
  return (
    <div className="bg-green-100 p-6 rounded-xl shadow">
      <h2 className="font-bold text-xl">
        Sustainability Score
      </h2>

      <p className="text-5xl font-bold mt-4 text-green-700">
        {score}
      </p>
    </div>
  );
}

export default ScoreCard;
