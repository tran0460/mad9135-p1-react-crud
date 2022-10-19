import React from "react";
import ListItem from "../ListItem/ListItem";
import { useDataContext } from "../../Context";
import { Container } from "@mui/material";

const ListView = (props) => {
  const { itemList } = useDataContext();
  return (
    <Container
      sx={{
        py: "1rem",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        width: "100%",
      }}>
      {itemList?.map((item) => {
        return <ListItem item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default ListView;
