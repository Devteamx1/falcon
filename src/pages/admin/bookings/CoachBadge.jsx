const CoachBadge = ({ coach, image }) => {
  return (
    <div className="flex items-center gap-3">

      <img
        src={image}
        alt={coach}
        className="w-10 h-10 rounded-full object-cover border"
      />

      <div>

        <h4 className="font-medium text-slate-700">
          {coach}
        </h4>

        <p className="text-xs text-gray-500">
          Swimming Coach
        </p>

      </div>

    </div>
  );
};

export default CoachBadge;