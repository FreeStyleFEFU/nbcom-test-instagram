import { FC } from 'react';

import clsx from 'clsx';

import styles from './Spinner.module.scss';

type ClassKey = 'root' | 'circle';
type Size = 'default' | 'xsmall' | 'xlarge';
type SpinnerProps = {
    classes?: Classes<ClassKey>;
    size?: Size;
    isHidden?: boolean;
};
export const Spinner: FC<SpinnerProps> = (props) => {
    const { classes, isHidden, size = 'default' } = props;

    const SizeMap: Record<Size, number> = {
        xsmall: 8,
        default: 24,
        xlarge: 120,
    };

    const iconSize = SizeMap[size];

    return (
        <div className={clsx(styles.root, isHidden && styles.hidden, classes?.root)}>
            <svg
                width={iconSize}
                height={iconSize}
                className={styles.svg}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle className={clsx(styles.circle, classes?.circle)} cx="50" cy="50" r="45" />
            </svg>
        </div>
    );
};
