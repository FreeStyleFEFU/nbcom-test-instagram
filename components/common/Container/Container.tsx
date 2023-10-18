import React, { FC, FunctionComponent, ReactNode } from "react";

import styles from "./Container.module.scss";

type ContainerProps = {
  children: ReactNode;
};
export const Container: FC<ContainerProps> = ({ children }) => (
  <div className={styles.root}>{children}</div>
);
