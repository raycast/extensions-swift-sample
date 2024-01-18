import { Detail } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { noop } from "swift:../swift";

export default function Command() {
  const { isLoading, data, error } = usePromise(async () => {
    await noop();
    return "Swift method executed successfully";
  });
  return <Detail isLoading={isLoading} markdown={data || (error && `Error: ${error.message}`) || "Loading..."} />;
}
