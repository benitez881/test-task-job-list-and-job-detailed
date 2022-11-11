import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type Props = {
  count: number;
  page?: number;
  className: string;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};
export default function BasicPagination({ count, ...props }: Props) {
  return <Pagination count={count} {...props} />;
}
