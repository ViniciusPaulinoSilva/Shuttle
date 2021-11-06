import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDarker: string;
      positive: string;
      negative: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      backgroundTertiary: string;
      backgroundQuaternary: string;
      backgroundQuinary: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
    };

    fontSize: {
      title: string;
      subtitle: string;
      input: string;
      label: string;
    };
  }
}
