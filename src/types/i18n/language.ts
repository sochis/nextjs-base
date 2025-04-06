export type Language = "en" | "ja";

export interface LangProps {
  lang: Language;
}

export interface I18nProps {
  product: {
    title: string;
  };
  features: {
    home: {
      description1: string;
      description2: string;
      button1: string;
      button2: string;
      link1: string;
      link2: string;
      link3: string;
    };
  };
  components: {
    theme: {
      light: string;
      dark: string;
      device: string;
    };
  };
}
