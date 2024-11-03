import React, { useState } from 'react';
import { ArrowUpCircle, ArrowDownCircle, Clock, Filter, Download } from 'lucide-react';
import { TransactionList } from './components/TransactionList';
import { Stats } from './components/Stats';
import { FilterPanel } from './components/FilterPanel';

export type Transaction = {
  id: string;
  type: 'refund' | 'settlement';
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  customer: string;
  date: string;
  reference: string;
};

const DEMO_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    type: 'refund',
    amount: 299.99,
    status: 'completed',
    customer: 'Sarah Johnson',
    date: '2024-03-15T10:30:00',
    reference: 'REF-2024-001'
  },
  {
    id: '2',
    type: 'settlement',
    amount: 1250.00,
    status: 'pending',
    customer: 'Tech Solutions Inc.',
    date: '2024-03-15T09:45:00',
    reference: 'SET-2024-123'
  },
  {
    id: '3',
    type: 'refund',
    amount: 49.99,
    status: 'failed',
    customer: 'Michael Brown',
    date: '2024-03-14T16:20:00',
    reference: 'REF-2024-002'
  }
];

function App() {
  const [transactions] = useState<Transaction[]>(DEMO_TRANSACTIONS);
  const [showFilters, setShowFilters] = useState(false);

  const stats = {
    totalRefunds: transactions.filter(t => t.type === 'refund').reduce((sum, t) => sum + t.amount, 0),
    totalSettlements: transactions.filter(t => t.type === 'settlement').reduce((sum, t) => sum + t.amount, 0),
    pendingCount: transactions.filter(t => t.status === 'pending').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <ArrowUpCircle className="h-6 w-6" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Refunds & Settlements</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
              <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <Stats stats={stats} />
        
        <div className="mt-8 bg-white rounded-lg shadow">
          {showFilters && <FilterPanel />}
          <TransactionList transactions={transactions} />
        </div>
      </main>
    </div>
  );
}

export default App;