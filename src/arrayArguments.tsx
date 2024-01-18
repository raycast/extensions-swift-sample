import { Detail } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { greetings } from "swift:../swift";

export default function Command() {
  const { isLoading, data, error } = usePromise(async () => {
    return (await greetings(["Test Dummie", "Lorem Ipsum", "Json Query"])).join(" ");
  });
  return <Detail isLoading={isLoading} markdown={data || (error && `Error: ${error.message}`) || "Loading..."} />;
}
