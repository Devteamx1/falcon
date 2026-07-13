const SessionBadge = ({ session }) => {
  const getSessionStyle = () => {
    switch (session) {
      case "Morning":
        return "bg-orange-100 text-orange-700 border-orange-300";

      case "Evening":
        return "bg-indigo-100 text-indigo-700 border-indigo-300";

      case "Kids":
        return "bg-pink-100 text-pink-700 border-pink-300";

      case "Advanced":
        return "bg-purple-100 text-purple-700 border-purple-300";

      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getIcon = () => {
    switch (session) {
      case "Morning":
        return "🌅";

      case "Evening":
        return "🌇";

      case "Kids":
        return "👶";

      case "Advanced":
        return "🏊";

      default:
        return "📍";
    }
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        px-3
        py-1
        rounded-full
        border
        text-xs
        font-semibold
        ${getSessionStyle()}
      `}
    >
      <span>{getIcon()}</span>

      {session}
    </span>
  );
};

export default SessionBadge;