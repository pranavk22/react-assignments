import React, { useState } from "react";
import "./App.css";
import Switch from "./Switch";
import { ReactComponent as Calendar } from './calendar.svg'

const SwitchHook = ({ dateEnabled }) => {
  const [value, setValue] = useState(false);
  return (
    <div className="app">
        <Calendar />
      <Switch
        isOn={value}
        onColor="#00FFFF"
        handleToggle={() => {
          setValue(!value);
          dateEnabled(!value);
        }}
      />
    </div>
  );
};

export default SwitchHook;
