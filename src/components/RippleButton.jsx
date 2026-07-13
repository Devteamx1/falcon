import { useState } from "react";
import { Link } from "react-router-dom";

const RippleButton = ({ to, onClick, children, className = "", as = "link" }) => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y, size }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);

    if (onClick) onClick(e);
  };

  const content = (
    <>
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple-span"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </>
  );

  const baseClass = `relative overflow-hidden ${className}`;

  if (as === "button") {
    return (
      <button onClick={createRipple} className={baseClass}>
        {content}
      </button>
    );
  }

  return (
    <Link to={to} onClick={createRipple} className={baseClass}>
      {content}
    </Link>
  );
};

export default RippleButton;