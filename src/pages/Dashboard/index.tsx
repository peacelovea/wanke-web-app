import { Col, Row } from 'antd';
import styles from './index.less';

function Dashboard() {
  const projects = [
    {
      title: '哪吒',
      url: 'https://nezha.in.zhihu.com',
      owner: '庄素丽，李鹯峣',
    },
    {
      title: '天玑',
      url: 'https://tianji.in.zhihu.com',
      owner: '杨飞',
    },
    {
      title: '天璇',
      url: 'https://tianxuan.in.zhihu.com',
      owner: '杨飞',
    },
    {
      title: '工单 zticket',
      url: 'http://zticket.in.zhihu.com/tools',
      owner: '李鹯峣',
    },
    {
      title: '用户积分',
      url: 'https://isuda.in.zhihu.com/app/ade937e60615',
      owner: '李鹯峣',
    },
    {
      title: '知乎舆情',
      url: 'http://hawk.in.zhihu.com',
      owner: '李鹯峣',
    },
    {
      title: '众裁运营平台',
      url: 'https://ops.in.zhihu.com/#/agora/tools',
      owner: '杨元元',
    },
  ];

  const tools = [
    {
      title: '全量内容管理',
      url: 'https://zticket.in.zhihu.com/contents',
      owner: '庄素丽',
    },
    {
      title: '批处理',
      url: 'https://zticket.in.zhihu.com/tools/batch_operate',
      owner: '庄素丽',
    },
    {
      title: '用户信息行为查询',
      url: 'https://zticket.in.zhihu.com/tools/member_detail',
      owner: '李鹯峣',
    },
    {
      title: '负向处置查撤',
      url: 'https://zticket.in.zhihu.com/dispose_log',
      owner: '李鹯峣',
    },
    {
      title: '图片水印解析',
      url: 'http://lib.zhdocs.io/lib-seoiyan.html',
      owner: '庄素丽',
    },
  ];

  const configs = [
    {
      title: '阿波罗 Apollo',
      url: 'http://config.in.zhihu.com/config.html',
      owner: '史斌 杨飞',
    },
    {
      title: '离线策略配置',
      url: 'https://zticket.in.zhihu.com/jobs',
      owner: '张宝哲，史斌',
    },
    {
      title: '统一权限管理',
      url: 'https://uac.in.zhihu.com/perm/app',
      owner: '张津铭，张宝哲',
    },
  ];

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.box}>
        <div className={styles.subTitle}>常用系统 & 工具</div>
        <Row gutter={16}>
          {projects.map(({ title, url, owner }) => (
            <Col>
              <a className={styles.card} href={url} target="_blank">
                <h2>{title}</h2>
                <p className={styles.small}>负责人：{owner}</p>
                <div className={styles.goCorner}>
                  <div className={styles.goArrow}>→</div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </div>

      <div className={styles.subTitle}>常用工具</div>
      <Row gutter={16}>
        {tools.map(({ title, url, owner }) => (
          <Col>
            <a className={styles.card} href={url} target="_blank">
              <h2>{title}</h2>
              <p className={styles.small}>负责人：{owner}</p>
              <div className={styles.goCorner}>
                <div className={styles.goArrow}>→</div>
              </div>
            </a>
          </Col>
        ))}
      </Row>

      <div className={styles.subTitle}>配置管理</div>
      <Row gutter={16}>
        {configs.map(({ title, url, owner }) => (
          <Col>
            <a className={styles.card} href={url} target="_blank">
              <h2>{title}</h2>
              <p className={styles.small}>负责人：{owner}</p>
              <div className={styles.goCorner}>
                <div className={styles.goArrow}>→</div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Dashboard;
