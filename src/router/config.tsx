import React from 'react';
import Home from '../pages/Home';
import RichText from '../pages/List';
import Content from '../pages/Content';

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
  };
});

const MENU_LIST = [
  {
    key: '/content',
    element: <Content />,
    hiddenInMenu: true
  },
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
    element: <RichText />,
    meta: {
      pageType: RICH_TEXT,
      code: 'SYSJJ'
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
            element: <RichText />,
            meta: {
              pageType: LIST,
              code: 'ZHXW'
            }
          },
          {
            label: '通知公告',
            key: '/news/notice',
            element: <RichText />,
            meta: {
              pageType: RICH_TEXT,
              code: 'TZGG'
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
            label: '科研人员',
            key: '/researchers/list',
            element: <RichText />,
            meta: {
              pageType: LIST,
              code: 'KYRY'
            }
          },
          {
            label: '人才情况',
            key: '/researchers/talented_info',
            element: <RichText />,
            meta: {
              pageType: LIST,
              code: 'RCQK'
            }
          },
          {
            label: '教师动态',
            key: '/researchers/teacher_info',
            element: <RichText />,
            meta: {
              pageType: RICH_TEXT,
              code: 'JSQK'
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
            element: <RichText />,
            meta: {
              pageType: RICH_TEXT,
              code: 'YJFX'
            }
          },
          {
            label: '研究成果',
            key: '/research/outcome',
            element: <RichText />,
            meta: {
              pageType: RICH_TEXT,
              code: 'YJCG'
            }
          },
          {
            label: '学术活动',
            key: '/research/academic_activity',
            element: <RichText />,
            meta: {
              pageType: RICH_TEXT,
              code: 'XSHD'
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
            label: '实验室管理制度',
            key: '/lab_manage/system',
            element: <RichText />,

            meta: {
              pageType: RICH_TEXT,
              code: 'SYSGLZD'
            }
          },
          {
            label: '实验室安全',
            key: '/lab_manage/security',
            element: <RichText />,
            meta: {
              pageType: RICH_TEXT,
              code: 'SYSAS'
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
            element: <RichText />,
            meta: {
              pageType: RICH_TEXT,
              code: 'XMHZ'
            }
          },
          {
            label: '联系我们',
            key: 'research_cooperation/contact',
            element: <RichText />,
            meta: {
              pageType: RICH_TEXT,
              code: 'LXWM'
            }
          }
        ]
      }
    ]
  }
];

const ROUTERS = flatten(MENU_LIST);
const MENU_ITEMS = MENU_LIST.filter((item) => !item.hiddenInMenu);

console.log('ROUTERS', ROUTERS);
console.log('MENU_ITEMS', MENU_ITEMS);


export {
  MENU_ITEMS,
  ROUTERS
};