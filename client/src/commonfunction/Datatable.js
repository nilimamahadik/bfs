
import { Box, Pagination } from "@mui/material";
import { useState } from "react";
import {
  DataGrid,
  GridToolbar,
  useGridApiContext,
  useGridSelector,
  gridPageCountSelector,
} from "@mui/x-data-grid";

function CustomPagination() {
  const apiContext = useGridApiContext();
  const pageCount = useGridSelector(apiContext, gridPageCountSelector);
  const [page, setPage] = useState(1);

  const handlePageChange = (_, newPage) => {
    setPage(newPage);
    apiContext.current.setPage(newPage - 1);
  };


  return (
    <Pagination
      count={pageCount}
      page={page}
      onChange={handlePageChange}
      color="primary"
    />
  );
}

// export const DataTable = ({ footer, rows, columns, rowHeight }) => {
//   const [paginationModel, setPaginationModel] = useState({
//     page: 0,
//     pageSize: 50,
//   });

//   const commonTableStyles = () => ({
//     "& .MuiDataGrid-virtualScroller": {
//       backgroundColor: "white",
//       overflow: "auto",

//     },
//     "& .MuiDataGrid-columnHeader": {
//       backgroundColor: "#f7faf9",
//     },
//     "& .MuiDataGrid-footerContainer": {
//       backgroundColor: "#f7faf9",
//       minHeight: "35px",
//       maxHeight: "35px", // ✅ Control max height
//       padding: "5px 10px", // ✅ Add padding for consistency


//     },
    // "& .MuiDataGrid-columnHeaderTitle": {
    //   fontWeight: "bold",
    //   fontSize: "15px",
    // },
//     "& .MuiDataGrid-root": {
//       overflowX: "auto",
//     },
//   });


//   return (
//     <Box sx={commonTableStyles()}>
//       {/* <DataGrid
//         rows={rows}
//         columns={columns}
//         getRowHeight={() => "auto"}
//         paginationModel={paginationModel}
//         initialState={{ pinnedColumns: { left: ['id'], right: ['actions'] } }}
//         onPaginationModelChange={setPaginationModel} // ✅ Fix pagination control
//         pageSizeOptions={[25, 50, 100]}
//         slots={{
//           toolbar: !footer && GridToolbar,
//           pagination: CustomPagination, // ✅ Connect custom pagination
//         }}
//         components={{
//           NoRowsOverlay: () => <div style={{ padding: 20 }}>Data not found</div>,
//         }}
//       /> */}
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         getRowHeight={() => "auto"}
//         paginationModel={paginationModel}
//         initialState={{ pinnedColumns: { left: ['id'], right: ['actions'] } }}
//         onPaginationModelChange={setPaginationModel}
//         pageSizeOptions={[25, 50, 100]}
//         slots={{
//           toolbar: !footer && GridToolbar,
//           pagination: CustomPagination,
//         }}
//         components={{
//           NoRowsOverlay: () => <div style={{ padding: 20 }}>Data not found</div>,
//         }}
//       />
//     </Box>

//   );
// };


export const DataTable = ({ footer, rows, columns, rowHeight }) => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });


  const commonTableStyles = () => ({
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: "white",
      overflow: "auto",
    },
    "& .MuiDataGrid-columnHeader": {
      backgroundColor: "#f7faf9",
      position: "sticky",
      top: 0,
      zIndex: 1,
    },
    "& .MuiDataGrid-cell:first-of-type, & .MuiDataGrid-cell:nth-of-type(2)": {
      position: "sticky",
      left: 0,
      zIndex: 2,
      backgroundColor: "white",
    },
    "& .MuiDataGrid-columnHeader:first-of-type, & .MuiDataGrid-columnHeader:nth-of-type(2)": {
      position: "sticky",
      left: 0,
      zIndex: 3,
      backgroundColor: "#f7faf9",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
      fontSize: "15px",
    },
  });
  return (
    <Box sx={{ ...commonTableStyles(), maxHeight: 900 }}> {/* Set fixed height */}
      <DataGrid
        rows={rows}
        columns={columns}
        getRowHeight={() => "auto"}
        paginationModel={paginationModel}
        initialState={{ pinnedColumns: { left: ['receipt_number'], right: ['Date'] } }}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[10, 20, 30]}
        slots={{
          toolbar: !footer && GridToolbar,
          pagination: CustomPagination,
        }}
        components={{
          NoRowsOverlay: () => <div style={{ padding: 20 }}>Data not found</div>,
        }}
      />
    </Box>
  );
};