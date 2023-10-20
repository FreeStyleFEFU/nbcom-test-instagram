import React, { FC, ReactNode } from "react";

import styles from "./Container.module.scss";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  hasNotPaddingsOnMobile?: boolean;
  className?: string;
};
export const Container: FC<ContainerProps> = ({
  children,
  className,
  hasNotPaddingsOnMobile,
}) => (
  <div
    className={clsx(
      styles.root,
      hasNotPaddingsOnMobile && styles.hasNotMobilePaddings,
      className,
    )}
  >
    {children}
  </div>
);
