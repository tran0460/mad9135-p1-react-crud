import React, { useState } from "react";
import Form from "../Form/Form";
import { useDataContext } from "../../Context";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
const ListItem = (props) => {
  const { setCurrentItemId, setToggleDialog } = useDataContext();
  const { item } = props;
  const [editMode, setEditMode] = useState(false);
  if (editMode)
    return (
      <Form
        nameValue={item.name}
        genreValue={item.genre}
        dateValue={item.date}
        id={item.id}
        closeRequest={() => setEditMode(false)}
      />
    );
  return (
    <Card
      sx={{ width: "100%", m: "1rem" }}
      style={{ boxShadow: "0px 0px 12px rgba(77, 77, 77, 0.2)" }}>
      <CardContent>
        <Typography variant="h4" component="div">
          {item.name}
        </Typography>
        <Typography sx={{ mb: 0.5, fontSize: "1.4rem" }} color="text.secondary">
          {item.date}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: "1rem" }} color="text.secondary">
          Genre: {item.genre}
        </Typography>
        <Typography variant="body1">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={() => {
            setEditMode(true);
          }}
          size="small">
          Edit
        </Button>
        <Button
          onClick={() => {
            setToggleDialog(true);
            setCurrentItemId(item.id);
          }}
          size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ListItem;
