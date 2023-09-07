import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { useTranslation } from "react-i18next";
import { LangProvider, globals } from "../LangProvider";

describe("Lang Provider ", () => {
  beforeEach(() => {
    const TestApp = () => {
      const [t, i18n] = useTranslation("global");
      return (
        <>
          <LangProvider>
            <p>{t("test.value")}</p>
          </LangProvider>
        </>
      );
    };

    render(<TestApp />);
  });

  test("must start with Spanish language", () => {
    expect(screen.getByText(globals.global_es.test.value)).toBeDefined();
  });
});
