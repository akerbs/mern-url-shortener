import React, { useEffect, useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          {
            from: link,
          },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );

        history.push(`/detail/${data.link._id}`);
      } catch (e) {}
    }
  };

  const clickHandler = async () => {
    try {
      const data = await request(
        "/api/link/generate",
        "POST",
        {
          from: link,
        },
        {
          Authorization: `Bearer ${auth.token}`,
        }
      );

      history.push(`/detail/${data.link._id}`);
    } catch (e) {}
  };

  return (
    <div className="row">
      <div className="col s8 offset-s2 create-page" id="create-page">
        <input
          placeholder="Enter a link"
          id="link"
          type="text"
          // className="yellow-input"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          onKeyPress={pressHandler}
        />
        <label htmlFor="link">Enter a link</label>
      </div>
      <div className="col s8 offset-s2 ">
        <button className="btn blue-grey darken-2" onClick={clickHandler}>
          Enter
        </button>
      </div>
    </div>
  );
};
