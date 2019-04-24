import React from 'react';
import '../App.css';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = [
            {
                name: '1',
                wynik: '',
            },
            {
                name: '2',
                wynik: '',
            },
            {
                name: '3',
                wynik: '',
            },
            {
                name: '4',
                wynik: '',
            },
            {
                name: '5',
                wynik: '',
            },
            {
                name: '6',
                wynik: '',
            },
            {
                name: 'Bonus',
                wynik: '',
            },
            {
                name: 'Para',
                wynik: '',
            },
            {
                name: 'Dwie pary',
                wynik: '',
            },
            {
                name: 'Trójka',
                wynik: '',
            },
            {
                name: 'Full',
                wynik: '',
            },
            {
                name: 'Mały strit',
                wynik: '',
            },
            {
                name: 'Duży strit',
                wynik: '',
            },
            {
                name: 'Kareta',
                wynik: '',
            },
            {
                name: 'Generał',
                wynik: '',
            },
            {
                name: 'Szansa',
                wynik: '',
            },
            {
                name: 'Suma',
                wynik: '',
            },
            
        ]
        let columns = [{Header: '', accessor: 'name'}, {Header: 'Gracz1', accessor: 'wynik'}, {Header: 'Gracz2', accessor: 'wynik'}]
        return (
            <ReactTable data = {data} columns = {columns} showPagination = {false} defaultPageSize = {17}/>
        )
    }
}

export default Table;