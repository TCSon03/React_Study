import { useState } from "react";

function Ex01() {
  const [tonggle, setTonggle] = useState(false);
  const handleTonggle = () => {
    setTonggle((prev) => {
      console.log(prev);
      return !prev;
    });
  };
  return (
    <div>
      <button onClick={handleTonggle}>
        {tonggle ? "Ân nội dung" : "Hiện nội dung"}
      </button>
      {tonggle && <p>Đây là nội dung ẩn/hiện</p>}
    </div>
  );
}

export default Ex01;
