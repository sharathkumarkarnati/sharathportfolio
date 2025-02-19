import { useSwipeable } from "react-swipeable";

type Props = {
  children: React.ReactNode;
  onSwipe: (delta: number) => void;
};

export const SwipableContainer = ({ children, onSwipe }: Props) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipe(1),
    onSwipedRight: () => onSwipe(-1),
    trackMouse: true,
    trackTouch: true,
  });

  return (
    <div {...handlers} className="flex flex-1 self-stretch w-full h-full">
      {children}
    </div>
  );
};
