import Cards from '../Cards/DataCard';
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { cardsDataMedium } from '../Data/Data';
import TableauReport from 'tableau-react';

const Medium = () => {
  const [csvData, setCsvData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Limit number of rows per page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = csvData.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    Papa.parse('/Micro.csv', {
      download: true,
      header: true,
      complete: (result) => {
        const filteredData = result.data.map((row) => {
          const { CUSTOMER_ID, CUSTOMER_LOCATION,	HOME_OWNER_INDICATOR,	CAR_OWNER_INDICATOR,	ENVIRONMENTAL_AFF_INDICATOR,	HUMANITARIAN_AFF_INDICATOR,	OF_INDICATOR,	RETIREES_INDICATOR,	FILCHI_INDICATOR,	 ...filteredRow } = row; 
          return filteredRow; 
        });

        setCsvData(filteredData); 
      },
    });
  }, []);
  
  return (
    <div className='flex flex-col dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-y-scroll overflow-hidden pr-4'>
      <div className='w-full h-fit pb-4'>
        <div className='w-full h-32'>
        <Cards data={cardsDataMedium} /> 
        </div> 
      </div>
      <div className='flex gap-12'>
        <div className='grid grid-cols-5 h-96 w-full gap-4'>
          <div className='bg-white drop-shadow-sm rounded-3xl w-full p-4 overflow-hidden col-span-3'>
            <TableauReport
              url={"https://public.tableau.com/views/MediumBPI/BPIPRODUCTSmedium?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"}
              options={{
                hideTabs: false,
                hideToolbar: false,
                height: 350,
                width: 700,
              }}
            />
          </div>
          <div className='bg-white drop-shadow-sm rounded-3xl p-4 overflow-hidden col-span-2'>
            <TableauReport
          url={"https://public.tableau.com/views/CreditCard_17314886936660/Sheet1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"}
          options={{
            hideTabs: false,
            hideToolbar: false,
            height: 350,
            width: 500,
          }}
        />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 h-fit gap-4 my-4'>
        <div className='bg-white drop-shadow-sm rounded-3xl p-4 overflow-hidden '>
        <TableauReport
              url={"https://public.tableau.com/views/FOR4_17314901677690/Sheet2?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"}
              options={{
                hideTabs: false,
                hideToolbar: false,
                height: 350,
                width: 800,
              }}
            />
        </div>
        <div className='bg-white drop-shadow-sm rounded-3xl p-4 overflow-x-auto'>
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
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastRow >= csvData.length}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded"
            >
              Next
            </button>
          </div>
        </div>
        
      </div>
      
    </div>  
  );
}

export default Medium