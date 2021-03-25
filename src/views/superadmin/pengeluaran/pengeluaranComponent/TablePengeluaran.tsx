import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  lighten,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { toRupiah } from '../../../../utils/utils';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

interface Data {
  kode: string;
  driver_name: string;
  total_pengeluaran: number;
  saldo_saat_ini: number;
  saldo_minimum: number;
  top_up: number;
  max_waktu_respon: string;
  max_waktu_transfer: string;
  max_waktu_scan: string;
  saldo_awal: number;
  limit_perbulan: number;
  siklus_tanggal: string;
}
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
  size?: string;
}
function createData(
  kode: string,
  driver_name: string,
  total_pengeluaran: number,
  saldo_saat_ini: number,
  saldo_minimum: number,
  top_up: number,
  max_waktu_respon: string,
  max_waktu_transfer: string,
  max_waktu_scan: string,
  saldo_awal: number,
  limit_perbulan: number,
  siklus_tanggal: string
): Data {
  return {
    kode,
    driver_name,
    total_pengeluaran,
    saldo_saat_ini,
    saldo_minimum,
    top_up,
    max_waktu_respon,
    max_waktu_transfer,
    max_waktu_scan,
    saldo_awal,
    limit_perbulan,
    siklus_tanggal,
  };
}
interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
const rows = [
  createData(
    'D1233',
    'Dimas Danang',
    1400000,
    2400000,
    2400000,
    2400000,
    '3jam',
    '3jam',
    '3jam',
    2400000,
    2400000,
    '24 July 1997'
  ),
  createData(
    'D1234',
    'Agus Danang',
    1400000,
    2400000,
    2400000,
    2400000,
    '3jam',
    '3jam',
    '3jam',
    2400000,
    2400000,
    '24 July 1997'
  ),
  createData(
    'D1235',
    'Budi Danang',
    1400000,
    2400000,
    2400000,
    2400000,
    '3jam',
    '3jam',
    '3jam',
    2400000,
    2400000,
    '24 July 1997'
  ),
  createData(
    'D1236',
    'Chandra Danang',
    1400000,
    2400000,
    2400000,
    2400000,
    '3jam',
    '3jam',
    '3jam',
    2400000,
    2400000,
    '24 July 1997'
  ),
  createData(
    'D1237',
    'Epul Danang',
    1400000,
    2400000,
    2400000,
    2400000,
    '3jam',
    '3jam',
    '3jam',
    2400000,
    2400000,
    '24 July 1997'
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells: HeadCell[] = [
  {
    id: 'kode',
    numeric: false,
    disablePadding: true,
    label: 'Kode',
    size: 'medium',
  },
  {
    id: 'driver_name',
    numeric: false,
    disablePadding: false,
    label: 'Nama Driver',
  },
  {
    id: 'total_pengeluaran',
    numeric: false,
    disablePadding: false,
    label: 'Total Pengeluaran',
  },
  {
    id: 'saldo_saat_ini',
    numeric: false,
    disablePadding: false,
    label: 'Saldo Saat ini',
  },
  {
    id: 'saldo_minimum',
    numeric: false,
    disablePadding: false,
    label: 'Saldo Minimum',
  },
  { id: 'top_up', numeric: false, disablePadding: false, label: 'Top Up' },
  {
    id: 'max_waktu_respon',
    numeric: false,
    disablePadding: false,
    label: 'Max Wkt Respon',
  },
  {
    id: 'max_waktu_transfer',
    numeric: false,
    disablePadding: false,
    label: 'Max Wkt Transfer',
  },
  {
    id: 'max_waktu_scan',
    numeric: false,
    disablePadding: false,
    label: 'Max Wkt Scan',
  },
  {
    id: 'saldo_awal',
    numeric: false,
    disablePadding: false,
    label: 'Saldo Awal',
  },
  {
    id: 'limit_perbulan',
    numeric: false,
    disablePadding: false,
    label: 'Limit Perbulan',
  },
  {
    id: 'siklus_tanggal',
    numeric: false,
    disablePadding: false,
    label: 'Siklus Tgl',
  },
];

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property: keyof Data) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  // const handleDelete = () => {
  //   console.log('deleted');
  // };
  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  })
);

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant='h6'
          id='tableTitle'
          component='div'
        ></Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton aria-label='delete'>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title='Filter list'>
          <IconButton aria-label='filter list'>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  })
);

export default function EnhancedTable() {
  const history = useHistory();
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('kode');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.kode);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, kode: string) => {
    const selectedIndex = selected.indexOf(kode);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, kode);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (kode: string) => selected.indexOf(kode) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className='mx-5'>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby='tableTitle'
              size={dense ? 'small' : 'medium'}
              aria-label='enhanced table'
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.kode);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.kode)}
                        role='checkbox'
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.kode}
                        selected={isItemSelected}
                      >
                        <TableCell padding='checkbox'>
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>
                        <TableCell
                          component='th'
                          id={labelId}
                          scope='row'
                          padding='none'
                        >
                          {row.kode}
                        </TableCell>
                        <TableCell
                          align='right'
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            history.push("/superadmin/pengeluaran/test");
                          }}
                        >
                          {row.driver_name}
                        </TableCell>
                        <TableCell align='right' style={{ color: '#FD8C8C' }}>
                          {toRupiah(row.total_pengeluaran)}
                        </TableCell>
                        <TableCell align='right' style={{ color: '#59D185' }}>
                          {toRupiah(row.saldo_saat_ini)}
                        </TableCell>
                        <TableCell align='right' style={{ color: '#FFAD57' }}>
                          {toRupiah(row.saldo_minimum)}
                        </TableCell>
                        <TableCell align='right' style={{ color: '#2D9CDB' }}>
                          {toRupiah(row.top_up)}
                        </TableCell>
                        <TableCell align='right'>
                          {row.max_waktu_respon}
                        </TableCell>
                        <TableCell align='right'>
                          {row.max_waktu_transfer}
                        </TableCell>
                        <TableCell align='right'>
                          {row.max_waktu_scan}
                        </TableCell>
                        <TableCell align='right'>
                          {toRupiah(row.saldo_awal)}
                        </TableCell>
                        <TableCell align='right'>
                          {toRupiah(row.limit_perbulan)}
                        </TableCell>
                        <TableCell align='right'>
                          {moment(row.siklus_tanggal).format('D')}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 43 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label='Dense padding'
        />
      </div>
    </div>
  );
}
