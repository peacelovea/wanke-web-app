import React from 'react';
import cx from 'classnames';
import styles from './index.less';

interface FormTitleProps {
  title?: string;
}

function FormTitle({ title }: FormTitleProps) {
  return <div className={cx(styles.formTitle, 'tj-form-title ')}>{title} </div>;
}

export default FormTitle;
