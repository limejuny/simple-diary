import {useEffect, useState} from "react";

const Unmount = () => {
  useEffect(() => {
    console.log("Mount");
    return () => {
      console.log("Unmount");
    }
  }, [])

  return (
    <div>
      Unmount Testing Component
    </div>
  )
}

const LifeCycle = () => {
  const [isVisiable, setIsVisiable] = useState(false);
  const toggle = () => setIsVisiable(!isVisiable);

  return (
    <div style={{padding: 20}}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisiable && <Unmount />}
    </div>
  )
}

export default LifeCycle;
