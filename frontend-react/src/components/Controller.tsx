import React from "react";
function Controller() {
  const myFunc = () => {};
  console.log("hello")
  return (
    <div className="container bg-green-500 mx-auto">
      <button className="trainsition-all duration-300 border border-black w-full mt-4 px-4 py-2 rounded-sm bg-indigo-500 hover:bg-indigo-600 text-white">
        Place Bet
      </button>
    </div>
  );
}

export default Controller;
