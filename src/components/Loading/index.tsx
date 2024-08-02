import { Loader } from '../Icons';

import styles from './styles.module.scss';

interface IProps {
    isLoading: boolean;
}

const Loading = ({ isLoading }: IProps) => {
  if (!isLoading) return null;

  return (
    <div className={styles.loading}>
      <div className={styles.spinner}>
        <Loader/>
      </div>
    </div>
  );
}

export default Loading