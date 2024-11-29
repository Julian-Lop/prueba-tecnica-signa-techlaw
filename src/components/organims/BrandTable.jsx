import React from 'react'

// * KaTable
import 'ka-table/style.css';
import { Table } from 'ka-table'
import { DataType } from 'ka-table/enums'

// * Components
import { StatusCell } from '../molecules/StatusCell';
import { EditCell } from '../molecules/EditCell';

export const BrandTable = ({ data, onEdit }) => {
  const columns = [
    {
      key: 'brand',
      title: 'Marca',
      dataType: DataType.String,
      style: {
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      width: 200
    },
    {
      key: 'owner',
      title: 'Titular',
      dataType: DataType.String,
      style: {
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      width: 200
    },
    {
      key: 'status',
      title: 'Estado',
      dataType: DataType.String,
      style: { textAlign: 'center' },
      width: 200
    },
    {
      key: 'edit',
      title: 'Acciones',
      style: { textAlign: 'center', width: 200 },
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-0 lg:p-4 overflow-x-auto max-h-[60vh] overflow-y-auto">
      {data && data.length && <Table
        columns={columns}
        data={data}
        rowKeyField={'id'}
        childComponents={{
          cellText: {
            content: (props) => {
              switch (props.column.key) {
                case 'status':
                  return <StatusCell {...props} />;
                case 'edit':
                  return <EditCell {...props} onEdit={onEdit} />;
                default:
                  return props.value;
              }
            },
          },
        }}
      />}
    </div>
  )
}
