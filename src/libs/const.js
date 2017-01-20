/**
 * define global constant
 *
 * Created by Shiro on 16/12/20.
 */
const NAV = [
  {name: 'Home', link: '/index'},
  {name: 'Editor', link: '/editor'},
  {name: 'Project', link: '/project', children: [
    {name: 'RMSP', link: '/project/rmsp'},
    {name: 'test', link: '/project/'},
    {name: 'test', link: '/project/'}
  ]},
  {name: 'Css', link: '/css'}
];
export {NAV};

const TITLEMAP = {
  login: '登录'
};
export {TITLEMAP};

const MAP = {
  sex: ['女', '男']
};
export {MAP}