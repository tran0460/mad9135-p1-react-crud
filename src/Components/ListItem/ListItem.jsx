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
  const { removeItem } = useDataContext();
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
    <Card sx={{ width: "fit-content", minWidth: "20rem", m: "1rem" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.date}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            setEditMode(true);
          }}
          size="small">
          Edit
        </Button>
        <Button
          onClick={() => {
            removeItem(item.id);
          }}
          size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ListItem;
