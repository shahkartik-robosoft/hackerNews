import * as React from "react";
import Text from "./Text";

const TextCosmos = () => {
  return (
    <div style={{ padding: 20 }}>
      <Text textLabel="new" className="text" />
      <Text textLabel="past" className="text" />
      <Text textLabel="ask" className="text" />
      <Text textLabel="German court bans Tesla ad statements related to autonomous driving" className="text" />
      <Text textLabel="Hacker Main" className="text text_header" />
      <Text textLabel="points by Kartik" className="text_subtitle" />
      <Text textLabel="1." className="text_subtitle list" />
    </div>
  );
};

export default TextCosmos;
