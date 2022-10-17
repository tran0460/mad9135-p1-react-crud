import React from "react";

const ListView = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.genre}</p>
            <p>{item.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
