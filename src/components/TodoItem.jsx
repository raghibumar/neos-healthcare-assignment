export const TodoItem = ({ todoArray, getId, removeId }) => {
  return (
    <>
      {/* No-7: todoArray ko ma kar rahe hai ternary operator se agar status false hai to todoArra jo ki abhi object hai wo show karega agare true hai to khuch nahi karega */}

      <div className="itemDiv">
        {todoArray.map((el) =>
          el.status ? null : (
            /* No-11: Agar status true hai to hum class name ko cross kar rahe hai aur agar false hai to not cross karega */
            <div key={el.id} className={el.status ? "cross" : "notCross"}>
              <div className="itemTitle">{el.name}</div>
              {/* No-8: onClick karne pe hame ID milegi jisko hum ads child to parent pass karenge with the help of call back function getId() */}
              <button
                onClick={() => {
                  // console.log(el.id);
                  // if(!el.status){
                  //     console.log("true")
                  // }else{
                  //     console.log("false")
                  // }
                  // el.status ? !el.status : !el.status;
                  getId(el.id);
                }}
              >
                {/* ✓ */}
                <i class="fa-solid fa-check"></i>
              </button>
              <button
                /* No-12: onClick karne pe hame ID milegi jisko hum as child to parent pass karenge with the help of call back function removeId() */

                onClick={() => {
                  removeId(el.id);
                }}
              >
                {/* Remove */}
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
};
