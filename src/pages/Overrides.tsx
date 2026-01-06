import React, { useState } from 'react'
import { Key, AlertTriangle, UserCheck, History } from 'lucide-react'
import PermissionOverrides from '@/components/overrides/PermissionOverrides'
import EmergencyAccess from '@/components/overrides/EmergencyAccess'
import OverrideAudit from '@/components/overrides/OverrideAudit'

const Overrides: React.FC = () => {
  const [activeTab, setActiveTab] = useState('permissions')

  const tabs = [
    { id: 'permissions', name: 'Permission Overrides', icon: Key },
    { id: 'emergency', name: 'Emergency Access', icon: AlertTriangle },
    { id: 'approvals', name: 'Pending Approvals', icon: UserCheck },
    { id: 'history', name: 'Override History', icon: History },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">System Overrides</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage permission overrides, emergency access, and review override history
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            New Override
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            View Guidelines
          </button>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <AlertTriangle className="h-5 w-5 text-yellow-400" />
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Warning:</strong> Overrides bypass standard security controls. All actions are logged and require justification.
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-2 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <tab.icon className="inline-block w-4 h-4 mr-2" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'permissions' && <PermissionOverrides />}
        {activeTab === 'emergency' && <EmergencyAccess />}
        {activeTab === 'history' && <OverrideAudit />}
        {activeTab === 'approvals' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Pending Approvals</h2>
            <div className="text-center py-8 text-gray-500">
              <UserCheck className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No pending approvals</h3>
              <p className="mt-1 text-sm text-gray-500">All override requests have been processed.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Overrides
