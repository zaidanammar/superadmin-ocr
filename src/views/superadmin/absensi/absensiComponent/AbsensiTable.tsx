import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { Toolbar } from '@material-ui/core';

interface Data {
    id: number;
    title: string;
    author: Author;
    description: string;
    publishedAt: Date
    calories: number;
    carbs: number;
    fat: number;
    protein: number;
    category: Categori;
}

interface Categori {
    name?: string | null;
}

interface Author {
    name: string;
}


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
    orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
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

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#F8F8F8",
        color: "#757682",
        border: 'none'
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data | any;
    label: string;
    numeric: boolean;
}

const headCells: HeadCell[] = [
    { id: 'id', numeric: false, disablePadding: false, label: 'Kode' },
    { id: 'name', numeric: false, disablePadding: true, label: 'Nama Driver' },
    { id: 'slug', numeric: true, disablePadding: false, label: 'Jam Siap' },
    { id: 'slug', numeric: true, disablePadding: false, label: 'Jam Masuk' },
    { id: 'slug', numeric: true, disablePadding: false, label: 'Jam Pulang' },
    { id: 'created_at', numeric: true, disablePadding: false, label: 'Siklus Tanggal' },
];

interface EnhancedTableProps {
    classes: ReturnType<typeof useStyles>;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    order: Order;
    orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
               
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'center'}
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
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            width: '100%',
            padding: '3%'
        },
        table: {
            minWidth: 750,
        },
        searchInput: {
            width: '75%',
            padding: '0.5%',
            margin: '1% 10% 3% 0%',
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
    }),
);

export default function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('id');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [dummy, setDummy] = useState<any>([])
    // const [filterFn, SetFilterFn] = useState({ fn: items => { return items } })

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch('http://blog-icanq.herokuapp.com/categories')
            .then(res => res.json())
            .then(json => setDummy(json))
    }
    console.log(dummy)

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // const handleSearch = (e) => {
    //     let target = e.target

    //     SetFilterFn({
    //         fn: items => {

    //             if (target.value === "") {
    //                 return items
    //             } else {
    //                 return items.filter(el => (
    //                     el.id.toString().includes(target.value.toLowerCase()) || el.name.toLowerCase().includes(target.value.toLowerCase())
    //                 ))
    //             }
    //         }
    //     })
    // }

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, dummy.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            {/* <Paper className={classes.paper}> */}
            <Toolbar>
                <input placeholder="Cari kode driver atau nama driver" className={classes.searchInput}></input>
                <button className="flex items-center bg-biru rounded py-1 px-5 -mt-5 text-white text-base">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.83398 8.3335L10.0007 12.5002L14.1673 8.3335" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 12.5V2.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h1 className="ml-3">Donwload</h1>
                </button>
            </Toolbar>
            <TableContainer>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size='medium'
                    aria-label="enhanced table"
                >
                    <EnhancedTableHead
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}

                    />
                    <TableBody>
                        {stableSort(dummy, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;
                            
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                    >
                                        
                                        <StyledTableCell  align="center" component="th" id={labelId} scope="row">
                                            {row.id}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.name}</StyledTableCell>
                                        <StyledTableCell align="right">{row.slug}</StyledTableCell>
                                        <StyledTableCell align="right" style={{color: '#F8B551'}}>{row.slug}</StyledTableCell>
                                        <StyledTableCell align="right" style={{color: "#59D185"}}>{row.slug}</StyledTableCell>
                                        <StyledTableCell align="right">{row.created_at.slice(0, 10)}</StyledTableCell>
                                    </TableRow>
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <StyledTableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={dummy.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            {/* </Paper> */}
        </div>
    );
}
