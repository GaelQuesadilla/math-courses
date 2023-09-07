import { describe, test, expect } from "vitest";
import { ROUTES } from "../ROUTES.JS";

describe("Routes constant file", () => {
  test("All routes must have href string", () => {
    const keyRoutes = Object.keys(ROUTES);
    const invalidRoutes = keyRoutes.filter(
      (key) => typeof ROUTES[key].href !== typeof String()
    );

    expect(invalidRoutes).toStrictEqual([]);
  });

  test("All routes must be in upper case", () => {
    const keyRoutes = Object.keys(ROUTES);
    const invalidRoutes = keyRoutes.filter((key) => key !== key.toUpperCase());

    expect(invalidRoutes).toStrictEqual([]);
  });
});
