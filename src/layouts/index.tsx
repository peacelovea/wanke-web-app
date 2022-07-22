import UnAccessible from '@/pages/403';
import Footer from './Footer';
import RightContent from './Header/Right';
import logo from './logo.svg';

export const layout = () => {
  return {
    logo,
    title: '鲁班',
    siderWidth: 200,
    navTheme: 'light',
    menuProps: {
      className: 'costumeMenu',
    },
    footerRender: () => <Footer />,
    rightContentRender: () => <RightContent />,
    unAccessible: <UnAccessible />,
    backgroundColor: '#adb8a517',
  };
};
