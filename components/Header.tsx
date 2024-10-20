import { h } from "preact";

export const Header = () => {
  return (
    <div className="p-4">
      <header className="border-b-2 pb-4 mb-4">
        <div className="flex justify-between items-center text-sm">
          <span>Hello, User!</span>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500">Link 1</a>
            <a href="#" className="text-blue-500">Link 2</a>
            <a href="#" className="text-blue-500">Link 3</a>
          </div>
          <button className="border p-2 rounded">Profile</button>
        </div>
        <div className="flex justify-between items-center mb-2">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded w-1/2"
          />
          <select className="border p-2 rounded">
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
      </header>
    </div>
  );
};
