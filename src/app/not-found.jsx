import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 max-w-md">
       
        <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="text-red-500 w-10 h-10" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Friend Not Found</h2>
        
        <p className="text-gray-500 mb-8 leading-relaxed">
          The page or friend you're looking for doesn't exist or has been moved to another group.
        </p>

        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all active:scale-95"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
