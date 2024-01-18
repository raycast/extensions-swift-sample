import { Detail } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { delayedGreeting } from "swift:../swift";

export default function Command() {
  const { isLoading, data, error } = usePromise(async () => {
    return delayedGreeting("Test Dummie", 3);
  });
  return <Detail isLoading={isLoading} markdown={data || (error && `Error: ${error.message}`) || "Loading..."} />;
}
