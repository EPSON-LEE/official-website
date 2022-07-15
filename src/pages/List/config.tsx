import { message, Popconfirm, Tag } from 'antd';

const getColumns = (goToContent, code) => {
  const columns = [
    {
      title: '序号',
      width: 120,
      dataIndex: 'id',
      search: false,
      belong: 'dynamic'
    },
    {
      title: '头像',
      width: 120,
      dataIndex: 'profileImgLink',
      belong: 'researcher',
      search: false,
      render: (record) => {
        return (
          <img src={record?.profileImgLink || 'http://82.156.213.198/medias/52542da4.png'} style={{ width: '100px', height: '100px' }} />
        )
      }
    },
    {
      title: '标题',
      width: 120,
      dataIndex: 'title',
      belong: 'dynamic'
    },
    {
      title: '姓名',
      width: 120,
      dataIndex: 'name',
      belong: 'researcher',
    },
    {
      title: '操作',
      width: 120,
      belong: 'all',
      search: false,
      render: (record) => {
        return (
          <>
            <a href="" onClick={() => {
              goToContent(record?.id)
            }}>查看</a>
          </>
        )
      }
    }
  ];
  return code === 'KYRY' ?
    columns.filter(item => item.belong === 'researcher' || item.belong === 'all') :
    columns.filter(item => item.belong === 'dynamic' || item.belong === 'all')
}

export {
  getColumns
};