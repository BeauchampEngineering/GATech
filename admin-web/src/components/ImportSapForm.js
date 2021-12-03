import React, { useState } from 'react'
import axios from 'axios'
import * as XLSX from 'xlsx'
import endpoints from '../endpoints'

const ImportSapForm = () => {
  const [file, setFile] = useState([])

  const handleFileUpload = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => {
      const sap = {}
      const data = e.target.result
      const readedData = XLSX.read(data, { type: 'binary', sheetStubs: true })

      for (const wsname of readedData.SheetNames) {
        const ws = readedData.Sheets[wsname]
        sap[wsname] = XLSX.utils.sheet_to_json(ws)
      }
      await axios.post(endpoints.IMPORT_SAP, sap)
    }
    reader.readAsBinaryString(file)
  }

  return (
    <div>
      <h4>Import/Export SAP</h4>
      <input
        type='file'
        accept='.xlsx'
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  )
}

export default ImportSapForm
