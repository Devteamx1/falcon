const TrainerBadge = ({ trainer, image, experience }) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={image}
        alt={trainer}
        className="w-11 h-11 rounded-full object-cover border-2 border-blue-100"
      />

      <div>
        <h3 className="font-semibold text-slate-800">
          {trainer}
        </h3>

        <p className="text-xs text-slate-500">
          {experience}
        </p>
      </div>
    </div>
  );
};

export default TrainerBadge;