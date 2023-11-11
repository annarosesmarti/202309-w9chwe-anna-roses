// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      mainFontColor: string;
      griffindorMainColor: string;
      griffindorSecondaryColor: string;
      slytherinMainColor: string;
      slytherinSecondaryColor: string;
      revenclawMainColor: string;
      revenclawSecondaryColor: string;
      hufflepuffMainColor: string;
      hufflepuffSecondaryColor: string;
    };
    typography: {
      mainFontFamily: string;
      titleSize: string;
      cardTitleSize: string;
      cardTextSize: string;
    };
  }
}

export default mainTheme;
