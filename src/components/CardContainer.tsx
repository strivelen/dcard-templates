import { PropsWithChildren } from "react";

export default function CardContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center items-center py-14">{children}</div>
  );
}
