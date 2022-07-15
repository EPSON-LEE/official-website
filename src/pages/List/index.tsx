import { DownOutlined, EllipsisOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Tag, Tooltip, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import type { ActionType } from '@ant-design/pro-components';
import { getColumns } from './config';
// import { getArticle, ListOnArticle, TakeDownArticle, DelArticle, getMenuDict } from '../../api/content'
import { getArticleList, getResearcherList } from '../../api/Content'
import useUrlState from '@ahooksjs/use-url-state';


export default () => {
  console.log('团队管理页面');

  const queryParams = useUrlState({ code: '' })[0];
  const { code } = queryParams;

  const navigate = useNavigate();
  const [mapping, setMapping] = useState()
  const actionRef = useRef<ActionType>();


  useEffect(() => {
    code && actionRef.current.reload();
  }, [code])

  const goToContent = (id) => {
    navigate(`/content?id=${id}&code=${code}`)
  }


  return (
    <ProTable
      actionRef={actionRef}
      cardBordered
      // @ts-ignore ts-message: Property 'columns' is missing in type '{}' but required in type 'ProTableProps<TableListItem>'.
      columns={getColumns(goToContent, code)}
      request={async (params, sorter, filter) => {
        debugger
        const { current, pageSize, part } = params;
        const GetListApi = code === 'KYRY' ? getResearcherList : getArticleList
        const payload = code === 'KYRY' ? {
          ...params,
        } :
          {
            ...params,
            part: [code],
            status: 1,
          }
        const data = await GetListApi(payload);
        // @ts-ignore ts-message: Property 'data' is missing in type '{}' but required in type 'ProTableProps<TableListItem>'.
        const { count, object } = data
        return Promise.resolve({
          data: object,
          total: count,
          success: true,
        });
      }}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
      }}
      dateFormatter="string"
      headerTitle="内容发布"
      options={false}
    />
  );
};