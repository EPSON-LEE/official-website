// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { getArticle, getResearcher } from '../../api/Content'
import useUrlState from '@ahooksjs/use-url-state';
import { Empty } from 'antd';

const Content: React.FC = () => {

  const queryParams = useUrlState({ code: '' })[0];
  const [content, setContent] = useState('')
  const { id, code } = queryParams;

  useEffect(() => {
    id && getArticleContent(id)
  }, [id])

  const getArticleContent = async (ID) => {
    const APIGet = code === 'KYRY' ? getResearcher : getArticle
    const data = await APIGet(ID)
    setContent(data?.content || data?.detailInfo)
  }

  return (
    content ?
      <div dangerouslySetInnerHTML={{ __html: content }} /> :
      <Empty style={{ marginTop: '40px' }} description="暂无数据" />
  )

};

export default Content;
