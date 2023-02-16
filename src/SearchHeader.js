import { useState } from "react";

function SearchHeader({ search }) {
  const [value, setValue] = useState("");
  const handleForumSubmit = (e) => {
    e.preventDefault();
    search(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleForumSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input value={value} onChange={handleChange} placeholder="Search" />
      </form>
    </div>
  );
}

export default SearchHeader;
