import React from 'react';
import { ArrowUpCircle, ArrowDownCircle, Clock } from 'lucide-react';

interface StatsProps {
  stats: {
    totalRefunds: number;
    totalSettlements: number;
    pendingCount: number;
  };
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Refunds</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              ${stats.totalRefunds.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <ArrowDownCircle className="h-6 w-6 text-red-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Settlements</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              ${stats.totalSettlements.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <ArrowUpCircle className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Pending Transactions</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{stats.pendingCount}</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded-full">
            <Clock className="h-6 w-6 text-yellow-600" />
          </div>
        </div>
      </div>
    </div>
  );
}