import { nanoid } from "nanoid";
import { useState } from "react";
import { TodoComplete } from "./TodoComplete";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  const [text, setText] = useState();
  const [todoArray, settodoArray] = useState([]);
  //removing
  /* No-13: removeId function me jo id milegi TodoItem se usko hum todoArray ke sare object se filter kara rahe hai */

  const removeId = (rem) => {
    // console.log("remove id is working",rem)
    /* No-14: agar ID same ho rahi hai kisi bhi todoArray ke object se to wo us ID wala object ko chor ke sare objects return karega jo temporary 'remove' me store karega aue setTodoArray me  'remove' ko set karega*/
    const remove = todoArray.filter((r) => {
      return r.id !== rem;
    });
    settodoArray(remove);
  };

  //getting from child to parent for id

  /* No-9: getId function me hjo id milegi TodoItem se usko hum todoArray ke sare object se match kara rahe hai  */
  const getId = (elem) => {
    //   console.log("getting id = ",elem)
    // todoArray.map((index)=>(
    //     // if(index.id === elem){
    //     //     {...index,status: !index.status}
    //     // }
    //     index.id === elem ? {...index, status: !index.status} : index;

    // ))
    settodoArray(
      todoArray.map((index) =>
        // if(index.id === elem){
        //     {...index,status: !index.status}
        // }
        /* No-10: agar ID match hui to jis object ki ID hai usi object me status ko ulta karega with the help of not(!) operator agar match nhi hui to wo object ko jaisa hai waisa hi pass karega */
        index.id === elem ? { ...index, status: !index.status } : index
      )
    );
  };

  /* No-4: ek ITems function bana rahe hai jo text nahi dene par alert dega ya objetc bana rahe hai aur  */
  const Items = () => {
    // console.log("ele")

    // console.log(obj);
    if (!text) {
      alert("Please enter a todo");
    } else {
      const obj = {
        name: text,
        status: false,
        id: nanoid(5),
      };
      /* No-5:- object banane ke baad humlog obj ko todoArray me pass kar rahe hai */
      //   console.log(obj)
      settodoArray([...todoArray, obj]);
    }
  };
  return (
    <>
      <div>
        <div className="title">Todo App</div>
        <div className="inputDiv">
          {/* No-2: sending input value in setText() useSate function by onChange*/}
          <input
            type="text"
            placeholder="Add a todo"
            onChange={(e) => {
              // console.log(e.target.value);
              setText(e.target.value);
            }}
          />
          {/* No-3: onClick me function Item pass kiye hai jo hame alert */}

          <button 
            onClick={() => {
              // console.log(text);
              // settodoArray([...todoArray, text]);
              // console.log(todoArray)
              Items();
            }}
          >
            +
          </button>
        </div>
        {/* No-6: tosoArray jo ki hamara parent hai usko as a props TodoItem me pass kar rahe hai */}

        <TodoItem todoArray={todoArray} getId={getId} removeId={removeId} />

        <TodoComplete todoArray={todoArray} />
      </div>
    </>
  );
};
