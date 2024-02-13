import { useContext } from "react";
import { callContext } from "../../../context/callContext";

function TextChat(prop: any) {

  return (
    <div className="data">
    {prop.prop.data.map(
        (msg: any, index: number) => {
            {
                if (msg?.p1) {
                    const store = msg["p1"];
                    return (
                        <div
                            className="right-single-msg"
                            key={index}
                        >
                            <label
                                className="content"
                                htmlFor=""
                            >
                                {store}
                            </label>
                            <label
                                className="time"
                                htmlFor=""
                            >
                                12:00pm
                            </label>
                        </div>
                    );
                } else {
                    const store = msg["p2"];
                    return (
                        <div className="left-single-msg">
                            <div className="left-child">
                                <label
                                    className="content"
                                    htmlFor=""
                                >
                                    {store}
                                </label>
                                <label
                                    className="time"
                                    htmlFor=""
                                >
                                    12:00pm
                                </label>
                            </div>
                        </div>
                    );
                }
            }
        }
    )}
    </div>
  )
}

export default TextChat