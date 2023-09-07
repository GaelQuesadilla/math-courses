import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { MainLayout } from "../MainLayout";

describe("Main Layout component", () => {
  beforeEach(() => {
    render(
      <MainLayout>
        <header>
          <h1>Test page</h1>
        </header>
        <p>Test me</p>
      </MainLayout>
    );
  });

  test("must render children components", () => {
    expect(screen.getByText(/Test me/i)).toBeDefined();
  });
});
