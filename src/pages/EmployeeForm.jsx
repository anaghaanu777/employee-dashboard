
import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Alert,
} from "@mui/material";

export default function EmployeeForm() {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Form submitted successfully (demo only).");
    setForm({
      name: "",
      designation: "",
      location: "",
      salary: "",
    });
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Employee Form
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Enter employee details below.
        </Typography>

        {message && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {message}
          </Alert>
        )}

        <Stack
          component="form"
          spacing={2}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Designation"
            name="designation"
            value={form.designation}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Location"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Salary"
            name="salary"
            type="number"
            value={form.salary}
            onChange={handleChange}
            required
            slotProps={{ htmlInput: { min: 0 } }}
            fullWidth
          />

          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
