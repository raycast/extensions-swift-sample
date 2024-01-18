import { Detail } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { greeting } from "swift:../swift";

export default function Command() {
  const { isLoading, data, error } = usePromise(async () => {
    return greeting("Test Dummie", true);
  });
  return <Detail isLoading={isLoading} markdown={data || (error && `Error: ${error.message}`) || "Loading..."} />;
}
