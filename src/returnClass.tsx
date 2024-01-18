import { Detail } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { pickColorThrowsString } from "swift:../swift";

type Color = {
  alpha: number;
  red: number;
  green: number;
  blue: number;
};

export default function Command() {
  const { isLoading, data, error } = usePromise(async () => {
    const color: Color = await pickColorThrowsString("red");
    return `Red component: ${color.red}, Green component: ${color.green}, Blue component: ${color.blue}`;
  });
  return <Detail isLoading={isLoading} markdown={data || (error && `Error: ${error.message}`) || "Loading..."} />;
}
