import { CopyToClipboard } from "react-copy-to-clipboard";
import Head from "next/head";
import { ChromePicker } from "react-color";
import styles from "../styles/Home.module.css";
import Controller from "../hooks/useControllerforInputs";
import React from "react";
export default function Home() {
  var [r, ser, handleR, resetR] = Controller("");
  var [g, seg, handleG, resetG] = Controller("");
  var [b, seb, handleB, resetB] = Controller("");
  var final = (evt) => {
    evt.preventDefault();
    SetRes(`rgb(${r},${g},${b})`);
  };
  var [res, SetRes] = React.useState("rgb(255,255,255)");
  var pickerite = (color) => {
    ser(color.rgb.r);
    seg(color.rgb.g);
    seb(color.rgb.b);
    SetRes(`rgb(${color.rgb.r},${color.rgb.g},${color.rgb.b})`);
  };
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <main className={styles.main}>

        <form action="" onSubmit={final}>
          <ChromePicker color={res} onChangeComplete={pickerite} />
          <div className="inputs">

          <input value={r} className="form-control my-2" onChange={handleR} />
          <input value={g} className="form-control  my-2" onChange={handleG} />
          <input value={b} className="form-control my-2" onChange={handleB} />
          <button type="submit" name="" id="" className="btn btn-primary">
            Preview
          </button>
          <CopyToClipboard text={res}>
            <button type="button" className="btn btn-primary mx-2">Copy</button>
          </CopyToClipboard>
          </div>
        </form>
      </main>
    </div>
  );
}
