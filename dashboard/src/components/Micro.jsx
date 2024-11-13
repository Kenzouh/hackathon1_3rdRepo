import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Cards from '../Cards/DataCard';
import { cardsDataMicro } from '../Data/Data';

const Micro = () => {
  const [csvData, setCsvData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Limit number of rows per page

  useEffect(() => {
    Papa.parse('/Micro.csv', {
      download: true,
      header: true,
      complete: (result) => {
        setCsvData(result.data); // Store parsed data as JSON
      },
    });
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = csvData.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='flex flex-col dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-y-scroll overflow-hidden pr-4'>
      <div className='w-full h-fit pb-4'>
        <div className='w-full h-32'>
          <Cards data={cardsDataMicro} /> 
        </div> 
      </div>
      <div className='flex gap-12'>
        <div className='flex h-96 w-full gap-4'>
          <div className='bg-white drop-shadow-sm rounded-3xl w-full p-4'>
            products all
          </div>
          <div className='bg-white drop-shadow-sm rounded-3xl w-1/2 p-4'>
            cc radial
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 h-fit gap-4 my-4'>
        <div className='bg-white drop-shadow-sm rounded-3xl p-4'>
          Loan
        </div>
        <div className='bg-white drop-shadow-sm rounded-3xl p-4'>
          {/* Display the CSV Data as a Table */}
          <table className="min-w-full bg-white text-gray-800 text-sm">
            <thead>
              <tr>
                {csvData.length > 0 &&
                  Object.keys(csvData[0]).map((key) => (
                    <th key={key} className="p-2 border-b">{key}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx} className="p-2 border-b">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination Controls */}
          <div className="mt-4 flex justify-center gap-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastRow >= csvData.length}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Micro;
