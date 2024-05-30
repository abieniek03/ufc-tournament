import { Loading } from "./Loading";

export function LoadingPopup() {
  return (
    <div className="absolute left-0 top-1/2 z-20 h-screen w-full -translate-y-1/2 bg-background/85">
      <Loading />
    </div>
  );
}
