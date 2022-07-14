import React from 'react';
import Home from '../pages/Home';

const RICH_TEXT = 1;
const LIST = 2;
const ORIGINAL = 3;

const flatten = (arr) => arr.reduce((prev, curr, index, list) => {
  if (Array.isArray(curr.children)) {
    return prev.concat(...flatten(curr.children));
  }
  return prev.concat({ ...curr });
}, []).map((item) => {
  const { label, key, meta, element } = item;
  return {
    key,
    meta,
    label,
    path: key,
    element: element || `${label}-${meta?.pageType}`,
    icon: 'home',
  };
});

const MENU_ITEMS = [
  {
    label: '首页',
    key: '/home',
    element: <Home />,
    meta: {
      pageType: ORIGINAL
    }
  },
  {
    label: '实 验 室 简 介',
    key: '/lab',
    meta: {
      pageType: RICH_TEXT
    }
  },
  {
    label: '新 闻 信 息',
    key: '/news',
    children: [
      {
        type: 'group',
        label: '',
        children: [
          {
            label: '综合新闻',
            key: '/news/info',
            meta: {
              pageType: LIST
            }
          },
          {
            label: '通知公告',
            key: '/news/notice',
            meta: {
              pageType: RICH_TEXT
            }
          },
        ],
      },
    ],
  },
  {
    label: '科 研 队 伍',
    key: 'researchers',
    children: [
      {
        type: 'group',
        label: '',
        children: [
          {
            label: '人才情况',
            key: '/researchers/talented_info',
            meta: {
              pageType: LIST
            }
          },
          {
            label: '教师动态',
            key: '/researchers/teacher_info',
            meta: {
              pageType: RICH_TEXT
            }
          },
        ],
      },
    ],
  },
  {
    label: '科 学 研 究',
    key: '/research',
    children: [
      {
        type: 'group',
        label: '',
        children: [
          {
            label: '研究方向',
            key: '/research/direction',
            meta: {
              pageType: RICH_TEXT
            }
          },
          {
            label: '研究成果',
            key: '/research/outcome',
            meta: {
              pageType: RICH_TEXT
            }
          },
          {
            label: '学术活动',
            key: '/research/academic_activity',
            meta: {
              pageType: RICH_TEXT
            }
          },
        ],
      },
    ],
  },
  {
    label: '实 验 室 管 理',
    key: '/lab_manage',
    children: [
      {
        type: 'group',
        label: '',
        children: [
          {
            label: '管理制度',
            key: '/lab_manage/system',
            meta: {
              pageType: RICH_TEXT
            }
          },
          {
            label: '实验室安全',
            key: '/lab_manage/security',
            meta: {
              pageType: RICH_TEXT
            }
          },
        ],
      },
    ],
  },
  {
    label: '研 究 合 作',
    key: '/research_cooperation',
    children: [
      {
        type: 'group',
        label: '',
        children: [
          {
            label: '项目合作',
            key: 'research_cooperation/project',
            meta: {
              pageType: RICH_TEXT
            }
          },
          {
            label: '联系我们',
            key: 'research_cooperation/contact',
            meta: {
              pageType: RICH_TEXT
            }
          }
        ]
      }
    ]
  }
];

const ROUTERS = flatten(MENU_ITEMS);

console.log('ROUTERS', ROUTERS);

export {
  MENU_ITEMS,
  ROUTERS
};