import { Detail } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { optionals } from "swift:../swift";

export default function Command() {
  const { isLoading, data, error } = usePromise(async () => {
    const inputs = [undefined, "value"];
    const promises = inputs.map((input) => optionals(input));
    const results = await Promise.all(promises);
    const formattedResults = results
      .map((result, index) => {
        return `${inputs[index]} -> ${result}`;
      })
      .join("\n\r");
    return formattedResults;
  });
  return <Detail isLoading={isLoading} markdown={data || (error && `Error: ${error.message}`) || "Loading..."} />;
}
