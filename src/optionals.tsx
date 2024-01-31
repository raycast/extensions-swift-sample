import { Detail } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { optionals } from "swift:../swift";

export default function Command() {
  const { isLoading, data, error } = usePromise(async () => {
    const inputs = [undefined, null, "value"];
    const promises = inputs.map((input) => optionals(input)).concat(optionals());
    const results = await Promise.all(promises);
    const formattedResults = results
      .map((result, index) => {
        const inputLabel = index < inputs.length ? inputs[index] : "no argument";
        return `${inputLabel} -> ${result}`;
      })
      .join("\n\r");
    return formattedResults;
  });
  return <Detail isLoading={isLoading} markdown={data || (error && `Error: ${error.message}`) || "Loading..."} />;
}
