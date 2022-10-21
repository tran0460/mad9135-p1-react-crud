import React from "react";
import ListItem from "../ListItem/ListItem";
import { useDataContext } from "../../Context";
import { Container, Typography } from "@mui/material";

const ListView = (props) => {
  const { itemList } = useDataContext();
  return (
    <Container
      sx={{
        py: "1rem",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}>
      {itemList.length > 0 ? (
        itemList?.map((item) => {
          return <ListItem item={item} key={item.id} id={item.id} />;
        })
      ) : (
        <>
          <Typography
            color={"grey.600"}
            variant="h4"
            sx={{
              mt: "2rem",
              width: "100%",
              textAlign: "center",
            }}>
            Your list is empty
          </Typography>
        </>
      )}
    </Container>
  );
};

export default ListView;
