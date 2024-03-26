"use client";
import React, { useReducer } from "react";
function reducer(state: any, action: any) {
  if (action.type === "increment_age") {
    return {
      age: state.age + 1,
    };
  } else if (action.type === "decrement_age" && state.age > 1) {
    return {
      age: state.age - 1,
    };
  } else {
    return {
      age: state.age,
    };
  }
  throw new Error("Unknown action");
}
export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { age: 20 });

  return (
    <div className=" max-w-[700px] mt-36 mx-auto">
      <p className="text-4xl mb-5">Age Counter</p>
      <div className="flex  gap-7 items-center ">
        <button
          onClick={() => {
            dispatch({ type: "decrement_age" });
          }}
          className="bg-blue-800 text-white py-2 px-4 rounded text-2xl"
        >
          -
        </button>
        <p>Hello You Are {state.age}</p>
        <button
          onClick={() => {
            dispatch({ type: "increment_age" });
          }}
          className="bg-blue-800 text-white py-2 px-4 rounded text-2xl"
        >
          +
        </button>
      </div>
    </div>
  );
}
