
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
      <div className="cyber-container py-20 text-center">
        <div className="inline-block mb-8 p-6 rounded-full bg-cyber-green/10">
          <AlertTriangle size={64} className="text-cyber-green" />
        </div>
        
        <h1 className="font-tech text-6xl font-bold text-white mb-4">
          4<span className="text-glow animate-pulse-glow">0</span>4
        </h1>
        
        <h2 className="text-2xl font-medium text-white mb-6">Access Denied</h2>
        
        <p className="text-gray-400 max-w-md mx-auto mb-10">
          The resource you are trying to access does not exist or you don't have sufficient permissions.
        </p>
        
        <div className="inline-block">
          <Link to="/" className="btn-cyber flex items-center">
            <Home size={18} className="mr-2" />
            <span>Return to Home</span>
          </Link>
        </div>
        
        <div className="mt-12">
          <div className="inline-block p-4 bg-cyber-darker/60 rounded-md border border-cyber-green/20">
            <code className="text-cyber-green text-sm">
              <span className="text-gray-400">{'>'}</span> ERROR: Path not found in secure environment
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
