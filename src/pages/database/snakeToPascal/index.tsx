import { Button, Form, Input, Space } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";

const SnakeToPascal: React.FC<{}> = () => {
  const [src, setSrc] = useState("");
  const [dest, setDest] = useState("");

  const replaceForDbDiagram = (value: string) => {
    const foreign =
      "foreign\\s+key\\s*" +
      "\\((?<col1>[^)]+)\\)" +
      "\\s+references\\s+(?<tbl>\\w+)\\s*" +
      "\\((?<col2>[^)]+)\\)";
    const rForeign = new RegExp(foreign, "g");

    return value
      .replace(/\btimestamptz\b/g, "timestamp with time zone")
      .replace(/ is /g, " IS ")
      .replace(rForeign, (match, col1, tbl, col2) => {
        const col1s = col1.split(",");
        const col2s = col2.split(",");
        return `foreign key (${col1s[0]}) references ${tbl} (${col2s[0]})`;
      });
  };

  const convertOnClick = () => {
    const value = replaceForDbDiagram(src);
    setDest(value);
  };

  return (
    <>
      <Space direction="vertical">
        <div></div>
        <Input.TextArea
          value={src}
          onChange={(e) => setSrc(e.target.value)}
          style={{ width: "100%", height: "200px" }}
        />
        <Button onClick={convertOnClick}>Convert</Button>
        <Input.TextArea
          value={dest}
          onChange={(e) => setDest(e.target.value)}
          style={{ width: "100%", height: "200px" }}
        />
      </Space>
    </>
  );
};

export default SnakeToPascal;
