import React from "react";

class Table extends React.Component{
    render(){
        return (
            <table width="30%" class="table">
            <tr>
                <th>Nama</th>
                <th>Nomor Telepon</th>
                <th>Umur(tahun)</th>          
            </tr>
            <tr>
                <td>Retno Wati</td>
                <td>082314449263</td>
                <td>23</td>
            </tr>
            <tr>
                <td>Kamu</td>
                <td>08231554678</td>
                <td>24</td>
            </tr>
    </table>
        );
    }
}

export default Table;