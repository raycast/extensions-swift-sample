import { Detail } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { pickColorThrowsEnum } from "swift:../swift";

type Color = {
  alpha: number;
  red: number;
  green: number;
  blue: number;
};

enum ColorError {
  unsupportedColor,
}

function getColorError(message: string): ColorError | undefined {
  return ColorError[message as keyof typeof ColorError];
}

export default function Command() {
  const { isLoading, data, error } = usePromise(async () => {
    try {
      const color: Color = await pickColorThrowsEnum("pink");
      return `Red: ${color.red}, Green: ${color.green}, Blue: ${color.blue}`;
    } catch (error) {
      const errorMessage = (error as Error).message;
      switch (getColorError(errorMessage)) {
        case ColorError.unsupportedColor:
          return "ColorError: unsupportedColor";
        default:
          throw error;
      }
    }
  });
  return <Detail isLoading={isLoading} markdown={data || (error && `Error: ${error.message}`) || "Loading..."} />;
}
