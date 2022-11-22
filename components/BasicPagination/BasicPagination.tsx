import * as React from "react";
import Pagination from "@mui/material/Pagination";

type Props = {
  count: number;
  page?: number;
  className: string;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};
export default function BasicPagination({ count, ...props }: Props) {
  return <Pagination count={count} {...props} />;
}
