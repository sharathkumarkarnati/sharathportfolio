import {
  UseOverlayScrollbarsParams,
  UseOverlayScrollbarsInstance,
  useOverlayScrollbars,
} from "overlayscrollbars-react";
import { ReactNode, useState, useEffect } from "react";
import { useThemeContext } from "./ThemeContext";

export const OverlayScrollbar = ({
  scrollbarProps,
  className,
  children,
}: {
  scrollbarProps?: UseOverlayScrollbarsParams;
  className?: string;
  children: ReactNode;
}) => {
  const [setRef] = useScrollbarOverlay(scrollbarProps);

  return (
    <div className={className} ref={setRef}>
      {children}
    </div>
  );
};

const useScrollbarOverlay = <T extends HTMLElement | null | undefined>(
  props: UseOverlayScrollbarsParams = {}
): readonly [(ref: T) => void, UseOverlayScrollbarsInstance] => {
  const { theme } = useThemeContext();
  const [initialize, instance] = useOverlayScrollbars(
    mergeProps(props, theme === "light" ? "os-theme-dark" : "os-theme-light")
  );
  const [ref, setRef] = useState<T | null>(null);

  useEffect(() => {
    if (ref) {
      initialize(ref);
    }

    return () => instance()?.destroy();
  }, [initialize, instance, ref]);

  return [setRef, instance];
};

const mergeProps = (
  props: UseOverlayScrollbarsParams = {},
  theme: "os-theme-light" | "os-theme-dark" = "os-theme-light"
): UseOverlayScrollbarsParams => {
  return {
    ...props,
    options: {
      ...props.options,
      overflow: {
        x: "hidden",
        y: "scroll",
        ...(props.options || {}).overflow,
      },
      scrollbars: {
        autoHide: "leave",
        theme,
        clickScroll: true,
        ...(props.options || {}).scrollbars,
      },
    },
  };
};
