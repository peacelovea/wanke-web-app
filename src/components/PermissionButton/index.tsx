import { Button } from 'antd';
import type { ButtonProps } from 'antd/es/button/button';
import { useAccess, Link } from 'umi';

interface Props extends ButtonProps {
  componentType?: 'button' | 'a' | 'link' | string;
  accessId: string;
  hiddenType?: 'disappear' | 'disabled';
  to?: string;
}

const PermissionButton: React.FC<Props> = ({
  componentType: Component = 'button',
  accessId,
  hiddenType = 'disappear',
  ...resetProps
}) => {
  const { accessButtonFilter } = useAccess();
  const permission = accessButtonFilter(accessId);
  if (!permission && hiddenType === 'disappear') {
    return null;
  }
  if (Component === 'button') {
    return <Button {...resetProps} disabled={!permission} />;
  }
  if (Component === 'link') {
    return <Link {...(resetProps as any)} />;
  }
  return <Component {...resetProps} />;
};
export default PermissionButton;
