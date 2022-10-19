import { Container, TextField, Button, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDataContext } from "../../Context";

const Form = (props) => {
  const {
    closeRequest = () => {},
    nameValue = "",
    genreValue = "",
    dateValue = "",
    descriptionValue = "",
    id,
  } = props;
  const { uploadItem, updateItem } = useDataContext();
  const [nameInput, setNameInput] = useState(nameValue);
  const [genreInput, setGenreInput] = useState(genreValue);
  const [dateInput, setDateInput] = useState(dateValue);
  const [descriptionInput, setDescriptionInput] = useState(descriptionValue);
  const resetForm = () => {
    setNameInput("");
    setGenreInput("");
    setDateInput("");
    setDescriptionInput("");
  };
  return (
    <Container
      sx={{
        py: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "fit-content",
      }}>
      {!id && (
        <Typography
          variant="h4"
          sx={{
            mb: "1rem",
            alignSelf: "center",
          }}>
          Create a new game
        </Typography>
      )}
      <TextField
        required
        id="outlined-required"
        label="Game name"
        defaultValue={nameInput}
        value={nameInput}
        onChange={(ev) => setNameInput(ev.target.value)}
        sx={{
          minWidth: "50%",
          mb: "1rem",
        }}
      />
      <TextField
        required
        id="outlined-required"
        label="Game genre"
        defaultValue={genreInput}
        value={genreInput}
        onChange={(ev) => setGenreInput(ev.target.value)}
        sx={{
          minWidth: "50%",
          mb: "1rem",
        }}
      />
      <TextField
        required
        id="outlined-required"
        label="Release year"
        defaultValue={dateInput}
        value={dateInput}
        onChange={(ev) => setDateInput(ev.target.value)}
        sx={{
          minWidth: "50%",
          mb: "1rem",
        }}
      />
      <TextField
        multiline
        id="outlined-multiline-static"
        label="Game description"
        defaultValue={descriptionInput}
        onChange={(ev) => setDescriptionInput(ev.target.value)}
        sx={{
          width: {
            xs: "100%",
            md: "70%",
          },
          minWidth: {
            xs: "100%",
            md: "30rem",
            lg: "50rem",
          },
          mb: "1rem",
        }}
        minRows={3}
      />
      <Box
        sx={{
          alignSelf: "flex-end",
        }}>
        {id && (
          <Button
            color="error"
            variant="text"
            onClick={() => {
              closeRequest();
            }}>
            Cancel
          </Button>
        )}
        <Button
          variant="contained"
          sx={{ ml: "1rem" }}
          onClick={() => {
            if (!id) {
              uploadItem({
                nameInput,
                genreInput,
                dateInput,
                descriptionInput,
              });
              resetForm();
              return;
            }
            updateItem({
              nameInput,
              genreInput,
              dateInput,
              descriptionInput,
              id,
            });
            resetForm();
            closeRequest();
          }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Form;
