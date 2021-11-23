import React, { useState } from 'react'
import axios from 'axios'
import * as XLSX from 'xlsx'
import endpoints from '../endpoints'


const ImportSapForm = () => {

    const [file, setFile] = useState([])

    const handleFileUpload = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async e => {
            const sap = {}
            const data = e.target.result
            const readedData = XLSX.read(data, {type: 'binary'})
            for (const wsname of readedData.SheetNames) {
                const ws = readedData.Sheets[wsname]
                sap[wsname] = XLSX.utils.sheet_to_json(ws, {blankrows: false})
            }
            const res = await axios.post('http://localhost:3000/sap/import', sap)
            console.log(res.data)
        }
        reader.readAsBinaryString(file)
    }


    return (
        <div>
            <input
                type="file"
                accept=".xlsx"
                onChange={e => setFile(e.target.files[0])}
            />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    )
}

export default ImportSapForm