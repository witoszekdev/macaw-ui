import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import useStyles from "./styles";
import { Pagination, PaginationProps } from "./Pagination";

export interface TablePaginationProps extends PaginationProps {
  colSpan: number;
}

export const TablePagination: React.FC<TablePaginationProps> = ({
  colSpan,
  ...paginationProps
}) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell className={classes.tableCell} colSpan={colSpan}>
        <Pagination {...paginationProps} />
      </TableCell>
    </TableRow>
  );
};
TablePagination.displayName = "TablePagination";
