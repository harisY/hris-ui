import React from "react";
import { Card, Table } from "antd";
import IntlMessages from "util/IntlMessages";

const columns = [
  {
    title: "NIK",
    dataIndex: "nik",
    width: 150,
  },
  {
    title: "NO Anggota",
    dataIndex: "noanggota",
    width: 150,
  },
  {
    title: "Nama",
    dataIndex: "nama",
    width: 150,
  },
  {
    title: "Department",
    dataIndex: "dept",
  },
];

const EmployeeTable = () => {
  return (
    <div>
      <h2 className="title gx-mb-4">
        <IntlMessages id="sidebar.employeePage" />
      </h2>
      <Card title="Employee">
        <Table
          className="gx-table-responsive"
          columns={columns}
          // dataSource={data}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
      </Card>
    </div>
  );
};

export default EmployeeTable;
