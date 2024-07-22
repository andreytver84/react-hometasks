import { useState } from "react";
import "./HomeWork1.scss";

export const HomeWork1 = () => {
  const [stateBone, setStateBone] = useState("");
  const [classNameBone, setClassNameBone] = useState("");

  function getRandomArbitrary(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const clickHandler = () => {
    let num = getRandomArbitrary(1, 7);
    switch (num) {
      case 1:
        setClassNameBone("one");
        break;
      case 2:
        setClassNameBone("two");
        break;
      case 3:
        setClassNameBone("three");
        break;
      case 4:
        setClassNameBone("four");
        break;
      case 5:
        setClassNameBone("five");
        break;
      case 6:
        setClassNameBone("six");
        break;
      default:
        setClassNameBone("");
    }
    setStateBone("" + num);
  };

  return (
    <div>
      <h3>Решение домашнего задания №1</h3>
      {stateBone}
      <div className={`bone bone_${classNameBone}`}>
        <div className="topLeft"></div>
        <div className="topCenter"></div>
        <div className="topRight"></div>
        <div className="middleLeft"></div>
        <div className="middleCenter"></div>
        <div className="middleRight"></div>
        <div className="bottomLeft"></div>
        <div className="bottomCenter"></div>
        <div className="bottomRight"></div>
      </div>
      <button onClick={clickHandler} className="btn">
        Кидать кости
      </button>
    </div>
  );
};
