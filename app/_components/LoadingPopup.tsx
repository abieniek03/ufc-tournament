import { Loading } from "./Loading";

export function LoadingPopup() {
  return (
    <div className="absolute left-0 top-0 z-20 h-screen w-screen bg-background/85">
      <Loading />
    </div>
  );
}
