import React, { ImgHTMLAttributes } from "react";

import clsx from "clsx";

type ClassKey = "picture" | "image";
type PictureProps = {
  src?: string;
  src2x?: string;
  alt?: string;
  classes?: Classes<ClassKey>;
} & ImgHTMLAttributes<HTMLImageElement>;
export const Picture: React.FunctionComponent<PictureProps> = (props) => {
  const { src, src2x, alt, className, classes, ...otherProps } = props;

  if (src === undefined) {
    console.warn("Image component must have src or sources property");
    return null;
  }

  return (
    <picture className={classes?.picture}>
      <img
        src={src}
        srcSet={src2x ? `${src2x} 2x` : undefined}
        alt={alt ?? ""}
        className={clsx(className, classes?.image)}
        {...otherProps}
      />
    </picture>
  );
};
