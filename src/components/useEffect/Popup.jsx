import { useEffect, useState } from "react";

const Popup = () => {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
    
  });
  if (!popup) return null;
  return (
    <div>
      <h2>🎉 Ưu đãi đặc biệt!</h2>
      <p>Nhận mã giảm giá 20% ngay hôm nay.</p>
      <button onClick={() => setPopup(false)}>Close</button>
    </div>
  );
};

export default Popup;
