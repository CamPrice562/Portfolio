
import React, { useState } from 'react';
import { FileDown, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(1);
  const [scale, setScale] = useState(1);
  
  // In a real implementation, you'd use a library like react-pdf
  // This is a simplified version for demonstration
  
  const handleDownload = () => {
    // In a real implementation, this would trigger the download
    // For now, open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handleZoomIn = () => {
    setScale(Math.min(scale + 0.1, 2));
  };
  
  const handleZoomOut = () => {
    setScale(Math.max(scale - 0.1, 0.5));
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="bg-cyber-darker p-4 rounded-t-lg border-b border-cyber-purple/20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="p-2 rounded-md hover:bg-cyber-purple/10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft size={20} className="text-cyber-purple" />
          </button>
          
          <span className="text-gray-300">
            Page {currentPage} of {numPages}
          </span>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === numPages}
            className="p-2 rounded-md hover:bg-cyber-purple/10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight size={20} className="text-cyber-purple" />
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-md hover:bg-cyber-purple/10"
            aria-label="Zoom out"
          >
            <ZoomOut size={20} className="text-cyber-purple" />
          </button>
          
          <span className="text-gray-300">{Math.round(scale * 100)}%</span>
          
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-md hover:bg-cyber-purple/10"
            aria-label="Zoom in"
          >
            <ZoomIn size={20} className="text-cyber-purple" />
          </button>
          
          <button
            onClick={handleDownload}
            className="btn-cyber"
            aria-label="Download resume"
          >
            <FileDown size={18} className="mr-2" />
            <span>Download</span>
          </button>
        </div>
      </div>
      
      <div className="flex-grow bg-gray-900 flex items-center justify-center overflow-auto p-4">
        <div 
          className="bg-white rounded shadow-lg transform transition-transform duration-200"
          style={{ transform: `scale(${scale})` }}
        >
          {/* In a real implementation, this would use react-pdf to render the PDF */}
          <div className="w-[612px] h-[792px] bg-white relative flex items-center justify-center">
            <iframe
              src={`${pdfUrl}#page=${currentPage}`}
              title="Resume PDF"
              className="w-full h-full"
              style={{ border: 'none' }}
            />
            {/* Fallback for when PDF preview is not available */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg font-medium">
              Resume Preview
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
