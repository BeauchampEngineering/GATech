import React from 'react'
import axios from 'axios'
import * as XLSX from 'xlsx'
import FileSaver from 'file-saver'
import endpoints from '../endpoints'

const ExportSapButton = () => {

    const handleExportSap = async e => {
        e.preventDefault()
        const res = await axios.get(endpoints.EXPORT_SAP)
        const {users, assets, logs, userAssets} = res.data
        const usersWs = XLSX.utils.book_new()
        const assetsWs = XLSX.utils.book_new()
        const logsWs = XLSX.utils.book_new()
        const userAssetsWs = XLSX.utils.book_new()
        XLSX.utils.sheet_add_json(usersWs, users, {origin: 'A1'})
        XLSX.utils.sheet_add_json(assetsWs, assets, {origin: 'A1'})
        XLSX.utils.sheet_add_json(logsWs, logs, {origin: 'A1'})
        XLSX.utils.sheet_add_json(userAssetsWs, userAssets, {origin: 'A1'})
        const wb = {Sheets: {'users': usersWs, 'assets': assetsWs, 'logs': logsWs, 'userAssets': userAssetsWs}, 
            SheetNames: ['users', 'assets', 'logs', 'userAssets']}
        const excelBuffer = XLSX.write(wb, {type: 'array', cellStyles: true})
        const finalData = new Blob([excelBuffer])
        FileSaver.saveAs(finalData, 'data.xlsx')
    }

    return (
        <div>
            <button onClick={handleExportSap}>Export</button>
        </div>
    )
}

export default ExportSapButton