import React from "react";

export const TodoComplete = ({ todoArray }) => {
  return (
    <>
      <div>
        <div className="title">Completed Task</div>
        {/* No-15: todoArray ko map kar rahe hai ternary operator se agar status true hai to todoArra jo ki abhi object hai wo show karega agare false hai to khuch nahi karega  */}
        {todoArray.map((el) =>
          el.status ? (
            <div key={el.id} >
              <span className={el.status ? "cross" : "notCross"}>
                <div className="compDiv">{el.name}</div>
              </span>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};
