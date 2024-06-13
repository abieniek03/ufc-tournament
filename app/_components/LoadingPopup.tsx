import { Loading } from "./Loading";

export function LoadingPopup() {
  return (
    <div className="fixed left-0 top-1/2 z-20 h-full w-full -translate-y-1/2 bg-background/85">
      <Loading />
    </div>
  );
}
