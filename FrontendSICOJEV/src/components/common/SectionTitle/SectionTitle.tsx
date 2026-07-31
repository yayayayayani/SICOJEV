import { Typography } from "@mui/material";

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <Typography
      variant="h5"
      sx={{
        fontWeight: "bold",
        mb: 2,
      }}
    >
      {title}
    </Typography>
  );
}
