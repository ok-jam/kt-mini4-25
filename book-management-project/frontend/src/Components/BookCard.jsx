import { Card, CardContent, Typography } from "@mui/material";

const BookCard = ({ book }) => {
  return (
    <Card sx={{ minWidth: 200, margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="body2">{book.createdAt}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
